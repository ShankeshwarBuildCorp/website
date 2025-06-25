import React from 'react';
import { Link } from 'react-router-dom';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-deep-teal text-white hover:bg-deep-teal/90 focus-visible:ring-deep-teal',
        secondary: 'bg-sage-teal text-deep-teal hover:bg-sage-teal/90 focus-visible:ring-sage-teal',
        accent: 'bg-amber-gold text-deep-teal hover:bg-amber-gold/90 focus-visible:ring-amber-gold',
        outline: 'border border-deep-teal text-deep-teal hover:bg-deep-teal/10 hover:text-deep-teal focus-visible:ring-deep-teal',
        ghost: 'text-deep-teal hover:bg-deep-teal/10 hover:text-deep-teal focus-visible:ring-deep-teal',
        glass: 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 focus-visible:ring-white',
        dark: 'bg-deep-teal/90 text-cream hover:bg-deep-teal focus-visible:ring-deep-teal border border-deep-teal/20',
        light: 'bg-cream text-deep-teal hover:bg-cream/90 focus-visible:ring-cream',
      },
      size: {
        xs: 'h-8 px-2.5 py-1.5 text-xs',
        sm: 'h-9 px-3 py-2',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 py-3',
        xl: 'h-14 px-8 py-4 text-base',
      },
      width: {
        auto: 'w-auto',
        full: 'w-full',
      },
      animation: {
        none: '',
        subtle: 'transition-all duration-300',
        bounce: 'transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0',
        grow: 'transition-all duration-300 hover:scale-105 active:scale-100',
        pulse: 'animate-pulse',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      width: 'auto',
      animation: 'subtle',
    },
  }
);

const MotionLink = motion(Link);
const MotionButton = motion(motion.button);

const Button = React.forwardRef(
  ({ 
    className, 
    variant, 
    size, 
    width,
    animation,
    href, 
    target, 
    rel, 
    children, 
    icon, 
    iconPosition = 'right',
    onClick,
    ...props 
  }, ref) => {
    const buttonClasses = cn(buttonVariants({ variant, size, width, animation, className }));
    const buttonContent = (
      <>
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );

    // Handle click with debug info
    const handleClick = (e) => {
      console.log("Button clicked:", href || "no href", e);
      if (onClick) {
        onClick(e);
      }
    };

    if (href) {
      // Use standard Link for internal navigation
      if (href.startsWith('/')) {
        return (
          <Link
            to={href}
            className={buttonClasses}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : rel}
            onClick={handleClick}
            ref={ref}
            {...props}
          >
            {buttonContent}
          </Link>
        );
      }
      
      // Use anchor for external links
      return (
        <a
          href={href}
          className={buttonClasses}
          target={target || '_blank'}
          rel={target === '_blank' ? 'noopener noreferrer' : rel}
          onClick={handleClick}
          ref={ref}
          {...props}
        >
          {buttonContent}
        </a>
      );
    }
    
    return (
      <button
        className={buttonClasses}
        ref={ref}
        onClick={handleClick}
        type="button"
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 