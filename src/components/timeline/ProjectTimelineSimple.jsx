import React from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../ui/Container';

// Enhanced company timeline data
const companyTimelineEvents = [
  { 
    id: 'founding',
    year: '2008', 
    title: 'Company Founded', 
    description: 'Shankeshwar BuildCorp began its journey with a vision to create exceptional living spaces that blend luxury, comfort and sustainability.',
    icon: 'fas fa-flag',
    color: 'amber-gold'
  },
  { 
    id: 'first-project',
    year: '2010', 
    title: 'First Project Launched', 
    description: 'Successfully launched our first residential project "Shankeshwar Heights", setting new standards in quality construction and timely delivery.',
    icon: 'fas fa-building',
    color: 'deep-teal'
  },
  { 
    id: 'expansion',
    year: '2013', 
    title: 'Expansion to New Markets', 
    description: 'Expanded our presence across Pune region, with projects in Wakad, Ravet and Moshi, catering to diverse housing needs.',
    icon: 'fas fa-chart-line',
    color: 'amber-gold'
  },
  { 
    id: 'award',
    year: '2016', 
    title: 'Excellence in Real Estate Award', 
    description: 'Recognized for our commitment to quality, innovation and customer satisfaction with the prestigious Excellence in Real Estate award.',
    icon: 'fas fa-award',
    color: 'deep-teal'
  },
  { 
    id: 'landmark',
    year: '2019', 
    title: 'Landmark 1000 Happy Families', 
    description: 'Celebrated the milestone of providing dream homes to over 1000 happy families across our residential projects.',
    icon: 'fas fa-home',
    color: 'amber-gold'
  },
  { 
    id: 'green',
    year: '2022', 
    title: 'Green Building Certification', 
    description: 'Pioneered sustainable development in the region with our first IGBC Green certified residential complex.',
    icon: 'fas fa-leaf',
    color: 'deep-teal'
  },
];

const ProjectTimelineSimple = () => {
  return (
    <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sage-teal/10 to-transparent"></div>
      <div className="absolute -right-16 top-20 w-32 h-32 rounded-full bg-amber-gold/10"></div>
      <div className="absolute -left-8 top-1/4 w-24 h-24 rounded-full bg-deep-teal/10"></div>
      
      <Container>
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-deep-teal mb-4">
            Our <span className="text-amber-gold">Journey</span> Through Time
          </h2>
          <p className="text-lg text-deep-teal/80 max-w-2xl mx-auto">
            From our humble beginnings to becoming one of the region's most trusted developers - explore the key milestones that shaped Shankeshwar BuildCorp.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Center timeline line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-deep-teal via-amber-gold to-sage-teal transform -translate-x-1/2 rounded-full"></div>
          
          {/* Left timeline line for mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-deep-teal via-amber-gold to-sage-teal"></div>
          
          {companyTimelineEvents.map((event, index) => {
            // Use useInView for each timeline event
            const itemRef = React.useRef(null);
            const isInView = useInView(itemRef, { once: true, amount: 0.2 });
            
            return (
              <motion.div 
                key={event.id} 
                ref={itemRef}
                className={`mb-16 md:mb-24 flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {/* Left content - visible only on desktop and alternate positioning */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                  {index % 2 === 0 && (
                    <TimelineContent event={event} />
                  )}
                </div>
                
                {/* Center point and year */}
                <div className="relative flex items-center md:justify-center z-10 pl-12 md:pl-0 md:w-auto">
                  {/* Mobile timeline point */}
                  <div className="md:hidden absolute left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-4 border-white bg-amber-gold shadow-lg"></div>
                  
                  {/* Desktop timeline point with icon */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-lg border-4 border-amber-gold items-center justify-center">
                    <i className={`${event.icon} text-${event.color} text-xl`}></i>
                  </div>
                  
                  {/* Year */}
                  <motion.div 
                    className={`flex md:absolute ${index % 2 === 0 ? 'left-full md:ml-6' : 'md:-left-4 md:-ml-12'} md:top-1/2 md:transform md:-translate-y-1/2 px-4 py-1.5 md:py-2 rounded-full bg-${event.color} text-white font-bold`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{event.year}</span>
                  </motion.div>
                </div>
                
                {/* Right content - visible on mobile and desktop (alternating) */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? '' : 'md:pl-12'}`}>
                  {index % 2 !== 0 ? (
                    <TimelineContent event={event} />
                  ) : (
                    <div className="md:hidden">
                      <TimelineContent event={event} />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Current year marker */}
        <div className="relative flex justify-center items-center my-8">
          <motion.div 
            className="bg-deep-teal text-white font-bold px-6 py-2 rounded-full flex items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="animate-pulse mr-2 h-3 w-3 rounded-full bg-amber-gold inline-block"></span>
            Present Day
          </motion.div>
          
          <motion.p 
            className="absolute -bottom-8 text-center text-deep-teal/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            And our journey of excellence continues...
          </motion.p>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="/about"
            className="inline-flex items-center text-amber-gold hover:text-deep-teal transition-colors font-semibold"
          >
            Read Our Full Story
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

// Helper component for timeline content to avoid repetition
const TimelineContent = ({ event }) => (
  <motion.div 
    className={`p-6 md:p-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-${event.color}`}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <h3 className="text-xl md:text-2xl font-display font-bold text-deep-teal mb-3">
      {event.title}
    </h3>
    <p className="text-deep-teal/80 mb-4">
      {event.description}
    </p>
    <div className="flex items-center text-sm text-deep-teal/60">
      <i className={`${event.icon} mr-2 text-${event.color}`}></i>
      <span className="font-medium">{event.title}</span>
    </div>
  </motion.div>
);

export default ProjectTimelineSimple; 