import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { companyInfo } from '../../data/clientData.js';

// Updated navigation with client data
const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects/all' },
    { name: 'Redevelopment', href: '/redevelopment' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  projects: [
    { name: 'Shankeshwar Pearl', href: '/property/shankeshwar-pearl' },
    { name: 'Shankeshwar Sparsh', href: '/property/shankeshwar-sparsh' },
    { name: 'Skyline One', href: '/property/skyline-one' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
    { name: 'RERA Information', href: '/rera-info' },
    { name: 'Sitemap', href: '/sitemap' },
  ],
  social: [
    {
      name: 'Facebook',
      href: companyInfo.socialMedia.facebook || 'https://facebook.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: companyInfo.socialMedia.instagram || 'https://instagram.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 3.993-.05 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.993-.06-1.064-.05-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: companyInfo.socialMedia.linkedin || 'https://linkedin.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-deep-teal text-cream relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sage-teal via-amber-gold to-deep-teal"></div>
      
      {/* Wave SVG separator */}
      <div className="absolute -top-10 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative w-full h-10 text-deep-teal fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <Container className="pt-16 pb-12 md:pt-20 md:pb-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="inline-block mb-6 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center"
              >
                <img 
                  src="/images/website/logo.png" 
                  alt="Shankeshwar Buildcorp Logo" 
                  className="h-14 mr-2"
                />
              </motion.div>
            </Link>
            <p className="text-sm text-sage-teal/90 mb-5 leading-relaxed">
              {companyInfo.fullDescription.substring(0, 116)}
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                item.href && item.href !== "" ? (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-sage-teal hover:text-amber-gold transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </motion.a>
                ) : null
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-display font-medium mb-5 text-amber-gold/90">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sage-teal hover:text-amber-gold transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-3 h-3 mr-2 text-amber-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-display font-medium mb-5 text-amber-gold/90">Our Projects</h3>
            <ul className="space-y-3">
              {navigation.projects.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-sage-teal hover:text-amber-gold transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-3 h-3 mr-2 text-amber-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-display font-medium mb-5 text-amber-gold/90">Contact Us</h3>
            <address className="not-italic text-sm text-sage-teal/90 mb-5 leading-relaxed">
              <a href="https://maps.app.goo.gl/VA22STbnTKFFwsh18" target="_blank" rel="noopener noreferrer" className="flex items-start mb-2 hover:text-amber-gold transition-colors duration-300">
                <svg className="w-4 h-4 mr-2 text-amber-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{companyInfo.address.line1}, {companyInfo.address.line2}, {companyInfo.address.city} - {companyInfo.address.pinCode}</span>
              </a>
              <a href={`mailto:${companyInfo.primaryEmail}`} className="flex items-center mb-2 hover:text-amber-gold transition-colors duration-300">
                <svg className="w-4 h-4 mr-2 text-amber-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {companyInfo.primaryEmail}
              </a>
              <a href={`tel:${companyInfo.primaryPhone}`} className="flex items-center hover:text-amber-gold transition-colors duration-300">
                <svg className="w-4 h-4 mr-2 text-amber-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                {companyInfo.primaryPhone}
              </a>
            </address>
            <Button 
              variant="accent" 
              size="sm" 
              href="/contact"
              className="shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sage-teal/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-sage-teal/80">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
            {navigation.legal.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-xs text-sage-teal/80 hover:text-amber-gold transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
} 