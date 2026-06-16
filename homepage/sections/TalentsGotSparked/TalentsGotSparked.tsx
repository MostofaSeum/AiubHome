"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";
import TypingText from "../../components/ui/TypingText/TypingText";

interface TalentStoryItem {
  id?: string;
  title: string;
  imageUrl: string;
  status?: string;
}

interface TalentsGotSparkedProps {
  initialStories?: TalentStoryItem[];
}

export default function TalentsGotSparked({
  initialStories = [],
}: TalentsGotSparkedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [index, setIndex] = useState(0);

  // Filter published stories (strictly from database)
  const dbStories = initialStories.filter((s) => s.status === "published");
  const totalCount = dbStories.length;

  // Defining the scrolling position dynamically based on story count
  const currentIndex = useTransform(
    scrollYProgress,
    [0, 0.9],
    [0, Math.max(totalCount - 0.1, 0)],
  );

  useMotionValueEvent(currentIndex, "change", (latest) => {
    const idx = Math.min(Math.max(Math.floor(latest), 0), Math.max(totalCount - 1, 0));
    setIndex(idx);
  });

  return (
    <section className="w-full bg-white min-h-[50vh] py-16">
      <div className="max-w-7xl mx-auto flex justify-start items-center px-4 mb-10">
        <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none font-sans">
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

      {totalCount > 0 ? (
        <div ref={containerRef} className="h-[600vh] relative bg-white">
          <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center px-4 md:px-8 max-w-7xl mx-auto gap-8 md:gap-12 justify-center">
            {/* Animated Image Side */}
            <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[450px] relative overflow-hidden rounded-xl shadow-md bg-zinc-100">
              <AnimatePresence mode="popLayout">
                {dbStories[index] && (
                  <motion.img
                    key={index}
                    src={dbStories[index].imageUrl}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full absolute object-cover"
                    alt={dbStories[index].title}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Animated Headline Side */}
            <div className="w-full md:w-1/2">
              <AnimatePresence mode="wait">
                {dbStories[index] && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-2"
                  >
                    <h2 className="text-black text-[1.75rem] md:text-[2.5rem] font-bold leading-tight font-sans">
                      {dbStories[index].title}
                    </h2>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 h-[250px]">
          <div className="flex items-center justify-center h-full border-2 border-dashed border-gray-300 rounded-md bg-gray-50/50">
            <p className="text-gray-500 text-lg">No talent stories uploaded yet.</p>
          </div>
        </div>
      )}
    </section>
  );
}
