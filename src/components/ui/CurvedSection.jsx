import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function CurvedSection({
  children,
  background = 'white',
  curveHeight = 50,
  className = '',
  animation = true,
  delay = 0,
  id
}) {
  const getBgColor = () => {
    switch (background) {
      case 'white':
        return 'bg-white';
      case 'cream':
        return 'bg-cream';
      case 'sage':
        return 'bg-sage-teal';
      case 'deep-teal':
        return 'bg-deep-teal text-white';
      case 'gradient':
        return 'bg-gradient-to-br from-deep-teal via-sage-teal to-amber-gold text-white';
      case 'none':
        return '';
      default:
        return 'bg-white';
    }
  };

  const curvePath = `M0,${curveHeight} C150,0 350,0 500,${curveHeight} L500,500 L0,500 Z`;
  
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: delay
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay + 0.3
      }
    }
  };

  const curveVariants = {
    hidden: { scaleX: 0.8 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay + 0.1
      }
    }
  };
  
  const WrapperComponent = animation ? motion.section : 'section';
  const ContentWrapperComponent = animation ? motion.div : 'div';
  const CurveWrapperComponent = animation ? motion.div : 'div';

  return (
    <WrapperComponent
      id={id}
      className={cn(
        "relative mt-20 px-4 py-16 overflow-hidden", // Added some default padding and margin-top as in original
        background !== 'none' && getBgColor(),
        className
      )}
      initial={animation ? "hidden" : undefined}
      whileInView={animation ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }} // Triggers animation when 100px from viewport edge
      variants={animation ? containerVariants : undefined}
    >
      {/* Top curve */}
      <CurveWrapperComponent 
        className="absolute top-0 left-0 right-0 h-20 w-full overflow-hidden -mt-20" // height and negative margin create the curve space
        variants={animation ? curveVariants : undefined}
      >
        <svg
          className={cn(
            "absolute bottom-0 w-full", 
            // The SVG itself should not have a background, its fill color will come from the path
            // The color is set on the path element using `fill="currentColor"` which inherits from parent text color
            // If background is 'deep-teal', text is white (cream), so curve is white. If background is white, curve is black (default text).
            // We need the SVG to be the color of the section *below* it, or make the path the color of the current section background.
            // The original code applies getBgColor() here, which is problematic if the goal is a seamless curve.
            // For now, let's assume the fill="currentColor" on path is what gives it color from parent.
          )}
          viewBox="0 0 500 150" // Fixed viewBox
          preserveAspectRatio="none" // Stretches SVG to fill container
        >
          <path
            d={curvePath}
            // The fill color should ideally be the background color of the *section this curve is on top of*.
            // Or, it takes the current section's background color. The original was `fill="currentColor"` 
            // which means it takes text color. If bg is deep-teal, text is white, curve is white.
            // If bg is white, text is deep-teal, curve is deep-teal. This might be intended to look like the section is cutting *out* of what's below.
            // For simplicity and to match the visual implication of the original code (where svg also had getBgColor()),
            // let's make the path fill the same color as the section background.
            className={cn(background !== 'none' && getBgColor())} // Apply background color class directly to path for fill
          />
        </svg>
      </CurveWrapperComponent>
      
      {/* Content container */}
      <ContentWrapperComponent 
        className="container relative z-10 mx-auto max-w-7xl" // Ensure content is above the curve visually
        variants={animation ? contentVariants : undefined}
      >
        {children}
      </ContentWrapperComponent>
    </WrapperComponent>
  );
} 