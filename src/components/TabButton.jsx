import React from 'react';
import { motion } from 'framer-motion';

/**
 * TabButton component for property tab navigation
 * @param {object} props - Component props
 * @param {boolean} props.active - Whether the tab is active
 * @param {function} props.onClick - Click handler
 * @param {React.ReactNode} props.icon - Icon to display
 * @param {string} props.label - Tab label text
 * @param {string} props['data-tab'] - Data attribute for identifying the tab
 * @param {string} props.className - Additional CSS class for custom styling
 * @returns {JSX.Element} TabButton component
 */
const TabButton = ({ active, onClick, icon, label, 'data-tab': dataTab, className = '', ...rest }) => {
  return (
    <motion.button
      onClick={onClick}
      data-tab={dataTab}
      className={`
        flex items-center px-4 py-2 rounded-md font-medium whitespace-nowrap
        transition duration-200 min-w-max flex-shrink-0
        ${active 
          ? 'bg-deep-teal text-white shadow-md' 
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}
        ${className}
      `}
      whileHover={!active ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
      {...rest}
    >
      {icon}
      {label}
    </motion.button>
  );
};

export default TabButton; 