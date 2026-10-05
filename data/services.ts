export interface RentalService {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  features: string[];
}

export const RENTAL_SERVICES: RentalService[] = [
  {
    id: 'self-drive-cars',
    title: 'Self-Drive Cars on Rent (8hr, 12hr & 24hr)',
    shortDesc: 'Drive yourself with total freedom and privacy. Rent cars without driver on flexible hourly or daily packages.',
    longDesc: 'Enjoy complete privacy with your friends or family. Rent verified hatchbacks, sedans, 7-seater Ertiga, Mahindra Thar 4x4, or Innova Crysta without a driver. Available on flexible 8-Hour, 12-Hour, or 24-Hour (1 to 30 days) rental plans with quick document verification.',
    icon: 'KeyRound',
    features: [
      '8 Hours, 12 Hours & 24 Hours / Daily rental options',
      'Minimal documentation: Valid Driving License + Aadhaar Card',
      'Doorstep car delivery and return pickup available across PCMC/Pune',
      'Well-maintained fleet (Swift, Dzire, Ertiga, Thar 4x4, Innova Crysta)'
    ]
  },
  {
    id: 'outstation-cabs',
    title: 'Outstation Cabs (Round Trip & One-Way)',
    shortDesc: 'Reliable intercity cabs with verified chauffeurs for family trips and outstation travel.',
    longDesc: 'We coordinate clean, comfortable vehicles with professional highway drivers. Pay only for one-way drops on popular corridors, or book round trips with transparent per-km billing and zero hidden surprises.',
    icon: 'Compass',
    features: [
      'One-Way drop options without return fare on select routes',
      'Affordable per-km rates with 300 km/day outstation minimum',
      'Verified sanitized cars (Dzire, Ertiga, Innova Crysta)',
      'Experienced highway & ghat-trained chauffeurs'
    ]
  },
  {
    id: 'airport-transfers',
    title: 'Airport Pick & Drop Service',
    shortDesc: 'Timely 24/7 airport transfers between Pune, PCMC, and Mumbai Airport (T1/T2).',
    longDesc: 'Never miss a flight. We track your flight status, dispatch sanitized cabs ahead of time, and provide smooth doorstep pickups with assistance for luggage and terminal coordination.',
    icon: 'Plane',
    features: [
      'Doorstep pickup anytime 24/7 (early morning or late night)',
      'Direct Expressway transit between Pune/PCMC and Mumbai Airport',
      'Live driver tracking & WhatsApp updates before arrival',
      'Fixed transparent fares with clear toll/parking terms'
    ]
  },
  {
    id: 'local-hourly-rentals',
    title: 'Local Hourly Rentals With Driver (8hr/80km & 12hr/120km)',
    shortDesc: 'Dedicated car and chauffeur at your disposal for city meetings, shopping, and hospital visits.',
    longDesc: 'Need multiple stops across the city without hailing separate cabs every time? Book a local package for 8 hours / 80 km or 12 hours / 120 km. The car stays with you until your day is done.',
    icon: 'Clock',
    features: [
      'Multiple stops throughout the day with zero waiting stress',
      'Choice of Sedan, Ertiga, or Luxury Innova Crysta',
      'Transparent extra km and extra hour billing rules',
      'Ideal for business meetings, weddings, and family shopping'
    ]
  },
  {
    id: 'pilgrimage-tours',
    title: 'Pilgrimage & Darshan Cabs',
    shortDesc: 'Punctual, respectful drivers for temple circuits across Maharashtra and neighbouring states.',
    longDesc: 'Visiting Shirdi Sai Baba, Shani Shingnapur, Trimbakeshwar, Bhimashankar, or Ashtavinayak? We arrange patient, polite drivers who know temple timings, parking spots, and elder-friendly access points.',
    icon: 'Sparkles',
    features: [
      'Ashtavinayak Yatra 2-Day and 3-Day circuits',
      'Shirdi & Shani Shingnapur same-day and overnight return',
      'Maharashtra 5 Jyotirlinga custom itineraries',
      'Senior citizen friendly stops and patient driving'
    ]
  },
  {
    id: 'wedding-event-fleet',
    title: 'Wedding & Group Event Fleets',
    shortDesc: 'Coordinated convoys, luxury bridal cars, and tempo travellers for guests.',
    longDesc: 'Keep wedding transport running like clockwork. From luxury Toyota Fortuner bridal cars to multiple 17-seater Tempo Travellers shuttling guests between hotels, wedding halls, and airports.',
    icon: 'Heart',
    features: [
      'Decorated bridal cars (Fortuner, Innova Crysta, Mercedes on demand)',
      '13, 17, and 20 seater Tempo Travellers for guest shuttles',
      'Coordinated dispatch for large family functions and sangeets',
      'Single point of contact managing all vehicle movements'
    ]
  }
];
