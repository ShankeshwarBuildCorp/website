import React from 'react';
import { 
  FaChild, 
  FaCouch, 
  FaDoorOpen, 
  FaSun, 
  FaChevronUp, 
  FaVideo, 
  FaFire, 
  FaDumbbell, 
  FaCar, 
  FaChair, 
  FaBuilding,
  FaLock, 
  FaRoad, 
  FaShieldAlt, 
  FaGlassMartini,
  FaSwimmingPool,
  FaWifi,
  FaTree,
  FaStore,
  FaHospital,
  FaUtensils,
  FaMountain,
  FaSchool,
  FaUniversity,
  FaShoppingBag,
  FaBus,
  FaTrain,
  FaBoxOpen,
  FaToilet,
  FaBath,
  FaBed,
  FaThermometerHalf,
  FaWater,
  FaBolt,
  FaPaintRoller,
  FaWrench,
  FaLightbulb,
  FaBuilding as FaApartment,
  FaArchway,
  FaStar,
  FaUsers,
  FaGamepad,
  FaRunning,
  FaBusAlt,
  FaBicycle,
  FaFan,
  FaSpa,
  FaCoffee,
  FaVolleyballBall,
  FaBasketballBall,
  FaFootballBall,
  FaHouseDamage,
  FaCloudRain,
  FaSuitcase,
  FaTheaterMasks,
  FaPrayingHands
} from 'react-icons/fa';

import {
  MdOutlineSecurity, MdLocalLaundryService, MdCleaningServices,
  MdFireplace, MdOutlineReduceCapacity, MdOutlineBalcony,
  MdElevator, MdPool, MdFitnessCenter, MdPark, MdMeetingRoom,
  MdOutlineLocalGroceryStore, MdOutlineSportsHandball, MdNature,
  MdSportsKabaddi, MdSportsMartialArts
} from 'react-icons/md';

import {
  BiCctv, BiWifi, BiBook, BiWind, BiDumbbell
} from 'react-icons/bi';

import { 
  GiGate, GiMoneyStack, GiPartyPopper, GiGolfFlag, GiGreenhouse, 
  GiTreehouse, GiTempleDoor, GiWaterfall, GiMeditation, GiLotus
} from 'react-icons/gi';

