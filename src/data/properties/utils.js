/**
 * Property Data Utility Functions
 * Contains helper functions to access property data across the application
 */

/**
 * Formats a price value to Indian currency format (e.g., ₹ 45.5 Lacs or ₹ 1.05 Cr)
 * @param {number} price - The price value in numeric format
 * @param {boolean} withSymbol - Whether to include the ₹ symbol (default: true)
 * @returns {string} - Formatted price string
 */
export const formatPrice = (price, withSymbol = true) => {
  if (!price) return 'Price on Request';

  const symbol = withSymbol ? '₹ ' : '';
  const crore = 10000000;
  const lakh = 100000;

  if (price >= crore) {
    let value = price / crore;
    value = parseFloat(value.toFixed(2)); // Remove trailing .0 or .00
    return `${symbol}${value} Cr`;
  } else if (price >= lakh) {
    let value = price / lakh;
    value = parseFloat(value.toFixed(1)); // Remove trailing .0
    return `${symbol}${value} Lakh`;
  } else {
    // For prices less than 1 Lakh, use standard Indian currency format
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
      // To control the symbol, we handle it manually based on withSymbol
      // So, we format without the symbol here and prepend it if needed.
      currencyDisplay: 'code' // Use 'code' to get 'INR' then replace it or parse number
    });
    // A bit of a workaround to use Intl.NumberFormat but control the symbol
    let formattedPrice = formatter.format(price).replace('INR', '').trim();
    return `${symbol}${formattedPrice}`;
  }
};

/**
 * Formats a property's price range as a string
 * @param {Object} priceRange - Object containing min and max price values
 * @returns {string} - Formatted price range string
 */
export const formatPriceRange = (priceRange) => {
  if (!priceRange || !priceRange.min) return 'Price on Request';
  
  const minPrice = formatPrice(priceRange.min, false);
  
  if (!priceRange.max || priceRange.min === priceRange.max) {
    return `₹ ${minPrice} Onwards`;
  }
  
  const maxPrice = formatPrice(priceRange.max, false);
  return `₹ ${minPrice} - ${maxPrice}`;
};

/**
 * Gets a human-readable string for the property status
 * @param {string} status - The property status code ('upcoming', 'under-construction', 'completed')
 * @returns {string} - Human-readable status
 */
export const getReadableStatus = (status) => {
  switch (status) {
    case 'upcoming':
      return 'Upcoming';
    case 'under-construction':
      return 'Under Construction';
    case 'completed':
      return 'Ready to Move';
    default:
      return status;
  }
};

/**
 * Gets the CSS class to use for the property status badge
 * @param {string} status - The property status code
 * @returns {string} - CSS class name
 */
export const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'upcoming':
      return 'bg-blue-100 text-blue-800';
    case 'under-construction':
      return 'bg-amber-100 text-amber-800';
    case 'completed':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

/**
 * Gets the CSS class for the completion percentage indicator
 * @param {number} percentage - The completion percentage
 * @returns {string} - CSS class name
 */
export const getCompletionPercentageClass = (percentage) => {
  if (percentage >= 75) {
    return 'bg-green-500';
  } else if (percentage >= 50) {
    return 'bg-yellow-500';
  } else if (percentage >= 25) {
    return 'bg-orange-500';
  } else {
    return 'bg-red-500';
  }
};

/**
 * Formats a surface area value with appropriate unit
 * @param {number} area - The area value in square feet
 * @returns {string} - Formatted area string
 */
export const formatArea = (area) => {
  if (!area) return 'N/A';
  return `${area} sq.ft.`;
};

/**
 * Slugify a string for use in URLs
 * @param {string} text - Text to convert to slug
 * @returns {string} - URL-friendly slug
 */
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

/**
 * Formats a phone number for display
 * @param {string} phone - The phone number
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Check if it's a 10-digit number
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
    // Handle 11-digit numbers starting with 1 (US/Canada format)
    return `+1 ${cleaned.slice(1, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
    // Handle Indian numbers with country code
    return `+91 ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  
  // Return as is if it doesn't match expected formats
  return phone;
};

/**
 * Creates a WhatsApp chat link with predefined message
 * @param {string} phone - Phone number
 * @param {string} propertyName - Name of the property to include in message
 * @returns {string} - WhatsApp chat link
 */
