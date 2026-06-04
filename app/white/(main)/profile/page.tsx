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

export default function WhiteProfile() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 pb-[100px] font-sans md:max-w-[1000px] md:mx-auto md:border-x md:border-neutral-200 md:shadow-xl">
      
      {/* Header */}
      <div className="pt-8 px-5 pb-4 flex justify-between items-center bg-white border-b border-neutral-200 shadow-sm">
        <h1 className="text-[28px] font-extrabold m-0 text-neutral-900">Profile</h1>
        <button className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-200 hover:bg-neutral-100 transition-colors relative">
          <Bell size={18} className="text-neutral-700" />
          <div className="absolute top-2.5 right-3 w-2 h-2 bg-black rounded-full border border-white"></div>
        </button>
      </div>

      <div className="px-5 pt-6 flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
        
        {/* User Card */}
        <div className="bg-white border border-[#ebebeb] p-5 rounded-xl flex items-center gap-4 shadow-sm">
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-tr from-black to-neutral-400 p-0.5">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white">
              <img src="https://ui-avatars.com/api/?name=Guest+User&background=f7f7f7&color=000000&size=150" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <h2 className="text-[20px] font-bold text-neutral-900 m-0">Guest Traveler</h2>
            <p className="text-[14px] text-neutral-500 m-0">guest@example.com</p>
            <div className="mt-2 bg-neutral-50 text-neutral-700 px-3 py-1 rounded-full text-[11px] font-bold self-start border border-neutral-200">
              Basic Member
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="flex flex-col gap-3">
          <div className="bg-white border border-[#ebebeb] rounded-xl overflow-hidden shadow-sm">
            
            <button className="w-full flex items-center justify-between p-4 bg-transparent border-b border-neutral-100 hover:bg-neutral-50 transition-colors group cursor-pointer text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-50 text-neutral-700 flex items-center justify-center border border-neutral-200">
                  <Briefcase size={20} />
                </div>
                <span className="text-[15px] font-bold text-neutral-800">My Bookings</span>
              </div>
              <ChevronRight size={18} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-transparent border-b border-neutral-100 hover:bg-neutral-50 transition-colors group cursor-pointer text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-50 text-neutral-700 flex items-center justify-center border border-neutral-200">
                  <CreditCard size={20} />
                </div>
                <span className="text-[15px] font-bold text-neutral-800">Payment Methods</span>
              </div>
              <ChevronRight size={18} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-neutral-50 transition-colors group cursor-pointer text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-50 text-neutral-700 flex items-center justify-center border border-neutral-200">
                  <User size={20} />
                </div>
                <span className="text-[15px] font-bold text-neutral-800">Personal Information</span>
              </div>
              <ChevronRight size={18} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
            </button>
            
          </div>

          <div className="bg-white border border-[#ebebeb] rounded-xl overflow-hidden mt-2 shadow-sm">
            
            <button className="w-full flex items-center justify-between p-4 bg-transparent border-b border-neutral-100 hover:bg-neutral-50 transition-colors group cursor-pointer text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-50 text-neutral-700 flex items-center justify-center border border-neutral-200">
                  <Settings size={20} />
                </div>
                <span className="text-[15px] font-bold text-neutral-800">Settings</span>
              </div>
              <ChevronRight size={18} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-transparent hover:bg-neutral-50 transition-colors group cursor-pointer text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-50 text-neutral-700 flex items-center justify-center border border-neutral-200">
                  <HelpCircle size={20} />
                </div>
                <span className="text-[15px] font-bold text-neutral-800">Help & Support</span>
              </div>
              <ChevronRight size={18} className="text-neutral-400 group-hover:text-neutral-600 transition-colors" />
            </button>
            
          </div>
        </div>

        {/* Logout Button */}
        <button className="mt-4 w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-neutral-50 text-neutral-800 hover:bg-neutral-100 transition-colors border border-neutral-200 font-bold cursor-pointer">
          <LogOut size={18} />
          <span>Log Out</span>
        </button>

      </div>
    </div>
  );
}