import { TbToolsKitchen2, TbYoga } from 'react-icons/tb';
import { RiParkingBoxLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { CgGym } from 'react-icons/cg';

// Define the icon size
const iconSize = 24;
const iconColor = "#0C5E3C"; // deep-teal color

/**
 * Function to get amenity icon by name
 * @param {string} amenityName - Name of the amenity
 * @returns {JSX.Element} - Icon component
 */
export const getAmenityIcon = (amenityName) => {
  if (!amenityName) return <FaStar size={iconSize} color={iconColor} />;
  
  const lowercaseName = typeof amenityName === 'string' ? amenityName.toLowerCase() : '';
  
  // Map amenity names to their corresponding icon components
  // Using includes for partial matches
  
  // Swimming & Water
  if (lowercaseName.includes('swimming') || lowercaseName.includes('pool')) {
    return <MdPool size={iconSize} color={iconColor} />;
  }
  
  // Club & Community 
  if (lowercaseName.includes('club') || lowercaseName.includes('clubhouse') || lowercaseName.includes('community')) {
    return <FaUsers size={iconSize} color={iconColor} />;
  }
  
  // Fitness & Gym
  if (lowercaseName.includes('gym') || lowercaseName.includes('fitness')) {
    return <MdFitnessCenter size={iconSize} color={iconColor} />;
  }
  
  // Gardens & Green Spaces
  if (lowercaseName.includes('garden') || lowercaseName.includes('landscape') || lowercaseName.includes('green')) {
    return <MdPark size={iconSize} color={iconColor} />;
  }
  
  // Children & Kids
  if (lowercaseName.includes('child') || lowercaseName.includes('kid') || lowercaseName.includes('play area')) {
    return <FaChild size={iconSize} color={iconColor} />;
  }
  
  // Security
  if (lowercaseName.includes('security') || lowercaseName.includes('cctv') || lowercaseName.includes('surveillance')) {
    return <MdOutlineSecurity size={iconSize} color={iconColor} />;
  }
  
  // Indoor Games
  if (lowercaseName.includes('indoor game')) {
    return <FaGamepad size={iconSize} color={iconColor} />;
  }
  
  // Jogging & Walking
  if (lowercaseName.includes('jogging') || lowercaseName.includes('walking') || lowercaseName.includes('track')) {
    return <FaRunning size={iconSize} color={iconColor} />;
  }
  
  // Parking
  if (lowercaseName.includes('parking')) {
    return <RiParkingBoxLine size={iconSize} color={iconColor} />;
  }
  
  // Power & Electricity
  if (lowercaseName.includes('power') || lowercaseName.includes('backup') || lowercaseName.includes('electricity')) {
    return <FaBolt size={iconSize} color={iconColor} />;
  }
  
  // Internet & Wifi
  if (lowercaseName.includes('wifi') || lowercaseName.includes('internet')) {
    return <BiWifi size={iconSize} color={iconColor} />;
  }
  
  // Transport
  if (lowercaseName.includes('transport') || lowercaseName.includes('bus') || lowercaseName.includes('shuttle')) {
    return <FaBusAlt size={iconSize} color={iconColor} />;
  }
  
  // Dining & Restaurant
  if (lowercaseName.includes('dining') || lowercaseName.includes('restaurant') || lowercaseName.includes('food')) {
    return <FaUtensils size={iconSize} color={iconColor} />;
  }
  
  // Library
  if (lowercaseName.includes('library') || lowercaseName.includes('reading')) {
    return <BiBook size={iconSize} color={iconColor} />;
  }
  
  // Outdoor Sports
  if (lowercaseName.includes('outdoor sport') || lowercaseName.includes('sport')) {
    return <MdOutlineSportsHandball size={iconSize} color={iconColor} />;
  }
  
  // Bicycle
  if (lowercaseName.includes('bicycle') || lowercaseName.includes('cycling') || lowercaseName.includes('bike')) {
    return <FaBicycle size={iconSize} color={iconColor} />;
  }
  
  // Water Features
  if (lowercaseName.includes('water') || lowercaseName.includes('fountain')) {
    return <FaWater size={iconSize} color={iconColor} />;
  }
  
  // Air Conditioned
  if (lowercaseName.includes('air conditioning') || lowercaseName.includes('air conditioned') || lowercaseName.includes('ac')) {
    return <FaFan size={iconSize} color={iconColor} />;
  }
  
  // Spa
  if (lowercaseName.includes('spa') || lowercaseName.includes('sauna') || lowercaseName.includes('steam')) {
    return <FaSpa size={iconSize} color={iconColor} />;
  }
  
  // Gates & Entrance
  if (lowercaseName.includes('gate') || lowercaseName.includes('entrance')) {
    return <GiGate size={iconSize} color={iconColor} />;
  }
  
  // Doors & Windows
  if (lowercaseName.includes('door') || lowercaseName.includes('window')) {
    return <GiTempleDoor size={iconSize} color={iconColor} />;
  }
  
  // Bathroom
  if (lowercaseName.includes('bathroom') || lowercaseName.includes('bath')) {
    return <FaToilet size={iconSize} color={iconColor} />;
  }
  
  // Kitchen
  if (lowercaseName.includes('kitchen')) {
    return <TbToolsKitchen2 size={iconSize} color={iconColor} />;
  }
  
  // Cafe
  if (lowercaseName.includes('cafe') || lowercaseName.includes('coffee')) {
    return <FaCoffee size={iconSize} color={iconColor} />;
  }
  
  // Sports
  if (lowercaseName.includes('volleyball')) {
    return <FaVolleyballBall size={iconSize} color={iconColor} />;
  }
  
  if (lowercaseName.includes('basketball')) {
    return <FaBasketballBall size={iconSize} color={iconColor} />;
  }
  
  if (lowercaseName.includes('golf')) {
    return <GiGolfFlag size={iconSize} color={iconColor} />;
  }
  
  if (lowercaseName.includes('football') || lowercaseName.includes('soccer')) {
    return <FaFootballBall size={iconSize} color={iconColor} />;
  }
  
  // Laundry
  if (lowercaseName.includes('laundry') || lowercaseName.includes('washing')) {
    return <MdLocalLaundryService size={iconSize} color={iconColor} />;
  }
  
  // Cleaning
  if (lowercaseName.includes('cleaning') || lowercaseName.includes('housekeeping')) {
    return <MdCleaningServices size={iconSize} color={iconColor} />;
  }
  
  // Vastu & Environment
  if (lowercaseName.includes('vastu')) {
    return <AiOutlineHome size={iconSize} color={iconColor} />;
  }
  
  if (lowercaseName.includes('earthquake') || lowercaseName.includes('resistant')) {
    return <FaHouseDamage size={iconSize} color={iconColor} />;
  }
  
  if (lowercaseName.includes('rainwater') || lowercaseName.includes('rain water')) {
    return <FaCloudRain size={iconSize} color={iconColor} />;
  }
  
  // Eco-friendly & Green
  if (lowercaseName.includes('eco') || lowercaseName.includes('green') || lowercaseName.includes('environment')) {
    return <MdNature size={iconSize} color={iconColor} />;
  }
  
  if (lowercaseName.includes('solar')) {
    return <GiGreenhouse size={iconSize} color={iconColor} />;
  }
  
  // Smart Home
  if (lowercaseName.includes('smart home') || lowercaseName.includes('smart')) {
    return <FaBolt size={iconSize} color={iconColor} />;
  }
  
  // Elevator
  if (lowercaseName.includes('elevator') || lowercaseName.includes('lift')) {
    return <MdElevator size={iconSize} color={iconColor} />;
  }
  
  // Balcony
  if (lowercaseName.includes('balcony') || lowercaseName.includes('terrace')) {
    return <MdOutlineBalcony size={iconSize} color={iconColor} />;
  }
  
  // Concierge
  if (lowercaseName.includes('concierge') || lowercaseName.includes('reception')) {
    return <FaSuitcase size={iconSize} color={iconColor} />;
  }
  
  // Storage
  if (lowercaseName.includes('storage')) {
    return <FaBoxOpen size={iconSize} color={iconColor} />;
  }
  
  // Party
  if (lowercaseName.includes('party') || lowercaseName.includes('celebration')) {
    return <GiPartyPopper size={iconSize} color={iconColor} />;
  }
  
  // Theater
  if (lowercaseName.includes('theater') || lowercaseName.includes('theatre') || lowercaseName.includes('cinema')) {
    return <FaTheaterMasks size={iconSize} color={iconColor} />;
  }
  
  // Multipurpose hall
  if (lowercaseName.includes('multipurpose') || lowercaseName.includes('hall')) {
    return <MdMeetingRoom size={iconSize} color={iconColor} />;
  }
  
  // Yoga
  if (lowercaseName.includes('yoga') || lowercaseName.includes('meditation')) {
    // Use multiple icon options to ensure availability
    return <TbYoga size={iconSize} color={iconColor} />;
  }
  
  // Co-working & Library
  if (lowercaseName.includes('co-working') || lowercaseName.includes('library') || lowercaseName.includes('book')) {
    return <BiBook size={iconSize} color={iconColor} />;
  }

  // Calisthenics & Exercise
  if (lowercaseName.includes('calisthenics')) {
    return <BiDumbbell size={iconSize} color={iconColor} />;
  }

  // Senior Citizen Area
  if (lowercaseName.includes('senior citizen')) {
    return <FaChair size={iconSize} color={iconColor} />;
  }

  // Gazebo
  if (lowercaseName.includes('gazebo')) {
    return <FaArchway size={iconSize} color={iconColor} />;
  }

  // Temple
  if (lowercaseName.includes('temple')) {
    return <GiTempleDoor size={iconSize} color={iconColor} />;
  }

  // Fire Safety
  if (lowercaseName.includes('fire')) {
    return <FaFire size={iconSize} color={iconColor} />;
  }
  
  // Roads
  if (lowercaseName.includes('road')) {
    return <FaRoad size={iconSize} color={iconColor} />;
  }

  // Lighting
  if (lowercaseName.includes('light')) {
    return <FaLightbulb size={iconSize} color={iconColor} />;
  }

  // Default icon for unmatched amenities
  return <FaStar size={iconSize} color={iconColor} />;
};

/**
 * AmenityIcon component for rendering an amenity icon with name
 * @param {object} props - Component props
 * @param {string} props.name - Amenity name
 * @returns {JSX.Element} AmenityIcon component
 */
const AmenityIcon = ({ name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 flex items-center justify-center">
        {getAmenityIcon(name)}
      </div>
      <span className="text-sm text-center mt-2">
        {name}
      </span>
    </div>
  );
};

export default AmenityIcon; 