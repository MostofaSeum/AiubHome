import React from 'react';
import Link from 'next/link';

export default function SubNavbar({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className={`transition-all duration-300 py-2 px-4 md:px-8 hidden lg:block relative z-40 border-b ${isScrolled ? 'bg-[#1b1b1b]/95 backdrop-blur-sm border-gray-800' : 'bg-tranparent backdrop-blur-[1px] border-white/10'} text-[#dfa153]`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[28px] tracking-wide font-semibold text-[13px]">
        {/* Left Buttons */}
        <div className="flex items-center gap-3.5">
          <Link href="#" className="hover:text-white transition-all duration-200">Notices</Link>
          <span className="text-gray-600 font-light">|</span>
          <Link href="#" className="hover:text-white transition-all duration-200">News And Events</Link>
          <span className="text-gray-600 font-light">|</span>
          <Link href="#" className="hover:text-white transition-all duration-200">Newsletter</Link>
          <span className="text-gray-600 font-light">|</span>
          <Link href="#" className="hover:text-white transition-all duration-200">Convocation</Link>
        </div>

        {/* Center Spacer for the hanging logo */}
        <div className="w-24 flex-shrink-0"></div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3.5">
          <Link href="#" className="hover:text-white transition-all duration-200">Alumni</Link>
          <span className="text-gray-600 font-light">|</span>
          <Link href="#" className="hover:text-white transition-all duration-200">Visitors</Link>
          <span className="text-gray-600 font-light">|</span>
          <Link href="#" className="hover:text-white transition-all duration-200">Future Students</Link>
          <span className="text-gray-600 font-light">|</span>
          <Link href="#" className="hover:text-white transition-all duration-200">Campus Map</Link>
        </div>
      </div>
    </div>
  );
}
