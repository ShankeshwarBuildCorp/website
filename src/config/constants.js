/**
 * Application constants
 */

// Property status constants with display text and badge variants
export const PROPERTY_STATUS = {
  UPCOMING: {
    value: 'upcoming',
    label: 'Upcoming',
    color: 'bg-blue-500 text-white',
    icon: 'fas fa-calendar-alt'
  },
  UNDER_CONSTRUCTION: { 
    value: 'under-construction', 
    label: 'Under Construction',
    color: 'bg-sage-teal text-deep-teal',
    icon: 'fas fa-hard-hat'
  },
  NEARING_POSSESSION: { 
    value: 'nearing-possession', 
    label: 'Nearing Possession',
    color: 'bg-amber-gold text-deep-teal',
    icon: 'fas fa-key'
  },
  READY_TO_MOVE_IN: { 
    value: 'ready-to-move-in', 
    label: 'Ready to Move In',
    color: 'bg-green-600 text-white',
    icon: 'fas fa-home'
  },
  COMPLETED: { 
    value: 'completed', 
    label: 'Completed',
    color: 'bg-green-600 text-white',
    icon: 'fas fa-check-circle'
  }
};

// Property types
export const PROPERTY_TYPES = {
  RESIDENTIAL: 'Residential',
  COMMERCIAL: 'Commercial',
  PLOT: 'Plot',
  VILLA: 'Villa',
};

// Amenity categories
export const AMENITY_CATEGORIES = {
  LIFESTYLE: 'Lifestyle',
  HEALTH: 'Health & Wellness',
  CONVENIENCE: 'Convenience',
  SECURITY: 'Security',
  OUTDOOR: 'Outdoor',
  INDOOR: 'Indoor',
  ACCESSIBILITY: 'Accessibility',
  UTILITIES: 'Utilities',
};

// Default timeouts
export const TIMEOUTS = {
  MODAL_ANIMATION: 300,
  TOAST_DURATION: 5000,
  DEBOUNCE_SEARCH: 300,
  FORM_REDIRECT: 1000,
};

// Placeholder images (ensure these paths are valid in your public directory)
export const PLACEHOLDER_IMAGES = {
  PROPERTY: '/images/properties/default-property.jpg',
  PROFILE: '/images/placeholders/avatar.svg',
  VIDEO: '/images/placeholders/video-thumbnail.svg',
  FLOORPLAN: '/images/placeholders/floorplan.svg',
  LOGO: '/images/logo.svg',
  TEAM_MEMBER: '/images/website/placeholder-team.jpg',
};

// Form validation regexes
export const VALIDATION_REGEX = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PHONE: /^[0-9+\- ]{10,15}$/,
  PIN_CODE: /^\d{6}$/,
  PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
};

// API endpoints (Note: These were Next.js API routes. Backend needed for Vite.)
export const API_ENDPOINTS = {
  ENQUIRY: '/api/enquiry',
  NEWSLETTER: '/api/newsletter',
  CONTACT: '/api/contact',
  PROPERTY: '/api/properties',
};

// Format price into Indian currency format
export const formatPrice = (price) => {
  if (typeof price !== 'number') return '';
  return '₹ ' + price.toLocaleString('en-IN', { 
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });
};

// Format date string
export const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric' // Added day for more complete date
    });
  } catch (error) {
    return 'Invalid Date'; // Handle invalid date strings
  }
};

// Get property image URL with fallback
export const getPropertyImageUrl = (
  images, 
  index = 0, 
  fallbackPath = PLACEHOLDER_IMAGES.PROPERTY
) => {
  if (!Array.isArray(images) || images.length === 0 || !images[index]) {
    return fallbackPath;
  }
  return images[index]?.url || fallbackPath; // Optional chaining for safety
};

// Media asset types
export const MEDIA_TYPES = {
  EXTERIOR: 'exterior',
  INTERIOR: 'interior',
  AMENITIES: 'amenities',
  FLOOR_PLAN: 'floor-plan',
  LOCATION: 'location',
  CONSTRUCTION: 'construction'
};

// Document types
export const DOCUMENT_TYPES = {
  BROCHURE: 'brochure',
  FLOOR_PLAN: 'floor-plan',
  LAYOUT: 'layout',
  LEGAL: 'legal',
  PRICE_LIST: 'price-list',
  SPECIFICATION: 'specification'
};

// Contact form types
export const CONTACT_FORM_TYPES = {
  GENERAL: 'general',
  PROPERTY_ENQUIRY: 'property-enquiry',
  SITE_VISIT: 'site-visit',
  COMPLAINT: 'complaint',
};

// Image sizes
export const IMAGE_SIZES = {
  THUMBNAIL: {
    width: 300,
    height: 200
  },
  CARD: {
    width: 600,
    height: 400
  },
  DETAIL: {
    width: 1200,
    height: 800
  },
  BANNER: {
    width: 1920,
    height: 1080
  }
};

// Property helper functions
export const getPropertyStatusConfig = (status) => {
  // First check if it matches one of our constants
  for (const key in PROPERTY_STATUS) {
    if (PROPERTY_STATUS[key].value === status) {
      return {
        label: PROPERTY_STATUS[key].label,
        bgColor: PROPERTY_STATUS[key].color,
        textColor: PROPERTY_STATUS[key].color.includes('text-') 
          ? '' 
          : PROPERTY_STATUS[key].color.includes('bg-sage-teal') 
            ? 'text-deep-teal'
            : 'text-white',
        icon: PROPERTY_STATUS[key].icon
      };
    }
  }
  
  // Fallback
  return {
    label: status ? status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "N/A",
    bgColor: 'bg-gray-500',
    textColor: 'text-white',
    icon: 'fas fa-building'
  };
}; 