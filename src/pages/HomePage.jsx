import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import PropertyCard from '../components/property/PropertyCard';
import { getPropertiesByStatus } from '../data/properties';
import Button from '../components/ui/Button';
import { PROPERTY_STATUS } from '../config/constants';
import HeroSection from '../components/home/HeroSection';
import AboutUsSummary from '../components/home/AboutUsSummary';
import AchievementsCounter from '../components/home/AchievementsCounter';
import TestimonialsSection from '../components/home/TestimonialsSection';
import OngoingPropertiesSlider from '../components/home/OngoingPropertiesSlider';
import OurCoreValues from '../components/home/OurCoreValues'; // Import the new component

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function HomePage() {
  const upcomingProperties = getPropertiesByStatus(PROPERTY_STATUS.UPCOMING.value).slice(0, 3);
  const completedProperties = getPropertiesByStatus(PROPERTY_STATUS.COMPLETED.value).slice(0, 3);

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section - Full width, no container */}
      <HeroSection />
      
      {/* About Us Summary */}
      <AboutUsSummary />
      
      {/* Ongoing Properties Slider */}
      <OngoingPropertiesSlider />
      
      {/* Our Core Values Section */}
      <OurCoreValues />
      
      {/* Achievements Counter Section */}
      <AchievementsCounter />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
} 