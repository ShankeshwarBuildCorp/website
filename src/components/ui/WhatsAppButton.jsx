import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { siteConfig } from '../../config/site'; // Adjusted path

export const WhatsAppButton = ({
  phoneNumber = siteConfig.contact?.whatsapp, // Use optional chaining for safety
  message = "Hello, I'm interested in booking a property visit. Could you please provide more information?",
  className = '',
  variant = 'default',
  size = 'md',
  showIcon = true,
  label = 'Chat on WhatsApp',
}) => {
  if (!phoneNumber) {
    console.warn('WhatsAppButton: Phone number is not configured in siteConfig.contact.whatsapp');
    return null; // Or render a disabled button, or a message
  }

  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const hoverAnimation = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const sizeClasses = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const variantClasses = {
    default: 'bg-green-500 hover:bg-green-600 text-white',
    outline: 'bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
    icon: 'bg-green-500 hover:bg-green-600 text-white rounded-full p-2 aspect-square flex items-center justify-center',
  };

  return (
    <motion.a
      href={whatsappUrl}
      onClick={handleClick}
      target="_blank" // Keep target for desktop, mobile will follow link directly
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium rounded-md transition-colors duration-300',
        variant !== 'icon' && sizeClasses[size],
        variantClasses[variant],
        className
      )}
      initial="rest"
      whileHover="hover"
      animate="rest" // Ensures it returns to rest state
      variants={hoverAnimation}
      aria-label={label}
    >
      {showIcon && <FaWhatsapp className={variant === 'icon' ? 'text-2xl' : 'text-lg'} />}
      {variant !== 'icon' && <span>{label}</span>}
    </motion.a>
  );
};

export default WhatsAppButton; 