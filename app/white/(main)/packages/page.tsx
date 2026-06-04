"use client";

import React, { useState } from 'react';
import { 
  Bell, 
  MapPin, 
  Heart, 
  Star, 
  MessageCircle, 
  User, 
  Home,
  Briefcase,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  Play,
  Repeat2,
  Share,
  MessageSquare,
  Bot,
  Images,
  Search,
  Filter,
  Plane,
  Bed,
  Ship,
  Utensils,
  Car,
  Ticket,
  Camera
} from 'lucide-react';
import { 
  AGENCY_DATA, 
  CATEGORIES, 
  PACKAGE_FILTERS,
  ALL_PACKAGES 
} from '../../../../constants/data';
import Link from 'next/link';

const getInclusionIcon = (inclusionText: string) => {
  const text = inclusionText.toLowerCase();
  if (text.includes('flight') || text.includes('airport')) return Plane;
  if (text.includes('hotel') || text.includes('resort') || text.includes('stay') || text.includes('star')) return Bed;
  if (text.includes('ferry') || text.includes('cruise') || text.includes('ship') || text.includes('boat')) return Ship;
  if (text.includes('meal') || text.includes('breakfast') || text.includes('dinner') || text.includes('lunch') || text.includes('food')) return Utensils;
  if (text.includes('car') || text.includes('cab') || text.includes('transfer') || text.includes('drive') || text.includes('pickup')) return Car;
  if (text.includes('ticket') || text.includes('entry') || text.includes('pass') || text.includes('permit')) return Ticket;
  return Camera;
};

