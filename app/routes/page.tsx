'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import QuoteModal from '@/components/QuoteModal';
import { POPULAR_ROUTES, RentalRoute } from '@/data/routes';
import { MapPin, Clock, ArrowRight, Car, MessageCircle, Phone } from 'lucide-react';

export default function RoutesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<RentalRoute | null>(null);

  const handleBookRoute = (route: RentalRoute) => {
    setSelectedRoute(route);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
            Popular Cab Corridors & Fares
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Outstation & Airport Cab Routes
          </h1>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Transparent one-way and round-trip fares for popular intercity routes across Pune, Mumbai, Shirdi, Mahabaleshwar, Goa, and Nashik.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {route.popularType} Route
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {route.durationApprox}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{route.source}</span>
                    <span className="text-[11px] text-slate-400">Pickup</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-600 shrink-0 mx-2" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">{route.destination}</span>
                    <span className="text-[11px] text-slate-400">Drop (~{route.distanceKm} km)</span>
                  </div>
                </div>

                {/* Fare Matrix */}
                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-center mb-3">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Sedan (Dzire)</span>
                    <span className="text-sm font-bold text-slate-900">₹{route.sedanFareOneWay.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">SUV (Ertiga)</span>
                    <span className="text-sm font-bold text-slate-900">₹{route.ertigaFareOneWay.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Innova Crysta</span>
                    <span className="text-sm font-bold text-amber-900">₹{route.innovaFareOneWay.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 italic mb-4">
                  * {route.tollNote}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleBookRoute(route)}
                  className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-white font-bold text-xs flex-1 transition-colors text-center"
                >
                  Book Cab for This Route
                </button>

                <a
                  href={`https://wa.me/919822054123?text=${encodeURIComponent(`Hi Ishwari Tours, I want to book a cab from ${route.source} to ${route.destination}. Please share car availability and confirmation.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Outstation Enquiry Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center max-w-3xl mx-auto shadow-xl space-y-4">
          <Car className="w-10 h-10 text-amber-400 mx-auto" />
          <h2 className="text-2xl font-serif font-bold text-white">
            Need a cab for a route not listed above?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
            We provide car rentals for any destination in Maharashtra, Karnataka, Gujarat, and pan-India. Contact us for an immediate per-km quotation.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors"
            >
              Request Custom Route Quote
            </Link>
            <a
              href="tel:+919822054123"
              className="py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call +91 98220 54123</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp customMessage="Hi Ishwari Tours & Travels, I want to book an outstation cab." />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultPickup={selectedRoute?.source}
        defaultDrop={selectedRoute?.destination}
      />
    </div>
  );
}
