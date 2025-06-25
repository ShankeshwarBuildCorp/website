import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../../data/clientData.js';

export default function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Header />
      <main className="flex-grow pt-[4.625rem] md:pt-[4.25rem] pb-12 md:pb-16">
        {/* Page content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>

        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="fixed bg-deep-teal text-white p-3 rounded-full shadow-lg hover:bg-deep-teal/90 transition-colors z-40 bottom-20 right-4 md:bottom-8 md:right-8"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
        
        {/* WhatsApp floating button */}
        <motion.a
          href={`https://wa.me/${companyInfo.primaryPhone?.replace(/[^0-9]/g, '') || '919604304919'}?text=Hi, I'm interested in knowing more about Shankeshwar Buildcorp projects. Please provide more details.`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40 bottom-20 left-4 md:bottom-8 md:left-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </motion.a>
      </main>
      <Footer />
    </div>
  );
} 