"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ChevronLeft, MapPin, Star, Heart, Share, Play, 
  CheckCircle2, XCircle, Calendar, Users, Phone, MessageCircle,
  ChevronDown, Plane, Bed, Ship, Utensils, Car, Ticket, Camera
} from 'lucide-react';
import { ALL_PACKAGES } from '@/constants/data';

export default function PackageDetails() {
  const { id } = useParams();
  const router = useRouter();
  const pkg = ALL_PACKAGES.find(p => p.id === Number(id));

  const [liked, setLiked] = useState(false);
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});

  if (!pkg) return <div className="text-white p-5">Package not found</div>;

  const toggleDayAccordion = (dayKey: string, isExpanded: boolean) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayKey]: !isExpanded
    }));
  };

  const getCtaText = (type: string) => {
    if (type === 'Ready-Made') return 'Book Now';
    if (type === 'Semi-Custom') return 'Customize Package';
    return 'Plan My Trip';
  };

  return (
    <div className="min-h-screen bg-black text-white pb-[100px] relative font-sans md:max-w-[1000px] md:mx-auto md:border-x md:border-neutral-800">
      {/* Sticky Top Nav */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#222] md:max-w-[1000px] md:left-1/2 md:-translate-x-1/2">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => router.back()} className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:bg-[#222] transition-colors">
            <ChevronLeft size={20} className="text-white" />
          </button>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:bg-[#222] transition-colors">
              <Share size={18} className="text-white" />
            </button>
            <button onClick={() => setLiked(!liked)} className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center cursor-pointer hover:bg-[#222] transition-colors">
              <Heart size={18} fill={liked ? "#ffffff" : "transparent"} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Gallery Slider */}
      <div className="w-full h-[350px] relative group/slider pt-[64px]">
        <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {pkg.gallery?.map((imgUrl, iIdx) => (
            <div key={iIdx} className="w-full h-full flex-shrink-0 snap-center relative">
              <img src={imgUrl} alt={`${pkg.title} - Image ${iIdx + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 pointer-events-none"></div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
          {pkg.gallery?.map((_, iIdx) => (
            <div key={iIdx} className="w-1.5 h-1.5 rounded-full bg-white/50 shadow-md"></div>
          ))}
        </div>
      </div>

      <div className="px-5 pt-5 pb-8 flex flex-col gap-8">
        {/* Package Summary */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold border border-white/20 text-white">
              {pkg.type}
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold bg-[#ffb400]/10 text-[#ffb400] px-2 py-1 rounded-lg">
              <Star size={11} fill="#ffb400" /> {pkg.rating}
            </div>
          </div>
          <h1 className="text-[22px] font-extrabold m-0 leading-tight mb-2.5">{pkg.title}</h1>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-3 text-[13px] text-neutral-400 font-semibold">
              <span className="flex items-center gap-1.5"><MapPin size={14} /> {pkg.loc}</span>
              <span>•</span>
              <span>{pkg.duration}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold mb-0.5">Starting from</span>
              <span className="text-[18px] font-extrabold text-white leading-none">{pkg.price}</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div>
          <h3 className="text-[15px] font-bold mb-2.5">Overview</h3>
          <p className="text-[13px] text-neutral-300 leading-relaxed">
            {/* @ts-ignore */}
            {pkg.overview}
          </p>
        </div>

        {/* Quick Facts */}
        <div>
          <h3 className="text-[15px] font-bold mb-2.5">Quick Facts</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#111] border border-[#222] p-3.5 rounded-xl">
              <span className="text-[10px] text-neutral-500 uppercase font-bold block mb-0.5">Destination</span>
              {/* @ts-ignore */}
              <span className="text-[12px] font-bold text-white">{pkg.quickFacts?.destination}</span>
            </div>
            <div className="bg-[#111] border border-[#222] p-3.5 rounded-xl">
              <span className="text-[10px] text-neutral-500 uppercase font-bold block mb-0.5">Duration</span>
              {/* @ts-ignore */}
              <span className="text-[12px] font-bold text-white">{pkg.quickFacts?.duration}</span>
            </div>
            <div className="bg-[#111] border border-[#222] p-3.5 rounded-xl">
              <span className="text-[10px] text-neutral-500 uppercase font-bold block mb-0.5">Cities Covered</span>
              {/* @ts-ignore */}
              <span className="text-[12px] font-bold text-white">{pkg.quickFacts?.citiesCovered}</span>
            </div>
            <div className="bg-[#111] border border-[#222] p-3.5 rounded-xl">
              <span className="text-[10px] text-neutral-500 uppercase font-bold block mb-0.5">Travel Type</span>
              {/* @ts-ignore */}
              <span className="text-[12px] font-bold text-white">{pkg.quickFacts?.travelType}</span>
            </div>
          </div>
        </div>

        {/* Itinerary Accordion */}
        <div>
          <h3 className="text-[15px] font-bold mb-2.5">Itinerary</h3>
          <div className="flex flex-col gap-3">
            {pkg.itinerary?.map((dayInfo: any, dIdx: number) => {
              const dayKey = `${pkg.id}-${dayInfo.day}`;
              const isDayExpanded = expandedDays[dayKey] ?? (dIdx === 0);

              return (
                <div key={dIdx} className="bg-[#111] border border-[#222] rounded-xl overflow-hidden flex flex-col transition-colors hover:border-[#333]">
                  <div 
                    role="button"
                    tabIndex={0}
                    className="w-full p-4 cursor-pointer flex gap-4 items-start bg-transparent text-left border-none focus:outline-none"
                    onClick={() => toggleDayAccordion(dayKey, isDayExpanded)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleDayAccordion(dayKey, isDayExpanded); } }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="text-[13px] font-bold text-white m-0">Day {dayInfo.day} - {dayInfo.title}</h4>
                        <ChevronDown size={14} className={`text-neutral-500 transition-transform duration-300 shrink-0 ${isDayExpanded ? 'rotate-180' : ''}`} />
                      </div>
                      {dayInfo.summary && (
                        <p className="text-[12px] text-neutral-400 m-0 leading-snug pr-2">{dayInfo.summary}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isDayExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 pt-0">
                      <div className="border-l border-[#333] ml-3 pl-5 flex flex-col gap-6 mt-2 relative py-2">
                        {dayInfo.activities?.map((act: any, aIdx: number) => {
                          let Icon = Camera;
                          let typeText = "Activity";
                          if (act.type === 'flight') { Icon = Plane; typeText = "Flight"; }
                          if (act.type === 'hotel') { Icon = Bed; typeText = "Hotel"; }
                          if (act.type === 'ship') { Icon = Ship; typeText = "Ferry"; }
                          if (act.type === 'meal') { Icon = Utensils; typeText = "Meal"; }
                          if (act.type === 'car') { Icon = Car; typeText = "Transfer"; }
                          if (act.type === 'show') { Icon = Ticket; typeText = "Show"; }

                          return (
                            <div key={aIdx} className="relative">
                              <div className="absolute -left-[24.5px] top-1.5 w-2 h-2 rounded-full bg-neutral-400 border border-[#111] shadow-[0_0_0_4px_#111]"></div>
                              <div className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="text-[11px] font-bold text-white">{act.startTime} - {act.endTime}</span>
                                  <div className="flex items-center gap-1 bg-[#222] border border-[#333] px-2 py-0.5 rounded text-[10px] text-neutral-300 uppercase tracking-wider font-semibold">
                                    <Icon size={10} />
                                    <span>{typeText}</span>
                                  </div>
                                </div>
                                <div className="text-[12px] font-bold text-white leading-tight">{act.title}</div>
                                <div className="text-[12px] text-neutral-400 leading-snug">{act.desc}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-[15px] font-bold mb-2.5">Included</h3>
            <div className="flex flex-col gap-3">
              {/* @ts-ignore */}
              {pkg.inclusions?.map((inc: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-[12px] text-neutral-300">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[15px] font-bold mb-2.5">Excluded</h3>
            <div className="flex flex-col gap-3">
              {/* @ts-ignore */}
              {pkg.exclusions?.map((exc: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-[12px] text-neutral-300">
                  <XCircle size={14} className="text-neutral-500 shrink-0 mt-0.5" />
                  <span>{exc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Departure Batches */}
        <div>
          <h3 className="text-[15px] font-bold mb-2.5">Available Departures</h3>
          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-5 px-5 after:content-[''] after:shrink-0 after:w-5">
            {/* @ts-ignore */}
            {pkg.departureBatches?.map((batch: any, bIdx: number) => (
              <div key={bIdx} className="bg-[#111] border border-[#222] rounded-xl p-4 flex-shrink-0 w-[240px]">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={14} className="text-neutral-400" />
                  <span className="text-[13px] font-bold text-white">{batch.date} - {batch.returnDate}</span>
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold">Price</span>
                    <span className="text-[14px] font-extrabold text-white">{batch.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-500 px-2.5 py-1 rounded-lg text-[11px] font-bold">
                    <Users size={11} /> {batch.seatsLeft} Left
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h3 className="text-[15px] font-bold mb-2.5">Verified Reviews</h3>
          <div className="flex flex-col gap-4">
            {/* @ts-ignore */}
            {pkg.reviews?.map((review: any, rIdx: number) => (
              <div key={rIdx} className="bg-[#111] border border-[#222] rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-white">{review.name}</span>
                    <span className="text-[11px] text-neutral-500">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold bg-[#ffb400]/10 text-[#ffb400] px-2 py-1 rounded-lg">
                    <Star size={11} fill="#ffb400" /> {review.rating}
                  </div>
                </div>
                <h4 className="text-[14px] font-bold text-white mb-1.5">{review.title}</h4>
                <p className="text-[13px] text-neutral-300 leading-relaxed mb-3">{review.text}</p>
                {review.verified && (
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-500 font-bold uppercase tracking-wider">
                    <CheckCircle2 size={12} /> Verified Traveler
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Agency Contact */}
        <div className="bg-[#111] border border-[#222] rounded-xl p-5 mt-2">
          {/* @ts-ignore */}
          <h3 className="text-[14px] font-bold mb-1">{pkg.agencyContact?.name}</h3>
          <p className="text-[12px] text-neutral-400 mb-4">Need help booking this package? Reach out to our travel experts.</p>
          <div className="flex gap-3">
            <button className="flex-1 bg-emerald-600 text-white py-3 rounded-lg text-[12px] font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
              <MessageCircle size={14} /> WhatsApp
            </button>
            <button className="flex-1 bg-[#222] text-white py-3 rounded-lg text-[12px] font-bold flex items-center justify-center gap-2 hover:bg-[#333] transition-colors border border-[#333]">
              <Phone size={14} /> Call Us
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-[#111] border-t border-[#333] pb-[env(safe-area-inset-bottom)] md:max-w-[1000px] md:left-1/2 md:-translate-x-1/2">
        <div className="px-5 py-4 flex items-center justify-between gap-5">
          <div className="flex flex-col">
            <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold mb-0.5">Starting from</span>
            <span className="text-[18px] font-extrabold text-white leading-none">{pkg.price}</span>
          </div>
          <button className="flex-1 bg-white text-black py-3.5 rounded-lg text-[13px] font-extrabold shadow-[0_4px_14px_0_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-transform active:scale-95">
            {getCtaText(pkg.type)}
          </button>
        </div>
      </div>
    </div>
  );
}
