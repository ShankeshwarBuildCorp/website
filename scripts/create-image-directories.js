/**
 * Script to create the necessary directory structure for property images
 * Run with: npm run setup-images
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory (relative to project root)
const baseDir = path.join(__dirname, '..', 'public', 'images');

// Property IDs
const properties = [
  { id: 'shankeshwar-pearl', shortName: 'pearl' },
  { id: 'shankeshwar-sparsh', shortName: 'sparsh' },
  { id: 'skyline-one', shortName: 'skyline' },
  { id: 'shankeshwar-villa', shortName: 'villa' }
];

// Directory structure
const structure = {
  website: ['placeholder-property.jpg', 'placeholder-amenity.jpg', 'placeholder-floorplan.jpg'],
  property: properties.map(prop => ({
    name: prop.id,
    subdirs: [
      'exterior', 
      'interior', 
      'amenities', 
      'floorplans'
    ]
  }))
};

// Create directories
function createDirectories() {
  console.log('Creating image directory structure...');
  
  // Create base directory if it doesn't exist
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log(`Created base directory: ${baseDir}`);
  }
  
  // Create website directory
  const websiteDir = path.join(baseDir, 'website');
  if (!fs.existsSync(websiteDir)) {
    fs.mkdirSync(websiteDir, { recursive: true });
    console.log(`Created directory: images/website`);
    
    // Create placeholder text files for placeholder images
    structure.website.forEach(placeholder => {
      const placeholderPath = path.join(websiteDir, placeholder + '.txt');
      fs.writeFileSync(
        placeholderPath, 
        `This is a placeholder for ${placeholder}. Replace this text file with an actual image.`
      );
      console.log(`Created placeholder: images/website/${placeholder}.txt`);
    });
  }
  
  // Create property directories
  const propertyDir = path.join(baseDir, 'property');
  if (!fs.existsSync(propertyDir)) {
    fs.mkdirSync(propertyDir, { recursive: true });
    console.log(`Created directory: images/property`);
  }
  
  // Create each property's directories
  structure.property.forEach(property => {
    const propDir = path.join(propertyDir, property.name);
    if (!fs.existsSync(propDir)) {
      fs.mkdirSync(propDir, { recursive: true });
      console.log(`Created directory: images/property/${property.name}`);
      
      // Create subdirectories
      property.subdirs.forEach(subdir => {
        const subdirPath = path.join(propDir, subdir);
        if (!fs.existsSync(subdirPath)) {
          fs.mkdirSync(subdirPath, { recursive: true });
          console.log(`Created directory: images/property/${property.name}/${subdir}`);
          
          // Create README file with naming convention
          const readmePath = path.join(subdirPath, 'README.txt');
          let content = `Place your ${subdir} images for ${property.name} in this directory.\n\n`;
          
          if (subdir === 'floorplans') {
            content += `Naming convention: ${property.shortName}-[flat-type]-[configuration]-[view-type].jpg\n`;
            content += `Examples:\n`;
            content += `- ${property.shortName}-1bhk-compact-2d.jpg\n`;
            content += `- ${property.shortName}-2bhk-premium-3d.jpg\n`;
          } else {
            content += `Naming convention: ${property.shortName}-${subdir.slice(0, -1)}-[number].jpg\n`;
            content += `Examples:\n`;
            content += `- ${property.shortName}-${subdir.slice(0, -1)}-1.jpg\n`;
            content += `- ${property.shortName}-${subdir.slice(0, -1)}-2.jpg\n`;
          }
          
          fs.writeFileSync(readmePath, content);
          console.log(`Created README: images/property/${property.name}/${subdir}/README.txt`);
        }
      });
    }
  });
  
  console.log('\nDirectory structure created successfully!');
  console.log('\nNext steps:');
  console.log('1. Place your property images in the corresponding directories');
  console.log('2. Follow the naming conventions in the README.txt files');
  console.log('3. Update image URLs in the property data files if needed');
}

// Run the script
createDirectories(); 