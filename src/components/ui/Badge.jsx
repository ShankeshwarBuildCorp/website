import React from 'react';
import { cn } from '../../lib/utils'; // Adjusted import path

// export type BadgeVariant = 'default' | 'outline' | 'success' | 'warning' | 'error'; // Type definition removed for JS

// interface BadgeProps { // Interface removed for JS
//   children: React.ReactNode;
//   variant?: BadgeVariant;
//   className?: string;
// }

export default function Badge({ 
  children, 
  variant = 'default', 
  className 
  // }: BadgeProps // Type annotation removed for JS
}) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outline':
        return 'border border-gray-300 text-gray-700 bg-transparent';
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'warning':
        // Using amber for warning to match project theme potentially
        return 'bg-amber-100 text-amber-800'; 
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
        getVariantClasses(),
        className
      )}
    >
      {children}
    </span>
  );
} 