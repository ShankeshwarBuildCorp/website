import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-cream min-h-screen py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6 md:p-10"
        >
          <h1 className="text-3xl font-bold text-deep-teal mb-6">Terms and Conditions</h1>
          
          <p className="text-gray-600 mb-8">
            Last Updated: July 2023
          </p>
          
          <div className="prose max-w-none text-gray-700">
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to Shankeshwar Buildcorp. These Terms and Conditions govern your use of our website and 
              services. By accessing our website or engaging with our services, you agree to these terms.
              Please read them carefully.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Website Usage</h2>
            <p>
              The content of this website is for general information and use only. It is subject to change without notice.
              This website uses no cookies to monitor browsing preferences.
            </p>
            <p>
              You may not use our website in any way that causes, or may cause, damage to the website or impairment of 
              its availability or accessibility.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Property Information</h2>
            <p>
              While we strive to provide accurate and up-to-date information about our properties, we do not warrant that:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4">
              <li>The property information is completely accurate or current</li>
              <li>The website will be uninterrupted or error-free</li>
              <li>The images exactly represent the actual properties</li>
            </ul>
            <p>
              Property details, prices, availability, and specifications are subject to change without notice. 
              Property images are for representation purposes only. Actual properties may differ from the images shown.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of 
              Shankeshwar Buildcorp and is protected by copyright laws. You may not reproduce, duplicate, copy, sell, 
              resell, or exploit any portion of this website without express written permission.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">RERA Compliance</h2>
            <p>
              Shankeshwar Buildcorp complies with the Real Estate (Regulation and Development) Act, 2016 (RERA). 
              Our projects are registered with the appropriate Real Estate Regulatory Authority as required by law.
              RERA registration numbers are provided on respective project pages.
            </p>
            <p>
              All our promotional materials and information comply with RERA guidelines. 
              Buyers are encouraged to verify RERA registration details before making purchase decisions.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Limitations of Liability</h2>
            <p>
              Shankeshwar Buildcorp shall not be liable for any direct, indirect, incidental, consequential, or punitive damages 
              arising out of your access to or use of the website. This includes, but is not limited to, damages for loss of profits, 
              goodwill, data, or other intangible losses.
            </p>
            <p>
              We are not responsible for the content or privacy practices of any external websites linked from our site.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Site Visit and Property Viewing</h2>
            <p>
              Site visits and property viewings are arranged by appointment only. While visiting our properties:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4">
              <li>Visitors must adhere to safety instructions provided by our representatives</li>
              <li>Children must be supervised at all times</li>
              <li>Photography may be restricted in certain areas</li>
            </ul>
            <p>
              Shankeshwar Buildcorp is not liable for any injuries or accidents that occur during site visits due to negligence 
              on the part of the visitor.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Shankeshwar Buildcorp, its officers, directors, employees, and 
              agents from any claims, damages, losses, liabilities, and expenses arising out of your use of the website or 
              violation of these Terms and Conditions.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes 
              relating to these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Changes to These Terms</h2>
            <p>
              We may revise these Terms and Conditions at any time without notice. By using this website, you agree 
              to be bound by the current version of these Terms and Conditions.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p className="font-medium">Shankeshwar Buildcorp</p>
              <p>Email: shankeshwarbuildcorp@gmail.com</p>
              <p>Phone: +91 9604304919</p>
              <p>Address: Flat no. 2, Shikhandi Apartments, Chaitanya Nagar, Dhankawadi, Pune - 411043</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default TermsAndConditionsPage; 