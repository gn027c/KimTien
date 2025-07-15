import { errorHandler, AppErrorClass, ErrorCodes } from './errorHandler';

// Validation rule types
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  phone?: boolean;
  url?: boolean;
  min?: number;
  max?: number;
  custom?: (value: any) => boolean | string;
}

export interface ValidationError {
  field: string;
  message: string;
  value: any;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// Validation schema type
export type ValidationSchema = Record<string, ValidationRule>;

// Validation messages
const defaultMessages = {
  required: 'Trường này là bắt buộc',
  minLength: 'Tối thiểu {min} ký tự',
  maxLength: 'Tối đa {max} ký tự',
  email: 'Email không hợp lệ',
  phone: 'Số điện thoại không hợp lệ',
  url: 'URL không hợp lệ',
  min: 'Giá trị tối thiểu là {min}',
  max: 'Giá trị tối đa là {max}',
  pattern: 'Định dạng không hợp lệ'
};

export class Validator {
  private schema: ValidationSchema;
  private customMessages: Record<string, string>;

  constructor(schema: ValidationSchema, customMessages: Record<string, string> = {}) {
    this.schema = schema;
    this.customMessages = { ...defaultMessages, ...customMessages };
  }

  // Validate data against schema
  validate(data: Record<string, any>): ValidationResult {
    const errors: ValidationError[] = [];

    try {
      for (const [field, rule] of Object.entries(this.schema)) {
        const value = data[field];
        const fieldErrors = this.validateField(field, value, rule);
        errors.push(...fieldErrors);
      }

      const result: ValidationResult = {
        isValid: errors.length === 0,
        errors
      };

      // Log validation errors if any
      if (!result.isValid) {
        errorHandler.handleError(
          new AppErrorClass(
            ErrorCodes.VALIDATION_ERROR,
            `Validation failed for ${errors.length} field(s)`,
            'low',
            { errors, data }
          ),
          false // Don't show to user, form will handle display
        );
      }

      return result;

    } catch (error) {
      errorHandler.handleError(
        new AppErrorClass(
          ErrorCodes.VALIDATION_ERROR,
          `Validation process failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
          'medium',
          { schema: this.schema, data }
        )
      );

      return {
        isValid: false,
        errors: [{
          field: 'general',
          message: 'Validation process failed',
          value: null
        }]
      };
    }
  }

  // Validate single field
  private validateField(field: string, value: any, rule: ValidationRule): ValidationError[] {
    const errors: ValidationError[] = [];

    try {
      // Required validation
      if (rule.required && this.isEmpty(value)) {
        errors.push({
          field,
          message: this.getMessage('required'),
          value
        });
        return errors; // Skip other validations if required field is empty
      }

      // Skip other validations if field is empty and not required
      if (this.isEmpty(value)) {
        return errors;
      }

      // String validations
      if (typeof value === 'string') {
        // Min length
        if (rule.minLength && value.length < rule.minLength) {
          errors.push({
            field,
            message: this.getMessage('minLength').replace('{min}', rule.minLength.toString()),
            value
          });
        }

        // Max length
        if (rule.maxLength && value.length > rule.maxLength) {
          errors.push({
            field,
            message: this.getMessage('maxLength').replace('{max}', rule.maxLength.toString()),
            value
          });
        }

        // Email validation
        if (rule.email && !this.isValidEmail(value)) {
          errors.push({
            field,
            message: this.getMessage('email'),
            value
          });
        }

        // Phone validation
        if (rule.phone && !this.isValidPhone(value)) {
          errors.push({
            field,
            message: this.getMessage('phone'),
            value
          });
        }

        // URL validation
        if (rule.url && !this.isValidUrl(value)) {
          errors.push({
            field,
            message: this.getMessage('url'),
            value
          });
        }

        // Pattern validation
        if (rule.pattern && !rule.pattern.test(value)) {
          errors.push({
            field,
            message: this.getMessage('pattern'),
            value
          });
        }
      }

      // Number validations
      if (typeof value === 'number') {
        // Min value
        if (rule.min !== undefined && value < rule.min) {
          errors.push({
            field,
            message: this.getMessage('min').replace('{min}', rule.min.toString()),
            value
          });
        }

        // Max value
        if (rule.max !== undefined && value > rule.max) {
          errors.push({
            field,
            message: this.getMessage('max').replace('{max}', rule.max.toString()),
            value
          });
        }
      }

      // Custom validation
      if (rule.custom) {
        const customResult = rule.custom(value);
        if (customResult !== true) {
          errors.push({
            field,
            message: typeof customResult === 'string' ? customResult : 'Custom validation failed',
            value
          });
        }
      }

    } catch (error) {
      errors.push({
        field,
        message: 'Validation error occurred',
        value
      });

      errorHandler.handleError(
        new AppErrorClass(
          ErrorCodes.VALIDATION_ERROR,
          `Field validation failed for ${field}: ${error instanceof Error ? error.message : 'Unknown error'}`,
          'low',
          { field, value, rule }
        ),
        false
      );
    }

    return errors;
  }

  // Utility methods
  private isEmpty(value: any): boolean {
    return value === null || 
           value === undefined || 
           value === '' || 
           (Array.isArray(value) && value.length === 0) ||
           (typeof value === 'object' && Object.keys(value).length === 0);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private isValidPhone(phone: string): boolean {
    // Vietnamese phone number pattern
    const phoneRegex = /^(\+84|84|0)(3|5|7|8|9)([0-9]{8})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  private getMessage(key: string): string {
    return this.customMessages[key] || defaultMessages[key] || 'Validation failed';
  }
}

// Form validation hook for React components
export function useFormValidation(schema: ValidationSchema) {
  const validator = new Validator(schema);

  const validateForm = (data: Record<string, any>): ValidationResult => {
    return validator.validate(data);
  };

  const validateField = (field: string, value: any): ValidationError[] => {
    const fieldSchema = { [field]: schema[field] };
    const fieldValidator = new Validator(fieldSchema);
    const result = fieldValidator.validate({ [field]: value });
    return result.errors;
  };

  return {
    validateForm,
    validateField
  };
}

// Common validation schemas
export const commonSchemas = {
  contact: {
    firstName: { required: true, minLength: 2, maxLength: 50 },
    lastName: { required: true, minLength: 2, maxLength: 50 },
    email: { required: true, email: true },
    phone: { required: true, phone: true },
    company: { required: true, minLength: 2, maxLength: 100 },
    message: { required: true, minLength: 10, maxLength: 1000 }
  },
  
  login: {
    email: { required: true, email: true },
    password: { required: true, minLength: 6 }
  },
  
  registration: {
    email: { required: true, email: true },
    password: { 
      required: true, 
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      custom: (value: string) => {
        if (!/(?=.*[a-z])/.test(value)) return 'Mật khẩu phải có ít nhất 1 chữ thường';
        if (!/(?=.*[A-Z])/.test(value)) return 'Mật khẩu phải có ít nhất 1 chữ hoa';
        if (!/(?=.*\d)/.test(value)) return 'Mật khẩu phải có ít nhất 1 số';
        if (!/(?=.*[@$!%*?&])/.test(value)) return 'Mật khẩu phải có ít nhất 1 ký tự đặc biệt';
        return true;
      }
    },
    confirmPassword: { 
      required: true,
      custom: (value: string, data: any) => {
        return value === data?.password || 'Mật khẩu xác nhận không khớp';
      }
    }
  }
};