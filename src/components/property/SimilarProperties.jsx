import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropertyCard from './PropertyCard';

const SimilarProperties = ({ properties = [] }) => {
  if (!properties || properties.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Similar Properties</h2>
        <Link to="/properties" className="text-teal-600 hover:text-teal-700 font-medium">
          View All Properties
        </Link>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {properties.map((property) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </motion.div>
      
      {properties.length > 0 && properties.length < 3 && (
        <div className="mt-8 text-center">
          <Link 
            to="/properties"
            className="inline-block px-6 py-3 border border-teal-600 text-teal-600 hover:bg-teal-50 rounded-md font-medium transition-colors"
          >
            Explore More Properties
          </Link>
        </div>
      )}
    </div>
  );
};

export default SimilarProperties; 