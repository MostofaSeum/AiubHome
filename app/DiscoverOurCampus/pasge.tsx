'use client'
import React from "react";

export default function DiscoverOurCampus() {
    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto flex justify-left items-center py-12">
                <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none">
                    <span className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a]">
                        Discover
                    </span>
                    <span className="text-[1.5rem] md:text-[2rem] font-bold text-black uppercase ml-4 tracking-wider">
                        Our Campus
                    </span>
                </div>
            </div>
<div className="w-full h-[38rem] relative bg-zinc-900 overflow-hidden">
  <img 
    src="/images/DiscoverOurCampus/Library.webp" 
    alt="Discover Our Campus" 
    className="w-full h-full object-cover" 
  />
  
  <div className="absolute inset-0 flex">
    {[
      "Library",
      "Auditorium",
      "Cafeteria",
      "Gymnasium",
      "Laboratories",
      "Study Zones"
    ].map((title, index) => (
      <div 
        key={index}
        className="flex-1 flex flex-col items-center justify-end pb-12 border-r border-white/10 last:border-0 bg-black/25 hover: transition-all duration-500 group cursor-pointer"
      >
        <div className="flex flex-col items-center gap-4 transition-transform duration-500 group-hover:-translate-y-2">
          <span className="text-white font-sans font-medium text-2xl tracking-wide [writing-mode:vertical-lr] select-none opacity-85 group-hover:opacity-100 transition-opacity duration-300">
            {title}
            
          </span>
          
          <div className="w-[3px] h-0 bg-white shadow-[0_0_8px_#fff] opacity-0 group-hover:h-8 group-hover:opacity-100 transition-all duration-500 ease-out rounded-full" />
        </div>
      </div>
    ))}
  </div>
</div>
        </section>
    );
}