"use client";

import { useState, useEffect } from "react";
import TopHeader from "./TopHeader/TopHeader";
import Navbar from "./Navbar/Navbar";
import SubNavbar from "./SubNavbar/SubNavbar";

export default function HeaderWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <TopHeader isScrolled={isScrolled} />
      <Navbar isScrolled={isScrolled} />
      <div
        className={`transition-all duration-300 ease-in-out ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}
      >
        <SubNavbar isScrolled={isScrolled} />
      </div>
    </header>
  );
}
