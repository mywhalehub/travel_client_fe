"use client";

import { Home, Briefcase, Calendar, MessageSquare, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function WhiteBottomNav() {
  const pathname = usePathname();
  
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-neutral-100 pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
      <nav className="flex items-center justify-between px-5 py-2 max-w-[600px] mx-auto">
        <Link 
          href="/white/home" 
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${pathname === '/white/home' || pathname === '/white' ? 'text-black' : 'text-neutral-400 hover:text-neutral-600'}`}
        >
          <Home size={22} />
          <span className="text-[10px] font-bold mt-1 tracking-wide">Home</span>
        </Link>
        <Link 
          href="/white/packages"
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${pathname === '/white/packages' ? 'text-black' : 'text-neutral-400 hover:text-neutral-600'}`}
        >
          <Briefcase size={22} />
          <span className="text-[10px] font-bold mt-1 tracking-wide">Packages</span>
        </Link>
        <button 
          className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-neutral-600"
        >
          <Calendar size={22} />
          <span className="text-[10px] font-bold mt-1 tracking-wide">Bookings</span>
        </button>
        <button 
          className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-neutral-600 relative"
        >
          <div className="relative">
            <MessageSquare size={22} />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-black rounded-full border border-white"></div>
          </div>
          <span className="text-[10px] font-bold mt-1 tracking-wide">Messages</span>
        </button>
        <Link 
          href="/white/profile"
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${pathname === '/white/profile' ? 'text-black' : 'text-neutral-400 hover:text-neutral-600'}`}
        >
          <User size={22} />
          <span className="text-[10px] font-bold mt-1 tracking-wide">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
