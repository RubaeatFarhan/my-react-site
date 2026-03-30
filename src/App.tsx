import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Lock, Terminal, Users, Calendar, 
  Play, ArrowRight, CheckCircle, Zap, Search, Filter
} from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  category: string;
  image: string;
  modules: number;
  students: string;
  rating: number;
  available?: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const courses: Course[] = [
  {
    id: 1,
    title: "CCEH 101 : Certified Ethical Hacking (Basic/Beginner)",
    description: "Perfect starting point for absolute beginners. Learn core ethical hacking concepts, tools, and methodologies.",
    price: 2999,
    duration: "8 weeks",
    level: "Beginner",
    category: "Certified Ethical Hacking",
    image: "/images/course1.jpg",
    modules: 18,
    students: "1243",
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
    image: "/images/course2.jpg",
    modules: 26,
    students: "437",
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
    image: "/images/course3.jpg",
    modules: 22,
    students: "892",
    rating: 4.8,
    available: false,
  },
  {
    id: 4,
    title: "Linux 101",
    description: "Master Linux operating system from basics to advanced command line and server administration.",
    price: 1499,
    duration: "6 weeks",
    level: "Beginner",
    category: "Operating Systems",
    image: "/images/course4.jpg",
    modules: 15,
    students: "673",
    rating: 4.7,
    available: false,
  },
  {
    id: 5,
    title: "CCNE 101 : Certified Network Engineer",
    description: "Become a certified network engineer. Learn networking fundamentals, security, and infrastructure.",
    price: 2499,
    duration: "10 weeks",
    level: "Intermediate",
    category: "Networking",
    image: "/images/course1.jpg",
    modules: 21,
    students: "319",
    rating: 4.6,
    available: false,
  },
  {
    id: 6,
    title: "Python 101 for Hackers",
    description: "Learn Python programming specifically tailored for ethical hackers and security professionals.",
    price: 1799,
    duration: "8 weeks",
    level: "Beginner",
    category: "Programming",
    image: "/images/course2.jpg",
    modules: 17,
    students: "1241",
    rating: 4.9,
    available: false,
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Security Engineer @ Google",
    content: "The hands-on labs completely transformed my career. Landed my dream job within 3 months of completing the program.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sam Chen",
    role: "Bug Bounty Hunter",
    content: "Made my first $15k bounty 6 weeks into the course. The instructors are legends in the industry.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Jordan Patel",
    role: "CTO @ Fintech Startup",
    content: "Best cybersecurity education I've experienced. The community alone is worth the investment.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
  },
];

const features = [
  { icon: <Shield className="w-6 h-6" />, title: "Industry Certified", desc: "CEH, OSCP, CompTIA aligned" },
  { icon: <Terminal className="w-6 h-6" />, title: "Hands-on Labs", desc: "40+ real-world scenarios" },
  { icon: <Users className="w-6 h-6" />, title: "Private Community", desc: "10k+ active hackers" },
  { icon: <Calendar className="w-6 h-6" />, title: "Live Mentorship", desc: "Weekly live sessions" },
];

