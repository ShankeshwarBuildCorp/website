import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getAmenityIcon } from '../icons/AmenityIcons';

const PropertyAmenities = ({ amenities = [], propertyId = '', amenityImages = [] }) => {
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Define amenity categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'recreational', name: 'Recreational' },
    { id: 'convenience', name: 'Convenience' },
    { id: 'security', name: 'Security' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'others', name: 'Others' }
  ];
  
  // Assign category if not provided
  const categorizedAmenities = amenities.map(amenity => {
    // Extract name if amenity is an object with a name property
    const amenityName = typeof amenity === 'object' ? amenity.name : amenity;
    const amenityCategory = typeof amenity === 'object' ? amenity.category : null;
    
    // Create a standard amenity object format
    const standardAmenity = {
      name: amenityName,
      category: amenityCategory
    };
    
    // If category is not provided, categorize based on name
    if (!standardAmenity.category) {
      if (/gym|sport|play|game|swim|jogging|track|recreation|aerobic|lawn|park/i.test(standardAmenity.name)) {
        standardAmenity.category = 'recreational';
      } else if (/security|cctv|surveillance|guard/i.test(standardAmenity.name)) {
        standardAmenity.category = 'security';
      } else if (/water|solar|energy|waste|sewage|storm/i.test(standardAmenity.name)) {
        standardAmenity.category = 'sustainability';
      } else if (/parking|lift|elevator|lobby|power|backup|cafeteria|24x7/i.test(standardAmenity.name)) {
        standardAmenity.category = 'convenience';
      } else {
        standardAmenity.category = 'others';
      }
    }
    
    return standardAmenity;
  });
  
  // Filter amenities by category
  const filteredAmenities = selectedCategory === 'all' 
    ? categorizedAmenities 
    : categorizedAmenities.filter(amenity => amenity.category === selectedCategory);
  
  // Determine how many amenities to show initially
  const initialDisplayCount = 24;
  const hasMoreAmenities = filteredAmenities.length > initialDisplayCount;
  const displayedAmenities = showAllAmenities ? filteredAmenities : filteredAmenities.slice(0, initialDisplayCount);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  // Get key amenities for featured display
  const getKeyAmenities = () => {
    const priorities = [
      'Co-Working Space & Library', 'Swimming Pool', 'Gym', 'Clubhouse', 
      'Children\'s Play Area', 'Landscaped Gardens', 'Jogging Track', 'Indoor Games'
    ];
    
    // Try to find amenities that match our priorities
    const keyAmenities = [];
    
    priorities.forEach(priority => {
      const found = categorizedAmenities.find(amenity => 
        amenity.name.toLowerCase().includes(priority.toLowerCase())
      );
      
      if (found && keyAmenities.length < 3) {
        keyAmenities.push(found);
      }
    });
    
    // If we don't have 3 key amenities yet, add some more
    if (keyAmenities.length < 3 && categorizedAmenities.length > 0) {
      const remaining = categorizedAmenities
        .filter(a => !keyAmenities.includes(a))
        .slice(0, 3 - keyAmenities.length);
      
      keyAmenities.push(...remaining);
    }
    
    // Add descriptions to the key amenities
    return keyAmenities.map(amenity => {
      let description = '';
      
      if (amenity.name.toLowerCase().includes('swimming') || amenity.name.toLowerCase().includes('pool')) {
        description = 'Enjoy a refreshing swim in our beautifully designed pool perfect for recreation and relaxation.';
      } else if (amenity.name.toLowerCase().includes('gym')) {
        description = 'Stay fit with our state-of-the-art gymnasium equipped with cardio and strength training equipment.';
            } else if (amenity.name.toLowerCase().includes('library') || amenity.name.toLowerCase().includes('co-working')) {
        description = 'A quiet and well-equipped space for working, studying, or reading.';
      } else if (amenity.name.toLowerCase().includes('garden') || amenity.name.toLowerCase().includes('landscape')) {
        description = 'Relax amidst lush green spaces perfect for morning walks and evening relaxation.';
      } else if (amenity.name.toLowerCase().includes('play') || amenity.name.toLowerCase().includes('children')) {
        description = 'A safe and engaging play area designed specifically for children of all ages.';
      } else if (amenity.name.toLowerCase().includes('club')) {
        description = 'A premium clubhouse with multiple facilities for recreation and social gatherings.';
      } else {
        description = 'Enhancing your lifestyle with premium facilities designed for comfort and convenience.';
      }
      
      return {
        ...amenity,
        description
      };
    });
  };

  // Next image in gallery
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % amenityImages.length);
  };

  // Previous image in gallery
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + amenityImages.length) % amenityImages.length);
  };

  if (!amenities || amenities.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No amenities available for this property</p>
      </div>
    );
  }

  const keyAmenities = getKeyAmenities();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Project Amenities</h2>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-all text-sm ${
              selectedCategory === category.id
              ? 'bg-deep-teal text-white font-medium shadow-sm'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Amenity Grid - Simplified and smaller */}
      <motion.div 
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {displayedAmenities.map((amenity, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center justify-center bg-white rounded-lg p-2 text-center border border-gray-100 hover:border-amber-gold/30 hover:bg-amber-gold/5 transition-all"
          >
            <div className="w-8 h-8 flex items-center justify-center mb-1.5 text-deep-teal">
              {getAmenityIcon(amenity.name)}
            </div>
            <span className="text-xs text-gray-700 text-center leading-tight">
              {amenity.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Show More/Less Button */}
      {hasMoreAmenities && (
        <div className="mt-6 text-center">
          <button 
            onClick={() => setShowAllAmenities(!showAllAmenities)}
            className="inline-flex items-center bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-200 text-deep-teal hover:bg-deep-teal hover:text-white text-sm font-medium transition-colors"
          >
            {showAllAmenities ? "Show Less" : "Show More"}
            <svg 
              className={`w-4 h-4 ml-2 transition-transform ${showAllAmenities ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
      
      {/* Featured Amenities - Simplified */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Key Amenities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {keyAmenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mr-3 mt-1 w-8 h-8 flex items-center justify-center text-deep-teal">
                {getAmenityIcon(amenity.name)}
              </div>
              <div>
                <h4 className="font-medium text-deep-teal text-sm">{amenity.name}</h4>
                <p className="text-xs text-gray-600 mt-1">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Amenity Image Gallery - Simple Slider */}
      {amenityImages.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Amenities Gallery</h3>
          <div className="relative">
            {/* Main Image Display */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={amenityImages[currentImageIndex]}
                alt={`Property Amenity ${currentImageIndex + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Only show navigation if there are multiple images */}
            {amenityImages.length > 1 && (
              <>
                {/* Navigation buttons */}
                <button 
                  onClick={prevImage} 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 text-deep-teal"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextImage} 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 text-deep-teal"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {currentImageIndex + 1} / {amenityImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      
      {/* Amenities Disclaimer */}
      <div className="mt-8 text-xs text-gray-500 bg-gray-50 p-3 rounded-md">
        <p>
          Amenities shown are as per the current development plan and may be subject to change.
          Please check with our sales team for the latest updates on available amenities.
        </p>
      </div>
      
      {/* Add styling for removing scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PropertyAmenities; 