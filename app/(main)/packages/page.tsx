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
} from '../../../constants/data';
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

export default function AgencyHome() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [expandedPackage, setExpandedPackage] = useState<number | null>(null);
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});
  const [likedPackages, setLikedPackages] = useState<Record<number, boolean>>({
    1: true,
  });
  const [likedTweets, setLikedTweets] = useState<Record<number, boolean>>({});

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

  const toggleTweetLike = (id: number) => {
    setLikedTweets(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-black text-white pb-[100px] relative overflow-x-hidden font-sans md:max-w-[1000px] md:mx-auto md:border-x md:border-neutral-800 md:shadow-2xl">
        <div className="pt-8 px-5 flex flex-col gap-6 min-h-screen pb-[120px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] font-extrabold m-0">Browse Packages</h1>
            <button className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center cursor-pointer hover:bg-[#222]">
              <Filter size={18} />
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search size={18} className="text-neutral-500" />
            </div>
            <input 
              type="text" 
              placeholder="Search destinations, packages..." 
              className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl py-3.5 pl-12 pr-4 text-[13px] text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-500"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-5 px-5 after:content-[''] after:shrink-0 after:w-5">
            {PACKAGE_FILTERS.destinations.map((filter, i) => (
              <button key={i} className={`px-5 py-2.5 rounded-full text-[12px] font-bold whitespace-nowrap transition-colors cursor-pointer ${i === 0 ? 'bg-white text-black' : 'bg-[#1a1a1a] text-neutral-300 border border-[#333] hover:border-neutral-500'}`}>
                {filter}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-5 mt-2">
            {ALL_PACKAGES.map(pkg => (
              <div key={pkg.id} className="bg-gradient-to-b from-[#141414] to-[#0a0a0a] rounded-xl border border-[#2c2c2c] overflow-hidden flex flex-col group hover:border-neutral-700 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] transition-all duration-300">
                <div className="h-[220px] w-full relative group/slider">
                  {/* Gallery Slider */}
                  <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {pkg.gallery?.map((imgUrl: string, iIdx: number) => (
                      <div key={iIdx} className="w-full h-full flex-shrink-0 snap-center relative">
                        <img src={imgUrl} alt={`${pkg.title} - Image ${iIdx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/35 pointer-events-none"></div>
                      </div>
                    ))}
                  </div>

                  {/* Badges Overlay */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold border border-white/10 text-white shadow-lg z-10 uppercase tracking-wider">
                    {pkg.type}
                  </div>
                  <button 
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center border-none cursor-pointer shadow-lg transition-transform hover:scale-105 active:scale-95 z-10 text-black"
                    onClick={(e) => { e.stopPropagation(); toggleLike(pkg.id); }}
                  >
                    <Heart size={16} fill={likedPackages[pkg.id] ? "#000000" : "transparent"} />
                  </button>
                  
                  {/* Slider Indicators */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
                    {pkg.gallery?.map((_: any, iIdx: number) => (
                      <div key={iIdx} className="w-1.5 h-1.5 rounded-full bg-white/50 shadow-md"></div>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[16px] font-extrabold m-0 leading-tight text-white group-hover:text-neutral-200 transition-colors">{pkg.title}</h3>
                    <div className="flex items-center gap-1 text-[10px] font-black bg-[#ffb400]/10 text-[#ffb400] px-2.5 py-1 rounded-lg shrink-0 border border-[#ffb400]/20">
                      <Star size={11} fill="#ffb400" className="text-[#ffb400]" /> {pkg.rating}
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-[12px] text-neutral-400 mb-5 font-semibold">
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-neutral-500" /> {pkg.loc}</span>
                    <span className="opacity-45">•</span>
                    <span className="flex items-center gap-1.5">{pkg.duration}</span>
                  </div>

                  {/* Package Inclusions Slider */}
                  {pkg.inclusions && pkg.inclusions.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-3 mb-1 -mx-5 px-5 after:content-[''] after:shrink-0 after:w-5">
                      {pkg.inclusions.map((inclusion: string, incIdx: number) => {
                        const IconComponent = getInclusionIcon(inclusion);
                        return (
                          <div key={incIdx} className="flex items-center gap-1.5 bg-[#121212] border border-neutral-800 px-3 py-1.5 rounded-full text-[11px] text-neutral-300 font-semibold whitespace-nowrap flex-shrink-0">
                            <IconComponent size={12} className="text-neutral-500" />
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
                    className="w-full flex items-center justify-between py-3 border-t border-neutral-800 cursor-pointer group/acc bg-transparent text-left focus:outline-none"
                    onClick={() => toggleAccordion(pkg.id)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleAccordion(pkg.id); } }}
                  >
                    <span className="text-[12px] font-bold text-neutral-400 group-hover/acc:text-white transition-colors flex items-center gap-1.5">
                      Trip Summary <span className="text-[10px] text-neutral-600 font-normal">({pkg.itinerary?.length} Days)</span>
                    </span>
                    <ChevronDown size={14} className={`text-neutral-500 transition-transform duration-300 ${expandedPackage === pkg.id ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Accordion Content (Day List) */}
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedPackage === pkg.id ? 'max-h-[1500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-3 pt-4">
                      {pkg.itinerary?.map((dayInfo: any, dIdx: number) => {
                        const dayKey = `${pkg.id}-${dayInfo.day}`;
                        const isDayExpanded = expandedDays[dayKey] ?? (dIdx === 0);

                        return (
                          <div key={dIdx} className="bg-[#111] border border-[#222] rounded-xl overflow-hidden flex flex-col transition-colors hover:border-[#333]">
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
                                  <h4 className="text-[13px] font-bold text-white m-0">Day {dayInfo.day} - {dayInfo.title}</h4>
                                  <ChevronDown size={16} className={`text-neutral-500 transition-transform duration-300 shrink-0 ${isDayExpanded ? 'rotate-180' : ''}`} />
                                </div>
                                {dayInfo.summary && (
                                  <p className="text-[12px] text-neutral-400 m-0 leading-snug pr-2">{dayInfo.summary}</p>
                                )}
                              </div>
                            </div>
                            
                            {/* Day Activities Timeline */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isDayExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                              <div className="p-4 pt-0">
                                <div className="border-l border-[#333] ml-3 pl-5 flex flex-col gap-6 mt-2 relative py-2">
                                  {dayInfo.activities?.map((act: any, aIdx: number) => {
                                    // Clean Icons mapping
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
                                        <div className="absolute -left-[24.5px] top-1.5 w-2 h-2 rounded-full bg-neutral-400 border border-[#111] shadow-[0_0_0_4px_#111]"></div>
                                        
                                        <div className="flex flex-col gap-1.5">
                                          <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-bold text-white">{act.startTime} - {act.endTime}</span>
                                            {/* Tag with Icon */}
                                            <div className="flex items-center gap-1 bg-[#222] border border-[#333] px-2 py-0.5 rounded text-[9px] text-neutral-300 uppercase tracking-wider font-bold">
                                              <Icon size={10} />
                                              <span>{typeText}</span>
                                            </div>
                                          </div>
                                          <div className="text-[13px] font-bold text-white leading-tight">{act.title}</div>
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

                  <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-neutral-500 uppercase font-black tracking-wider mb-0.5">Starting from</span>
                      <span className="text-[18px] font-black text-white leading-none">{pkg.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href={`/package/${pkg.id}`} target="_blank" className="shrink-0">
                        <span className="inline-block bg-transparent border border-neutral-800 text-white px-4 py-2.5 rounded-lg text-[12px] font-extrabold hover:bg-neutral-900 transition-all hover:border-neutral-700 cursor-pointer">
                          Details
                        </span>
                      </Link>
                      <Link href={`/package/${pkg.id}`} target="_blank" className="shrink-0">
                        <span className="inline-block bg-white text-black px-5 py-2.5 rounded-lg text-[12px] font-black hover:bg-neutral-200 hover:scale-[1.03] active:scale-95 transition-all shadow-[0_4px_14px_rgba(255,255,255,0.1)] cursor-pointer">
                          Book Now
                        </span>
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
