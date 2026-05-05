import { Navbar as MainNavbar } from "../../components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import CourseStats from "./components/CourseStats";
import CoursePreview from "./components/CoursePreview";
import EliteRoadmap from "./components/EliteRoadmap";
import Curriculum from "./components/Curriculum";
import Requirements from "./components/Requirements";
import HowToEnroll from "./components/HowToEnroll";
import Instructor from "./components/Instructor";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import SiteFooter from "../../components/SiteFooter";
import { useEffect } from "react";
import CourseSubNav from "./components/CourseSubNav";

export const ProfessionalCourseDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 pt-[124px]">
      <MainNavbar />
      <CourseSubNav />
      {/* Moving Notice Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white font-bold text-lg md:text-xl tracking-wide">
            🔥 ক্লাস শুরু হবে ১৫ই মে থেকে, ক্লাসের রুটিন দেখতে কোর্সে যোগদান করুন। 🔥 ক্লাস শুরু হবে ১৫ই মে থেকে, ক্লাসের রুটিন দেখতে কোর্সে যোগদান করুন। 🔥 ক্লাস শুরু হবে ১৫ই মে থেকে, ক্লাসের রুটিন দেখতে কোর্সে যোগদান করুন।
          </span>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      <HeroSection />
      <CourseStats />
      <WhatYouWillLearn />
      <EliteRoadmap />
      <Curriculum />
      <Requirements />
      <HowToEnroll />
      <Instructor />
      <Reviews />
      <FAQ />
      <CoursePreview />
      <CTASection />
      <SiteFooter />
    </div>
  );
};
