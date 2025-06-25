import React from 'react';
import Container from './Container';
import { cn } from '../../lib/utils';
// siteConfig could be imported if JS color values are needed, but Tailwind classes are preferred.
// import { siteConfig } from '../../config/site'; 

export default function Section({
  children,
  className = '',
  id,
  background = 'none', // 'cream', 'sage-teal', 'deep-teal', 'amber-gold', 'white', 'none'
  containerClassName = '',
  containerWidth = 'xl',
  padding = 'lg', // 'sm', 'md', 'lg', 'xl', 'none'
  withContainer = true,
}) {

  const backgroundStyles = {
    cream: 'bg-cream',
    'sage-teal': 'bg-sage-teal',
    'deep-teal': 'bg-deep-teal text-cream', // Added text-cream for contrast
    'amber-gold': 'bg-amber-gold',
    white: 'bg-white',
    none: '',
  };

  const paddingStyles = {
    sm: 'py-4 md:py-6',
    md: 'py-8 md:py-12',
    lg: 'py-12 md:py-16',
    xl: 'py-16 md:py-24',
    none: 'py-0',
  };

  const sectionFinalClassName = cn(
    backgroundStyles[background] || '',
    paddingStyles[padding] || '',
    className
  );

  return (
    <section 
      className={sectionFinalClassName}
      id={id}
    >
      {withContainer ? (
        <Container className={containerClassName} maxWidth={containerWidth}>
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
} 