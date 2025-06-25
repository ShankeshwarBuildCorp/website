/**
 * Formatting and utility functions
 */

/**
 * Formats a price in Indian Rupees
 * 
 * @param {number} price Price to format
 * @returns {string} Formatted price string or 'Price on Request'
 */
export function formatPrice(price) {
  if (price === null || price === undefined || typeof price !== 'number') return 'Price on Request';
  
  try {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0, // Ensure no decimals for consistency
    });
    return formatter.format(price);
  } catch (e) {
    console.error('Error formatting price:', e);
    // Fallback for environments that might not fully support Intl with 'en-IN' and currency
    return `₹${price.toLocaleString('en-IN', { maximumFractionDigits: 0, minimumFractionDigits: 0 })}`;
  }
}

/**
 * Formats a date string to a more readable format (e.g., "August 2023" or "15 August 2023")
 * 
 * @param {string} dateInput Date string or Date object to format
 * @param {object} options Formatting options (e.g., { day: 'numeric' } to include the day)
 * @returns {string} Formatted date string or original input if formatting fails
 */
export function formatDate(dateInput, options = {}) {
  if (!dateInput) return '';
  
  try {
    const dateObj = new Date(dateInput);
    // Default options: year and month. Allow overriding/extending.
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      timeZone: 'UTC', // Specify UTC to avoid local timezone shifts if dates are meant to be universal
      ...options,
    };
    return dateObj.toLocaleDateString('en-IN', defaultOptions);
  } catch (e) {
    console.error('Error formatting date:', e);
    return String(dateInput); // Return original input as string if error
  }
}

/**
 * Generate a URL-friendly slug from a string
 * 
 * @param {string} str String to convert to slug
 * @returns {string} URL-friendly slug
 */
export function slugify(str) {
  if (!str) return '';
  return str
    .toString() // Ensure it's a string
    .toLowerCase()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w\-]+/g, '')  // Remove all non-word chars
    .replace(/\-\-+/g, '-')    // Replace multiple - with single -
    .replace(/^-+/, '')        // Trim - from start of text
    .replace(/-+$/, '');       // Trim - from end of text
}

/**
 * Truncate a string to a maximum length, appending an ellipsis.
 * 
 * @param {string} str String to truncate
 * @param {number} maxLength Maximum length before truncation (default: 100)
 * @returns {string} Truncated string with ellipsis, or original string if shorter than maxLength.
 */
export function truncateString(str, maxLength = 100) {
  if (!str || typeof str !== 'string' || str.length <= maxLength) return str;
  return `${str.substring(0, maxLength)}...`;
} 