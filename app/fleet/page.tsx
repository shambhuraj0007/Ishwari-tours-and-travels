'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CarCard from '@/components/CarCard';
import QuoteModal from '@/components/QuoteModal';
import { FLEET, CarRental } from '@/data/cars';
import { KeyRound, ShieldCheck, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

export default function FleetPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeCarForQuote, setActiveCarForQuote] = useState<CarRental | null>(null);

  const filters = [
    'All',
    'Self-Drive (Without Driver)',
    'Hatchback',
    'Sedan',
    'SUV',
    'Premium SUV',
    'Tempo Traveller'
  ];

  const filteredFleet = FLEET.filter((car) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Self-Drive (Without Driver)') return car.selfDriveAvailable;
    return car.category === selectedFilter;
  });

  const handleBookNow = (car: CarRental) => {
    setActiveCarForQuote(car);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
            Fleet & Pricing Guide
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Cars on Rent: Self-Drive & Chauffeur
          </h1>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Rent cars without driver on an <strong>8-Hour, 12-Hour, or 24-Hour basis</strong>, or hire sanitized chauffeur-driven cabs for outstation and airport travel.
          </p>
        </div>

        {/* Self-Drive Callout Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-400/40 mb-8 max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
              <KeyRound className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <strong className="text-slate-900 font-bold block text-sm">
                Cars Without Driver (Self-Drive)
              </strong>
              <span className="text-slate-600">
                Rent on 8hr, 12hr, or 24hr basis with minimal documents: Driving License + Aadhaar Card.
              </span>
            </div>
          </div>
          <button
            onClick={() => setSelectedFilter('Self-Drive (Without Driver)')}
            className="py-2 px-3 rounded-lg bg-slate-900 text-amber-400 hover:text-white text-xs font-bold shrink-0 transition-colors"
          >
            View Self-Drive Cars
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((flt) => (
            <button
              key={flt}
              onClick={() => setSelectedFilter(flt)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedFilter === flt
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {flt}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredFleet.map((car) => (
            <CarCard key={car.id} car={car} onBookNow={handleBookNow} />
          ))}
        </div>

        {/* Transparent Terms */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs max-w-4xl mx-auto">
          <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-700" />
            Rental Rules & Security Deposit Policy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block font-semibold">Self-Drive Hours & Return</strong>
              <p>Rentals start from handover time. Available on 8 Hours, 12 Hours, or 24 Hours / Daily basis. Late returns billed hourly.</p>
            </div>
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block font-semibold">Self-Drive Security Deposit</strong>
              <p>Refundable security deposit (₹3,000 for Hatchbacks, ₹5,000 for Ertiga, ₹8,000 for Thar/Innova) returned immediately upon vehicle inspection.</p>
            </div>
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block font-semibold">Fuel & Fastag</strong>
              <p>Cars are handed over with a noted fuel level and must be returned with the same level. Fastag tolls are deducted from the deposit or billed at actuals.</p>
            </div>
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block font-semibold">With-Driver Outstation Rules</strong>
              <p>For chauffeur trips, outstation minimum is 300 km/day. Driver allowance applies after 10:00 PM.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp customMessage="Hi Ishwari Tours & Travels, I want to rent a car." />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultCarName={activeCarForQuote?.name}
      />
    </div>
  );
}
