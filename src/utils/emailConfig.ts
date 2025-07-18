// EmailJS configuration
interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

// Store EmailJS credentials from environment variables
// Create a .env file in the project root with these variables:
// VITE_EMAILJS_SERVICE_ID=your_service_id
// VITE_EMAILJS_TEMPLATE_ID=your_template_id
// VITE_EMAILJS_PUBLIC_KEY=your_public_key
export const emailConfig: EmailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_xxxxxxx",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xxxxxxx",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "public_key_xxxxxxx",
};

// Email validation function
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}; 