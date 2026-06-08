"use client";

import React from "react";
import { LogoLoop } from "../../components/ui/LogoLoop";
import { educationalPartners } from "../../data/partners";

export default function EducationalPartners() {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-xl mx-auto flex justify-center items-center mb-10">
        <div className="flex items-baseline select-none relative font-sans tracking-normal leading-none">
          <h3 className="text-[1.5rem] md:text-[2rem] font-bold text-[#0f4a8a] uppercase ml-4 tracking-wider ">
            Educational Partners
          </h3>
        </div>
      </div>

      <div className="w-full py-8 px-4 flex justify-center items-center">
        <LogoLoop
          logos={educationalPartners}
          speed={30}
          direction="left"
          logoHeight={32}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
        />
      </div>
    </div>
  );
}
