/**
 * Shankeshwar Build Corp - Client Data File
 * 
 * This file contains all the data that needs to be filled in by Shankeshwar Build Corp.
 * Simply replace the placeholder information with your actual data, and the website will
 * automatically update with your content.
 * 
 * INSTRUCTIONS:
 * 1. Fill in the information below with your actual data
 * 2. Keep the format consistent (don't change the structure)
 * 3. For images, place them in the appropriate folders in the public directory
 *    and update the paths here
 */

// Company Information
export const companyInfo = {
  // Basic Information
  name: "Shankeshwar Buildcorp", // Full legal name of the company
  shortName: "Shankeshwar", // Short name used in some places
  foundingYear: 2011, // Year the company was founded (updated based on client info)
  registrationNumber: "EXAMPLE123456", // Company registration number
  gstNumber: "EXAMPLE27XXXXX1Z5", // GST number if applicable
  reraNumber: "EXAMPLEMH12345", // RERA registration number

  // Contact Information
  address: {
    line1: "Agresan Apartments, 001, Plot No-96",
    line2: "Near Gandhi Nursing Home, Sector No. 24", // Optional
    city: "Pune",
    state: "Maharashtra",
    pinCode: "411044",
    landmark: "Pradhikaran, Nigdi", // Optional
    coordinates: {
      lat: 18.644265, // Replace with correct latitude
      lng: 73.760234  // Replace with correct longitude
    }
  },
  
  // Multiple office locations if applicable
  additionalOffices: [
    // No additional offices provided in client data
  ],
  
  // Primary Contact Numbers (displayed prominently)
  primaryPhone: "+91 9604304919",
  secondaryPhone: "+91 9890255936", // Optional
  salesPhone: "", // Optional
  
  // Email Addresses
  primaryEmail: "shankeshwarbuildcorp@gmail.com",
  salesEmail: "shankeshwarbuildcorp@gmail.com",
  supportEmail: "", // Optional
  careersEmail: "", // Optional
  
  // Website and Social Media
  website: "www.shankeshwarbuildcorp.com",
  socialMedia: {
    facebook: "", // Not provided in client data
    instagram: "https://www.instagram.com/shankeshwargroup/?igsh=a3lyMnMyaG1tanc1",
    linkedin: "https://www.linkedin.com/company/shankeshwar-group/",
    twitter: "", // Not provided in client data
    youtube: "https://www.youtube.com/@ShankeshwarGroupOfficial"
  },
  
  // Company Description (used in About Us and other sections)
  shortDescription: "Shankeshwar Buildcorp is a leading real estate developer in Pune, known for building quality homes and commercial spaces with a focus on customer satisfaction and innovation.",
  
  fullDescription: "Founded in 2011, Shankeshwar Buildcorp has established itself as one of Pune's most trusted real estate developers. With a commitment to quality, innovation, and customer satisfaction, we have successfully delivered over 9 projects, creating homes for more than 800 families. Our developments are characterized by thoughtful design, premium amenities, and strategic locations, providing exceptional living and working environments for our customers. At Shankeshwar Buildcorp, we don't just build structures; we create spaces where memories are made, businesses thrive, and communities flourish.",
  
  // Mission & Vision Statements
  mission: "To create exceptional living and working spaces that enhance quality of life, delivered with integrity, innovation, and excellence.",
  
  vision: "To be the most trusted name in real estate development, recognized for creating landmark properties that stand the test of time.",
  
  // Company Values
  values: [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty with all stakeholders.",
      icon: "fas fa-handshake" // Font Awesome icon class
    },
    {
      title: "Quality",
      description: "We are committed to excellence in design, materials, and construction, delivering properties that exceed expectations.",
      icon: "fas fa-award"
    },
    {
      title: "Innovation",
      description: "We continuously seek new ideas and technologies to improve our projects and processes.",
      icon: "fas fa-lightbulb"
    },
    {
      title: "Customer Focus",
      description: "We place our customers at the center of everything we do, striving to understand and fulfill their needs.",
      icon: "fas fa-heart"
    },
    {
      title: "Sustainability",
      description: "We develop properties with a long-term perspective, mindful of environmental impact and community well-being.",
      icon: "fas fa-leaf"
    }
    // Add more values as needed
  ]
};

