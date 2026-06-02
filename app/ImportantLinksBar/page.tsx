"use client";

import React from 'react';
import Link from 'next/link';

export default function ImportantLinksBar() {
  return (
    <div className="bg-[#161616] border-b border-zinc-800 w-full py-5 select-none">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-center gap-y-6 md:gap-x-7 text-center">
        
        {/* Title Label */}
        <div className="text-zinc-400 font-bold text-xs md:text-[13px] tracking-widest uppercase px-2 w-full md:w-auto">
          Important Links
        </div>

 
        <span className="text-zinc-700 hidden md:inline text-xl font-light">|</span>

        {/* Sustainability Link*/}
        <Link href="#" className="flex flex-col items-center group flex-1 md:flex-initial min-w-[120px]">
          <div className="h-12 w-auto mb-1.5 flex items-center justify-center">
            <img 
              src="/images/depositphotos.jpg" 
              alt="Sustainability Logo" 
              className="h-full object-contain group-hover:scale-105 transition-transform duration-200"
              onError={(e) => {
                // Fallback
                e.currentTarget.src = "https://via.placeholder.com/48x48?text=SDG";
              }}
            />
          </div>
          <span className="text-[#52a8e8] group-hover:text-blue-300 transition-colors font-black text-xs md:text-[13px] tracking-wider uppercase leading-none">
            Sustainability
          </span>
        </Link>

 
        <span className="text-zinc-700 hidden md:inline text-xl font-light">|</span>

        {/* Newsletter Link*/}
        <Link href="#" className="flex flex-col items-center group flex-1 md:flex-initial min-w-[120px]">
          <div className="h-12 w-auto mb-1.5 flex items-center justify-center">
            <img 
              src="/images/newsletter-logo.png" 
              alt="AIUB Newsletter" 
              className="h-full object-contain group-hover:scale-105 transition-transform duration-200"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/60x48?text=NEWS";
              }}
            />
          </div>
          <span className="text-[#52a8e8] group-hover:text-blue-300 transition-colors font-black text-xs md:text-[13px] tracking-wider uppercase leading-none">
            AIUB Newsletter
          </span>
        </Link>

 
        <span className="text-zinc-700 hidden md:inline text-xl font-light">|</span>

        {/* Erasmus Soho Project */}
        <Link href="#" className="group flex flex-col justify-center items-center px-3 min-w-[140px]">
          <span className="text-[#52a8e8] group-hover:text-blue-300 transition-colors font-black text-xs md:text-[13px] tracking-widest uppercase text-center leading-tight">
            Erasmus<br />Soho<br />Project
          </span>
        </Link>

 
        <span className="text-zinc-700 hidden md:inline text-xl font-light">|</span>

        {/* MCU 2020 Project */}
        <Link href="#" className="group flex flex-col justify-center items-center px-3 min-w-[120px]">
          <span className="text-[#52a8e8] group-hover:text-blue-300 transition-colors font-black text-xs md:text-[13px] tracking-widest uppercase text-center leading-tight">
            MCU<br />2020<br />Project
          </span>
        </Link>

 
        <span className="text-zinc-700 hidden md:inline text-xl font-light">|</span>

        {/* Responsible Futures International */}
        <Link href="#" className="group flex flex-col justify-center items-center px-3 min-w-[160px]">
          <span className="text-[#52a8e8] group-hover:text-blue-300 transition-colors font-black text-xs md:text-[13px] tracking-widest uppercase text-center leading-tight">
            Responsible<br />Futures<br />International
          </span>
        </Link>

        {/* Optional Final Divider */}
        <span className="text-zinc-700 hidden md:inline text-xl font-light">|</span>

      </div>
    </div>
  );
}
