import { errorHandler, AppErrorClass, ErrorCodes } from './errorHandler';

// API response types
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  success: boolean;
  message?: string;
}

export interface ApiError {
  status: number;
  message: string;
  code?: string;
  details?: any;
}

// API client configuration
interface ApiClientConfig {
  baseURL: string;
  timeout: number;
  retries: number;
  retryDelay: number;
}

export class ApiClient {
  private config: ApiClientConfig;
  private abortControllers: Map<string, AbortController> = new Map();

  constructor(config: Partial<ApiClientConfig> = {}) {
    this.config = {
      baseURL: '/api',
      timeout: 10000,
      retries: 3,
      retryDelay: 1000,
      ...config
    };
  }

  // Main request method with comprehensive error handling
  async request<T = any>(
    endpoint: string,
    options: RequestInit & { 
      retries?: number;
      timeout?: number;
      skipErrorHandling?: boolean;
    } = {}
  ): Promise<ApiResponse<T>> {
    const {
      retries = this.config.retries,
      timeout = this.config.timeout,
      skipErrorHandling = false,
      ...fetchOptions
    } = options;

    const url = `${this.config.baseURL}${endpoint}`;
    const requestId = this.generateRequestId();

    // Create abort controller for timeout
    const controller = new AbortController();
    this.abortControllers.set(requestId, controller);

    // Set timeout
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);

    try {
      const response = await this.executeWithRetry(
        () => this.fetchWithErrorHandling(url, {
          ...fetchOptions,
          signal: controller.signal
        }),
        retries
      );

      clearTimeout(timeoutId);
      this.abortControllers.delete(requestId);

      return await this.handleResponse<T>(response);

    } catch (error) {
      clearTimeout(timeoutId);
      this.abortControllers.delete(requestId);

      if (!skipErrorHandling) {
        this.handleRequestError(error as Error, url, fetchOptions);
      }

      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  // Execute request with retry logic
  private async executeWithRetry<T>(
    operation: () => Promise<T>,
    retries: number
  ): Promise<T> {
    let lastError: Error;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;

        // Don't retry on certain errors
        if (this.shouldNotRetry(error as Error)) {
          throw error;
        }

        // Don't retry on last attempt
        if (attempt === retries) {
          throw error;
        }

        // Wait before retry with exponential backoff
        await this.delay(this.config.retryDelay * Math.pow(2, attempt));
      }
    }

    throw lastError!;
  }

  // Enhanced fetch with error handling
  private async fetchWithErrorHandling(
    url: string,
    options: RequestInit
  ): Promise<Response> {
    // Check if offline
    if (!navigator.onLine) {
      throw new AppErrorClass(
        ErrorCodes.OFFLINE_ERROR,
        'No internet connection available',
        'medium',
        { url, offline: true }
      );
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      });

      // Handle HTTP errors
      if (!response.ok) {
        await this.handleHttpError(response, url);
      }

      return response;

    } catch (error) {
      // Handle network errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new AppErrorClass(
          ErrorCodes.NETWORK_ERROR,
          'Network request failed',
          'medium',
          { url, originalError: error.message }
        );
      }

      // Handle timeout errors
      if (error instanceof Error && error.name === 'AbortError') {
        throw new AppErrorClass(
          ErrorCodes.TIMEOUT_ERROR,
          'Request timed out',
          'medium',
          { url, timeout: this.config.timeout }
        );
      }

      throw error;
    }
  }

  // Handle HTTP error responses
  private async handleHttpError(response: Response, url: string): Promise<never> {
    let errorDetails: any = {};
    
    try {
      errorDetails = await response.json();
    } catch {
      // If response is not JSON, use status text
      errorDetails = { message: response.statusText };
    }

    const context = {
      url,
      status: response.status,
      statusText: response.statusText,
      details: errorDetails
    };

    switch (response.status) {
      case 400:
        throw new AppErrorClass(
          ErrorCodes.VALIDATION_ERROR,
          errorDetails.message || 'Invalid request data',
          'low',
          context
        );

      case 401:
        throw new AppErrorClass(
          ErrorCodes.AUTHENTICATION_ERROR,
          'Authentication required',
          'medium',
          context
        );

      case 403:
        throw new AppErrorClass(
          ErrorCodes.PERMISSION_ERROR,
          'Access denied',
          'medium',
          context
        );

      case 404:
        throw new AppErrorClass(
          ErrorCodes.NOT_FOUND,
          'Resource not found',
          'low',
          context
        );

      case 429:
        throw new AppErrorClass(
          ErrorCodes.API_ERROR,
          'Too many requests',
          'medium',
          context
        );

      case 500:
      case 502:
      case 503:
      case 504:
        throw new AppErrorClass(
          ErrorCodes.SERVER_ERROR,
          'Server error occurred',
          'high',
          context
        );

      default:
        throw new AppErrorClass(
          ErrorCodes.API_ERROR,
          `HTTP ${response.status}: ${errorDetails.message || response.statusText}`,
          'medium',
          context
        );
    }
  }

  // Handle response parsing
  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    try {
      const data = await response.json();
      return {
        success: true,
        data,
        message: data.message
      };
    } catch (error) {
      // If response is not JSON, return success with no data
      return {
        success: true,
        data: undefined as T,
        message: 'Request completed successfully'
      };
    }
  }

  // Handle request errors
  private handleRequestError(error: Error, url: string, options: RequestInit): void {
    const context = {
      url,
      method: options.method || 'GET',
      headers: options.headers,
      body: options.body
    };

    if (error instanceof AppErrorClass) {
      errorHandler.handleError(error);
    } else {
      errorHandler.handleError(
        new AppErrorClass(
          ErrorCodes.API_ERROR,
          `API request failed: ${error.message}`,
          'medium',
          context
        )
      );
    }
  }

  // Utility methods
  private shouldNotRetry(error: Error): boolean {
    if (error instanceof AppErrorClass) {
      return [
        ErrorCodes.AUTHENTICATION_ERROR,
        ErrorCodes.PERMISSION_ERROR,
        ErrorCodes.VALIDATION_ERROR,
        ErrorCodes.NOT_FOUND
      ].includes(error.code as ErrorCodes);
    }
    return false;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private generateRequestId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Convenience methods
  async get<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined
    });
  }

  async put<T>(endpoint: string, data?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined
    });
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }

  // Cancel all pending requests
  cancelAllRequests(): void {
    this.abortControllers.forEach(controller => controller.abort());
    this.abortControllers.clear();
  }
}

// Export default instance
export const apiClient = new ApiClient();