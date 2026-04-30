import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import CourseStats from "./components/CourseStats";
import Curriculum from "./components/Curriculum";
import Requirements from "./components/Requirements";
import Instructor from "./components/Instructor";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CourseStats />
      <WhatYouWillLearn />
      <Curriculum />
      <Requirements />
      <Instructor />
      <Reviews />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
