import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { getPropertiesByStatus } from '../../data/properties';
import { PROPERTY_STATUS } from '../../config/constants';
import Button from '../ui/Button';
import ImageWithFallback from '../ui/ImageWithFallback'; // Added for property image
import { getPropertyImageUrl } from '../../data/properties'; // Added for property image
import Container from '../ui/Container';

const OngoingPropertiesSlider = () => {
  // Get ongoing properties data
  const ongoingProperties = getPropertiesByStatus(PROPERTY_STATUS.UNDER_CONSTRUCTION.value);
  
  // Ensure we have at least 3 items for the slider
  // If fewer than 3, duplicate the properties to create a proper carousel effect
  const displayProperties = React.useMemo(() => {
    if (ongoingProperties.length === 0) {
      return [];
    } 
    if (ongoingProperties.length < 3) {
      // Duplicate properties until we have at least 3
      let duplicated = [...ongoingProperties];
      while (duplicated.length < 3) {
        duplicated = [...duplicated, ...ongoingProperties];
      }
      return duplicated.slice(0, 3);
    }
    return ongoingProperties;
  }, [ongoingProperties]);
  
  const totalProperties = displayProperties.length;
  
  // Slider state
  const [positions, setPositions] = useState([1, 0, 2]); // [left, center, right]
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  
  // Refs
  const sliderRef = useRef(null);
  const isInView = useInView(sliderRef, { once: false, amount: 0.2 });
  
  // Auto-rotate when in view and not interacting
  useEffect(() => {
    let timer;
    if (isInView && !isAnimating && !isDragging && totalProperties >= 3) {
      timer = setTimeout(() => {
        rotateRight();
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isInView, isAnimating, isDragging, positions, totalProperties]);
  
  // Position mapping
  const positionVariants = {
    left: {
      x: '-35%',
      y: 0,
      scale: 0.85,
      rotateY: '15deg',
      opacity: 0.7,
      filter: 'blur(1px) brightness(0.9)',
      zIndex: 2,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }
    },
    center: {
      x: '0%',
      y: 0,
      scale: 1,
      rotateY: '0deg',
      opacity: 1,
      filter: 'blur(0px) brightness(1)',
      zIndex: 10,
      transition: { 
        type: 'spring',
        stiffness: 350,
        damping: 30,
      }
    },
    right: {
      x: '35%',
      y: 0,
      scale: 0.85, 
      rotateY: '-15deg',
      opacity: 0.7,
      filter: 'blur(1px) brightness(0.9)',
      zIndex: 2,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }
    },
    incoming: {
      x: '-80%',
      y: 0,
      scale: 0.5,
      rotateY: '25deg',
      opacity: 0,
      filter: 'blur(2px) brightness(0.8)',
      zIndex: 1,
    },
    outgoing: {
      x: '80%',
      y: 0,
      scale: 0.5,
      rotateY: '-25deg',
      opacity: 0,
      filter: 'blur(2px) brightness(0.8)',
      zIndex: 1,
    }
  };
  
  // Get the position name based on card position index
  const getPositionName = (index) => {
    if (index === positions[0]) return "left";
    if (index === positions[1]) return "center";
    if (index === positions[2]) return "right";
    return positions.includes(index) ? "outgoing" : "incoming";
  };
  
  // Get the active index (center card)
  const getActiveIndex = () => positions[1];
  
  // Rotation functions with circular logic
  const rotateRight = () => {
    if (isAnimating || totalProperties < 3) return;
    setIsAnimating(true);
    
    setPositions(prevPositions => {
      const [left, center, right] = prevPositions;
      // Next property to come from the right side
      const nextRight = (right + 1) % totalProperties;
      
      // Move everything one step left
      return [center, right, nextRight];
    });
    
    setTimeout(() => setIsAnimating(false), 500); // Animation cooldown
  };
  
  const rotateLeft = () => {
    if (isAnimating || totalProperties < 3) return;
    setIsAnimating(true);
    
    setPositions(prevPositions => {
      const [left, center, right] = prevPositions;
      // Next property to come from the left side
      const nextLeft = (left - 1 + totalProperties) % totalProperties;
      
      // Move everything one step right
      return [nextLeft, left, center];
    });
    
    setTimeout(() => setIsAnimating(false), 500); // Animation cooldown
  };
  
  // Jump to a specific index
  const jumpToIndex = (targetIndex) => {
    if (isAnimating || targetIndex === positions[1] || totalProperties < 3) return;
    
    setIsAnimating(true);
    
    // Calculate positions based on target
    const prevIndex = (targetIndex - 1 + totalProperties) % totalProperties;
    const nextIndex = (targetIndex + 1) % totalProperties;
    
    setPositions([prevIndex, targetIndex, nextIndex]);
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Drag handlers for touch/mouse interactions
  const handleDragStart = (e) => {
    if (isAnimating || totalProperties < 3) return;
    setIsDragging(true);
    setDragStart(e.clientX || e.touches?.[0]?.clientX || 0);
  };
  
  const handleDragEnd = (e) => {
    if (!isDragging) return;
    
    const dragEnd = e.clientX || e.changedTouches?.[0]?.clientX || 0;
    const delta = dragEnd - dragStart;
    
    // Only rotate if drag distance is significant
    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        rotateLeft();
      } else {
        rotateRight();
      }
    }
    
    setIsDragging(false);
  };
  
  if (totalProperties === 0) {
    return null;
  }
  
  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-b from-sage-teal/5 to-transparent overflow-hidden" 
      ref={sliderRef}
    >
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-amber-gold/10 text-amber-gold text-sm font-semibold rounded-full mb-4">Featured Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-deep-teal mb-6">
            Our <span className="text-amber-gold">Ongoing</span> Projects
          </h2>
          <p className="text-lg text-deep-teal/70 max-w-3xl mx-auto">
            Explore our ongoing developments designed with precision, quality, and attention to detail
          </p>
        </motion.div>
        
        <div 
          className="relative w-full h-[600px] sm:h-[650px] md:h-[650px]"
          style={{ 
            position: 'relative', 
            perspective: '1500px',
            touchAction: 'pan-y'
          }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {/* Reflection Effect */}
          <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-deep-teal/5 to-transparent rounded-[50%] blur-sm"></div>
          
          {/* Carousel Stage */}
          <div className="absolute inset-0 flex items-center justify-center">
            {totalProperties >= 3 && displayProperties.map((property, index) => {
              // Only render cards that are in the current positions array or will soon be
              if (!positions.includes(index) && 
                  index !== (positions[0] - 1 + totalProperties) % totalProperties && 
                  index !== (positions[2] + 1) % totalProperties) {
                return null;
              }
              
              return (
                  <motion.div
                    key={`card-${index}`}
                    className="absolute w-[320px] h-[376px] sm:w-[450px] sm:h-[530px] md:w-[476px] md:h-[560px] lg:w-[493px] lg:h-[580px]"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      transformOrigin: 'center center',
                      willChange: 'transform',
                      cursor: positions[1] === index ? 'pointer' : 'default'
                    }}
                    animate={getPositionName(index)}
                    variants={positionVariants}
                    onClick={() => {
                      if (positions[1] === index) {
                        window.location.href = `/property/${property.slug}`;
                      } else if (positions[0] === index) {
                        rotateLeft();
                      } else if (positions[2] === index) {
                        rotateRight(); // Corrected onClick handler
                      }
                    }}
                  >
                    {/* Card visual structure: Image as background, blurred content overlay */}
                    <div className={`relative w-full h-full rounded-xl overflow-hidden group ${positions[1] === index ? 'shadow-2xl' : 'shadow-lg bg-black/10'}`}>
                      {/* Image as full background */}
                      <ImageWithFallback 
                        src={getPropertyImageUrl(property, 'thumbnail') || getPropertyImageUrl(property, 'exterior') || '/images/properties/property-placeholder.jpg'}
                        alt={property.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        draggable="false"
                      />
                      {/* Gradient overlay over the entire image, from bottom, to enhance text visibility for content */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                      {/* Content Section - Blurred, at the bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 backdrop-blur-sm bg-black/30 text-white rounded-b-xl">
                        <div className="mb-2">
                          <h3 className="text-base md:text-lg font-display font-semibold mb-1 text-white">
                            {property.name}
                          </h3>
                          <p className="text-xs md:text-sm mb-1.5 text-gray-200">
                            <i className="fas fa-map-marker-alt mr-1.5 text-xs text-amber-gold/90"></i>
                            {property.location?.city || property.location?.address || 'Prime Location'}
                          </p>
                          <p className="text-xs line-clamp-2 text-gray-300">
                            {property.shortDescription || 'Discover this amazing property offering modern living and great amenities.'}
                          </p>
                        </div>
                        
                        <div className={`mt-auto pt-2 transition-opacity duration-300 ${positions[1] === index ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}>
                          <Button 
                            href={`/property/${property.slug}`} 
                            variant={positions[1] === index ? "primary" : "outline"} 
                            size="sm" 
                            className={`w-full py-2 text-sm ${positions[1] === index 
                              ? 'bg-amber-gold hover:bg-amber-gold-dark text-deep-teal font-semibold' 
                              : 'border-white/60 text-white hover:bg-white/20 hover:border-white'}`}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                      
                      {/* Subtle Border for Active Card */}
                      {positions[1] === index && (
                        <div className="absolute inset-0 border-2 border-amber-gold/70 rounded-xl z-5 pointer-events-none shadow-[0_0_12px_rgba(225,173,1,0.4)]"></div>
                      )}
                    </div>
                  </motion.div>
                );
            })} {/* This closes displayProperties.map */}
          </div> {/* This closes the Carousel Stage div */}

          {/* Navigation Buttons */}
          {totalProperties > 1 && (
            <>
              <button 
                onClick={rotateLeft}
                disabled={isAnimating}
                className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full 
                         bg-white/80 hover:bg-white shadow-lg flex items-center justify-center z-30 
                         transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous property"
              >
                <i className="fas fa-chevron-left text-deep-teal text-xl"></i>
              </button>
              <button 
                onClick={rotateRight}
                disabled={isAnimating}
                className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full 
                         bg-white/80 hover:bg-white shadow-lg flex items-center justify-center z-30 
                         transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next property"
              >
                <i className="fas fa-chevron-right text-deep-teal text-xl"></i>
              </button>
            </>
          )}
          
          {/* Dots Indicator */}
          {totalProperties > 1 && (
            <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-3 z-30">
              {displayProperties.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => jumpToIndex(index)}
                  disabled={isAnimating || positions[1] === index}
                  className="group relative h-8 flex items-center justify-center"
                  aria-label={`Go to property ${index + 1}`}
                >
                  <span 
                    className={`w-3 h-3 rounded-full transition-all duration-500 
                    ${positions[1] === index 
                      ? 'bg-amber-gold scale-125 shadow-[0_0_10px_rgba(225,173,1,0.7)]' 
                      : 'bg-white/50 group-hover:bg-white/80'}`}
                  />
                  {positions[1] === index && (
                    <span className="absolute inset-0 w-3 h-3 bg-amber-gold/30 rounded-full animate-ping" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div> {/* Closes the main carousel wrapper from line 229 */}
        
        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Button 
            href="/projects/ongoing"
            variant="outline"
            size="lg"
            animation="bounce"
            className="border-amber-gold text-amber-gold hover:bg-amber-gold hover:text-white"
          >
            View All Ongoing Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OngoingPropertiesSlider;