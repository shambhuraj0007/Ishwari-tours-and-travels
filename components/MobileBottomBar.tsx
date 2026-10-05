'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Car, Compass, MessageCircle, Phone, Home } from 'lucide-react';

export default function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around shadow-xl">
      <Link
        href="/"
        className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
          pathname === '/' ? 'text-amber-800 font-bold' : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </Link>

      <Link
        href="/fleet"
        className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
          pathname === '/fleet' ? 'text-amber-800 font-bold' : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        <Car className="w-5 h-5" />
        <span>Fleet & Rates</span>
      </Link>

      <a
        href="https://wa.me/919822054123?text=Hi%20Ishwari%20Tours%20%26%20Travels,%20I%20need%20a%20car%20on%20rent."
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 text-[10px] font-medium text-emerald-700 hover:text-emerald-800"
      >
        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center -mt-2 shadow-md">
          <MessageCircle className="w-4 h-4" />
        </div>
        <span>WhatsApp</span>
      </a>

      <a
        href="tel:+919822054123"
        className="flex flex-col items-center gap-0.5 text-[10px] font-medium text-slate-700 hover:text-slate-900"
      >
        <Phone className="w-5 h-5 text-amber-700" />
        <span>Call</span>
      </a>
    </div>
  );
}
