export const siteConfig = {
  name: "Shankeshwar Buildcorp",
  description: "Premier real estate developer in Pune, Maharashtra. Luxury apartments, villas, and commercial spaces crafted with excellence.",
  url: "https://shankeshwarbuildcorp.com",
  founded: 2011,
  legalName: 'Shankeshwar Buildcorp Pvt. Ltd.',
  registration: {
    gst: 'GSTIN12345678901',
    cin: 'U45309MH2011PTC123456',
  },
  logo: "/images/logo.svg", // Main logo
  favicon: "/favicon.ico",
  images: {
    logo: "/images/logo.svg",
    logoIcon: "/images/logo-icon.svg", // if you have a smaller icon variant
    favicon: "/favicon.ico",
    ogImage: "/images/og-image.jpg", // For social sharing
    // Placeholders from constants.js might be preferred, but good to have structure
    placeholders: {
      property: '/images/placeholders/property1.svg',
      profile: '/images/placeholders/profile.svg',
      video: '/images/placeholders/video.jpg',
    }
  },
  branding: {
    primaryColor: '#16404D', // deep-teal
    secondaryColor: '#A6CDC6', // sage-teal
    accentColor: '#DDA853', // amber-gold
    lightColor: '#FBF5DD', // cream
  },
  seo: {
    title: "Shankeshwar Buildcorp | Premier Real Estate Developer in Pune",
    description: "Discover luxury apartments, villas, and commercial spaces built with excellence and innovation. Explore our ongoing and completed projects in Pune.",
    keywords: ["real estate", "property", "developer", "pune", "maharashtra", "apartments", "villas", "luxury homes", "commercial spaces"],
    ogImage: "/images/og-image.jpg" // Redundant if images.ogImage is used, but standard SEO practice
  },
  contact: {
    sales: {
      name: "Hritik Chopda",
      position: "Director",
      phone: "9604304919",
      email: "shankeshwarbuildcorp@gmail.com",
      image: "/images/team/sales-agent.jpg"
    },
    customerService: {
      name: "Kapil Chopda",
      position: "Managing Director",
      phone: "9890255936",
      email: "shankeshwarbuildcorp@gmail.com",
      image: "/images/team/customer-service.jpg"
    },
    officeAddress: "Agresan Apartments, 001, Plot No-96, near Gandhi Nursing Home, Sector No. 24, Pradhikaran, Nigdi, Pune, Maharashtra 411044",
    officePhone: "9604304919",
    officeEmail: "shankeshwarbuildcorp@gmail.com",
    whatsapp: "9604304919",
    socialLinks: {
      facebook: "", // Not provided in client data
      instagram: "https://www.instagram.com/shankeshwargroup/?igsh=a3lyMnMyaG1tanc1",
      linkedin: "https://www.linkedin.com/company/shankeshwar-group/",
      twitter: "", // Not provided in client data
      youtube: "https://www.youtube.com/@ShankeshwarGroupOfficial" 
    },
  },
  mainOffice: {
    address: 'Agresan Apartments, 001, Plot No-96, near Gandhi Nursing Home, Sector No. 24, Pradhikaran, Nigdi',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411044',
    country: 'India',
    location: {
      latitude: 18.660102846189176,
      longitude: 73.77324781758772,
    },
  },
  branches: [
    {
      name: 'Site Office',
      address: 'Shankeshwar Sparsh Office, Gat No. 334, Kudale Wasti, near Shankeshwar Gravity, near Swami Samarth Math, Bhim Nagar, Moshi',
      city: 'Pune',
      state: 'Maharashtra',
      pincode: '412105',
      location: {
        latitude: 18.671311021962357,
        longitude: 73.86038236855323,
      },
    },
  ],
}; 