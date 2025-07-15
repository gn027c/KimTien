# Kim Tiền - Comprehensive Error Handling Demo

This application demonstrates a comprehensive error handling strategy including:

## Features

### 🛡️ Error Handling
- **Global Error Handler**: Centralized error management with severity levels
- **Error Boundary**: React error boundary for catching component errors
- **User-friendly Messages**: Localized error messages in Vietnamese
- **Error Logging**: Local storage and monitoring service integration

### 🌐 Network & API Handling
- **Retry Logic**: Automatic retry with exponential backoff
- **Timeout Handling**: Configurable request timeouts
- **HTTP Error Mapping**: Specific handling for different HTTP status codes
- **Request Cancellation**: Abort controllers for cleanup

### ✅ Form Validation
- **Real-time Validation**: Validate as user types
- **Custom Rules**: Flexible validation rule system
- **Vietnamese Messages**: Localized validation messages
- **Visual Feedback**: Clear error and success indicators

### 📱 Offline Support
- **Service Worker**: Cache resources for offline use
- **Data Persistence**: Save form data when offline
- **Auto-sync**: Sync data when connection restored
- **Offline Indicators**: Clear offline/online status

### 🎨 User Experience
- **Toast Notifications**: Non-intrusive error messages
- **Loading States**: Clear loading indicators
- **Graceful Degradation**: App works even with errors
- **Accessibility**: Screen reader friendly error messages

## Error Types Handled

- **Network Errors**: Connection failures, timeouts
- **API Errors**: HTTP status codes, server errors
- **Validation Errors**: Form input validation
- **Authentication Errors**: Login/session issues
- **Permission Errors**: Access control
- **Offline Errors**: No internet connection
- **Unknown Errors**: Unexpected errors

## Usage Examples

### Basic Error Handling
```typescript
import { errorHandler, AppErrorClass, ErrorCodes } from './utils/errorHandler';

try {
  // Your code here
} catch (error) {
  errorHandler.handleError(
    new AppErrorClass(
      ErrorCodes.API_ERROR,
      'Something went wrong',
      'medium',
      { context: 'additional info' }
    )
  );
}
```

### API Client with Error Handling
```typescript
import { apiClient } from './utils/apiClient';

const response = await apiClient.get('/api/data');
if (response.success) {
  // Handle success
} else {
  // Error already handled by apiClient
}
```

### Form Validation
```typescript
import { useFormValidation, commonSchemas } from './utils/validation';

const { validateForm } = useFormValidation(commonSchemas.contact);
const result = validateForm(formData);
```

### Offline Support
```typescript
import { useOfflineSupport } from './hooks/useOfflineSupport';

const { isOnline, saveOfflineData, syncData } = useOfflineSupport();
```

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

The application includes comprehensive error handling that works in both development and production environments.
