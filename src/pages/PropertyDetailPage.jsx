import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiPhone, FiMail, FiMapPin, FiHome, FiCheckCircle, FiClock, FiList, FiGrid, FiInfo, FiStar, FiImage, FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { FaRupeeSign, FaBuilding, FaHandshake, FaPhone, FaBed, FaBath, FaRulerCombined, FaChevronDown, FaChevronUp, FaExclamationTriangle, FaRegIdCard, FaQrcode } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import { Tab } from '@headlessui/react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';
import { AiOutlineHome } from 'react-icons/ai';
import { BsBuilding } from 'react-icons/bs';
import { IoBedOutline } from 'react-icons/io5';
import { TbRulerMeasure } from 'react-icons/tb';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineArrowUpward } from 'react-icons/md';

// Components
import PropertyGallery from '../components/property/PropertyGallery';
import PropertyAmenities from '../components/property/PropertyAmenities';
import PropertySpecifications from '../components/property/PropertySpecifications';
import PropertyLocation from '../components/property/PropertyLocation';
import PropertyContactForm from '../components/property/PropertyContactForm';
import PropertyProgressTracker from '../components/property/PropertyProgressTracker';
import FloorPlanSection from '../components/property/FloorPlanSection';
import TabButton from '../components/TabButton';

// Utils & Helpers
import { getPropertyById, formatPrice, formatArea, getReadableStatus, getStatusBadgeClass, getCompletionPercentageClass, getWhatsAppLink } from '../data/properties';
import { formatPropertyPrice, getPropertyStatusConfig } from '../utils/propertyHelpers';
import { downloadPropertyBrochure } from '../utils/download';

// Constants
import { PROPERTY_STATUS } from '../config/constants';

