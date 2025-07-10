import emailjs from '@emailjs/browser';

// Initialize EmailJS with your User ID
// Replace this with your actual EmailJS User ID when setting up in production
const initEmailJS = () => {
  emailjs.init('FAhnewayFjCLChLZg');
};

// The client's email address to receive all inquiries
const CLIENT_EMAIL = 'shankeshwarbuildcorp@gmail.com';

// Format date for email
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Send property inquiry email
export const sendPropertyInquiryEmail = async (formData, property) => {
  try {
    // Template for the email
    const templateParams = {
      to_email: CLIENT_EMAIL, // Client email
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message || 'No additional message',
      inquiry_date: formatDate(new Date()),
      property_name: property?.name || 'General Inquiry',
      property_location: property?.location?.address || 'N/A',
      property_type: property?.type || 'N/A',
      property_status: property?.status || 'N/A',
      inquiry_type: formData.inquiryType || 'Property Information',
      subject: `Property Inquiry: ${property?.name || 'General Inquiry'}`
    };

    // Send the email (replace with your Service ID and Template ID)
    const response = await emailjs.send(
      'service_1pfxq7e',
      'template_v0401oe',
      templateParams
    );

    return {
      success: true,
      message: 'Your inquiry has been sent successfully!'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send inquiry. Please try again later.'
    };
  }
};

// Send contact form email
export const sendContactFormEmail = async (formData) => {
  try {
    // Template for the email
    const templateParams = {
      to_email: CLIENT_EMAIL, // Client email
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message || 'No additional message',
      inquiry_date: formatDate(new Date()),
      subject: `Website Contact: ${formData.subject || 'General Inquiry'}`,
      inquiry_type: formData.inquiryType || 'General Inquiry'
    };

    // Send the email (replace with your Service ID and Template ID)
    const response = await emailjs.send(
      'service_1pfxq7e', // Using the same service ID as the property inquiry
      'template_2jdkn61',// IMPORTANT: Replace with your actual Contact Form Template ID from EmailJS
      templateParams
    );

    return {
      success: true,
      message: 'Your message has been sent successfully!'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.'
    };
  }
};

// Initialize EmailJS
initEmailJS();

export default {
  sendPropertyInquiryEmail,
  sendContactFormEmail
}; 