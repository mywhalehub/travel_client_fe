"use client";

import React, { useState } from 'react';
import Link from 'next/link';
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
  Camera,
  Menu,
  X,
  Percent,
  Compass,
  Users,
  Sparkles
} from 'lucide-react';
import { 
  AGENCY_DATA, 
  VIDEO_REVIEWS, 
  TEXT_REVIEWS,
  ALL_PACKAGES 
} from '../../../../constants/data';

export default function WhiteAgencyHome() {
  const [likedPackages, setLikedPackages] = useState<Record<number, boolean>>({
    1: true,
  });
  const [likedTweets, setLikedTweets] = useState<Record<number, boolean>>({});
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

  const toggleLike = (id: number) => {
    setLikedPackages(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTweetLike = (id: number) => {
    setLikedTweets(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Curated Package Lists from ALL_PACKAGES
  const featuredPkgs = ALL_PACKAGES.filter(p => [1, 2, 3].includes(p.id));
  const honeymoonPkgs = ALL_PACKAGES.filter(p => [4, 5].includes(p.id));
  const familyPkgs = ALL_PACKAGES.filter(p => [6, 7].includes(p.id));
  const specialPkgs = ALL_PACKAGES.filter(p => [8, 9, 10].includes(p.id));

  // Top discounts package-based mock tags
  const discountPkgs = [
    {
      ...ALL_PACKAGES.find(p => p.id === 1)!,
      discountTag: "30% OFF",
    },
    {
      ...ALL_PACKAGES.find(p => p.id === 8)!,
      discountTag: "₹4,000 OFF",
    }
  ];

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

  const renderPackageCard = (pkg: any, discountTag?: string) => {
    return (
      <Link 
        href={`/white/package/${pkg.id}`} 
        key={pkg.id} 
        target="_blank"
        className="min-w-[280px] w-[280px] shrink-0 relative flex flex-col group bg-white rounded-xl border border-[#ebebeb] overflow-hidden hover:border-neutral-400 hover:shadow-md transition-all duration-300 md:min-w-[310px] md:w-[310px] hover:-translate-y-1"
      >
        {/* Card Image Area (Flush Top) */}
        <div className="w-full aspect-[1.35] relative overflow-hidden bg-neutral-100">
          <img 
            src={pkg.gallery?.[0] || pkg.img} 
            alt={pkg.title} 
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none"></div>
          
          {/* Discount Badge if provided */}
          {discountTag && (
            <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm">
              {discountTag}
            </span>
          )}

          {/* Rating overlay inside image bottom left */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-2 py-0.5 border border-white/10 text-white rounded-lg text-[10px] font-extrabold flex items-center gap-1">
            <Star size={11} fill="#ffb400" color="#ffb400" />
            <span>{pkg.rating}</span>
          </div>

          {/* Like Heart Button */}
          <button 
            className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-neutral-100 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 z-10 ${likedPackages[pkg.id] ? 'text-black' : 'text-neutral-500 hover:text-black'}`}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleLike(pkg.id); }}
          >
            <Heart size={14} fill={likedPackages[pkg.id] ? "#000000" : "transparent"} />
          </button>
        </div>

        {/* Card Info Area */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest flex items-center gap-1 mb-1.5">
              <MapPin size={10} className="text-neutral-400" />
              <span>{pkg.loc}</span>
              <span>•</span>
              <span>{pkg.duration}</span>
            </div>
            <h3 className="text-[14px] font-bold text-neutral-900 m-0 line-clamp-1 leading-snug tracking-tight group-hover:text-black transition-colors">
              {pkg.title}
            </h3>
            <p className="text-[11px] text-neutral-500 mt-2 mb-4 line-clamp-2 leading-relaxed">
              {pkg.overview}
            </p>
          </div>

          {/* Inclusions Row */}
          {pkg.inclusions && (
            <div className="flex gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] mb-4 after:content-[''] after:shrink-0 after:w-1">
              {pkg.inclusions.slice(0, 2).map((inclusion: string, incIdx: number) => {
                const IconComponent = getInclusionIcon(inclusion);
                return (
                  <div key={incIdx} className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 px-2.5 py-1.5 rounded-lg text-[9px] text-neutral-600 font-bold uppercase tracking-wider whitespace-nowrap">
                    <IconComponent size={10} className="text-neutral-400" />
                    <span>{inclusion}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Footer Pricing & Explore */}
          <div className="flex justify-between items-center pt-4 border-t border-neutral-100">
            <div className="flex flex-col">
              <span className="text-[9px] text-neutral-400 uppercase font-bold tracking-wider mb-0.5">Starting at</span>
              <span className="text-[14px] font-bold text-neutral-900 leading-none">
                {pkg.price} <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wide">/ Person</span>
              </span>
            </div>
            <span className="inline-block bg-black text-white hover:bg-neutral-800 text-[11px] font-bold px-4 py-2 rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow">
              Explore
            </span>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 pb-[100px] relative overflow-x-hidden font-sans md:max-w-[1000px] md:mx-auto md:border-x md:border-neutral-200 md:shadow-xl">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
        {/* Cover Header */}
        <div className="relative h-[35vh] min-h-[280px] w-full bg-neutral-200">
          <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {AGENCY_DATA.gallery.slice(0, 5).map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`${AGENCY_DATA.name} Cover ${idx + 1}`} 
                className="w-full h-full object-cover shrink-0 snap-start"
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-black/95 pointer-events-none"></div>
          <div className="absolute inset-0 flex flex-col justify-between pt-6 px-5 pb-5 pointer-events-none">
            <div className="flex justify-between items-center pointer-events-auto">
              <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-white transition-all shadow-md cursor-pointer">
                <Menu size={18} />
              </button>
              
              <button className="bg-black text-white px-3.5 py-1.5 rounded-full text-[13px] font-bold flex items-center gap-1.5 cursor-pointer hover:bg-neutral-800 transition-all shadow pointer-events-auto">
                <MessageCircle size={15} />
                <span>Ask Support</span>
              </button>
            </div>
            
            <div className="flex flex-col gap-1 pb-2 pointer-events-auto text-white">
              <h1 className="text-[28px] font-extrabold m-0 tracking-tight text-white">{AGENCY_DATA.name}</h1>
              <p className="text-[14px] text-neutral-200 m-0 leading-tight line-clamp-2">{AGENCY_DATA.description}</p>
              
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2 text-[13px] text-white font-medium">
                  <span className="flex items-center gap-1">
                    <Star size={14} fill="#ffb400" color="#ffb400" /> {AGENCY_DATA.rating} ({AGENCY_DATA.reviewsCount} Reviews)
                  </span>
                </div>
                <button 
                  className="bg-white/80 backdrop-blur-md border border-white/40 text-neutral-800 px-3.5 py-1.5 rounded-full text-[12px] font-semibold flex items-center gap-1.5 hover:bg-white transition-all shadow pointer-events-auto"
                  onClick={() => setActiveGalleryIndex(0)}
                >
                  <Images size={13} className="text-neutral-700" />
                  <span>Gallery</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Navigation Chips */}
        <div className="flex gap-2 px-5 py-3.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-neutral-100 bg-white/90 backdrop-blur-md sticky top-0 z-20">
          {[
            { label: "Discounts", targetId: "top-discounts", icon: Percent },
            { label: "Featured", targetId: "featured-packages", icon: Compass },
            { label: "Honeymoon", targetId: "honeymoon-packages", icon: Heart },
            { label: "Family", targetId: "family-packages", icon: Users },
            { label: "Special", targetId: "special-packages", icon: Sparkles }
          ].map((chip, idx) => {
            const Icon = chip.icon;
            return (
              <button
                key={idx}
                onClick={() => {
                  const element = document.getElementById(chip.targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-200 text-[11px] font-bold text-neutral-500 hover:text-black hover:border-neutral-800 transition-colors whitespace-nowrap bg-transparent cursor-pointer group"
              >
                <Icon size={12} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                <span>{chip.label}</span>
              </button>
            );
          })}
        </div>

        <main className="p-0">
          {/* Top Discounts */}
          <div id="top-discounts" className="mt-6 scroll-mt-20">
            <div className="flex justify-between items-center px-5 mb-4">
              <h2 className="text-[18px] font-bold m-0 text-neutral-900">Top Discounts</h2>
            </div>
            <div className="flex gap-4 pl-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:content-[''] after:shrink-0 after:w-1">
              {discountPkgs.map(pkg => renderPackageCard(pkg, pkg.discountTag))}
            </div>
          </div>

          {/* Featured Packages */}
          <div id="featured-packages" className="mt-16 scroll-mt-20">
            <div className="flex justify-between items-center px-5 mb-4">
              <h2 className="text-[18px] font-bold m-0 text-neutral-900">Featured Packages</h2>
              <a href="#" className="text-[14px] text-neutral-500 font-medium no-underline hover:text-black">See All</a>
            </div>
            <div className="flex gap-4 pl-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:content-[''] after:shrink-0 after:w-1">
              {featuredPkgs.map(pkg => renderPackageCard(pkg))}
            </div>
          </div>

          {/* Honeymoon Special Packages */}
          <div id="honeymoon-packages" className="mt-16 scroll-mt-20">
            <div className="flex justify-between items-center px-5 mb-4">
              <h2 className="text-[18px] font-bold m-0 text-neutral-900">Honeymoon Special Packages</h2>
              <a href="#" className="text-[14px] text-neutral-500 font-medium no-underline hover:text-black">See All</a>
            </div>
            <div className="flex gap-4 pl-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:content-[''] after:shrink-0 after:w-1">
              {honeymoonPkgs.map(pkg => renderPackageCard(pkg))}
            </div>
          </div>

          {/* Family Packages */}
          <div id="family-packages" className="mt-16 scroll-mt-20">
            <div className="flex justify-between items-center px-5 mb-4">
              <h2 className="text-[18px] font-bold m-0 text-neutral-900">Family Packages</h2>
              <a href="#" className="text-[14px] text-neutral-500 font-medium no-underline hover:text-black">See All</a>
            </div>
            <div className="flex gap-4 pl-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:content-[''] after:shrink-0 after:w-1">
              {familyPkgs.map(pkg => renderPackageCard(pkg))}
            </div>
          </div>

          {/* Special Packages */}
          <div id="special-packages" className="mt-16 scroll-mt-20">
            <div className="flex justify-between items-center px-5 mb-4">
              <h2 className="text-[18px] font-bold m-0 text-neutral-900">Special Packages</h2>
              <a href="#" className="text-[14px] text-neutral-500 font-medium no-underline hover:text-black">See All</a>
            </div>
            <div className="flex gap-4 pl-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:content-[''] after:shrink-0 after:w-1">
              {specialPkgs.map(pkg => renderPackageCard(pkg))}
            </div>
          </div>

          {/* Video Reviews */}
          <div className="mt-8">
            <div className="flex justify-between items-center px-5 mb-4">
              <h2 className="text-[18px] font-bold m-0 text-neutral-900">Video Reviews</h2>
              <a href="#" className="text-[14px] text-neutral-500 font-medium no-underline hover:text-black">See All</a>
            </div>
            <div className="flex gap-4 pl-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:content-[''] after:shrink-0 after:w-1">
              {VIDEO_REVIEWS.map(video => (
                <div key={video.id} className="min-w-[170px] w-[170px] h-[260px] rounded-xl bg-neutral-100 border border-[#ebebeb] shrink-0 relative overflow-hidden cursor-pointer group shadow-sm">
                  <img src={video.thumbnail} alt={`Review by ${video.reviewer}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-black group-hover:scale-110 transition-transform shadow-md">
                      <Play size={20} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-[12px] font-bold text-white leading-tight drop-shadow-md">{video.reviewer}</div>
                    <div className="text-[10px] text-neutral-300 font-medium mt-1">{video.views} views • {video.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Stories (Twitter Style) */}
          <div className="mt-8">
            <div className="flex justify-between items-center px-5 mb-4">
              <h2 className="text-[18px] font-bold m-0 text-neutral-900">Traveler Stories</h2>
            </div>
            <div className="flex gap-4 pl-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:content-[''] after:shrink-0 after:w-1">
              {TEXT_REVIEWS.map(review => (
                <div key={review.id} className="bg-white rounded-xl p-4 min-w-[280px] w-[280px] md:min-w-[320px] border border-[#ebebeb] shadow-sm shrink-0 flex flex-col hover:shadow-md transition-shadow">
                  {/* Tweet Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-neutral-100" />
                      <div className="flex flex-col">
                        <h5 className="m-0 text-[14px] font-bold text-neutral-950 leading-tight">{review.name}</h5>
                        <span className="text-[12px] text-neutral-500 leading-tight">{review.handle} • {review.date}</span>
                      </div>
                    </div>
                    <button className="text-neutral-400 hover:text-neutral-600">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-currentColor"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                    </button>
                  </div>
                  
                  {/* Tweet Body */}
                  <p className="text-[14px] text-neutral-700 leading-relaxed m-0 mb-3 whitespace-pre-wrap">
                    {review.text}
                  </p>

                  {/* Tweet Attachment */}
                  {review.attachment && (
                    <div className="w-full h-[150px] rounded-lg overflow-hidden mb-3 border border-neutral-100">
                      <img src={review.attachment} alt="Review attachment" className="w-full h-full object-cover" />
                    </div>
                  )}

                  {/* Tweet Actions */}
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-neutral-100 text-neutral-400">
                    <button className="flex items-center gap-1.5 text-[12px] hover:text-blue-500 transition-colors group">
                      <div className="p-1.5 rounded-full group-hover:bg-blue-500/10">
                        <MessageSquare size={16} />
                      </div>
                    </button>
                    <button className="flex items-center gap-1.5 text-[12px] hover:text-green-500 transition-colors group">
                      <div className="p-1.5 rounded-full group-hover:bg-green-500/10">
                        <Repeat2 size={16} />
                      </div>
                      <span>{review.retweets}</span>
                    </button>
                    <button 
                      className={`flex items-center gap-1.5 text-[12px] transition-colors group ${likedTweets[review.id] ? 'text-black' : 'hover:text-black'}`}
                      onClick={() => toggleTweetLike(review.id)}
                    >
                      <div className="p-1.5 rounded-full group-hover:bg-neutral-100">
                        <Heart size={16} fill={likedTweets[review.id] ? "#000000" : "transparent"} />
                      </div>
                      <span>{likedTweets[review.id] ? review.likes + 1 : review.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-[12px] hover:text-blue-500 transition-colors group">
                      <div className="p-1.5 rounded-full group-hover:bg-blue-500/10">
                        <Share size={16} />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-16">
            <div className="flex justify-between items-center px-5 mb-4">
              <h2 className="text-[18px] font-bold m-0 text-neutral-900">Our Gallery</h2>
            </div>
            <div className="flex gap-3 pl-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] after:content-[''] after:shrink-0 after:w-5">
              {AGENCY_DATA.gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className="min-w-[200px] w-[200px] h-[140px] rounded-xl overflow-hidden bg-neutral-100 border border-[#ebebeb] shrink-0 relative group shadow-sm cursor-pointer"
                  onClick={() => setActiveGalleryIndex(idx)}
                >
                  <img 
                    src={img} 
                    alt={`Gallery Image ${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>

        </main>

        {/* Contact Section */}
        <div className="pt-8 px-5 pb-12 bg-white border-t border-[#ebebeb] rounded-t-xl mt-8 text-center shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
          <h2 className="text-[18px] font-bold m-0 text-neutral-900">Need Help Planning?</h2>
          <p className="text-[14px] text-neutral-500 mt-2">Reach out to our travel experts directly.</p>
          <div className="grid grid-cols-3 gap-3 mt-6">
            <a href="#" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#25D366]/5 hover:bg-[#25D366]/10 text-[#25D366] no-underline text-[13px] font-bold transition-all border border-[#25D366]/10">
              <MessageCircle size={24} />
              WhatsApp
            </a>
            <a href="#" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-neutral-700 no-underline text-[13px] font-bold transition-all border border-neutral-200">
              <Phone size={24} />
              Call Us
            </a>
            <a href="#" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-neutral-700 no-underline text-[13px] font-bold transition-all border border-neutral-200">
              <Mail size={24} />
              Email
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox / Gallery Modal */}
      {activeGalleryIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 pointer-events-auto"
          onClick={() => setActiveGalleryIndex(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white cursor-pointer transition-colors z-50"
            onClick={(e) => { e.stopPropagation(); setActiveGalleryIndex(null); }}
          >
            <X size={20} />
          </button>

          {/* Prev Button */}
          <button 
            className="absolute left-4 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 border border-neutral-800 flex items-center justify-center text-white cursor-pointer transition-all hover:scale-105 active:scale-95 z-50"
            onClick={(e) => {
              e.stopPropagation();
              setActiveGalleryIndex(prev => 
                prev !== null ? (prev === 0 ? AGENCY_DATA.gallery.length - 1 : prev - 1) : null
              );
            }}
          >
            <ChevronRight size={24} className="rotate-180 text-white" />
          </button>

          {/* Large Image Container */}
          <div 
            className="relative max-w-[85vw] max-h-[70vh] md:max-w-[700px] aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={AGENCY_DATA.gallery[activeGalleryIndex]} 
              alt={`Gallery Image ${activeGalleryIndex + 1}`} 
              className="w-full h-full object-cover" 
            />
            {/* Image counter indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold border border-white/10 text-white">
              {activeGalleryIndex + 1} {"/"} {AGENCY_DATA.gallery.length}
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="absolute right-4 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 border border-neutral-800 flex items-center justify-center text-white cursor-pointer transition-all hover:scale-105 active:scale-95 z-50"
            onClick={(e) => {
              e.stopPropagation();
              setActiveGalleryIndex(prev => 
                prev !== null ? (prev === AGENCY_DATA.gallery.length - 1 ? 0 : prev + 1) : null
              );
            }}
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
