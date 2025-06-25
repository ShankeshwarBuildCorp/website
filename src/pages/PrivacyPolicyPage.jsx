import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-cream min-h-screen py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6 md:p-10"
        >
          <h1 className="text-3xl font-bold text-deep-teal mb-6">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">
            Last Updated: July 2023
          </p>
          
          <div className="prose max-w-none text-gray-700">
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Introduction</h2>
            <p>
              Shankeshwar Buildcorp ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information when 
              you visit our website or contact us regarding our real estate services.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-5 mt-2 mb-4">
              <li>Personal information such as name, email address, and phone number</li>
              <li>Inquiry details regarding specific properties</li>
              <li>Messages you submit through our contact forms</li>
              <li>Your preferences regarding property types and amenities</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-5 mt-2 mb-4">
              <li>Responding to your inquiries about properties and services</li>
              <li>Providing you with information about properties that match your requirements</li>
              <li>Contacting you regarding property viewings, updates, and offers</li>
              <li>Improving our website and services</li>
              <li>Sending you updates about new properties or developments (if you've expressed interest)</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. 
              However, please be aware that no method of transmission over the internet or 
              electronic storage is 100% secure, and we cannot guarantee absolute security of your data.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required by law 
              or for legitimate business purposes.
            </p>
            
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Your Privacy Rights</h2>
            <p>You have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-5 mt-2 mb-4">
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data (subject to certain exceptions)</li>
              <li>The right to withdraw consent for future processing</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated 
              by an updated "Last Updated" date at the top of this policy. We encourage you to review 
              this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-xl font-semibold text-deep-teal mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicyPage; 