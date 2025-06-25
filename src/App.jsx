import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AllProjectsPage from './pages/AllProjectsPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import RedevelopmentPage from './pages/RedevelopmentPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import InvestmentPage from './pages/InvestmentPage'; // Added import
import InvestmentPropertyDetailPage from './pages/InvestmentPropertyDetailPage'; // Added import
import Preloader from './components/Preloader'; // Import the Preloader component
// Import other pages here as you create them
// import AboutPage from './pages/AboutPage'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Add a small delay for the fade-out transition to be visible
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Adjust delay as needed, should be less than or equal to Preloader transition time
    };

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Cleanup event listener
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Always render Preloader, its visibility is controlled by its own opacity based on isLoading
  // The main content will render underneath and become visible once Preloader fades out.
  // However, to prevent interaction with underlying elements while preloader is active and fading,
  // we can conditionally render the main layout only after a delay or keep it simple by rendering both.
  // For simplicity and to ensure smooth transition, we render both and Preloader handles its visibility.

  // A more robust way for complex apps might involve not rendering Layout until isLoading is truly false
  // after transition, but this approach is simpler for now.

  // return (
  //   <>
  //     <Preloader isLoading={isLoading} />
  //     {!isLoading && (
  //       <Layout>
  //         <Routes> ... </Routes>
  //       </Layout>
  //     )}
  //   </>
  // );
  // For now, let's keep the main layout rendering and let Preloader overlay it.
  // The Preloader's pointerEvents: 'none' when !isLoading will handle interaction.


  return (
    <>
      <Preloader isLoading={isLoading} />
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Redirect /projects to /projects/all */}
        <Route path="/projects" element={<Navigate to="/projects/all" replace />} />
        <Route path="/projects/all" element={<AllProjectsPage />} />
        <Route path="/projects/ongoing" element={<Navigate to="/projects/all?filter=ongoing" replace />} />
        <Route path="/projects/completed" element={<Navigate to="/projects/all?filter=completed" replace />} />
        <Route path="/projects/upcoming" element={<Navigate to="/projects/all?filter=upcoming" replace />} />
        <Route path="/property/:propertyId" element={<PropertyDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/redevelopment" element={<RedevelopmentPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/investment" element={<InvestmentPage />} /> {/* Added route */}
        <Route path="/investment/:propertySlug" element={<InvestmentPropertyDetailPage />} /> {/* Added route */}
        {/* Define other routes here */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Layout>
    </>
  );
}

export default App;
