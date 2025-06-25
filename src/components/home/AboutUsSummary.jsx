import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const AboutUsSummary = () => {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  // Scroll animation setup for image transition
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"] // Animation plays as the element scrolls through the viewport
  });

  // Blueprint: Static upright, then falls back very quickly and fades
  const blueprintOpacity = useTransform(scrollYProgress,    [0, 0.3, 0.5], [1, 1, 0]); // Quicker transition: 0.3 to 0.5
  const blueprintScale = useTransform(scrollYProgress,      [0, 0.3, 0.5], [1, 1, 0.85]);
  const blueprintRotateX = useTransform(scrollYProgress,    [0, 0.3, 0.5], [0, 0, 90]); // Starts upright, then falls back
  const blueprintTranslateZ = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, -50]); // Reduced Z movement for bottom rotation

  // Building: Starts flat behind & hidden, then stands up very quickly
  const buildingOpacity = useTransform(scrollYProgress,     [0, 0.3, 0.5, 1], [0, 0, 1, 1]); // Quicker transition: 0.3 to 0.5
  const buildingScale = useTransform(scrollYProgress,       [0, 0.3, 0.5, 1], [0.85, 0.85, 1, 1]);
  const buildingRotateX = useTransform(scrollYProgress,     [0, 0.3, 0.5, 1], [90, 90, 0, 0]); // Starts flat (face up) behind, then stands up
  const buildingTranslateZ = useTransform(scrollYProgress,  [0, 0.3, 0.5, 1], [-50, -50, 0, 0]); // Stays behind, then moves to front

  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-amber-gold/5 rounded-full -top-12 -right-12"></div>
      <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-deep-teal/5 rounded-full -bottom-12 -left-12"></div>
      
      <Container>
        <motion.div 
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Text content column */}
          <div className="order-1 md:order-2">
            <motion.div className="mb-4" variants={itemVariants}>
              <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
                OUR STORY
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-deep-teal mb-6">
                Crafting <span className="text-amber-gold">Exceptional</span> Living Spaces Since 2011
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-lg text-deep-teal/80 mb-6 leading-relaxed">
                At Shankeshwar BuildCorp, we don't just build structures; we create vibrant communities where dreams take shape and families thrive. With an unwavering commitment to quality and attention to detail, our projects stand as testaments to architectural excellence and timeless design.
              </p>
              <p className="text-lg text-deep-teal/80 mb-8 leading-relaxed">
                From concept to completion, our team of experienced professionals works tirelessly to ensure each development exceeds expectations and enriches lives.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button 
                variant="primary" 
                href="/about" 
                animation="bounce"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                }
                iconPosition="left"
              >
                Our Management Team
              </Button>
              
              <Button 
                variant="outline" 
                href="/projects/ongoing"
              >
                View Ongoing Projects
              </Button>
            </motion.div>
          </div>
          
          {/* Image column with scroll transition */}
          <motion.div
            ref={scrollRef}
            className="order-2 md:order-1 relative h-[30rem] sm:h-[34rem] md:h-[38rem] flex items-center justify-center"
            style={{ perspective: '1200px' }} // Enables 3D space for children
            variants={itemVariants} // For initial animation of the column itself
          >
            <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* Blueprint Image Card */}
              <motion.div
                style={{
                  opacity: blueprintOpacity,
                  scale: blueprintScale,
                  rotateX: blueprintRotateX,
                  translateZ: blueprintTranslateZ,
                  transformOrigin: 'center bottom',
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backfaceVisibility: 'hidden'
                }}
                className="p-2 md:p-4" // Padding around the card content
              >
                <div className="w-full h-full max-w-sm md:max-w-md bg-slate-100 dark:bg-slate-800 p-3 md:p-4 rounded-xl shadow-2xl overflow-hidden ring-1 ring-slate-300 dark:ring-slate-700">
                  <img
                    src="/images/website/about-1.jpg" // Replace with actual image
                    alt="Architectural Blueprint"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-600/15 rounded-xl"></div>
                </div>
              </motion.div>

              {/* Building Image Card */}
              <motion.div
                style={{
                  opacity: buildingOpacity,
                  scale: buildingScale,
                  rotateX: buildingRotateX,
                  translateZ: buildingTranslateZ,
                  transformOrigin: 'center bottom',
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backfaceVisibility: 'hidden'
                }}
                className="p-2 md:p-4"
              >
                <div className="w-full h-full max-w-sm md:max-w-md bg-white dark:bg-gray-800 p-3 md:p-4 rounded-xl shadow-2xl overflow-hidden ring-1 ring-gray-300 dark:ring-gray-700">
                  <img
                    src="/images/website/about-2.jpg" // Replace with actual image
                    alt="Modern Completed Building"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/5 via-transparent to-amber-600/15 rounded-xl"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutUsSummary; 