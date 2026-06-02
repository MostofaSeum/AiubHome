"use client";

import TypingText from '../TypingText/page';

export default function Faculties() {
  const facultyData = [
    {
      id: 1,
      name: "Faculty of Arts and Social Sciences",
      shortName: "FASS",
      img: "/images/faculties/fass.webp"
    },
    {
      id: 2,
      name: "Faculty of Business Administration",
      shortName: "FBA",
      img: "/images/faculties/fba.webp"
    },
    {
      id: 3,
      name: "Faculty of Engineering",
      shortName: "FE",
      img: "/images/faculties/fe.webp"
    },
    {
      id: 4,
      name: "Faculty of Health and Life Sciences",
      shortName: "FHLS",
      img: "/images/faculties/fhls-1.webp"
    },
    {
      id: 5,
      name: "Faculty of Science and Technology",
      shortName: "FST",
      img: "/images/faculties/fst.webp"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto flex justify-center items-center mb-12">
        <div className="flex items-baseline select-none relative">
          <TypingText 
            text="Faculties" 
            className="text-[4rem] md:text-[5.5rem] font-bold text-[#0f4a8a] opacity-75 leading-none tracking-normal font-sans" 
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-wrap lg:flex-nowrap justify-center items-center gap-6">
        {facultyData.map((faculty) => (
          <div
            key={faculty.id}
            className="relative flex-1 min-w-[260px] max-w-[340px] lg:max-w-none h-[420px] rounded-lg overflow-hidden group shadow-lg bg-zinc-900 cursor-pointer transition-all duration-300 hover:shadow-xl"
          >

            <img
              src={faculty.img}
              alt={faculty.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              onError={(e) => {
                // Temporary fallback placeholders using acronym labels
                e.currentTarget.src = `https://via.placeholder.com/400x600?text=${faculty.shortName}`;
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-all duration-300 group-hover:via-black/50" />

            {/* Content Text Container Layout */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10">
              {/* Acronym Tag */}
              <span className="text-white/60 text-xs font-mono font-bold tracking-widest uppercase mb-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {faculty.shortName}
              </span>
              
              {/* Descriptive Title */}
              <h3 className="text-white text-lg md:text-xl font-bold tracking-wide leading-snug group-hover:text-blue-400 transition-colors duration-300">
                {faculty.name}
              </h3>

              {/* line*/}
              <div className="w-8 h-[3px] bg-[#0f4a8a] mt-4 rounded-full group-hover:w-16 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