export default function WhitePackages() {
  const [expandedPackage, setExpandedPackage] = useState<number | null>(null);
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});
  const [likedPackages, setLikedPackages] = useState<Record<number, boolean>>({
    1: true,
  });

  const toggleAccordion = (id: number) => {
    setExpandedPackage(prev => prev === id ? null : id);
  };

  const toggleDayAccordion = (dayKey: string, isExpanded: boolean) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayKey]: !isExpanded
    }));
  };

  const toggleLike = (id: number) => {
    setLikedPackages(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 pb-[100px] relative overflow-x-hidden font-sans md:max-w-[1000px] md:mx-auto md:border-x md:border-neutral-200 md:shadow-xl">
      <div className="pt-8 px-5 flex flex-col gap-6 min-h-screen pb-[120px] animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="flex justify-between items-center">
          <h1 className="text-[28px] font-extrabold m-0 text-neutral-900">Browse Packages</h1>
          <button className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center cursor-pointer hover:bg-neutral-50 shadow-sm">
            <Filter size={18} className="text-neutral-700" />
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={18} className="text-neutral-400" />
          </div>
          <input 
            type="text" 
            placeholder="Search destinations, packages..." 
            className="w-full bg-white border border-neutral-200 rounded-xl py-3.5 pl-12 pr-4 text-[14px] text-neutral-800 focus:outline-none focus:border-black/40 transition-colors placeholder:text-neutral-400 shadow-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-5 px-5 after:content-[''] after:shrink-0 after:w-5">
          {PACKAGE_FILTERS.destinations.map((filter, i) => (
            <button 
              key={i} 
              className={`px-5 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${i === 0 ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-800'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-5 mt-2">
          {ALL_PACKAGES.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-xl border border-[#ebebeb] overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
              <div className="h-[220px] w-full relative group/slider">
                {/* Gallery Slider */}
                <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {pkg.gallery?.map((imgUrl: string, iIdx: number) => (
                    <div key={iIdx} className="w-full h-full flex-shrink-0 snap-center relative">
                      <img src={imgUrl} alt={`${pkg.title} - Image ${iIdx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"></div>
                    </div>
                  ))}
                </div>

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold border border-neutral-100 text-neutral-800 shadow-sm z-10">
                  {pkg.type}
                </div>
                <button 
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 flex items-center justify-center border-none cursor-pointer shadow transition-transform hover:scale-105 z-10 ${likedPackages[pkg.id] ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
                  onClick={() => toggleLike(pkg.id)}
                >
                  <Heart size={18} fill={likedPackages[pkg.id] ? "#000000" : "transparent"} />
                </button>
                
                {/* Slider Indicators */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
                  {pkg.gallery?.map((_: any, iIdx: number) => (
                    <div key={iIdx} className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-sm"></div>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[20px] font-bold m-0 text-neutral-900 leading-tight">{pkg.title}</h3>
                  <div className="flex items-center gap-1 text-[13px] font-bold bg-[#ffb400]/10 text-[#ffb400] px-2 py-1 rounded-lg shrink-0">
                    <Star size={12} fill="#ffb400" /> {pkg.rating}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-[13px] text-neutral-500 mb-5">
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-neutral-400" /> {pkg.loc}</span>
                  <span className="flex items-center gap-1.5 opacity-60">•</span>
                  <span className="flex items-center gap-1.5">⏱️ {pkg.duration}</span>
                </div>

                {/* Package Inclusions Slider */}
                {pkg.inclusions && pkg.inclusions.length > 0 && (
                  <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-3 mb-1 -mx-5 px-5 after:content-[''] after:shrink-0 after:w-5">
                    {pkg.inclusions.map((inclusion: string, incIdx: number) => {
                      const IconComponent = getInclusionIcon(inclusion);
                      return (
                        <div key={incIdx} className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-full text-[11px] text-neutral-600 font-semibold whitespace-nowrap flex-shrink-0">
                          <IconComponent size={12} className="text-neutral-400" />
                          {inclusion}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Accordion Toggle */}
                <div 
                  role="button"
                  tabIndex={0}
                  className="w-full flex items-center justify-between py-3 border-t border-neutral-100 cursor-pointer group/acc bg-transparent text-left focus:outline-none"
                  onClick={() => toggleAccordion(pkg.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleAccordion(pkg.id); } }}
                >
                  <span className="text-[13px] font-bold text-neutral-600 group-hover/acc:text-neutral-900 transition-colors">Trip Summary</span>
                  <ChevronDown size={16} className={`text-neutral-400 transition-transform duration-300 ${expandedPackage === pkg.id ? 'rotate-180' : ''}`} />
                </div>

                {/* Accordion Content (Day List) */}
                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedPackage === pkg.id ? 'max-h-[1500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-3 pt-4">
                    {pkg.itinerary?.map((dayInfo: any, dIdx: number) => {
                      const dayKey = `${pkg.id}-${dayInfo.day}`;
                      const isDayExpanded = expandedDays[dayKey] ?? (dIdx === 0);

                      return (
                        <div key={dIdx} className="bg-white border border-[#ebebeb] rounded-xl overflow-hidden flex flex-col hover:border-neutral-300 transition-colors">
                          {/* Day Header */}
                          <div 
                            role="button"
                            tabIndex={0}
                            className="w-full p-4 cursor-pointer flex gap-4 items-start bg-transparent text-left border-none focus:outline-none"
                            onClick={() => toggleDayAccordion(dayKey, isDayExpanded)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleDayAccordion(dayKey, isDayExpanded); } }}
                          >
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1.5">
                                <h4 className="text-[15px] font-bold text-neutral-900 m-0">Day {dayInfo.day} - {dayInfo.title}</h4>
                                <ChevronDown size={16} className={`text-neutral-400 transition-transform duration-300 shrink-0 ${isDayExpanded ? 'rotate-180' : ''}`} />
                              </div>
                              {dayInfo.summary && (
                                <p className="text-[13px] text-neutral-500 m-0 leading-snug pr-2">{dayInfo.summary}</p>
                              )}
                            </div>
                          </div>
                          
                          {/* Day Activities Timeline */}
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isDayExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-4 pt-0">
                              <div className="border-l border-neutral-200 ml-3 pl-5 flex flex-col gap-6 mt-2 relative py-2">
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
                                      {/* Minimal Dot Node */}
                                      <div className="absolute -left-[24.5px] top-1.5 w-2 h-2 rounded-full bg-neutral-300 border border-white shadow-[0_0_0_4px_white]"></div>
                                      
                                      <div className="flex flex-col gap-1.5">
                                        <div className="flex items-center gap-2">
                                          <span className="text-[12px] font-bold text-neutral-800">{act.startTime} - {act.endTime}</span>
                                          {/* Tag with Icon */}
                                          <div className="flex items-center gap-1 bg-neutral-50 border border-neutral-200 px-2 py-0.5 rounded text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                                            <Icon size={10} />
                                            <span>{typeText}</span>
                                          </div>
                                        </div>
                                        <div className="text-[14px] font-bold text-neutral-900 leading-tight">{act.title}</div>
                                        <div className="text-[13px] text-neutral-500 leading-snug">{act.desc}</div>
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

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-bold mb-0.5">Starting from</span>
                    <span className="text-[22px] font-extrabold text-black">{pkg.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/white/package/${pkg.id}`} target="_blank" className="bg-transparent border border-neutral-200 text-neutral-800 px-4 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-50 transition-colors">
                      Details
                    </Link>
                    <Link href={`/white/package/${pkg.id}`} target="_blank" className="bg-black text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-800 transition-colors shadow-sm text-center">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
