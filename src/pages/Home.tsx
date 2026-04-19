import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Users, Calendar, Play, ArrowRight, CheckCircle, Zap, Briefcase, Award } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Cyber Security and Ethical Hacking (CCEH 101)",
    description: "Perfect starting point for absolute beginners. Learn core ethical hacking concepts, tools, and methodologies.",
    price: 2999,
    duration: "4 Months",
    level: "Beginner",
    category: "Certified Ethical Hacking",
    image: "./images/course1.jpg",
    modules: 12,
    students: "122",
    rating: 4.9,
  },
  {
    id: 2,
    title: "CCEH 201 : Certified Ethical Hacking (Advanced)",
    description: "Advanced techniques for experienced hackers. Deep dive into complex exploitation and defense evasion.",
    price: 2999,
    duration: "12 weeks",
    level: "Advanced",
    category: "Certified Ethical Hacking",
    image: "./images/course2.jpg",
    modules: 12,
    students: "0",
    rating: 5.0,
    available: false,
  },
  {
    id: 3,
    title: "CCEH 301 : Certified Ethical Hacking (Job/Career/Intermediate)",
    description: "Job-ready ethical hacking training. Resume building, interview preparation and real-world projects.",
    price: 1999,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Certified Ethical Hacking",
    image: "./images/course3.jpg",
    modules: 10,
    students: "0",
    rating: 4.8,
    available: false,
  },
  {
    id: 4,
    title: "CCSE 101 : Cybersecurity Engineering Fundamentals",
    description: "Start your cybersecurity engineering journey with essential defense concepts, network security, and system hardening.",
    price: 2699,
    duration: "8 weeks",
    level: "Beginner",
    category: "Cybersecurity Engineering",
    image: "./images/course4.jpg",
    modules: 14,
    students: "0",
    rating: 4.8,
  },
  {
    id: 5,
    title: "CCSE 201 : Cybersecurity Engineering Intermediate",
    description: "Build on the fundamentals with incident response, secure architecture, and system monitoring techniques.",
    price: 2799,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Cybersecurity Engineering",
    image: "./images/course1.jpg",
    modules: 18,
    students: "0",
    rating: 4.9,
  },
  {
    id: 6,
    title: "CCSE 301 : Cybersecurity Engineering Professional",
    description: "Master advanced cybersecurity engineering practices, threat modeling, and enterprise defense strategies.",
    price: 2999,
    duration: "12 weeks",
    level: "Professional",
    category: "Cybersecurity Engineering",
    image: "./images/course2.jpg",
    modules: 20,
    students: "0",
    rating: 5.0,
  },
  {
    id: 7,
    title: "Bug Bounty Hunting Masterclass",
    description: "Learn how to find vulnerabilities on real-world applications and earn money through bug bounty programs. Practical techniques from top bounty hunters.",
    price: 1999,
    duration: "8 weeks",
    level: "Intermediate",
    category: "Bug Bounty Hunting",
    image: "./images/course1.jpg",
    modules: 16,
    students: "340",
    rating: 4.9,
    available: true,
  },
];

const programGroups = [
  {
    id: "CCEH",
    name: "CCEH Program",
    description: "Ethical hacking pathway with three levels from 101 to 301.",
    image: "./images/course1.jpg",
    team: "Red Teaming",
    badge: "/images/CCEH101.png",
    jobs: ["Ethical Hacker", "Penetration Tester", "Bug Bounty Hunter", "Security Analyst"],
    certifications: ["CEH (Certified Ethical Hacker)", "eJPT", "CompTIA Security+"],
    courses: courses.filter((course) => course.title.includes("CCEH")),
  },
  {
    id: "CCSE",
    name: "CCSE Program",
    description: "Cybersecurity engineering pathway with three levels from 101 to 301.",
    image: "./images/course4.jpg",
    team: "Blue Teaming",
    badge: null,
    jobs: ["Security Engineer", "SOC Analyst", "Network Security Specialist", "Cybersecurity Consultant"],
    certifications: ["OSCP", "CISSP (Associate Level)", "CompTIA CySA+"],
    courses: courses.filter((course) => course.title.includes("CCSE")),
  },
];

const courseCardVariants = [
  'bg-zinc-900 border-l-4 border-emerald-500/40 ring-1 ring-emerald-500/10',
  'bg-zinc-900 border-l-4 border-sky-400/40 ring-1 ring-sky-400/10',
  'bg-zinc-900 border-l-4 border-violet-400/40 ring-1 ring-violet-400/10',
  'bg-zinc-900 border-l-4 border-amber-400/40 ring-1 ring-amber-400/10',
];

