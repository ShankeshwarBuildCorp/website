import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ScrollFadeSection({
  children,
  delay = 0.1,
  direction = 'up',
  distance = 50,
  once = true,
  duration = 0.6,
  className = '',
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  // isVisible state might not be strictly necessary with IntersectionObserver controlling animations directly
  // but can be kept if used for other conditional logic not shown here.

  const getDirectionalVariants = () => {
    const hidden = { opacity: 0 };
    const visible = { 
      opacity: 1, 
      transition: { 
        duration,
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0]  // Cubic bezier for smooth easing
      } 
    };

    switch (direction) {
      case 'up':
        hidden.y = distance;
        visible.y = 0;
        break;
      case 'down':
        hidden.y = -distance;
        visible.y = 0;
        break;
      case 'left':
        hidden.x = distance;
        visible.x = 0;
        break;
      case 'right':
        hidden.x = -distance;
        visible.x = 0;
        break;
      case 'none':
        // No directional movement, just fade
        break;
      default:
        break;
    }
    return { hidden, visible };
  };

  const variants = getDirectionalVariants();

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          if (once) {
            if (currentRef) observer.unobserve(currentRef);
          }
        } else if (!once) {
          controls.start('hidden');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, once, variants]); // Added variants to dependency array as it's used in effect logic indirectly

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
} 