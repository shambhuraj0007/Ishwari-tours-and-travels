'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  customMessage?: string;
}

export default function FloatingWhatsApp({ customMessage }: FloatingWhatsAppProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMsg = customMessage || "Hi Ishwari Tours & Travels (Ishwari Engineering & Roadlines), I would like to inquire about booking a car on rent. Please share availability and rates.";
  const encodedMsg = encodeURIComponent(defaultMsg);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="bg-slate-900 text-white text-xs py-2 px-3 rounded-lg shadow-xl max-w-xs flex items-center justify-between gap-3 animate-fade-in border border-slate-700">
          <span>Chat with our 24/7 Car Rental Dispatch Desk</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/918530410233?text=${encodedMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all group"
        aria-label="Chat with Ishwari Tours on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
}
