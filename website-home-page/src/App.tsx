import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import JourneySection from './components/JourneySection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PartnersSection from './components/PartnersSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-900 text-gray-200 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <JourneySection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
