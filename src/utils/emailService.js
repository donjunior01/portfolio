import emailjs from 'emailjs-com';
import { generateCVBlob } from './pdfGenerator';

/**
 * Initialize EmailJS with your credentials
 * Get these from: https://www.emailjs.com/
 * 
 * Setup Instructions:
 * 1. Create account at emailjs.com
 * 2. Add email service (Gmail, Outlook, etc.)
 * 3. Create email templates
 * 4. Get Service ID, Template IDs, and Public Key
 */
const EMAILJS_CONFIG = {
  serviceId: 'service_1cxdwvl',
  templates: {
    autoReply: 'template_95yojuf', // Auto-reply template for contact form submissions
    contactUs: 'template_q3qvk36', // Contact form notification template
  },
  publicKey: 'BdnnnWu0CJiRXsdQw',
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
      !EMAILJS_CONFIG.serviceId ||
      !EMAILJS_CONFIG.templates.contactUs ||
      !EMAILJS_CONFIG.publicKey
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

    // Send email using EmailJS (using contact template)
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.contactUs,
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

/**
 * Send contact form message
 * Sends both a notification to you and an auto-reply to the sender
 * @param {Object} params - Contact form parameters
 * @param {string} params.name - Sender's name
 * @param {string} params.email - Sender's email
 * @param {string} params.subject - Message subject
 * @param {string} params.message - Message content
 * @returns {Promise<Object>} Result object
 */
export const sendContactForm = async (params) => {
  const { name, email, subject, message } = params;

  try {
    // Validate inputs
    if (!name || !email || !message) {
      throw new Error('Please fill in all required fields.');
    }

    if (!isValidEmail(email)) {
      throw new Error('Please provide a valid email address.');
    }

    // Check if EmailJS is configured
    if (
      !EMAILJS_CONFIG.serviceId ||
      !EMAILJS_CONFIG.templates.contactUs ||
      !EMAILJS_CONFIG.templates.autoReply ||
      !EMAILJS_CONFIG.publicKey
    ) {
      throw new Error(
        'EmailJS is not configured. Please update the credentials in src/utils/emailService.js'
      );
    }

    // Prepare template parameters for contact notification
    const contactParams = {
      from_name: name,
      from_email: email,
      subject: subject || 'New Contact Form Submission',
      message: message,
      to_email: 'Juniorasobijo@gmail.com',
      reply_to: email,
    };

    // Prepare template parameters for auto-reply
    const autoReplyParams = {
      to_name: name,
      to_email: email,
      from_name: 'Junior Donfack Assobjio',
      subject: subject || 'Thank you for contacting me',
      message: message,
      reply_to: 'Juniorasobijo@gmail.com',
    };

    // Send contact notification to you
    const contactResponse = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.contactUs,
      contactParams,
      EMAILJS_CONFIG.publicKey
    );

    // Send auto-reply to the sender
    const autoReplyResponse = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templates.autoReply,
      autoReplyParams,
      EMAILJS_CONFIG.publicKey
    );

    if (contactResponse.status === 200 && autoReplyResponse.status === 200) {
      return {
        success: true,
        message: 'Message sent successfully! You will receive a confirmation email shortly.',
      };
    } else {
      throw new Error('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error sending contact form:', error);
    return {
      success: false,
      message: error.message || 'Failed to send message. Please try again.',
    };
  }
};

const emailService = {
  sendCVByEmail,
  sendContactForm,
  openEmailClient,
};

export default emailService;
