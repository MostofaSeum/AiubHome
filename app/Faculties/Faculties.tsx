"use client";

import TypingText from "../TypingText/TypingText";
import Image from "next/image";

export default function Faculties() {
  const facultyData = [
    {
      id: 1,
      name: "Faculty of Arts and Social Sciences",
      shortName: "FASS",
      img: "/images/faculties/fass.webp",
      meshClass: "bg-[#240303]/20",
      meshGlows: (
        <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-[#b91c1c] via-[#7f1d1d]/80 to-transparent opacity-95" />
      ),
      hoverTextClass: "group-hover:text-red-200",
      hoverLineClass: "group-hover:bg-red-400",
      hoverLogo: "/images/logos/fass-logo.webp",
    },
    {
      id: 2,
      name: "Faculty of Business Administration",
      shortName: "FBA",
      img: "/images/faculties/fba.webp",
      meshClass: "bg-[#021c08]/20",
      meshGlows: (
        <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-[#15803d] via-[#14532d]/80 to-transparent opacity-95" />
      ),
      hoverTextClass: "group-hover:text-emerald-200",
      hoverLineClass: "group-hover:bg-emerald-400",
      hoverLogo: "/images/logos/fba-logo.webp",
    },
    {
      id: 3,
      name: "Faculty of Engineering",
      shortName: "FE",
      img: "/images/faculties/fe.webp",
      meshClass: "bg-[#291201]/20",
      meshGlows: (
        <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-[#d97706] via-[#78350f]/80 to-transparent opacity-95" />
      ),
      hoverTextClass: "group-hover:text-amber-200",
      hoverLineClass: "group-hover:bg-amber-400",
      hoverLogo: "/images/logos/fe-logo.webp",
    },
    {
      id: 4,
      name: "Faculty of Health and Life Sciences",
      shortName: "FHLS",
      img: "/images/faculties/fhls-1.webp",
      meshClass: "bg-[#1e032b]/20",
      meshGlows: (
        <div className="absolute bottom-0 inset-x-0 h-[65%] bg-gradient-to-t from-[#6b21a8] via-[#4c1d95]/80 to-transparent opacity-95" />
      ),
      hoverTextClass: "group-hover:text-purple-200",
      hoverLineClass: "group-hover:bg-purple-400",
      hoverLogo: "/images/logos/fhls-logo_with_glow.webp",
    },
    {
      id: 5,
      name: "Faculty of Science and Technology",
      shortName: "FST",
      img: "/images/faculties/fst.webp",
      meshClass: "bg-[#031b4e]/20",
      meshGlows: (
        <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-[#0284c7] via-[#0c4a6e]/80 to-transparent opacity-95" />
      ),
      hoverTextClass: "group-hover:text-sky-200",
      hoverLineClass: "group-hover:bg-sky-400",
      hoverLogo: "/images/logos/fst-short-logo.webp",
    },
  ];

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