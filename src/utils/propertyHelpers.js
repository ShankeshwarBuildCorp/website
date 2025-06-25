/**
 * Helper functions for property data handling
 */
import { PROPERTY_STATUS } from '../config/constants';

/**
 * Format property price based on Indian numbering system
 * @param {number} price - Property price
 * @returns {string} - Formatted price string
 */
export const formatPropertyPrice = (price) => {
  if (!price) return 'Price on Request';

  const crore = 10000000;
  const lakh = 100000;

  if (price >= crore) {
    let value = price / crore;
    // Round to 2 decimal places if needed, remove trailing .0 or .00
    value = parseFloat(value.toFixed(2)); 
    return `₹${value} Cr`;
  } else if (price >= lakh) {
    let value = price / lakh;
    // Round to 1 decimal place if needed, remove trailing .0
    value = parseFloat(value.toFixed(1));
    return `₹${value} Lakh`;
  } else {
    // For prices less than 1 Lakh, use standard Indian currency format without decimals
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });
    return formatter.format(price);
  }
};

/**
 * Get configuration for a property status
 * @param {string} status - Property status
 * @returns {object} - Status configuration object with label, icon, colors, etc.
 */
export const getPropertyStatusConfig = (status) => {
  const statusConfigs = {
    [PROPERTY_STATUS.UNDER_CONSTRUCTION.value]: {
      label: 'Under Construction',
      icon: 'fas fa-hard-hat',
      bgColor: 'bg-amber-100',
      textColor: 'text-amber-800',
      borderColor: 'border-amber-200'
    },
    [PROPERTY_STATUS.NEARING_POSSESSION.value]: {
      label: 'Nearing Possession',
      icon: 'fas fa-key',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-200'
    },
    [PROPERTY_STATUS.READY_TO_MOVE_IN.value]: {
      label: 'Ready to Move In',
      icon: 'fas fa-home',
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      borderColor: 'border-green-200'
    },
    [PROPERTY_STATUS.COMPLETED.value]: {
      label: 'Completed',
      icon: 'fas fa-check-circle',
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      borderColor: 'border-green-200'
    }
  };
  
  return statusConfigs[status] || {
    label: status ? status.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Unknown',
    icon: 'fas fa-building',
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-800',
    borderColor: 'border-gray-200'
  };
};

/**
 * Get the URL for a property image
 * @param {object} property - Property object
 * @param {string} type - Image type (exterior, interior, floorplan)
 * @returns {string} - URL of the image
 */
export const getPropertyImageUrl = (property, type = 'exterior') => {
  if (!property) return '/images/website/placeholder-property.jpg';
  
  // Check if property has images
  if (property.images && property.images.length > 0) {
    // Find image by type
    const image = property.images.find(img => img.type === type);
    if (image) return image.url;
    
    // If no image of requested type, return first image
    return property.images[0].url;
  }
  
  // Return default image based on property status
  if (property.status === PROPERTY_STATUS.UNDER_CONSTRUCTION.value) {
    return '/images/website/under-construction.jpeg';
  } else if (property.status === PROPERTY_STATUS.COMPLETED.value || 
             property.status === PROPERTY_STATUS.READY_TO_MOVE_IN.value) {
    return '/images/website/completed-building.jpeg';
  }
  
  return '/images/website/placeholder-property.jpg';
};

/**
 * Calculate the construction progress percentage
 * @param {object} property - Property object
 * @returns {number} - Progress percentage (0-100)
 */
export const calculateConstructionProgress = (property) => {
  if (!property) return 0;
  
  // If property has explicit progress value, use it
  if (property.constructionProgress && typeof property.constructionProgress.overall === 'number') {
    return property.constructionProgress.overall;
  }
  
  // If property has stages, calculate average progress
  if (property.constructionProgress && Array.isArray(property.constructionProgress.stages)) {
    const stages = property.constructionProgress.stages;
    if (stages.length === 0) return 0;
    
    const totalProgress = stages.reduce((sum, stage) => sum + stage.percentage, 0);
    return Math.round(totalProgress / stages.length);
  }
  
  // Default values based on status
  switch (property.status) {
    case PROPERTY_STATUS.UNDER_CONSTRUCTION.value:
      return 30;
    case PROPERTY_STATUS.NEARING_POSSESSION.value:
      return 85;
    case PROPERTY_STATUS.READY_TO_MOVE_IN.value:
    case PROPERTY_STATUS.COMPLETED.value:
      return 100;
    default:
      return 0;
  }
};

/**
 * Get estimated completion date in human-readable format
 * @param {object} property - Property object
 * @returns {string} - Estimated completion date
 */
export const getEstimatedCompletion = (property) => {
  if (!property) return 'Unknown';
  
  if (property.possessionDate) {
    return property.possessionDate;
  }
  
  if (property.status === PROPERTY_STATUS.COMPLETED.value || 
      property.status === PROPERTY_STATUS.READY_TO_MOVE_IN.value) {
    return 'Ready for possession';
  }
  
  return 'Estimated date not available';
}; 