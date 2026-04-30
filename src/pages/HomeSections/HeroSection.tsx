import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, Users, Award, ArrowRight, Zap, Shield, Lock, Bug, BellRing, XCircle } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  price: string;
  originalPrice: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
  enrollmentOpen: boolean;
  path?: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Certified Ethical Hacker (CEH)',
    subtitle: 'Master Penetration Testing',
    description:
      'Learn to think like a hacker. Master reconnaissance, scanning, enumeration, system hacking, and exploit development with hands-on labs.',
    duration: '12 Weeks',
    students: '2,450+',
    level: 'Intermediate',
    price: '$1,299',
    originalPrice: '$1,899',
    badge: 'ENROLLMENT OPEN',
    badgeColor: 'bg-neon-green text-cyber-900',
    icon: <Bug className="w-8 h-8" />,
    gradient: 'from-emerald-500/20 via-transparent to-cyan-500/10',
    accentColor: 'text-neon-green',
    enrollmentOpen: true,
    path: '/professional-course',
  },
  {
    id: 2,
    title: 'Complete Ethical Hacking Course',
    subtitle: 'Foundation of Cybersecurity',
    description:
      'Build a rock-solid cybersecurity foundation covering threats, vulnerabilities, architecture, operations, and incident response. Get certified fast.',
    duration: '8 Weeks',
    students: '5,100+',
    level: 'Beginner',
    price: '$899',
    originalPrice: '$1,399',
    badge: 'ENROLLMENT OPEN',
    badgeColor: 'bg-neon-green text-cyber-900',
    icon: <Shield className="w-8 h-8" />,
    gradient: 'from-blue-500/20 via-transparent to-purple-500/10',
    accentColor: 'text-neon-blue',
    enrollmentOpen: true,
    path: '/professional-course',
  },
  {
    id: 3,
    title: 'CISSP Certification Prep',
    subtitle: 'Advanced Security Management',
    description:
      'Prepare for the gold standard in cybersecurity management. Cover all 8 CISSP domains with expert instructors and real-world case studies.',
    duration: '16 Weeks',
    students: '1,800+',
    level: 'Advanced',
    price: '$2,499',
    originalPrice: '$3,499',
    badge: 'ENROLLMENT CLOSED',
    badgeColor: 'bg-gray-600 text-gray-300',
    icon: <Award className="w-8 h-8" />,
    gradient: 'from-purple-500/20 via-transparent to-pink-500/10',
    accentColor: 'text-neon-purple',
    enrollmentOpen: false,
  },
  {
    id: 4,
    title: 'Cloud Security Architect',
    subtitle: 'Secure AWS, Azure & GCP',
    description:
      'Design and implement security architectures across major cloud platforms. Master IAM, encryption, compliance, and zero-trust frameworks.',
    duration: '10 Weeks',
    students: '1,200+',
    level: 'Intermediate',
    price: '$1,799',
    originalPrice: '$2,499',
    badge: 'ENROLLMENT CLOSED',
    badgeColor: 'bg-gray-600 text-gray-300',
    icon: <Lock className="w-8 h-8" />,
    gradient: 'from-cyan-500/20 via-transparent to-blue-500/10',
    accentColor: 'text-neon-cyan',
    enrollmentOpen: false,
  },
  {
    id: 5,
    title: 'SOC Analyst Training',
    subtitle: 'Threat Detection & Response',
    description:
      'Become a Security Operations Center analyst. Learn SIEM tools, threat hunting, incident response playbooks, and forensic analysis techniques.',
    duration: '10 Weeks',
    students: '3,300+',
    level: 'Beginner',
    price: '$999',
    originalPrice: '$1,599',
    badge: 'ENROLLMENT CLOSED',
    badgeColor: 'bg-gray-600 text-gray-300',
    icon: <Zap className="w-8 h-8" />,
    gradient: 'from-red-500/20 via-transparent to-orange-500/10',
    accentColor: 'text-neon-red',
    enrollmentOpen: false,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % courses.length, 'right');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + courses.length) % courses.length, 'left');
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const course = courses[current];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} transition-all duration-1000`} />
        <div className="absolute inset-0 bg-cyber-900/80" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl animate-[float_7s_ease-in-out_infinite_2s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div
            key={course.id}
            className={`space-y-6 ${
              isAnimating
                ? direction === 'right'
                  ? 'animate-[slideIn_0.6s_ease-out]'
                  : 'animate-[slideIn_0.6s_ease-out]'
                : ''
            }`}
          >
            {/* Badge */}
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 text-xs font-bold rounded-full ${course.badgeColor} tracking-wider flex items-center gap-1.5`}>
                {course.enrollmentOpen ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-900 animate-pulse" />
                    {course.badge}
                  </>
                ) : (
                  <>
                    <XCircle className="w-3 h-3" />
                    {course.badge}
                  </>
                )}
              </span>
              <span className="text-gray-400 text-sm">Course {current + 1} of {courses.length}</span>
            </div>

            {/* Title */}
            <div>
              <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${course.enrollmentOpen ? course.accentColor : 'text-gray-500'}`}>
                {course.subtitle}
              </p>
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight ${course.enrollmentOpen ? 'text-white' : 'text-white/80'}`}>
                {course.title}
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">{course.description}</p>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-neon-green" />
                <span className="text-sm font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-neon-blue" />
                <span className="text-sm font-medium">{course.students} Enrolled</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="w-5 h-5 text-neon-purple" />
                <span className="text-sm font-medium">{course.level}</span>
              </div>
            </div>

            {/* Price & CTA — conditional on enrollment status */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {course.enrollmentOpen ? (
                <>
                  <Link
                    to={course.path || "#contact"}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-neon-green text-cyber-900 font-bold text-base rounded-xl hover:bg-neon-green/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:scale-105"
                  >
                    Enroll Now — {course.price}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-gray-500 line-through text-lg">{course.originalPrice}</span>
                  <span className="text-neon-green font-semibold text-sm">
                    Save {Math.round(
                      ((parseInt(course.originalPrice.replace(/[$,]/g, '')) -
                        parseInt(course.price.replace(/[$,]/g, ''))) /
                        parseInt(course.originalPrice.replace(/[$,]/g, ''))) *
                        100
                    )}%
                  </span>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center gap-2 px-8 py-4 bg-gray-700/50 text-gray-400 font-bold text-base rounded-xl cursor-not-allowed border border-gray-600/30">
                    <XCircle className="w-5 h-5" />
                    Enrollment Closed
                  </div>
                  <button className="group inline-flex items-center gap-2 px-6 py-4 border border-neon-cyan/30 text-neon-cyan font-semibold text-sm rounded-xl hover:bg-neon-cyan/10 transition-all duration-300">
                    <BellRing className="w-4 h-4 group-hover:animate-[float_1s_ease-in-out_infinite]" />
                    Notify Me When Open
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right Side - Course Card Visual */}
          <div
            key={`card-${course.id}`}
            className={`hidden lg:flex justify-center ${isAnimating ? 'animate-[fadeIn_0.6s_ease-out]' : ''}`}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${course.gradient} blur-xl ${course.enrollmentOpen ? 'opacity-60' : 'opacity-20'}`} />
              
              <div className={`relative bg-cyber-800/80 backdrop-blur-xl border rounded-2xl p-8 w-[420px] transition-all duration-500 ${course.enrollmentOpen ? 'border-cyber-600/40 hover:border-cyber-400/40' : 'border-gray-700/30'}`}>
                {/* Status ribbon */}
                {!course.enrollmentOpen && (
                  <div className="absolute top-5 right-5 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="text-red-400 text-xs font-semibold">Closed</span>
                  </div>
                )}
                {course.enrollmentOpen && (
                  <div className="absolute top-5 right-5 px-3 py-1 bg-neon-green/10 border border-neon-green/20 rounded-full flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                    <span className="text-neon-green text-xs font-semibold">Open</span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} border border-white/10 flex items-center justify-center mb-6 ${course.enrollmentOpen ? course.accentColor : 'text-gray-500'}`}>
                  {course.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-3 ${course.enrollmentOpen ? 'text-white' : 'text-white/70'}`}>{course.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{course.subtitle}</p>

                {/* Course highlights */}
                <div className="space-y-3 mb-6">
                  {['Live instructor-led sessions', 'Hands-on lab exercises', 'Certification exam prep', 'Lifetime resource access'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${course.enrollmentOpen ? 'bg-neon-green' : 'bg-gray-600'}`} />
                      <span className={`text-sm ${course.enrollmentOpen ? 'text-gray-300' : 'text-gray-500'}`}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-end gap-3 mb-6">
                  <span className={`text-4xl font-extrabold ${course.enrollmentOpen ? 'text-white' : 'text-white/50'}`}>{course.price}</span>
                  <span className="text-gray-500 line-through text-lg mb-1">{course.originalPrice}</span>
                </div>

                {/* Enrollment status area */}
                {course.enrollmentOpen ? (
                  <>
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Enrollment filling up</span>
                        <span>78%</span>
                      </div>
                      <div className="w-full h-2 bg-cyber-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-neon-green to-neon-blue rounded-full w-[78%] transition-all duration-1000" />
                      </div>
                    </div>
                    <Link 
                      to={course.path || "#"}
                      className="w-full py-3.5 bg-neon-green text-cyber-900 font-bold rounded-xl hover:bg-neon-green/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] flex items-center justify-center"
                    >
                      Enroll in This Course
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="mb-4 p-3 bg-red-500/5 border border-red-500/10 rounded-xl flex items-center gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <div>
                        <p className="text-red-400 text-sm font-semibold">Enrollment Currently Closed</p>
                        <p className="text-gray-500 text-xs mt-0.5">New batch opening soon — stay tuned!</p>
                      </div>
                    </div>
                    <button className="w-full py-3.5 bg-cyber-700/60 text-gray-400 font-bold rounded-xl border border-gray-600/30 cursor-not-allowed flex items-center justify-center gap-2" disabled>
                      <XCircle className="w-4 h-4" />
                      Enrollment Closed
                    </button>
                    <button className="w-full mt-2.5 py-3 bg-neon-cyan/10 text-neon-cyan font-semibold text-sm rounded-xl border border-neon-cyan/20 hover:bg-neon-cyan/20 transition-all flex items-center justify-center gap-2">
                      <BellRing className="w-4 h-4" />
                      Notify Me When Enrollment Opens
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-10 lg:mt-16">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {courses.map((c, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 'right' : 'left')}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? `w-8 ${c.enrollmentOpen ? 'bg-neon-green' : 'bg-gray-500'}`
                    : 'w-2 bg-cyber-500 hover:bg-cyber-400'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-xl border border-cyber-600/50 text-gray-400 hover:text-white hover:border-neon-green/50 hover:bg-neon-green/5 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-xl border border-cyber-600/50 text-gray-400 hover:text-white hover:border-neon-green/50 hover:bg-neon-green/5 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-900 to-transparent" />
    </section>
  );
}
