"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingText from "../TypingText/TypingText";

const campusItems = [
  {
    title: "Library",
    headerTitle: "Library",
    description: "Where scholarly research merges in academia.",
    img: "/images/discoverourcampus/Library.webp",
  },
  {
    title: "Sports Complex",
    headerTitle: "Pick your ground.",
    description:
      "Cricket, football, basketball, tennis, badminton, volleyball courts - whatever your game is we have the ground.",
    img: "/images/discoverourcampus/SportsComplex.webp",
  },
  {
    title: "Study Area",
    headerTitle: "Study Area",
    description: "Take a break to be prepared for next session",
    img: "/images/discoverourcampus/StudyArea.webp",
  },
  {
    title: "Gymnasium",
    headerTitle: "Gymnasium",
    description: "Boost your strength a bit with sweaty experience.",
    img: "/images/discoverourcampus/gymnasium-aiub.webp",
  },
  {
    title: "Amphitheater",
    headerTitle: "Amphitheater",
    description: "Where meets the colors, culture and melody of togetherness.",
    img: "/images/discoverourcampus/Amphitheater.webp",
  },
  {
    title: "Computer Laboratories",
    headerTitle: "Computer Laboratories",
    description: "Make better clicks with advance technology",
    img: "/images/discoverourcampus/ComputerLab.webp",
  },
];

export default function DiscoverOurCampus() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto flex justify-left items-center py-12">
        <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none">
          <TypingText
            text="Discover"
            className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a]"
          />
          <TypingText
            text="Our Campus"
            className="text-[1.5rem] md:text-[2rem] font-bold text-black uppercase ml-4 tracking-wider"
          />
        </div>
      </div>

      <div className="w-full h-[38rem] relative bg-zinc-900 overflow-hidden">
        {/* Crossfade Background Images*/}
        {campusItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeIndex === index
                ? "opacity-100 z-0"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />
          </div>
        ))}

        {/* Text Content Overlay */}
        <div className="absolute top-16 left-12 md:left-20 z-20 max-w-2xl pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h2 className="text-white text-5xl md:text-6xl font-bold tracking-wide font-sans mb-4">
                {campusItems[activeIndex].headerTitle}
              </h2>
              <p className="text-white/85 text-lg md:text-xl font-sans font-normal leading-relaxed">
                {campusItems[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vertical Column Overlay */}
        <div className="absolute inset-0 flex z-30">
          {campusItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="flex-1 flex flex-col items-center justify-end pb-12 border-r border-white/10 last:border-0 bg-black/10 hover:bg-black/5 transition-all duration-300 group cursor-pointer"
            >
              {/* Fresh white hovered text */}
              <div className="flex flex-col items-center transition-transform duration-500 group-hover:-translate-y-2">
                <span
                  className={`font-sans font-medium text-lg tracking-wide [writing-mode:vertical-rl] rotate-180 select-none transition-all duration-300 ${
                    activeIndex === index
                      ? "text-white opacity-100 font-semibold"
                      : "text-white/60 group-hover:text-white/90"
                  }`}
                >
                  {activeIndex === index ? `— ${item.title}` : item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
