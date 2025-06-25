/**
 * Utility functions for downloading files
 */

/**
 * Download a file from a URL and save it to the specified path
 * @param {string} url - URL of the file to download
 * @param {string} savePath - Path to save the file to
 * @returns {Promise<boolean>} - Promise that resolves to true if download was successful
 */
export const downloadFile = async (url, savePath) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`);
    }
    
    const blob = await response.blob();
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = savePath.split('/').pop();
    downloadLink.click();
    URL.revokeObjectURL(downloadLink.href);
    
    return true;
  } catch (error) {
    console.error('Error downloading file:', error);
    return false;
  }
};

/**
 * Download a property brochure
 * @param {Object} property - Property object
 * @returns {Promise<boolean>} - Promise that resolves to true if download was successful
 */
export const downloadPropertyBrochure = async (property) => {
  if (!property?.documents) {
    console.error('Property has no documents');
    return false;
  }
  
  const brochure = property.documents.find(doc => doc.type === 'brochure');
  if (!brochure) {
    console.error('Property has no brochure');
    return false;
  }
  
  return downloadFile(brochure.url, `${property.name}-Brochure.pdf`);
};

/**
 * Download property floor plans
 * @param {Object} property - Property object
 * @returns {Promise<boolean>} - Promise that resolves to true if download was successful
 */
export const downloadPropertyFloorPlans = async (property) => {
  if (!property?.documents) {
    console.error('Property has no documents');
    return false;
  }
  
  const floorPlan = property.documents.find(doc => doc.type === 'floor-plan');
  if (!floorPlan) {
    console.error('Property has no floor plans');
    return false;
  }
  
  return downloadFile(floorPlan.url, `${property.name}-FloorPlans.pdf`);
};

/**
 * Download property price list
 * @param {Object} property - Property object
 * @returns {Promise<boolean>} - Promise that resolves to true if download was successful
 */
export const downloadPropertyPriceList = async (property) => {
  if (!property?.documents) {
    console.error('Property has no documents');
    return false;
  }
  
  const priceList = property.documents.find(doc => doc.type === 'price-list');
  if (!priceList) {
    console.error('Property has no price list');
    return false;
  }
  
  return downloadFile(priceList.url, `${property.name}-PriceList.pdf`);
}; 