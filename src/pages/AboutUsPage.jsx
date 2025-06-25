import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
// Import team and milestone data
import { teamMembers, companyMilestones } from '../data/clientData.js';

const AboutUsPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Use imported team members data
  // Note: The teamMembers array is now imported from clientData.js

  // Use imported milestone data
  // Note: The milestones array is now imported from clientData.js

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-deep-teal py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="100%" height="100%" fill="none"/>
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <Container>
          <motion.div 
            className="max-w-3xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
              ABOUT US
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Building <span className="text-amber-gold">Tomorrow's</span> Landmarks Today
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              At Shankeshwar Buildcorp, we're more than developers—we're visionaries crafting spaces where memories are made, businesses thrive, and communities flourish.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="accent" 
                href="#our-team" 
                animation="bounce"
              >
                Meet Our Team
              </Button>
              
              <Button 
                variant="glass" 
                href="/contact"
                className="border-white/30 text-white"
              >
                Connect With Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <Container>
          <motion.div 
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Image column */}
            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="aspect-[4/3] relative rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="/images/website/bg-4.jpg" 
                  alt="Shankeshwar BuildCorp Building" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/40 to-transparent"></div>
              </div>

            </motion.div>
            
            {/* Text content column */}
            <div>
              <motion.div variants={fadeIn}>
                <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
                  OUR STORY
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
                  A Legacy of <span className="text-amber-gold">Excellence</span> in Real Estate
                </h2>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <p className="text-lg text-deep-teal/80 mb-6 leading-relaxed">
                  Founded in 2011, Shankeshwar Buildcorp has grown from a small real estate venture to one of the most trusted developers in Pune. Our journey has been defined by an unwavering commitment to quality, innovation, and customer satisfaction.
                </p>
                <p className="text-lg text-deep-teal/80 mb-8 leading-relaxed">
                  Over the years, we have successfully delivered residential, commercial, and mixed-use projects that stand as testaments to our dedication to excellence. Each property we develop is crafted with meticulous attention to detail, using the finest materials and cutting-edge construction techniques.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 bg-sage-teal/5">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
              OUR PURPOSE
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
              Mission & <span className="text-amber-gold">Vision</span>
            </h2>
            <p className="text-lg text-deep-teal/80 leading-relaxed">
              Guided by strong values and a clear vision, we strive to make a positive impact on the communities we serve.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-deep-teal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-deep-teal/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-deep-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-deep-teal mb-4">Our Mission</h3>
              <p className="text-deep-teal/80 mb-4 leading-relaxed">
                To create exceptional living and working spaces that enhance quality of life, delivered with integrity, innovation, and excellence.
              </p>
              <p className="text-deep-teal/80 leading-relaxed">
                We aim to exceed customer expectations while maintaining the highest standards of sustainability and social responsibility in every project we undertake.
              </p>
            </motion.div>
            
            {/* Vision Card */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-amber-gold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-amber-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-deep-teal mb-4">Our Vision</h3>
              <p className="text-deep-teal/80 mb-4 leading-relaxed">
                To be the most trusted name in real estate development, recognized for creating landmark properties that stand the test of time.
              </p>
              <p className="text-deep-teal/80 leading-relaxed">
                We envision a future where our developments are known for their timeless design, superior quality, and positive contribution to urban landscapes.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section id="our-team" className="py-16 md:py-24">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
              OUR TEAM
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
              Meet The <span className="text-amber-gold">Experts</span> Behind Our Success
            </h2>
            <p className="text-lg text-deep-teal/80 leading-relaxed">
              Our team of dedicated professionals brings together experience in real estate development, architecture, construction, and customer service.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 overflow-hidden relative">
                    <div className="aspect-square md:h-full relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/70 via-deep-teal/20 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Decorative accent */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-gold transform origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                    
                    {/* Name overlay for mobile */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-deep-teal/90 to-transparent md:hidden">
                      <h3 className="text-xl font-display font-bold text-white">{member.name}</h3>
                      <p className="text-amber-gold font-medium text-sm">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-6 flex flex-col justify-between relative">
                    {/* Name and position (hidden on mobile, shown on desktop) */}
                    <div className="hidden md:block mb-4">
                      <h3 className="text-xl font-display font-bold text-deep-teal mb-1">{member.name}</h3>
                      <div className="flex items-center">
                        <div className="w-10 h-0.5 bg-amber-gold mr-3"></div>
                        <p className="text-amber-gold font-medium text-sm">{member.position}</p>
                      </div>
                    </div>
                    
                    {/* Bio */}
                    <div className="mt-4 md:mt-0">
                      <p className="text-deep-teal/70 text-sm md:text-base leading-relaxed">{member.detailedBio}</p>
                    </div>
                    
                    {/* Social links if available */}
                    {member.socialLinks && (
                      <div className="flex space-x-3 mt-4 pt-4 border-t border-gray-100">
                        {member.socialLinks.linkedin && (
                          <a 
                            href={member.socialLinks.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-deep-teal/60 hover:text-amber-gold transition-colors"
                            aria-label={`${member.name}'s LinkedIn profile`}
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        )}
                        {member.socialLinks.email && (
                          <a 
                            href={`mailto:${member.socialLinks.email}`}
                            className="text-deep-teal/60 hover:text-amber-gold transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <i className="far fa-envelope"></i>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-deep-teal/80 mb-6">
              Our team is passionate about creating exceptional spaces and delivering unparalleled customer experiences.
            </p>
            <Button 
              variant="outline" 
              href="/contact"
              animation="bounce"
            >
              Join Our Team
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Company Timeline */}
      <section className="py-16 md:py-24 bg-sage-teal/5">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
              OUR JOURNEY
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
              The <span className="text-amber-gold">Milestones</span> That Shaped Us
            </h2>
            <p className="text-lg text-deep-teal/80 leading-relaxed">
              From humble beginnings to becoming a leading name in real estate, our journey has been marked by continuous growth and achievement.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-gold/30 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {companyMilestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`md:w-1/2 p-4 md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-amber-gold font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-deep-teal font-bold text-xl mb-3">{milestone.title}</h3>
                      <p className="text-deep-teal/70">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex justify-center items-center relative md:w-0">
                    <div className="w-10 h-10 rounded-full bg-amber-gold flex items-center justify-center z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div 
            className="bg-deep-teal rounded-2xl py-12 px-8 md:px-12 text-center md:text-left relative overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="100%" height="100%" fill="none"/>
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-cta)" />
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 relative z-10">
              <div className="md:max-w-xl">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Let's Build Your Dream Together</h3>
                <p className="text-white/80">Whether you're looking for your dream home or a smart investment opportunity, our team is ready to guide you every step of the way.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Button
                  variant="accent"
                  size="lg"
                  href="/contact"
                  animation="bounce"
                >
                  Contact Us Today
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  href="/projects"
                  className="border-white/30 text-white"
                >
                  Explore Projects
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default AboutUsPage; 