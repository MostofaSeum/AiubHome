import React from "react";

export interface FacultyItem {
  id: number;
  name: string;
  shortName: string;
  img: string;
  meshClass: string;
  meshGlows: React.ReactNode;
  hoverTextClass: string;
  hoverLineClass: string;
  hoverLogo: string;
}

export const facultyData: FacultyItem[] = [
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
