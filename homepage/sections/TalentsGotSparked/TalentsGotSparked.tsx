"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import TypingText from "../../components/ui/TypingText/TypingText";

const campusStories = [
  {
    title:
      "AIUB Writes a Winning Chapter at Inter University Table Tennis 2026",
    img: "/images/talentsgotsparked/winningchapter-(8).webp",
  },
  {
    title:
      "AIUB Crowned Champions of Inter-University Football Tournament 2025",
    img: "/images/talentsgotsparked/inter-university-football-tournament-2025-.webp",
  },
  {
    title:
      "AIUB EEE Student’s Achievement at IEEE Young Professionals Networking Meet-Up 2025",
    img: "/images/talentsgotsparked/ieeeyoungprofessionalsnetworkingmeet-(3).webp",
  },
  {
    title:
      "AIUB’s Historic Bronze Finish at the Bangladesh National Basketball Championship 2025",
    img: "/images/talentsgotsparked/bangladeshnationalbasketballchampionship-(1).webp",
  },
  {
    title: "AIUB Students Won Best Paper Award at ICEBTM hosted by IUB",
    img: "/images/talentsgotsparked/bestpaperaward-(2).webp",
  },
  {
    title: "Architecture student Wins Italian MAECI Scholarship",
    img: "/images/talentsgotsparked/maecischolarship02.webp",
  },
];

export default function TalentsGotSparked() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [index, setIndex] = useState(0);
  // Defining the scrolling position
  const currentIndex = useTransform(scrollYProgress, [0, 0.9], [0, 5.9]);

  useEffect(() => {
    const unsubscribe = currentIndex.on("change", (v) => {
      const idx = Math.min(Math.max(Math.floor(v), 0), 5);
      setIndex(idx);
    });
    return () => unsubscribe();
  }, [currentIndex]);

  return (
    <section className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto flex justify-start items-center py-12 px-4">
        <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none">
          <TypingText
            text="Talents"
            className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a]"
          />
          <TypingText
            text="Got Sparked"
            className="text-[1.5rem] md:text-[2rem] font-bold text-black uppercase ml-4 tracking-wider"
          />
        </div>
      </div>

      <div ref={containerRef} className="h-[600vh] relative bg-white">
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center px-4 md:px-8 max-w-7xl mx-auto gap-8 md:gap-12 justify-center">
          {/* Animated Image Side */}
          <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[450px] relative overflow-hidden rounded-xl shadow-md bg-zinc-100">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={index}
                src={campusStories[index].img}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full  absolute"
              />
            </AnimatePresence>
          </div>

          {/* Animated Headline Side */}
          <div className="w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2"
              >
                <h2 className="text-black text-[1.75rem] md:text-[2.5rem] font-bold leading-tight font-sans">
                  {campusStories[index].title}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
