import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const navigationLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Projects',
    subLinks: [
      { name: 'Ongoing', href: '/projects/ongoing' },
      { name: 'Completed', href: '/projects/completed' },
      { name: 'Upcoming', href: '/projects/upcoming' },
    ],
  },
  { name: 'Investment', href: '/investment' },
  { name: 'Redevelopment', href: '/redevelopment' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const NavLinkItem = ({ item, pathname, onClick, isMobile, showIndicators, animation, openDropdown, setOpenDropdown, closeMobileMenu }) => {
  const isParentActive = item.subLinks && item.subLinks.some(subLink => pathname.startsWith(subLink.href));
  const isActive = item.href && (pathname === item.href || (item.href === '/projects/all' && pathname.startsWith('/projects/')) || isParentActive);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (!isMobile) setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef, isMobile, setOpenDropdown]);

  const handleParentClick = (e) => {
    if (isMobile && item.subLinks) {
      e.preventDefault(); // Prevent navigation for parent on mobile if it has sublinks
      setOpenDropdown(openDropdown === item.name ? null : item.name);
    } else if (item.href) {
      onClick(); // Close mobile menu on regular link click
    }
  };
  
  const handleSublinkClick = () => {
    onClick(); // This is the original onClick from Header to close the mobile menu
    if (isMobile) setOpenDropdown(null); // Also close the mobile dropdown itself
  };

  if (isMobile) {
    return (
      <motion.div
        key={item.name}
        initial={animation ? { opacity: 0, y: -10 } : false}
        animate={animation ? { opacity: 1, y: 0 } : false}
        transition={{ delay: (navigationLinks.findIndex(i => i.name === item.name) || 0) * 0.05 }}
      >
        <div
          className={`block py-2 text-base font-medium transition-colors hover:text-amber-gold cursor-pointer ${
            isActive ? 'text-amber-gold' : 'text-deep-teal'
          }`}
          onClick={handleParentClick}
        >
          {item.href && !item.subLinks ? (
            <Link to={item.href} onClick={onClick} className="block w-full">
              {item.name}
              {showIndicators && isActive && (
                <motion.span className="ml-2 inline-block h-1 w-1 rounded-full bg-amber-gold" layoutId={`mobileNavIndicator-${item.name}`} />
              )}
            </Link>
          ) : (
            <div className="flex justify-between items-center">
              <span>{item.name}</span>
              {item.subLinks && (
                <motion.span animate={{ rotate: openDropdown === item.name ? 180 : 0 }}>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </motion.span>
              )}
            </div>
          )}
        </div>
        <AnimatePresence>
          {isMobile && item.subLinks && openDropdown === item.name && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: '0.5rem' }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="pl-4 space-y-2 overflow-hidden"
            >
              {item.subLinks.map(subLink => (
                <Link
                  key={subLink.name}
                  to={subLink.href}
                  onClick={handleSublinkClick} 
                  className={`block py-1 text-sm font-medium transition-colors hover:text-amber-gold ${
                    pathname.startsWith(subLink.href) ? 'text-amber-gold' : 'text-gray-700'
                  }`}
                >
                  {subLink.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // Desktop
  return (
    <div 
      className="relative"
      onMouseEnter={() => item.subLinks && setOpenDropdown(item.name)}
      onMouseLeave={() => item.subLinks && setOpenDropdown(null)}
      ref={item.subLinks ? dropdownRef : null}
    >
      <Link
        to={item.href || (item.subLinks && item.subLinks[0]?.href) || '#'}
        className="relative text-sm font-medium group py-2"
        onClick={item.subLinks ? (e) => e.preventDefault() : onClick} // Prevent navigation for parent with sublinks, allow for others
      >
        <span className={`${isActive ? 'text-amber-gold' : 'text-deep-teal group-hover:text-amber-gold transition-colors'}`}>
          {item.name}
          {item.subLinks && <span className="ml-1 text-xs">▼</span>}
        </span>
        {showIndicators && isActive && !item.subLinks && (
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-gold" 
            layoutId={`navIndicator-${item.name}`}
          />
        )}
      </Link>
      <AnimatePresence>
        {item.subLinks && openDropdown === item.name && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-20 py-1 ring-1 ring-black ring-opacity-5"
          >
            {item.subLinks.map(subLink => (
              <Link
                key={subLink.name}
                to={subLink.href}
                onClick={onClick} // Close mobile menu if somehow this is clicked (should not happen on desktop)
                className={`block px-4 py-2 text-sm transition-colors ${pathname.startsWith(subLink.href) ? 'text-amber-gold bg-gray-100' : 'text-deep-teal hover:bg-gray-50 hover:text-amber-gold'}`}
              >
                {subLink.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLinks = ({ 
  isMobile = false, 
  onClick = () => {},
  showIndicators = true,
  animation = true,
  className = ''
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [openDropdown, setOpenDropdown] = useState(null);

  const containerClasses = isMobile 
    ? `space-y-1 ${className}` 
    : `flex items-center space-x-6 ${className}`; // Increased space-x for desktop

  return (
    <div className={containerClasses}>
      {navigationLinks.map((item) => (
        <NavLinkItem 
          key={item.name}
          item={item}
          pathname={pathname}
          onClick={onClick} // This is the original onClick from Header to close the mobile menu
          isMobile={isMobile}
          showIndicators={showIndicators}
          animation={animation}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      ))}
    </div>
  );
};

export default NavLinks;
 