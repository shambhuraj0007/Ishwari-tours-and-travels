'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Car, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  Wind,
  Users,
  Briefcase
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CabBookingWidget from '@/components/CabBookingWidget';
import CarCard from '@/components/CarCard';
import TrustSection from '@/components/TrustSection';
import QuoteModal from '@/components/QuoteModal';
import { FLEET, CarRental } from '@/data/cars';
import { POPULAR_ROUTES } from '@/data/routes';
import { RENTAL_REVIEWS } from '@/data/reviews';

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCarForModal, setSelectedCarForModal] = useState<CarRental | null>(null);

  const handleBookCar = (car: CarRental) => {
    setSelectedCarForModal(car);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION WITH INSTANT CAB BOOKING WIDGET */}
        {/* ========================================================================= */}
        <section className="relative bg-slate-950 text-white pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
          {/* Subtle Car/Highway Background Image */}
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=80"
            alt="Highway car travel"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
                <Car className="w-3.5 h-3.5 text-amber-400" />
                <span>Ishwari Tours & Travels • A Unit of Ishwari Engineering & Roadlines</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight mb-4">
                Your reliable car rental partner, wherever you travel.
              </h1>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
                Outstation cabs, 24/7 airport drops, and local hourly rentals. We bridge you with verified, sanitized vehicles and polite chauffeurs at transparent per-km rates.
              </p>

              {/* Quick Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  On-Time Pickup Guarantee
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Transparent Per-KM Fares
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Sanitized AC Fleet
                </span>
              </div>
            </div>

            {/* Instant Booking Widget Overlay */}
            <div className="max-w-4xl mx-auto">
              <CabBookingWidget />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* HOW OUR CAR RENTAL SERVICE WORKS */}
        {/* ========================================================================= */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-1.5">
                Simple & Reliable
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                How Renting a Car with Ishwari Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center mx-auto sm:mx-0">
                  1
                </span>
                <h3 className="font-serif font-bold text-sm text-slate-900">Choose Route & Car</h3>
                <p className="text-xs text-slate-600">
                  Pick your pickup point, drop location, travel date, and preferred car category.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center mx-auto sm:mx-0">
                  2
                </span>
                <h3 className="font-serif font-bold text-sm text-slate-900">Instant Transparent Quote</h3>
                <p className="text-xs text-slate-600">
                  We give you upfront per-km pricing, minimum km calculation, and toll guidelines with zero hidden fees.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center mx-auto sm:mx-0">
                  3
                </span>
                <h3 className="font-serif font-bold text-sm text-slate-900">Verified Chauffeur Dispatch</h3>
                <p className="text-xs text-slate-600">
                  We assign a commercially licensed, sanitized car with driver details sent to your WhatsApp in advance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center mx-auto sm:mx-0">
                  4
                </span>
                <h3 className="font-serif font-bold text-sm text-slate-900">Comfortable Safe Travel</h3>
                <p className="text-xs text-slate-600">
                  Doorstep pickup on time. Pay easily via UPI or cash upon completion of your journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* POPULAR FLEET SECTION */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-1.5">
                Our Fleet
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Cars Available on Rent
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Sedans, SUVs, Premium Innova Crysta, and Tempo Travellers for every group size.
              </p>
            </div>

            <Link
              href="/fleet"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-900"
            >
              <span>View full fleet specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET.slice(0, 6).map((car) => (
              <CarCard key={car.id} car={car} onBookNow={handleBookCar} />
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* POPULAR ROUTES & ESTIMATED FARES */}
        {/* ========================================================================= */}
        <section className="py-14 bg-amber-50/50 border-y border-amber-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-800 bg-white px-3 py-1 rounded-full border border-amber-200 inline-block mb-1.5">
                  Best Rates
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                  Popular Outstation & Airport Routes
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Fixed transparent fares for high-demand corridors.
                </p>
              </div>

              <Link
                href="/routes"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-900"
              >
                <span>View all routes & fares</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {POPULAR_ROUTES.slice(0, 4).map((r) => (
                <div
                  key={r.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 uppercase block mb-1">
                      {r.popularType}
                    </span>
                    <h3 className="font-serif font-bold text-sm text-slate-900 mb-1 leading-snug">
                      {r.source} → {r.destination}
                    </h3>
                    <span className="text-xs text-slate-500 block mb-3">
                      ~{r.distanceKm} km • {r.durationApprox}
                    </span>

                    <div className="space-y-1 text-xs border-t border-slate-100 pt-2 mb-3">
                      <div className="flex justify-between text-slate-600">
                        <span>Sedan (Dzire):</span>
                        <strong className="text-slate-900">₹{r.sedanFareOneWay}</strong>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>SUV (Ertiga):</span>
                        <strong className="text-slate-900">₹{r.ertigaFareOneWay}</strong>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Innova Crysta:</span>
                        <strong className="text-amber-900">₹{r.innovaFareOneWay}</strong>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCarForModal(FLEET[0]);
                      setQuoteModalOpen(true);
                    }}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-white text-xs font-semibold text-center transition-colors"
                  >
                    Book This Route
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TRUST SECTION */}
        {/* ========================================================================= */}
        <TrustSection />

        {/* ========================================================================= */}
        {/* CUSTOMER REVIEWS */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-1.5">
              Verified Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              What Our Passengers Say
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Real reviews from families, airport commuters, and corporate teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {RENTAL_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <strong className="text-xs font-bold text-slate-900 block">
                    {rev.name}
                  </strong>
                  <span className="text-[11px] text-amber-800 font-semibold block">
                    {rev.carBooked} • {rev.city}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {rev.route}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FINAL CONVERSION BANNER */}
        {/* ========================================================================= */}
        <section className="py-14 bg-slate-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Need a cab right now or planning a weekend getaway?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Call our booking desk directly or message us on WhatsApp. We provide instant driver assignment and vehicle confirmation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="tel:+918530410233"
                className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 85304 10233</span>
              </a>

              <a
                href="https://wa.me/918530410233?text=Hi%20Ishwari%20Tours%20%26%20Travels%20(Ishwari%20Engineering%20%26%20Roadlines),%20I%20would%20like%20to%20inquire%20about%20booking%20a%20car%20on%20rent.%20Please%20share%20availability%20and%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp customMessage="Hi Ishwari Tours & Travels (Ishwari Engineering & Roadlines), I would like to book a car on rent. Please share availability." />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultCarName={selectedCarForModal?.name}
      />
    </div>
  );
}
