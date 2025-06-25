import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2 } from 'react-icons/fi';
import { formatPrice, formatPriceRange } from '../../data/properties';

const FloorPlanSection = ({ flatTypes = [] }) => {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const [selectedConfigIndex, setSelectedConfigIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setSelectedConfigIndex(0);
  }, [selectedTypeIndex]);

  if (!flatTypes || flatTypes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Floor plans will be updated soon.</p>
      </div>
    );
  }

  const currentType = flatTypes[selectedTypeIndex];
  if (!currentType || !currentType.configurations || currentType.configurations.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No floor plans available for this property type.</p>
      </div>
    );
  }

  const currentConfig = currentType.configurations[selectedConfigIndex];
  if (!currentConfig) {
    setSelectedConfigIndex(0);
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Loading floor plan details...</p>
      </div>
    );
  }

  const currentImage = currentConfig.floorPlan;
  const hasFloorPlan = !!currentImage;

  const getFlatTypeRangeText = (flatType) => {
    if (!flatType.configurations || flatType.configurations.length === 0) return 'Price on Request';
    const prices = flatType.configurations.map(cfg => cfg.price).filter(p => typeof p === 'number' && p > 0);
    if (prices.length === 0) return 'Price on Request';
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return formatPriceRange({ min: minPrice, max: maxPrice });
  };

  return (
    <div>
      {/* Unit Type Tabs */}
      <div className="mb-8 flex overflow-x-auto space-x-4 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
        {flatTypes.map((type, index) => (
          <div
            key={index}
            onClick={() => setSelectedTypeIndex(index)}
            className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
              selectedTypeIndex === index
                ? 'bg-deep-teal text-white shadow-md'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-deep-teal/30'
            }`}
          >
            <div className="text-sm font-medium whitespace-nowrap">
              {type.type} <span className="text-xs opacity-90 font-normal ml-1">{getFlatTypeRangeText(type)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content: Two-column layout */}
      <div className="md:flex md:space-x-8">
        {/* Left Column: Variant List */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Variants</h3>
          <div className="flex space-x-2 md:flex-col md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible hide-scrollbar">
            {currentType.configurations.map((config, index) => (
              <div
                key={index}
                onClick={() => setSelectedConfigIndex(index)}
                className={`flex-shrink-0 w-auto md:w-full text-center md:text-left px-4 py-2 md:py-3 border rounded-lg cursor-pointer transition-all ${
                  selectedConfigIndex === index
                    ? 'border-amber-gold bg-amber-gold/10 text-amber-gold font-semibold'
                    : 'border-gray-300 text-gray-800 hover:border-amber-gold/50'
                }`}
              >
                {/* Mobile view: just area */}
                <div className="md:hidden">
                  <span className="text-sm font-medium">{config.carpetArea} sq.ft.</span>
                </div>
                {/* Desktop view: area with label */}
                <div className="hidden md:block">
                  <span className="font-medium">{config.carpetArea} sq.ft.</span>
                  <div className="text-xs text-gray-500 mt-1">Carpet Area</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="md:w-2/3 flex-1">
          {/* Price Display */}
          <div className="mb-4">
            <span className="text-3xl font-bold text-gray-800">{formatPrice(currentConfig.price)}</span>
          </div>

          {/* Floor Plan Image */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200/80">
            {hasFloorPlan ? (
              <div className="relative">
                <img
                  src={currentImage}
                  alt={`${currentType.type} Floor Plan - ${currentConfig.name}`}
                  className="w-full h-auto object-contain rounded-md max-h-[500px]"
                />
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
                  title="View Larger"
                >
                  <FiMaximize2 className="text-deep-teal" />
                </button>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500">Floor plan image not available.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox for Floor Plan */}
      <AnimatePresence>
        {lightboxOpen && hasFloorPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={currentImage}
                alt={`${currentType.type} Floor Plan - ${currentConfig.name}`}
                className="w-auto max-w-full h-auto object-contain mx-auto"
              />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-2 -right-2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
              >
                <FiMaximize2 className="transform rotate-45" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default FloorPlanSection; 