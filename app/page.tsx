import HeaderWrapper from "./HeaderWrapper";
import HeroSection from "./HeroSection/HeroSection";
import ImportantLinksBar from "./ImportantLinksBar/ImportantLinksBar";
import FindYourProgramAndNotices from "./FindYourProgramAndNotices/FindYourProgramAndNotices";
import NewsAndEvents from "./NewsAndEvents/NewsAndEvents";
import Faculties from "./Faculties/Faculties";
import Footer from "./Footer/Footer";
import DiscoverOurCampus from "./DiscoverOurCampus/DiscoverOurCampus";
import TalentsGotSparked from "./TalentsGotSparked/TalentsGotSparked";
import Apply from "./Apply/Apply";
import FactsbAndFigures from "./FactsAndFigures/FactsAndFIgures";
import CampusLife from "./CampusLife/CampusLife";
import Research from "./Research/Research";
import NotableAlumni from "./NotableAlumni/NotableAlumni";
import StrategicPartners from "./StrategicPartners/StrategicPartners";
import EducationalPartners from "./EducationalPartners/EducationalPartners";

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
