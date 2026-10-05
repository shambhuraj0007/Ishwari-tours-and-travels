export interface CarRental {
  id: string;
  name: string;
  category: 'Hatchback' | 'Sedan' | 'SUV' | 'Premium SUV' | 'Luxury' | 'Tempo Traveller';
  seats: number;
  luggage: number;
  ac: boolean;
  transmission: 'Manual' | 'Automatic' | 'Manual / Automatic';
  fuelType: 'Petrol' | 'Diesel' | 'CNG' | 'Petrol / CNG';
  // With Driver rates
  ratePerKm: number;
  driverAllowancePerDay: number;
  minKmPerDay: number;
  localPackage8hr80km: number;
  localPackage12hr120km: number;
  // Without Driver (Self-Drive) rates
  selfDriveAvailable: boolean;
  selfDrive8hr: number;
  selfDrive12hr: number;
  selfDrive24hr: number;
  securityDeposit: number;
  image: string;
  tagline: string;
  popularFor: string;
  features: string[];
}

export const FLEET: CarRental[] = [
  {
    id: 'maruti-swift',
    name: 'Maruti Swift / Baleno / i20',
    category: 'Hatchback',
    seats: 4,
    luggage: 2,
    ac: true,
    transmission: 'Manual',
    fuelType: 'Petrol',
    ratePerKm: 11,
    driverAllowancePerDay: 400,
    minKmPerDay: 300,
    localPackage8hr80km: 1900,
    localPackage12hr120km: 2500,
    selfDriveAvailable: true,
    selfDrive8hr: 1100,
    selfDrive12hr: 1500,
    selfDrive24hr: 2000,
    securityDeposit: 3000,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Zippy, fuel-efficient hatchback perfect for self-drive city runs and weekend trips.',
    popularFor: 'Self-drive city commute, Lonavala day trips, student & couple getaways',
    features: ['Chilled AC', 'Bluetooth Audio', 'Easy Parking', 'Fastag Active', 'Clean Sanitized Cabin']
  },
  {
    id: 'swift-dzire',
    name: 'Maruti Swift Dzire / Honda Amaze',
    category: 'Sedan',
    seats: 4,
    luggage: 3,
    ac: true,
    transmission: 'Manual / Automatic',
    fuelType: 'Petrol / CNG',
    ratePerKm: 12,
    driverAllowancePerDay: 400,
    minKmPerDay: 300,
    localPackage8hr80km: 2200,
    localPackage12hr120km: 2900,
    selfDriveAvailable: true,
    selfDrive8hr: 1300,
    selfDrive12hr: 1700,
    selfDrive24hr: 2300,
    securityDeposit: 3500,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    tagline: 'Comfortable, spacious boot, and economical for self-drive and chauffeur trips.',
    popularFor: 'Airport drops, family self-drive, business meetings',
    features: ['Chilled AC', 'Large Boot for 3 Bags', 'USB Charger', 'Fastag Active', 'Power Steering']
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Ertiga (7 Seater MUV)',
    category: 'SUV',
    seats: 7,
    luggage: 4,
    ac: true,
    transmission: 'Manual',
    fuelType: 'Petrol / CNG',
    ratePerKm: 15,
    driverAllowancePerDay: 450,
    minKmPerDay: 300,
    localPackage8hr80km: 2800,
    localPackage12hr120km: 3600,
    selfDriveAvailable: true,
    selfDrive8hr: 1800,
    selfDrive12hr: 2400,
    selfDrive24hr: 3200,
    securityDeposit: 5000,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    tagline: 'Ideal 7-seater for self-drive family vacations, Shirdi, Mahabaleshwar, and Konkan.',
    popularFor: 'Self-drive family road trips, outstation pilgrimages, group picnics',
    features: ['Rear AC Vents', 'Foldable 3rd Row', 'Highway Stability', 'Music System', 'Fastag Active']
  },
  {
    id: 'mahindra-thar',
    name: 'Mahindra Thar 4x4',
    category: 'SUV',
    seats: 4,
    luggage: 2,
    ac: true,
    transmission: 'Manual / Automatic',
    fuelType: 'Diesel',
    ratePerKm: 22,
    driverAllowancePerDay: 500,
    minKmPerDay: 300,
    localPackage8hr80km: 3800,
    localPackage12hr120km: 4800,
    selfDriveAvailable: true,
    selfDrive8hr: 2600,
    selfDrive12hr: 3400,
    selfDrive24hr: 4500,
    securityDeposit: 8000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    tagline: 'The ultimate self-drive adventure icon for weekend road trips and monsoon ghats.',
    popularFor: 'Self-drive road trips, Western Ghats, Lonavala & Goa drives, photo shoots',
    features: ['4x4 Off-road Capability', 'Hard Top AC Cabin', 'Touchscreen Infotainment', 'High Ground Clearance']
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Premium SUV',
    seats: 7,
    luggage: 5,
    ac: true,
    transmission: 'Manual / Automatic',
    fuelType: 'Diesel',
    ratePerKm: 19,
    driverAllowancePerDay: 500,
    minKmPerDay: 300,
    localPackage8hr80km: 3500,
    localPackage12hr120km: 4500,
    selfDriveAvailable: true,
    selfDrive8hr: 2800,
    selfDrive12hr: 3600,
    selfDrive24hr: 4800,
    securityDeposit: 8000,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    tagline: 'King of long-distance comfort, captain seats, and high-speed highway refinement.',
    popularFor: 'Self-drive family tours, Goa trips, long outstation drives, VIP transport',
    features: ['Plush Captain Seats', 'Individual Climate AC', 'Smooth Suspension', 'Large Boot Space', 'Fastag Active']
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner 4x4',
    category: 'Luxury',
    seats: 7,
    luggage: 4,
    ac: true,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    ratePerKm: 38,
    driverAllowancePerDay: 700,
    minKmPerDay: 300,
    localPackage8hr80km: 7500,
    localPackage12hr120km: 9500,
    selfDriveAvailable: true,
    selfDrive8hr: 5500,
    selfDrive12hr: 7500,
    selfDrive24hr: 9800,
    securityDeposit: 15000,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    tagline: 'Commanding luxury SUV for weddings, VIP convoys, and executive road presence.',
    popularFor: 'Weddings, VIP events, self-drive premium road trips',
    features: ['Leather Upholstery', '4x4 Automatic', 'Cruise Control', 'VIP Presence', 'Top Safety']
  },
  {
    id: 'tempo-traveller-17',
    name: 'Force Tempo Traveller (17 Seater)',
    category: 'Tempo Traveller',
    seats: 17,
    luggage: 12,
    ac: true,
    transmission: 'Manual',
    fuelType: 'Diesel',
    ratePerKm: 26,
    driverAllowancePerDay: 600,
    minKmPerDay: 300,
    localPackage8hr80km: 5500,
    localPackage12hr120km: 7200,
    selfDriveAvailable: false, // Large commercial vehicle with driver only
    selfDrive8hr: 0,
    selfDrive12hr: 0,
    selfDrive24hr: 0,
    securityDeposit: 0,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    tagline: 'High-roof van for family reunions, weddings, and group pilgrimages with chauffeur.',
    popularFor: 'Group tours, wedding guests, corporate offsites (with chauffeur only)',
    features: ['Pushback Reclining Seats', 'High Standing Roof', 'Chilled AC', 'Surround Music', 'Luggage Carrier']
  }
];

export const getCarById = (id: string): CarRental | undefined => {
  return FLEET.find(c => c.id === id);
};
