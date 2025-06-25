import React from 'react';
import { motion } from 'framer-motion';

import Container from '../components/ui/Container';
import PropertyCard from '../components/property/PropertyCard';
import { getPropertiesByStatus } from '../data/properties';
import Button from '../components/ui/Button';

// Image imports
import completedImage from '/images/website/completed-building.jpeg';

// Animation variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export default function CompletedProjectsPage() {
  // Fetch completed projects (ready-to-move-in or completed)
  const completedProperties = getPropertiesByStatus(['ready-to-move-in', 'completed']);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-cream"
    >
      {/* Hero Banner for Completed Projects */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${completedImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-deep-teal/40 to-black/60" />
        
        <Container className="relative h-full">
          <div className="flex flex-col justify-center h-full">
            <div className="max-w-2xl">
              <motion.span 
                className="inline-block bg-deep-teal/90 text-white px-4 py-1 rounded-full text-sm font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                OUR SIGNATURE DEVELOPMENTS
              </motion.span>
              
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl text-white font-display font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Completed Projects
              </motion.h1>
              
              <motion.p 
                className="text-white/90 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Explore our finished properties that showcase our commitment to excellence, 
                quality craftsmanship and attention to detail.
              </motion.p>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Completed Projects Showcase */}
      <Container className="py-12">
        {/* Quality Statement Section */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-xl md:text-2xl font-display font-bold text-deep-teal mb-3">
                Built with Excellence, Designed for Living
              </h2>
              <p className="text-gray-600 mb-4">
                Our completed projects stand as a testament to our commitment to quality, innovation, and customer satisfaction. 
                Each property has been meticulously crafted to provide the perfect balance of functionality, comfort, and aesthetic appeal.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-gold/10 flex items-center justify-center mr-3">
                    <i className="fas fa-medal text-amber-gold"></i>
                  </div>
                  <span className="text-gray-700">Premium Materials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-sage-teal/10 flex items-center justify-center mr-3">
                    <i className="fas fa-leaf text-sage-teal"></i>
                  </div>
                  <span className="text-gray-700">Eco-friendly Solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-deep-teal/10 flex items-center justify-center mr-3">
                    <i className="fas fa-shield-alt text-deep-teal"></i>
                  </div>
                  <span className="text-gray-700">Durable Construction</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 relative">
                <div className="absolute inset-0 bg-amber-gold rounded-tl-3xl rounded-br-3xl transform rotate-45"></div>
                <div className="absolute inset-2 bg-white rounded-tl-2xl rounded-br-2xl transform rotate-45 
                  flex items-center justify-center">
                  <span className="transform -rotate-45 text-deep-teal font-display font-bold text-2xl md:text-3xl">100%</span>
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 -rotate-45
                  text-sm font-medium text-deep-teal bg-white px-2 py-1 rounded shadow-sm">
                  Quality Assured
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <h2 className="text-2xl md:text-3xl font-display font-bold text-deep-teal mb-6">
          Our Showcase Properties
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {completedProperties.length > 0 ? (
            completedProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PropertyCard 
                  property={property} 
                  index={index}
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-white rounded-lg shadow-md">
              <i className="fas fa-building text-5xl text-deep-teal mb-4"></i>
              <h3 className="text-2xl font-display text-deep-teal mb-2">Our completed projects are coming soon</h3>
              <p className="text-gray-600 mb-6">
                We're currently updating our portfolio. Please check back soon to see our finished developments.
              </p>
              <Button 
                variant="primary" 
                href="/contact"
              >
                Contact for Information
              </Button>
            </div>
          )}
        </div>
        
        {/* Testimonials Preview */}
        <div className="mt-16 bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-display font-semibold text-deep-teal mb-4">
            What Our Residents Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="p-4 bg-sage-teal/5 rounded-lg">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 bg-deep-teal/10 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-quote-left text-deep-teal"></i>
                </div>
                <div>
                  <div className="text-amber-gold mb-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="italic text-gray-600">
                    "Moving into our home at Shankeshwar Pearl has exceeded all our expectations. The quality is superb!"
                  </p>
                </div>
              </div>
              <div className="ml-12 text-sm text-gray-700">
                <strong>Rajesh Mehta</strong> · Shankeshwar Pearl Owner
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="p-4 bg-sage-teal/5 rounded-lg">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 bg-deep-teal/10 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-quote-left text-deep-teal"></i>
                </div>
                <div>
                  <div className="text-amber-gold mb-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <p className="italic text-gray-600">
                    "The attention to detail in our apartment at Shankeshwar Heights is impressive. Truly world-class living."
                  </p>
                </div>
              </div>
              <div className="ml-12 text-sm text-gray-700">
                <strong>Priya Sharma</strong> · Shankeshwar Heights Resident
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              href="/testimonials"
            >
              View All Testimonials
            </Button>
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-16 bg-amber-gold p-8 md:p-10 rounded-xl shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-deep-teal/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-deep-teal mb-2">
                Ready to Move In?
              </h3>
              <p className="text-deep-teal/90 max-w-xl">
                Our completed properties offer immediate occupancy with all amenities ready for use. 
                Skip the wait and start your new lifestyle now in one of our signature developments.
              </p>
            </div>
            <Button 
              variant="primary" 
              href="/contact" 
              className="shrink-0"
              animation="bounce"
            >
              Schedule a Viewing
            </Button>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
} 