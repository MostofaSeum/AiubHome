"use client";

import React from 'react';
import Link from 'next/link';
import TypingText from '../TypingText/page';

export default function FindYourProgramAndNotices() {
  const notices = [
    { date: "June 01", title: "Final Term Examination Schedule - Spring 2026" },
    { date: "May 28", title: "Notice Regarding Payment of Tuition Fees for Summer 2026" },
    { date: "May 25", title: "Registration Schedule for Summer 2026-27 Semester" },
    { date: "May 20", title: "Convocation Ceremony 2026: General Guidelines for Graduates" },
    { date: "May 15", title: "Holiday Notice: Holy Eid-ul-Adha 2026" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      {/* Find Your Program Section */}
      <div className="lg:col-span-2 flex flex-col justify-between">
        {/* Section Title aligned with Notice Board Header */}
        <div className="flex items-baseline select-none relative mb-6 border-b-2 border-[#0f4a8a] pb-2">
          <TypingText 
            text="Find" 
            className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a] opacity-75 leading-none tracking-normal font-sans" 
          />
          <TypingText 
            text="Your Program" 
            className="text-[#0f4a8a] font-black tracking-[0.25em] text-sm md:text-base uppercase ml-3 relative z-10" 
          />
        </div>

        <div className="relative bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden h-[420px] shadow-lg flex flex-col justify-end p-6 z-10 group">
          {/* Background Student Image */}
          <img 
            src="images/find-your-program.webp" 
            alt="Find Your Program" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 "
          />

          {/* Bottom Links: Undergraduate & Graduate */}
          <div className="relative z-10 w-full px-4 md:px-8 pb-4">
            {/* Undergraduate Link */}
            <div className="border-b border-zinc-700/60 pb-3 mb-6 group/item cursor-pointer">
              <Link href="#" className="text-xl md:text-[22px] font-bold text-white hover:text-[#52a8e8] transition-colors flex justify-between items-center leading-none">
                <span>Undergraduate</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-0 group-hover/item:opacity-100 transition-opacity text-[#52a8e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Graduate Link */}
            <div className="border-b border-zinc-700/60 pb-3 group/item cursor-pointer">
              <Link href="#" className="text-xl md:text-[22px] font-bold text-white hover:text-[#52a8e8] transition-colors flex justify-between items-center leading-none">
                <span>Graduate</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-0 group-hover/item:opacity-100 transition-opacity text-[#52a8e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Notice Board */}
      <div>
        <div className="flex justify-between items-center border-b-2 border-[#0f4a8a] mb-6 pb-2">
          <h2 className="text-2xl font-bold text-[#0f4a8a] uppercase">
            <TypingText text="Notice" />
          </h2>
        </div>
        <div className="bg-white border border-gray-200 flex flex-col h-[420px]">
          <div className="flex-grow overflow-y-auto p-4 flex flex-col gap-4">
            {notices.map((notice, idx) => (
              <div key={idx} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0 group">
                <div className="flex-shrink-0 bg-gray-50 border border-gray-200 text-[#0f4a8a] p-2 text-center w-[70px] h-[70px] flex flex-col justify-center shadow-sm">
                  <span className="text-xs uppercase font-semibold">{notice.date.split(' ')[0]}</span>
                  <span className="font-bold text-xl leading-none mt-1">{notice.date.split(' ')[1]}</span>
                </div>
                <div className="flex items-center">
                  <Link href="#" className="text-[15px] text-gray-800 font-medium group-hover:text-[#0f4a8a] transition-colors leading-snug">
                    {notice.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
            <Link href="#" className="text-[#0f4a8a] font-semibold text-sm hover:underline">
              Browse All Notices
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
