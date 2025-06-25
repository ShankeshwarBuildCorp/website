/**
 * Properties Data Export Module
 * 
 * This module exports all property data and utility functions from the new modular structure.
 * It serves as the central point of access for property data throughout the application.
 */

// Re-export everything from the modular structure
export * from './properties/index';

// Export a default getter for all properties (for backward compatibility)
import { getAllProperties } from './properties/index';
export default getAllProperties; 