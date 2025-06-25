import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button'; // Import Button component // Assuming Container is used or needed for consistency

const OurCoreValues = () => {
  return (
    <section className="py-16 md:py-24 bg-cream"> {/* Using a slightly different background for distinction */}
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }} // Added a slight delay
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-12">
            Our Core <span className="text-amber-gold">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality value */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group" // Enhanced styling
              whileHover={{ y: -5, scale: 1.03 }} // Added scale effect
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto bg-amber-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-gold/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-deep-teal mb-3">Quality Excellence</h3> {/* Changed h4 to h3 for semantic hierarchy */}
              <p className="text-deep-teal/70 text-sm leading-relaxed">We never compromise on quality. From materials to execution, excellence is our standard, ensuring lasting value for our clients.</p>
            </motion.div>

            {/* Innovation value */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto bg-amber-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-gold/20 transition-colors">
                {/* Using a different icon for Innovation */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-deep-teal mb-3">Innovative Design</h3>
              <p className="text-deep-teal/70 text-sm leading-relaxed">We blend creativity with functionality, embracing modern techniques and sustainable practices to create forward-thinking living spaces.</p>
            </motion.div>

            {/* Customer Centricity value */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto bg-amber-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-gold/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-semibold text-deep-teal mb-3">Customer Trust</h3>
              <p className="text-deep-teal/70 text-sm leading-relaxed">Building relationships through transparency, reliability, and keeping our promises has been the foundation of our success.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA banner */}
        <motion.div 
          className="mt-20 bg-deep-teal rounded-2xl py-12 px-8 md:px-12 text-center md:text-left relative overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }} // Retain or adjust delay as needed
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <pattern id="core-values-grid" width="40" height="40" patternUnits="userSpaceOnUse"> {/* Changed pattern id to avoid conflicts if AboutUsSummary is still in DOM with its own grid */} 
                <rect width="100%" height="100%" fill="none"/>
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#core-values-grid)" />
            </svg>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 relative z-10">
            <div className="md:max-w-xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Ready to Find Your Dream Home?</h3>
              <p className="text-white/80">Let us guide you through our premium properties and help you find the perfect space that meets your unique requirements.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Button
                variant="accent"
                size="lg"
                href="/contact"
                animation="bounce"
              >
                Contact Us Today
              </Button>
              <Button
                variant="glass"
                size="lg"
                href="/projects"
                className="border-white/30 text-white"
              >
                Browse Projects
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default OurCoreValues;
