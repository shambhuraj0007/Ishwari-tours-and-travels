'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Clock, 
  CheckCircle2, 
  Car,
  Building 
} from 'lucide-react';
import { FLEET } from '@/data/cars';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [car, setCar] = useState('Swift Dzire');
  const [travelDate, setTravelDate] = useState('');
  const [tripType, setTripType] = useState('Outstation Round Trip');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBooking = {
      id: `CAB-${Date.now().toString().slice(-4)}`,
      customerName: name,
      phone,
      pickupLocation: pickup,
      dropLocation: drop,
      tripType: tripType as any,
      carPreference: car,
      travelDate: travelDate || 'Flexible',
      travelTime: 'As per booking',
      passengers: 4,
      status: 'New' as const,
      estimatedFare: 'Quote on request',
      specialRequests: notes,
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

  const whatsappMsg = encodeURIComponent(
    `*Car Rental & Cab Inquiry*\n` +
    `*Company:* Ishwari Tours & Travels (Ishwari Engineering & Roadlines)\n\n` +
    `• *Customer Name:* ${name}\n` +
    `• *Phone:* ${phone}\n` +
    `• *Vehicle Preference:* ${car}\n` +
    `• *Service Type:* ${tripType}\n` +
    `• *Pickup Location:* ${pickup}\n` +
    `• *Drop Location:* ${drop}\n` +
    `• *Travel Date:* ${travelDate || 'Flexible / Immediate'}\n` +
    `${notes ? `• *Special Notes:* ${notes}\n` : ''}\n` +
    `Please confirm booking confirmation and best quote. Thank you!`
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
            Instant Booking & Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-3">
            Book a Car on Rent
          </h1>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Need an outstation cab, airport drop, or local car rental? Call our dispatch desk or submit your travel details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h2 className="text-lg font-serif font-bold text-slate-900">
                Direct Contact Channels
              </h2>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">24/7 Cab Booking Helpline</strong>
                    <a href="tel:+918530410233" className="text-amber-800 hover:underline font-bold block text-sm">
                      +91 85304 10233
                    </a>
                    <span className="text-slate-500 block text-xs">
                      Direct Desk • PCMC / Pune
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">WhatsApp Booking</strong>
                    <span className="text-slate-500 text-xs block mb-1">Instant driver confirmation and car photos</span>
                    <a
                      href="https://wa.me/918530410233?text=Hi%20Ishwari%20Tours%20%26%20Travels%20(Ishwari%20Engineering%20%26%20Roadlines),%20I%20would%20like%20to%20inquire%20about%20booking%20a%20car%20on%20rent.%20Please%20share%20availability%20and%20rates."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:underline"
                    >
                      Chat on WhatsApp (+91 85304 10233)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Email & Corporate Bookings</strong>
                    <a href="mailto:ishwariengineeringsandroadlins@gmail.com" className="text-slate-600 hover:text-amber-800 block text-xs break-all">
                      ishwariengineeringsandroadlins@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-700" />
                <h3 className="font-serif font-bold text-slate-900">
                  Headquarters & Dispatch Office
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-xs">
                <strong>Ishwari Tours & Travels</strong><br />
                <span className="text-amber-800 font-medium">A Unit of Ishwari Engineering & Roadlines</span><br />
                Sector 24, Pradhikaran, Near Akurdi Railway Station,<br />
                PCMC, Pune - 411044, Maharashtra, India.
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=PCMC+Pune+Akurdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-800 hover:underline inline-flex items-center gap-1"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Booking Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-xl font-serif font-bold text-slate-900 mb-1">
                Request Cab Availability & Rate
              </h2>
              <p className="text-xs text-slate-500 mb-5">
                Fill this quick form and our dispatch coordinator will call or WhatsApp you within 5 minutes.
              </p>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    Enquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. We are matching a verified <strong>{car}</strong> for your journey from <strong>{pickup}</strong> to <strong>{drop}</strong>.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/918530410233?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat Immediately on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
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
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 85304 10233"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Pickup Location <span className="text-red-500">*</span>
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
                        Drop Location / Destination <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mumbai Airport, Shirdi, Goa"
                        value={drop}
                        onChange={(e) => setDrop(e.target.value)}
                        className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Car Preference
                      </label>
                      <select
                        value={car}
                        onChange={(e) => setCar(e.target.value)}
                        className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none font-semibold text-slate-900"
                      >
                        {FLEET.map((f) => (
                          <option key={f.id} value={f.name}>
                            {f.name} ({f.seats} Seater)
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
                        <option value="Outstation Round Trip">Outstation (Round Trip)</option>
                        <option value="Outstation One Way">Outstation (One-Way Drop)</option>
                        <option value="Airport Transfer">Airport Pick / Drop</option>
                        <option value="Local 8hr/80km">Local Rental (8hr / 80km)</option>
                        <option value="Corporate">Corporate / Monthly Lease</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Travel Date & Preferred Time
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 10 April 2026, 5:30 AM"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Special Requirements (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Extra luggage space, child seat, senior citizen travelling, flight number..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <Car className="w-4 h-4 text-amber-400" />
                      <span>Request Cab Confirmation</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp customMessage="Hi Ishwari Tours & Travels, I want to book a car on rent." />
    </div>
  );
}
