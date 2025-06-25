import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { 
  FaBuilding, FaHandshake, FaCheckCircle, FaChartLine, FaRegFileAlt, FaShieldAlt, 
  FaUsers, FaDraftingCompass, FaHardHat, FaKey, FaMoneyBillWave, FaGift, FaSearchLocation 
} from 'react-icons/fa';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const cardHover = {
  hover: { scale: 1.03, boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.1)" }
};

// Benefits Data (Reduced and with GIF placeholders)
const redevelopmentBenefits = [
  {
    icon: <FaGift className="w-12 h-12 mx-auto" />,
    gifUrl: '/images/website/house.gif',
    title: "Bonus Area & Modern Homes",
    description: "Receive additional carpet area and a brand-new, contemporary home with modern amenities.",
    bgColor: "bg-amber-gold/10",
    textColor: "text-amber-gold"
  },
  {
    icon: <FaMoneyBillWave className="w-12 h-12 mx-auto" />,
    gifUrl: '/images/website/zero.gif',
    title: "Zero Upfront Investment",
    description: "Experience complete redevelopment without any financial burden on society members.",
    bgColor: "bg-sage-teal/10",
    textColor: "text-sage-teal"
  },
  {
    icon: <FaChartLine className="w-12 h-12 mx-auto" />,
    gifUrl: '/images/website/investment.gif',
    title: "Increased Property Value",
    description: "Significantly enhance the market value and rental potential of your property.",
    bgColor: "bg-deep-teal/10",
    textColor: "text-deep-teal"
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 mx-auto" />,
    gifUrl: '/images/website/safety.gif',
    title: "Enhanced Safety & Security",
    description: "Benefit from earthquake-resistant structures and modern safety & security systems.",
    bgColor: "bg-red-500/10",
    textColor: "text-red-500"
  }
];

// Redevelopment Process Data
const processSteps = [
  {
    id: 1,
    icon: <FaUsers className="text-4xl" />,
    title: "Initial Consultation",
    description: "Understanding society's needs, concerns, and conducting a preliminary site assessment."
  },
  {
    id: 2,
    icon: <FaSearchLocation className="text-4xl" />,
    title: "Feasibility & Proposal",
    description: "Detailed technical survey, financial viability study, and submission of a comprehensive proposal."
  },
  {
    id: 3,
    icon: <FaHandshake className="text-4xl" />,
    title: "Agreement & Documentation",
    description: "Transparent finalization of terms, legal agreements, and member consensus."
  },
  {
    id: 4,
    icon: <FaDraftingCompass className="text-4xl" />,
    title: "Design & Approvals",
    description: "Architectural design, planning, and obtaining all necessary statutory approvals."
  },
  {
    id: 5,
    icon: <FaHardHat className="text-4xl" />,
    title: "Construction & Quality Control",
    description: "Executing construction with high-quality standards and regular progress monitoring."
  },
  {
    id: 6,
    icon: <FaKey className="text-4xl" />,
    title: "Possession & Handover",
    description: "Timely completion, obtaining Occupation Certificate, and smooth handover of new homes."
  }
];

// Standard Documents Data
const standardDocumentsList = [
  "Society Registration Certificate", "Approved Building Plan", "Conveyance Deed / Lease Deed / Sale Deed",
  "Copy of Resolution by society members towards redevelopment", "Documents / Deeds / Agreements etc. (As per the society’s plot)",
  "List of members with their respective carpet areas", "Property Card", "D. P. Remark", "Extract of 7/12",
  "Search Report and Title Certificate", "Index II", "N. A. Order", "Commencement Certificate",
  "Occupation Certificate", "Completion Certificate", "Demarcation Old", "Share Certificate (in case of Society)",
  "ULC NOC (If required)", "Parent NOC (If required)"
];