const features = [
  { icon: <Shield className="w-6 h-6" />, title: "Industry Certified", desc: "CEH, OSCP, CompTIA aligned" },
  { icon: <Terminal className="w-6 h-6" />, title: "Hands-on Labs", desc: "40+ real-world scenarios" },
  { icon: <Users className="w-6 h-6" />, title: "Private Community", desc: "10k+ active hackers" },
  { icon: <Calendar className="w-6 h-6" />, title: "Live Mentorship", desc: "Weekly live sessions" },
];

export const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 37 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            hours = 23;
            days--;
            if (days < 0) {
              days = 2;
              hours = 14;
              minutes = 37;
            }
          }
        }
        return { days, hours, minutes };
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const bookConsultation = () => {
    window.open("https://www.facebook.com/CyberCrackerAcademy", "_blank");
  };

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#22ff8830_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        
        <img 
          src="./images/hero.jpg" 
          alt="Cyber Security" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10 pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-emerald-500/30 text-emerald-400 text-xs tracking-[3px] px-5 py-2 rounded-3xl mb-6"
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            EST. 2018 • CERTIFIED TRAINING
          </motion.div>

          <h1 className="text-7xl md:text-[92px] font-bold tracking-tighter leading-none mb-6">
            CRACK THE<br />DIGITAL<br />DEFENSES
          </h1>
          
          <p className="max-w-lg mx-auto text-xl text-gray-400 mb-10">
            Become an elite cybersecurity professional. 
            Learn from former blackhats turned whitehats.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white text-black px-10 py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_40px_-5px] hover:shadow-emerald-500 transition-all"
            >
              BROWSE PROGRAMS
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={bookConsultation}
              className="px-10 py-5 border border-white/60 hover:bg-white/5 rounded-2xl font-medium text-lg flex items-center gap-3 transition-all"
            >
              JOIN THE COMMUNITY
            </motion.button>
          </div>

          <div className="mt-16 flex justify-center gap-12 text-sm">
            <div className="flex items-center gap-3">
              <div className="text-emerald-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-3xl font-semibold text-white">24k+</div>
                <div className="text-xs text-gray-500 tracking-widest">STUDENTS TRAINED</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-emerald-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-3xl font-semibold text-white">94%</div>
                <div className="text-xs text-gray-500 tracking-widest">PLACEMENT RATE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 flex flex-col items-center gap-2 text-xs tracking-widest text-gray-500">
          SCROLL TO EXPLORE
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ↓
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-b border-white/10 py-6 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6 opacity-60">
            <div className="font-mono text-xl tracking-[4px]">KASPERSKY</div>
            <div className="font-mono text-xl tracking-[4px]">CISCO</div>
            <div className="font-mono text-xl tracking-[4px]">OFFENSIVE</div>
            <div className="font-mono text-xl tracking-[4px]">HACKTHEBOX</div>
            <div className="font-mono text-xl tracking-[4px]">TRYHACKME</div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline text-xs border border-emerald-500/40 text-emerald-400 px-4 py-1 rounded-full">WHY CYBER CRACKER</div>
          <h2 className="text-5xl font-semibold tracking-tighter mt-4">The Hacker's University</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-zinc-950 border border-white/10 p-8 rounded-3xl group"
            >
              <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS MARKETPLACE */}
      <section id="courses" className="bg-zinc-950 py-24 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div>
              <div className="uppercase text-xs tracking-[3px] text-emerald-400 mb-3">ACADEMY MARKETPLACE</div>
              <h2 className="text-6xl font-bold tracking-tighter">Programs</h2>
              <p className="text-gray-400 mt-3 max-w-md">Two programs with six core courses, each pathway covering levels 101 through 301.</p>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="bg-zinc-900 px-5 py-2.5 rounded-3xl flex items-center gap-2 border border-white/10">
                <span className="text-emerald-400 font-mono">{programGroups.length}</span>
                <span className="text-gray-400">programs</span>
              </div>
              <div className="bg-zinc-900 px-5 py-2.5 rounded-3xl flex items-center gap-2 border border-white/10">
                <span className="text-emerald-400 font-mono">{courses.length}</span>
                <span className="text-gray-400">courses</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {programGroups.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.01 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-black/25"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-6 bottom-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        program.team === 'Red Teaming' 
                          ? 'bg-red-500/20 text-red-400 border border-red-500/40' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                      }`}>
                        {program.team}
                      </span>
                      {program.badge ? (
                        <div className="bg-white rounded-lg p-1">
                          <img src={program.badge} alt={`${program.id} badge`} className="w-8 h-8 object-contain" />
                        </div>
                      ) : (
                        <div className="bg-gray-700/40 px-3 py-1 rounded-lg text-xs text-gray-400">CCSE badge coming soon</div>
                      )}
                    </div>
                    <div className="text-xs uppercase tracking-[2px] text-emerald-400 mb-2">{program.id}</div>
                    <h3 className="text-4xl font-bold text-white leading-tight">{program.name}</h3>
                  </div>
                </div>

                <div className="p-8 border-t border-white/10 bg-zinc-950/90">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="text-sm text-gray-400 max-w-[180px]">{program.courses.length} courses</div>
                    <div className="text-xs uppercase tracking-[2px] text-emerald-400 font-semibold">Program Path</div>
                  </div>
                  <p className="text-gray-400 mb-8">{program.description}</p>

                  <div className="mb-8">
                    <motion.button
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-xl transition-all"
                    >
                      <span>View Details</span>
                      <motion.div
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Jobs</h4>
                      <div className="grid gap-2">
                        {program.jobs.map((job) => (
                          <div key={job} className="flex items-center gap-2 bg-zinc-800/50 border border-white/5 rounded p-2 hover:border-emerald-500/30 transition-colors">
                            <Briefcase className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span className="text-xs text-gray-300">{job}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Certifications</h4>
                      <div className="grid gap-2">
                        {program.certifications.map((cert) => (
                          <div key={cert} className="flex items-center gap-2 bg-zinc-800/50 border border-white/5 rounded p-2 hover:border-sky-500/30 transition-colors">
                            <Award className="w-3 h-3 text-sky-400 shrink-0" />
                            <span className="text-xs text-gray-300">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Courses</h4>
                    <div className="grid gap-4">
                      {program.courses.map((course, courseIndex) => {
                        const variantClass = courseCardVariants[courseIndex % courseCardVariants.length];

                        return (
                          <div key={course.id} className={`w-full text-left ${variantClass} rounded-3xl p-5`}>
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div className="font-semibold text-lg leading-tight text-white">{course.title}</div>
                              <div className="text-xs uppercase tracking-[1px] text-white/80 bg-white/10 rounded-full px-3 py-1">{course.level}</div>
                            </div>

                            <div className="flex flex-wrap gap-2 text-xs text-white/80 mb-4">
                              <span className="px-3 py-2 bg-white/10 rounded-full">{course.duration}</span>
                              <span className="px-3 py-2 bg-white/10 rounded-full">{course.category}</span>
                            </div>

                            <p className="text-sm text-white/80 line-clamp-2 mb-5">{course.description}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8">
                      <motion.button
                        whileHover={{ scale: 1.08, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold rounded-xl transition-all"
                      >
                        <span>Enroll Now</span>
                        <motion.div
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE CLASSES */}
      <section id="live" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="sticky top-28">
              <div className="inline px-5 py-1.5 text-xs border border-rose-400 text-rose-400 rounded-3xl">NEXT LIVE EVENT IN</div>
              
              <div className="mt-8">
                <h3 className="text-6xl font-bold tracking-tighter leading-none mb-4">LIVE HACKING<br />WORKSHOP</h3>
                <p className="text-xl text-gray-400 max-w-xs">Real-time red team simulation with top instructors</p>
              </div>

              <div className="mt-12 flex gap-8">
                <div>
                  <div className="text-xs text-gray-400">STARTS IN</div>
                  <div className="font-mono text-6xl font-semibold tabular-nums mt-2 text-rose-400">{timeLeft.days}</div>
                  <div className="text-xs text-gray-500">DAYS</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">HOURS</div>
                  <div className="font-mono text-6xl font-semibold tabular-nums mt-2">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-500">HRS</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">MINUTES</div>
                  <div className="font-mono text-6xl font-semibold tabular-nums mt-2">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-500">MIN</div>
                </div>
              </div>

              <motion.button 
                onClick={bookConsultation}
                whileHover={{ scale: 1.05 }}
                className="mt-10 w-full bg-white text-black py-6 rounded-2xl font-semibold flex items-center justify-center gap-3 text-lg"
              >
                RESERVE MY SPOT <Zap className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-zinc-900 rounded-3xl p-8 border border-white/5">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="uppercase text-xs text-emerald-400 tracking-widest">THIS WEEK'S SESSION</div>
                  <div className="text-4xl font-semibold mt-3 tracking-tight">Zero Day Live<br />Exploitation Lab</div>
                </div>
                <div className="px-6 py-3 bg-emerald-900/40 text-emerald-400 text-sm rounded-2xl flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  LIVE
                </div>
              </div>

              <div className="space-y-5">
                {[
                  "Advanced SQLi & XSS Chaining",
                  "Modern Web App Pentesting",
                  "Live Q&A with Lead Instructor",
                  "CTF Challenge + Prizes"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-black/60 rounded-2xl px-6 py-5">
                    <div className="text-emerald-400"><Play className="w-5 h-5" /></div>
                    <div className="flex-1 text-gray-200">{item}</div>
                    <div className="text-xs font-mono text-gray-500">45 MIN</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
