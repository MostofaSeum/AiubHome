"use client";

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay,Navigation, EffectFade } from 'swiper/modules';

const TopHeader = ({ isScrolled }: { isScrolled: boolean }) => (
  <div className={`transition-colors duration-300 text-[#52a8e8] text-[13px] py-1.5 px-4 md:px-8 flex justify-between items-center ${isScrolled ? 'bg-[#2c2c2c]' : 'bg-[#2c2c2c]/40 backdrop-blur-[1px] border-b border-white/5'}`}>
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

const Navbar = ({ isScrolled }: { isScrolled: boolean }) => (
  <nav className={`transition-all duration-300 relative z-50 border-b ${isScrolled ? 'bg-[#0f4a8a] border-transparent' : 'bg-black/10 backdrop-blur-[1px] border-white/10'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center h-[60px] gap-8">

<div className="hidden lg:flex space-x-8 text-[15px] font-bold text-white uppercase tracking-wider items-center">
  
  {/* ABOUT*/}
  <div className="relative group h-[60px] flex items-center">
    <Link href="#" className="hover:text-gray-300 transition-colors h-full flex items-center">
      About
    </Link>
    <div className="absolute top-[60px] left-0 w-64 bg-[#1c3352]/95 border border-slate-700/40 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col text-sm font-medium normal-case tracking-normal text-left z-50">
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

  {/* ACADEMICS MEGA MENU */}
  <div className="group h-[60px] flex items-center">
    <Link href="#" className="hover:text-gray-300 transition-colors h-full flex items-center">
      Academics
    </Link>
    
    {/* FULL WIDTH MEGA MENU CONTAINER */}
    <div className="absolute top-[60px] left-0 right-0 w-full bg-[#0f4a8a] border-t border-blue-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-10 px-4 sm:px-6 lg:px-8 text-left normal-case tracking-normal font-normal">
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
              src="/Images/aiub-logo.png" 
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
    <div className="absolute top-[60px] left-0 w-64 bg-[#1c3352]/95 border border-slate-700/40 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col text-sm font-medium normal-case tracking-normal text-left z-50">
      <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">The Vice Chancellor</Link>
      <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">The Pro Vice Chancellor</Link>
      <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">The Chairman</Link>
      <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">The Founders</Link>
      <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Institutional Policy</Link>
      <Link href="#" className="px-5 py-3.5 text-gray-100 hover:bg-[#0f4a8a] hover:text-white transition-colors border-b border-slate-700/20">Offices</Link>
    </div>
  </div>
            {/* ADMINSTRATION */}
  <div className="relative group h-[60px] flex items-center">
    <Link href="#" className="hover:text-gray-300 transition-colors h-full flex items-center">
      Research
    </Link>
    <div className="absolute top-[60px] left-0 w-64 bg-[#1c3352]/95 border border-slate-700/40 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col text-sm font-medium normal-case tracking-normal text-left z-50">
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

const SubNavbar = ({ isScrolled }: { isScrolled: boolean }) => (
  <div className={`transition-all duration-300 py-2 px-4 md:px-8 hidden lg:block relative z-40 border-b ${isScrolled ? 'bg-[#1b1b1b]/95 backdrop-blur-sm border-gray-800' : 'bg-black/10 backdrop-blur-[1px] border-white/10'} text-[#dfa153]`}>
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

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  const slides = [
    { url: '/Images/Fig-1.webp'},
    { url: '/Images/Fig-2.webp'},
    { url: '/Images/Fig-3.webp'},
    { url: '/Images/Fig-4.webp'},
    { url: '/Images/Fig-5.webp'},
    { url: '/Images/Fig-6.webp'},
    { url: '/Images/Fig-7.webp'},
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-950">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        modules={[Autoplay, Navigation, EffectFade]}
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="w-full h-full relative">
            <img 
              src={slide.url} 
              alt={`AIUB Campus View ${idx + 1}`} 
              className="w-full h-full object-cover"
            />
            {/* Dark bottom & top overlay to keep text legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 pointer-events-none" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation - Left Side */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center bg-transparent hover:bg-black/60 text-white border border-white/20 hover:border-white/10 rounded shadow-lg z-30 overflow-hidden text-sm font-semibold select-none group transition-all duration-300">
        <span className="w-0 opacity-0 group-hover:w-16 group-hover:opacity-100 py-3.5 border-r border-transparent group-hover:border-white/10 text-gray-200 font-mono tracking-widest text-center overflow-hidden transition-all duration-300 ease-in-out">
          {activeIndex}/7
        </span>
        <button className="swiper-button-prev-custom px-5 py-3.5 hover:bg-white/10 text-white transition-all cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Navigation - Right Side */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center bg-transparent hover:bg-black/60 text-white border border-white/20 hover:border-white/10 rounded shadow-lg z-30 overflow-hidden text-sm font-semibold select-none group transition-all duration-300">
        <span className="w-0 opacity-0 group-hover:w-16 group-hover:opacity-100 py-3.5 border-r border-transparent group-hover:border-white/10 text-gray-200 font-mono tracking-widest text-center overflow-hidden transition-all duration-300 ease-in-out">
          {activeIndex}/7
        </span>
        <button className="swiper-button-next-custom px-5 py-3.5 hover:bg-white/10 text-white transition-all cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};


const FindYourProgramAndNotices = () => {
  const notices = [
    { date: "June 01", title: "Final Term Examination Schedule - Spring 2026" },
    { date: "May 28", title: "Notice Regarding Payment of Tuition Fees for Summer 2026" },
    { date: "May 25", title: "Registration Schedule for Summer 2026-27 Semester" },
    { date: "May 20", title: "Convocation Ceremony 2026: General Guidelines for Graduates" },
    { date: "May 15", title: "Holiday Notice: Holy Eid-ul-Adha 2026" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      {/* Latest Events Section */}
      <div className="lg:col-span-2">
        <div className="flex justify-between items-center border-b-2 border-[#0f4a8a] mb-6 pb-2">
          <h2 className="text-2xl font-bold text-[#0f4a8a] uppercase">Find Your Program</h2>
          <Link href="#" className="text-sm text-gray-600 hover:text-[#0f4a8a]">View All</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div key={item} className="bg-white shadow-sm border border-gray-200 group cursor-pointer">
              <div className="h-48 bg-gray-200 overflow-hidden relative">
                 <img 
                  src={`/images/news-${item}.jpg`} 
                  alt="Event" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x200?text=News+Image"; }}
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2 font-semibold">MAY 2026</p>
                <h3 className="font-bold text-[17px] mb-3 text-gray-800 group-hover:text-[#0f4a8a] transition-colors leading-snug">
                  AIUB Organized International Conference on Computing Advancements
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  The Department of Computer Science hosted a prestigious gathering of international researchers and academicians to discuss the future of AI and software engineering...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notice Board */}
      <div>
        <div className="flex justify-between items-center border-b-2 border-[#0f4a8a] mb-6 pb-2">
          <h2 className="text-2xl font-bold text-[#0f4a8a] uppercase">Notice</h2>
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
};

const Footer = () => (
  <footer className="bg-[#1a1a1a] text-gray-400 pt-16 pb-8 border-t-[5px] border-[#0f4a8a]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <div className="md:col-span-2">
        <h3 className="text-white text-xl font-bold mb-5 font-serif">American International University-Bangladesh</h3>
        <p className="text-sm leading-relaxed max-w-md">
          404/3, Kuratoli, Khilkhet,<br />
          Dhaka 1229, Bangladesh<br />
          <br />
          <strong>Email:</strong> info@aiub.edu<br />
          <strong>Phone:</strong> +88 02 841 4046-9; +88 02 841 4050
        </p>
      </div>
      <div>
        <h3 className="text-white text-lg font-semibold mb-5">Quick Links</h3>
        <ul className="space-y-3 text-sm">
          <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Library</Link></li>
          <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Journals</Link></li>
          <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Research</Link></li>
          <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">IQAC</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white text-lg font-semibold mb-5">Portals</h3>
        <ul className="space-y-3 text-sm">
          <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">VUES</Link></li>
          <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Webmail</Link></li>
          <li><Link href="#" className="hover:text-[#0f4a8a] transition-colors">Alumni Portal</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© {new Date().getFullYear()} American International University-Bangladesh. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Use</Link>
        </div>
      </div>
    </div>
  </footer>
);
const ImportantLinksBar = () => {
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
};
export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        <TopHeader isScrolled={isScrolled} />
        <Navbar isScrolled={isScrolled} />
        <div className={`transition-all duration-300 ease-in-out ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
          <SubNavbar isScrolled={isScrolled} />
        </div>
      </header>
      <HeroSection />
      <main className="flex-grow">
        <ImportantLinksBar />
        <FindYourProgramAndNotices/>
      </main>
      <Footer />
    </div>
  );
}