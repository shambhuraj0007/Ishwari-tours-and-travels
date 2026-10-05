import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Wallet, 
  Car, 
  Headphones 
} from 'lucide-react';

export default function TrustSection() {
  const differentiators = [
    {
      icon: ShieldCheck,
      title: 'Verified Cars & Clean Interiors',
      desc: 'All vehicles in our network are commercially registered, mechanically checked, and sanitized with clean seat covers.'
    },
    {
      icon: Clock,
      title: 'On-Time Doorstep Pickup',
      desc: 'We understand the urgency of catching early flights and crucial meetings. Chauffeurs arrive 15 minutes before scheduled departure.'
    },
    {
      icon: Wallet,
      title: 'Transparent Per-KM Pricing',
      desc: 'Clear upfront pricing with no unexpected driver surcharges. Tolls and parking receipts shared transparently at actuals.'
    },
    {
      icon: MapPin,
      title: 'One-Way Outstation Drops',
      desc: 'Travel between Pune, PCMC, Mumbai, Shirdi, Nashik, and key towns without paying unfair round-trip return charges on select corridors.'
    },
    {
      icon: Car,
      title: 'Experienced Highway Drivers',
      desc: 'Seasoned, polite, and verified chauffeurs trained for safe navigation on the Mumbai-Pune Expressway and Western Ghats.'
    },
    {
      icon: Headphones,
      title: '24/7 Dedicated Support',
      desc: 'As your trusted car rental middle person, our desk manages vehicle coordination, driver replacement if needed, and on-trip assistance.'
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-block mb-2">
            Why Rent With Ishwari
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Safe, Transparent & Reliable Car Rentals
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
            We partner with verified vehicle owners and top-tier drivers to deliver stress-free travel for families, business executives, and groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-[#faf8f5]/40 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3 group-hover:bg-slate-900 group-hover:text-amber-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