const RedevelopmentPage = () => {
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    document.title = "Redevelopment Solutions | Shankeshwar Buildcorp";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your aging society with Shankeshwar Buildcorp\'s expert redevelopment services. Get bonus area, modern homes, and increased property value with zero upfront cost.');
    }
    return () => {
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Shankeshwar Buildcorp - Premier real estate developer in Pune offering premium residential and commercial properties.');
      }
    };
  }, []);

  return (
    <div className="bg-cream min-h-screen antialiased">
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-br from-deep-teal via-sage-teal to-deep-teal py-20 md:py-28 text-white relative overflow-hidden"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-50"> {/* Adjusted opacity for better visibility */}
          <img 
            src="/images/website/redevelopment/re-1.jpg" 
            alt="Modern redevelopment project background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal via-deep-teal/50 to-transparent"></div> {/* Optional: Add a gradient overlay for better text readability */}
        </div>
        <Container className="relative z-10">
          <motion.div className="max-w-3xl mx-auto text-center" variants={fadeIn} initial="hidden" animate="visible">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Crafting <span className="text-amber-gold">New Beginnings</span>, Together.
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              Elevate your lifestyle and property value with Shankeshwar's trusted and transparent redevelopment solutions.
            </p>
            <Button href="#process-section" variant="accent" size="lg" className="scroll-smooth">
              Explore Our Process <FiArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </Container>
      </motion.section>

      {/* Introduction Section */}
      <motion.section className="py-16 md:py-24 bg-white" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
              What is <span className="text-amber-gold">Redevelopment</span>?
            </h2>
            <p className="text-lg text-deep-teal/80 leading-relaxed mb-4">
              Redevelopment transforms aging structures into modern, safer, and more valuable assets. It's a collaborative journey to upgrade living standards, unlock property potential, and revitalize communities, typically at no direct cost to existing members.
            </p>
            <p className="text-lg text-deep-teal/80 leading-relaxed">
              We partner with housing societies, ensuring a seamless process from conception to completion, delivering quality homes and lasting value.
            </p>
          </div>
        </Container>
      </motion.section>

      {/* Benefits Section - Creative Showcase */}
      <motion.section id="benefits-section" className="py-16 md:py-24 bg-cream">
        <Container>
          <motion.div className="text-center mb-12 md:mb-16" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-4">
              The <span className="text-amber-gold">Shankeshwar</span> Advantage
            </h2>
            <p className="text-lg text-deep-teal/70 max-w-2xl mx-auto">
              Discover the tangible benefits of partnering with us for your society's redevelopment.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {redevelopmentBenefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col text-center ${benefit.bgColor} relative overflow-hidden group`}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                {benefit.gifUrl && (
                  <div className="mb-5 w-full h-56 rounded-md overflow-hidden bg-gray-200">
                    <img 
                      src={benefit.gifUrl} 
                      alt={`${benefit.title} GIF`} 
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => { e.target.style.display = 'none'; /* Hide if GIF fails to load */ }}
                    />
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-3 ${benefit.textColor.replace('text-', 'text-deep-teal')}`}>{benefit.title}</h3>
                <p className={`text-sm leading-relaxed flex-grow ${benefit.textColor.replace('text-', 'text-deep-teal/80')}`}>{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </motion.section>

      {/* Process Section - Horizontal 3D Slider */}
      <motion.section id="process-section" className="py-16 md:py-24 bg-deep-teal text-white overflow-hidden">
        <Container>
          <motion.div className="text-center mb-12 md:mb-16" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Redevelopment <span className="text-amber-gold">Journey</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
A transparent and structured approach, step by step, towards your new beginning.
            </p>
          </motion.div>

          <div className="relative">
            <Swiper
              ref={swiperRef}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={false}
              initialSlide={0}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true, el: '.swiper-pagination-journey' }}
              navigation={{
                nextEl: '.swiper-button-next-journey',
                prevEl: '.swiper-button-prev-journey',
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="w-full h-full redevelopment-process-slider pb-16"
              onSlideChange={(swiper) => setActiveProcessIndex(swiper.realIndex)}
            >
              {processSteps.map((step) => (
                <SwiperSlide key={step.id} className="!w-[300px] sm:!w-[350px] md:!w-[400px]">
                  <motion.div 
                    className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-xl h-[320px] flex flex-col justify-between items-center text-center transform transition-all duration-300 hover:bg-white/20"
                    variants={cardHover}
                  >
                    <div className="text-amber-gold mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">{step.description}</p>
                    <div className="text-amber-gold font-bold text-2xl">{`0${step.id}`}</div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-journey absolute top-1/2 left-0 md:-left-8 transform -translate-y-1/2 z-10 p-3 bg-amber-gold/80 hover:bg-amber-gold text-deep-teal rounded-full cursor-pointer transition-all">
              <FiChevronLeft size={24} />
            </div>
            <div className="swiper-button-next-journey absolute top-1/2 right-0 md:-right-8 transform -translate-y-1/2 z-10 p-3 bg-amber-gold/80 hover:bg-amber-gold text-deep-teal rounded-full cursor-pointer transition-all">
              <FiChevronRight size={24} />
            </div>

            {/* Custom Pagination / Progress Bar */}
            <div className="swiper-pagination-journey text-center mt-8 flex justify-center items-center space-x-2">
              {processSteps.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => swiperRef.current?.swiper.slideToLoop(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeProcessIndex === index ? 'bg-amber-gold scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                  aria-label={`Go to step ${index + 1}`}
                ></button>
              ))}
            </div>
             <div className="w-full bg-white/20 rounded-full h-2.5 mt-4 overflow-hidden">
              <motion.div 
                className="bg-amber-gold h-2.5 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeProcessIndex + 1) / processSteps.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </Container>
      </motion.section>

      {/* Standard Documents Section */}
      <motion.section className="py-16 md:py-24 bg-white" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Container>
          <motion.div className="text-center mb-12 md:mb-16" variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-4">
              Essential <span className="text-amber-gold">Documentation</span>
            </h2>
            <p className="text-lg text-deep-teal/70 max-w-2xl mx-auto">
              A checklist of standard documents required for a smooth redevelopment process.
            </p>
          </motion.div>
          <motion.div className="max-w-4xl mx-auto bg-cream p-6 md:p-8 rounded-xl shadow-lg" variants={fadeIn} transition={{ delay: 0.2 }}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-deep-teal/80">
              {standardDocumentsList.map((doc, index) => (
                <li key={index} className="text-sm leading-relaxed flex items-start py-1">
                  <FaRegFileAlt className="text-amber-gold mr-2.5 mt-0.5 flex-shrink-0" /> 
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </motion.section>

      {/* Why Choose Shankeshwar Section */}
      <motion.section className="py-16 md:py-24 bg-cream">
        <Container>
          <motion.div className="text-center mb-12 md:mb-16" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-4">
              Why Partner with <span className="text-amber-gold">Shankeshwar</span>?
            </h2>
            <p className="text-lg text-deep-teal/70 max-w-2xl mx-auto">
              Our commitment to excellence, transparency, and member satisfaction sets us apart.
            </p>
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: <FaHandshake className="text-5xl text-amber-gold mb-4" />, title: "Unwavering Transparency", description: "Open communication and clear documentation throughout the entire redevelopment lifecycle." },
              { icon: <FaCheckCircle className="text-5xl text-amber-gold mb-4" />, title: "Commitment to Quality", description: "Utilizing superior materials and modern construction techniques for durable and aesthetic structures." },
              { icon: <FaBuilding className="text-5xl text-amber-gold mb-4" />, title: "Member-Centric Approach", description: "Prioritizing the needs and aspirations of society members, ensuring a collaborative and satisfactory outcome." }
            ].map((reason, index) => (
              <motion.div key={index} className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1" variants={fadeIn} whileHover={cardHover.hover}>
                {reason.icon}
                <h3 className="text-xl font-bold text-deep-teal mb-3">{reason.title}</h3>
                <p className="text-deep-teal/70 text-sm leading-relaxed flex-grow">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </motion.section>

      {/* FAQs Section */}
      <motion.section className="py-16 md:py-24 bg-white" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Container>
          <motion.div className="max-w-3xl mx-auto" variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal text-center mb-12">
              Frequently Asked <span className="text-amber-gold">Questions</span>
            </h2>
            <div className="space-y-4">
              {[
                { q: "What is the typical timeline for a redevelopment project?", a: "The timeline varies based on project size and complexity, but typically ranges from 24-36 months from final agreement to handover. We provide a detailed project schedule upfront." },
                { q: "Is there any cost to be borne by society members?", a: "No, our redevelopment model typically involves zero upfront investment from society members. Costs are covered through the utilization of additional development potential." },
                { q: "What happens to existing members during construction?", a: "We provide rent compensation for temporary accommodation during the construction period, as mutually agreed in the redevelopment agreement." },
                { q: "How much additional area can we expect?", a: "The additional area (fungible FSI benefits) depends on prevailing government norms and project specifics. We aim to maximize benefits for society members, typically offering a significant increase over existing carpet areas." }
              ].map((faq, index) => (
                <motion.details key={index} className="bg-cream p-5 rounded-lg shadow-sm group" variants={fadeIn}>
                  <summary className="font-semibold text-deep-teal cursor-pointer list-none flex justify-between items-center group-open:text-amber-gold">
                    {faq.q}
                    <FiChevronRight className="transform group-open:rotate-90 transition-transform duration-200" />
                  </summary>
                  <p className="text-deep-teal/80 text-sm leading-relaxed mt-3 pt-3 border-t border-deep-teal/10">{faq.a}</p>
                </motion.details>
              ))}
            </div>
          </motion.div>
        </Container>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-16 md:py-20 bg-gradient-to-tr from-deep-teal to-sage-teal text-white" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to <span className="text-amber-gold">Transform</span> Your Society?
              </h2>
              <p className="text-xl text-white/85 mb-10 leading-relaxed">
                Take the first step towards a modern, upgraded living space. Our redevelopment experts are ready to guide you.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="accent" as={Link} to="/contact" size="lg" animation="bounce">
                  Request a Proposal
                </Button>
                <Button variant="glass" href="tel:+919604304919" size="lg" className="border-white/30">
                  Call: +91 96043 04919
                </Button>
              </div>
              <p className="mt-8 text-white/70 text-sm">
                No obligation consultation • Transparent process • Expert guidance
              </p>
            </motion.div>
          </div>
        </Container>
      </motion.section>
    </div>
  );
};

export default RedevelopmentPage;