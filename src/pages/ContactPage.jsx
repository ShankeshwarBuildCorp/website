import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiCheckCircle, FiMapPin, FiClock, FiNavigation } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

import Container from '../components/ui/Container';
import { siteConfig } from '../config/site';
import { sendContactFormEmail } from '../utils/emailService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'General Inquiry'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    // Set page title
    document.title = "Contact Us | Shankeshwar Buildcorp";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
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
      // Send email using our email service
      const response = await sendContactFormEmail(formData);
      
      if (response.success) {
        // Reset form and show success message
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          inquiryType: 'General Inquiry'
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

  const socialIcons = {
    facebook: <FaFacebookF />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedinIn />,
    youtube: <FaYoutube />,
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className="bg-cream min-h-screen pb-16">
      {/* Hero Section */}
      <div className="bg-deep-teal text-white py-16 md:py-24">
        <Container>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-sage-teal/90">
              Have questions about our properties or services? We'd love to hear from you. 
              Reach out to our team for inquiries, feedback, or to schedule a site visit.
            </p>
          </motion.div>
        </Container>
      </div>
      
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-1"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-lg shadow-md mb-8"
            >
              <h2 className="text-xl font-bold mb-6 text-deep-teal font-display">Contact Information</h2>
              
              <div className="flex items-start mb-6">
                <div className="bg-amber-gold/10 rounded-full p-3 mr-4">
                  <FiMapPin className="text-amber-gold text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-teal mb-1">Head Office</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {siteConfig.mainOffice.address}<br />
                    {siteConfig.mainOffice.city}, {siteConfig.mainOffice.state} {siteConfig.mainOffice.pincode}<br />
                    {siteConfig.mainOffice.country}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-amber-gold/10 rounded-full p-3 mr-4">
                  <FiPhone className="text-amber-gold text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-teal mb-1">Phone</h3>
                  <p className="text-gray-600 text-sm">
                    <a href={`tel:${siteConfig.contact.officePhone}`} className="hover:text-amber-gold transition-colors">
                      {siteConfig.contact.officePhone}
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">
                    <a href={`tel:+91${siteConfig.contact.whatsapp}`} className="hover:text-amber-gold transition-colors">
                      +91 {siteConfig.contact.whatsapp}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-amber-gold/10 rounded-full p-3 mr-4">
                  <FiMail className="text-amber-gold text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-teal mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">
                    <a href={`mailto:${siteConfig.contact.officeEmail}`} className="hover:text-amber-gold transition-colors">
                      {siteConfig.contact.officeEmail}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-gold/10 rounded-full p-3 mr-4">
                  <FiClock className="text-amber-gold text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-deep-teal mb-1">Office Hours</h3>
                  <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-lg shadow-md mb-8"
            >
              <h2 className="text-xl font-bold mb-6 text-deep-teal font-display">Connect With Us</h2>
              <div className="flex space-x-4">
                {Object.entries(socialIcons).map(([name, icon]) => {
                  const url = siteConfig.contact.socialLinks[name];
                  if (!url) return null;
                  
                  return (
                    <a 
                      key={name}
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${name}`}
                      className="bg-deep-teal hover:bg-amber-gold text-white p-3 rounded-full transition-colors"
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            </motion.div>
            
            {/* Sales Team */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-6 text-deep-teal font-display">Sales Team</h2>
              
              <div className="flex items-center mb-2">
                <FiPhone className="text-amber-gold mr-2" />
                <a href={`tel:+91${siteConfig.contact.sales.phone}`} className="text-gray-600 hover:text-amber-gold text-sm transition-colors">
                  +91 {siteConfig.contact.sales.phone}
                </a>
              </div>
              
              <div className="flex items-center">
                <FiMail className="text-amber-gold mr-2" />
                <a href={`mailto:${siteConfig.contact.sales.email}`} className="text-gray-600 hover:text-amber-gold text-sm transition-colors">
                  {siteConfig.contact.sales.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <FiCheckCircle className="text-green-600 text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-deep-teal">Thank You!</h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Your message has been received. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-amber-gold hover:text-amber-gold/80 font-medium flex items-center"
                >
                  <span className="mr-2">Send another message</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-2 text-deep-teal font-display">Send us a Message</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name*
                      </label>
                      <div className="relative">
                        <FiUser className="absolute top-1/2 -translate-y-1/2 left-3 text-amber-gold" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 bg-cream text-deep-teal ${
                            errors.name ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-amber-gold focus:border-amber-gold'
                          }`}
                          placeholder="e.g. John Doe"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>
                    
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address*
                      </label>
                      <div className="relative">
                        <FiMail className="absolute top-1/2 -translate-y-1/2 left-3 text-amber-gold" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 bg-cream text-deep-teal ${
                            errors.email ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-amber-gold focus:border-amber-gold'
                          }`}
                          placeholder="e.g. you@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    
                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number*
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute top-1/2 -translate-y-1/2 left-3 text-amber-gold" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 bg-cream text-deep-teal ${
                            errors.phone ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-amber-gold focus:border-amber-gold'
                          }`}
                          placeholder="e.g. 9876543210"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                    
                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-teal focus:border-deep-teal bg-cream text-deep-teal"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    {/* Inquiry Type (new field) */}
                    <div>
                      <label htmlFor="inquiryType" className="block text-gray-700 font-medium mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-teal focus:border-deep-teal bg-cream text-deep-teal"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Property Interest">Property Interest</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Career">Career Opportunity</option>
                        <option value="Partnership">Partnership Proposal</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Message Field */}
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message*
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <FiMessageSquare className="text-amber-gold" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        } rounded-md shadow-sm focus:outline-none focus:ring-deep-teal focus:border-deep-teal bg-cream text-deep-teal`}
                        placeholder="Write your message here..."
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
                          className="focus:ring-deep-teal h-4 w-4 text-deep-teal border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="privacy" className="text-gray-600">
                          I agree to the <a href="/privacy-policy" className="text-amber-gold hover:underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {errors.submit && (
                    <div className="mb-6 bg-red-50 p-4 rounded-md">
                      <p className="text-red-600 text-sm">{errors.submit}</p>
                    </div>
                  )}
                  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deep-teal hover:bg-deep-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-teal ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
        
        {/* Map */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-deep-teal font-display">Our Location</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="rounded-lg overflow-hidden h-[400px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${siteConfig.mainOffice.location.latitude},${siteConfig.mainOffice.location.longitude}&zoom=15`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        {/* Branch Offices */}
        {siteConfig.branches && siteConfig.branches.length > 0 && (
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-deep-teal font-display">Branch Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.branches.map((branch, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-deep-teal mb-2">{branch.name}</h3>
                  <p className="text-gray-600 mb-4">{branch.address}</p>
                  <p className="text-gray-600">{branch.city}, {branch.state} {branch.pincode}</p>
                  
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${branch.location.latitude},${branch.location.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-amber-gold mt-4 hover:text-deep-teal transition-colors"
                  >
                    <FiNavigation className="mr-2" />
                    <span>Get Directions</span>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Quick Contact Methods */}
        <motion.div 
          className="mt-12 bg-deep-teal rounded-lg p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 font-display">Get in Touch Quickly</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href={`tel:${siteConfig.contact.officePhone}`}
              className="flex flex-col items-center bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="bg-amber-gold/20 rounded-full p-4 mb-4">
                <FiPhone className="text-amber-gold text-2xl" />
              </div>
              <h3 className="text-lg font-medium mb-1">Call Us</h3>
              <p className="text-sage-teal/90 text-center">{siteConfig.contact.officePhone}</p>
            </a>
            
            <a 
              href={`mailto:${siteConfig.contact.officeEmail}`}
              className="flex flex-col items-center bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="bg-amber-gold/20 rounded-full p-4 mb-4">
                <FiMail className="text-amber-gold text-2xl" />
              </div>
              <h3 className="text-lg font-medium mb-1">Email Us</h3>
              <p className="text-sage-teal/90 text-center break-all">{siteConfig.contact.officeEmail}</p>
            </a>
            
            <a 
              href={`https://wa.me/91${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="bg-amber-gold/20 rounded-full p-4 mb-4">
                <FaWhatsapp className="text-amber-gold text-2xl" />
              </div>
              <h3 className="text-lg font-medium mb-1">WhatsApp</h3>
              <p className="text-sage-teal/90 text-center">+91 {siteConfig.contact.whatsapp}</p>
            </a>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ContactPage; 