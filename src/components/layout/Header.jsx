import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import NavLinks from './NavLinks';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Variants for motion animations - adjusted heights for better alignment
  const headerVariants = {
    scrolled: { 
      height: ['4rem', '3.5rem'], // Smaller on mobile
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      backdropFilter: 'blur(8px)'
    },
    top: { 
      height: ['4.5rem', '4rem'], // Smaller on mobile
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      boxShadow: 'none',
      backdropFilter: 'blur(0px)'
    }
  };

  return (
    <motion.header 
      className="fixed w-full top-0 z-50"
      initial="top"
      animate={isScrolled ? "scrolled" : "top"}
      variants={headerVariants}
      transition={{ duration: 0.3 }}
    >
      <Container className="h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/website/logo.png" 
                alt="Shankeshwar Buildcorp Logo" 
                className="h-10 md:h-12"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <Button 
              variant="primary" 
              size="sm" 
              href="/contact" 
              animation="bounce"
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-deep-teal p-2 rounded-md flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              className="md:hidden mt-2 pb-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3">
                <NavLinks 
                  isMobile={true} 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <div className="pt-2">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    href="/contact" 
                    width="full"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    }
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
} 