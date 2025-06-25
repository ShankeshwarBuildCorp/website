/**
 * Ongoing Properties Data
 * Contains all properties with 'under-construction' status
 */

const ongoingProperties = [
  {
    id: 'shankeshwar-pearl',
    name: 'Shankeshwar Pearl',
    slug: 'shankeshwar-pearl',
    status: 'nearing-possession',
    type: 'Residential & Commercial',
    shortDescription: '2 & 3 BHK Large Carpet Homes & Commercial Spaces in Ravet',
    description: 'Shankeshwar Pearl is a premium residential project offering luxurious 2 & 3 BHK homes with spacious carpet areas in the prime location of Ravet. These thoughtfully designed residences provide a perfect blend of comfort, elegance, and modern amenities to elevate your living experience. Surrounded by lush greenery and excellent connectivity, Shankeshwar Pearl presents the perfect balance of serene living and urban convenience.',
    location: {
      address: ' Survey No. 97/1A/1A/1, Opposite PCMC Watertanks, Maskevasti, Ravet ',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '412101',
      coordinates: {
        lat: 18.662495947400885,
        lng: 73.74524432404442,
      },
      landmarks: [
        { name: 'Akurdi Railway Station', distance: '2.5 km', type: 'commute', details: 'Suburban railway station with connectivity across Pune' },
        { name: 'Pune-Mumbai Expressway', distance: '2.0 km', type: 'commute', details: 'Major highway ensuring smooth travel to Mumbai and Pune city' },
        { name: 'Bhakti-Shakti Chowk', distance: '2.0 km', type: 'commute', details: 'Prominent junction connecting Ravet to major Pune suburbs' },
        { name: 'Chinchwad Railway Station', distance: '7.0 km', type: 'commute', details: 'Well-connected railway station for intercity and suburban trains' },
        { name: 'D Mart Ready', distance: '100 m', type: 'shopping', details: 'Convenience grocery outlet located right next door' },
        { name: 'Reliance Smart', distance: '2.5 km', type: 'shopping', details: 'Multi-brand supermarket for all household needs' },
        { name: 'Star Bazaar', distance: '6.0 km', type: 'shopping', details: 'Large-format hypermarket with groceries and apparel' },
        { name: 'Elpro Mall', distance: '4.0 km', type: 'shopping', details: 'Shopping mall with retail, dining and entertainment options' }, // Changed type to 'shopping' for consistency, can also be 'recreation' or have multiple types if supported
        { name: 'Gahunje Stadium', distance: '4.0 km', type: 'recreation', details: 'Cricket stadium known for IPL and other sports events' },
        { name: 'Upcoming Phoenix Mall', distance: '6.5 km', type: 'shopping', details: 'Under-construction premium lifestyle mall' },
        { name: 'PVR', distance: '7.0 km', type: 'recreation', details: 'Popular multiplex for latest movies and leisure' },

        // Merged from nearby.schools
        { name: 'S B Patil Public School', distance: '1.5 km', details: 'CBSE-affiliated school with modern learning environment', type: 'education' },
        { name: 'City Pride School', distance: '1.0 km', details: 'Reputed school offering quality education', type: 'education' },
        { name: 'D.Y. Patil School', distance: '2.5 km', details: 'School with strong academic and co-curricular focus', type: 'education' },
        { name: 'Elpro School', distance: '6.0 km', details: 'Known for holistic development and infrastructure', type: 'education' },

        // Merged from nearby.colleges
        { name: 'Symbiosis College', distance: '3.0 km', details: 'Prestigious institution offering diverse undergraduate programs', type: 'education' },
        { name: 'Indira Institute', distance: '7.0 km', details: 'Well-known management and technical college', type: 'education' },
        { name: 'JSPM', distance: '6.5 km', details: 'Engineering and technology institute with strong faculty', type: 'education' },
        { name: 'PCCOE (Pimpri-Chinchwad College of Engineering)', distance: '4.0 km', details: 'Renowned engineering college with strong placement record', type: 'education' },

        // Merged from nearby.hospitals
        { name: 'Ojas Multispeciality Hospital', distance: '2.5 km', details: 'Full-service hospital for general and specialized treatments', type: 'healthcare' },
        { name: 'Sterling Multispeciality Hospital', distance: '2.0 km', details: 'Modern facility with emergency and surgical care', type: 'healthcare' },
        { name: 'Aditya Birla Hospital', distance: '5.0 km', details: 'Multi-specialty hospital with 24/7 emergency services', type: 'healthcare' },
        { name: 'Lokmanya Hospital', distance: '7.0 km', details: 'Trusted name in orthopedics and trauma care', type: 'healthcare' },

        // Merged from nearby.shopping (Note: some items might be duplicates of existing landmarks, review for uniqueness if needed)
        { name: 'D Mart', distance: '2.0 km', details: 'Comprehensive supermarket for everyday essentials', type: 'shopping' },
        // { name: 'Reliance Smart', distance: '2.5 km', rating: 4.2, details: 'Convenient shopping for groceries and household goods', type: 'shopping' }, // Already in landmarks
        // { name: 'Star Bazaar', distance: '6.0 km', rating: 4.1, details: 'Hypermarket with food, fashion and electronics', type: 'shopping' }, // Already in landmarks
        // { name: 'Elpro Mall', distance: '4.0 km', rating: 4.4, details: 'Retail and entertainment complex with PVR and food court', type: 'shopping' }, // Already in landmarks
        // { name: 'Upcoming Phoenix Mall', distance: '6.5 km', rating: null, details: 'Upcoming luxury shopping destination under development', type: 'shopping' } // Already in landmarks

        // Merged from nearby.transportation (Note: some items might be duplicates of existing landmarks, review for uniqueness if needed)
        // { name: 'Akurdi Railway Station', distance: '2.5 km', details: 'Key railway hub for local and intercity trains', type: 'commute' }, // Already in landmarks
        // { name: 'Chinchwad Railway Station', distance: '7.0 km', details: 'Another nearby rail connectivity option', type: 'commute' }, // Already in landmarks
        { name: 'PMPML Bus Stand', distance: '0.9 km', details: 'Regular PMPML bus routes to various parts of Pune', type: 'commute' }
        // { name: 'Pune-Mumbai Expressway', distance: '2.0 km', details: 'Direct access to highway for intercity commute', type: 'commute' }, // Already in landmarks
        // { name: 'Bhakti-Shakti Chowk', distance: '2.0 km', details: 'Major traffic junction with connectivity to multiple suburbs', type: 'commute' } // Already in landmarks
      ]
      
    },
    images: [
      { url: '/images/property/shankeshwar-pearl/exterior/pearl-exterior-1.jpeg', alt: 'Shankeshwar Pearl Exterior', type: 'exterior' },
      { url: '/images/property/shankeshwar-pearl/exterior/pearl-exterior-2.jpeg', alt: 'Shankeshwar Pearl Exterior', type: 'exterior' },
      { url: '/images/property/shankeshwar-pearl/exterior/pearl-exterior-3.jpeg', alt: 'Shankeshwar Pearl Exterior', type: 'exterior' },
      { url: '/images/property/shankeshwar-pearl/exterior/pearl-exterior-1.jpeg', alt: 'Shankeshwar Pearl Exterior', type: 'exterior' },
 ],
    flatTypes: [
      { 
        type: '3 BHK',
        configurations: [
          {
            carpetArea: 1136,
            price: 11900000,
            bedrooms: 3,
            bathrooms: 2,
            balconies: 2,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-floorplan.png',
            facing: 'East',
          },
          {
            carpetArea: 1142,
            price:  12000000,
            bedrooms: 3,
            bathrooms: 2,
            balconies: 2,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-floorplan.png',
            facing: 'North-East'
          }
        ]
      },
      { 
        type: '2 BHK',
        configurations: [
          {
            carpetArea: 835,
            price: 8236000,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-floorplan.png',
            facing: 'North-East'
          }
        ]
      }
    ],
    
    amenities: [
        // Sustainability
        { name: 'Limited Solar Water System', category: 'sustainability' },
        { name: 'Rainwater Harvesting System', category: 'sustainability' },
      
        // Security
        { name: 'CCTV Surveillance', category: 'security' },
        { name: 'Video Door Phone with Intercom Facility', category: 'security' },
        { name: 'Fire Fighting System', category: 'security' },
        { name: 'Grand Entrance Gate with Security Cabin', category: 'security' },
      
        // Recreational & Lifestyle
        { name: 'Co-Working Space', category: 'recreational' },
        { name: 'Childrens Play Area', category: 'recreational' },
        { name: 'Indoor Games Room', category: 'recreational' },
        { name: 'Gymnasium', category: 'recreational' },
        { name: 'Senior Citizen Sit-out Area', category: 'recreational' },
        { name: 'Multipurpose Hall', category: 'recreational' },
        { name: 'Creche Area', category: 'recreational' },
        { name: 'Sky Lounge', category: 'recreational' },

        // Utilities
        { name: 'Power Backup for Common Areas & Lifts', category: 'utilities' },
        { name: 'Automatic Elevators', category: 'utilities' },
        { name: 'Ample Parking Space', category: 'utilities' }
      ],
      
    amenityImages: [
      '/images/property/shankeshwar-pearl/amenities/pearl-amenitie-1.jpg',
      '/images/property/shankeshwar-pearl/amenities/pearl-pool.jpg',
      '/images/property/shankeshwar-pearl/amenities/pearl-gym.jpg',
      '/images/property/shankeshwar-pearl/amenities/pearl-garden.jpg'
    ],
    totalUnits: 240,
    completionDate: 'December 2025',
    possessionDate: 'December 2025',
    reraNumber: 'P52100035074',
    reraCertificatePath: '/documents/properties/shankeshwar-pearl/rera-certificate.pdf',
    reraRegistrationUrl: 'https://maharera.mahaonline.gov.in',
    priceRange: { min: 8250000, max: 11200000 },
    startingPrice: 8250000,
    completionPercentage: 75,
    brochureUrl: '/documents/properties/shankeshwar-pearl/shankeshwar-pearl-brochure.pdf',
    floorPlanPdf: '/documents/properties/shankeshwar-pearl/shankeshwar-pearl-floorplans.pdf',
    videoUrl: 'https://www.youtube.com/embed/562VuMrFUys',
    showSections: {
      specifications: true,
      floorplans: true,
      overview: true,
      amenities: true, 
      location: true,
      gallery: true,
      rera: true
    },
    specifications: {
        structure: 'Earthquake-resistant RCC framed structure designed for seismic zone safety',
        entranceLobby: 'Double-height decorative entrance lobby with name board and letterbox',
        kitchen: 'Granite platform with stainless steel sink, designer glazed dado tiles up to 4 feet height above platform, provision for water purifier and exhaust fan, and a service counter',
        electrical: {
          internal: 'Concealed copper wiring with standard quality fittings, fixtures, and MCB; modular switches; ample light points; AC point in master bedroom; common areas illuminated with sufficient lighting; provision for inverter and FTTH facility',
          external: 'Automatic timer lights and sensor lights in common areas'
        },
        windows: 'Three-track powder-coated aluminum sliding windows with glass shutters, mosquito net, M.S. safety grills, and marble/granite window sills',
        flooring: '1m x 1m or 4ft x 2ft vitrified tile flooring with skirting; anti-skid tiles in terrace, dry terrace, bathroom, and toilet',
        doors: {
          main: 'Laminated flush door with wooden/granite frame and premium fittings; safety/mortise lock; name plate; safety door in entrance lobby',
          internal: 'Laminated flush doors with wooden/granite frame and quality fittings',
          toilet: 'FRP doors with quality fittings and marble/granite door frames'
        },
        painting: 'Internal walls with oil bound distemper; external walls with water-resistant paint',
        bathrooms: 'Standard quality chromium plated bathroom fittings and fixtures; designer glazed dado tiles up to lintel level; provision for water heater and exhaust fan in all bathrooms; hot & cold mixer unit with overhead shower',
        plaster: 'Double coat good quality external plaster; internal single coat plaster with gypsum finish',
        lifts: 'Branded lifts for all buildings'
      },
      
    constructionProgress: {
      overall: 90,
      stages: [
        { name: 'Foundation', percentage: 100 },
        { name: 'Structure', percentage: 100 },
        { name: 'Brickwork', percentage: 100 },
        { name: 'Plumbing', percentage: 100 },
        { name: 'Electrical', percentage: 100 },
        { name: 'Flooring', percentage: 90 },
        { name: 'Finishing', percentage: 90 }
      ]
    },
    projectOverview: {
      total_area: '22,000 Sq.ft',
      total_buildings: 'Single Tower',
      total_units: '70 Units & 14 Shops',
      unit_variants: '2 BHK, 3 BHK, Duplex',
      open_space: '65% of Total Area',
      car_parking: '1 per Apartment',
      completion_date: 'Dec 2025',
      possession_date: 'Dec 2025',
      rera_registration: 'P52100035074',
      project_architect: 'Usha Rangrajan',
      landscape_architect: 'Mohar Landscape Architect',
      legal_advisor: 'Adv. Shrikant Kadam'
    },
    contactPhone: '+919604304919',
    contactEmail: 'shankeshwarbuildcorp@gmail.com'
  },
  {
    id: 'shankeshwar-sparsh',
    name: 'Shankeshwar Sparsh',
    slug: 'shankeshwar-sparsh',
    status: 'under-construction',
    type: 'Residential & Commercial',
    shortDescription: '1 & 2 BHK Homes & Commercial Spaces in Moshi.',
    description: 'Shankeshwar Sparsh offers thoughtfully designed 1 and 2 BHK homes in the rapidly developing localion of Moshi. Experience a harmonious blend of modern living and tranquility with well-planned layouts, quality construction, and essential amenities. Ideal for families looking for comfort and convenience at an affordable price point.',
    location: {
      address: 'Gat No. 334, Kudale Wasti, near Shankeshwar Gravity, near Swami Samarth Math, Bhim Nagar, Moshi',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '412105',
      coordinates: {
        lat: 18.671311021962357,
        lng: 73.86038236855323
      },
      landmarks: [
        { name: 'City Pride International School', distance: '2.0 km', type: 'education', details: 'Renowned CBSE school with excellent academic reputation' },
        { name: 'Moshi Bus Terminal (PMPL Bus Station)', distance: '2.5 km', type: 'commute', details: 'Major transportation hub with connectivity to all parts of Pune' },
        { name: 'Pune International Exhibition Center', distance: '2.3 km', type: 'event/infra', details: 'Popular venue for international exhibitions and events' },
        { name: 'Indrayani River', distance: '3.0 km', type: 'recreation', details: 'Scenic river offering peaceful views and greenery' },
        { name: 'Nashik Road (Pune-Nashik Highway)', distance: '0.7 km', type: 'connectivity', details: 'Direct access to Nashik and Pune via highway' },
        { name: 'D Mart', distance: '2.0 km', type: 'shopping', details: 'Large retail supermarket for daily groceries and essentials' },
        { name: 'City Pride International School', distance: '2.0 km',type: 'education', details: 'CBSE curriculum with modern campus and facilities' },
        { name: 'SNBP International School', distance: '2.2 km',type: 'education', details: 'CBSE affiliated school with holistic education' },
        { name: 'Aditya International School', distance: '1.2 km',type: 'education', details: 'English medium school focused on academic excellence' },
        { name: 'MIT College', distance: '2.5 km',type: 'education', details: 'Private college offering engineering and management courses' },
        { name: 'Sharadchandra College', distance: '2.5 km',type: 'education', details: 'Private college offering engineering and management courses' },
        { name: 'Shree Multispeciality Hospital Moshi', distance: '0.99 km', type: 'healthcare', details: 'Comprehensive medical services and emergency care' },
        { name: 'Varad Multispeciality Hospital', distance: '1.09 km', type: 'healthcare', details: 'Multi-specialty healthcare facility' },
        { name: 'Dr Lata\'S Nirmiti Hospital', distance: '1.14 km', type: 'healthcare', details: 'Specializing in Gynaecology, Obstetrics, and Infertility' },
        { name: 'Pcmc Hospital Moshi', distance: '1.21 km', type: 'healthcare', details: 'Public hospital serving the Moshi area' },
        { name: 'Sunrise Hospital', distance: '1.33 km', type: 'healthcare', details: 'General hospital with various medical departments' },
        { name: 'Jijau Mother & Child Care Hospital', distance: '1.50 km', type: 'healthcare', details: 'Specialized care for mothers and children' },
        { name: 'Sarvadnya Hospital Medical', distance: '1.56 km', type: 'healthcare', details: 'General medical and hospital services' },
        { name: 'Spandan Hospital Moshi', distance: '1.60 km', type: 'healthcare', details: 'Gynaecology, General Medicine, and Sonography services' },
        { name: 'Tulip Hospital', distance: '1.62 km', type: 'healthcare', details: 'Multi-specialty hospital with modern facilities' },
        { name: 'Sable Hospital', distance: '1.63 km', type: 'healthcare', details: 'General hospital and medical care' },
        { name: 'Noble Hospital (Yerwada)', distance: '6.5 km',type: 'healthcare', details: 'Full-service multi-specialty hospital' },
        { name: 'D Mart', distance: '2.0 km',type: 'shopping', details: 'Supermarket for daily needs and household items' },
        { name: 'Reliance Trends', distance: '2.1 km',type: 'shopping', details: 'Fashion and clothing store' },
        { name: 'Spine City Mall', distance: '5.0 km',type: 'shopping', details: 'Mall with multiple stores and entertainment zones' },
        {name: 'Zudio', distance: '2.5 km',type: 'shopping', details: 'Fashion and clothing store'},
        { name: 'Reliance Digital', distance: '2.5 km',type: 'shopping', details: 'Electronics store'},
        { name: 'Chowdhary Dhaba', distance: '1.2 km',type: 'food', details: 'Casual dining with North Indian cuisine' },
        { name: 'Hotel Ashoka ', distance: '1.5 km',type: 'food', details: 'Multi-cuisine family restaurant' }
      ]
    },
    images: [
      { url: '/images/property/shankeshwar-sparsh/exterior/sparsh-exterior-1.jpeg', alt: 'Shankeshwar Sparsh Exterior', type: 'exterior' },
      { url: '/images/property/shankeshwar-sparsh/interior/sparsh-interior-1.jpeg', alt: 'Shankeshwar Sparsh Living Room', type: 'interior' },
      { url: '/images/property/shankeshwar-sparsh/exterior/sparsh-exterior-4.jpeg', alt: 'Shankeshwar Sparsh Living Room', type: 'interior' },
      // { url: '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-1.jpg', alt: 'Children\'s Play Area', type: 'amenity' },
      { url: '/images/property/shankeshwar-sparsh/exterior/sparsh-exterior-2.jpeg', alt: 'Shankeshwar Sparsh Building View', type: 'exterior' },
      { url: '/images/property/shankeshwar-sparsh/interior/sparsh-interior-2.jpeg', alt: 'Modern Kitchen', type: 'interior' }
    ],
    flatTypes: [
        { 
            type: '2 BHK',
            configurations: [
              {
                carpetArea: 632,
                price: 4637000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-632-2d.png',
                bedrooms: 2,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
              },
              {
                carpetArea: 663,
                price: 4863000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-663-2d.png',
                bedrooms: 2,
                bathrooms: 2,
                balconies: 2,
                DryBalcony: 1,
              },
              {
                carpetArea: 628,
                price: 4608000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-628-2d.png',
                bedrooms: 2,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
              },
              {
                carpetArea: 665,
                price: 5500000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-665-2d.png',
                bedrooms: 2,
                bathrooms: 2,
                balconies: 2,
                DryBalcony: 1,
              }
            ]
          },
          { 
            type: '1 BHK',
            configurations: [
              {
                carpetArea: 452,
                price: 3325000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-452-2d.png',
                bedrooms: 1,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              },
              {
                carpetArea: 459,
                price: 3368820,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-459-2d.png',
                bedrooms: 1,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              },
              {
                carpetArea: 435,
                price: 3200512,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-435-2d.png',
                bedrooms: 1,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              },
              {
                carpetArea: 458,
                price: 3376110,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-458-2d.png',
                bedrooms: 1,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              }
            ]
          }
    ],  

    amenities: [ 
        // Lifestyle Amenities (Recreational)
        { name: 'Multipurpose Sports Court', category: 'recreational' },
        { name: 'Co-Working Space & Library', category: 'recreational' },
        { name: 'Calisthenics Area', category: 'recreational' },
        { name: 'Walking Track', category: 'recreational' },
        { name: 'Children Play Area with Equipment', category: 'recreational' },
        { name: 'Senior Citizen Sit Out Area', category: 'recreational' },
        { name: 'Gazebo', category: 'recreational' },
        { name: 'Amphitheatre', category: 'recreational' },
        { name: 'Party Lawn', category: 'recreational' },
        { name: 'Clubhouse with Indoor Games', category: 'recreational' },
        { name: 'Well Equipped Gymnasium', category: 'recreational' },

        // Wellness Amenities
        { name: 'Yoga & Meditation Area', category: 'wellness' },

        // Spiritual Amenities
        { name: 'Temple', category: 'spiritual' },

        // Security Amenities
        { name: 'Grand Entrance Gate with Security Cabin', category: 'security' },
        { name: 'CCTV Surveillance for Common Areas', category: 'security' },
        { name: 'Fire Fighting System', category: 'security' },

        // Utilities Amenities
        { name: 'Power Backup for Lifts & Common Areas', category: 'utilities' },

        // Sustainability Amenities
        { name: 'Rainwater Harvesting', category: 'sustainability' },
        { name: 'Solar Water Heating System (Limited)', category: 'sustainability' },

        // Infrastructure Amenities
        { name: 'Internal Concrete/Paved Roads', category: 'infrastructure' },
        { name: 'Street Lighting', category: 'infrastructure' }

      ],
      
    amenityImages: [
      '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-1.jpeg',
      '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-2.jpeg'
    ],

    totalUnits: 436,
    completionDate: 'June 2025',
    possessionDate: 'September 2025',
    reraNumber: 'P52100055256',
    reraCertificatePath: '/documents/properties/shankeshwar-sparsh/rera-certificate.pdf',
    reraRegistrationUrl: 'https://maharerait.mahaonline.gov.in/ProjectSummaryView/ProjectSummaryQRCodeView?id=Q2VydGlmaWNhdGVObz1QNTIxMDAwNTUyNTYmU2NhbnR5cGU9UHJvbW90ZXJMb2dpblFSQ29kZQ==',
    priceRange: { min: 3200000, max: 4700000 },
    startingPrice: 3200000,
    completionPercentage: 45,
    brochureUrl: '/documents/properties/shankeshwar-sparsh/shankeshwar-sparsh-brochure.pdf',
    floorPlanPdf: '/documents/properties/shankeshwar-sparsh/shankeshwar-sparsh-floorplans.pdf',
    videoUrl: 'https://youtu.be/KoTJEPP-5Z8?si=vZOfW87o0fT6yV9x',
    showSections: {
      specifications: true,
      floorplans: true,
      overview: true,
      amenities: true,
      location: true,
      gallery: true,
      rera: true
    },
    specifications: {
        structure: 'Earthquake-resistant seismic zone structural RCC frame',
        kitchen: 'Kitchen platform with granite top; stainless steel sink; glazed tile dado up to 4 ft height above platform; provision for water purifier; provision for exhaust fan',
        electrical: 'Concealed copper wiring with standard quality fittings, fixtures & MCB; modular switches; ample light points; AC point in master bedroom; common areas illuminated with sufficient lighting; provision for inverter; FTTH cable facility',
        windows: 'Three-track powder-coated aluminum sliding windows with mosquito net; M.S. railing; marble/granite window frame',
        flooring: '1200 × 600 mm vitrified tile flooring; vitrified tile with skirting in living/dining area and all bedrooms; anti-skid tiles in terrace, bathroom & toilet',
        entranceLobby: 'Decorative entrance lobby with name board & letter box',
        doors: 'Laminated flushed entrance door with safety/mortise/digital lock, premium fittings & name plate; laminated flush doors for internal rooms; laminated waterproof doors for washrooms; three-track powder-coated sliding balcony doors with mosquito net; marble/granite/wooden door frames for all doors',
        paint: 'Internal walls with oil-bound distemper; external walls with water-resistant paint',
        toilet: 'Standard chromium-plated bathroom fittings & fixtures; marble/granite door frames; designer glazed dado tiles up to lintel level; provision for exhaust fan in all bathrooms; hot & cold mixer unit with overhead shower',
        plaster: 'External two-coat plaster; internal single-coat gypsum-finished plaster',
        lift: 'Branded lift'
      },
      
    constructionProgress: {
      overall: 45,
      stages: [
        { name: 'Foundation', percentage: 100 },
        { name: 'Structure', percentage: 55 },
        // { name: 'Brickwork', percentage: 75 },
        // { name: 'Plumbing', percentage: 50 },
        // { name: 'Electrical', percentage: 45 },
        // { name: 'Flooring', percentage: 30 },
        // { name: 'Finishing', percentage: 15 }
      ]
    },

    projectOverview: {
      total_area: '2 Acres',
      total_buildings: '3 Towers',
      total_units: '436 Apartments',
      unit_variants: '1 & 2 BHK',
      open_space: '10% of Total Area',
      car_parking: '1 per Apartment',
      completion_date: 'Dec 2028',
      possession_date: 'Dec 2027 Onwards'
    },
    contactPhone: '+919604304919',
    contactEmail: 'shankeshwarbuildcorp@gmail.com'
  },
  {
    id: 'skyline-one',
    name: 'Skyline One',
    slug: 'skyline-one',
    status: 'under-construction',
    type: 'Residential',
    shortDescription: '2, 2.5 & 3 BHK Urban Luxury Homes in Charohli',
    description: 'Skyline One in Charohli offers premium 2, 2.5 & 3 BHK urban luxury homes with stunning views and modern amenities. These thoughtfully designed apartments feature spacious layouts, premium finishes, and state-of-the-art facilities for a truly luxurious living experience.',
    location: {
      address: 'Charohli, Pune',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '411062',
      coordinates: {
        latitude: 18.6120,
        longitude: 73.9352,
      },
      landmarks: [
        { name: 'Indira College', distance: '3 km', type: 'school' },
        { name: 'Talegaon Railway Station', distance: '4.5 km', type: 'transport' },
        { name: 'Columbia Asia Hospital', distance: '5.8 km', type: 'hospital' }
      ]
    },
    images: [
      { url: '/images/property/skyline-one/exterior/skyline.jpg', alt: 'Skyline One Exterior' },

    ],
    unitTypes: [
      { 
        name: '2 BHK Urban', 
        size: { min: 1100, max: 1200 },
        price: { min: 6900000, max: 7500000 }
      },
      { 
        name: '2.5 BHK Premium', 
        size: { min: 1300, max: 1350 },
        price: { min: 8100000, max: 8700000 }
      },
      { 
        name: '3 BHK Luxury', 
        size: { min: 1550, max: 1650 },
        price: { min: 9800000, max: 10500000 }
      }
    ],
    amenities: [
      'Infinity Pool',
      'Sky Lounge',
      'Modern Gymnasium',
      'Landscaped Gardens',
      'Multi-purpose Hall',
      'Indoor Games Room',
      'Yoga Deck',
      '24/7 Security'
    ],
    totalUnits: 90,
    completionDate: 'March 2026',
    possessionDate: 'June 2026',
    reraNumber: 'P52100034567',
    reraCertificatePath: '/documents/properties/skyline-one/rera-certificate.pdf',
    reraRegistrationUrl: 'https://maharera.mahaonline.gov.in',
    priceRange: {
      min: 6900000,
      max: 10500000
    },
    startingPrice: 6900000,
    completionPercentage: 40,
    brochure: '/documents/skyline-one-brochure.pdf',
    videoTour: 'https://www.youtube.com/watch?v=example3',
    showSections: {
      specifications: false,
      floorplans: false,
      overview: false,
      amenities: false,
      location: false,
      gallery: false,
      rera: false
    },
    floorPlans: [
      { name: '2 BHK Floor Plan', image: '/images/placeholders/property4.svg' },
      { name: '2.5 BHK Floor Plan', image: '/images/placeholders/property5.svg' },
      { name: '3 BHK Floor Plan', image: '/images/placeholders/property6.svg' }
    ],
    specifications: {
        structure: 'Earthquake-resistant RCC framed structure designed for seismic zone safety',
        entranceLobby: 'Double-height decorative entrance lobby with name board and letterbox',
        kitchen: 'Granite platform with stainless steel sink, designer glazed dado tiles up to 4 feet height above platform, provision for water purifier and exhaust fan, and a service counter',
        electrical: {
          internal: 'Concealed copper wiring with standard quality fittings, fixtures, and MCB; modular switches; ample light points; AC point in master bedroom; common areas illuminated with sufficient lighting; provision for inverter and FTTH facility',
          external: 'Automatic timer lights and sensor lights in common areas'
        },
        windows: 'Three-track powder-coated aluminum sliding windows with glass shutters, mosquito net, M.S. safety grills, and marble/granite window sills',
        flooring: '1m x 1m or 4ft x 2ft vitrified tile flooring with skirting; anti-skid tiles in terrace, dry terrace, bathroom, and toilet',
        doors: {
          main: 'Laminated flush door with wooden/granite frame and premium fittings; safety/mortise lock; name plate; safety door in entrance lobby',
          internal: 'Laminated flush doors with wooden/granite frame and quality fittings',
          toilet: 'FRP doors with quality fittings and marble/granite door frames'
        },
        painting: 'Internal walls with oil bound distemper; external walls with water-resistant paint',
        bathrooms: 'Standard quality chromium plated bathroom fittings and fixtures; designer glazed dado tiles up to lintel level; provision for water heater and exhaust fan in all bathrooms; hot & cold mixer unit with overhead shower',
        plaster: 'Double coat good quality external plaster; internal single coat plaster with gypsum finish',
        lifts: 'Branded lifts for all buildings'
      },
      
    constructionProgress: {
      overall: 75,
      stages: [
        { name: 'Foundation', percentage: 100 },
        { name: 'Structure', percentage: 95 },
        { name: 'Brickwork', percentage: 85 },
        { name: 'Plumbing', percentage: 70 },
        { name: 'Electrical', percentage: 60 },
        { name: 'Flooring', percentage: 50 },
        { name: 'Finishing', percentage: 30 }
      ]
    },
    projectOverview: {
      total_area: '5.2 Acres',
      total_buildings: '3 Towers',
      total_units: '240 Apartments',
      unit_variants: '1 & 2 BHK',
      open_space: '65% of Total Area',
      car_parking: '1 per Apartment',
      completion_date: 'December 2025',
      possession_date: 'March 2026',
      rera_registration: 'P52100029876',
      project_architect: 'Karan Darda Architects',
      landscape_architect: 'Vikas Labba-Design Terra',
      legal_advisor: 'Adv. Shrikant Kadam'
    },
    contactPhone: '+919604304919',
    contactEmail: 'sales@shankeshwarbuildcorp.com'
  }
];

export default ongoingProperties; 