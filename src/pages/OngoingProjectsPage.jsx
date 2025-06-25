import React from 'react';
import { motion } from 'framer-motion';

import Container from '../components/ui/Container';
import PropertyCard from '../components/property/PropertyCard';
import { getPropertiesByStatus } from '../data/properties';
import Button from '../components/ui/Button';

// Image imports
import constructionImage from '/images/website/under-construction.jpeg';

// Animation variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function OngoingProjectsPage() {
  // Fetch ongoing projects (under-construction or nearing possession)
  const underConstructionProjects = getPropertiesByStatus('under-construction');
  const nearingPossessionProjects = getPropertiesByStatus('Nearing Possession');
  const ongoingProperties = [...nearingPossessionProjects, ...underConstructionProjects];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-cream"
    >
      <title>Ongoing & Nearing Possession Projects - Shankeshwar Buildprop</title>
      {/* Hero Banner for Ongoing Projects */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${constructionImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-deep-teal/40 to-black/60" />
        
        <Container className="relative h-full">
          <div className="flex flex-col justify-center h-full">
            <div className="max-w-2xl">
              <motion.span 
                className="inline-block bg-amber-gold/90 text-deep-teal px-4 py-1 rounded-full text-sm font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                DEVELOPMENTS IN PROGRESS
              </motion.span>
              
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl text-white font-display font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Ongoing & Nearing Possession Projects
              </motion.h1>
              
              <motion.p 
                className="text-white/90 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Witness our commitment to excellence as these prestigious properties take shape. 
                Designed for modern living and crafted with precision.
              </motion.p>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Construction Progress Section */}
      <Container className="py-12">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-deep-teal mb-2">
                Your Future Home Is Taking Shape
              </h2>
              <p className="text-gray-600">
                Our craftsmen and engineers are working diligently to create exceptional living spaces. 
                Book a site visit to witness our quality construction firsthand.
              </p>
            </div>
            <Button 
              variant="primary" 
              href="/contact"
              className="shrink-0"
            >
              Schedule Site Visit
            </Button>
          </div>
        </div>

        {/* Construction Timeline/Process Visualization */}
        <div className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-lg font-display font-semibold text-deep-teal mb-4">Our Construction Process</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-sage-teal/20 transform md:-translate-x-1/2"></div>
            
            {/* Timeline steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex md:items-center">
                  <div className="hidden md:block md:w-1/2 md:pr-8 text-right">
                    <h4 className="text-amber-gold font-bold">Foundation</h4>
                    <p className="text-sm text-gray-600">The groundwork for stability and strength</p>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-0 h-6 w-6 rounded-full bg-amber-gold border-4 border-white shadow transform md:-translate-x-1/2"></div>
                  
                  <div className="md:w-1/2 md:pl-8">
                    <h4 className="text-amber-gold font-bold md:hidden">Foundation</h4>
                    <p className="text-sm text-gray-600 md:hidden">The groundwork for stability and strength</p>
                    <div className="mt-2 p-4 bg-sage-teal/5 rounded-lg">
                      <p className="text-sm text-gray-700">We begin with meticulous excavation and foundation work, ensuring a solid base for your future home.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex md:items-center">
                  <div className="hidden md:block md:w-1/2 md:pr-8 text-right">
                    <div className="mt-2 p-4 bg-sage-teal/5 rounded-lg">
                      <p className="text-sm text-gray-700">Our engineers create the structural framework using high-grade materials and cutting-edge techniques.</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-0 h-6 w-6 rounded-full bg-sage-teal border-4 border-white shadow transform md:-translate-x-1/2"></div>
                  
                  <div className="md:w-1/2 md:pl-8">
                    <h4 className="text-sage-teal font-bold">Structure</h4>
                    <p className="text-sm text-gray-600">The framework of your dreams</p>
                    <div className="mt-2 p-4 bg-sage-teal/5 rounded-lg md:hidden">
                      <p className="text-sm text-gray-700">Our engineers create the structural framework using high-grade materials and cutting-edge techniques.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:flex md:items-center">
                  <div className="hidden md:block md:w-1/2 md:pr-8 text-right">
                    <h4 className="text-deep-teal font-bold">Finishes</h4>
                    <p className="text-lg text-gray-600">Quality homes in the making, soon to be yours.</p>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-0 h-6 w-6 rounded-full bg-deep-teal border-4 border-white shadow transform md:-translate-x-1/2"></div>
                  
                  <div className="md:w-1/2 md:pl-8">
                    <h4 className="text-deep-teal font-bold md:hidden">Finishes</h4>
                    <p className="text-lg text-gray-600 md:hidden">Quality homes in the making, soon to be yours.</p>
                    <div className="mt-2 p-4 bg-sage-teal/5 rounded-lg">
                      <p className="text-sm text-gray-700">Premium finishes and thoughtful details transform the structure into a beautiful, functional home.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <h2 className="text-2xl md:text-3xl font-display font-bold text-deep-teal mb-6">
          Current Developments
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ongoingProperties.length > 0 ? (
            ongoingProperties.map((property, index) => (
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
              <i className="fas fa-hard-hat text-5xl text-amber-gold mb-4"></i>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Ongoing & Nearing Possession Projects</h1>
              <p className="text-gray-600 mb-6">
                We're planning exciting new developments. Stay tuned for announcements.
              </p>
              <Button 
                variant="primary" 
                href="/contact"
              >
                Register for Updates
              </Button>
            </div>
          )}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-16 bg-deep-teal p-8 md:p-10 rounded-xl shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-gold/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-sage-teal/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Early Bird Advantages
              </h3>
              <p className="text-white/80 max-w-xl">
                Invest early in our ongoing projects to secure the best units, preferred locations, and attractive pre-launch prices. 
                Our priority booking system ensures you'll be among the first to select your ideal home.
              </p>
            </div>
            <Button 
              variant="accent" 
              href="/contact" 
              className="shrink-0"
              animation="bounce"
            >
              Contact Sales Team
            </Button>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
} 