const PropertyDetailPage = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('specifications');
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const tabsRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const contactFormRef = useRef(null);
  const navigate = useNavigate();
  
  // Fetch property data
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const fetchPropertyData = async () => {
      setLoading(true);
      try {
        const propertyData = await getPropertyById(propertyId);
        if (propertyData) {
          // If property is completed, redirect to all projects page with completed filter
          if (propertyData.status === PROPERTY_STATUS.COMPLETED.value || 
              propertyData.status === PROPERTY_STATUS.READY_TO_MOVE_IN.value) {
            navigate('/projects/all?filter=completed');
            return;
          }
          
          // Initialize showSections for upcoming properties with all toggles set to false
          if (propertyData.status === PROPERTY_STATUS.UPCOMING.value) {
            if (!propertyData.showSections) {
              propertyData.showSections = {
                specifications: false,
                floorplans: false,
                overview: false,
                amenities: false,
                location: false,
                gallery: false,
                rera: false
              };
            }
          }
          
          setProperty(propertyData);
          // Set document title
          document.title = `${propertyData.name} | Shankeshwar Buildcorp`;
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
    
    // Add scroll event listener for sticky tabs
    const handleScroll = () => {
      if (tabsRef.current) {
        const tabsPosition = tabsRef.current.getBoundingClientRect().top;
        setIsSticky(tabsPosition <= 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [propertyId, navigate]);

  // Effect to handle scroll indicator for tabs
  useEffect(() => {
    const tabsContainer = tabsContainerRef.current;
    if (!tabsContainer) return;

    const checkScrollWidth = () => {
      // If the scrollable width is greater than the visible width, show indicator
      setShowScrollIndicator(tabsContainer.scrollWidth > tabsContainer.clientWidth);
    };

    // Run check initially
    checkScrollWidth();

    // Update when window is resized
    window.addEventListener('resize', checkScrollWidth);

    // Handle scroll events to hide indicator when user has scrolled to the end
    const handleTabScroll = () => {
      const isAtEnd = tabsContainer.scrollLeft + tabsContainer.clientWidth >= tabsContainer.scrollWidth - 10;
      if (isAtEnd) {
        setShowScrollIndicator(false);
      } else {
        checkScrollWidth();
      }
    };

    tabsContainer.addEventListener('scroll', handleTabScroll);

    return () => {
      window.removeEventListener('resize', checkScrollWidth);
      tabsContainer.removeEventListener('scroll', handleTabScroll);
    };
  }, []);

  // Use property directly instead of downloaded images
  const displayProperty = property;

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle tab selection with smooth scrolling for mobile
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    
    // If on mobile or small screen, scroll the tabs container to make the selected tab visible
    const tabsContainer = tabsContainerRef.current;
    if (tabsContainer && window.innerWidth < 768) { // 768px is typical mobile breakpoint
      const selectedTabElement = tabsContainer.querySelector(`[data-tab="${tabName}"]`);
      
      if (selectedTabElement) {
        // Calculate position to scroll to (centering the tab if possible)
        const containerWidth = tabsContainer.clientWidth;
        const tabWidth = selectedTabElement.clientWidth;
        const tabLeft = selectedTabElement.offsetLeft;
        
        const scrollPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);
        
        // Smooth scroll to the position
        tabsContainer.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-gold"></div>
      </div>
    );
  }

  if (!displayProperty) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-8">The property you are looking for does not exist or has been removed.</p>
        <Link to="/projects/all" className="bg-deep-teal text-white px-4 py-2 rounded-lg hover:bg-deep-teal/90">
          View All Properties
        </Link>
      </div>
    );
  }

  const statusConfig = getPropertyStatusConfig(displayProperty.status);
  const isUpcoming = displayProperty.status === PROPERTY_STATUS.UPCOMING.value;
  const isUnderConstruction = [
    PROPERTY_STATUS.UNDER_CONSTRUCTION.value,
    PROPERTY_STATUS.NEARING_POSSESSION.value
  ].includes(displayProperty.status);

  // Display price range properly
  const formatPriceRange = () => {
    if (!displayProperty.priceRange) {
      return formatPropertyPrice(displayProperty.startingPrice);
    }
    
    if (displayProperty.priceRange.min === displayProperty.priceRange.max) {
      return formatPropertyPrice(displayProperty.priceRange.min);
    }
    
    return `${formatPropertyPrice(displayProperty.priceRange.min)} - ${formatPropertyPrice(displayProperty.priceRange.max)}`;
  };
  
  // Motion variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Render placeholder content for upcoming properties
  const renderPlaceholderContent = (title, description) => (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
      <FaExclamationTriangle className="mx-auto text-blue-500 text-3xl mb-4" />
      <h3 className="text-xl font-medium text-deep-teal mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  // Check if a section should be shown based on the showSections toggle
  const shouldShowSection = (sectionName) => {
    // If showSections doesn't exist or the specific section toggle doesn't exist, default to showing based on data presence
    if (!displayProperty.showSections || displayProperty.showSections[sectionName] === undefined) {
      return true;
    }
    // Return the toggle value
    return displayProperty.showSections[sectionName];
  };

  // Universal placeholder for upcoming properties
  const upcomingPlaceholder = (section) => {
    if (isUpcoming) {
      return renderPlaceholderContent(
        `${section} Details Will Be Updated Soon`,
        "We're still finalizing the details for this upcoming project. Register your interest to receive updates as soon as they become available."
      );
    }
    return null;
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section with Gallery and Property Details Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Property Header & Details on the Left */}
        <motion.div 
            className="flex flex-col order-2 lg:order-1"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
            <div className="bg-white rounded-lg shadow-md p-5 md:p-6 h-full flex flex-col">
              {/* Breadcrumb Navigation */}
              <div className="flex items-center mb-2 text-xs">
                <Link to="/" className="text-gray-500 hover:text-deep-teal">Home</Link>
                <span className="mx-2">›</span>
                <Link to="/projects/all" className="text-gray-500 hover:text-deep-teal">Projects</Link>
                <span className="mx-2">›</span>
                <span className="text-gray-700">{displayProperty.name}</span>
              </div>
              
              <motion.div variants={fadeInUp} className="mb-4">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-3 text-deep-teal">{displayProperty.name}</h1>
              
                <div className="flex items-center mb-3">
                <FiMapPin className="text-amber-gold mr-2 flex-shrink-0" />
                <span className="text-gray-700">{displayProperty.location.address}, {displayProperty.location.city}</span>
              </div>
              
              {/* Status Badge */}
              <div className="flex items-center mb-4 flex-wrap gap-2">
                <span 
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusConfig.bgColor} ${statusConfig.textColor}`}
                >
                  <i className={`${statusConfig.icon} mr-1`}></i>
                  <span>{statusConfig.label}</span>
                </span>
                
                  {isUpcoming && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm text-blue-700 bg-blue-100">
                      <FiClock className="mr-1" />
                      Coming Soon
                    </span>
                  )}
                  
                  {isUnderConstruction && displayProperty.possessionDate && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm text-deep-teal bg-sage-teal/20">
                    <FiClock className="mr-1" />
                    Possession by: {displayProperty.possessionDate}
                  </span>
                )}
              </div>
              </motion.div>
              
              {/* Project Highlights */}
              <motion.div variants={fadeInUp} className="mb-5">
                <h3 className="text-lg font-medium text-deep-teal mb-3">Project Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Key features in card format */}
                  {displayProperty.flatTypes && displayProperty.flatTypes.length > 0 && (
                    <div className="bg-sage-teal/5 p-3 rounded-lg flex items-center">
                      <FaBed className="text-amber-gold text-xl mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Configuration</div>
                        <div className="font-medium">
                          {displayProperty.flatTypes.map((type, i) => 
                            <span key={i}>{type.type}{i < displayProperty.flatTypes.length - 1 ? ', ' : ''}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                
                {displayProperty.projectOverview?.total_area && (
                    <div className="bg-sage-teal/5 p-3 rounded-lg flex items-center">
                      <FaRulerCombined className="text-amber-gold text-xl mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Total Area</div>
                        <div className="font-medium">{displayProperty.projectOverview.total_area}</div>
                      </div>
                    </div>
                )}
                
                {displayProperty.type && (
                    <div className="bg-sage-teal/5 p-3 rounded-lg flex items-center">
                      <FaBuilding className="text-amber-gold text-xl mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Property Type</div>
                        <div className="font-medium">{displayProperty.type}</div>
                      </div>
                    </div>
                  )}
                  
                  {displayProperty.amenities && displayProperty.amenities.length > 0 && (
                    <div className="bg-sage-teal/5 p-3 rounded-lg flex items-center">
                      <FiStar className="text-amber-gold text-xl mr-3" />
                      <div>
                        <div className="text-sm text-gray-500">Amenities</div>
                        <div className="font-medium">{displayProperty.amenities.length}+ Lifestyle Amenities</div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
              
              {/* Quick Action Buttons */}
              <motion.div variants={fadeInUp} className="mb-5">
                <h3 className="text-lg font-medium text-deep-teal mb-3">Quick Actions</h3>
                <div className="flex flex-wrap gap-2">
                  {displayProperty.brochureUrl && (
                    <a
                      href={displayProperty.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-sm text-deep-teal shadow-sm"
                    >
                      <FiDownload className="mr-2" />
                      Brochure
                    </a>
                  )}
                  
                  {displayProperty.floorPlanPdf && (
                    <a
                      href={displayProperty.floorPlanPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-sm text-deep-teal shadow-sm"
                    >
                      <FiGrid className="mr-2" />
                      Floor Plans
                    </a>
                  )}
                  
                  {displayProperty.reraCertificatePath && (
                    <a
                      href={displayProperty.reraCertificatePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-sm text-deep-teal shadow-sm"
                    >
                      <FiCheckCircle className="mr-2" />
                      RERA
                    </a>
                  )}
                  
                  {displayProperty.location?.coordinates?.lat && displayProperty.location?.coordinates?.lng && (
                    <a
                      href={`https://maps.google.com/?q=${displayProperty.location.coordinates.lat},${displayProperty.location.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-sm text-deep-teal shadow-sm"
                    >
                      <FiMapPin className="mr-2" />
                      Map
                    </a>
                )}
              </div>
            </motion.div>
            
              {/* Price and CTA Section */}
            <motion.div 
                className="mt-auto bg-deep-teal/5 p-5 rounded-lg"
              variants={fadeInUp}
            >
                <div className="text-2xl md:text-3xl font-bold text-amber-gold flex items-center mb-1">
                <FaRupeeSign className="mr-1" />
                  <span>{isUpcoming && !displayProperty.startingPrice ? "Price Coming Soon" : formatPriceRange().replace('₹', '')}</span>
              </div>
                <div className="text-sm text-gray-600 mb-3">{isUpcoming && !displayProperty.priceUnit ? "Register for early pricing" : (displayProperty.priceUnit || 'onwards')}</div>
              
              {/* CTA buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <a 
                  href={`tel:${displayProperty.contactPhone || '+919876543210'}`} 
                    className="flex items-center justify-center px-4 py-2.5 bg-amber-gold hover:bg-amber-gold/90 text-deep-teal font-medium rounded-lg transition-colors"
                >
                  <FaPhone className="mr-2" />
                  Call Now
                </a>
                
                <button 
                  onClick={scrollToContactForm}
                    className="flex items-center justify-center px-4 py-2.5 border border-deep-teal text-deep-teal hover:bg-deep-teal/10 font-medium rounded-lg transition-colors"
                >
                  <FaHandshake className="mr-2" />
                    {isUpcoming ? "Register Interest" : "Get Callback"}
                </button>

                  <a 
                    href={`https://wa.me/${displayProperty.contactPhone?.replace(/[^0-9]/g, '') || '919604304919'}?text=Hi, I'm interested in ${displayProperty.name} at ${displayProperty.location.address}. Please provide more details.`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
                  >
                    <i className="fab fa-whatsapp mr-2 text-lg"></i>
                    WhatsApp
                  </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
          {/* Property Gallery on the Right */}
        <motion.div 
            className="bg-white rounded-lg shadow-md p-4 md:p-6 overflow-hidden h-full order-1 lg:order-2"
          initial="hidden"
          animate="visible"
            variants={fadeInUp}
          >
            {(displayProperty.images && displayProperty.images.length > 0) || (displayProperty.gallery && displayProperty.gallery.length > 0) || displayProperty.videoUrl ? (
              <PropertyGallery 
                images={displayProperty.images || displayProperty.gallery || []} 
                videoTour={displayProperty.videoUrl} 
              />
            ) : (
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <FaExclamationTriangle className="text-amber-gold text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-deep-teal mb-2">Property Images Coming Soon</h3>
                  <p className="text-gray-500">
                    Our team is working on capturing beautiful images of this upcoming project.
                    Check back soon for updates!
                  </p>
                </div>
              </div>
            )}
        </motion.div>
        </div>
        
        {/* Tabs */}
        <div 
          ref={tabsRef}
          className={`relative sticky-tabs ${isSticky ? 'sticky top-0 z-20 bg-cream pt-4 shadow-sm' : ''}`}
        >
          <div 
            ref={tabsContainerRef}
            className="flex overflow-x-auto gap-2 mb-4 pb-2 no-scrollbar max-w-full"
            style={{ scrollbarWidth: 'none' }}
          >
            {/* Only show specifications tab if data exists and toggle is on */}
            {displayProperty.specifications && 
              Object.keys(displayProperty.specifications).length > 0 && 
              shouldShowSection('specifications') && (
          <TabButton
            active={activeTab === 'specifications'}
                onClick={() => handleTabChange('specifications')}
            icon={<FiList className="mr-2" />}
            label="Specifications"
                data-tab="specifications"
                className="text-sm md:text-base px-3 md:px-4"
              />
            )}
            
            {/* Only show floor plans tab if there are flat types and toggle is on */}
            {displayProperty.flatTypes && 
              displayProperty.flatTypes.length > 0 && 
              shouldShowSection('floorplans') && (
          <TabButton
            active={activeTab === 'floorplans'}
                onClick={() => handleTabChange('floorplans')}
            icon={<FiGrid className="mr-2" />}
            label="Floor Plans"
                data-tab="floorplans"
                className="text-sm md:text-base px-3 md:px-4"
              />
            )}
            
            {/* Only show overview tab if there's project overview data and toggle is on */}
            {displayProperty.projectOverview && 
              Object.keys(displayProperty.projectOverview).length > 0 && 
              shouldShowSection('overview') && (
          <TabButton
            active={activeTab === 'overview'}
                onClick={() => handleTabChange('overview')}
            icon={<FiInfo className="mr-2" />}
            label="Overview"
                data-tab="overview"
                className="text-sm md:text-base px-3 md:px-4"
              />
            )}
            
            {/* Only show amenities tab if there are amenities and toggle is on */}
            {displayProperty.amenities && 
              displayProperty.amenities.length > 0 && 
              shouldShowSection('amenities') && (
          <TabButton
            active={activeTab === 'amenities'}
                onClick={() => handleTabChange('amenities')}
            icon={<FiStar className="mr-2" />}
            label="Amenities"
                data-tab="amenities"
                className="text-sm md:text-base px-3 md:px-4"
              />
            )}
            
            {/* Only show location tab if location data exists and toggle is on */}
            {displayProperty.location && 
              (displayProperty.location.coordinates || 
              displayProperty.location.mapLink || 
              (displayProperty.landmarks && displayProperty.landmarks.length > 0)) && 
              shouldShowSection('location') && (
          <TabButton
            active={activeTab === 'location'}
                onClick={() => handleTabChange('location')}
            icon={<FiMapPin className="mr-2" />}
            label="Location"
                data-tab="location"
                className="text-sm md:text-base px-3 md:px-4"
              />
            )}
            
            {/* Only show gallery tab if images exist and toggle is on */}
            {displayProperty.images && 
              displayProperty.images.length > 0 && 
              shouldShowSection('gallery') && (
          <TabButton
            active={activeTab === 'gallery'}
                onClick={() => handleTabChange('gallery')}
            icon={<FiImage className="mr-2" />}
            label="Gallery"
                data-tab="gallery"
                className="text-sm md:text-base px-3 md:px-4"
              />
            )}
            
            {/* Only show RERA tab if RERA number exists and toggle is on */}
            {displayProperty.reraNumber && shouldShowSection('rera') && (
              <TabButton
                active={activeTab === 'rera'}
                onClick={() => handleTabChange('rera')}
                icon={<FaRegIdCard className="mr-2" />}
                label="RERA"
                data-tab="rera"
                className="text-sm md:text-base px-3 md:px-4"
              />
            )}
          </div>
          
          {/* Scroll indicator for mobile */}
          {showScrollIndicator && (
            <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none">
              <div className="h-full flex items-center justify-center pl-8 pr-2 bg-gradient-to-r from-transparent to-cream">
                <div className="animate-pulse flex items-center text-deep-teal">
                  <FiChevronRight className="w-5 h-5" />
                  <FiChevronRight className="w-5 h-5 -ml-3" />
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6 mb-12"
          >
            <div className="min-h-[400px]">
              {/* Specifications Tab Content */}
              {activeTab === 'specifications' && (
                <>
                  {!(displayProperty.specifications && 
                     Object.keys(displayProperty.specifications).length > 0 && 
                     shouldShowSection('specifications')) ? (
                    <div className="flex flex-col items-center justify-center h-64">
                      <FaExclamationTriangle className="text-amber-gold text-4xl mb-4" />
                      <h3 className="text-xl font-medium text-deep-teal mb-2">Specifications Will Be Updated Soon</h3>
                      <p className="text-gray-600 text-center">We're working on finalizing the specifications for this property. Please check back later.</p>
                    </div>
                  ) : (
                <PropertySpecifications specifications={displayProperty.specifications} />
                  )}
                </>
              )}
              
              {/* Floor Plan Tab Content */}
              {activeTab === 'floorplans' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Price & Floor Plan</h2>
                  
                  {!(displayProperty.flatTypes && 
                     displayProperty.flatTypes.length > 0 && 
                     shouldShowSection('floorplans')) ? (
                    <div className="flex flex-col items-center justify-center h-64">
                      <FaExclamationTriangle className="text-amber-gold text-4xl mb-4" />
                      <h3 className="text-xl font-medium text-deep-teal mb-2">Floor Plans Will Be Updated Soon</h3>
                      <p className="text-gray-600 text-center">We're working on finalizing the floor plans for this property. Please check back later.</p>
                    </div>
                  ) : (
                  <FloorPlanSection flatTypes={displayProperty.flatTypes} />
                  )}
                </div>
              )}
              
              {/* Overview Tab Content */}
              {activeTab === 'overview' && (
                <>
                  {!(displayProperty.projectOverview && 
                     Object.keys(displayProperty.projectOverview).length > 0 && 
                     shouldShowSection('overview')) ? (
                    <div className="flex flex-col items-center justify-center h-64">
                      <FaExclamationTriangle className="text-amber-gold text-4xl mb-4" />
                      <h3 className="text-xl font-medium text-deep-teal mb-2">Project Overview Will Be Updated Soon</h3>
                      <p className="text-gray-600 text-center">We're working on finalizing the overview details for this property. Please check back later.</p>
                    </div>
                  ) : (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                  
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Project details here */}
                        {Object.entries(displayProperty.projectOverview).map(([key, value], index) => (
                          <div key={index} className="flex bg-gray-50 p-4 rounded-lg">
                            <div className="w-8 h-8 bg-amber-gold/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-amber-gold text-lg">{key.charAt(0).toUpperCase()}</span>
                            </div>
                            <div>
                              <h4 className="font-medium text-deep-teal capitalize">{key.replace(/_/g, ' ')}</h4>
                              <p className="text-gray-700 text-sm">{value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Only show construction progress if it exists and property is under construction */}
                      {isUnderConstruction && displayProperty.constructionProgress && (
                        <div className="mt-10">
                          <h3 className="text-xl font-bold text-deep-teal mb-4">Construction Progress</h3>
                          <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-deep-teal font-medium">Overall Completion</span>
                              <span className="text-amber-gold font-bold">{displayProperty.constructionProgress.overall}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-amber-gold h-2.5 rounded-full" 
                                style={{ width: `${displayProperty.constructionProgress.overall}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          {displayProperty.constructionProgress.stages && displayProperty.constructionProgress.stages.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {displayProperty.constructionProgress.stages.map((stage, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                  <div className="flex justify-between items-center mb-2">
                                    <span className="text-deep-teal font-medium">{stage.name}</span>
                                    <span className="text-amber-gold font-bold">{stage.percentage}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                      className="bg-amber-gold h-2 rounded-full" 
                                      style={{ width: `${stage.percentage}%` }}
                                    ></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
              
              {/* Amenities Tab Content */}
              {activeTab === 'amenities' && (
                <>
                  {!(displayProperty.amenities && 
                     displayProperty.amenities.length > 0 && 
                     shouldShowSection('amenities')) ? (
                    <div className="flex flex-col items-center justify-center h-64">
                      <FaExclamationTriangle className="text-amber-gold text-4xl mb-4" />
                      <h3 className="text-xl font-medium text-deep-teal mb-2">Amenities Will Be Updated Soon</h3>
                      <p className="text-gray-600 text-center">We're working on finalizing the amenities details for this property. Please check back later.</p>
                    </div>
                  ) : (
                    <PropertyAmenities 
                      amenities={displayProperty.amenities}
                      amenityImages={[]}
                    />
                  )}
                </>
              )}
              
              {/* Location Tab Content */}
              {activeTab === 'location' && (
                <>
                  {!(displayProperty.location && 
                     (displayProperty.location.coordinates || displayProperty.landmarks) &&
                     shouldShowSection('location')) ? (
                    <div className="flex flex-col items-center justify-center h-64">
                      <FaExclamationTriangle className="text-amber-gold text-4xl mb-4" />
                      <h3 className="text-xl font-medium text-deep-teal mb-2">Location Information Will Be Updated Soon</h3>
                      <p className="text-gray-600 text-center">We're working on finalizing the location details for this property. Please check back later.</p>
                    </div>
                  ) : (
                    <PropertyLocation 
                      location={displayProperty.location} 
                      landmarks={displayProperty.landmarks} 
                    />
                  )}
                </>
              )}
              
              {/* Gallery Tab Content */}
              {activeTab === 'gallery' && (
                <>
                  {(!shouldShowSection('gallery') || (!displayProperty.images?.length && !displayProperty.gallery?.length && !displayProperty.videoUrl)) ? (
                    <div className="flex flex-col items-center justify-center h-64">
                      <FaExclamationTriangle className="text-amber-gold text-4xl mb-4" />
                      <h3 className="text-xl font-medium text-deep-teal mb-2">Gallery Will Be Updated Soon</h3>
                      <p className="text-gray-600 text-center">We're working on finalizing the gallery for this property. Please check back later.</p>
                    </div>
                  ) : (
                    <div className="gallery-tab">
                      <h2 className="text-2xl font-bold mb-6">Property Gallery</h2>
                      <PropertyGallery 
                        images={displayProperty.images || displayProperty.gallery || []} 
                        videoTour={displayProperty.videoUrl} 
                      />
                    </div>
                  )}
                </>
              )}
              
              {/* RERA Tab Content */}
              {activeTab === 'rera' && displayProperty.reraNumber && (
                <>
                  {!shouldShowSection('rera') ? (
                    <div className="flex flex-col items-center justify-center h-64">
                      <FaExclamationTriangle className="text-amber-gold text-4xl mb-4" />
                      <h3 className="text-xl font-medium text-deep-teal mb-2">RERA Information Will Be Updated Soon</h3>
                      <p className="text-gray-600 text-center">We're working on finalizing the RERA details for this property. Please check back later.</p>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">RERA Information</h2>
                      
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
                        <div className="flex flex-col md:flex-row items-start">
                          <div className="bg-blue-100 rounded-full p-4 mr-6 mb-4 md:mb-0">
                            <FaRegIdCard className="text-deep-teal text-2xl" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-deep-teal mb-2">RERA Registration</h3>
                            <p className="text-gray-700 mb-4">This project is registered under the Real Estate (Regulation and Development) Act with registration number:</p>
                            <div className="bg-white px-6 py-4 rounded-lg border border-blue-100 inline-block font-medium text-deep-teal text-xl mb-4">
                              {displayProperty.reraNumber}
                            </div>
                            
                            <div className="mt-6">
                              <h4 className="font-semibold text-deep-teal mb-2">What is RERA?</h4>
                              <p className="text-gray-700 mb-4">
                                The Real Estate (Regulation and Development) Act, 2016 is an Act of the Parliament of India which seeks to protect home-buyers as well as help boost investments in the real estate industry.
                              </p>
                              <p className="text-gray-700 mb-4">
                                RERA registration ensures that this project complies with all the regulatory standards set by the government, providing you with security and transparency for your investment.
                              </p>
                            </div>
                            
                            {/* Only show verification section if either certificate or registration URL exists */}
                            {(displayProperty.reraCertificatePath || displayProperty.reraRegistrationUrl) && (
                              <div className="bg-white p-6 rounded-lg border border-blue-100 mt-6">
                                <h4 className="font-semibold text-deep-teal mb-4">Verify RERA Registration</h4>
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                  {displayProperty.reraRegistrationUrl && (
                                    <div className="bg-white p-3 rounded border border-gray-200 max-w-[150px]">
                                      <QRCodeSVG
                                        value={displayProperty.reraRegistrationUrl}
                                        size={150}
                                        level="H"
                                      />
                                    </div>
                                  )}
                                  <div>
                                    <p className="text-gray-700 mb-4">
                                      {displayProperty.reraRegistrationUrl 
                                        ? "Scan this QR code to verify the RERA registration of this project online" 
                                        : "RERA verification information for this project"}
                                      {displayProperty.reraCertificatePath && " or click the button below to download the certificate."}
                                    </p>
                                    {displayProperty.reraCertificatePath && (
                                      <a
                                        href={displayProperty.reraCertificatePath}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-amber-gold hover:bg-amber-gold/90 text-deep-teal font-medium px-4 py-2 rounded-lg transition-colors"
                                      >
                                        <FiDownload className="mr-2" />
                                        Download RERA Certificate
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Contact Form */}
        <div 
          id="property-contact-form" 
          ref={contactFormRef}
          className="bg-white rounded-lg shadow-md p-6 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">
            {isUpcoming ? `Register Interest in ${displayProperty.name}` : `Interested in ${displayProperty.name}?`}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <PropertyContactForm property={displayProperty} />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-deep-teal mb-2">Contact Sales Team</h3>
                  <div className="flex items-center bg-cream p-4 rounded-lg border border-gray-100">
                    <div className="w-12 h-12 bg-amber-gold/20 rounded-full flex items-center justify-center mr-3">
                      <FiPhone className="text-amber-gold text-xl" />
                    </div>
                    <div>
                      <p className="font-medium text-deep-teal">{displayProperty.contactPhone || '+91 9604304919'}</p>
                      <p className="text-sm text-gray-600">Mon-Sat 9am to 6pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-deep-teal mb-2">Email Us</h3>
                  <div className="flex items-center bg-cream p-4 rounded-lg border border-gray-100">
                    <div className="w-12 h-12 bg-amber-gold/20 rounded-full flex items-center justify-center mr-3">
                      <FiMail className="text-amber-gold text-xl" />
                    </div>
                    <div>
                      <p className="font-medium text-deep-teal">{displayProperty.contactEmail || 'shankeshwarbuildcorp@gmail.com'}</p>
                      <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-deep-teal mb-2">WhatsApp</h3>
                  <a 
                    href={`https://wa.me/${displayProperty.contactPhone?.replace(/[^0-9]/g, '') || '919604304919'}?text=Hi, I'm interested in ${displayProperty.name} at ${displayProperty.location.address}. Please provide more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-cream p-4 rounded-lg border border-gray-100 hover:bg-green-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fab fa-whatsapp text-green-600 text-2xl"></i>
                    </div>
                    <div>
                      <p className="font-medium text-deep-teal">Chat on WhatsApp</p>
                      <p className="text-sm text-gray-600">Quick responses, 7 days a week</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to receive communications from Shankeshwar Buildcorp regarding this property and other offerings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky CTA at bottom for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 flex gap-2 z-40">
        <a 
          href={`tel:${displayProperty.contactPhone || '+919604304919'}`} 
          className="flex-1 flex items-center justify-center px-3 py-2 bg-amber-gold hover:bg-amber-gold/90 text-deep-teal font-medium rounded-lg transition-colors"
        >
          <FaPhone className="mr-1" />
          Call
        </a>
        
        <a 
          href={`https://wa.me/${displayProperty.contactPhone?.replace(/[^0-9]/g, '') || '919604304919'}?text=Hi, I'm interested in ${displayProperty.name} at ${displayProperty.location.address}. Please provide more details.`}
          target="_blank"
          rel="noopener noreferrer" 
          className="flex-1 flex items-center justify-center px-3 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
        >
          <i className="fab fa-whatsapp mr-1"></i>
          WhatsApp
        </a>
        
        <button 
          onClick={scrollToContactForm}
          className="flex-1 flex items-center justify-center px-3 py-2 bg-deep-teal text-white hover:bg-deep-teal/90 font-medium rounded-lg transition-colors"
        >
          <FaHandshake className="mr-1" />
          {isUpcoming ? "Register" : "Callback"}
        </button>
      </div>

      {/* Add custom styles for sticky tabs and hiding scrollbar */}
      <style>{`
        .sticky-tabs {
          transition: all 0.3s ease;
        }
        
        .sticky-tabs.sticky {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        
        /* Hide scrollbar but allow scrolling */
        .no-scrollbar {
          scrollbar-width: none;  /* Firefox */
          -ms-overflow-style: none;  /* Internet Explorer and Edge */
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, and Opera */
        }
      `}</style>
    </div>
  );
};

export default PropertyDetailPage; 