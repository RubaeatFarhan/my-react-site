import { Navbar as MainNavbar } from "../../components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import CurrentBatch from "./components/CurrentBatch";
import CourseStats from "./components/CourseStats";
import CoursePreview from "./components/CoursePreview";
import EliteRoadmap from "./components/EliteRoadmap";
import Curriculum from "./components/Curriculum";
import Requirements from "./components/Requirements";
import FeaturesSection from "./components/FeaturesSection";
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
      {/* Two-column layout: What You'll Learn and Current Batch */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              <WhatYouWillLearn />
              {/* Urgency Notice Section */}
              <div className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 border border-red-200 rounded-2xl p-6 flex items-center gap-4">
                <div className="bg-gradient-to-br from-red-500 to-orange-400 p-3 rounded-xl flex-shrink-0">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <p className="text-base text-slate-800 font-semibold">
                    Limited seats available! Only <span className="text-red-600 font-extrabold text-xl">55 seats remain</span> and <span className="text-red-600 font-extrabold text-xl">70% off</span> will be for more <span className="text-red-600 font-extrabold text-xl">5 students</span>.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 lg:sticky lg:top-24">
              <CurrentBatch />
            </div>
          </div>
        </div>
      </section>
      <EliteRoadmap />
      <Curriculum />
      <FeaturesSection />
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
