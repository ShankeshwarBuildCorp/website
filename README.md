# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Shankeshwar Build Corp - Real Estate Website

## How to Provide Your Company Data

To personalize your website with your company's information, we need you to provide specific data about your company, team, projects, and more. This README will guide you through the process.

### Option 1: Fill in the Data File (Technical Approach)

If you or your team are comfortable with JavaScript:

1. Open the file `src/data/clientData.js`
2. Replace the placeholder information with your actual data
3. Save the file
4. Your website will automatically update with your information

### Option 2: Fill in the Content Guide (Non-Technical Approach)

If you prefer a more user-friendly approach:

1. Open the file `src/data/clientData.md`
2. This is a comprehensive guide that explains all the information we need
3. You can fill out this information in any format comfortable for you (Word, Excel, etc.)
4. Provide this information to your web development team, who will implement it

## Image Requirements

Your website will need various images:

- **Team Photos**: Professional headshots of key team members
- **Property Images**: High-quality photos of your properties
- **Logo**: Your company logo in high resolution
- **Project Images**: Photos of your completed and ongoing projects
- **Amenity Images**: Photos of amenities in your properties

Please ensure all images are high quality and you have the rights to use them.

## Website Structure

Your website includes the following pages:

- **Home Page**: Showcases your featured properties and company highlights
- **Projects Page**: Lists all your properties (upcoming, ongoing, and completed)
- **Property Detail Pages**: Detailed information about each property
- **About Us Page**: Information about your company, team, and history
- **Contact Page**: Contact information and inquiry form

## Need Help?

If you have any questions about providing your information or how it will be used on the website, please contact your web development team.

---

## For Developers

### Project Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Project Structure

- `src/data/properties.js`: Contains property data
- `src/data/clientData.js`: Contains client-specific information
- `src/components/`: React components used throughout the site
- `src/pages/`: Page components for each route
- `src/config/`: Configuration files
- `public/`: Static assets like images

### Implementing Client Data

Once the client provides their information:

1. Update the `src/data/clientData.js` file with their data
2. Replace placeholder images in the `public/images/` directory
3. Make any necessary adjustments to components to accommodate their specific needs
4. Test all pages to ensure the data displays correctly

## Property Data Toggle Feature

### Overview
The property data toggle feature allows you to control which sections of data are displayed on the property detail page. If a toggle is turned off, the section will display a "Will be updated soon" message instead of the actual data.

### How to Use

1. **Add the showSections object to your property data:**

```javascript
// Example property data in src/data/properties/ongoing-properties.js
{
  id: 'property-id',
  name: 'Property Name',
  // ... other property fields
  
  // Add the showSections object to control what's displayed
  showSections: {
    specifications: true,  // Show specifications section
    floorplans: false,     // Hide floor plans section (will show "will be updated soon")
    overview: true,        // Show project overview section
    amenities: true,       // Show amenities section
    location: true,        // Show location section
    gallery: false,        // Hide gallery section (will show "will be updated soon")
    rera: false            // Hide RERA section (will show "will be updated soon")
  }
}
```

2. **For upcoming properties:**
   - By default, all toggles are set to `false` for upcoming properties
   - You can override this by explicitly setting values in the property data

3. **If the showSections object is not provided:**
   - The system will default to showing all sections that have data
   - No "will be updated soon" messages will be shown

### Best Practices

- Use this feature when you want to indicate that content is coming soon
- Keep the toggles aligned with your marketing timeline
- For completed properties, set all toggles to `true` if the data is available
- For ongoing properties, you may want to gradually enable sections as data becomes available
- Consider adding comments when setting toggles to `false` to indicate when they might be turned on

### Example Use Cases

- **Early Project Phase:** Show only location and overview, hide specifications and floor plans
- **Pre-Launch:** Show specifications and floor plans, but hide RERA (if not yet processed)
- **During Construction:** Show all sections except for gallery (if professional photos aren't ready)
- **Project Updates:** Temporarily disable a section while you update the content


prompt:

update the hero section.
The hero section should be aesthtic, minimal, modern, dynamic and properly structured. 
Refer the image attached. 
update the header accroding to following requirments:
1. project option should have sub options of ongoing, completed and upcoming.
2. add new option of investment.
Then do following updates:
1. as we created sub options for property then show similar data on properties page as clicked.
2. remove the investment properties from properties page.
3. create a investment property page similar to properties page to showcase only investment properties. Showcase the investment properties there. Also don't exactly copy the properties page, just refer and create page related to investment properties.
