'use client';

import React, { useState } from 'react';
import { X, Send, MessageCircle, CheckCircle2, Car, MapPin } from 'lucide-react';
import { FLEET } from '@/data/cars';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCarName?: string;
  defaultPickup?: string;
  defaultDrop?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  defaultCarName = 'Swift Dzire',
  defaultPickup = '',
  defaultDrop = ''
}: QuoteModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [car, setCar] = useState(defaultCarName);
  const [pickup, setPickup] = useState(defaultPickup);
  const [drop, setDrop] = useState(defaultDrop);
  const [travelDate, setTravelDate] = useState('');
  const [tripType, setTripType] = useState('Outstation Round Trip');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBooking = {
      id: `CAB-${Date.now().toString().slice(-4)}`,
      customerName: name,
      phone,
      pickupLocation: pickup || 'Pune / PCMC',
      dropLocation: drop || 'Destination',
      tripType: tripType as any,
      carPreference: car,
      travelDate: travelDate || 'Soon',
      travelTime: 'Flexible',
      passengers: 4,
      status: 'New' as const,
      estimatedFare: 'Rate on Call',
      specialRequests: 'Booked via Cab Modal',
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

    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Ishwari Tours & Travels,\nI need a car on rent.\nName: ${name}\nPhone: ${phone}\nCar: ${car}\nTrip: ${tripType}\nPickup: ${pickup || 'Pune/PCMC'}\nDrop: ${drop || 'Outstation'}\nDate: ${travelDate || 'Flexible'}.\nPlease confirm availability & best fare.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-amber-400" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                Car on Rent Booking
              </span>
              <h3 className="text-base font-serif font-bold text-white">
                Book {car || 'a Cab'} with Ishwari
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-serif font-bold text-slate-900">
              Booking Request Received!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>. We are assigning a verified <strong>{car}</strong> for your trip. Our team will contact you shortly to confirm driver and fare details.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/919822054123?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2 text-slate-500 hover:text-slate-800 text-xs font-medium"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-3 max-h-[85vh] overflow-y-auto text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patil"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Mobile / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98220 54123"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Select Vehicle Preference
                </label>
                <select
                  value={car}
                  onChange={(e) => setCar(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none font-semibold text-slate-900"
                >
                  {FLEET.map((f) => (
                    <option key={f.id} value={f.name}>
                      {f.name} ({f.seats} Seater, ₹{f.ratePerKm}/km)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Trip Type
                </label>
                <select
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="Outstation One Way">Outstation (One-Way Drop)</option>
                  <option value="Outstation Round Trip">Outstation (Round Trip)</option>
                  <option value="Airport Transfer">Airport Pick / Drop</option>
                  <option value="Local 8hr/80km">Local Rental (8hr / 80km)</option>
                  <option value="Corporate / Event">Wedding / Event / Corporate</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Pickup City / Location
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pune, PCMC, Wakad, Nigdi"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Drop City / Destination
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mumbai Airport, Shirdi, Mahabaleshwar"
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Travel Date & Pickup Time
              </label>
              <input
                type="text"
                placeholder="e.g. 15 April 2026, 6:00 AM"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Confirm Cab Booking Request</span>
              </button>
              <p className="text-[10px] text-slate-500 text-center mt-1.5">
                No advance cancellation fee. Driver and vehicle details sent via SMS/WhatsApp.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