// Team Members
export const teamMembers = [
  {
    name: "Kapil Chopda", // Updated with actual team member
    position: "Managing Director",
    bio: "Leading Shankeshwar Buildcorp with strong legal expertise in land acquisition and innovative product development.", // 1-2 sentences
    detailedBio: "Kapil Chopda, Managing Director of Shankeshwar Buildcorp, transitioned from a jewellery business background into real estate in 2011 and has built the company from the ground up. A self-taught real estate enthusiast with strong legal expertise, he leads land acquisition, legal, and product development with a sharp, innovative mindset. Known for his energy, youthful drive, and collaborative spirit, Kapil inspires his team and fosters a culture of trust and growth, making him a leader everyone looks up to.", // Full bio from client info
    image: "/images/website/placeholder-team.jpg", // Replace with actual image path
    email: "kapil@shankeshwarbuildcorp.com", // Optional
    linkedin: "https://linkedin.com/in/kapilchopda" // Optional
  },
  {
    name: "Hritik Chopda",
    position: "Director",
    bio: "Leading sales and marketing at Shankeshwar Buildcorp with a customer-first mindset and commitment to transparency.",
    detailedBio: "Hritik Chopda leads the sales and marketing vertical at Shankeshwar Buildcorp with passion and precision. He believes that great products are built through strong people, robust processes, and unwavering transparency. For Hritik, real estate is not just about constructing homes—it's about crafting a seamless and fulfilling journey for every customer. With a keen eye for innovation, a commitment to constant improvement, and a customer-first mindset, he plays a pivotal role in shaping experiences that go beyond expectations.",
    image: "/images/website/placeholder-team.jpg",
    email: "hritik@shankeshwarbuildcorp.com",
    linkedin: "https://linkedin.com/in/hritikchopda"
  }
];

// Company Timeline/Milestones
export const companyMilestones = [
  {
    year: "2011",
    title: "Foundation Year",
    description: "Shankeshwar Buildcorp, previously also known as Shankeshwar Group started construction activities, marking the company's entry into the real estate industry.",
    image: "/images/website/placeholder-milestone.jpg" // Optional
  },
  {
    year: "2012-2015",
    title: "Early Growth Phase",
    description: "Initial residential projects launched and successfully delivered, establishing a reputation for trust and quality. Focused on land acquisition and strong legal groundwork for future scalability.",
    image: "/images/website/placeholder-milestone.jpg" // Optional
  },
  {
    year: "2016-2019",
    title: "Expansion & Brand Building",
    description: "Multiple mid-sized residential projects completed. Strategic investment in people, processes, and project development. Reached 4 lakh+ sq.ft of developed area.",
    image: "/images/website/placeholder-milestone.jpg" // Optional
  },
  {
    year: "2020-2022",
    title: "Innovation & Product Focus",
    description: "Delivered premium living spaces with modern amenities and customer-centric design. Transparency and customer experience became core brand pillars. Total of 9 successful project deliveries by end of this phase.",
    image: "/images/website/placeholder-milestone.jpg" // Optional
  },
  {
    year: "2023-Present",
    title: "Growth Acceleration Phase",
    description: "3 ongoing projects with 3 upcoming projects in advanced planning stages. Cumulative development crosses 8 lakh+ sq.ft with 20 lakh+ sq.ft in pipeline. Focus on continuous innovation, process excellence, and customer-first approach.",
    image: "/images/website/placeholder-milestone.jpg" // Optional
  }
];

// Company Achievements/Statistics
export const companyAchievements = {
  yearsInBusiness: 14, // Updated based on client info (14+ years)
  projectsCompleted: 9, // Updated based on client info
  happyFamilies: 800, // Updated based on client info (800+)
  ongoingProjects: 3, // Updated based on client info
  upcomingProjects: 3, // Added based on client info
  totalAreaDeveloped: "9 Lakh+ sq.ft.", // Updated based on client info
  ongoingAndUpcomingArea: "20 Lakh+ sq.ft.", // Added based on client info
  citiesPresent: 1, // Pune based on address info
  awards: [
    // No awards provided in client data
  ]
};

