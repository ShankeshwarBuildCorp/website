import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock } from 'react-icons/fi';

const PropertyProgressTracker = ({ progress = {} }) => {
  // Default stages if not provided
  const defaultStages = [
    { name: 'Foundation', description: 'Foundation work', percentage: 0 },
    { name: 'Structure', description: 'RCC structure and walls', percentage: 0 },
    { name: 'Plumbing & Electrical', description: 'Plumbing and electrical work', percentage: 0 },
    { name: 'Finishing', description: 'Interior and exterior finishing', percentage: 0 },
    { name: 'Handover', description: 'Final touches and handover', percentage: 0 }
  ];

  // Use provided stages or default ones
  const stages = progress.stages || defaultStages;
  const overallProgress = progress.overall || 
    Math.round(stages.reduce((sum, stage) => sum + stage.percentage, 0) / stages.length);

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Construction Progress</h3>
      
      {/* Overall Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 font-medium">Overall Completion</span>
          <span className="text-teal-700 font-bold">{overallProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <motion.div 
            className="bg-teal-600 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
        </div>
      </div>
      
      {/* Estimated Completion */}
      {progress.estimatedCompletion && (
        <div className="flex items-center mb-6 text-gray-700">
          <FiClock className="mr-2 text-teal-600" />
          <span>Estimated Completion: <strong>{progress.estimatedCompletion}</strong></span>
        </div>
      )}
      
      {/* Stages Progress */}
      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                {stage.percentage === 100 ? (
                  <FiCheckCircle className="text-green-500 mr-2" />
                ) : (
                  <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium mr-2">
                    {index + 1}
                  </span>
                )}
                <span className="font-medium">{stage.name}</span>
              </div>
              <span className={`font-medium ${
                stage.percentage === 100 
                  ? 'text-green-600' 
                  : stage.percentage > 0 
                    ? 'text-teal-600' 
                    : 'text-gray-500'
              }`}>
                {stage.percentage}%
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <motion.div 
                className={`h-1.5 rounded-full ${
                  stage.percentage === 100 
                    ? 'bg-green-500' 
                    : 'bg-teal-600'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${stage.percentage}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              ></motion.div>
            </div>
            
            {stage.description && (
              <p className="text-sm text-gray-600 mt-1 ml-7">{stage.description}</p>
            )}
          </div>
        ))}
      </div>
      
      {/* Latest Updates */}
      {progress.updates && progress.updates.length > 0 && (
        <div className="mt-8">
          <h4 className="font-semibold text-gray-800 mb-3">Latest Updates</h4>
          <div className="space-y-3">
            {progress.updates.map((update, index) => (
              <div key={index} className="bg-white p-3 rounded-md shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-gray-800">{update.title}</span>
                  <span className="text-xs text-gray-500">{update.date}</span>
                </div>
                <p className="text-sm text-gray-600">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Disclaimer */}
      <div className="mt-6 text-xs text-gray-500">
        <p>
          * Construction progress is updated monthly. Actual completion may vary based on weather conditions, 
          material availability, and other factors beyond our control.
        </p>
      </div>
    </div>
  );
};

export default PropertyProgressTracker; 