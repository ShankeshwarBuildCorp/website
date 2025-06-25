import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiPlusCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const PropertySpecifications = ({ specifications = {} }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  if (!specifications || Object.keys(specifications).length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Specifications will be updated soon.</p>
      </div>
    );
  }

  // Convert specifications object to array of objects with category
  const specificationsArray = Object.entries(specifications).map(([category, details]) => ({
    category,
    details
  }));
  
  // Group the specifications by category (flooring, fittings, etc.)
  const specsByCategory = Array.isArray(specifications) 
    ? specifications.reduce((acc, spec) => {
        const { category, ...specDetails } = spec;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(specDetails);
        return acc;
      }, {})
    : Object.entries(specifications).reduce((acc, [category, details]) => {
        acc[category] = Array.isArray(details) ? details : [{ description: details }];
        return acc;
      }, {});

  // Refined specsByCategory to handle nested objects like 'electrical'
  const processedSpecsByCategory = Object.entries(specifications).reduce((acc, [category, details]) => {
    if (typeof details === 'object' && !Array.isArray(details) && details !== null) {
      // Handle specific known nested structures like 'electrical'
      if (category.toLowerCase() === 'electrical' && details.internal && details.external) {
        acc[category] = [
          { feature: 'Internal', description: details.internal },
          { feature: 'External', description: details.external },
        ];
      } else if (category.toLowerCase() === 'doors' && details.main && details.internal && details.toilet) {
        acc[category] = [
          { feature: 'Main Door', description: details.main },
          { feature: 'Internal Doors', description: details.internal },
          { feature: 'Toilet Doors', description: details.toilet },
        ];
      } else {
        // Fallback for other unexpected objects: try to list key-value pairs
        acc[category] = Object.entries(details).map(([key, value]) => ({
          feature: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize key
          description: typeof value === 'string' ? value : JSON.stringify(value) // Render string or stringify
        }));
      }
    } else {
      // Existing logic for strings or arrays of objects
      acc[category] = Array.isArray(details) ? details : [{ description: details }];
    }
    return acc;
  }, {});
  
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const getSpecIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'flooring':
        return 'fas fa-layer-group';
      case 'fittings':
      case 'electrical':
        return 'fas fa-plug';
      case 'walls & ceiling':
      case 'walls':
      case 'ceiling':
        return 'fas fa-paint-roller';
      case 'doors & windows':
      case 'doors':
      case 'windows':
        return 'fas fa-door-open';
      case 'kitchen':
        return 'fas fa-utensils';
      case 'bathroom':
        return 'fas fa-shower';
      case 'security':
        return 'fas fa-shield-alt';
      default:
        return 'fas fa-cog';
    }
  };
  
  const renderSpecifications = (specs) => {
    return specs.map((spec, index) => (
      <div key={index} className="border-b border-gray-100 py-3 last:border-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="font-medium text-gray-700">
            {spec.room || spec.feature || 'All Areas'}
          </div>
          <div className="md:col-span-3 text-gray-600">
            {typeof spec.description === 'string' ? spec.description : 
             (spec.material || spec.details || 'N/A')}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Project Specifications</h2>
      <div className="text-base mb-8">
        <p className="text-gray-600">
          Quality is our hallmark. Every aspect of this property is constructed with premium
          materials and finished to the highest standards. Below are detailed specifications for
          your future home.
        </p>
      </div>
      
      <div className="space-y-4">
        {Object.keys(processedSpecsByCategory).map((category) => (
          <div 
            key={category} 
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button 
              onClick={() => toggleSection(category)} 
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center">
                <i className={`${getSpecIcon(category)} text-amber-gold mr-3`}></i>
                <h3 className="text-lg font-medium text-deep-teal">{category}</h3>
              </div>
              {expandedSection === category ? 
                <FiChevronUp className="text-gray-500" /> :
                <FiChevronDown className="text-gray-500" />
              }
            </button>
            
            <AnimatePresence>
              {expandedSection === category && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6">{renderSpecifications(processedSpecsByCategory[category])}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-sage-teal/10 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          <FiPlusCircle className="inline mr-2 text-deep-teal" />
          Specifications are subject to change at the discretion of the developer to maintain quality standards. Materials and brands may vary based on availability.
        </p>
      </div>
    </div>
  );
};

export default PropertySpecifications; 