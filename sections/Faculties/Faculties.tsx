"use client";

import TypingText from "../../components/ui/TypingText/TypingText";
import Image from "next/image";

import { facultyData } from "../../data/faculties";

export default function Faculties() {

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center items-center mb-12">
        <div className="flex items-baseline select-none relative">
          <TypingText
            text="Faculties"
            className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a] opacity-75 leading-none tracking-normal font-sans"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-wrap lg:flex-nowrap justify-center items-center">
        {facultyData.map((faculty) => (
          <div
            key={faculty.id}
            className="relative flex-1 min-w-[260px] max-w-[340px] lg:max-w-none h-[420px] rounded-lg group shadow-lg bg-zinc-900 cursor-pointer z-0 hover:z-30 transition-all duration-500 will-change-transform"
          >
            {/* Visual Boundary Wrapper Layer */}
            <div className="absolute inset-0 rounded-lg overflow-hidden group-hover:overflow-visible transition-all duration-500">
              {/* Base Image */}
              <Image
                src={faculty.img}
                alt={faculty.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-110 will-change-transform"
              />

              {/* Standard Shadow Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

              {/* Hover Mesh Gradient Layer */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-700 ease-out z-10 pointer-events-none ${faculty.meshClass}`}
              >
                {faculty.meshGlows}
              </div>
            </div>

            {/* Logo */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-lg">
              <Image
                src={faculty.hoverLogo}
                alt={faculty.name}
                width={96}
                height={96}
                className="absolute top-12 left-1/2 -translate-x-1/2 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Content Text Container Layout */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-20 pointer-events-none">
              {/* Short name */}
              <span className="text-white/60 text-xs font-mono font-bold tracking-widest uppercase mb-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {faculty.shortName}
              </span>

              {/* Full Name */}
              <h3
                className={`text-white text-lg md:text-xl font-bold tracking-wide leading-snug transition-colors duration-500 ${faculty.hoverTextClass}`}
              >
                {faculty.name}
              </h3>

              {/* Line indicator */}
              <div
                className={`w-8 h-[3px] bg-[#0f4a8a] mt-4 rounded-full group-hover:w-16 transition-all duration-500 ease-out ${faculty.hoverLineClass}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}