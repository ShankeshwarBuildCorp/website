/**
 * Property Data Compatibility Module
 * 
 * This module serves as a bridge between the old monolithic properties.js structure
 * and the new modular organization in the properties/ directory.
 * 
 * It re-exports all the functions from the new modular structure to maintain
 * backward compatibility with existing imports throughout the application.
 */

// Import and re-export all functions from the new modular structure
import {
  // Property data access functions
  getAllProperties,
  getPropertyBySlug,
  getPropertyById,
  getPropertiesByStatus,
  searchProperties,
  getPropertiesByLocation,
  getPropertiesByType,
  getPropertiesByPriceRange,
  getFeaturedProperties,
  getRelatedProperties,
  
  // Utility functions
  formatPrice,
  formatPriceRange,
  getReadableStatus,
  getStatusBadgeClass,
  getCompletionPercentageClass,
  formatArea,
  slugify,
  formatPhoneNumber,
  getWhatsAppLink,
  calculateAveragePrice
} from './properties/index';

// Re-export all the functions
export {
  // Property data access functions
  getAllProperties,
  getPropertyBySlug,
  getPropertyById,
  getPropertiesByStatus,
  searchProperties,
  getPropertiesByLocation,
  getPropertiesByType,
  getPropertiesByPriceRange,
  getFeaturedProperties,
  getRelatedProperties,
  
  // Utility functions
  formatPrice,
  formatPriceRange,
  getReadableStatus,
  getStatusBadgeClass,
  getCompletionPercentageClass,
  formatArea,
  slugify,
  formatPhoneNumber,
  getWhatsAppLink,
  calculateAveragePrice
};

// Export a default function to get all properties for backward compatibility
export default getAllProperties; 