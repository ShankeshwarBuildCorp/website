import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import PropertyCard from '../components/property/PropertyCard';
import { getAllProperties } from '../data/properties';

// Image import for banner (optional, can be a generic one or specific to investments)
import defaultBannerImage from '/images/website/under-construction.jpeg'; // Using a known existing image as fallback
// TODO: Replace '/images/website/under-construction.jpeg' with the actual path to your investment banner image when available.
// For example: import investmentBannerImageFromFile from '/images/website/investment-banner.jpg';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const InvestmentPage = () => {
  const allProperties = getAllProperties();
  const investmentProperties = allProperties.filter(p => p.type?.toLowerCase() === 'investment');

  // Fallback banner if specific investment banner is not available
  // const investmentBannerImage = investmentBannerImageFromFile; // Uncomment and use when actual image is added
  const bannerImage = defaultBannerImage; // Fallback to default if specific investment banner isn't set up 

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-cream"
    >
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }} // Use a relevant banner image
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-deep-teal/50 to-black/60" />
        
        <Container className="relative h-full">
          <div className="flex flex-col justify-center h-full">
            <div className="max-w-2xl">
              <motion.span 
                className="inline-block bg-amber-gold/90 text-deep-teal px-4 py-1 rounded-full text-sm font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                INVESTMENT OPPORTUNITIES
              </motion.span>
              
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl text-white font-display font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Secure Your Future with Prime Investments
              </motion.h1>
              
              <motion.p 
                className="text-white/90 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Explore exclusive investment properties designed for growth and long-term value. Find the perfect opportunity to expand your portfolio.
              </motion.p>
            </div>
          </div>
        </Container>
      </div>
      
      <Container className="py-12">
        {investmentProperties.length > 0 ? (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {investmentProperties.map(property => (
                <PropertyCard key={property.id || property.slug} property={property} />
              ))}
            </div>
          </motion.section>
        ) : (
          <motion.div 
            className="text-center py-10"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ delay: 0.5}}
          >
            <img src="/images/website/no-results.svg" alt="No investment properties found" className="mx-auto h-40 mb-6"/>
            <h2 className="text-2xl font-semibold text-deep-teal mb-2">No Investment Opportunities Currently Available</h2>
            <p className="text-gray-600">Please check back later or contact us for upcoming investment projects.</p>
          </motion.div>
        )}
      </Container>
    </motion.div>
  );
};

export default InvestmentPage;
