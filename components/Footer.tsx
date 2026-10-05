import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Car, 
  ShieldCheck, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { FLEET } from '@/data/cars';
import { POPULAR_ROUTES } from '@/data/routes';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 border-b border-slate-800 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Car className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-0.5">Verified Car Rentals</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Sedans, SUVs, Innova Crysta, Fortuner & Tempo Travellers arranged directly with verified operators.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-0.5">24/7 Airport Drops</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Reliable doorstep pickups for Pune Airport and Mumbai Airport (T1/T2) transfers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-0.5">Transparent Per-Km Billing</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Clear minimum-km terms, standard driver night allowance, and zero hidden charges.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-slate-800 text-xs">
          {/* Brand & PCMC HQ Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-xs">
                <Image
                  src="/apple-touch-icon.png"
                  alt="Ishwari Tours & Travels Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-sm text-white tracking-tight leading-none">
                  ISHWARI TOURS & TRAVELS
                </span>
                <span className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase mt-1">
                  A Unit of Ishwari Engineering & Roadlines
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Powered by the transport logistics and fleet management expertise of <strong>Ishwari Engineering & Roadlines</strong>. Your trusted car rental partner providing sanitized self-drive cars, outstation cabs, and airport transfers with verified drivers across Maharashtra and India.
            </p>

            <div className="pt-2 space-y-1.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Sector 24, Pradhikaran, Near Akurdi Station, PCMC, Pune - 411044, Maharashtra.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+918530410233" className="hover:text-amber-400 font-semibold text-white">+91 85304 10233</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:ishwariengineeringsandroadlins@gmail.com" className="hover:text-amber-400 break-all">
                  ishwariengineeringsandroadlins@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Fleet Categories */}
          <div>
            <h5 className="text-white font-semibold uppercase tracking-wider mb-3 text-amber-400">
              Our Car Fleet
            </h5>
            <ul className="space-y-2">
              {FLEET.map((car) => (
                <li key={car.id}>
                  <Link href="/fleet" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>{car.name}</span>
                    <span className="text-slate-500 font-mono text-[11px]">₹{car.ratePerKm}/km</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h5 className="text-white font-semibold uppercase tracking-wider mb-3 text-amber-400">
              Popular Cab Routes
            </h5>
            <ul className="space-y-2">
              {POPULAR_ROUTES.slice(0, 5).map((rt) => (
                <li key={rt.id}>
                  <Link href="/routes" className="hover:text-white transition-colors block">
                    <span className="text-slate-300 block">{rt.source} → {rt.destination}</span>
                    <span className="text-slate-500 text-[10px]">Starting ₹{rt.sedanFareOneWay}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Services */}
          <div>
            <h5 className="text-white font-semibold uppercase tracking-wider mb-3 text-amber-400">
              Rental Services
            </h5>
            <ul className="space-y-2 mb-4">
              <li><Link href="/services" className="hover:text-white transition-colors">Outstation Cabs (One-Way / Round)</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Mumbai & Pune Airport Transfers</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Local Hourly Rental (8hr / 80km)</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Corporate Travel & Employee Cabs</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Wedding & Group Fleet Booking</Link></li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
            >
              <span>Book a cab online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ishwari Tours & Travels • Ishwari Engineering & Roadlines. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Operating from PCMC/Pune, Maharashtra • Serving Outstation & Local Travel</span>
            <span>•</span>
            <Link href="/admin" className="text-slate-500 hover:text-slate-300">
              Admin CRM
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
