/**
 * Property Data Index
 * Central file for importing and exporting all property data and utility functions
 */

// Import property data files
import upcomingProperties from './upcoming-properties';
import ongoingProperties from './ongoing-properties';
import completedProperties from './completed-properties';
import investmentProperties from './investment-properties';

// Import utility functions
import * as propertyUtils from './utils';

// Create an array of all properties
const allProperties = [
  ...upcomingProperties,
  ...ongoingProperties,
  ...completedProperties,
  ...investmentProperties
];

/**
 * Get all properties
 * @returns {Array} - Array of all properties
 */
export const getAllProperties = () => {
  return allProperties;
};

/**
 * Get property by slug
 * @param {string} slug - The property slug
 * @returns {Object|null} - The property object or null if not found
 */
export const getPropertyBySlug = (slug) => {
  return allProperties.find(property => property.slug === slug) || null;
};

/**
 * Get property by ID
 * @param {string} id - The property ID
 * @returns {Object|null} - The property object or null if not found
 */
export const getPropertyById = (id) => {
  return allProperties.find(property => property.id === id) || null;
};

/**
 * Get properties by status
 * @param {string} status - The property status ('upcoming', 'under-construction', 'completed')
 * @param {boolean} sorted - Whether to sort properties (default: false)
 * @returns {Array} - Array of properties with the specified status
 */
export const getPropertiesByStatus = (status, sorted = false) => {
  let properties;
  
  switch (status) {
    case 'upcoming':
      properties = upcomingProperties;
      break;
    case 'under-construction':
      properties = ongoingProperties;
      break;
    case 'completed':
      properties = completedProperties;
      break;
    default:
      properties = allProperties;
  }
  
  if (sorted) {
    // Sort by completion date, with most recent first
    return [...properties].sort((a, b) => {
      const dateA = new Date(a.completionDate || '9999-12-31');
      const dateB = new Date(b.completionDate || '9999-12-31');
      return dateA - dateB;
    });
  }
  
  return properties;
};

/**
 * Search properties by query string
 * @param {string} query - The search query
 * @returns {Array} - Array of matching properties
 */
export const searchProperties = (query) => {
  if (!query || query.trim() === '') {
    return allProperties;
  }
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  
  return allProperties.filter(property => {
    const searchableText = [
      property.name,
      property.shortDescription,
      property.description,
      property.location?.address,
      property.location?.city,
      property.status
    ].filter(Boolean).join(' ').toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
};

/**
 * Get properties by location (city)
 * @param {string} city - The city name
 * @returns {Array} - Array of properties in the specified city
 */
export const getPropertiesByLocation = (city) => {
  if (!city) return allProperties;
  
  const cityLower = city.toLowerCase();
  return allProperties.filter(property => 
    property.location?.city?.toLowerCase() === cityLower
  );
};

/**
 * Get properties by type
 * @param {string} type - The property type ('Residential', 'Commercial', etc.)
 * @returns {Array} - Array of properties of the specified type
 */
export const getPropertiesByType = (type) => {
  if (!type) return allProperties;
  
  const typeLower = type.toLowerCase();
  return allProperties.filter(property => 
    property.type?.toLowerCase() === typeLower
  );
};

/**
 * Get properties by price range
 * @param {number} minPrice - Minimum price
 * @param {number} maxPrice - Maximum price
 * @returns {Array} - Array of properties within the specified price range
 */
export const getPropertiesByPriceRange = (minPrice, maxPrice) => {
  let filtered = allProperties;
  
  if (minPrice !== undefined && minPrice !== null) {
    filtered = filtered.filter(property => property.startingPrice >= minPrice);
  }
  
  if (maxPrice !== undefined && maxPrice !== null) {
    filtered = filtered.filter(property => property.startingPrice <= maxPrice);
  }
  
  return filtered;
};

/**
 * Get featured properties (can be customized based on criteria)
 * @param {number} limit - Maximum number of properties to return
 * @returns {Array} - Array of featured properties
 */
export const getFeaturedProperties = (limit = 3) => {
  // For now, just return the first few properties (could be enhanced with custom criteria)
  return allProperties.slice(0, limit);
};

/**
 * Get related properties based on similar location or property type
 * @param {string} propertyId - ID of the current property
 * @param {number} limit - Maximum number of related properties to return
 * @returns {Array} - Array of related properties
 */
export const getRelatedProperties = (propertyId, limit = 3) => {
  const currentProperty = getPropertyById(propertyId);
  if (!currentProperty) return [];
  
  // Find properties with the same city or property type
  const related = allProperties.filter(property => 
    property.id !== propertyId && (
      property.location?.city === currentProperty.location?.city ||
      property.type === currentProperty.type
    )
  );
  
  return related.slice(0, limit);
};

// Export utility functions
export const {
  formatPrice,
  formatPriceRange,
  getReadableStatus,
  getStatusBadgeClass,
  getCompletionPercentageClass,
  formatArea,
  slugify,
  formatPhoneNumber,
  getWhatsAppLink,
  calculateAveragePrice,
  getPropertyImageUrl,
  formatPropertyPrice
} = propertyUtils; 