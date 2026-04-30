import { useEffect, useRef, useState } from 'react';
import {
  Rocket,
  UserCheck,
  Building2,
  Video,
  GraduationCap,
  Globe,
  MessageCircle,
} from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  glowColor: string;
  tags?: string[];
}

const milestones: Milestone[] = [
  {
    year: '2018',
    title: 'The Beginning — CyberCracker Founded',
    description:
      'CyberCracker Academy was established with a bold vision: to make world-class cybersecurity education accessible to everyone in Bangladesh and beyond. Starting from a small office with just 3 passionate security researchers, we set out to bridge the massive talent gap in the cybersecurity industry.',
    icon: <Rocket className="w-6 h-6" />,
    accentColor: 'text-neon-green',
    glowColor: 'shadow-neon-green/30',
    tags: ['Founded', 'Vision', 'Cybersecurity Education'],
  },
  {
    year: '2020',
    title: 'First Client — Trust Earned',
    description:
      'We onboarded our very first client — a milestone that validated our mission. This was the moment CyberCracker proved that quality cybersecurity training and consulting could truly make a difference. Our hands-on, practical approach won their trust and set the standard for everything that followed.',
    icon: <UserCheck className="w-6 h-6" />,
    accentColor: 'text-neon-blue',
    glowColor: 'shadow-neon-blue/30',
    tags: ['First Client', 'Milestone', 'Trust'],
  },
  {
    year: '2022',
    title: 'First Corporate Client — Enterprise Expansion',
    description:
      'CyberCracker secured its first corporate client, marking our entry into the enterprise market. We began delivering tailored cybersecurity training programs, vulnerability assessments, and security consulting to organizations — proving our solutions scale from individuals to entire companies.',
    icon: <Building2 className="w-6 h-6" />,
    accentColor: 'text-neon-purple',
    glowColor: 'shadow-neon-purple/30',
    tags: ['Corporate', 'Enterprise', 'B2B Solutions'],
  },
  {
    year: '2023',
    title: 'Community Growth — YouTube, Facebook & Telegram',
    description:
      'We expanded our reach by launching dedicated channels on YouTube, Facebook, and Telegram to contribute to the global cybersecurity community. Free tutorials, threat breakdowns, live Q&As, and awareness campaigns helped us build a thriving community of 50,000+ cyber enthusiasts worldwide.',
    icon: <Video className="w-6 h-6" />,
    accentColor: 'text-neon-red',
    glowColor: 'shadow-neon-red/30',
    tags: ['YouTube', 'Facebook', 'Telegram', 'Community'],
  },
  {
    year: '2024',
    title: "Launched Bangladesh's First Professional Cybersecurity Course",
    description:
      "A proud national achievement — CyberCracker launched Bangladesh's first-ever professional-grade cybersecurity course program. Designed with local industry needs in mind, this program empowered hundreds of Bangladeshi students and professionals to build careers in cybersecurity and defend the nation's digital infrastructure.",
    icon: <GraduationCap className="w-6 h-6" />,
    accentColor: 'text-neon-cyan',
    glowColor: 'shadow-neon-cyan/30',
    tags: ['Bangladesh', 'First Ever', 'National Impact'],
  },
  {
    year: '2026',
    title: 'Going Global — International-Level Courses Launched',
    description:
      'CyberCracker goes international! We launched globally recognized, international-level cybersecurity certification courses — bringing our battle-tested curriculum to students across Asia, the Middle East, Europe, and beyond. Our programs now meet international standards and prepare professionals for the global cybersecurity workforce.',
    icon: <Globe className="w-6 h-6" />,
    accentColor: 'text-neon-green',
    glowColor: 'shadow-neon-green/30',
    tags: ['International', 'Global Reach', 'Certification'],
  },
];

