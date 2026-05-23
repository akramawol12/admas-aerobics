export interface Branch {
  id: string;
  name: string;
  area: string;
  landmark: string;
  address: string;
  phone: string;
  headCoach: string;
  floors: number;
  featuredFacility: string;
  coordinates: string;
}

export interface GymClass {
  id: string;
  name: string;
  trainer: string;
  time: string;
  duration: string;
  capacity: number;
  spotsLeft: number;
  intensity: 'High' | 'Extreme' | 'Moderate';
  branchId: string;
  day: string; // e.g. "Monday", "Wednesday"
  category: 'Taebo' | 'Aerobics' | 'Strength' | 'Core';
}

export interface Booking {
  id: string;
  classId: string;
  className: string;
  trainer: string;
  branchName: string;
  day: string;
  time: string;
  bookingTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  transformation: string;
  branch: string;
  avatar: string;
}
