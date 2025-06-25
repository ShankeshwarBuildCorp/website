import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

// Modern hero section with 3D effects
const HeroSection = () => {
  // Refs for scroll and mouse tracking
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  // Scroll-based animation values
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax transformations
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const buildingY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const buildingScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0.7]);
  
  // Handle window resize and check for mobile
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({
          x: e.clientX / dimensions.width - 0.5,
          y: e.clientY / dimensions.height - 0.5
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [dimensions, isMobile]);

  // Calculate 3D transform values based on mouse position
  const calcX = mousePosition.x * 12; // reduced movement strength
  const calcY = mousePosition.y * -12;
  
  // Rotate 3D elements based on mouse position
  const transformBuilding = `perspective(1000px) rotateX(${calcY}deg) rotateY(${calcX}deg) translateZ(10px)`;
  const transformShape1 = `perspective(1000px) rotateY(${calcX * 1.8}deg) translateZ(20px)`;
  const transformShape2 = `perspective(1000px) rotateX(${calcY * 1.3}deg) translateZ(30px)`;

  return (
    <section 
      ref={heroRef}
      className="relative h-[92vh] w-full overflow-hidden bg-deep-teal/5 flex items-center"
      style={{ perspective: '1000px' }}
    >
      {/* Modern Architectural Background with Parallax */}
        <motion.div
        className="absolute inset-0 z-0"
        style={{ 
          y: buildingY,
          scale: buildingScale
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 md:inset-[5%]"
            style={{
              backgroundImage: `url('/images/website/bg-3.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: isMobile ? 'none' : `${transformBuilding} scale(1.2)`,
              filter: 'brightness(0.7) blur(2px)',
              willChange: 'transform'
            }}
          />
        </div>
      
        {/* Darkened and blurred overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-deep-teal/95 via-deep-teal/70 to-deep-teal/50 backdrop-blur-sm"
          style={{ opacity: overlayOpacity, pointerEvents: 'none' }}
        />
      </motion.div>
      
      {/* Removed 3D Geometric Shapes */}
      
      {/* Content Container - Reduced vertical padding */}
      <div className="relative container mx-auto px-6 md:px-12 z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column - Content with enhanced visibility */}
      <motion.div
            className="flex flex-col justify-center"
            style={{ y: contentY }}
          >
            {/* Branded tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-amber-gold/90 backdrop-blur-sm px-4 py-2 rounded-full mb-5 shadow-lg self-start"
          >
              <span className="text-xs font-semibold text-deep-teal tracking-wide">PREMIUM REAL ESTATE</span>
          </motion.div>
          
            {/* Main heading with staggered animation and text shadow */}
            <div className="overflow-hidden">
            <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-5 text-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.span
                  className="block"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Creating
                </motion.span>
                <motion.span
                  className="block text-amber-gold"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Exceptional
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Living Spaces
                </motion.span>
            </motion.h1>
          </div>
          
            {/* Description with backdrop for better readability */}
          <motion.p
              className="text-lg text-white max-w-lg mb-8 leading-relaxed backdrop-blur-[2px] bg-black/5 p-3 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
          >
              Premium quality homes crafted with precision, designed for modern living with 
              attention to every detail, creating communities where life unfolds beautifully.
          </motion.p>
          
            {/* CTA Buttons */}
          <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="/projects/ongoing"
              animation="bounce"
              className="backdrop-blur-sm"
            >
                Explore Our Projects
            </Button>
            <Button
                variant="outline"
              size="lg"
              href="/contact"
              className="text-white border-white hover:bg-white/20"
            >
                Contact Us
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Right Column - 3D Element for large screens - Updated with building focus */}
        {!isMobile && (
          <motion.div
            className="hidden md:flex items-center justify-center relative w-full h-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div 
              className="relative w-[60%] aspect-[4/5] rounded-2xl shadow-2xl"
              style={{ 
                transform: `perspective(1000px) rotateY(${calcX * -2}deg) rotateX(${calcY * -1}deg)`,
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out',
                boxSizing: 'border-box',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('/images/website/completed-building.jpeg')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  transform: 'scale(1.1) translateZ(0)',
                  width: '100%',
                  height: '100%',
                  filter: 'brightness(0.9)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/90 via-transparent to-transparent" />
              
              {/* Specification Badges in Zig-Zag Pattern */}
              {/* Top Left - Luxury Residences (Half Out) */}
              <div 
                className="absolute top-[15%] left-0 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg"
                style={{ 
                  transform: `translateX(-40%) translateZ(40px) rotateY(${calcX * 0.5}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <div className="text-deep-teal font-bold">Authentic</div>
              </div>
              
              {/* Top Right - Premium Quality (Half Out) */}
              <div 
                className="absolute top-[25%] right-0 px-4 py-2 bg-amber-gold/90 text-white rounded-lg shadow-lg"
                style={{ 
                  transform: `translateX(40%) translateZ(50px) rotateY(${calcX * -0.5}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <div className="font-semibold">Committed</div>
              </div>
              
              {/* Middle Left - Modern Design (Half Out) */}
              <div 
                className="absolute top-[45%] left-0 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg"
                style={{ 
                  transform: `translateX(-30%) translateZ(45px) rotateY(${calcX * 0.4}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <div className="text-white font-semibold">Uncompromised</div>
              </div>
              
              {/* Middle Right - Smart Home (Half Out, Zig-Zag) */}
              <div 
                className="absolute top-[55%] right-0 px-4 py-2 bg-white/90 text-deep-teal rounded-lg shadow-lg"
                style={{ 
                  transform: `translateX(30%) translateZ(55px) rotateY(${calcX * -0.3}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <div className="font-semibold">Enduring</div>
              </div>
              
              {/* Bottom Left - Prime Location (Half Out) */}
              <div 
                className="absolute top-[75%] left-0 px-4 py-2 bg-deep-teal/80 text-white rounded-lg shadow-lg"
                style={{ 
                  transform: `translateX(-35%) translateZ(35px) rotateY(${calcX * 0.3}deg)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <div className="font-semibold">Trailblazing</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-gold to-amber-gold/50"></div>
        <motion.div
          className="w-3 h-3 rounded-full bg-amber-gold"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection; 