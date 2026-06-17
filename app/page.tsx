import HeaderWrapper from "@/homepage/components/layout/HeaderWrapper";
import HeroSection from "@/homepage/sections/HeroSection/HeroSection";
import ImportantLinksBar from "@/homepage/components/layout/ImportantLinksBar/ImportantLinksBar";
import FindYourProgramAndNotices from "@/homepage/sections/FindYourProgramAndNotices/FindYourProgramAndNotices";
import NewsAndEvents from "@/homepage/sections/NewsAndEvents/NewsAndEvents";
import Faculties from "@/homepage/sections/Faculties/Faculties";
import Footer from "@/homepage/components/layout/Footer/Footer";
import DiscoverOurCampus from "@/homepage/sections/DiscoverOurCampus/DiscoverOurCampus";
import TalentsGotSparked from "@/homepage/sections/TalentsGotSparked/TalentsGotSparked";
import Apply from "@/homepage/sections/Apply/Apply";
import FactsbAndFigures from "@/homepage/sections/FactsAndFigures/FactsAndFIgures";
import CampusLife from "@/homepage/sections/CampusLife/CampusLife";
import Research from "@/homepage/sections/Research/Research";
import NotableAlumni from "@/homepage/sections/NotableAlumni/NotableAlumni";
import StrategicPartners from "@/homepage/sections/StrategicPartners/StrategicPartners";
import EducationalPartners from "@/homepage/sections/EducationalPartners/EducationalPartners";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getTalentStories } from "@/lib/actions/talent-story-action";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiub-home.vercel.app"),
  title:
    "American International University-Bangladesh (AIUB) | Where Leaders Are Created",
  description:
    "I just tried to recreate the AIUB homepage to try my skills. This is not the official website.",
  keywords: [
    "AIUB",
    "American International University-Bangladesh",
    "University in Bangladesh",
    "AIUB Admission",
    "AIUB Programs",
    "AIUB Notice Board",
    "AIUB Campus",
    "Higher Education Bangladesh",
  ],
  openGraph: {
    title:
      "American International University-Bangladesh (AIUB) | Where Leaders Are Created",
    description:
      "I just tried to recreate the AIUB homepage to try my skills. This is not the official website.",
    url: "https://aiub-home.vercel.app/",
    siteName: "AIUB",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/aiub-logo.png",
        height: 630,
        width: 1200,
        alt: "AIUB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "American International University-Bangladesh (AIUB)",
    description:
      "I edited this website. This is not the official website. Visit the official website for actual info.",
    images: ["/images/aiub-logo.png"],
  },
  alternates: {
    canonical: "https://aiub-home.vercel.app/",
  },
};

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const talentStories = await getTalentStories();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <HeaderWrapper session={session} />
      <HeroSection />
      <main className="flex-grow">
        <ImportantLinksBar />
        <FindYourProgramAndNotices />
        <NewsAndEvents />
        <Faculties />
        <DiscoverOurCampus />
        <TalentsGotSparked initialStories={talentStories || []} />
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
