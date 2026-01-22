import emailjs from 'emailjs-com';
import { generateCVBlob } from './pdfGenerator';

/**
 * Initialize EmailJS with your credentials
 * Get these from: https://www.emailjs.com/
 * 
 * Setup Instructions:
 * 1. Create account at emailjs.com
 * 2. Add email service (Gmail, Outlook, etc.)
 * 3. Create email template
 * 4. Get Service ID, Template ID, and Public Key
 * 5. Replace the values below
 */
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

/**
 * Send CV via email
 * @param {Object} params - Email parameters
 * @param {string} params.recipientEmail - Recipient's email address
 * @param {string} params.recipientName - Recipient's name (optional)
 * @param {string} params.subject - Email subject (optional)
 * @param {string} params.message - Additional message (optional)
 * @param {Object} params.cvOptions - CV generation options
 * @returns {Promise<Object>} Result object
 */
export const sendCVByEmail = async (params) => {
  const {
    recipientEmail,
    recipientName = '',
    subject = 'CV - Junior Donfack Assobjio',
    message = 'Please find attached my CV for your review.',
    cvOptions = {},
  } = params;

  try {
    // Validate email
    if (!recipientEmail || !isValidEmail(recipientEmail)) {
      throw new Error('Please provide a valid email address.');
    }

    // Check if EmailJS is configured
    if (
      EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY'
    ) {
      throw new Error(
        'EmailJS is not configured. Please update the credentials in src/utils/emailService.js'
      );
    }

    // Generate CV blob
    const cvBlob = await generateCVBlob(cvOptions);

    // Convert blob to base64
    const base64CV = await blobToBase64(cvBlob);

    // Prepare email template parameters
    const templateParams = {
      to_email: recipientEmail,
      to_name: recipientName,
      from_name: 'Junior Donfack Assobjio',
      subject: subject,
      message: message,
      cv_attachment: base64CV,
      reply_to: 'Juniorasobijo@gmail.com',
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'CV sent successfully!',
      };
    } else {
      throw new Error('Failed to send email. Please try again.');
    }
  } catch (error) {
    console.error('Error sending CV by email:', error);
    return {
      success: false,
      message: error.message || 'Failed to send CV. Please try again.',
    };
  }
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Convert blob to base64
 * @param {Blob} blob - Blob to convert
 * @returns {Promise<string>} Base64 string
 */
const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

/**
 * Alternative: Open email client with CV attachment
 * This is a fallback method that opens the user's default email client
 * @param {Object} params - Email parameters
 */
export const openEmailClient = async (params) => {
  const {
    recipientEmail = '',
    subject = 'CV - Junior Donfack Assobjio',
    body = 'Please find attached my CV for your review.',
  } = params;

  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

export default {
  sendCVByEmail,
  openEmailClient,
};
