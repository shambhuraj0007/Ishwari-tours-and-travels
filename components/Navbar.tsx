'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  MessageCircle, 
  Car, 
  Menu, 
  X, 
  MapPin,
  CalendarCheck
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Fleet & Rates', href: '/fleet' },
    { label: 'Popular Routes', href: '/routes' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-amber-400 font-semibold">Ishwari Engineering & Roadlines</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">Tours & Travels • Self-Drive & Chauffeur Fleet</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:+918530410233" 
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 85304 10233</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">
              HQ: PCMC/Pune, Maharashtra
            </span>
            <Link 
              href="/admin" 
              className="text-slate-400 hover:text-white transition-colors text-[11px]"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center p-1 group-hover:border-amber-400 transition-colors shrink-0">
            <Image
              src="/apple-touch-icon.png"
              alt="Ishwari Tours & Travels Logo"
              width={44}
              height={44}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif font-black text-lg sm:text-xl text-slate-950 tracking-tight leading-none group-hover:text-amber-700 transition-colors">
                ISHWARI
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold text-amber-700">
                Tours & Travels
              </span>
            </div>
            <span className="text-[9px] text-slate-500 font-medium tracking-tight">
              Ishwari Engineering & Roadlines
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive 
                    ? 'text-amber-800 bg-amber-50 font-semibold' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://wa.me/918530410233?text=Hi%20Ishwari%20Tours%20%26%20Travels%20(Ishwari%20Engineering%20%26%20Roadlines),%20I%20would%20like%20to%20inquire%20about%20booking%20a%20car%20on%20rent.%20Please%20share%20availability%20and%20rates."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-medium text-xs sm:text-sm border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-amber-400 hover:text-white hover:bg-slate-800 font-semibold text-xs sm:text-sm shadow-xs transition-colors"
          >
            <Car className="w-4 h-4" />
            <span>Book Cab Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-amber-50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-amber-400 text-center font-bold text-sm flex items-center justify-center gap-2"
            >
              <Car className="w-4 h-4" />
              <span>Book a Car on Rent</span>
            </Link>

            <a
              href="https://wa.me/918530410233?text=Hi%20Ishwari%20Tours%20%26%20Travels%20(Ishwari%20Engineering%20%26%20Roadlines),%20I%20would%20like%20to%20inquire%20about%20booking%20a%20car%20on%20rent.%20Please%20share%20availability%20and%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 text-white text-center font-medium text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Booking</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
