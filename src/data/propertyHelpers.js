// Import all properties
import properties from './properties';

/**
 * Get all properties, optionally sorted by priority
 * @param {boolean} sorted - Whether to sort properties by priority
 * @returns {Array} Array of property objects
 */
export const getAllProperties = (sorted = true) => {
  if (!sorted) return properties;
  
  return [...properties].sort((a, b) => {
    // Sort by priority first (lower numbers first)
    const priorityA = a.display?.priority || 999;
    const priorityB = b.display?.priority || 999;
    
    return priorityA - priorityB;
  });
};

/**
 * Get properties filtered by status
 * @param {string|Array} statuses - Single status string or array of status strings
 * @param {boolean} sorted - Whether to sort properties by priority
 * @returns {Array} Filtered array of property objects
 */
export const getPropertiesByStatus = (statuses, sorted = true) => {
  const statusArray = Array.isArray(statuses) ? statuses : [statuses];
  
  const filteredProperties = properties.filter(property => 
    statusArray.includes(property.status)
  );
  
  if (!sorted) return filteredProperties;
  
  return filteredProperties.sort((a, b) => {
    // Sort by priority first (lower numbers first)
    const priorityA = a.display?.priority || 999;
    const priorityB = b.display?.priority || 999;
    
    return priorityA - priorityB;
  });
};

/**
 * Get property by ID
 * @param {string} id - Property ID
 * @returns {Object|null} Property object or null if not found
 */
export const getPropertyById = (id) => {
  return properties.find(property => property.id === id) || null;
};

/**
 * Get property by slug
 * @param {string} slug - Property slug
 * @returns {Object|null} Property object or null if not found
 */
export const getPropertyBySlug = (slug) => {
  return properties.find(property => property.slug === slug) || null;
};

/**
 * Get featured properties
 * @param {number} limit - Maximum number of properties to return
 * @returns {Array} Array of featured property objects
 */
export const getFeaturedProperties = (limit = undefined) => {
  const featured = properties
    .filter(property => property.display?.featured)
    .sort((a, b) => {
      const priorityA = a.display?.priority || 999;
      const priorityB = b.display?.priority || 999;
      return priorityA - priorityB;
    });
    
  return limit ? featured.slice(0, limit) : featured;
};

/**
 * Search properties by query
 * @param {string} query - Search query string
 * @returns {Array} Array of matching property objects
 */
export const searchProperties = (query) => {
  if (!query || query.trim() === '') return [];
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return properties.filter(property => {
    // Search in various property fields
    const searchableText = [
      property.name,
      property.shortDescription,
      property.description,
      property.type,
      property.location?.city,
      property.location?.address,
      property.location?.landmark,
      ...property.highlights || [],
      ...property.unitTypes?.map(unit => unit.name) || []
    ].join(' ').toLowerCase();
    
    // Check if all search terms are found in the property
    return searchTerms.every(term => searchableText.includes(term));
  });
};

/**
 * Get properties by bedroom count
 * @param {number|Array} bedrooms - Number of bedrooms or array of bedroom counts
 * @returns {Array} Array of matching property objects
 */
export const getPropertiesByBedrooms = (bedrooms) => {
  const bedroomOptions = Array.isArray(bedrooms) ? bedrooms : [bedrooms];
  
  return properties.filter(property => 
    // Check if any unit type has matching bedroom count
    property.unitTypes?.some(unit => bedroomOptions.includes(unit.bedrooms))
  );
};

/**
 * Get properties with price in range
 * @param {number} minPrice - Minimum price
 * @param {number} maxPrice - Maximum price
 * @returns {Array} Array of matching property objects
 */
export const getPropertiesByPriceRange = (minPrice, maxPrice) => {
  return properties.filter(property => {
    const price = property.startingPrice;
    return (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
  });
};

/**
 * Get properties by location
 * @param {string} location - Location query (city, area, etc.)
 * @returns {Array} Array of matching property objects
 */
export const getPropertiesByLocation = (location) => {
  if (!location || location.trim() === '') return [];
  
  const locationLower = location.toLowerCase();
  
  return properties.filter(property => {
    const propertyLocation = [
      property.location?.city,
      property.location?.address,
      property.location?.landmark,
      property.location?.pincode,
      property.location?.state
    ].filter(Boolean).join(' ').toLowerCase();
    
    return propertyLocation.includes(locationLower);
  });
};

/**
 * Get property image URL or fallback to default
 * @param {Object} property - Property object
 * @param {string} type - Image type (exterior, interior, etc.)
 * @returns {string} Image URL
 */
export const getPropertyImageUrl = (property, type = 'exterior') => {
  if (!property?.images?.length) {
    return '/images/properties/default-property.jpg';
  }
  
  const typedImage = property.images.find(img => img.type === type);
  if (typedImage) return typedImage.url;
  
  // Fallback to first image
  return property.images[0].url;
};

/**
 * Format price for display (e.g. ₹45.5 Lac, ₹1.2 Cr)
 * @param {number} price - Price in rupees
 * @returns {string} Formatted price string
 */
export const formatPropertyPrice = (price) => {
  if (!price) return 'Price on Request';
  
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(1)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)} Lac`;
  } else {
    return `₹${price.toLocaleString()}`;
  }
}; 