import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import { errorHandler, AppErrorClass, ErrorCodes } from '../utils/errorHandler';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: Date.now().toString(36) + Math.random().toString(36).substr(2)
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });

    // Log error through error handler
    const appError = new AppErrorClass(
      ErrorCodes.UNKNOWN_ERROR,
      `React Error Boundary: ${error.message}`,
      'critical',
      {
        componentStack: errorInfo.componentStack,
        errorBoundary: true,
        errorId: this.state.errorId
      }
    );

    errorHandler.handleError(appError, false);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            {/* Error Icon */}
            <div className="mb-6">
              <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                <AlertTriangle className="h-10 w-10 text-red-500" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Có lỗi xảy ra
            </h1>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ứng dụng gặp sự cố không mong muốn. Chúng tôi đã ghi nhận lỗi và sẽ khắc phục sớm nhất.
            </p>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
                <div className="flex items-center mb-2">
                  <Bug className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Chi tiết lỗi:</span>
                </div>
                <div className="text-xs text-gray-600 font-mono bg-white p-2 rounded border overflow-auto max-h-32">
                  {this.state.error.message}
                </div>
                {this.state.errorId && (
                  <div className="text-xs text-gray-500 mt-2">
                    ID: {this.state.errorId}
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Thử Lại
              </button>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={this.handleGoHome}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Trang Chủ
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Tải Lại
                </button>
              </div>
            </div>

            {/* Support Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Nếu vấn đề vẫn tiếp tục, vui lòng liên hệ hỗ trợ tại{' '}
                <a 
                  href="mailto:kimtien@kimtienposm.com" 
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  kimtien@kimtienposm.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for wrapping components with error boundary
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}

// Hook for handling errors in functional components
export function useErrorHandler() {
  const handleError = React.useCallback((error: Error, context?: Record<string, any>) => {
    const appError = new AppErrorClass(
      ErrorCodes.UNKNOWN_ERROR,
      error.message,
      'medium',
      { ...context, hookError: true }
    );
    
    errorHandler.handleError(appError);
  }, []);

  return { handleError };
}