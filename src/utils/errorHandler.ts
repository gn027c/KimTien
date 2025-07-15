// Error types and interfaces
export interface AppError {
  code: string;
  message: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  context?: Record<string, any>;
  stack?: string;
}

export interface ErrorLogEntry extends AppError {
  id: string;
  userAgent: string;
  url: string;
  userId?: string;
}

// Error codes enum
export enum ErrorCodes {
  NETWORK_ERROR = 'NETWORK_ERROR',
  API_ERROR = 'API_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  PERMISSION_ERROR = 'PERMISSION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  OFFLINE_ERROR = 'OFFLINE_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

// Custom error classes
export class AppErrorClass extends Error {
  public readonly code: string;
  public readonly severity: AppError['severity'];
  public readonly context?: Record<string, any>;
  public readonly timestamp: Date;

  constructor(
    code: string,
    message: string,
    severity: AppError['severity'] = 'medium',
    context?: Record<string, any>
  ) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.severity = severity;
    this.context = context;
    this.timestamp = new Date();
  }
}

// Error handler class
export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorLogEntry[] = [];
  private isOnline = navigator.onLine;

  private constructor() {
    this.setupOnlineListener();
    this.setupGlobalErrorHandlers();
  }

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  // Setup online/offline detection
  private setupOnlineListener(): void {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.flushErrorQueue();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  // Setup global error handlers
  private setupGlobalErrorHandlers(): void {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(
        new AppErrorClass(
          ErrorCodes.UNKNOWN_ERROR,
          `Unhandled promise rejection: ${event.reason}`,
          'high',
          { reason: event.reason }
        )
      );
    });

    // Handle JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError(
        new AppErrorClass(
          ErrorCodes.UNKNOWN_ERROR,
          `JavaScript error: ${event.message}`,
          'high',
          {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            stack: event.error?.stack
          }
        )
      );
    });
  }

  // Main error handling method
  public handleError(error: Error | AppErrorClass, showToUser = true): void {
    const appError = this.normalizeError(error);
    const logEntry = this.createLogEntry(appError);

    // Log error
    this.logError(logEntry);

    // Show user-friendly message if needed
    if (showToUser) {
      this.showUserError(appError);
    }

    // Send to analytics/monitoring service
    this.sendToMonitoring(logEntry);
  }

  // Normalize different error types
  private normalizeError(error: Error | AppErrorClass): AppError {
    if (error instanceof AppErrorClass) {
      return {
        code: error.code,
        message: error.message,
        severity: error.severity,
        timestamp: error.timestamp,
        context: error.context,
        stack: error.stack
      };
    }

    // Handle network errors
    if (error.message.includes('fetch') || error.message.includes('network')) {
      return {
        code: ErrorCodes.NETWORK_ERROR,
        message: 'Network connection failed',
        severity: 'medium',
        timestamp: new Date(),
        stack: error.stack
      };
    }

    // Default error normalization
    return {
      code: ErrorCodes.UNKNOWN_ERROR,
      message: error.message || 'An unexpected error occurred',
      severity: 'medium',
      timestamp: new Date(),
      stack: error.stack
    };
  }

  // Create log entry
  private createLogEntry(error: AppError): ErrorLogEntry {
    return {
      ...error,
      id: this.generateId(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getCurrentUserId()
    };
  }

  // Log error to console and storage
  private logError(error: ErrorLogEntry): void {
    // Console logging with appropriate level
    const logMethod = this.getLogMethod(error.severity);
    logMethod(`[${error.code}] ${error.message}`, error);

    // Store in localStorage for offline scenarios
    try {
      const storedErrors = JSON.parse(localStorage.getItem('errorLogs') || '[]');
      storedErrors.push(error);
      
      // Keep only last 50 errors
      if (storedErrors.length > 50) {
        storedErrors.splice(0, storedErrors.length - 50);
      }
      
      localStorage.setItem('errorLogs', JSON.stringify(storedErrors));
    } catch (e) {
      console.warn('Failed to store error in localStorage:', e);
    }
  }

  // Show user-friendly error message
  private showUserError(error: AppError): void {
    const userMessage = this.getUserFriendlyMessage(error);
    
    // Create and show toast notification
    this.showToast(userMessage, error.severity);
  }

  // Get user-friendly error messages
  private getUserFriendlyMessage(error: AppError): string {
    const messages: Record<string, string> = {
      [ErrorCodes.NETWORK_ERROR]: 'Không thể kết nối mạng. Vui lòng kiểm tra kết nối internet.',
      [ErrorCodes.API_ERROR]: 'Có lỗi xảy ra với dịch vụ. Vui lòng thử lại sau.',
      [ErrorCodes.VALIDATION_ERROR]: 'Thông tin nhập vào không hợp lệ. Vui lòng kiểm tra lại.',
      [ErrorCodes.AUTHENTICATION_ERROR]: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.',
      [ErrorCodes.PERMISSION_ERROR]: 'Bạn không có quyền thực hiện hành động này.',
      [ErrorCodes.NOT_FOUND]: 'Không tìm thấy thông tin yêu cầu.',
      [ErrorCodes.SERVER_ERROR]: 'Lỗi máy chủ. Chúng tôi đang khắc phục sự cố.',
      [ErrorCodes.TIMEOUT_ERROR]: 'Yêu cầu mất quá nhiều thời gian. Vui lòng thử lại.',
      [ErrorCodes.OFFLINE_ERROR]: 'Bạn đang offline. Một số tính năng có thể không khả dụng.',
      [ErrorCodes.UNKNOWN_ERROR]: 'Có lỗi không mong muốn xảy ra. Vui lòng thử lại.'
    };

    return messages[error.code] || messages[ErrorCodes.UNKNOWN_ERROR];
  }

  // Show toast notification
  private showToast(message: string, severity: AppError['severity']): void {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
    
    // Set colors based on severity
    const colors = {
      low: 'bg-blue-500 text-white',
      medium: 'bg-yellow-500 text-white',
      high: 'bg-orange-500 text-white',
      critical: 'bg-red-500 text-white'
    };
    
    toast.className += ` ${colors[severity]}`;
    toast.innerHTML = `
      <div class="flex items-center">
        <div class="flex-1">${message}</div>
        <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
          ×
        </button>
      </div>
    `;

    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.classList.remove('translate-x-full');
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
      toast.classList.add('translate-x-full');
      setTimeout(() => toast.remove(), 300);
    }, 5000);
  }

  // Send error to monitoring service
  private sendToMonitoring(error: ErrorLogEntry): void {
    if (!this.isOnline) {
      this.errorQueue.push(error);
      return;
    }

    // In a real app, you would send to services like Sentry, LogRocket, etc.
    // For demo purposes, we'll just log it
    console.log('Sending to monitoring service:', error);
  }

  // Flush error queue when back online
  private flushErrorQueue(): void {
    while (this.errorQueue.length > 0) {
      const error = this.errorQueue.shift();
      if (error) {
        this.sendToMonitoring(error);
      }
    }
  }

  // Utility methods
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private getCurrentUserId(): string | undefined {
    // In a real app, get from auth context
    return localStorage.getItem('userId') || undefined;
  }

  private getLogMethod(severity: AppError['severity']): typeof console.log {
    switch (severity) {
      case 'low': return console.info;
      case 'medium': return console.warn;
      case 'high': return console.error;
      case 'critical': return console.error;
      default: return console.log;
    }
  }
}

// Export singleton instance
export const errorHandler = ErrorHandler.getInstance();