const CourseDetail = ({ course, onEnroll, onBack }: { 
  course: Course; 
  onEnroll: (id: number) => void; 
  onBack: () => void; 
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'reviews'>('overview');

  const curriculum = [
    "Module 0: Lab Setup – Environment configuration and tool installation",
    "Module 01: Introduction to Ethical Hacking – Fundamental information security issues, hacking concepts, Cyber Kill Chain, MITRE ATT&CK framework, and information security laws",
    "Module 02: Footprinting and Reconnaissance – OSINT tools, search engines, social networks, and DNS footprinting",
    "Module 03: Scanning Networks – Network scanning, host discovery, port/service discovery using Nmap",
    "Module 04: Enumeration – NetBIOS, SNMP, LDAP, SMTP enumeration techniques and countermeasures",
    "Module 05: Vulnerability Analysis – Identifying security loopholes using assessment tools",
    "Module 06: System Hacking – Gaining access, privilege escalation, maintaining access, and clearing logs",
    "Module 07: Malware Threats – Trojans, viruses, worms, APTs, fileless malware and analysis",
    "Module 08: Sniffing – MAC attacks, DHCP attacks, ARP poisoning and packet analysis",
    "Module 09: Social Engineering – Phishing, identity theft and human-level vulnerabilities",
    "Module 10: Denial-of-Service (DoS) – DoS/DDoS attacks, botnets and protection measures"
  ];

  const reviews = [
    { name: "Rahim Khan", role: "Cyber Security Analyst, Dhaka", text: "This course completely changed my career. The practical labs are excellent and instructors are very supportive.", rating: 5 },
    { name: "Fatima Ahmed", role: "Penetration Tester, Chittagong", text: "Best ethical hacking course in Bangladesh. I got my first job after completing this course.", rating: 5 },
  ];

  const faqs = [
    { q: "কোর্সটি কতদিনের?", a: "৮ সপ্তাহের কোর্স। আপনি নিজের গতিতে শিখতে পারবেন এবং লাইফটাইম অ্যাক্সেস পাবেন।" },
    { q: "পেমেন্ট কিভাবে করব?", a: "বিকাশে ৳2999 পাঠিয়ে ট্রানজেকশন আইডি ফর্মে দিন।" },
    { q: "সার্টিফিকেট পাবো?", a: "হ্যাঁ, সফলভাবে কোর্স সম্পন্ন করলে আপনি অফিসিয়াল সার্টিফিকেট পাবেন।" },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <nav className="fixed top-0 z-50 w-full bg-black/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div onClick={onBack} className="flex items-center gap-3 cursor-pointer hover:text-emerald-400 transition-colors font-medium">
            ← কোর্সে ফিরুন / BACK TO COURSES
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <Terminal className="w-4 h-4 text-black" />
            </div>
            <div className="font-bold text-xl tracking-tighter">CYBER CRACKER</div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="rounded-3xl overflow-hidden mb-10">
              <img src={course.image} alt={course.title} className="w-full h-[420px] object-cover" />
            </div>

            <h1 className="text-5xl font-bold tracking-tighter mb-3">{course.title}</h1>
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-emerald-400">
                ★★★★☆ <span className="text-white ml-2">{course.rating}</span>
              </div>
              <div className="text-gray-400">{course.students} students enrolled</div>
            </div>

            {/* TABS */}
            <div className="flex gap-8 border-b border-white/10 mt-12 mb-8 text-sm">
              {(['overview', 'curriculum', 'instructor', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-medium border-b-2 transition-all ${activeTab === tab ? 'border-emerald-400 text-white' : 'border-transparent text-gray-400'}`}
                >
                  {tab === 'overview' && 'Overview'}
                  {tab === 'curriculum' && 'Curriculum'}
                  {tab === 'instructor' && 'Instructor'}
                  {tab === 'reviews' && 'Reviews & Ratings'}
                </button>
              ))}
            </div>

            {activeTab === 'overview' && (
              <div>
                <p className="text-lg text-gray-300 leading-relaxed">{course.description}</p>
                <div className="mt-16">
                  <h3 className="text-2xl font-semibold mb-8">What You Will Learn</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {curriculum.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 bg-zinc-900 p-6 rounded-2xl">
                        <div className="text-emerald-400 mt-1">✓</div>
                        <div>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h3 className="text-2xl font-semibold mb-8">Course Curriculum</h3>
                <div className="space-y-3">
                  {curriculum.map((module, index) => (
                    <div key={index} className="bg-zinc-900 rounded-2xl p-6 flex gap-6 items-start hover:bg-zinc-800/80 transition-colors">
                      <div className="shrink-0 w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 font-mono flex items-center justify-center text-sm font-bold mt-0.5">
                        {index < 10 ? `0${index}` : index}
                      </div>
                      <div className="flex-1 text-[15px] leading-snug text-gray-200">{module}</div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-400 mt-8 text-center">11 modules • 80+ hours of content • Hands-on labs included</div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="flex flex-col md:flex-row gap-10">
                <img src="/images/instructor.jpg" alt="Instructor" className="w-64 h-64 object-cover rounded-3xl" />
                <div>
                  <div className="text-emerald-400">LEAD INSTRUCTOR</div>
                  <div className="text-4xl font-bold mt-3">Md. Rakib Hasan</div>
                  <div className="text-emerald-400 mt-1">OSCP • CEH • 12+ Years Experience</div>
                  <p className="mt-8 text-gray-300">Former Red Team Lead at a government organization. Has trained over 2,400 students across Bangladesh and helped many get jobs in cybersecurity firms.</p>
                  <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="text-4xl font-bold text-emerald-400">2400+</div>
                      <div className="text-xs text-gray-400 mt-1">STUDENTS TRAINED</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-emerald-400">18</div>
                      <div className="text-xs text-gray-400 mt-1">CERTIFICATIONS</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-emerald-400">4.9</div>
                      <div className="text-xs text-gray-400 mt-1">RATING</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-end gap-6 mb-10">
                  <div className="text-[92px] font-light leading-none text-emerald-400">4.9</div>
                  <div>
                    <div className="text-2xl">Average Rating</div>
                    <div className="text-gray-400">Based on 87 reviews</div>
                  </div>
                </div>

                {reviews.map((r, i) => (
                  <div key={i} className="bg-zinc-900 rounded-3xl p-8 mb-6">
                    <div className="flex gap-4">
                      <div className="text-4xl">⭐</div>
                      <div className="flex-1">
                        <div className="font-medium">{r.name}</div>
                        <div className="text-xs text-gray-400">{r.role}</div>
                        <p className="mt-6 text-gray-300">"{r.text}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-zinc-900 rounded-3xl p-8 sticky top-28">
              <div className="uppercase text-xs text-emerald-400 tracking-widest mb-2">ENROLL TODAY</div>
              <div className="text-6xl font-bold">৳{course.price}</div>
              <div className="text-xs text-gray-400">One-time payment • Lifetime access</div>

              <div className="mt-8 space-y-3 pb-8 border-b border-white/10">
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-400 mt-1">✅</span>
                  <span>100+ bite-sized recorded classes (organized archive)</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-400 mt-1">🎥</span>
                  <span>4 Mega Live Classes</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-400 mt-1">📝</span>
                  <span>4 Practical Assignments</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-400 mt-1">🧩</span>
                  <span>12 Structured Modules</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-400 mt-1">👥</span>
                  <span>Private Community Support</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-emerald-400 mt-1">🎯</span>
                  <span>Course Foundation</span>
                </div>
              </div>

              <div className="mt-8 pb-8 border-b border-white/10">
                <div className="text-xs text-emerald-400 font-semibold mb-3">INDUSTRY-RECOGNIZED STANDARDS</div>
                <div className="space-y-2 text-xs text-gray-300">
                  <div>• CEH (Certified Ethical Hacker)</div>
                  <div>• OSCP (Offensive Security Certified Professional)</div>
                  <div>• CompTIA Security+</div>
                </div>
              </div>

              <button onClick={() => onEnroll(course.id)} className="mt-8 w-full py-6 bg-white text-black rounded-2xl font-bold text-lg btn-hover border border-transparent">
                ENROLL NOW
              </button>

              <button onClick={() => alert('Live session booking link opened!')} className="mt-4 w-full py-4 border border-white/30 hover:bg-white/5 rounded-2xl text-sm flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" /> BOOK LIVE SESSION
              </button>

              <motion.a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert('Syllabus PDF downloaded!'); }} 
                className="mt-3 w-full py-4 border border-white/30 hover:bg-white/5 rounded-2xl text-sm flex items-center justify-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  📥
                </motion.span>
                <span className="relative z-10">DOWNLOAD SYLLABUS</span>
              </motion.a>

              <div className="mt-12">
                <div className="text-xs text-gray-400 mb-4">SAMPLE CERTIFICATE</div>
                <img src="/images/certificate.jpg" alt="Certificate" className="rounded-3xl shadow-2xl w-full" />
              </div>

              <div className="text-xs text-center text-gray-500 mt-12">30-day money-back guarantee</div>
            </div>
          </div>
        </div>

        {/* Demo Video & FAQ */}
        <div className="mt-24 space-y-12">
          {/* Course Preview Video - Full Width and Prominent */}
          <motion.div 
            className="bg-gradient-to-br from-emerald-900/20 to-zinc-900 rounded-3xl p-10 border border-emerald-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-semibold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎬 Course Preview Video
            </motion.h3>
            <motion.div 
              className="aspect-[16/9] bg-black rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-center relative z-10">
                <motion.div 
                  onClick={() => alert('Demo video playing... (placeholder)')} 
                  className="w-28 h-28 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center cursor-pointer group hover:shadow-2xl hover:shadow-emerald-500/50 transition-all"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Play className="w-12 h-12 text-black ml-2" />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="text-sm text-gray-300 mt-8 font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  1:42 / Introduction to Ethical Hacking
                </motion.div>
              </div>
            </motion.div>
            <p className="text-gray-400 text-center mt-6 text-sm">Click the play button to watch an overview of the course content and learning structure.</p>
          </motion.div>

          {/* How to Buy This Course Video */}
          <motion.div 
            className="bg-gradient-to-br from-amber-900/20 to-zinc-900 rounded-3xl p-10 border border-amber-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-3xl font-semibold mb-8 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🛍️ How to Buy This Course
            </motion.h3>
            <motion.div 
              className="aspect-[16/9] bg-black rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-center relative z-10">
                <motion.div 
                  onClick={() => alert('YouTube video will be embedded here')} 
                  className="w-28 h-28 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-2xl hover:shadow-amber-500/50 transition-all"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Play className="w-12 h-12 text-black ml-2" />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="text-sm text-gray-300 mt-8 font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Step-by-step guide to enroll in the course
                </motion.div>
              </div>
            </motion.div>
            <p className="text-gray-400 text-center mt-6 text-sm">Learn how to purchase the course, payment methods, and instant access to all learning materials.</p>
          </motion.div>

          {/* FAQ Section */}
          <div className="bg-zinc-900 rounded-3xl p-10">
            <h3 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h3>
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-white/10 py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium">
                  {faq.q}
                  <span className="text-xl group-open:rotate-45 transition">＋</span>
                </summary>
                <p className="text-gray-400 mt-4 pr-8 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Checkout = ({ course, onBack }: { 
  course: Course; 
  onBack: () => void; 
}) => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-16">
      <nav className="fixed top-0 z-50 w-full bg-black/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div onClick={onBack} className="flex items-center gap-3 cursor-pointer hover:text-emerald-400 transition-colors font-medium">
            ← BACK TO COURSE DETAILS
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <Terminal className="w-4 h-4 text-black" />
            </div>
            <div className="font-bold text-xl tracking-tighter">CYBER CRACKER</div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline bg-emerald-900/40 text-emerald-400 text-xs px-5 py-2 rounded-3xl mb-6 inline-flex items-center gap-2">
              <Shield className="w-3.5 h-3.5" /> ১০০% নিরাপদ এনরোলমেন্ট / 100% SECURE ENROLLMENT
            </div>
            <h1 className="text-5xl font-semibold tracking-tighter">স্বাগতম! এনরোল করুন / Welcome! Let's get you enrolled.</h1>
            <p className="mt-4 text-lg text-gray-400 max-w-md mx-auto">এই ৩টি সহজ ধাপ অনুসরণ করুন। আপনার কোর্স অ্যাক্সেস তাৎক্ষণিকভাবে চালু হবে। / Follow these 3 simple steps to gain immediate access to the course.</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-12 mb-10">
            <div className="text-emerald-400 uppercase text-xs tracking-[2px] mb-8 font-medium">3-STEP PAYMENT PROCESS</div>

            <div className="space-y-12">
              <div className="flex gap-7">
                <div className="w-9 h-9 rounded-2xl bg-white text-black font-semibold flex items-center justify-center shrink-0 text-lg">1</div>
                <div>
                  <div className="font-semibold text-xl">You selected <span className="text-emerald-400">{course.title}</span></div>
                  <div className="text-gray-400 mt-2">Price: <span className="font-mono text-white">৳{course.price}</span> BDT</div>
                </div>
              </div>

              <div className="flex gap-7">
                <div className="w-9 h-9 rounded-2xl bg-white text-black font-semibold flex items-center justify-center shrink-0 text-lg">2</div>
                <div className="flex-1">
                  <div className="font-semibold text-xl mb-4">Send money using bKash</div>
                  <div className="bg-black border border-emerald-500/30 rounded-3xl p-8 text-center">
                    <div className="text-xs uppercase text-emerald-400 mb-2 tracking-widest">Send exactly</div>
                    <div className="text-6xl font-bold text-white mb-1">৳{course.price}</div>
                    <div className="text-2xl text-emerald-400 font-medium">to</div>
                    <div className="font-mono text-4xl mt-3 tracking-[4px] font-bold">01740570244</div>
                    <div className="text-xs text-gray-500 mt-8">Personal bKash Number</div>
                  </div>
                  <p className="text-xs text-center text-gray-400 mt-5">After sending, copy the <span className="text-amber-400 font-medium">Transaction ID (TrxID)</span></p>
                </div>
              </div>

              <div className="flex gap-7">
                <div className="w-9 h-9 rounded-2xl bg-white text-black font-semibold flex items-center justify-center shrink-0 text-lg">3</div>
                <div className="flex-1">
                  <div className="font-semibold text-xl mb-4">Fill the form below</div>
                  <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-6 text-sm">
                    <span className="font-semibold text-amber-400">CAUTION:</span> Paste your bKash Transaction ID in the form where asked. This is required to verify your payment.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-2">
            <div className="bg-black rounded-3xl p-8 text-center text-xs text-gray-400 mb-4">OFFICIAL ENROLLMENT FORM</div>
            <div className="rounded-3xl overflow-hidden" style={{ height: "1720px" }}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScLYKYKOOqzlkle4mHZNVd1NmN_k_JVHubm6IRucuHZTbQFSQ/viewform?embedded=true" 
                width="100%" 
                height="1720" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                title="Enrollment Form"
              >
                Loading…
              </iframe>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-8 text-xs text-gray-500">
              <div>🔒 Secure Payment</div>
              <div>30-Day Guarantee</div>
              <div>Lifetime Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 37,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"popular" | "price-low" | "price-high" | "newest">("popular");
  const [view, setView] = useState<'landing' | 'detail' | 'checkout'>('landing');
  const [currentCourseId, setCurrentCourseId] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  // Countdown timer
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
    }, 60000); // Update every minute for demo

    return () => clearInterval(timer);
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const showSuccessToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const openCourseDetail = (courseId: number) => {
    setCurrentCourseId(courseId);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCheckout = (courseId: number) => {
    setCurrentCourseId(courseId);
    setView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHome = () => {
    setView('landing');
    setCurrentCourseId(null);
    setSearchTerm("");
  };

  const joinCommunity = () => {
    showSuccessToast("Welcome to the Cyber Cracker Community! Discord invite sent to your email.");
  };

  const bookConsultation = () => {
    window.open("https://www.facebook.com/CyberCrackerAcademy", "_blank");
  };

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(course => 
        course.title.toLowerCase().includes(term) || 
        course.description.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term)
      );
    }

    // Level filter
    if (selectedLevel !== "All") {
      result = result.filter(course => {
        const levelMatch = course.level.toLowerCase();
        if (selectedLevel === "Beginner") return levelMatch.includes("beginner") || levelMatch === "all levels";
        if (selectedLevel === "Intermediate") return levelMatch.includes("intermediate") || levelMatch === "all levels";
        if (selectedLevel === "Advanced") return levelMatch.includes("advanced");
        return true;
      });
    }

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter(course => course.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      case "popular":
      default:
        result.sort((a, b) => parseFloat(b.students.replace('k', '')) - parseFloat(a.students.replace('k', '')));
        break;
    }

    return result;
  }, [searchTerm, selectedLevel, selectedCategory, sortBy]);

  const categories = ["All", "Ethical Hacking", "Penetration Testing", "Defense", "Analysis", "Forensics"];

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {view === 'landing' && (
        <>
          {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500 rounded flex items-center justify-center">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tighter">CYBER CRACKER</div>
              <div className="text-[10px] text-emerald-400 -mt-1 tracking-[2px]">ACADEMY</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#courses" className="hover:text-emerald-400 transition-colors">Courses</a>
            <a href="#live" className="hover:text-emerald-400 transition-colors">Live Classes</a>
            <a href="#community" className="hover:text-emerald-400 transition-colors">Community</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={bookConsultation}
              className="px-5 py-2 text-sm border border-white/30 hover:border-white/70 rounded-full transition-colors flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> Consult
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all active:scale-95"
            >
              START LEARNING <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#22ff8830_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        
        <img 
          src="/images/hero.jpg" 
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
              onClick={joinCommunity}
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

      {/* COURSES MARKETPLACE */}
      <section id="courses" className="bg-zinc-950 py-24 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
            <div>
              <div className="uppercase text-xs tracking-[3px] text-emerald-400 mb-3">ACADEMY MARKETPLACE</div>
              <h2 className="text-6xl font-bold tracking-tighter">All Courses</h2>
              <p className="text-gray-400 mt-3 max-w-md">10 expertly crafted programs. Real skills. Lifetime access. Money-back guarantee.</p>
            </div>
            
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-zinc-900 px-5 py-2.5 rounded-3xl flex items-center gap-2 border border-white/10">
                <span className="text-emerald-400 font-mono">{filteredCourses.length}</span>
                <span className="text-gray-400">courses</span>
              </div>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLevel("All");
                  setSelectedCategory("All");
                  setSortBy("popular");
                }}
                className="text-xs px-5 py-2.5 border border-white/20 hover:border-white/40 rounded-3xl flex items-center gap-1.5 transition-colors"
              >
                RESET FILTERS
              </button>
            </div>
          </div>

          {/* SEARCH AND FILTERS */}
          <div className="flex flex-col lg:flex-row gap-4 mb-10 sticky top-20 z-40 bg-zinc-950 py-5 border-b border-white/10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search courses, skills or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black border border-white/20 focus:border-emerald-400 pl-14 pr-6 py-4 rounded-3xl outline-none text-white placeholder:text-gray-500"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 lg:ml-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 text-sm rounded-3xl transition-all whitespace-nowrap ${
                    selectedCategory === cat 
                      ? 'bg-emerald-500 text-black font-medium shadow-lg shadow-emerald-500/30' 
                      : 'bg-zinc-900 hover:bg-zinc-800 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level & Sort */}
            <div className="flex items-center gap-3 ml-auto">
              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-black border border-white/20 text-sm rounded-3xl px-6 py-3.5 outline-none appearance-none pr-10 cursor-pointer"
                >
                  {levels.map(lvl => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
                <Filter className="w-4 h-4 absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
              </div>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-black border border-white/20 text-sm rounded-3xl px-6 py-3.5 outline-none appearance-none pr-10 cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* RESULTS GRID */}
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => {
                const isAvailable = course.available !== false;
                return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.035, 0.6) }}
                  whileHover={isAvailable ? { y: -6 } : {}}
                  onClick={() => isAvailable && openCourseDetail(course.id)}
                  className={`group bg-black border border-white/10 rounded-3xl overflow-hidden flex flex-col transition-all ${isAvailable ? 'cursor-pointer hover:border-emerald-400/60' : 'cursor-default opacity-75'}`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-all group-hover:scale-110 duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90"></div>
                    
                    <div className="absolute top-6 left-6 px-3 py-0.5 text-[10px] bg-black/80 text-emerald-400 rounded font-mono tracking-widest border border-emerald-500/30">
                      {course.category}
                    </div>
                    
                    <div className="absolute top-6 right-6 px-4 py-1 text-xs bg-black/70 backdrop-blur rounded-full border border-white/20 flex items-center gap-1">
                      <span>★</span> {course.rating}
                    </div>

                    {!isAvailable && (
                      <div className="absolute bottom-6 left-6 px-6 py-1 text-xs bg-amber-400 text-black font-bold rounded-full">
                        COMING SOON
                      </div>
                    )}
                  </div>
                  
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="font-semibold text-[22px] tracking-[-0.5px] leading-none mb-4 line-clamp-2">{course.title}</div>
                    
                    <p className="text-gray-400 text-[14.5px] line-clamp-3 mb-6 flex-1">{course.description}</p>
                    
                    <div className="flex items-center justify-between text-xs border-t border-white/10 pt-6 mt-auto">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="font-mono text-emerald-400 text-2xl font-semibold tracking-tighter">৳{course.price}</div>
                        </div>
                        <div className="text-[10px] text-gray-500 leading-none">
                          {course.duration}<br />{course.modules} modules
                        </div>
                      </div>
                      
                      <div className="text-emerald-400 text-right text-[11px] font-medium">
                        {course.students} students
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-2xl font-medium">No courses found</div>
              <p className="text-gray-400 mt-3">Try adjusting your filters or search term</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLevel("All");
                  setSelectedCategory("All");
                }}
                className="mt-8 px-8 py-3 text-sm border border-white/30 hover:bg-white/5 rounded-2xl"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          )}

          <div className="mt-16 border border-dashed border-white/10 rounded-3xl p-8 text-center bg-black/40">
            <div className="text-emerald-400 text-sm tracking-widest mb-1">NOT SURE WHERE TO START?</div>
            <div className="text-2xl font-medium">Take our 1-minute Cybersecurity Skills Assessment</div>
            <button onClick={() => setShowQuiz(true)} className="mt-6 text-sm border border-white px-8 py-3.5 rounded-2xl hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
              START FREE ASSESSMENT <ArrowRight className="w-4 h-4" />
            </button>
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
                  "Live Q&amp;A with Lead Instructor",
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

      {/* COMMUNITY */}
      <section id="community" className="bg-black py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-emerald-400 text-xs tracking-widest">THE UNDERGROUND NETWORK</div>
              <h2 className="text-6xl font-bold tracking-[-2px] mt-5 leading-none">Join 10,000+<br />Cybersecurity<br />Professionals</h2>
              
              <div className="mt-12 space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-3xl">💬</div>
                  <div>
                    <div className="font-medium">Active Discord</div>
                    <div className="text-gray-400">Daily discussions, job leads, and vulnerability disclosures</div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-3xl">🏆</div>
                  <div>
                    <div className="font-medium">Monthly CTFs</div>
                    <div className="text-gray-400">Win cash prizes and earn bragging rights</div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-3xl">👥</div>
                  <div>
                    <div className="font-medium">Mentorship Program</div>
                    <div className="text-gray-400">Get matched with experienced professionals</div>
                  </div>
                </div>
              </div>

              <motion.button 
                onClick={joinCommunity}
                whileHover={{ scale: 1.04 }}
                className="mt-12 px-14 py-6 bg-gradient-to-r from-emerald-500 to-cyan-400 text-black font-bold rounded-2xl inline-flex items-center gap-4 text-lg"
              >
                JOIN THE DISCORD
                <Users className="w-6 h-6" />
              </motion.button>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative rounded-3xl overflow-hidden aspect-video border border-white/10"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,#111_25%,#1a1a1a_25%,#1a1a1a_50%,#111_50%,#111_75%,#1a1a1a_75%)] bg-[length:60px_60px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-mono font-black text-white/10 tracking-[-6px]">10K</div>
                  <div className="text-emerald-400 text-sm -mt-3">MEMBERS ONLINE RIGHT NOW</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-400">DON&apos;T JUST TAKE OUR WORD</div>
            <h2 className="text-5xl font-bold tracking-tighter">Real Hackers.<br />Real Results.</h2>
          </div>
          <div className="hidden md:block text-sm text-gray-400">— SCROLL FOR MORE —</div>
        </div>

        <div className="relative h-[420px] overflow-hidden">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 80 }}
                animate={{ 
                  opacity: idx === currentTestimonial ? 1 : 0,
                  x: idx === currentTestimonial ? 0 : 80,
                  scale: idx === currentTestimonial ? 1 : 0.92
                }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute inset-0 flex items-center ${idx !== currentTestimonial ? 'pointer-events-none' : ''}`}
              >
                <div className="max-w-2xl mx-auto bg-zinc-900 border border-white/10 rounded-3xl p-14">
                  <div className="flex gap-1 mb-8">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  
                  <div className="text-2xl leading-tight text-balance">
                    “{testimonial.content}”
                  </div>
                  
                  <div className="mt-16 flex items-center gap-5">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white/30" 
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTestimonial(idx)}
              className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === idx ? 'bg-white scale-125' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {[
            ["Do I need previous experience?", "No. Our beginner friendly courses start from zero. We teach you everything from the ground up."],
            ["Are the courses self-paced?", "Yes. All courses are self paced but we also run weekly live classes that you can join."],
            ["Do you offer job placement?", "We have partnerships with 40+ companies and actively help our students get hired."],
            ["What kind of certification do I get?", "You receive a verifiable certificate and also prepare for industry recognized certs like OSCP."],
            ["Is there a money-back guarantee?", "Yes. 30-day money back guarantee. If you aren't satisfied, we'll refund you."],
          ].map(([q, a], index) => (
            <details key={index} className="group bg-zinc-900 rounded-3xl border border-white/10 px-9 py-7">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <div className="text-xl font-medium pr-6">{q}</div>
                <div className="text-4xl text-gray-400 group-open:rotate-45 transition-transform">+</div>
              </summary>
              <div className="text-gray-400 pt-6 text-[15.2px] leading-relaxed border-t border-white/10 mt-6">
                {a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-b from-transparent via-emerald-950/60 to-black py-20">
        <div className="max-w-2xl mx-auto text-center px-6">
          <div className="mx-auto mb-6 flex justify-center">
            <div className="inline-flex items-center rounded-3xl bg-white/10 px-6 py-2 text-sm">
              <Lock className="mr-2 text-emerald-400" /> SECURE YOUR FUTURE
            </div>
          </div>
          <h2 className="text-5xl font-bold tracking-tighter mb-6">Ready to become unstoppable?</h2>
          <p className="text-gray-400">Join the ranks of the most skilled cybersecurity professionals in the world.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button 
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black font-semibold py-6 px-16 rounded-2xl text-lg active:scale-[0.985] transition-transform"
            >
              EXPLORE COURSES
            </button>
            <button 
              onClick={bookConsultation}
              className="border border-white py-6 px-16 rounded-2xl text-lg hover:bg-white/5 transition-all"
            >
              BOOK A CALL
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <Terminal className="w-5 h-5 text-black" />
              </div>
              <div className="font-bold text-4xl tracking-tighter">CYBERCRACKER</div>
            </div>
            
            <div className="max-w-xs text-gray-400">
              Training the next generation of cybersecurity defenders and ethical hackers since 2018.
            </div>
            
            <div className="mt-8 flex items-center gap-5 text-xs text-gray-500">
              <div>© 2025</div>
              <div>PRIVACY</div>
              <div>LEGAL</div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="uppercase text-xs mb-6 text-gray-400">PLATFORM</div>
            <div className="space-y-3 text-sm">
              <div className="cursor-pointer hover:text-white">Courses</div>
              <div className="cursor-pointer hover:text-white">Live Events</div>
              <div className="cursor-pointer hover:text-white">Learning Paths</div>
              <div className="cursor-pointer hover:text-white">Resources</div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="uppercase text-xs mb-6 text-gray-400">COMMUNITY</div>
            <div className="space-y-3 text-sm">
              <div className="cursor-pointer hover:text-white">Discord</div>
              <div className="cursor-pointer hover:text-white">CTF Arena</div>
              <div className="cursor-pointer hover:text-white">Forum</div>
              <div className="cursor-pointer hover:text-white">Mentorship</div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="uppercase text-xs mb-6 text-gray-400">CONTACT</div>
            
            <a href="#" className="block mb-2 text-sm hover:text-emerald-400">academy@cybercracker.io</a>
            <div className="text-xs text-gray-500 mt-8">MADE FOR THE ONES WHO WANT TO BREAK THINGS — THE RIGHT WAY.</div>
          </div>
        </div>
        
        <div className="text-center text-[10px] text-gray-600 mt-20">
          THIS IS A DEMO WEBSITE FOR ILLUSTRATION PURPOSES ONLY
        </div>
      </footer>
        </>
      )}

      {view === 'detail' && currentCourseId && (
        <CourseDetail 
          course={courses.find(c => c.id === currentCourseId)!} 
          onEnroll={openCheckout} 
          onBack={backToHome} 
        />
      )}

      {view === 'checkout' && currentCourseId && (
        <Checkout 
          course={courses.find(c => c.id === currentCourseId)!} 
          onBack={backToHome} 
        />
      )}

      {/* SKILLS ASSESSMENT QUIZ */}
      <AnimatePresence>
        {showQuiz && (
          <QuizModal onClose={() => setShowQuiz(false)} />
        )}
      </AnimatePresence>

      {/* TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            className="fixed bottom-8 right-8 bg-zinc-900 border border-emerald-400 text-emerald-400 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[200]"
          >
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const QuizModal = ({ onClose }: { onClose: () => void }) => {
  const questions = [
    {
      q: "What is the most common type of phishing attack?",
      options: ["A. Spear phishing", "B. Email phishing", "C. Vishing", "D. Smishing"],
      correct: 1
    },
    {
      q: "Which is the strongest password practice?",
      options: ["A. Using your name and birth year", "B. Using 'password123'", "C. Using a unique 16+ character passphrase", "D. Using the same password everywhere"],
      correct: 2
    },
    {
      q: "What does 'IP' stand for in networking?",
      options: ["A. Internal Protocol", "B. Internet Protocol", "C. Information Protocol", "D. Integrated Protocol"],
      correct: 1
    },
    {
      q: "What is a common type of cyber attack that encrypts your files?",
      options: ["A. Phishing", "B. DDoS", "C. Ransomware", "D. SQL Injection"],
      correct: 2
    },
    {
      q: "Which tool is commonly used for network scanning?",
      options: ["A. Nmap", "B. Photoshop", "C. Microsoft Word", "D. VLC Media Player"],
      correct: 0
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(60);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      finishQuiz();
    }
  }, [timeLeft, isFinished]);

  const selectAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    let finalScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correct) finalScore++;
    });
    setScore(finalScore);
    setIsFinished(true);
  };

  const getFeedback = () => {
    if (score === 5) return "🎉 Advanced! You have excellent cybersecurity knowledge. Consider advanced certifications like OSCP.";
    if (score >= 3) return "🛡️ Intermediate. You have good basics. Practice more with real tools and labs.";
    return "📚 Beginner. Start with our CCEH 101 course to build strong foundations in ethical hacking.";
  };

  const getScoreLabel = () => {
    if (score === 5) return "ADVANCED";
    if (score >= 3) return "INTERMEDIATE";
    return "BEGINNER";
  };

  if (isFinished) {
    return (
      <div className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-6">
        <div className="bg-zinc-900 rounded-3xl max-w-lg w-full p-12 text-center">
          <div className="text-7xl mb-6">🏆</div>
          <div className="text-6xl font-bold text-emerald-400 mb-2">{score}/5</div>
          <div className="text-xl font-medium mb-8 text-emerald-400">{getScoreLabel()}</div>
          
          <div className="text-gray-300 mb-10 text-lg leading-snug">{getFeedback()}</div>

          <button 
            onClick={onClose}
            className="w-full py-5 bg-white text-black rounded-2xl font-semibold"
          >
            RETURN TO ACADEMY
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-6">
      <div className="bg-zinc-900 rounded-3xl max-w-2xl w-full overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b border-white/10 flex justify-between items-center">
          <div className="font-semibold">Cybersecurity Skills Assessment</div>
          <div className="font-mono text-xl text-emerald-400 tabular-nums">{timeLeft}s</div>
        </div>

        <div className="p-10">
          <div className="text-xs text-gray-400 mb-2">QUESTION {currentQuestion + 1} OF 5</div>
          <div className="text-2xl leading-tight mb-10">{questions[currentQuestion].q}</div>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(index)}
                className={`w-full text-left p-5 rounded-2xl border transition-all text-base ${
                  selectedAnswers[currentQuestion] === index 
                    ? 'border-emerald-400 bg-emerald-400/10' 
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="p-8 border-t border-white/10 flex justify-end">
          <button 
            onClick={nextQuestion}
            disabled={selectedAnswers[currentQuestion] === -1}
            className="px-10 py-4 bg-emerald-400 text-black font-semibold rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {currentQuestion === questions.length - 1 ? 'FINISH QUIZ' : 'NEXT QUESTION'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

