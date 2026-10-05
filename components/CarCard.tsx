'use client';

import React from 'react';
import { Users, Briefcase, Wind, Check, MessageCircle, KeyRound, UserCheck } from 'lucide-react';
import { CarRental } from '@/data/cars';

interface CarCardProps {
  car: CarRental;
  onBookNow?: (car: CarRental) => void;
}

export default function CarCard({ car, onBookNow }: CarCardProps) {
  const whatsappMsg = encodeURIComponent(
    `*Car Rental Inquiry*\n` +
    `*Company:* Ishwari Tours & Travels (Ishwari Engineering & Roadlines)\n\n` +
    `Hello, I would like to check availability for renting the *${car.name}* (${car.category}).\n` +
    `• Seating: ${car.seats} Seater | Luggage: ${car.luggage} Bags | AC: Yes\n` +
    `${car.selfDriveAvailable ? `• Self-Drive Package: 8hr (₹${car.selfDrive8hr}), 12hr (₹${car.selfDrive12hr}) or 24hr (₹${car.selfDrive24hr})\n` : ''}` +
    `• Chauffeur Rate: ₹${car.ratePerKm}/km\n\n` +
    `Please share vehicle availability, pickup schedule, and booking confirmation.`
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Car Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="bg-slate-900/80 backdrop-blur-xs text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-md">
            {car.category}
          </span>
          {car.selfDriveAvailable && (
            <span className="bg-emerald-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
              <KeyRound className="w-3 h-3" />
              Self-Drive Available
            </span>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 mb-1">
            {car.name}
          </h3>
          <p className="text-slate-500 text-xs mb-3 line-clamp-1">
            {car.popularFor}
          </p>

          {/* Quick Specs */}
          <div className="flex items-center gap-3 text-xs text-slate-600 mb-3 pb-3 border-b border-slate-100">
            <span className="flex items-center gap-1 font-medium">
              <Users className="w-3.5 h-3.5 text-amber-700" />
              {car.seats} Seats
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-medium">
              <Briefcase className="w-3.5 h-3.5 text-amber-700" />
              {car.luggage} Bags
            </span>
            <span>•</span>
            <span className="text-slate-700 font-medium">
              {car.transmission}
            </span>
          </div>

          {/* Self-Drive Without Driver Pricing Matrix */}
          {car.selfDriveAvailable && (
            <div className="bg-amber-50/70 rounded-xl p-2.5 border border-amber-200/80 mb-3">
              <div className="flex items-center justify-between text-[11px] font-bold text-amber-950 mb-1.5">
                <span className="flex items-center gap-1">
                  <KeyRound className="w-3 h-3 text-amber-700" />
                  Self-Drive (Without Driver):
                </span>
                <span className="text-[10px] text-amber-700 font-normal">Dep: ₹{car.securityDeposit}</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-center">
                <div className="bg-white/80 p-1 rounded border border-amber-100">
                  <span className="text-[9px] text-slate-400 block uppercase">8 Hours</span>
                  <strong className="text-xs text-slate-900 font-bold">₹{car.selfDrive8hr.toLocaleString('en-IN')}</strong>
                </div>
                <div className="bg-white/80 p-1 rounded border border-amber-100">
                  <span className="text-[9px] text-slate-400 block uppercase">12 Hours</span>
                  <strong className="text-xs text-slate-900 font-bold">₹{car.selfDrive12hr.toLocaleString('en-IN')}</strong>
                </div>
                <div className="bg-white/80 p-1 rounded border border-amber-100">
                  <span className="text-[9px] text-slate-400 block uppercase">24 Hours</span>
                  <strong className="text-xs text-amber-900 font-bold">₹{car.selfDrive24hr.toLocaleString('en-IN')}</strong>
                </div>
              </div>
            </div>
          )}

          {/* With Chauffeur Rate */}
          <div className="flex items-center justify-between text-xs text-slate-600 mb-4 px-1">
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <UserCheck className="w-3.5 h-3.5 text-slate-400" />
              With Chauffeur:
            </span>
            <span>
              <strong className="text-slate-900 font-bold">₹{car.ratePerKm}/km</strong> (Outstation)
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
          <button
            onClick={() => onBookNow ? onBookNow(car) : null}
            className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-white text-xs font-semibold text-center transition-colors shadow-xs"
          >
            Rent This Car
          </button>

          <a
            href={`https://wa.me/918530410233?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
