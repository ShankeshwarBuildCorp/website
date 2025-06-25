import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingAnimation({ isLoading }) {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <div className="relative w-64 h-64 flex flex-col items-center justify-center">
        {/* Building Animation */}
        <div className="relative w-40 h-48">
          {/* Base of building */}
          <motion.div 
            className="absolute bottom-0 w-full h-12 bg-deep-teal rounded-sm"
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          
          {/* Middle part */}
          <motion.div 
            className="absolute bottom-12 w-full h-24 bg-sage-teal rounded-sm"
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          />
          
          {/* Top part */}
          <motion.div 
            className="absolute bottom-36 w-full h-12 bg-deep-teal rounded-sm"
            initial={{ scaleY: 0, originY: 1 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          />
          
          {/* Roof */}
          <motion.div 
            className="absolute bottom-48 left-4 right-4 h-6 bg-amber-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
          />
          
          {/* Windows - multiple windows appearing in sequence */}
          {[...Array(6)].map((_, i) => {
            const row = Math.floor(i / 2);
            const col = i % 2;
            const delay = 2 + (i * 0.15);
            
            return (
              <motion.div
                key={i}
                style={{ 
                  left: col === 0 ? '25%' : '65%',
                  bottom: row === 0 ? '6%' : row === 1 ? '30%' : '54%', 
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#FBF5DD' // cream color for windows
                }}
                className="absolute w-4 h-4 rounded-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: delay }}
              />
            );
          })}
        </div>
        
        {/* Progress Bar */}
        <motion.div 
          className="w-48 h-1.5 bg-sage-teal/30 rounded-full mt-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div 
            className="h-full bg-amber-gold"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Loading Text */}
        <motion.p 
          className="mt-4 text-deep-teal font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Building Your Experience...
        </motion.p>
      </div>
    </div>
  );
} 