export const getWhatsAppLink = (phone, propertyName) => {
  if (!phone) return '#';
  
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Default message
  const message = `Hi, I'm interested in ${propertyName} and would like to know more details.`;
  
  // Create WhatsApp link with encoded message
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
};

/**
 * Calculates average property price based on configurations
 * @param {Array} configurations - Array of flat configurations with price
 * @returns {number} - Average price
 */
export const calculateAveragePrice = (configurations) => {
  if (!configurations || configurations.length === 0) return 0;
  
  const sum = configurations.reduce((total, config) => total + config.price, 0);
  return Math.round(sum / configurations.length);
};

/**
 * Get image URL for a property with appropriate fallbacks
 * 
 * @param {Object|Array} property - Property object or images array
 * @param {string} type - Type of image to retrieve (exterior, interior, etc.)
 * @param {string} fallbackPath - Fallback image path if no image is found
 * @returns {string} - URL of the image
 */
export const getPropertyImageUrl = (
  property, 
  type = 'exterior', 
  fallbackPath = '/images/properties/default-property.jpg'
) => {
  // If property is null or undefined, return fallback
  if (!property) {
    return fallbackPath;
  }

  // If property is directly an array of images
  if (Array.isArray(property)) {
    if (property.length === 0) return fallbackPath;
    
    // Try to find an image of the requested type
    const typeImage = property.find(img => {
      if (typeof img === 'string') return false;
      return (img.type === type || img.alt?.toLowerCase().includes(type));
    });
    
    if (typeImage && typeImage.url) return typeImage.url;
    
    // Check if the first element is a string (direct URL) or an object with url property
    if (typeof property[0] === 'string') return property[0];
    if (property[0] && property[0].url) return property[0].url;
    
    return fallbackPath;
  }
  
  // Property is an object with images property
  if (property.images) {
    // Handle investment property images which use {thumbnail, featured, gallery} format
    if (typeof property.images === 'object' && !Array.isArray(property.images)) {
      if (type === 'thumbnail' && property.images.thumbnail) {
        return property.images.thumbnail;
      } else if (type === 'featured' && property.images.featured) {
        return property.images.featured;
      } else if (property.images.gallery && property.images.gallery.length > 0) {
        return property.images.gallery[0];
      } else if (property.images.thumbnail) {
        return property.images.thumbnail;
      } else if (property.images.featured) {
        return property.images.featured;
      }
    }
    
    // Handle array of images
    else if (Array.isArray(property.images)) {
      if (property.images.length === 0) return fallbackPath;
      
      // Try to find an image of the requested type
      const typeImage = property.images.find(img => {
        if (typeof img === 'string') return false;
        return (img.type === type || img.alt?.toLowerCase().includes(type));
      });
      
      if (typeImage) {
        if (typeof typeImage === 'string') return typeImage;
        if (typeImage.url) return typeImage.url;
      }
      
      // If no matching type is found, return the first image
      const firstImage = property.images[0];
      if (typeof firstImage === 'string') return firstImage;
      if (firstImage && firstImage.url) return firstImage.url;
    }
  }
  
  // If no images array or no valid images, use alternative properties
  if (property.imageUrl) return property.imageUrl;
  if (property.thumbnailUrl) return property.thumbnailUrl;
  if (property.image) return property.image;
  
  // Generate path based on property id and status
  if (property.id) {
    if (property.type?.toLowerCase() === 'investment') {
      return `/images/properties/investment/${property.id}.jpg`;
    }
    else if (property.status === 'completed') {
      // For completed properties, use just the ID without the -exterior suffix
      return `/images/properties/completed/${property.id}.jpg`;
    } else if (property.status === 'under-construction') {
      return `/images/properties/ongoing/${property.id}-exterior.jpg`;
    } else if (property.status === 'upcoming') {
      return `/images/properties/upcoming/${property.id}-exterior.jpg`;
    }
  }
  
  return fallbackPath;
};

/**
 * Formats property price in a user-friendly way
 * @param {number|Object} price - Price value or object with price data
 * @returns {string} - Formatted price string
 */
export const formatPropertyPrice = (price) => {
  if (!price) return 'Price on Request';
  
  // If price is an object with min/max values
  if (typeof price === 'object' && price.min) {
    return formatPriceRange(price);
  }
  
  // If price is a number
  if (typeof price === 'number') {
    return formatPrice(price);
  }
  
  return String(price);
}; 