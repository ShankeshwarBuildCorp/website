# Property Data Modular Structure

This directory contains the modular structure for managing property data in the Shankeshwar Buildcorp website.

## File Structure

```
src/data/properties/
├── index.js                   # Main export file with all utility functions
├── completed-properties.js    # All completed property data
├── ongoing-properties.js      # All under-construction property data
├── upcoming-properties.js     # All upcoming property data
└── utils.js                   # Shared utility functions
```

## How It Works

1. **Separation by Status**: Property data is organized by status into separate files:
   - `completed-properties.js`: Properties with 'completed' status
   - `ongoing-properties.js`: Properties with 'under-construction' status
   - `upcoming-properties.js`: Properties with 'upcoming' status

2. **Utility Functions**: Common utility functions for formatting and manipulating property data are in `utils.js`:
   - Price formatting (`formatPrice`, `formatPriceRange`)
   - Status handling (`getReadableStatus`, `getStatusBadgeClass`)
   - Area formatting (`formatArea`)
   - Phone and contact utilities (`formatPhoneNumber`, `getWhatsAppLink`)
   - And more

3. **Central Export**: The `index.js` file serves as the central point for:
   - Combining all properties into a single array
   - Exporting data access functions (`getPropertyById`, `getPropertiesByStatus`, etc.)
   - Re-exporting utility functions from `utils.js`

4. **Backward Compatibility**: The `../properties.js` file re-exports everything from this modular structure, ensuring backward compatibility with existing code.

## How to Use

### Import Individual Functions

```javascript
import { 
  getPropertyById, 
  getPropertiesByStatus, 
  formatPrice 
} from '../data/properties';
```

### Get All Properties

```javascript
import { getAllProperties } from '../data/properties';

const properties = getAllProperties();
```

### Get Properties by Status

```javascript
import { getPropertiesByStatus } from '../data/properties';

const completedProperties = getPropertiesByStatus('completed');
const ongoingProperties = getPropertiesByStatus('under-construction');
const upcomingProperties = getPropertiesByStatus('upcoming');
```

### Format Property Data

```javascript
import { formatPrice, formatArea } from '../data/properties';

const price = formatPrice(10000000); // "₹ 1.00 Cr"
const area = formatArea(1500); // "1500 sq.ft."
```

## Adding New Properties

To add a new property:

1. Determine its status (completed, under-construction, or upcoming)
2. Add the property data to the appropriate file (e.g., `ongoing-properties.js`)
3. Follow the existing property data structure, including all required fields

The property will automatically be included in the combined array and accessible through all utility functions.

## Modifying Existing Properties

To modify an existing property, locate it in the appropriate file based on its status and update the data as needed. 