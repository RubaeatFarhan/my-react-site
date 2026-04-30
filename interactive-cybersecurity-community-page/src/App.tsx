import { useEffect, useState } from 'react';
import MatrixBackground from './components/MatrixBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ForumSection from './components/ForumSection';
import MembersSection from './components/MembersSection';
import EventsSection from './components/EventsSection';
import ResourcesSection from './components/ResourcesSection';
import AchievementsSection from './components/AchievementsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(window.scrollY / total);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-slate-800/50">
      <div
        className="h-full bg-gradient-to-r from-cyber-500 via-cyber-400 to-neon-500 transition-all duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-cyber-600 hover:bg-cyber-500 text-white shadow-lg shadow-cyber-600/30 hover:shadow-cyber-500/50 flex items-center justify-center transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <MatrixBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ForumSection />
        <MembersSection />
        <EventsSection />
        <ResourcesSection />
        <AchievementsSection />
        <NewsletterSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
