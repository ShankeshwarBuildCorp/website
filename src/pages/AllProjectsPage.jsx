import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import PropertyCard from '../components/property/PropertyCard';
import { getAllProperties, getPropertiesByType, getPropertiesByStatus } from '../data/properties';
import Button from '../components/ui/Button';
import { PROPERTY_STATUS } from '../config/constants';

// Image imports
import constructionImage from '/images/website/under-construction.jpeg';
import completedImage from '/images/website/completed-building.jpeg';

// Animation variants
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

const AllProjectsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize activeFilter directly from URL params
  const getInitialFilter = () => {
    const params = new URLSearchParams(location.search);
    const statusParam = params.get('filter');
    if (statusParam && ['all', 'ongoing', 'upcoming', 'completed'].includes(statusParam)) {
      return statusParam;
    }
    return 'all'; // Default if no valid filter in URL
  };

  const [activeFilter, setActiveFilter] = useState(getInitialFilter);
  
  // This effect ensures that if the URL is changed externally (e.g. browser back/forward)
  // while the component is mounted, the activeFilter state syncs up.
  useEffect(() => {
    const currentUrlFilter = getInitialFilter();
    if (activeFilter !== currentUrlFilter) {
      setActiveFilter(currentUrlFilter);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]); // We only want this to re-sync if location changes.

  // Update URL when filter changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    const params = new URLSearchParams(location.search);
    params.set('filter', filter);
    
    navigate(`/projects/all?${params.toString()}`, { replace: true });
  };
  
  // Get all properties
  const allProperties = getAllProperties();
  
  // Categorize properties by status and type
  const upcomingProperties = allProperties.filter(p => 
    p.status === PROPERTY_STATUS.UPCOMING.value &&
    p.type?.toLowerCase() !== 'investment'
  );
  const ongoingProperties = allProperties.filter(p => 
    (p.status === PROPERTY_STATUS.UNDER_CONSTRUCTION.value || 
    p.status === PROPERTY_STATUS.NEARING_POSSESSION.value) &&
    p.type?.toLowerCase() !== 'investment'
  );
  
  // Filter out investment properties from the completed properties
  const completedProperties = allProperties.filter(p => 
    (p.status === PROPERTY_STATUS.COMPLETED.value ||
    p.status === PROPERTY_STATUS.READY_TO_MOVE_IN.value) &&
    p.type?.toLowerCase() !== 'investment'
  );
  
  // Get properties by type
  const residentialProperties = allProperties.filter(p => 
    p.type?.toLowerCase() === 'residential'
  );
  const commercialProperties = allProperties.filter(p => 
    p.type?.toLowerCase() === 'commercial'
  );
  const investmentProperties = allProperties.filter(p => 
    p.type?.toLowerCase() === 'investment'
  );
  
  // Filter properties based on active filter
  const getFilteredProperties = () => {
    // Filter by status
    switch(activeFilter) {
      case 'upcoming':
        return upcomingProperties;
      case 'ongoing':
        return ongoingProperties;
      case 'completed':
        return completedProperties;
      default:
        return allProperties.filter(p => p.type?.toLowerCase() !== 'investment');
    }
  };

  const filteredProperties = getFilteredProperties();
  
  // Choose banner image based on active filter
  const getBannerImage = () => {
    switch(activeFilter) {
      case 'upcoming':
      case 'ongoing':
        return constructionImage;
      case 'completed':
        return completedImage;
      default:
        return constructionImage;
    }
  };

  // Get banner title based on active filter
  const getBannerTitle = () => {
    let title = '';
    
    // Add status
    switch(activeFilter) {
      case 'upcoming':
        title = 'Upcoming Projects';
        break;
      case 'ongoing':
        title = 'Ongoing Projects';
        break;
      case 'completed':
        title = 'Completed Projects';
        break;
      default:
        title = 'All Projects';
    }
    
    return title;
  };

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
          style={{ backgroundImage: `url(${getBannerImage()})` }}
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
                OUR PROPERTY PORTFOLIO
              </motion.span>
              
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl text-white font-display font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {getBannerTitle()}
              </motion.h1>
              
              <motion.p 
                className="text-white/90 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {activeFilter === 'upcoming' && 'Discover our exciting future developments that will redefine premium living spaces.'}
                {activeFilter === 'ongoing' && 'Explore our projects currently under construction - secure your dream home today.'}
                {activeFilter === 'completed' && 'View our portfolio of completed projects that showcase our commitment to quality and design.'}
                {activeFilter === 'all' && 'Discover our complete collection of premium real estate projects - from upcoming developments to completed landmarks that define modern living.'}
              </motion.p>
            </div>
          </div>
        </Container>
      </div>
      
      <Container className="py-12">
        {/* Status Filter buttons */}
        <div className="mb-10">
          <h3 className="text-xl font-medium text-deep-teal mb-4">Filter by Status</h3>
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-3 py-1.5 text-sm rounded-full font-medium transition-all ${
                activeFilter === 'all' 
                  ? 'bg-deep-teal text-white shadow-md' 
                  : 'bg-white text-deep-teal hover:bg-gray-100'
              }`}
            >
              All Projects
            </button>
            {ongoingProperties.length > 0 && (
              <button
                onClick={() => handleFilterChange('ongoing')}
                className={`px-3 py-1.5 text-sm rounded-full font-medium transition-all ${
                  activeFilter === 'ongoing' 
                    ? 'bg-sage-teal text-white shadow-md' 
                    : 'bg-white text-deep-teal hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-hard-hat mr-2"></i>
                Ongoing
              </button>
            )}
            {upcomingProperties.length > 0 && (
              <button
                onClick={() => handleFilterChange('upcoming')}
                className={`px-3 py-1.5 text-sm rounded-full font-medium transition-all ${
                  activeFilter === 'upcoming' 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-white text-deep-teal hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Upcoming
              </button>
            )}
            {completedProperties.length > 0 && (
              <button
                onClick={() => handleFilterChange('completed')}
                className={`px-3 py-1.5 text-sm rounded-full font-medium transition-all ${
                  activeFilter === 'completed' 
                    ? 'bg-green-600 text-white shadow-md' 
                    : 'bg-white text-deep-teal hover:bg-gray-100'
                }`}
              >
                <i className="fas fa-check-circle mr-2"></i>
                Completed
              </button>
            )}
          </div>
        </div>
        
        {/* Sections for each category when showing all */}
        {activeFilter === 'all' ? (
          <>
            {/* Upcoming Projects Section */}
            {upcomingProperties.length > 0 && (
              <motion.section 
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-deep-teal flex items-center">
                    <i className="fas fa-calendar-alt text-blue-500 mr-3"></i>
                    Upcoming Projects
                  </h2>
                  <div className="ml-4 h-0.5 flex-grow bg-blue-500/20 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {upcomingProperties.map((property, index) => (
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
                        isUpcomingProperty={true}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
            
            {/* Ongoing Projects Section */}
            {ongoingProperties.length > 0 && (
              <motion.section 
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-deep-teal flex items-center">
                    <i className="fas fa-hard-hat text-sage-teal mr-3"></i>
                    Ongoing Projects
                  </h2>
                  <div className="ml-4 h-0.5 flex-grow bg-sage-teal/30 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {ongoingProperties.map((property, index) => (
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
                  ))}
                </div>
              </motion.section>
            )}
            
            {/* Completed Projects Section */}
            {completedProperties.length > 0 && (
              <motion.section 
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-deep-teal flex items-center">
                    <i className="fas fa-check-circle text-green-600 mr-3"></i>
                    Completed Projects
                  </h2>
                  <div className="ml-4 h-0.5 flex-grow bg-green-500/20 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {completedProperties.map((property, index) => (
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
                        isCompletedProperty={true}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
            
            {/* Investment Properties Section */}
            {investmentProperties.length > 0 && (
              <motion.section 
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-deep-teal flex items-center">
                    <i className="fas fa-chart-line text-amber-gold mr-3"></i>
                    Investment Opportunities
                  </h2>
                  <div className="ml-4 h-0.5 flex-grow bg-amber-gold/30 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {investmentProperties.map((property, index) => (
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
                        isCompletedProperty={true}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </>
        ) : (
          // Show filtered properties with appropriate styling
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PropertyCard 
                    property={property} 
                    index={index} 
                    isCompletedProperty={activeFilter === 'completed' || property.status === PROPERTY_STATUS.COMPLETED.value}
                    isUpcomingProperty={activeFilter === 'upcoming' || property.status === PROPERTY_STATUS.UPCOMING.value}
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-16">
                <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
                <h3 className="text-2xl font-bold text-deep-teal mb-2">No Properties Found</h3>
                <p className="text-gray-600 mb-6">We couldn't find any properties matching your selected filters.</p>
                <Button onClick={() => {
                  setActiveFilter('all');
                  navigate('/projects/all', { replace: true });
                }} variant="primary">
                  View All Projects
                </Button>
              </div>
            )}
          </div>
        )}
        
        {/* CTA Section */}
        <motion.div 
          className="mt-16 bg-deep-teal p-8 md:p-10 rounded-xl shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:max-w-xl">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">Looking for your dream home?</h3>
              <p className="text-white/80">
                Get in touch with our sales team for personalized assistance in finding the perfect property that meets your needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="accent" 
                href="/contact" 
                className="whitespace-nowrap px-6 py-3"
              >
                Contact Us
              </Button>
              <Button 
                variant="ghost" 
                href="tel:+919604304919" 
                className="whitespace-nowrap text-white border-white hover:bg-white/10 px-6 py-3"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                Call Now
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default AllProjectsPage; 