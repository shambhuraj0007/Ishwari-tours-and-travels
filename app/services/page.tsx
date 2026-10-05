import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomBar from '@/components/MobileBottomBar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { 
  Compass, 
  Plane, 
  Clock, 
  Sparkles, 
  Briefcase, 
  Heart, 
  CheckCircle2, 
  ArrowRight,
  Car,
  KeyRound,
  MessageCircle,
  Phone
} from 'lucide-react';
import { RENTAL_SERVICES } from '@/data/services';

export const metadata = {
  title: 'Car Rental Services | Self-Drive & Chauffeur Cabs | Ishwari Tours',
  description: 'Self-drive cars on rent (8hr, 12hr, 24hr basis), outstation cabs, airport drops, and corporate fleets with verified vehicles.'
};

export default function ServicesPage() {
  const iconMap: Record<string, any> = {
    KeyRound,
    Compass,
    Plane,
    Clock,
    Sparkles,
    Briefcase,
    Heart
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block mb-3">
            Car Rental Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
            Cars on Rent: Self-Drive & Chauffeur
          </h1>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Whether you want to drive yourself on an 8-hour, 12-hour, or 24-hour basis, or hire a chauffeur-driven outstation cab, we provide verified vehicles at transparent rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {RENTAL_SERVICES.map((srv) => {
            const Icon = iconMap[srv.icon] || Car;
            return (
              <div 
                key={srv.id}
                id={srv.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {srv.longDesc}
                  </p>

                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Service Highlights
                  </h4>
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
                  >
                    <span>Book {srv.title.split('(')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white text-center max-w-3xl mx-auto shadow-xl space-y-4">
          <KeyRound className="w-10 h-10 text-amber-400 mx-auto" />
          <h2 className="text-2xl font-serif font-bold text-white">
            Need a self-drive car delivered to your doorstep?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
            Book on 8-hour, 12-hour, or 24-hour packages. Just submit your Driving License and Aadhaar on WhatsApp for instant car delivery.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors"
            >
              Book Self-Drive Car
            </Link>
            <a
              href="https://wa.me/918530410233?text=Hi%20Ishwari%20Tours%20%26%20Travels%20(Ishwari%20Engineering%20%26%20Roadlines),%20I%20want%20to%20rent%20a%20car%20without%20driver%20(Self-Drive).%20Please%20share%20available%20models%20and%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us for Self-Drive</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp customMessage="Hi Ishwari Tours & Travels (Ishwari Engineering & Roadlines), I want to rent a car without driver." />
    </div>
  );
}
