import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiMaximize, FiPlay } from 'react-icons/fi';
import { getYouTubeEmbedUrl, getYouTubeThumbnailUrl } from '../../utils/youtubeHelpers';

const PropertyGallery = ({ images = [], videoTour }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const videoThumbnail = videoTour ? getYouTubeThumbnailUrl(videoTour) : null;
  const videoEmbedUrl = videoTour ? getYouTubeEmbedUrl(videoTour) : null;

  // If no images provided, show a placeholder
  if (!images || images.length === 0) {
    return (
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  // Group images by type
  const imageCategories = images.reduce((acc, img) => {
    const type = img.type || 'other';
    if (!acc[type]) acc[type] = [];
    acc[type].push(img);
    return acc;
  }, { all: images });

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' ? images : (imageCategories[activeCategory] || []);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeCategory]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentImageIndex(0); // Reset to first image in the category
  };

  // Get available categories
  const categories = Object.keys(imageCategories).filter(cat => cat !== 'all' && imageCategories[cat].length > 0);

  const openVideoModal = () => {
    if (videoEmbedUrl) {
      setIsVideoModalOpen(true);
    }
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <div className="mx-auto max-w-5xl">
        {/* Image and Video Categories */}
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-deep-teal text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            All
          </button>
          {videoThumbnail && (
            <button
              onClick={() => handleCategoryChange('video')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'video'
                  ? 'bg-deep-teal text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Video
            </button>
          )}
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize transition-colors ${
                activeCategory === category
                  ? 'bg-deep-teal text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Display for Video or Image */}
        <div className="relative rounded-lg overflow-hidden shadow-md border border-gray-100 bg-gray-50">
          {activeCategory === 'video' && videoThumbnail ? (
            <div className="aspect-w-16 aspect-h-9 cursor-pointer" onClick={openVideoModal}>
              <img
                src={videoThumbnail}
                alt="Video Tour Thumbnail"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <FiPlay className="text-white text-6xl" />
              </div>
            </div>
          ) : (
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-10 lg:aspect-h-9">
              {filteredImages.length > 0 ? (
                <img
                  src={filteredImages[currentImageIndex].url}
                  alt={filteredImages[currentImageIndex].alt || `Property Image ${currentImageIndex + 1}`}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">No images in this category.</p>
                </div>
              )}
            </div>
          )}

          {/* Navigation and Fullscreen Controls (only for images) */}
          {activeCategory !== 'video' && filteredImages.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-gold/50"
                aria-label="Previous image"
              >
                <FiChevronLeft className="text-deep-teal text-xl" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-gold/50"
                aria-label="Next image"
              >
                <FiChevronRight className="text-deep-teal text-xl" />
              </button>
            </>
          )}
          {activeCategory !== 'video' && filteredImages.length > 0 && (
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-gold/50"
              aria-label="Toggle fullscreen"
            >
              <FiMaximize className="text-deep-teal" />
            </button>
          )}

          {/* Image Counter (only for images) */}
          {activeCategory !== 'video' && filteredImages.length > 0 && (
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {(activeCategory === 'all' || activeCategory !== 'video') && filteredImages.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
                index === currentImageIndex && activeCategory !== 'video' ? 'border-amber-gold shadow-sm' : 'border-gray-200 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image.url}
                alt={image.alt || `Thumbnail ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
          {activeCategory === 'all' && videoThumbnail && (
            <button
              onClick={() => handleCategoryChange('video')}
              className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all border-gray-200 opacity-70 hover:opacity-100`}
            >
              <img
                src={videoThumbnail}
                alt="Video Tour Thumbnail"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <FiPlay className="text-white text-4xl" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeVideoModal}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
              aria-label="Close video"
            >
              <FiX className="text-2xl" />
            </button>
            <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={videoEmbedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {isFullscreen && activeCategory !== 'video' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
            onClick={toggleFullscreen}
          >
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
              aria-label="Close fullscreen"
            >
              <FiX className="text-2xl" />
            </button>

            <div className="relative w-full max-w-6xl max-h-full">
              {filteredImages.length > 0 && (
                <img
                  src={filteredImages[currentImageIndex].url}
                  alt={filteredImages[currentImageIndex].alt || `Property Image ${currentImageIndex + 1}`}
                  className="object-contain w-full h-full max-h-[85vh]"
                />
              )}

              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3"
                    aria-label="Previous image"
                  >
                    <FiChevronLeft className="text-white text-2xl" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3"
                    aria-label="Next image"
                  >
                    <FiChevronRight className="text-white text-2xl" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
                    {currentImageIndex + 1} / {filteredImages.length}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PropertyGallery; 