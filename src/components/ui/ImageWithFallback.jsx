import React, { useState, useEffect } from 'react';
import { PLACEHOLDER_IMAGES } from '../../config/constants'; // Using centralized placeholders

export default function ImageWithFallback({
  src,
  fallbackSrc = PLACEHOLDER_IMAGES.PROPERTY, // Default to generic property placeholder
  alt = 'image', // Provide a default alt text
  className,
  ...rest // Spread other img attributes like width, height, style, etc.
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src); // Update currentSrc if the src prop changes
  }, [src]);

  const handleError = () => {
    setCurrentSrc(fallbackSrc);
  };

  return (
    <img
      className={className}
      src={currentSrc}
      alt={alt}
      onError={handleError}
      {...rest}
    />
  );
} 