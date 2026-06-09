import TypingText from "../../components/ui/TypingText/TypingText";
import GridMotion from "../../components/ui/GridMotion/GridMotion";

import { newsAndEventsImages } from "../../data/news";

export default function NewsAndEvents() {
  return (
    <div className="relative w-full bg-[#faf6f6ff] border-t border-zinc-900 overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Title as it was before */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-10">
        <div className="flex items-baseline select-none relative">
          <TypingText
            text="News"
            className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a] opacity-75 leading-none tracking-normal font-sans"
          />
          <TypingText
            text="And Events"
            className="text-[#0f4a8a] font-black tracking-[0.25em] text-sm md:text-base uppercase ml-3 relative z-10"
          />
        </div>
      </div>

      {/* GridMotion Component inside */}
      <div className="w-full h-[500px] relative z-10">
        <GridMotion items={newsAndEventsImages} gradientColor="#faf6f6ff" />
      </div>
    </div>
  );
}
