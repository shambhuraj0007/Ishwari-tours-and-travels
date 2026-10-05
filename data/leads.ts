export type BookingStatus = 
  | 'New' 
  | 'Driver Assigned' 
  | 'Quotation Sent' 
  | 'Confirmed' 
  | 'Trip Completed' 
  | 'Cancelled';

export type TripType = 
  | 'Outstation Round Trip' 
  | 'Outstation One Way' 
  | 'Airport Transfer' 
  | 'Local 8hr/80km' 
  | 'Local 12hr/120km' 
  | 'Corporate';

export interface CabBookingLead {
  id: string;
  customerName: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  tripType: TripType;
  carPreference: string;
  travelDate: string;
  travelTime: string;
  passengers: number;
  status: BookingStatus;
  estimatedFare: string;
  specialRequests: string;
  createdAt: string;
}

export const INITIAL_CAB_BOOKINGS: CabBookingLead[] = [
  {
    id: 'CAB-2026-101',
    customerName: 'Ramesh Patil',
    phone: '+91 98220 14589',
    pickupLocation: 'Akurdi, PCMC Pune',
    dropLocation: 'Mumbai Airport (T2)',
    tripType: 'Airport Transfer',
    carPreference: 'Innova Crysta (7 Seater)',
    travelDate: '08/04/2026',
    travelTime: '04:00 AM',
    passengers: 4,
    status: 'Driver Assigned',
    estimatedFare: '₹4,500 + Toll',
    specialRequests: '6 large bags, elderly passenger, child seat',
    createdAt: '2026-04-04'
  },
  {
    id: 'CAB-2026-102',
    customerName: 'Sunita Deshpande',
    phone: '+91 98901 22341',
    pickupLocation: 'Wakad, Pune',
    dropLocation: 'Shirdi Sai Baba Temple',
    tripType: 'Outstation Round Trip',
    carPreference: 'Maruti Ertiga (6 Seater)',
    travelDate: '11/04/2026',
    travelTime: '06:00 AM',
    passengers: 5,
    status: 'Confirmed',
    estimatedFare: '₹6,800 All Inclusive',
    specialRequests: 'Same day return by 9 PM',
    createdAt: '2026-04-03'
  },
  {
    id: 'CAB-2026-103',
    customerName: 'Vikram Mehta',
    phone: '+91 98210 99482',
    pickupLocation: 'Bandra, Mumbai',
    dropLocation: 'Pune / PCMC',
    tripType: 'Outstation One Way',
    carPreference: 'Swift Dzire (Sedan)',
    travelDate: '12/04/2026',
    travelTime: '10:30 AM',
    passengers: 2,
    status: 'New',
    estimatedFare: '₹2,600 + Toll',
    specialRequests: 'One-way drop near Chinchwad station',
    createdAt: '2026-04-05'
  },
  {
    id: 'CAB-2026-104',
    customerName: 'Anand Shinde (Infosys)',
    phone: '+91 91750 88219',
    pickupLocation: 'Hinjawadi Phase 1, Pune',
    dropLocation: 'Local Pune Sightseeing',
    tripType: 'Local 8hr/80km',
    carPreference: 'Swift Dzire (Sedan)',
    travelDate: '14/04/2026',
    travelTime: '09:00 AM',
    passengers: 3,
    status: 'Quotation Sent',
    estimatedFare: '₹2,200 (8hr/80km)',
    specialRequests: 'Visiting client offices in Magarpatta & Viman Nagar',
    createdAt: '2026-04-02'
  }
];
