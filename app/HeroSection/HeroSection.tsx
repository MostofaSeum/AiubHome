"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = React.useState(1);

  const slides = [
    {
      url: '/Images/Fig-1.webp',
    },
    {
      url: '/Images/Fig-2.webp',
      hasBrandOverlay: true
    },
    {
      url: '/Images/Fig-3.webp',
      tag: 'Leading',
      title: 'The Educational Experience'
    },
    {
      url: '/Images/Fig-4.webp'
    },
    {
      url: '/Images/Fig-5.webp',
      tag: 'TECH - CENTRIC',
      title: 'TEACHING'
    },
    {
      url: '/Images/Fig-6.webp'
    },
    {
      url: '/Images/Fig-7.webp',
      tag: 'URBAN',
      title: 'GREEN CAMPUS'
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-950">
      {/* Zoom Effect & Text Slide In Animation */}
      <style>{`
        .swiper-slide-hero img {
          transform: scale(1);
          transition: transform 15000ms cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .swiper-slide-hero.swiper-slide-active img {
          transform: scale(1.08);
        }
        .hero-text-container {
          opacity: 0;
          transform: translateY(50px);
          transition: transform 1200ms cubic-bezier(0.25, 1, 0.5, 1), opacity 1200ms ease;
          transition-delay: 200ms;
        }
        .swiper-slide-hero.swiper-slide-active .hero-text-container {
          opacity: 1;
          transform: translateY(0);
        }
        .brand-title {
          opacity: 0;
          transform: translateX(-50px);
          transition: transform 1200ms cubic-bezier(0.25, 1, 0.5, 1), opacity 1200ms ease;
          transition-delay: 200ms;
        }
        .swiper-slide-hero.swiper-slide-active .brand-title {
          opacity: 0.85;
          transform: translateX(0);
        }
        .brand-tagline {
          opacity: 0;
          transform: translateX(-50px);
          transition: transform 1200ms cubic-bezier(0.25, 1, 0.5, 1), opacity 1200ms ease;
          transition-delay: 450ms;
        }
        .swiper-slide-hero.swiper-slide-active .brand-tagline {
          opacity: 1;
          transform: translateX(0);
        }
        .brand-logos {
          opacity: 0;
          transform: translateX(-50px);
          transition: transform 1200ms cubic-bezier(0.25, 1, 0.5, 1), opacity 1200ms ease;
          transition-delay: 700ms;
        }
        .swiper-slide-hero.swiper-slide-active .brand-logos {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

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
          <SwiperSlide key={idx} className="w-full h-full relative swiper-slide-hero">
            <img
              src={slide.url}
              alt={`AIUB Campus View ${idx + 1}`}
              className="w-full h-full object-cover brightness-75"
            />

            {/*Custom AIUB Brand Overlay with Logos*/}
            {slide.hasBrandOverlay && (
              <div className="absolute inset-0 flex items-end justify-end px-8 md:px-16 pb-20 md:pb-28 z-20 pointer-events-none">
                <div className="select-none flex flex-col items-end text-right w-full max-w-3xl">
                  
                  {/*Giant AIUB*/}
                  <h1 className="brand-title text-[white] text-7xl sm:text-8xl md:text-[10rem] font-black tracking-wide leading-none opacity-85">
                    AIUB
                  </h1>
                  
                  {/* Tagline */}
                  <p className="brand-tagline text-white text-sm sm:text-lg md:text-2xl font-bold tracking-[0.3em] uppercase mt-2 md:mt-4 whitespace-nowrap">
                    Where Leaders are Created
                  </p>

                  {/* Faculty Logos Row */}
                  <div className="brand-logos flex flex-wrap gap-3 sm:gap-6 md:gap-8 mt-6 md:mt-8 items-center justify-end w-full">
                    <img src="/Images/Logos/fass-logo.webp" alt="FASS Logo" className="h-10 sm:h-16 md:h-20 object-contain filter drop-shadow-md" />
                    <img src="/Images/Logos/fba-logo.webp" alt="FBA Logo" className="h-10 sm:h-16 md:h-20 object-contain filter drop-shadow-md" />
                    <img src="/Images/Logos/fe-logo.webp" alt="FBE Logo" className="h-10 sm:h-16 md:h-20 object-contain filter drop-shadow-md" />
                    <img src="/Images/Logos/fst-short-logo.webp" alt="FST Logo" className="h-10 sm:h-16 md:h-20 object-contain filter drop-shadow-md" />
                    <img src="/Images/Logos/fhls-logo_with_glow.webp" alt="FSHLS Logo" className="h-10 sm:h-16 md:h-20 object-contain filter drop-shadow-md" />
                  </div>

                </div>
              </div>
            )}

            {/*Standard Text Content Overlay*/}
            {!slide.hasBrandOverlay && slide.tag && slide.title && (
              <div className="absolute inset-0 flex items-end justify-start max-w-7xl mx-auto px-8 md:px-16 pb-24 md:pb-36 z-20 pointer-events-none">
                <div className="hero-text-container select-none text-left">
                  <span className="text-[#52a8e8] text-sm md:text-7xl font-bold tracking-[0.25em] uppercase block">
                    {slide.tag}
                  </span>
                  <h1 className="text-white text-5xl md:text-xl font-black tracking-wide mt-3 uppercase leading-none">
                    {slide.title}
                  </h1>
                </div>
              </div>
            )}
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
}