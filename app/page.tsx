import HeaderWrapper from "../components/layout/HeaderWrapper";
import HeroSection from "../sections/HeroSection/HeroSection";
import ImportantLinksBar from "../components/layout/ImportantLinksBar/ImportantLinksBar";
import FindYourProgramAndNotices from "../sections/FindYourProgramAndNotices/FindYourProgramAndNotices";
import NewsAndEvents from "../sections/NewsAndEvents/NewsAndEvents";
import Faculties from "../sections/Faculties/Faculties";
import Footer from "../components/layout/Footer/Footer";
import DiscoverOurCampus from "../sections/DiscoverOurCampus/DiscoverOurCampus";
import TalentsGotSparked from "../sections/TalentsGotSparked/TalentsGotSparked";
import Apply from "../sections/Apply/Apply";
import FactsbAndFigures from "../sections/FactsAndFigures/FactsAndFIgures";
import CampusLife from "../sections/CampusLife/CampusLife";
import Research from "../sections/Research/Research";
import NotableAlumni from "../sections/NotableAlumni/NotableAlumni";
import StrategicPartners from "../sections/StrategicPartners/StrategicPartners";
import EducationalPartners from "../sections/EducationalPartners/EducationalPartners";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <HeaderWrapper />
      <HeroSection />
      <main className="flex-grow">
        <ImportantLinksBar />
        <FindYourProgramAndNotices />
        <NewsAndEvents />
        <Faculties />
        <DiscoverOurCampus />
        <TalentsGotSparked />
        <Apply />
        <FactsbAndFigures />
        <CampusLife />
        <Research />
        <NotableAlumni />
        <StrategicPartners />
        <EducationalPartners />
      </main>
      <Footer />
    </div>
  );
}