function TimelineItem({
  milestone,
  index,
  isVisible,
}: {
  milestone: Milestone;
  index: number;
  isVisible: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center w-full mb-8 lg:mb-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Desktop layout - alternating left/right */}
      <div className={`hidden lg:flex items-center w-full ${isLeft ? '' : 'flex-row-reverse'}`}>
        {/* Content Card */}
        <div className={`w-[calc(50%-40px)] ${isLeft ? 'pr-0' : 'pl-0'}`}>
          <div
            className={`group relative bg-cyber-800/60 backdrop-blur-sm border border-cyber-600/30 rounded-2xl p-7 hover:border-cyber-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
              isLeft ? 'ml-auto mr-0' : 'mr-auto ml-0'
            }`}
          >
            {/* Year floating badge */}
            <div
              className={`absolute -top-4 ${
                isLeft ? 'right-6' : 'left-6'
              } px-4 py-1.5 bg-cyber-900 border border-cyber-600/50 rounded-full`}
            >
              <span className={`text-sm font-bold tracking-wider ${milestone.accentColor}`}>
                {milestone.year}
              </span>
            </div>

            {/* Icon + Title */}
            <div className="flex items-start gap-4 mt-2 mb-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${milestone.accentColor} group-hover:scale-110 transition-transform duration-300`}
              >
                {milestone.icon}
              </div>
              <h3 className="text-lg font-bold text-white leading-snug group-hover:text-white/90 transition-colors">
                {milestone.title}
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">{milestone.description}</p>

            {/* Tags */}
            {milestone.tags && (
              <div className="flex flex-wrap gap-1.5">
                {milestone.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 bg-white/5 text-gray-400 text-xs rounded-md border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Connector arrow */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyber-800/60 border rotate-45 ${
                isLeft
                  ? '-right-2 border-r border-t border-cyber-600/30'
                  : '-left-2 border-l border-b border-cyber-600/30'
              }`}
            />
          </div>
        </div>

        {/* Center node */}
        <div className="w-20 flex-shrink-0 flex items-center justify-center relative z-10">
          <div
            className={`w-5 h-5 rounded-full border-[3px] border-cyber-900 ${milestone.accentColor
              .replace('text-', 'bg-')
              } shadow-lg ${milestone.glowColor} transition-all duration-500`}
          />
        </div>

        {/* Spacer for other side */}
        <div className="w-[calc(50%-40px)]" />
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex w-full">
        {/* Timeline line + node */}
        <div className="flex flex-col items-center mr-5 flex-shrink-0">
          <div
            className={`w-4 h-4 rounded-full border-[3px] border-cyber-900 ${milestone.accentColor.replace(
              'text-',
              'bg-'
            )} shadow-lg ${milestone.glowColor} z-10`}
          />
          {index < milestones.length - 1 && (
            <div className="w-0.5 flex-1 bg-gradient-to-b from-cyber-500/50 to-cyber-600/20 mt-2" />
          )}
        </div>

        {/* Card */}
        <div className="flex-1 pb-10">
          <div className="group bg-cyber-800/60 backdrop-blur-sm border border-cyber-600/30 rounded-2xl p-6 hover:border-cyber-500/50 transition-all duration-500">
            <span className={`text-xs font-bold tracking-wider ${milestone.accentColor}`}>
              {milestone.year}
            </span>

            <div className="flex items-start gap-3 mt-3 mb-3">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center ${milestone.accentColor}`}
              >
                {milestone.icon}
              </div>
              <h3 className="text-base font-bold text-white leading-snug">{milestone.title}</h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-3">{milestone.description}</p>

            {milestone.tags && (
              <div className="flex flex-wrap gap-1.5">
                {milestone.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-neon-green/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-neon-blue/3 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/2 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green/20 rounded-full text-neon-green text-sm font-medium mb-5">
            <MessageCircle className="w-4 h-4" />
            Our Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            The Journey of{' '}
            <span className="bg-gradient-to-r from-neon-green via-neon-cyan to-neon-blue bg-clip-text text-transparent">
              CyberCracker Academy
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From a small startup in 2018 to an international cybersecurity powerhouse — every milestone shaped who we are today. Here's the story of our relentless journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-neon-green/40 via-neon-blue/30 via-neon-purple/30 to-neon-green/40 rounded-full" />
            {/* Animated glow pulse */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-neon-green/60 to-transparent rounded-full animate-[scanline_4s_ease-in-out_infinite]" />
          </div>

          {/* Start node */}
          <div className="hidden lg:flex justify-center mb-10 relative z-10">
            <div className="px-5 py-2 bg-cyber-800 border border-neon-green/30 rounded-full text-neon-green text-sm font-bold tracking-wider shadow-lg shadow-neon-green/10">
              🚀 WHERE IT ALL BEGAN
            </div>
          </div>

          {/* Milestones */}
          <div className="lg:space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} data-index={index}>
                <TimelineItem
                  milestone={milestone}
                  index={index}
                  isVisible={visibleItems.has(index)}
                />
              </div>
            ))}
          </div>

          {/* End node */}
          <div className="hidden lg:flex justify-center mt-10 relative z-10">
            <div className="px-5 py-2 bg-cyber-800 border border-neon-cyan/30 rounded-full text-neon-cyan text-sm font-bold tracking-wider shadow-lg shadow-neon-cyan/10">
              🌍 AND THE JOURNEY CONTINUES...
            </div>
          </div>

          {/* Mobile end */}
          <div className="lg:hidden flex justify-center mt-4">
            <div className="px-4 py-2 bg-cyber-800/60 border border-neon-cyan/20 rounded-full text-neon-cyan text-xs font-bold tracking-wider">
              🌍 THE JOURNEY CONTINUES...
            </div>
          </div>
        </div>

        {/* Bottom summary cards */}
        <div className="grid sm:grid-cols-3 gap-4 mt-16 lg:mt-20">
          <div className="bg-cyber-800/40 border border-cyber-600/20 rounded-xl p-6 text-center group hover:border-neon-green/20 transition-all duration-300">
            <div className="text-3xl font-extrabold text-white mb-1 group-hover:text-neon-green transition-colors">
              8+
            </div>
            <p className="text-gray-400 text-sm">Years of Excellence</p>
          </div>
          <div className="bg-cyber-800/40 border border-cyber-600/20 rounded-xl p-6 text-center group hover:border-neon-blue/20 transition-all duration-300">
            <div className="text-3xl font-extrabold text-white mb-1 group-hover:text-neon-blue transition-colors">
              6
            </div>
            <p className="text-gray-400 text-sm">Major Milestones</p>
          </div>
          <div className="bg-cyber-800/40 border border-cyber-600/20 rounded-xl p-6 text-center group hover:border-neon-purple/20 transition-all duration-300">
            <div className="text-3xl font-extrabold text-white mb-1 group-hover:text-neon-purple transition-colors">
              Global
            </div>
            <p className="text-gray-400 text-sm">Reach & Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}
