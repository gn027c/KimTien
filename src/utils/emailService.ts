import emailjs from '@emailjs/browser';
import { emailConfig } from './emailConfig';

// Initialize EmailJS with public key
const initEmailJS = (): void => {
  emailjs.init(emailConfig.publicKey);
};

// Interface for email parameters
export interface EmailParams {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  product?: string;
}

/**
 * Send an email using EmailJS
 * @param params Email parameters
 * @returns Promise with the result
 */
export const sendEmail = async (params: EmailParams): Promise<emailjs.EmailJSResponseStatus> => {
  try {
    // Initialize EmailJS if not already initialized
    initEmailJS();
    
    // Prepare template parameters
    const templateParams = {
      from_name: params.name,
      from_email: params.email,
      from_phone: params.phone || 'Không có',
      message: params.message,
      subject: params.subject || 'Yêu cầu từ website',
      product: params.product || 'Không có',
    };

    // Send email using EmailJS
    const result = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams
    );
    
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

/**
 * Send a quote request email
 * @param params Email parameters with product information
 * @returns Promise with the result
 */
export const sendQuoteRequest = async (params: EmailParams): Promise<emailjs.EmailJSResponseStatus> => {
  return sendEmail({
    ...params,
    subject: `Yêu cầu báo giá: ${params.product || 'Sản phẩm in ấn'}`,
  });
};

export default {
  sendEmail,
  sendQuoteRequest,
}; 