"use client";

import React from 'react';
import TopHeader from './TopHeader/page';
import Navbar from './Navbar/page';
import SubNavbar from './SubNavbar/page';
import HeroSection from './HeroSection/page';
import ImportantLinksBar from './ImportantLinksBar/page';
import FindYourProgramAndNotices from './FindYourProgramAndNotices/page';
import NewsAndEvents from './NewsAndEvents/page';
import Faculties from './Faculties/page';
import Footer from './Footer/page';

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        <TopHeader isScrolled={isScrolled} />
        <Navbar isScrolled={isScrolled} />
        <div className={`transition-all duration-300 ease-in-out ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
          <SubNavbar isScrolled={isScrolled} />
        </div>
      </header>
      <HeroSection />
      <main className="flex-grow">
        <ImportantLinksBar />
        <FindYourProgramAndNotices/>
        <NewsAndEvents/>
        <Faculties/>
      </main>
      <Footer />
    </div>
  );
}