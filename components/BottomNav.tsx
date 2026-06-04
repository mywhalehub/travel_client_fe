"use client";

import { Home, Briefcase, Calendar, MessageSquare, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-[#111] border-t border-[#333] pb-[env(safe-area-inset-bottom)]">
      <nav className="flex items-center justify-between px-5 py-2 max-w-[600px] mx-auto">
        <Link 
          href="/home" 
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${pathname === '/home' || pathname === '/' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
        >
          <Home size={22} className={pathname === '/home' || pathname === '/' ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' : ''} />
          <span className="text-[10px] font-bold mt-1 tracking-wide">Home</span>
        </Link>
        <Link 
          href="/packages"
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${pathname === '/packages' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
        >
          <Briefcase size={22} className={pathname === '/packages' ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' : ''} />
          <span className="text-[10px] font-bold mt-1 tracking-wide">Packages</span>
        </Link>
        <button 
          className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 text-neutral-500 hover:text-neutral-300"
        >
          <Calendar size={22} />
          <span className="text-[10px] font-bold mt-1 tracking-wide">Bookings</span>
        </button>
        <button 
          className="flex flex-col items-center p-2 rounded-lg transition-all duration-300 text-neutral-500 hover:text-neutral-300 relative"
        >
          <div className="relative">
            <MessageSquare size={22} />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border border-[#111]"></div>
          </div>
          <span className="text-[10px] font-bold mt-1 tracking-wide">Messages</span>
        </button>
        <Link 
          href="/profile"
          className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${pathname === '/profile' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
        >
          <User size={22} className={pathname === '/profile' ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' : ''} />
          <span className="text-[10px] font-bold mt-1 tracking-wide">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
