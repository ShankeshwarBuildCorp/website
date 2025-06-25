import React, { useState, useEffect } from 'react';
import { formatPrice, formatArea } from '../data/properties';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const FloorPlanSection = ({ unitTypes }) => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedConfig, setSelectedConfig] = useState(null);

  useEffect(() => {
    if (unitTypes && unitTypes.length > 0) {
      const firstType = unitTypes[0];
      setSelectedType(firstType);
      if (firstType.configurations && firstType.configurations.length > 0) {
        setSelectedConfig(firstType.configurations[0]);
      }
    }
  }, [unitTypes]);

  if (!unitTypes || unitTypes.length === 0) {
    return null; // Don't render anything if there are no unit types
  }

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    if (type.configurations && type.configurations.length > 0) {
      setSelectedConfig(type.configurations[0]);
    } else {
      setSelectedConfig(null);
    }
  };

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Floor Plans & Pricing</h2>
          <p className="text-gray-600 mt-2">Explore the detailed layouts for each unit type.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Unit Type Selection */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Unit Types</h3>
              <ul className="space-y-2">
                {unitTypes.map((type) => (
                  <li key={type.type}>
                    <button
                      onClick={() => handleTypeSelect(type)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedType?.type === type.type
                          ? 'bg-deep-teal text-white shadow-lg'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {type.type}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Details & Image */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            {selectedType && (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedType.type} Configurations</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedType.configurations.map((config) => (
                      <button
                        key={config.name}
                        onClick={() => setSelectedConfig(config)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                          selectedConfig?.name === config.name
                            ? 'bg-amber-gold text-white'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                      >
                        {config.name}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedConfig && (
                  <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden p-4 md:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                      {/* Floor Plan Image */}
                      <div className="w-full">
                        {selectedConfig.floorPlan ? (
                          <img
                            src={selectedConfig.floorPlan}
                            alt={`${selectedConfig.name} Floor Plan`}
                            className="w-full h-auto object-contain rounded-lg border border-gray-200"
                          />
                        ) : (
                          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                            <p className="text-gray-500">Floor plan image not available.</p>
                          </div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="w-full">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">{selectedConfig.name}</h4>
                        
                        <div className="space-y-3 text-gray-700">
                          <div className="flex items-center">
                            <FaRulerCombined className="text-deep-teal mr-3" />
                            <span>Carpet Area: <strong>{formatArea(selectedConfig.carpetArea)}</strong></span>
                          </div>
                          <div className="flex items-center">
                            <FaBed className="text-deep-teal mr-3" />
                            <span>Bedrooms: <strong>{selectedConfig.bedrooms}</strong></span>
                          </div>
                          <div className="flex items-center">
                            <FaBath className="text-deep-teal mr-3" />
                            <span>Bathrooms: <strong>{selectedConfig.bathrooms}</strong></span>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <p className="text-2xl font-bold text-deep-teal">
                            {formatPrice(selectedConfig.price)}
                          </p>
                          <p className="text-sm text-gray-500">(*All-inclusive price, subject to change)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanSection;
