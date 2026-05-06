import { useState, useEffect } from "react";
import { Flame, BookOpen, Users, MessageSquare, HelpCircle, LayoutList } from "lucide-react";

const courseNavLinks = [
  { label: "Overview", anchor: "#overview", icon: BookOpen },
  { label: "Curriculum", anchor: "#curriculum", icon: LayoutList },
  { label: "Instructor", anchor: "#instructor", icon: Users },
  { label: "Reviews", anchor: "#reviews", icon: MessageSquare },
  { label: "FAQ", anchor: "#faq", icon: HelpCircle },
];

export default function CourseSubNav() {
  const [activeSection, setActiveSection] = useState("");
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = courseNavLinks.map((link) => link.anchor.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-between h-12">
          {/* Left - Navigation Links */}
          <div className="flex items-center gap-1">
            {courseNavLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.anchor.substring(1);
              return (
                <a
                  key={link.anchor}
                  href={link.anchor}
                  className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary-50 text-primary-600 shadow-sm"
                      : "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 transition-all duration-300 ${isActive ? "text-primary-600" : "text-slate-400"}`} />
                  {link.label}
                  {isActive && (
                    <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
                  )}
                </a>
              );
            })}
          </div>

          {/* Right - Countdown Timer */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Enrollment ends in
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {[
                { value: timeLeft.days, label: 'D' },
                { value: timeLeft.hours, label: 'H' },
                { value: timeLeft.minutes, label: 'M' },
                { value: timeLeft.seconds, label: 'S' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-md px-2 py-1 text-center min-w-[36px] hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-sm font-extrabold text-white leading-tight">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[8px] text-slate-400 uppercase tracking-wider leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
