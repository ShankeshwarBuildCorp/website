// src/components/Preloader.jsx
import React from 'react';

const Preloader = ({ isLoading }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      width: '100vw',  // Full viewport width
      position: 'fixed', // Cover the entire screen
      top: 0,
      left: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional: slightly transparent white background
      zIndex: 9999, // Ensure it's on top of other content
      opacity: isLoading ? 1 : 0,
      pointerEvents: isLoading ? 'auto' : 'none',
      transition: 'opacity 0.5s ease-in-out' // Smooth fade-out transition
    }}>
      <img src="/images/website/truck.gif" alt="Loading..." style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default Preloader;
