import { Branch, GymClass, Testimonial } from './types';

export const BRANCHES: Branch[] = [
  {
    id: 'piassa',
    name: 'Piassa Hub',
    area: 'Piassa, Addis Ababa',
    landmark: 'Infront of Lewi',
    address: 'Piassa, infront of Lewi, Addis Ababa, Ethiopia',
    phone: '0911821282',
    headCoach: 'Coach Elias (Taebo Master)',
    floors: 2,
    featuredFacility: 'Premium Sound-Stage & Modern Group Studios',
    coordinates: '9.0305° N, 38.7512° E'
  }
];

export const CLASSES: GymClass[] = [
  // Monday Class
  {
    id: 'tb-mon-1',
    name: 'High-Kick Taebo Cardio',
    trainer: 'Coach Elias',
    time: '06:30 AM - 07:30 AM',
    duration: '60 mins',
    capacity: 40,
    spotsLeft: 14,
    intensity: 'Extreme',
    branchId: 'piassa',
    day: 'Monday',
    category: 'Taebo'
  },
  {
    id: 'ae-mon-2',
    name: 'Vibrant Amharic Beats Aerobics',
    trainer: 'Coach Lidya',
    time: '08:00 AM - 09:00 AM',
    duration: '60 mins',
    capacity: 45,
    spotsLeft: 18,
    intensity: 'High',
    branchId: 'piassa',
    day: 'Monday',
    category: 'Aerobics'
  },
  {
    id: 'st-mon-3',
    name: 'Strength & Body-Weight Conditioning',
    trainer: 'Coach Samson',
    time: '05:30 PM - 06:30 PM',
    duration: '60 mins',
    capacity: 30,
    spotsLeft: 5,
    intensity: 'High',
    branchId: 'piassa',
    day: 'Monday',
    category: 'Strength'
  },
  {
    id: 'tb-mon-4',
    name: 'Ultimate Taebo Fight Club',
    trainer: 'Coach Elias',
    time: '06:00 PM - 07:15 PM',
    duration: '75 mins',
    capacity: 50,
    spotsLeft: 0, // Fully Booked Demo
    intensity: 'Extreme',
    branchId: 'piassa',
    day: 'Monday',
    category: 'Taebo'
  },

  // Tuesday Class
  {
    id: 'tb-tue-1',
    name: 'Metabolic Taebo Speed Kicks',
    trainer: 'Coach Elias',
    time: '06:30 AM - 07:30 AM',
    duration: '60 mins',
    capacity: 40,
    spotsLeft: 19,
    intensity: 'High',
    branchId: 'piassa',
    day: 'Tuesday',
    category: 'Taebo'
  },
  {
    id: 'ae-tue-2',
    name: 'Dynamic Oromo & Ethio Rhythm Aerobics',
    trainer: 'Coach Lidya',
    time: '06:00 PM - 07:00 PM',
    duration: '60 mins',
    capacity: 40,
    spotsLeft: 11,
    intensity: 'High',
    branchId: 'piassa',
    day: 'Tuesday',
    category: 'Aerobics'
  },

  // Wednesday Class
  {
    id: 'ae-wed-1',
    name: 'Rhythmic Step & Core Burner',
    trainer: 'Coach Selamawit',
    time: '06:30 AM - 07:30 AM',
    duration: '60 mins',
    capacity: 40,
    spotsLeft: 22,
    intensity: 'Moderate',
    branchId: 'piassa',
    day: 'Wednesday',
    category: 'Aerobics'
  },
  {
    id: 'tb-wed-2',
    name: 'Taebo Strike & Guard Cardio',
    trainer: 'Coach Samson',
    time: '06:15 PM - 07:15 PM',
    duration: '60 mins',
    capacity: 35,
    spotsLeft: 8,
    intensity: 'High',
    branchId: 'piassa',
    day: 'Wednesday',
    category: 'Taebo'
  },
  {
    id: 'co-wed-3',
    name: 'Intense Abs & Glutes Sculpt',
    trainer: 'Coach Lidya',
    time: '06:30 PM - 07:30 PM',
    duration: '60 mins',
    capacity: 40,
    spotsLeft: 12,
    intensity: 'Moderate',
    branchId: 'piassa',
    day: 'Wednesday',
    category: 'Core'
  },

  // Thursday Class
  {
    id: 'tb-thu-1',
    name: 'Taebo Heavy Bag Conditioning',
    trainer: 'Coach Samson',
    time: '06:30 AM - 07:30 AM',
    duration: '60 mins',
    capacity: 35,
    spotsLeft: 15,
    intensity: 'Extreme',
    branchId: 'piassa',
    day: 'Thursday',
    category: 'Taebo'
  },
  {
    id: 'co-thu-2',
    name: 'Core & Endurance Power Discharge',
    trainer: 'Coach Elias',
    time: '06:15 PM - 07:15 PM',
    duration: '60 mins',
    capacity: 45,
    spotsLeft: 22,
    intensity: 'High',
    branchId: 'piassa',
    day: 'Thursday',
    category: 'Core'
  },

  // Friday Class
  {
    id: 'tb-fri-1',
    name: 'Friday Sunset Taebo Warrior',
    trainer: 'Coach Elias',
    time: '05:30 PM - 06:45 PM',
    duration: '75 mins',
    capacity: 60,
    spotsLeft: 29,
    intensity: 'Extreme',
    branchId: 'piassa',
    day: 'Friday',
    category: 'Taebo'
  },
  {
    id: 'ae-fri-2',
    name: 'Afro-Beats Cardio Dance Fusion',
    trainer: 'Coach Lidya',
    time: '06:00 PM - 07:00 PM',
    duration: '60 mins',
    capacity: 50,
    spotsLeft: 31,
    intensity: 'High',
    branchId: 'piassa',
    day: 'Friday',
    category: 'Aerobics'
  },

  // Saturday Class
  {
    id: 'tb-sat-1',
    name: 'Weekend Kick-Start Taebo Special',
    trainer: 'Coach Elias',
    time: '08:30 AM - 09:45 AM',
    duration: '75 mins',
    capacity: 60,
    spotsLeft: 35,
    intensity: 'Extreme',
    branchId: 'piassa',
    day: 'Saturday',
    category: 'Taebo'
  },
  {
    id: 'ae-sat-2',
    name: 'Super Aerobics Blast Weekend',
    trainer: 'Coach Selamawit',
    time: '10:00 AM - 11:15 AM',
    duration: '75 mins',
    capacity: 55,
    spotsLeft: 19,
    intensity: 'High',
    branchId: 'piassa',
    day: 'Saturday',
    category: 'Aerobics'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Yonas Gebretsadik',
    role: 'Tech Consultant',
    quote: "Admas Taebo completely changed my life. I went from feeling sluggish after long office hours in Piassa to having supreme focus and dropping 18 kilograms in just 6 months. Elias's energy is unmatched in Addis!",
    transformation: '-18kg Weight Loss & Incredible Stamina',
    branch: 'Piassa Hub',
    avatar: ''
  },
  {
    id: 'test-2',
    name: 'Lidya Tekle',
    role: 'Financial Analyst',
    quote: "The Megenagna Aerobics studio is a family for me. The community is incredibly warm, the Amharic and international beat remixes keep you sweating, and you leave every session floating on pure adrenaline.",
    transformation: 'Improved Cardiovascular Health & Peak Muscle Tone',
    branch: 'Piassa Hub',
    avatar: '/src/assets/images/ethiopian_lady_avatar_1779547439427.png'
  },
  {
    id: 'test-3',
    name: 'Dr. Dawit Alene',
    role: 'Pediatrician',
    quote: "As a physician, I highly recommend Admas. Their combination of physical martial-arts combat cardio (Taebo) with rhythm-based stretching hits every health marker for optimal physical wellness.",
    transformation: 'Relieved Chronic Back Stiffness & Sky-high Lung Capacity',
    branch: 'Piassa Hub',
    avatar: ''
  }
];

export const HERO_IMAGE_PATH = '/src/assets/images/taebo_hero_banner_1779536118363.png';
export const TRAINER_IMAGE_PATH = '/src/assets/images/trainer_thumbnail_1779536141685.png';
