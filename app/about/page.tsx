import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { ShieldCheck, Car, Clock, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us | Ishwari Tours & Travels Car Rentals',
  description: 'Your reliable car rental middleman and cab booking partner. We bridge customers with verified vehicle owners and polite chauffeurs across Maharashtra.'
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16 w-full space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
            About Ishwari
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Your Trusted Car Rental Partner
          </h1>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            We provide cars on rent by connecting you directly with verified vehicles, professional chauffeurs, and reliable fleet owners.
          </p>
        </div>

        {/* The Middleman Advantage */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex justify-center pb-2">
            <div className="max-w-xs sm:max-w-sm rounded-2xl overflow-hidden p-3 bg-white border border-slate-200 shadow-xs">
              <Image 
                src="/logo.png" 
                alt="Ishwari Tours & Travels Official Logo" 
                width={400} 
                height={212} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
            Why Book Through Ishwari?
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Finding a clean, reliable car on rent with a trustworthy driver can often be unpredictable. Dealing directly with random operators risks last-minute cancellations, non-functional air conditioning, or surprise price hikes at the end of the trip.
          </p>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            As a professional <strong>car rental provider and coordinator</strong>, Ishwari acts as your trusted middle person. We curate, inspect, and maintain strong partnerships with experienced vehicle owners and commercial drivers across Maharashtra. When you book with us, we take full responsibility for vehicle condition, driver punctuality, and transparent billing.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <ShieldCheck className="w-8 h-8 text-amber-700" />
            <h3 className="font-serif font-bold text-base text-slate-900">Verified Fleet</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every car (Dzire, Ertiga, Innova Crysta, Tempo Traveller) is commercially registered, mechanically checked, and sanitized.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <Clock className="w-8 h-8 text-amber-700" />
            <h3 className="font-serif font-bold text-base text-slate-900">Guaranteed Punctuality</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Chauffeurs are dispatched with buffer time, reaching your doorstep 15 minutes before scheduled departure for zero flight panic.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <Car className="w-8 h-8 text-amber-700" />
            <h3 className="font-serif font-bold text-base text-slate-900">Replacement Guarantee</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In the rare event of a breakdown or unexpected delay, our desk immediately arranges an equivalent replacement vehicle.
            </p>
          </div>
        </div>

        {/* Corporate Foundation: Ishwari Engineering & Roadlines */}
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 text-white shadow-xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold">
            <span>Corporate Foundation</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Ishwari Tours & Travels — A Unit of Ishwari Engineering & Roadlines
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
            Ishwari Tours & Travels operates under the corporate umbrella of <strong>Ishwari Engineering & Roadlines</strong>. Decades of specialized experience in commercial road transit, engineering maintenance standards, and fleet coordination power our customer car rental services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-amber-400 font-bold block text-sm mb-1">Engineering Discipline</span>
              <p className="text-slate-400 leading-relaxed">Rigorous mechanical inspections, tire health audits, and preventative maintenance before every highway assignment.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-amber-400 font-bold block text-sm mb-1">Roadlines Heritage</span>
              <p className="text-slate-400 leading-relaxed">Extensive intercity network, express logistics knowledge, and seasoned drivers trained on all major highways and Western Ghats.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-amber-400 font-bold block text-sm mb-1">24/7 Operations Desk</span>
              <p className="text-slate-400 leading-relaxed">Centralized dispatch office in PCMC/Pune ensuring on-time airport dropoffs, self-drive handovers, and emergency backup.</p>
            </div>
          </div>
        </div>

        {/* Office & Operations */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block">
            Operational Headquarters
          </span>
          <h3 className="text-xl font-serif font-bold text-slate-900">
            PCMC / Pune, Maharashtra
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
            Our central office is located at <strong>Sector 24, Pradhikaran, PCMC (Pune)</strong>. From here, our dispatch desk operates round-the-clock, managing cabs for city runs, airport transfers to Mumbai & Pune airports, self-drive rentals, and long outstation trips across India.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-2">
          <Link
            href="/contact"
            className="py-3 px-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg transition-colors"
          >
            <span>Book Your Car with Ishwari</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp customMessage="Hi Ishwari Tours & Travels, I want to rent a car." />
    </div>
  );
}
