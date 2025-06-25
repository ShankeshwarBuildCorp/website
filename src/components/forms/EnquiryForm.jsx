import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function EnquiryForm({ propertyId, propertyName, className = "" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm({
    defaultValues: {
      propertyId: propertyId || '',
      propertyName: propertyName || '',
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);
    
    console.log("Form Data Submitted:", data);

    // TODO: Replace this with your actual API call
    // Example: send to a backend or a third-party form service
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate a successful submission for now
      // const response = await fetch('/your-backend-api/enquiry', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'Failed to submit enquiry');
      // }
      
      reset(); // Reset form fields to defaultValues
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.message || 'There was a problem submitting your enquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-display font-semibold text-deep-teal mb-4">
        {propertyName ? `Enquire about ${propertyName}` : 'Contact Us'}
      </h3>
      
      {isSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-4">
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Thank you for your enquiry! We'll get back to you soon.
          </p>
        </div>
      )}

      {!isSuccess && error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-4">
          <p>{error}</p>
        </div>
      )}
      
      {!isSuccess && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              id="name" 
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-sage-teal/50'
              }`}
              placeholder="Your Name"
              {...register('name', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
            <input 
              type="email" 
              id="email" 
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-sage-teal/50'
              }`}
              placeholder="Your Email"
              {...register('email', { 
                required: 'Email is required',
                pattern: { 
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                  message: 'Invalid email address' 
                }
              })}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone <span className="text-red-500">*</span></label>
            <input 
              type="tel" 
              id="phone" 
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                errors.phone ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-sage-teal/50'
              }`}
              placeholder="Your Phone Number"
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: { 
                  value: /^[0-9+\- ]{10,15}$/, 
                  message: 'Please enter a valid phone number' 
                }
              })}
            />
            {errors.phone && (
              <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                errors.message ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-sage-teal/50'
              }`}
              placeholder="Tell us what you're looking for..."
              {...register('message')}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>
            )}
          </div>
          
          {/* Hidden fields can be registered directly in defaultValues or via useEffect if props change */}
          {/* <input type="hidden" {...register('propertyId')} /> */}
          {/* <input type="hidden" {...register('propertyName')} /> */}
          
          <button 
            type="submit" 
            className="w-full bg-deep-teal text-white font-medium py-2.5 px-4 rounded-md hover:bg-amber-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-gold focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : 'Submit Enquiry'}
          </button>
        </form>
      )}
    </div>
  );
} 