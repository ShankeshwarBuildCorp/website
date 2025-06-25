# Property Image Structure

This document outlines the recommended file structure and naming conventions for property images in the Shankeshwar project.

## Directory Structure

```
public/
└── images/
    ├── website/
    │   ├── placeholder-property.jpg
    │   ├── placeholder-amenity.jpg
    │   ├── placeholder-floorplan.jpg
    │   └── ... (other website images)
    │
    └── property/
        ├── shankeshwar-pearl/
        │   ├── exterior/
        │   │   ├── pearl-exterior-1.jpg
        │   │   ├── pearl-exterior-2.jpg
        │   │   └── ... 
        │   ├── interior/
        │   │   ├── pearl-interior-1.jpg
        │   │   ├── pearl-interior-2.jpg
        │   │   └── ...
        │   ├── amenities/
        │   │   ├── pearl-pool.jpg
        │   │   ├── pearl-gym.jpg
        │   │   └── ...
        │   └── floorplans/
        │       ├── pearl-1bhk-compact-2d.jpg
        │       ├── pearl-1bhk-compact-3d.jpg
        │       ├── pearl-2bhk-classic-2d.jpg
        │       ├── pearl-2bhk-classic-3d.jpg
        │       └── ...
        │
        ├── shankeshwar-sparsh/
        │   ├── ... (same structure as pearl)
        │
        └── ... (other properties)
```

## Naming Conventions

### Property Images

- Format: `[property-id]-[image-type]-[number].jpg`
- Examples:
  - `pearl-exterior-1.jpg`
  - `pearl-interior-2.jpg`
  - `sparsh-amenity-1.jpg`

### Floor Plan Images

- Format: `[property-id]-[flat-type]-[configuration]-[view-type].jpg`
- Examples:
  - `pearl-1bhk-compact-2d.jpg`
  - `pearl-2bhk-premium-3d.jpg`
  - `sparsh-2bhk-standard-2d.jpg`

## Image Types

1. **exterior** - Building exterior, façade, entrance
2. **interior** - Living rooms, bedrooms, kitchens
3. **amenities** - Swimming pool, gym, play area, clubhouse
4. **floorplans** - Floor plan diagrams (2D and 3D)

## Properties and IDs

Here are the shorthand IDs to use for each property:

- Shankeshwar Pearl: `pearl`
- Shankeshwar Sparsh: `sparsh`
- Skyline One: `skyline`
- Shankeshwar Villa: `villa`

## Image Requirements

- Recommended resolution: 1200×800 pixels (landscape)
- Format: JPG or WebP for better compression
- Max file size: 300KB per image for optimal loading
- Aspect ratio: 3:2 or 16:9 for consistency

## Usage in Code

When adding images manually, update the image URLs in the property data files to point to the local images:

```javascript
// Example property image object
{
  url: '/images/property/shankeshwar-pearl/exterior/pearl-exterior-1.jpg',
  alt: 'Shankeshwar Pearl Exterior',
  type: 'exterior'
}

// Example floor plan in flat type configuration
{
  floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-2bhk-classic-2d.jpg',
  floorPlan3D: '/images/property/shankeshwar-pearl/floorplans/pearl-2bhk-classic-3d.jpg'
}
```

## Fallback Images

Always ensure these fallback images exist:

- `/images/website/placeholder-property.jpg` - Generic property placeholder
- `/images/website/placeholder-floorplan.jpg` - Generic floor plan placeholder
- `/images/website/placeholder-amenity.jpg` - Generic amenity placeholder 