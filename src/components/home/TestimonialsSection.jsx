import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import { testimonials } from '../../data/clientData.js'; // Import testimonials from clientData

// Use imported testimonials data from clientData.js
// Note: We'll use the imported testimonials array instead of the local one

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  const testimonialsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return;
    
    autoplayRef.current = setInterval(() => {
      setDirection(1); // Forward direction
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, testimonials.length]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  // Navigation handlers
  const handlePrev = () => {
    setDirection(-1); // Backward direction
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setDirection(1); // Forward direction
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }
    })
  };
  
  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-${i <= rating ? 'amber-gold' : 'gray-300'}`}>
          <i className="fas fa-star"></i>
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="py-16 md:py-24 bg-sage-teal/5 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-gold/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-deep-teal/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-amber-gold/10 text-amber-gold text-sm font-semibold rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-deep-teal mb-6">
            What Our <span className="text-amber-gold">Clients</span> Say
          </h2>
          <p className="text-lg text-deep-teal/70 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our happy homeowners about their experience with Shankeshwar Buildcorp.
          </p>
        </motion.div>
        
        <div 
          className="relative overflow-hidden"
          ref={testimonialsRef}
        >
          {/* Carousel container */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              className={`${!isMobile ? 'p-8' : 'p-4'}`}
            >
              {/* Desktop layout - side by side */}
              <div className={`flex flex-col ${!isMobile ? 'md:flex-row' : ''} bg-white rounded-xl shadow-xl overflow-hidden`}>
                {/* Left section - Image and name */}
                <div className={`${!isMobile ? 'md:w-1/3' : 'py-6'} bg-deep-teal text-white flex flex-col items-center justify-center p-8 relative`}>
                  {/* Quote icon in background */}
                  <div className="absolute top-4 left-4 opacity-20 text-7xl">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-amber-gold flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-deep-teal/20">
                        <span className="text-3xl font-bold text-deep-teal">
                          {testimonials[activeIndex].name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                      <div className="bg-amber-gold text-white rounded-full w-8 h-8 flex items-center justify-center">
                        <i className="fas fa-check"></i>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-1">{testimonials[activeIndex].name}</h3>
                  <p className="text-white/70 text-sm mb-3">{testimonials[activeIndex].occupation}</p>
                  <p className="text-amber-gold font-medium text-sm">
                    <i className="fas fa-map-marker-alt mr-1"></i> {testimonials[activeIndex].location}
                  </p>
                  
                  <div className="flex mt-4">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                </div>
                
                {/* Right section - Testimonial content */}
                <div className={`${!isMobile ? 'md:w-2/3' : ''} p-8 flex flex-col justify-center`}>
                  <div className="mb-6">
                    <div className="text-amber-gold text-4xl mb-4">
                      <i className="fas fa-quote-right"></i>
                    </div>
                    <p className="text-deep-teal/80 text-lg italic leading-relaxed">
                      {testimonials[activeIndex].feedback}
                    </p>
                  </div>
                  
                  {/* Project badge */}
                  <div className="mt-auto">
                    <span className="inline-block bg-sage-teal/10 text-deep-teal px-4 py-1.5 rounded-full text-sm">
                      <i className="fas fa-building mr-2"></i>
                      Client for <span className="font-semibold">{testimonials[activeIndex].project}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Carousel navigation */}
          <div className="flex justify-between mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-amber-gold w-6'
                      : 'bg-gray-300 hover:bg-amber-gold/50'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-deep-teal hover:text-amber-gold transition-colors"
                aria-label="Previous testimonial"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-deep-teal hover:text-amber-gold transition-colors"
                aria-label="Next testimonial"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a 
            href="https://g.co/kgs/foSrPwb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-deep-teal text-white hover:bg-amber-gold transition-all duration-300 font-semibold px-8 py-3 rounded-lg"
          >
            Share Your Experience
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default TestimonialsSection; 