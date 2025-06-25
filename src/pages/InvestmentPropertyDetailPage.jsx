import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getAllProperties } from '../data/properties'; // Assuming investment properties are part of all properties
import ImageWithFallback from '../components/ui/ImageWithFallback';
// import { FaMapMarkerAlt, FaPhone, FaFilePdf, FaCheckCircle, FaBuilding, FaRupeeSign, FaChartLine, FaExternalLinkAlt } from 'react-icons/fa'; // Example icons

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const InvestmentPropertyDetailPage = () => {
  const { propertySlug } = useParams(); // Changed from propertyId to propertySlug
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allProps = getAllProperties();
    // Find by slug, ensure it's an investment type
    const foundProperty = allProps.find(p => p.slug === propertySlug && p.type === 'investment');
    if (foundProperty) {
      setProperty(foundProperty);
    }
    setLoading(false);
  }, [propertySlug]);

  if (loading) {
    return (
      <Container className="text-center py-20">
        <p>Loading property details...</p> {/* Replace with a proper spinner/loader component */}
      </Container>
    );
  }

  if (!property) {
    return (
      <Container className="text-center py-20">
        <h1 className="text-2xl font-bold text-deep-teal mb-4">Investment Property Not Found</h1>
        <p className="text-gray-600 mb-6">The property you are looking for does not exist or is not available.</p>
        <Button href="/investment" variant="primary">Back to Investments</Button>
      </Container>
    );
  }

  // Helper to render price
  const renderPrice = (price) => {
    if (!price) return 'Price on Request';
    return price.display || `${price.currency} ${price.value.toLocaleString()}`;
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="bg-cream py-8 md:py-12"
    >
      <Container>
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <Link to="/investment" className="text-sm text-amber-gold hover:underline mb-2 inline-block">← Back to Investments</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-deep-teal mb-2">{property.name}</h1>
          {property.location && (
            <p className="text-md text-gray-600 flex items-center">
              {/* <FaMapMarkerAlt className="mr-2 text-amber-gold" /> */}
              {property.location.address}
            </p>
          )}
        </div>

        {/* Main Content Layout - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column (Image Gallery, Key Info) */}
          <div className="lg:col-span-2">
            {property.images?.featured && (
              <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback 
                  src={property.images.featured}
                  alt={`Featured image for ${property.name}`}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            )}
            {/* TODO: Add a proper image gallery/slider here if multiple images exist */}
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-semibold text-deep-teal mb-4">Property Overview</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {property.longDescription || property.shortDescription || 'Detailed description not available.'}
              </p>
            </div>

            {property.keyFeatures && property.keyFeatures.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-deep-teal mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                  {property.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {/* <FaCheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" /> */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {property.amenities && property.amenities.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-deep-teal mb-4">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      {/* Render icon if available, e.g., using react-icons. Requires mapping amenity.icon to actual icon components */}
                      {/* <FaBuilding className="mr-2 text-amber-gold" /> */}
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Quick Info, Documents, Contact) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-deep-teal mb-4">Investment Highlights</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Price:</strong> {renderPrice(property.price)}</p>
                {property.area?.display && <p><strong>Area:</strong> {property.area.display}</p>}
                {property.propertyType && <p><strong>Type:</strong> {property.propertyType}</p>}
                {property.status && <p><strong>Status:</strong> <span className="capitalize">{property.status.replace(/_/g, ' ')}</span></p>}
                {property.expectedYield && <p><strong>Expected Yield:</strong> {property.expectedYield}</p>}
                {property.height && <p><strong>Ceiling Height:</strong> {property.height}</p>}
                {property.reraNo && <p><strong>RERA No:</strong> {property.reraNo}</p>}
              </div>
            </div>

            {property.documents && property.documents.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-deep-teal mb-4">Documents</h3>
                <ul className="space-y-2">
                  {property.documents.map((doc, index) => (
                    <li key={index}>
                      <a 
                        href={doc.pdfPath} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-amber-gold hover:underline flex items-center"
                      >
                        {/* <FaFilePdf className="mr-2" /> */}
                        {doc.name}
                        {/* <FaExternalLinkAlt className="ml-auto text-xs text-gray-400" /> */}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-deep-teal mb-4">Contact For Details</h3>
              {property.contactPhone && (
                <p className="text-gray-700 mb-3 flex items-center">
                  {/* <FaPhone className="mr-2 text-amber-gold" /> */}
                  <a href={`tel:${property.contactPhone}`} className="hover:underline">{property.contactPhone}</a>
                </p>
              )}
              <Button href={`tel:${property.contactPhone || '+919604304919'}`} variant="primary" width="full">
                Enquire Now
              </Button>
              {property.location?.mapLink && (
                 <a 
                  href={property.location.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-3 block text-center text-sm text-amber-gold hover:underline"
                >
                  View on Map
                  {/* <FaExternalLinkAlt className="ml-1 inline-block text-xs" /> */}
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default InvestmentPropertyDetailPage;
