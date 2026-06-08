import React from 'react';
import Link from 'next/link';

export default function TopHeader({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className={`transition-all duration-300 text-[13px] py-1.5 px-4 md:px-8 flex justify-between items-center ${isScrolled ? 'text-[#52a8e8] bg-[#2c2c2c]' : 'text-white bg-transparent backdrop-blur-[1px] border-b border-white/5'}`}>
      <div className="flex gap-5 font-medium tracking-wide">
        <span>American International University-Bangladesh</span>
      </div>
      <div className="flex gap-4 font-medium items-center">
        <button aria-label="Search" className="hover:text-blue-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <Link href="#" className="hover:text-blue-300 transition-colors">Login</Link>
        <Link href="#" className="hover:text-blue-300 transition-colors">Web Mail</Link>
        <Link href="#" className="hover:text-blue-300 transition-colors">MS Teams</Link>
        <Link href="#" className="hover:text-blue-300 transition-colors">Contact Us</Link>
      </div>
    </div>
  );
}
