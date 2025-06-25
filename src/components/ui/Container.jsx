import React from 'react';
import { cn } from '../../lib/utils';

export default function Container({
  children,
  className = '',
  as: Component = 'div',
  maxWidth = 'xl',
  padding = true,
  centered = true,
  fluid = false,
  withGlow = false,
}) {
  // Maximum width classes
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    'full': 'max-w-full',
  };

  // Padding classes - can be boolean or string like 'x' or 'y'
  let paddingClass = '';
  if (padding === true) {
    paddingClass = 'px-4 md:px-6 lg:px-8';
  } else if (padding === 'x') {
    paddingClass = 'px-4 md:px-6 lg:px-8';
  } else if (padding === 'y') {
    paddingClass = 'py-4 md:py-6 lg:py-8';
  } else if (padding === 'sm') {
    paddingClass = 'p-2 md:p-3 lg:p-4';
  } else if (padding === 'md') {
    paddingClass = 'p-4 md:p-6 lg:p-8';
  } else if (padding === 'lg') {
    paddingClass = 'p-6 md:p-8 lg:p-12';
  }

  // Centered class
  const centeredClass = centered ? 'mx-auto' : '';
  
  // Fluid - override maxWidth if true
  const widthClass = fluid ? 'w-full' : maxWidthClasses[maxWidth];
  
  // Glow effect for emphasis
  const glowClass = withGlow ? 'relative before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-amber-gold/20 before:via-deep-teal/10 before:to-sage-teal/20 before:blur-xl before:rounded-xl' : '';

  // Combine all classes
  const containerClasses = cn(
    centeredClass,
    widthClass,
    paddingClass,
    glowClass,
    className
  );

  return (
    <Component className={containerClasses}>
      {children}
    </Component>
  );
} 