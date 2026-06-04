"use client";

import React from 'react';
import { 
  User, 
  Settings, 
  CreditCard, 
  Briefcase, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  Bell
} from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white pb-[100px] font-sans md:max-w-[1000px] md:mx-auto md:border-x md:border-neutral-800">
      
      <div className="pt-8 px-5 pb-4 flex justify-between items-center bg-[#111] border-b border-[#222]">
        <h1 className="text-[22px] font-extrabold m-0">Profile</h1>
        <button className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333] hover:bg-[#222] transition-colors relative">
          <Bell size={18} />
          <div className="absolute top-2.5 right-3 w-2 h-2 bg-white rounded-full border border-black"></div>
        </button>
      </div>

      <div className="px-5 pt-6 flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
        
        {/* User Card */}
        <div className="bg-[#111] border border-[#222] p-5 rounded-xl flex items-center gap-4">
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-tr from-white to-neutral-700 p-0.5">
            <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center overflow-hidden border-2 border-[#111]">
              <img src="https://ui-avatars.com/api/?name=Guest+User&background=111&color=fff&size=150" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <h2 className="text-[16px] font-bold text-white m-0">Guest Traveler</h2>
            <p className="text-[12px] text-neutral-400 m-0">guest@example.com</p>
            <div className="mt-2 bg-[#222] text-white px-3 py-1 rounded-full text-[10px] font-bold self-start border border-[#333]">
              Basic Member
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="flex flex-col gap-3">
          <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden">
            
            <button className="w-full flex items-center justify-between p-4 bg-transparent border-b border-[#222] hover:bg-[#1a1a1a] transition-colors group cursor-pointer text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-neutral-300 flex items-center justify-center border border-[#222]">
                  <Briefcase size={20} />
                </div>
                <span className="text-[13px] font-bold text-white">My Bookings</span>
              </div>
              <ChevronRight size={18} className="text-neutral-500 group-hover:text-white transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-transparent border-b border-[#222] hover:bg-[#1a1a1a] transition-colors group cursor-pointer text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-neutral-300 flex items-center justify-center border border-[#222]">
                  <CreditCard size={20} />
                </div>
                <span className="text-[13px] font-bold text-white">Payment Methods</span>
              </div>
              <ChevronRight size={18} className="text-neutral-500 group-hover:text-white transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-[#1a1a1a] transition-colors group cursor-pointer text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-neutral-300 flex items-center justify-center border border-[#222]">
                  <User size={20} />
                </div>
                <span className="text-[13px] font-bold text-white">Personal Information</span>
              </div>
              <ChevronRight size={18} className="text-neutral-500 group-hover:text-white transition-colors" />
            </button>
            
          </div>

          <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden mt-2">
            
            <button className="w-full flex items-center justify-between p-4 bg-transparent border-b border-[#222] hover:bg-[#1a1a1a] transition-colors group cursor-pointer text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-neutral-300 flex items-center justify-center border border-[#222]">
                  <Settings size={20} />
                </div>
                <span className="text-[13px] font-bold text-white">Settings</span>
              </div>
              <ChevronRight size={18} className="text-neutral-500 group-hover:text-white transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-[#1a1a1a] transition-colors group cursor-pointer text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-neutral-300 flex items-center justify-center border border-[#222]">
                  <HelpCircle size={20} />
                </div>
                <span className="text-[13px] font-bold text-white">Help & Support</span>
              </div>
              <ChevronRight size={18} className="text-neutral-500 group-hover:text-white transition-colors" />
            </button>
            
          </div>
        </div>

        {/* Logout Button */}
        <button className="mt-4 w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-[#1a1a1a] text-neutral-400 hover:bg-[#222] transition-colors border border-[#333] font-bold cursor-pointer text-[13px]">
          <LogOut size={18} />
          <span>Log Out</span>
        </button>

      </div>
    </div>
  );
}