// Testimonials from customers
export const testimonials = [
  { 
    id: 1, 
    name: "Rajesh Mehta", // Replace with actual name when available
    avatar: "/images/website/avatar-fallback.jpg", // Replace with actual image path
    feedback: "Buying our home with Shankeshwar Buildcorp was one of the best decisions we made. The quality construction, attention to detail, and the team's professionalism throughout the process was incredible. Our apartment exceeded all our expectations.",
    project: "Shankeshwar Villa", // Project name
    rating: 5, // Out of 5
    occupation: "IT Professional", // Optional
    location: "Pune" // Optional
  },
  { 
    id: 2, 
    name: "Priya Sharma", 
    avatar: "/images/website/avatar-fallback.jpg",
    feedback: "What impressed me most was the transparency and integrity in all dealings. From booking to possession, everything went smoothly. The amenities are world-class and the design of our home is both functional and beautiful. Highly recommended!",
    project: "Shankeshwar Villa",
    rating: 5,
    occupation: "Healthcare Professional",
    location: "Ravet"
  },
  { 
    id: 3, 
    name: "Aditya Patil",
    avatar: "/images/website/avatar-fallback.jpg",
    feedback: "As a first-time homebuyer, I was nervous about the process. The Shankeshwar team guided me every step of the way. The promised delivery timeline was met, and they've been responsive even after handover with maintenance support.",
    project: "Shankeshwar Pride",
    rating: 4,
    occupation: "Business Owner",
    location: "Moshi"
  },
  { 
    id: 4, 
    name: "Sunita and Rahul Joshi",
    avatar: "/images/website/avatar-fallback.jpg",
    feedback: "We were looking for a family-friendly home and Shankeshwar Royale perfectly met our needs. The well-planned layout, dedicated amenities, and secure environment give us peace of mind. Our kids love the play areas!",
    project: "Shankeshwar Royale",
    rating: 5,
    occupation: "Teachers",
    location: "Chikhali"
  }
  // Add more testimonials as needed
];

// FAQs for different sections
export const faqs = {
  general: [
    {
      question: "Who is Shankeshwar Buildcorp?",
      answer: "Shankeshwar Buildcorp is a leading real estate developer in Pune, established in 2011. We specialize in residential and commercial developments known for quality construction, innovative design, and customer satisfaction."
    },
    {
      question: "What types of properties do you develop?",
      answer: "We develop a range of properties including residential apartments, commercial spaces, and mixed-use developments. Our residential properties range from affordable 1 BHK apartments to luxury 3 BHK homes."
    },
    {
      question: "Where are your projects located?",
      answer: "Our projects are primarily located in Pune, in prime areas such as Nigdi, Pradhikaran, and surrounding regions. These locations are chosen for their connectivity, infrastructure, and growth potential."
    }
    // Add more general FAQs as needed
  ],
  
  buying: [
    {
      question: "What is the process to purchase a property?",
      answer: "The purchase process begins with selecting your desired property, followed by booking with an initial payment. After verification and documentation, you'll sign a sale agreement and make payments according to the construction stages. We provide support throughout this journey."
    },
    {
      question: "What payment plans do you offer?",
      answer: "We offer flexible payment plans including construction-linked plans, down payment plans with discounts, and in some cases, subvention schemes. Our sales team can help you choose the plan that best suits your financial situation."
    },
    {
      question: "Are your projects RERA registered?",
      answer: "Yes, all our projects are registered under the Real Estate (Regulation and Development) Act (RERA). The registration numbers are available on our website and all promotional materials."
    }
    // Add more buying FAQs as needed
  ],
  
  afterSales: [
    {
      question: "Do you provide after-sales service?",
      answer: "Yes, we have a dedicated customer service team that handles all post-possession requirements. We provide maintenance services, address concerns, and ensure your experience with your new property is seamless."
    },
    {
      question: "What is covered under the warranty?",
      answer: "We provide a structural warranty for 5 years and a 1-year warranty for fixtures and fittings. Specific details are outlined in the sale agreement and handover documents."
    },
    {
      question: "How do I raise a maintenance request?",
      answer: "You can raise maintenance requests through our customer service helpline. All requests are tracked and addressed promptly."
    }
    // Add more after-sales FAQs as needed
  ]
  // Add more FAQ categories as needed
};

// Business Hours
export const businessHours = {
  salesOffice: {
    monday: { open: "9:00 AM", close: "6:00 PM" },
    tuesday: { open: "9:00 AM", close: "6:00 PM" },
    wednesday: { open: "9:00 AM", close: "6:00 PM" },
    thursday: { open: "9:00 AM", close: "6:00 PM" },
    friday: { open: "9:00 AM", close: "6:00 PM" },
    saturday: { open: "10:00 AM", close: "5:00 PM" },
    sunday: { open: "10:00 AM", close: "2:00 PM" } // Use null for closed days, e.g., sunday: null
  },
  siteVisit: {
    monday: { open: "10:00 AM", close: "5:00 PM" },
    tuesday: { open: "10:00 AM", close: "5:00 PM" },
    wednesday: { open: "10:00 AM", close: "5:00 PM" },
    thursday: { open: "10:00 AM", close: "5:00 PM" },
    friday: { open: "10:00 AM", close: "5:00 PM" },
    saturday: { open: "10:00 AM", close: "5:00 PM" },
    sunday: { open: "10:00 AM", close: "5:00 PM" }
  },
  customerSupport: {
    monday: { open: "9:00 AM", close: "7:00 PM" },
    tuesday: { open: "9:00 AM", close: "7:00 PM" },
    wednesday: { open: "9:00 AM", close: "7:00 PM" },
    thursday: { open: "9:00 AM", close: "7:00 PM" },
    friday: { open: "9:00 AM", close: "7:00 PM" },
    saturday: { open: "9:00 AM", close: "5:00 PM" },
    sunday: null // Closed
  }
};

