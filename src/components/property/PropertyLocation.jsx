import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaExternalLinkAlt, FaClock, FaSchool, FaHospital, FaShuttleVan, FaUtensils, FaShoppingBag, FaSubway, FaBusAlt, FaTrain, FaPlane, FaRoad, FaArrowLeft, FaArrowRight, FaMapMarkedAlt, FaGraduationCap, FaStethoscope, FaShoppingCart, FaCoffee, FaWalking } from 'react-icons/fa';
import { MdMap, MdOpenInNew } from 'react-icons/md';
import { FiAlertTriangle, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { getAmenityIcon } from '../icons/AmenityIcons';

// Define location categories with icons
const LOCATION_CATEGORIES = [
  { id: 'education', label: 'Education', icon: <FaGraduationCap className="text-purple-600" /> },
  { id: 'healthcare', label: 'Healthcare', icon: <FaStethoscope className="text-red-500" /> },
  { id: 'commute', label: 'Commute', icon: <FaShuttleVan className="text-amber-500" /> },
  { id: 'food', label: 'Food and Dining', icon: <FaCoffee className="text-brown-600" /> },
  { id: 'shopping', label: 'Shopping', icon: <FaShoppingCart className="text-pink-500" /> },
];

// Sample nearby places with descriptions - would come from API in real app
const SAMPLE_EDUCATION_PLACES = [
  {
    name: "The Lexicon International School",
    location: "Kalyani Nagar",
    distance: "1.2 km",
    details: "CBSE curriculum, Grades KG-12, Known for academic excellence and sports facilities",
    rating: 4.5,
    url: "https://lexiconschool.in"
  },
  {
    name: "The Rosary School - Viman Nagar",
    location: "Viman Nagar",
    distance: "2.5 km",
    details: "ICSE curriculum, Christian minority institution established in 1983",
    rating: 4.2,
    url: "https://rosaryschool.com"
  },
  {
    name: "Delhi Public School",
    location: "Nyati County",
    distance: "3.4 km",
    details: "CBSE affiliated, comprehensive education with emphasis on extracurricular activities",
    rating: 4.3,
    url: "https://dpspune.com"
  },
  {
    name: "MIT World Peace University",
    location: "Kothrud",
    distance: "7.2 km",
    details: "Higher education institution offering undergraduate and postgraduate programs",
    rating: 4.0,
    url: "https://mitwpu.edu.in"
  },
  {
    name: "Euro School",
    location: "NIBM Road",
    distance: "4.8 km", 
    details: "International curriculum with modern facilities and holistic education approach",
    rating: 4.4,
    url: "https://euroschool.in"
  }
];

const PropertyLocation = ({ location = {} }) => {
  const [activeCategory, setActiveCategory] = useState('education');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [expandedPlace, setExpandedPlace] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  
  // Ensure location has all the necessary properties
  const safeLocation = {
    address: location?.address || '',
    city: location?.city || '',
    state: location?.state || '',
    landmarks: location?.landmarks || [],
    coordinates: {
      lat: location?.coordinates?.lat || 18.5204,
      lng: location?.coordinates?.lng || 73.8567,
    }
  };
  
  // Add SAMPLE_EDUCATION_PLACES to landmarks if no education places
  useEffect(() => {
    if (!safeLocation.landmarks || !safeLocation.landmarks.some(l => l.type === 'education')) {
      safeLocation.landmarks = [
        ...safeLocation.landmarks, 
        ...SAMPLE_EDUCATION_PLACES.map(place => ({
          name: place.name,
          type: 'education',
          distance: place.distance,
          details: place.details,
          rating: place.rating,
          location: place.location,
          url: place.url
        }))
      ];
    }
  }, []);
  
  // Validate coordinates
  const hasValidCoordinates = 
    safeLocation.coordinates && 
    !isNaN(safeLocation.coordinates.lat) && 
    !isNaN(safeLocation.coordinates.lng);

  // Group nearby places by category
  const groupedNearbyPlaces = useMemo(() => {
    if (!safeLocation.landmarks || safeLocation.landmarks.length === 0) {
      return {};
    }
    
    return safeLocation.landmarks.reduce((acc, landmark) => {
      const category = landmark.type || 'other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(landmark);
      return acc;
    }, {});
  }, [safeLocation.landmarks]);

  // Filter nearby places based on selected category
  const filteredNearbyPlaces = useMemo(() => {
    if (activeCategory === 'all') {
      return safeLocation.landmarks || [];
    }
    
    return (safeLocation.landmarks || []).filter(place => 
      place.type === activeCategory
    );
  }, [safeLocation.landmarks, activeCategory]);

  // Create Google Maps URL with markers
  const googleMapsUrl = useMemo(() => {
    if (!hasValidCoordinates) {
      return "";
    }
    
    const { lat, lng } = safeLocation.coordinates;
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat},${lng}&zoom=15`;
  }, [hasValidCoordinates, safeLocation.coordinates]);

  // Handle map loading
  const handleMapLoad = () => {
    setMapLoaded(true);
    setMapError(false);
  };

  // Handle map errors
  const handleMapError = () => {
    setMapLoaded(false);
    setMapError(true);
  };
  
  // Navigation for slider
  const nextSlide = () => {
    if (filteredNearbyPlaces.length <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % filteredNearbyPlaces.length);
  };
  
  const prevSlide = () => {
    if (filteredNearbyPlaces.length <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + filteredNearbyPlaces.length) % filteredNearbyPlaces.length);
  };
  
  // Toggle expanded place
  const toggleExpandPlace = (index) => {
    if (expandedPlace === index) {
      setExpandedPlace(null);
    } else {
      setExpandedPlace(index);
    }
  };

  if (!location || Object.keys(location).length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No location information available</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Explore Neighbourhood - Map View</h2>
      
      {/* Map container */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div className="rounded-lg overflow-hidden shadow-sm relative">
          {!mapLoaded && !mapError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-gold"></div>
            </div>
          )}
          
          {mapError && (
            <div className="bg-red-50 p-8 rounded-lg flex flex-col items-center justify-center">
              <FiAlertTriangle className="text-red-500 text-4xl mb-4" />
              <p className="text-red-600 font-medium mb-2">Unable to load map</p>
              <p className="text-gray-600 text-sm text-center mb-4">
                We're having trouble loading the map. Please check your internet connection or try again later.
              </p>
              <a 
                href={`https://maps.google.com/?q=${safeLocation.coordinates.lat},${safeLocation.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-deep-teal text-white px-4 py-2 rounded-md hover:bg-deep-teal/90 transition-colors"
              >
                <MdOpenInNew className="inline-block mr-2" />
                View on Google Maps
              </a>
            </div>
          )}
          
          {hasValidCoordinates && (
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={handleMapLoad}
              onError={handleMapError}
              className={`${mapLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            ></iframe>
          )}
        </div>
      </div>
      
      {/* Location categories */}
      <div className="mb-8 flex justify-center">
        <div className="flex flex-wrap items-center justify-center sm:justify-between bg-white rounded-full shadow-md p-1.5 border border-gray-100 max-w-full hide-scrollbar">
          {LOCATION_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex flex-col items-center px-4 py-2 rounded-full transition mx-1 min-w-[70px] ${
                activeCategory === category.id 
                  ? 'bg-deep-teal/10 text-deep-teal' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
                activeCategory === category.id 
                  ? 'bg-white shadow-sm' 
                  : 'bg-gray-50'
              }`}>
                {category.icon}
              </div>
              <span className="text-xs font-medium whitespace-nowrap">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile Slider View */}
      <div className="md:hidden mb-8">
        <div className="relative">
          <div
            ref={sliderRef}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-5 rounded-lg"
              >
                {filteredNearbyPlaces.length > 0 ? (
                  <div>
                    <div className="mb-3 flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        {currentSlide + 1} of {filteredNearbyPlaces.length}
                      </div>
                      <div className="flex">
                        <button 
                          onClick={prevSlide}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2 hover:bg-gray-200"
                          disabled={filteredNearbyPlaces.length <= 1}
                        >
                          <FaArrowLeft className="text-gray-600 text-xs" />
                        </button>
                        <button 
                          onClick={nextSlide}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                          disabled={filteredNearbyPlaces.length <= 1}
                        >
                          <FaArrowRight className="text-gray-600 text-xs" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        {activeCategory === 'education' && <FaGraduationCap className="text-xl text-purple-600" />}
                        {activeCategory === 'healthcare' && <FaStethoscope className="text-xl text-red-500" />}
                        {activeCategory === 'commute' && <FaShuttleVan className="text-xl text-amber-500" />}
                        {activeCategory === 'food' && <FaCoffee className="text-xl text-brown-600" />}
                        {activeCategory === 'shopping' && <FaShoppingCart className="text-xl text-pink-500" />}
                      </div>
                      <div>
                        <h3 className="font-medium text-deep-teal">{filteredNearbyPlaces[currentSlide].name}</h3>
                        <div className="text-sm text-gray-500 mt-1">
                          {filteredNearbyPlaces[currentSlide].location || "Nearby"}
                        </div>
                        <div className="mt-2 flex items-center text-sm">
                          <FaMapMarkerAlt className="text-amber-gold mr-1" />
                          <span>{filteredNearbyPlaces[currentSlide].distance || "< 5 km"}</span>
                        </div>
                        {filteredNearbyPlaces[currentSlide].details && (
                          <div className="mt-2 text-sm text-gray-600">
                            {filteredNearbyPlaces[currentSlide].details}
                          </div>
                        )}
                        {filteredNearbyPlaces[currentSlide].url && (
                          <a
                            href={filteredNearbyPlaces[currentSlide].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center text-amber-gold hover:text-deep-teal text-sm font-medium"
                          >
                            Visit Website
                            <FaExternalLinkAlt className="ml-1 text-xs" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No {activeCategory} places found nearby</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Desktop List View */}
      <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-lg font-medium">
            {activeCategory === 'education' && 'Schools & Educational Institutions'}
            {activeCategory === 'healthcare' && 'Hospitals & Healthcare Facilities'}
            {activeCategory === 'commute' && 'Transport & Commute Options'}
            {activeCategory === 'food' && 'Restaurants & Dining'}
            {activeCategory === 'shopping' && 'Shopping Centers & Retail'}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {filteredNearbyPlaces.length} {activeCategory} places found near this property
          </p>
        </div>
        
        <div className="divide-y divide-gray-100">
          {filteredNearbyPlaces.length > 0 ? (
            filteredNearbyPlaces.map((place, index) => (
              <motion.div 
                key={index}
                className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${expandedPlace === index ? 'bg-gray-50' : ''}`}
                onClick={() => toggleExpandPlace(index)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      {activeCategory === 'education' && <FaGraduationCap className="text-xl text-purple-600" />}
                      {activeCategory === 'healthcare' && <FaStethoscope className="text-xl text-red-500" />}
                      {activeCategory === 'commute' && <FaShuttleVan className="text-xl text-amber-500" />}
                      {activeCategory === 'food' && <FaCoffee className="text-xl text-brown-600" />}
                      {activeCategory === 'shopping' && <FaShoppingCart className="text-xl text-pink-500" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-deep-teal">{place.name}</h4>
                      <div className="text-sm text-gray-500 mt-1">
                        {place.location || "Nearby"}
                      </div>
                      <div className="mt-2 flex items-center text-sm">
                        <FaMapMarkerAlt className="text-amber-gold mr-1" />
                        <span>{place.distance || "< 5 km"}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {expandedPlace === index ? (
                      <FiChevronUp className="text-gray-400" />
                    ) : (
                      <FiChevronDown className="text-gray-400" />
                    )}
                  </div>
                </div>
                
                {/* Expanded content */}
                <AnimatePresence>
                  {expandedPlace === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-gray-100">
                        {place.details && (
                          <div className="text-sm text-gray-600 mb-3">
                            {place.details}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No {activeCategory} places found nearby</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Distance Disclaimer */}
      <div className="mt-6 text-sm text-gray-500 bg-gray-50 p-4 rounded-md">
        <p>
          All distances mentioned are approximate and based on straight-line measurements.
          Actual travel distances may vary based on specific routes and traffic conditions.
        </p>
      </div>
      
      {/* Add styling for removing scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default PropertyLocation; 