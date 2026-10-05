export interface RentalReview {
  id: string;
  name: string;
  city: string;
  carBooked: string;
  route: string;
  rating: number;
  reviewDate: string;
  review: string;
}

export const RENTAL_REVIEWS: RentalReview[] = [
  {
    id: 'rev-1',
    name: 'Sandeep Gaikwad',
    city: 'Pimpri-Chinchwad (PCMC)',
    carBooked: 'Innova Crysta',
    route: 'Pune to Mumbai Airport (T2)',
    rating: 5,
    reviewDate: 'March 2026',
    review: 'Booked an Innova Crysta for our family of 5 with 6 large trolley bags to catch an international flight from Mumbai. The driver Mr. Mahesh reached 15 minutes before time at 3:30 AM in Nigdi. Smooth driving on the expressway, clean car, and zero stress. Very dependable service.'
  },
  {
    id: 'rev-2',
    name: 'Pooja Kulkarni',
    city: 'Pune (Kothrud)',
    carBooked: 'Maruti Ertiga',
    route: 'Pune to Mahabaleshwar (2-Day Round Trip)',
    rating: 5,
    reviewDate: 'February 2026',
    review: 'We rented an Ertiga for a weekend trip to Mahabaleshwar with elderly parents. The driver was very courteous, drove carefully on the ghats, and never rushed us during sightseeing. The pricing was strictly as quoted without any extra hidden charges.'
  },
  {
    id: 'rev-3',
    name: 'Amit Sharma',
    city: 'Mumbai',
    carBooked: 'Swift Dzire',
    route: 'Mumbai to Shirdi One-Way',
    rating: 5,
    reviewDate: 'January 2026',
    review: 'Needed a one-way cab from Mumbai to Shirdi. Other apps were charging almost double for return fares. Ishwari arranged a clean Dzire at a fair one-way rate. Driver was polite and car was spotless.'
  },
  {
    id: 'rev-4',
    name: 'Nitin Rathi (Tech Corp)',
    city: 'Hinjawadi, Pune',
    carBooked: 'Force Urbania (13-Seater)',
    route: 'Pune to Lonavala Corporate Offsite',
    rating: 5,
    reviewDate: 'March 2026',
    review: 'Booked a Force Urbania for our team offsite to Lonavala. The vehicle was brand new, AC was super chilled, and the sound system was great. Coordinated everything over WhatsApp in 10 minutes.'
  }
];
