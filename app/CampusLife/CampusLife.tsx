"use client";

import TypingText from '../TypingText/TypingText';
import { motion } from 'framer-motion';

const campusData = [
  {
    id: 1,
    name: "Sports",
    shortName: "THE EAGLE OF AIUB",
    img: "/images/campuslife/Sports.webp",
    hoverLogo: "/images/campuslife/bullseye.png"
  },
  {
    id: 2,
    name: "Indoor Games",
    shortName: "GAME ON RAIN OR SHINE:INDOOR FUN FOR ALL",
    img: "/images/campuslife/Indoor--Games.webp",
    hoverLogo: "/images/campuslife/images.png"
  },
  {
    id: 3,
    name: "Cultural Activity",
    shortName: "CREATING CONNECTIONS THROUGH CULTURE",
    img: "/images/campuslife/Cultural-Activity.webp",
    hoverLogo: "/images/campuslife/smily.png"
  },
  {
    id: 4,
    name: "Recreation",
    shortName: "WHERE LEARNING MEETS LEISURE",
    img: "/images/campuslife/recreation-2.webp",
    hoverLogo: "/images/campuslife/paperclip.png"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
} as const;

export default function CampusLife() {
  return (
    <section className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto flex justify-start items-center py-12 px-4">
        <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none">
          <TypingText
            text="Campus"
            className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a]"
          />
          <TypingText
            text="Life"
            className="text-[1.5rem] md:text-[2rem] font-bold text-black uppercase ml-4 tracking-wider"
          />
        </div>
      </div>
      <motion.div
        className="max-w-7xl mx-auto px-4 flex flex-wrap lg:flex-nowrap justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {campusData.map((campus) => (
          <motion.div
            key={campus.id}
            variants={cardVariants}
            className="relative flex-1 min-w-[260px] max-w-[340px] lg:max-w-none h-[420px] rounded-lg group shadow-lg bg-zinc-900 cursor-pointer z-0 hover:z-30 transition-all duration-500 will-change-transform"
          >
            {/* Visual Boundary Wrapper Layer */}
            <div className="absolute inset-0 rounded-lg overflow-hidden transition-all duration-500">
              {/* Base Image */}
              <img
                src={campus.img}
                alt={campus.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-110 will-change-transform"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://via.placeholder.com/340x420?text=${encodeURIComponent(campus.name)}`;
                }}
              />

              {/* Standard Shadow Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-500" />
            </div>

            {/* Content Text Container Layout */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-20 pointer-events-none">
              <div className="relative w-full flex flex-col items-start">
                {/* Logo - positioned absolutely above the short name */}
                <img
                  src={campus.hoverLogo}
                  alt={campus.name}
                  className="absolute bottom-full left-0 mb-3 w-16 h-16 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Short name */}
                <span className="text-white/60 text-xs font-mono font-bold tracking-widest uppercase mb-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {campus.shortName}
                </span>

                {/* Full Name */}
                <h3 className="text-white text-lg md:text-xl font-bold tracking-wide leading-snug">
                  {campus.name}
                </h3>

                {/* Line indicator */}
                <div className="w-8 h-[3px] bg-[#0f4a8a] mt-4 rounded-full group-hover:w-16 transition-all duration-500 ease-out" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}