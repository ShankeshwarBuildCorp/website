import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getAllProperties } from '../data/properties';
import { PROPERTY_STATUS } from '../config/constants';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectsPage() {
  const allProperties = getAllProperties();
  const upcomingCount = allProperties.filter(p => p.status === PROPERTY_STATUS.UPCOMING.value).length;
  const ongoingCount = allProperties.filter(p => 
    p.status === PROPERTY_STATUS.UNDER_CONSTRUCTION.value || 
    p.status === PROPERTY_STATUS.NEARING_POSSESSION.value).length;
  const completedCount = allProperties.filter(p => 
    p.status === PROPERTY_STATUS.COMPLETED.value || 
    p.status === PROPERTY_STATUS.READY_TO_MOVE_IN.value).length;

  return (
    <div className="min-h-screen bg-cream py-12 md:py-20">
      <Container>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-amber-gold/10 text-amber-gold text-sm font-semibold rounded-full mb-4">
            OUR PROJECTS
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-deep-teal mb-6">
            Discover Our Real Estate <span className="text-amber-gold">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore our diverse collection of properties, each crafted with precision and built to exceed expectations.
            From upcoming launches to completed landmarks, find the perfect space for your needs.
          </p>
          <Button 
            variant="primary" 
            href="/projects/all" 
            size="lg"
            animation="bounce"
          >
            View All Projects
          </Button>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Upcoming Projects Card */}
          {upcomingCount > 0 && (
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              whileHover={{ scale: 1.02 }}
              variants={fadeIn}
            >
              <div className="relative h-72 overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(/images/website/building-modern.jpeg)` }}
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-white text-3xl md:text-4xl font-display font-semibold drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110">
                    Upcoming Projects
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-center">
                  Be the first to discover our {upcomingCount} upcoming developments and register your interest early.
                </p>
                <div className="flex justify-center">
                  <Button 
                    to="/projects/all?filter=upcoming"
                    variant="outline"
                    className="px-6 py-3 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    <i className="fas fa-calendar-alt mr-2"></i>
                    View Upcoming Projects
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Ongoing Projects Card */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            whileHover={{ scale: 1.02 }}
            variants={fadeIn}
          >
            <div className="relative h-72 overflow-hidden">
              <div 
                className="h-full w-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(/images/website/under-construction.jpeg)` }}
              />
              <div className="absolute inset-0 bg-sage-teal bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110">
                  Ongoing Projects
                </h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 text-center">
                Discover our collection of {ongoingCount} projects currently under development, 
                designed with precision and built with excellence.
              </p>
              <div className="flex justify-center">
                <Button 
                  to="/projects/all?filter=ongoing"
                  variant="outline"
                  className="px-6 py-3 border-sage-teal text-deep-teal hover:bg-sage-teal hover:text-deep-teal"
                >
                  <i className="fas fa-hard-hat mr-2"></i>
                  View Ongoing Projects
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Completed Projects Card */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            whileHover={{ scale: 1.02 }}
            variants={fadeIn}
          >
            <div className="relative h-72 overflow-hidden">
              <div 
                className="h-full w-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(/images/website/completed-building.jpeg)` }}
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110">
                  Completed Projects
                </h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 text-center">
                Explore our portfolio of {completedCount} completed properties that exemplify 
                our commitment to quality and craftsmanship.
              </p>
              <div className="flex justify-center">
                <Button 
                  to="/projects/all?filter=completed"
                  variant="outline"
                  className="px-6 py-3 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <i className="fas fa-check-circle mr-2"></i>
                  View Completed Projects
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Section: Project Statistics */}
        <motion.div 
          className="mt-20 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-4xl font-display font-bold text-amber-gold mb-2">
                {upcomingCount + ongoingCount + completedCount}+
              </div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            
            <div className="text-center p-6 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-4xl font-display font-bold text-deep-teal mb-2">
                12+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            
            <div className="text-center p-6 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-4xl font-display font-bold text-amber-gold mb-2">
                200+
              </div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl font-display font-bold text-deep-teal mb-2">
                5+
              </div>
              <div className="text-gray-600">Cities</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
} 