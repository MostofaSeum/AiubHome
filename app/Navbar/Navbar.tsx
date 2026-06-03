"use client";

import React from 'react';
import Link from 'next/link';

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  return (
    <nav className={`transition-all duration-300 relative z-50 border-b ${isScrolled ? 'bg-[#0f4a8a] border-transparent' : 'bg-transparent backdrop-blur-[1px] border-white/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-[60px] gap-8">

          <div className="hidden lg:flex space-x-8 text-[15px] font-bold text-white uppercase tracking-wider items-center">
            
            {/* ABOUT*/}
            <div className="relative group h-[60px] flex items-center">
              <Link href="#" className="hover:text-gray-300 transition-colors h-full flex items-center">
                About
              </Link>
              <div className="absolute top-[60px] left-0 w-64 bg-[#053d7b]/95 border border-slate-700/40 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col text-sm font-medium normal-case tracking-normal text-left z-50">
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Overview</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">General Information</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Rules of Campus Entry</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Why Study Here</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Resources</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Career</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Convocation</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors last:border-none">Video</Link>
              </div>
            </div>

            {/* ACADEMICS MENU */}
            <div className="group h-[60px] flex items-center">
              <Link href="#" className="hover:text-gray-300 transition-colors h-full flex items-center">
                Academics
              </Link>
              
              {/*  MENU CONTAINER */}
              <div className="absolute top-[60px] left-0 right-0 w-full bg-[#053d7b] border-t border-blue-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-10 px-4 sm:px-6 lg:px-8 text-left normal-case tracking-normal font-normal">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                  
                  {/*Faculties */}
                  <div>
                    <h3 className="text-[#52a8e8] text-[17px] font-bold pb-2 border-b border-blue-700/50 mb-4 tracking-wide">
                      Faculties
                    </h3>
                    <div className="flex flex-col space-y-3 text-[14px]">
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Faculty of Arts and Social Sciences</Link>
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Faculty of Business Administration</Link>
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Faculty of Engineering</Link>
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Faculty of Health and Life Sciences</Link>
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Faculty of Science and Technology</Link>
                    </div>
                  </div>

                  {/*Information */}
                  <div>
                    <h3 className="text-[#52a8e8] text-[17px] font-bold pb-2 border-b border-blue-700/50 mb-4 tracking-wide">
                      Information
                    </h3>
                    <div className="flex flex-col space-y-3 text-[14px]">
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Academic Calendar</Link>
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Academic Regulations</Link>
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Course Catalog</Link>
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Tuition Fee</Link>
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Faculty List</Link>
                    </div>
                  </div>

                  {/*Partnerships */}
                  <div>
                    <h3 className="text-[#52a8e8] text-[17px] font-bold pb-2 border-b border-blue-700/50 mb-4 tracking-wide">
                      Partnerships
                    </h3>
                    <div className="flex flex-col space-y-3 text-[14px]">
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Internationalization</Link>
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Academic Partners</Link>
                      <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Strategic Partners</Link>
                    </div>
                  </div>

                  {/*Institutes & Accreditations */}
                  <div className="flex flex-col space-y-6">
                    {/* Section A: Institutes */}
                    <div>
                      <h3 className="text-[#52a8e8] text-[17px] font-bold pb-2 border-b border-blue-700/50 mb-4 tracking-wide">
                        Institutes
                      </h3>
                      <div className="flex flex-col space-y-3 text-[14px]">
                        <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Institute of Continuing Education</Link>
                        <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">Dr. Anwarul Abedin Institute of Innovation (D2A2I)</Link>
                      </div>
                    </div>

                    {/* Section B: Accreditations */}
                    <div>
                      <h3 className="text-[#52a8e8] text-[17px] font-bold pb-2 border-b border-blue-700/50 mb-4 tracking-wide">
                        Accreditations
                      </h3>
                      <div className="flex flex-col space-y-3 text-[14px]">
                        <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">IQAC</Link>
                        <Link href="#" className="text-gray-100 hover:text-blue-300 transition-colors">CETL</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <Link href="#" className="hover:text-gray-300 transition-colors">Admission</Link>
          </div>

          <div className="flex-shrink-0 flex justify-center items-center relative h-[60px] w-24">
            <div className="absolute top-1/2 -translate-y-1/4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-[3px] border-white z-10 overflow-hidden">
              <img 
                src="/images/aiub-logo.png" 
                alt="AIUB Logo" 
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          
          {/* Right Links */}
          <div className="hidden lg:flex space-x-8 text-[15px] font-bold text-white uppercase tracking-wider items-center">
            <Link href="#" className="hover:text-gray-300 transition-colors h-full flex items-center">
              On Campus
            </Link>
            {/* ADMINSTRATION */}
            <div className="relative group h-[60px] flex items-center">
              <Link href="#" className="hover:text-gray-300 transition-colors h-full flex items-center">
                Administration
              </Link>
              <div className="absolute top-[60px] left-0 w-64 bg-[#053d7b]/95 border border-slate-700/40 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col text-sm font-medium normal-case tracking-normal text-left z-50">
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">The Vice Chancellor</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">The Pro Vice Chancellor</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">The Chairman</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">The Founders</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Institutional Policy</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Offices</Link>
              </div>
            </div>
            {/* Research */}
            <div className="relative group h-[60px] flex items-center">
              <Link href="#" className="hover:text-gray-300 transition-colors h-full flex items-center">
                Research
              </Link>
              <div className="absolute top-[60px] left-0 w-64 bg-[#053d7b]/95 border border-slate-700/40 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col text-sm font-medium normal-case tracking-normal text-left z-50">
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Research Overview</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Publications</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Journals</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Research Groups</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Research Labs</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">IRB</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Research Center</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Conferences</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Library</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Collaborating Institutes</Link>
                <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Innovations</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
