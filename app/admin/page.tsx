'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Car, 
  Search, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Calendar,
  AlertCircle
} from 'lucide-react';
import { INITIAL_CAB_BOOKINGS, CabBookingLead, BookingStatus } from '@/data/leads';
import { FLEET } from '@/data/cars';

export default function AdminPage() {
  const [bookings, setBookings] = useState<CabBookingLead[]>(INITIAL_CAB_BOOKINGS);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ishwari_cab_bookings');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const existingIds = new Set(parsed.map(p => p.id));
          const remaining = INITIAL_CAB_BOOKINGS.filter(b => !existingIds.has(b.id));
          setBookings([...parsed, ...remaining]);
          return;
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleStatusChange = (bookingId: string, newStatus: BookingStatus) => {
    const updated = bookings.map(b => b.id === bookingId ? { ...b, status: newStatus } : b);
    setBookings(updated);
    try {
      localStorage.setItem('ishwari_cab_bookings', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const bookingStatuses: BookingStatus[] = [
    'New',
    'Driver Assigned',
    'Quotation Sent',
    'Confirmed',
    'Trip Completed',
    'Cancelled'
  ];

  const statusColorMap: Record<BookingStatus, string> = {
    'New': 'bg-blue-100 text-blue-800 border-blue-200',
    'Driver Assigned': 'bg-purple-100 text-purple-800 border-purple-200 font-semibold',
    'Quotation Sent': 'bg-amber-100 text-amber-800 border-amber-200',
    'Confirmed': 'bg-emerald-100 text-emerald-800 border-emerald-200 font-bold',
    'Trip Completed': 'bg-slate-100 text-slate-700 border-slate-200',
    'Cancelled': 'bg-rose-100 text-rose-700 border-rose-200'
  };

  const filteredBookings = bookings.filter(b => {
    if (statusFilter !== 'All' && b.status !== statusFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = b.customerName.toLowerCase().includes(q);
      const matchPickup = b.pickupLocation.toLowerCase().includes(q);
      const matchDrop = b.dropLocation.toLowerCase().includes(q);
      const matchCar = b.carPreference.toLowerCase().includes(q);
      const matchId = b.id.toLowerCase().includes(q);
      if (!matchName && !matchPickup && !matchDrop && !matchCar && !matchId) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col text-xs">
      {/* Admin Top Header */}
      <header className="bg-slate-900 text-white px-6 py-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-xs">
            <Image
              src="/apple-touch-icon.png"
              alt="Ishwari Tours & Travels"
              width={36}
              height={36}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="font-serif font-bold text-sm sm:text-base text-white tracking-tight">
              Ishwari Tours & Travels — Dispatch Desk
            </h1>
            <span className="text-[10px] text-amber-400 uppercase tracking-wider block">
              Ishwari Engineering & Roadlines • Fleet CRM
            </span>
          </div>
        </div>

        <Link
          href="/"
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          ← Live Website
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                Total Cab Bookings
              </span>
              <span className="text-xl font-bold font-serif text-slate-900 mt-0.5 block">
                {bookings.length}
              </span>
            </div>
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Car className="w-4 h-4" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                Pending Dispatch
              </span>
              <span className="text-xl font-bold font-serif text-amber-700 mt-0.5 block">
                {bookings.filter(b => b.status === 'New').length}
              </span>
            </div>
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                Driver Assigned
              </span>
              <span className="text-xl font-bold font-serif text-purple-700 mt-0.5 block">
                {bookings.filter(b => b.status === 'Driver Assigned').length}
              </span>
            </div>
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                Confirmed Trips
              </span>
              <span className="text-xl font-bold font-serif text-emerald-700 mt-0.5 block">
                {bookings.filter(b => b.status === 'Confirmed').length}
              </span>
            </div>
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by customer name, phone, pickup, drop, car, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="font-medium border border-slate-300 rounded-xl p-2 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="All">All Statuses ({bookings.length})</option>
              {bookingStatuses.map((st) => (
                <option key={st} value={st}>
                  {st} ({bookings.filter(b => b.status === st).length})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">Booking ID</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Route (Pickup → Drop)</th>
                  <th className="px-4 py-3">Trip Type</th>
                  <th className="px-4 py-3">Vehicle</th>
                  <th className="px-4 py-3">Date & Time</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-4 py-3 font-mono font-bold text-slate-900">
                      {b.id}
                    </td>
                    <td className="px-4 py-3">
                      <strong className="text-slate-900 block font-semibold">{b.customerName}</strong>
                      <a href={`tel:${b.phone}`} className="text-slate-500 hover:text-amber-800">
                        {b.phone}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 font-semibold text-slate-800">
                        <span>{b.pickupLocation}</span>
                        <span>→</span>
                        <span className="text-amber-900">{b.dropLocation}</span>
                      </div>
                      {b.specialRequests && (
                        <span className="text-[10px] text-slate-400 block truncate max-w-xs italic">
                          Note: {b.specialRequests}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-medium border border-slate-200">
                        {b.tripType}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {b.carPreference}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      <span className="block font-semibold">{b.travelDate}</span>
                      <span className="text-[10px] text-slate-400">{b.travelTime}</span>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={b.status}
                        onChange={(e) => handleStatusChange(b.id, e.target.value as BookingStatus)}
                        className={`text-[11px] font-semibold px-2 py-1 rounded-md border focus:outline-none ${
                          statusColorMap[b.status] || 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {bookingStatuses.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <a
                        href={`https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(b.customerName)},%20this%20is%20Ishwari%20Tours%20%26%20Travels%20(Ishwari%20Engineering%20%26%20Roadlines)%20regarding%20your%20car%20rental%20for%20${encodeURIComponent(b.carPreference)}%20(${encodeURIComponent(b.pickupLocation)}%20to%20${encodeURIComponent(b.dropLocation)}).%20Please%20let%20us%20know%20if%20you%20have%20any%20questions.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 inline-flex items-center gap-1"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline text-[11px]">Chat</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