// Partner Companies (if applicable)
export const partners = [
  // No partner information provided in client data
];

// Career Information (if applicable)
export const careerInfo = {
  whyJoinUs: [
    "Opportunity to work on innovative real estate projects",
    "Professional growth and learning environment",
    "Competitive compensation and benefits",
    "Collaborative and inclusive workplace culture",
    "Chance to make a meaningful impact on urban development"
  ],
  benefits: {
    healthInsurance: true,
    retirementPlan: true,
    paidTimeOff: true,
    professionalDevelopment: true,
    flexibleWorking: true,
    performanceBonus: true
  },
  openPositions: [
    // No specific open positions provided in client data
  ]
};

// Legal Information
export const legalInfo = {
  companyRegistration: "Registered under Companies Act",
  reraCompliance: "All projects RERA registered",
  disclaimers: [
    "All images and amenities shown are representative and subject to change",
    "Dimensions and areas are approximate and subject to final measurement",
    "Terms and conditions apply for all promotional offers",
    "Prices mentioned are subject to change without prior notice"
  ],
  privacyPolicyUrl: "/privacy-policy", // Internal link to privacy policy page
  termsOfUseUrl: "/terms-of-use", // Internal link to terms of use page
  refundPolicyUrl: "/refund-policy" // Internal link to refund policy page
};

// Blog/News Section Information (if applicable)
export const blogCategories = [
  "Real Estate Trends",
  "Home Buying Tips",
  "Interior Design",
  "Construction Updates",
  "Company News",
  "Events & Launches"
];

// Property Information
// Note: This is a placeholder - your actual property data is already in the properties.js file
export const samplePropertyData = {
  // Basic details
  name: "Shankeshwar Harmony",
  location: "Nigdi, Pune",
  type: "Residential",
  status: "Upcoming", // or "Under Construction", "Ready to Move", "Completed"
  
  // Pricing
  startingPrice: "₹85 Lakhs onwards",
  configurations: ["2 BHK", "3 BHK"],
  sizes: "950 sq.ft. - 1650 sq.ft.",
  
  // Key features (bullet points)
  keyFeatures: [
    "Premium location in Pradhikaran, Nigdi",
    "Modern architecture with earthquake-resistant design",
    "Spacious and well-ventilated apartments",
    "High-quality fixtures and fittings",
    "24/7 security with CCTV surveillance"
  ],
  
  // Amenities (bullet points with categories)
  amenities: {
    lifestyle: [
      "Clubhouse",
      "Swimming Pool",
      "Gymnasium",
      "Indoor Games Room"
    ],
    outdoor: [
      "Landscaped Gardens",
      "Children's Play Area",
      "Jogging Track",
      "Outdoor Sports Area"
    ],
    convenience: [
      "24/7 Power Backup",
      "Ample Parking Space",
      "EV Charging Stations",
      "Rainwater Harvesting"
    ]
  },
  
  // Specifications (bullet points with categories)
  specifications: {
    structure: [
      "RCC framed structure with earthquake-resistant design",
      "External walls with superior quality bricks",
      "Internal walls with lightweight blocks"
    ],
    flooring: [
      "Vitrified tiles in living, dining and bedrooms",
      "Anti-skid tiles in bathrooms and balconies",
      "Granite countertops in kitchen"
    ],
    doors: [
      "Main door: Engineered wooden door with premium fittings",
      "Internal doors: Flush doors with quality hardware",
      "Windows: UPVC windows with mosquito mesh"
    ]
  },
  
  // Project documents (URLs or descriptions)
  documents: {
    brochure: "/documents/shankeshwar-harmony-brochure.pdf",
    floorPlans: "/documents/shankeshwar-harmony-floorplans.pdf",
    approvals: "RERA Registration No. PXXXXX, Municipal Approval No. XXXXX",
    legalClearance: "Clear title deed, No-Objection Certificates from relevant authorities"
  },
  
  // Location advantages (bullet points)
  locationAdvantages: [
    "Near Gandhi Nursing Home",
    "Easy access to major highways",
    "Proximity to schools, hospitals, and shopping centers",
    "Well-connected by public transportation"
  ]
};

export default {
  companyInfo,
  teamMembers,
  companyMilestones,
  companyAchievements,
  testimonials,
  faqs,
  businessHours,
  partners,
  careerInfo,
  legalInfo,
  blogCategories,
  samplePropertyData
}; 