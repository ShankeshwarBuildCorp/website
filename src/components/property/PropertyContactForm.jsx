import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { sendPropertyInquiryEmail } from '../../utils/emailService';

const PropertyContactForm = ({ property }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in ${property?.name || 'this property'}. Please contact me with more information.`,
    inquiryType: 'Property Information'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/i.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email with the form data
      const response = await sendPropertyInquiryEmail(formData, property);
      
      if (response.success) {
        // Reset form and show success message
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: `I'm interested in ${property?.name || 'this property'}. Please contact me with more information.`,
          inquiryType: 'Property Information'
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Handle error
        setErrors({
          submit: response.message || 'There was an error submitting your request. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        submit: 'There was an error submitting your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg p-6">
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center py-8"
        >
          <div className="w-16 h-16 bg-amber-gold/20 rounded-full flex items-center justify-center mb-4">
            <FiCheckCircle className="text-amber-gold text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-deep-teal mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            Your inquiry has been received. Our team will contact you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-deep-teal hover:text-amber-gold font-medium transition-colors"
          >
            Send another inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-deep-teal font-medium mb-2">
                Your Name*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-amber-gold" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm bg-cream focus:outline-none focus:ring-amber-gold/50 focus:border-amber-gold text-deep-teal`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-deep-teal font-medium mb-2">
                Email Address*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-amber-gold" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm bg-cream focus:outline-none focus:ring-amber-gold/50 focus:border-amber-gold text-deep-teal`}
                  placeholder="johndoe@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            
            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-deep-teal font-medium mb-2">
                Phone Number*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="text-amber-gold" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm bg-cream focus:outline-none focus:ring-amber-gold/50 focus:border-amber-gold text-deep-teal`}
                  placeholder="9876543210"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
            
            {/* Inquiry Type (new field) */}
            <div>
              <label htmlFor="inquiryType" className="block text-deep-teal font-medium mb-2">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-cream focus:outline-none focus:ring-amber-gold/50 focus:border-amber-gold text-deep-teal"
              >
                <option value="Property Information">Property Information</option>
                <option value="Site Visit">Site Visit</option>
                <option value="Price Inquiry">Price Inquiry</option>
                <option value="Floor Plan Details">Floor Plan Details</option>
                <option value="Payment Plans">Payment Plans</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-deep-teal font-medium mb-2">
              Message*
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <FiMessageSquare className="text-amber-gold" />
              </div>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-2 border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm bg-cream focus:outline-none focus:ring-amber-gold/50 focus:border-amber-gold text-deep-teal`}
                placeholder="I'm interested in this property..."
              ></textarea>
            </div>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          
          {/* Privacy Policy */}
          <div className="mb-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-amber-gold border-gray-300 rounded focus:ring-amber-gold"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="text-gray-600">
                  I agree to the <a href="/privacy-policy" className="text-amber-gold hover:underline">Privacy Policy</a> and consent to being contacted by Shankeshwar Buildcorp.
                </label>
              </div>
            </div>
          </div>
          
          {/* Submit Error */}
          {errors.submit && (
            <div className="mb-6 bg-red-50 p-4 rounded-md">
              <p className="text-red-600">{errors.submit}</p>
            </div>
          )}
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-deep-teal bg-amber-gold hover:bg-amber-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-gold font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-deep-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Send Enquiry'
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default PropertyContactForm; 