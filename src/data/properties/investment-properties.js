/**
 * Investment Properties Data
 * This file contains client-owned offices or shops available as investments
 */

const investmentProperties = [
  {
    id: 'ashirwad-capri-1',
    slug: 'ashirwad-capri-shops-ravet', 
    name: 'Ashirwad Capri - First Floor Shops',
    status: 'completed', 
    type: 'investment', 
    propertyType: 'Commercial Shop', 
    subType: 'First Floor Shops',
    height: '14ft',
    area: { value: 550, unit: 'sq ft', display: '550 sq ft' }, 
    price: { value: 7500000, currency: 'INR', display: '₹75 Lacs onwards' }, 
    expectedYield: '6-8% Annually', 
    location: {
      city: 'Ravet',
      zipCode: '412101',
      address: 'Prime Location, Ravet, Pune',
      mapLink: 'https://maps.app.goo.gl/ciEWavsV29c6tSPK6'
    },
    shortDescription: 'Premium first floor commercial shops with excellent visibility and foot traffic in the growing neighborhood of Ravet.',
    longDescription: 'Invest in high-potential commercial shops on the first floor of Ashirwad Capri, strategically located in Ravet, Pune. These units offer excellent visibility, high footfall potential, and are ideal for various retail or office setups. With a ceiling height of 14ft, these shops provide ample space and a modern ambiance. Ravet is a rapidly developing area with strong infrastructure growth, making this a lucrative investment opportunity.', 
    keyFeatures: [
      'High visibility on First Floor',
      'Located in a rapidly developing area',
      'Modern construction and design',
      'Suitable for retail or office space',
      'Ample parking space (common)',
      'Proximity to residential catchments'
    ],
    images: {
      thumbnail: '/images/properties/investment/capri/capri-1.png',
      featured: '/images/properties/investment/capri/capri-1.png',
      gallery: [
        '/images/properties/investment/capri/capri-1.png',
      ]
    },
    amenities: [
      { name: 'Common Parking', icon: 'FaCar' },
      { name: 'Power Backup (Common Areas)', icon: 'FaBolt' },
      { name: 'Security', icon: 'FaShieldAlt' },
      { name: 'Lift Access', icon: 'FaBuilding' }
    ],
    documents: [
      {
        name: 'Project Plan',
        pdfPath: '/documents/investment/capri/plan.pdf' 
      },
      {
        name: 'Brochure',
        pdfPath: '/documents/investment/capri/brochure.pdf' 
      }
    ],
    contactPhone: '+919604304919',
    reraNo: 'P521000XXXXX' 
  },
  {
    id: 'akshat-khushi',
    name: 'Akshat Khushi',
    status: 'completed',
    type: 'investment',
    subType: 'Ground Floor Shops',
    height: '20ft',
    location: {
      city: 'Moshi',
      address: 'Dudalgaon, Moshi',
      zipCode: '412105',
      mapLink: 'https://maps.app.goo.gl/ZAJYpknfyFAbVrDC8'
    },
    shortDescription: 'Prime ground floor commercial shops with excellent visibility and 20ft height in the growing area of Dudalgaon, Moshi.',
    images: {
      thumbnail: '/images/properties/investment/khushi/khushi-1.jpeg',
      featured: '/images/properties/investment/khushi/khushi-1.jpeg',
      gallery: [
        '/images/properties/investment/khushi/khushi-1.jpeg',
        '/images/properties/investment/khushi/khushi-2.jpeg',
        '/images/properties/investment/khushi/khushi-3.jpeg'
      ]
    },
    documents: [
      {
        name: 'commercial',
        pdfPath: '/documents/investment/khushi/commercial.pdf' 
      },
      {
        name: 'Floor Plan',
        pdfPath: '/documents/investment/khushi/floor_plan.pdf' 
      }
    ],
    contactPhone: '+919604304919',
    slug: 'akshat-khushi-shops',
    propertyType: 'Commercial Shops',
    area: { value: 600, unit: 'sq ft', display: 'Approx. 600 sq ft per unit' }, // Example, update
    price: { value: 7500000, display: '₹75 Lakhs Onwards' }, // Example, update
    expectedYield: '6-8% Annually (projected)', // Example, update
    longDescription: 'Akshat Khushi offers premium ground floor commercial shops with a towering 20ft height, ensuring excellent visibility and space utilization. Located in the rapidly developing Dudalgaon area of Moshi, these shops are ideal for various retail businesses, showrooms, or offices seeking a prominent presence. The project benefits from high footfall potential due to its proximity to residential areas and main road connectivity.', // Example, update
    keyFeatures: [
      'Prime ground floor location',
      'Impressive 20ft ceiling height',
      'Excellent visibility for businesses',
      'Located in a high-growth corridor of Moshi',
      'Suitable for diverse commercial activities',
      'Modern facade and construction'
    ],
    amenities: [
      { name: 'Ample Frontage', icon: 'FaStoreAlt' },
      { name: 'Dedicated Signage Space', icon: 'FaSign' },
      { name: 'Common Restrooms', icon: 'FaRestroom' },
      { name: 'Visitor Parking Area', icon: 'FaParking' }
    ],
    // documents array is already present
    reraNo: 'P521000XXXXX' // Example, update if available
  }
];

export default investmentProperties; 