export interface RentalRoute {
  id: string;
  source: string;
  destination: string;
  distanceKm: number;
  durationApprox: string;
  sedanFareOneWay: number;
  ertigaFareOneWay: number;
  innovaFareOneWay: number;
  tollNote: string;
  popularType: 'Airport' | 'Outstation' | 'Pilgrimage' | 'Hill Station';
}

export const POPULAR_ROUTES: RentalRoute[] = [
  {
    id: 'pune-mumbai-airport',
    source: 'Pune / PCMC',
    destination: 'Mumbai International Airport (T1/T2)',
    distanceKm: 160,
    durationApprox: '3.5 - 4 Hours',
    sedanFareOneWay: 2600,
    ertigaFareOneWay: 3400,
    innovaFareOneWay: 4500,
    tollNote: 'Excluding Mumbai-Pune Expressway toll (~₹320 at actuals)',
    popularType: 'Airport'
  },
  {
    id: 'mumbai-pune',
    source: 'Mumbai / Thane / Navi Mumbai',
    destination: 'Pune / PCMC',
    distanceKm: 155,
    durationApprox: '3.5 - 4 Hours',
    sedanFareOneWay: 2600,
    ertigaFareOneWay: 3400,
    innovaFareOneWay: 4500,
    tollNote: 'Excluding expressway toll at actuals',
    popularType: 'Airport'
  },
  {
    id: 'pune-shirdi',
    source: 'Pune / PCMC',
    destination: 'Shirdi Sai Baba Temple',
    distanceKm: 195,
    durationApprox: '4.5 Hours',
    sedanFareOneWay: 3200,
    ertigaFareOneWay: 4200,
    innovaFareOneWay: 5600,
    tollNote: 'Round-trip same-day or next-day package available',
    popularType: 'Pilgrimage'
  },
  {
    id: 'pune-mahabaleshwar',
    source: 'Pune / PCMC',
    destination: 'Mahabaleshwar & Panchgani',
    distanceKm: 125,
    durationApprox: '3 Hours',
    sedanFareOneWay: 2400,
    ertigaFareOneWay: 3200,
    innovaFareOneWay: 4400,
    tollNote: 'Scenic ghat drive with seasoned hill drivers',
    popularType: 'Hill Station'
  },
  {
    id: 'pune-lonavala',
    source: 'Pune / PCMC',
    destination: 'Lonavala & Khandala',
    distanceKm: 65,
    durationApprox: '1.5 Hours',
    sedanFareOneWay: 1800,
    ertigaFareOneWay: 2400,
    innovaFareOneWay: 3200,
    tollNote: 'Ideal for same-day weekend return outings',
    popularType: 'Hill Station'
  },
  {
    id: 'pune-goa',
    source: 'Pune / PCMC',
    destination: 'North / South Goa',
    distanceKm: 440,
    durationApprox: '9 - 10 Hours',
    sedanFareOneWay: 7500,
    ertigaFareOneWay: 9500,
    innovaFareOneWay: 12500,
    tollNote: 'Comfortable highway drive with break options',
    popularType: 'Outstation'
  },
  {
    id: 'pune-nashik',
    source: 'Pune / PCMC',
    destination: 'Nashik / Trimbakeshwar',
    distanceKm: 215,
    durationApprox: '5 Hours',
    sedanFareOneWay: 3600,
    ertigaFareOneWay: 4800,
    innovaFareOneWay: 6200,
    tollNote: 'Direct highway route via Sangamner',
    popularType: 'Pilgrimage'
  },
  {
    id: 'pune-kolhapur',
    source: 'Pune / PCMC',
    destination: 'Kolhapur Mahalaxmi',
    distanceKm: 235,
    durationApprox: '4.5 Hours',
    sedanFareOneWay: 3800,
    ertigaFareOneWay: 5000,
    innovaFareOneWay: 6500,
    tollNote: 'Smooth NH48 6-lane highway',
    popularType: 'Pilgrimage'
  }
];
