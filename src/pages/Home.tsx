import HeroSection from './HomeSections/HeroSection';
import StatsSection from './HomeSections/StatsSection';
import JourneySection from './HomeSections/JourneySection';
import ServicesSection from './HomeSections/ServicesSection';
import WhyUsSection from './HomeSections/WhyUsSection';
import TestimonialsSection from './HomeSections/TestimonialsSection';
import PartnersSection from './HomeSections/PartnersSection';
import FAQSection from './HomeSections/FAQSection';
import CTASection from './HomeSections/CTASection';
import HomeFooter from './HomeSections/HomeFooter';

export const Home = () => {
  return (
    <div className="bg-cyber-900 text-white overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <JourneySection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
      <HomeFooter />
    </div>
  );
};
