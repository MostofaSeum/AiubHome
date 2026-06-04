"use client";

import React from 'react';
import TopHeader from './TopHeader/TopHeader';
import Navbar from './Navbar/Navbar';
import SubNavbar from './SubNavbar/SubNavbar';
import HeroSection from './HeroSection/HeroSection';
import ImportantLinksBar from './ImportantLinksBar/ImportantLinksBar';
import FindYourProgramAndNotices from './FindYourProgramAndNotices/FindYourProgramAndNotices';
import NewsAndEvents from './NewsAndEvents/NewsAndEvents';
import Faculties from './Faculties/Faculties';
import Footer from './Footer/Footer';
import DiscoverOurCampus from './DiscoverOurCampus/DiscoverOurCampus';
import TalentsGotSparked from './TalentsGotSparked/TalentsGotSparked';
import Apply from './Apply/Apply';
import FactsbAndFigures from './FactsAndFigures/FactsAndFIgures'
import CampusLife from './CampusLife/CampusLife';
import Research from './Research/Research';
import NotableAlumni from './NotableAlumni/NotableAlumni';
import StrategicPartners from './StrategicPartners/StrategicPartners';
import EducationalPartners from './EducationalPartners/EducationalPartners';

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
        <DiscoverOurCampus/>
        <TalentsGotSparked/>
        <Apply/>
        <FactsbAndFigures/>
        <CampusLife/>
        <Research/>
        <NotableAlumni/>
        <StrategicPartners/>
        <EducationalPartners/>
      </main>
      <Footer />
    </div>
  );
}