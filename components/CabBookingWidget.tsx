'use client';

import React, { useState } from 'react';
import { 
  Car, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle,
  KeyRound,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { FLEET } from '@/data/cars';

interface CabBookingWidgetProps {
  onSuccess?: () => void;
}

export default function CabBookingWidget({ onSuccess }: CabBookingWidgetProps) {
  // Main Mode: 'Self-Drive' vs 'With-Driver'
  const [rentalMode, setRentalMode] = useState<'Self-Drive' | 'With-Driver'>('Self-Drive');

  // Self-Drive duration: 8hr, 12hr, 24hr, multi-day
  const [selfDriveDuration, setSelfDriveDuration] = useState<'8hr' | '12hr' | '24hr' | 'multi-day'>('24hr');

  // With-Driver trip type
  const [withDriverType, setWithDriverType] = useState<'One-Way' | 'Round-Trip' | 'Airport' | 'Local'>('One-Way');

  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00 AM');
  const [selectedCar, setSelectedCar] = useState('maruti-swift');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeCar = FLEET.find(c => c.id === selectedCar) || FLEET[0];

  // Self-drive price based on duration
  const getSelfDrivePrice = (car: typeof activeCar) => {
    if (selfDriveDuration === '8hr') return car.selfDrive8hr;
    if (selfDriveDuration === '12hr') return car.selfDrive12hr;
    if (selfDriveDuration === '24hr') return car.selfDrive24hr;
    return car.selfDrive24hr * 2; // multi-day baseline
  };

  const currentFareEstimate = rentalMode === 'Self-Drive'
    ? `₹${getSelfDrivePrice(activeCar).toLocaleString('en-IN')} (${selfDriveDuration === '8hr' ? '8 Hours' : selfDriveDuration === '12hr' ? '12 Hours' : '24 Hours'} Self-Drive)`
    : withDriverType === 'Local'
      ? `₹${activeCar.localPackage8hr80km.toLocaleString('en-IN')} (8hr / 80km)`
      : `Starting ₹${activeCar.ratePerKm}/km + Toll`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tripDesc = rentalMode === 'Self-Drive'
      ? `Self-Drive (Without Driver) - ${selfDriveDuration.toUpperCase()}`
      : `With Driver - ${withDriverType}`;

    const newBooking = {
      id: `CAB-${Date.now().toString().slice(-4)}`,
      customerName: name,
      phone,
      pickupLocation: pickup || 'Pune / PCMC',
      dropLocation: rentalMode === 'Self-Drive' ? 'Self-Drive (Drop at same/doorstep)' : (drop || 'Destination'),
      tripType: tripDesc as any,
      carPreference: activeCar.name,
      travelDate: date || 'Flexible',
      travelTime: time,
      passengers: activeCar.seats,
      status: 'New' as const,
      estimatedFare: currentFareEstimate,
      specialRequests: rentalMode === 'Self-Drive' ? 'Requires valid Driving License & Aadhaar verification' : 'Chauffeur booking',
      createdAt: new Date().toISOString().split('T')[0]
    };

    try {
      const existing = localStorage.getItem('ishwari_cab_bookings');
      const bookings = existing ? JSON.parse(existing) : [];
      bookings.unshift(newBooking);
      localStorage.setItem('ishwari_cab_bookings', JSON.stringify(bookings));
    } catch {
      // Ignore
    }

    setIsSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const buildWhatsAppMsg = () => {
    const durationLabel = selfDriveDuration === '8hr' ? '8 Hours' : selfDriveDuration === '12hr' ? '12 Hours' : selfDriveDuration === '24hr' ? '24 Hours (1 Day)' : 'Multi-Day';
    const serviceType = rentalMode === 'Self-Drive' ? `Self-Drive Without Driver (${durationLabel})` : `Chauffeur-Driven (${withDriverType})`;
    
    return encodeURIComponent(
      `*Cab & Car Rental Enquiry*\n` +
      `*Company:* Ishwari Tours & Travels (Ishwari Engineering & Roadlines)\n\n` +
      `• *Rental Type:* ${serviceType}\n` +
      `• *Vehicle:* ${activeCar.name}\n` +
      `• *Pickup Location:* ${pickup || 'PCMC / Pune'}\n` +
      `${rentalMode === 'With-Driver' ? `• *Drop Location:* ${drop || 'Outstation'}\n` : ''}` +
      `• *Travel Date:* ${date || 'Soon / Immediate'}\n` +
      `• *Pickup Time:* ${time}\n` +
      `• *Passenger Count:* Up to ${activeCar.seats} Seater\n` +
      `${name ? `• *Customer Name:* ${name}\n• *Phone:* ${phone}\n` : ''}` +
      `\nPlease confirm vehicle availability and quotation. Thank you!`
    );
  };

  const whatsappMsg = buildWhatsAppMsg();

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden transition-all text-slate-900">
      {/* Top Primary Rental Mode Switcher */}
      <div className="grid grid-cols-2 bg-slate-950 p-1.5 sm:p-2 border-b border-slate-800 text-xs sm:text-sm font-bold">
        <button
          type="button"
          onClick={() => {
            setRentalMode('Self-Drive');
            setSelectedCar('maruti-swift');
          }}
          className={`py-3 px-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
            rentalMode === 'Self-Drive'
              ? 'bg-amber-500 text-slate-950 shadow-lg font-bold'
              : 'text-slate-300 hover:text-white hover:bg-slate-900'
          }`}
        >
          <KeyRound className="w-4 h-4" />
          <span>Cars Without Driver (Self-Drive)</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setRentalMode('With-Driver');
            setSelectedCar('swift-dzire');
          }}
          className={`py-3 px-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
            rentalMode === 'With-Driver'
              ? 'bg-amber-500 text-slate-950 shadow-lg font-bold'
              : 'text-slate-300 hover:text-white hover:bg-slate-900'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Cars With Driver (Chauffeur)</span>
        </button>
      </div>

      {/* Sub-duration / Sub-trip selector */}
      <div className="bg-slate-900/95 text-slate-300 p-2 sm:px-6 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 text-xs">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
          {rentalMode === 'Self-Drive' ? 'Select Self-Drive Duration:' : 'Select Trip Type:'}
        </span>

        {rentalMode === 'Self-Drive' ? (
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {(['8hr', '12hr', '24hr', 'multi-day'] as const).map((dur) => (
              <button
                key={dur}
                type="button"
                onClick={() => setSelfDriveDuration(dur)}
                className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                  selfDriveDuration === dur
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {dur === '8hr' && '8 Hours'}
                {dur === '12hr' && '12 Hours'}
                {dur === '24hr' && '24 Hours (1 Day)'}
                {dur === 'multi-day' && 'Multi-Day (2+ Days)'}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {(['One-Way', 'Round-Trip', 'Airport', 'Local'] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setWithDriverType(type)}
                className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                  withDriverType === type
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {type === 'One-Way' && 'One-Way Drop'}
                {type === 'Round-Trip' && 'Round Trip'}
                {type === 'Airport' && 'Airport Taxi'}
                {type === 'Local' && 'Local 8hr/80km'}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-5 sm:p-7">
        {isSubmitted ? (
          <div className="text-center py-6 space-y-4 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Car Rental Request Received!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Thank you, <strong>{name}</strong>. We are assigning your <strong>{activeCar.name}</strong> for <strong>{rentalMode === 'Self-Drive' ? `${selfDriveDuration} Self-Drive (Without Driver)` : `With Chauffeur`}</strong>.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/918530410233?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-slate-500 hover:text-slate-800 py-1"
              >
                Book Another Car
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Pickup Location */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  Pickup Point / Area
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pune, PCMC, Nigdi, Wakad"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {/* Drop Location / Self-Drive Dropoff */}
              {rentalMode === 'With-Driver' && withDriverType !== 'Local' ? (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    Drop Location
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai Airport, Shirdi, Goa"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {rentalMode === 'Self-Drive' ? 'Vehicle Handover' : 'Coverage Limit'}
                  </label>
                  <input
                    type="text"
                    disabled
                    value={rentalMode === 'Self-Drive' ? 'Doorstep Delivery or Office Pickup' : 'Local City 8hr / 80km Limit'}
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl p-2.5 bg-slate-100 text-slate-600 cursor-not-allowed"
                  />
                </div>
              )}

              {/* Date */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-700" />
                  Pickup Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  Pickup Time
                </label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Select Vehicle Category */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700">
                  Select Car on Rent:
                </label>
                <span className="text-[11px] text-amber-800 font-semibold">
                  {rentalMode === 'Self-Drive' ? 'Showing Self-Drive Rates (Without Driver)' : 'Showing Outstation / Local Rates'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {FLEET
                  .filter(car => rentalMode === 'Self-Drive' ? car.selfDriveAvailable : true)
                  .map((car) => {
                    const priceDisplay = rentalMode === 'Self-Drive'
                      ? `₹${getSelfDrivePrice(car).toLocaleString('en-IN')}`
                      : `₹${car.ratePerKm}/km`;

                    return (
                      <button
                        key={car.id}
                        type="button"
                        onClick={() => setSelectedCar(car.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          selectedCar === car.id
                            ? 'border-amber-600 bg-amber-50/80 shadow-xs ring-1 ring-amber-500'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <strong className="block text-xs font-bold text-slate-900 truncate">
                          {car.name.split(' ')[0]} {car.name.split(' ')[1] || ''}
                        </strong>
                        <span className="text-[10px] text-slate-500 block">
                          {car.seats} Seater {car.transmission.includes('Auto') ? 'Auto/Man' : 'Manual'}
                        </span>
                        <div className="mt-1 flex items-baseline justify-between">
                          <span className="text-xs font-bold text-amber-900">
                            {priceDisplay}
                          </span>
                          {rentalMode === 'Self-Drive' && (
                            <span className="text-[9px] text-slate-400">/{selfDriveDuration}</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Self-Drive Documentation Disclaimer */}
            {rentalMode === 'Self-Drive' && (
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-between text-[11px] text-amber-950">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>
                    <strong>Required for Self-Drive:</strong> Original Driving License + Aadhaar Card + Refundable Security Deposit (₹{activeCar.securityDeposit.toLocaleString('en-IN')}).
                  </span>
                </div>
                <span className="hidden sm:inline text-xs text-amber-800 font-bold">Fast Approval</span>
              </div>
            )}

            {/* Customer Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patil"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 85304 10233"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs sm:text-sm border border-slate-300 rounded-xl p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Bottom Fare & Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs">
                <span className="text-slate-500 block">Estimated Rate:</span>
                <span className="text-base font-serif font-bold text-slate-900">
                  {currentFareEstimate}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="submit"
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Car className="w-4 h-4" />
                  <span>{rentalMode === 'Self-Drive' ? 'Book Self-Drive Car' : 'Book Cab With Chauffeur'}</span>
                </button>

                <a
                  href={`https://wa.me/918530410233?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shrink-0"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden md:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
