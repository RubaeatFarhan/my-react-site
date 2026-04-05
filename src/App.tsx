import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Lock, Terminal, Users, Calendar, 
  Play, ArrowRight, CheckCircle, Zap, Search
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
];

const programGroups = [
  {
    id: "CCEH",
    name: "CCEH Program",
    description: "Ethical hacking pathway with three levels from 101 to 301.",
    image: "./images/course1.jpg",
    courses: courses.filter((course) => course.title.includes("CCEH")),
  },
  {
    id: "CCSE",
    name: "CCSE Program",
    description: "Cybersecurity engineering pathway with three levels from 101 to 301.",
    image: "./images/course4.jpg",
    courses: courses.filter((course) => course.title.includes("CCSE")),
  },
];

const courseCardVariants = [
  'bg-zinc-900 border-l-4 border-emerald-500/40 ring-1 ring-emerald-500/10',
  'bg-zinc-900 border-l-4 border-sky-400/40 ring-1 ring-sky-400/10',
  'bg-zinc-900 border-l-4 border-violet-400/40 ring-1 ring-violet-400/10',
  'bg-zinc-900 border-l-4 border-amber-400/40 ring-1 ring-amber-400/10',
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
    name: "Rani Chawdhory",
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
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'requirements'>('overview');

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
              {(['overview', 'curriculum', 'instructor', 'requirements'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-medium border-b-2 transition-all ${activeTab === tab ? 'border-emerald-400 text-white' : 'border-transparent text-gray-400'}`}
                >
                  {tab === 'overview' && 'Overview'}
                  {tab === 'curriculum' && 'Curriculum'}
                  {tab === 'instructor' && 'Instructor'}
                  {tab === 'requirements' && 'Requirements'}
                </button>
              ))}
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-10">
                {/* Main Description */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-emerald-900/10 to-zinc-900/5 border border-emerald-500/10 rounded-2xl p-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-3">About This Course</h2>
                  <p className="text-gray-300 leading-relaxed">
                    CCEH (Cyber Cracker Ethical Hacking) 101 হলো একটি beginner-friendly ethical hacking কোর্স যা cybersecurity ও penetration testing-এর শক্ত ভিত্তি তৈরি করে। শিল্প মান অনুযায়ী ডিজাইন করা এই কোর্সে আপনি হ্যান্ডস-অন ল্যাব এবং বাস্তব-বিশ্বের প্রকল্প নিয়ে কাজ করবেন।
                  </p>
                </motion.div>

                {/* What You'll Learn */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-5">Course Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: <Shield className="w-5 h-5" />, text: 'Networking & Cybersecurity Fundamentals' },
                      { icon: <Zap className="w-5 h-5" />, text: 'Cyber Attack Techniques & Mechanisms' },
                      { icon: <Terminal className="w-5 h-5" />, text: 'Ethical Hacking Tools & Real-world Techniques' },
                      { icon: <Lock className="w-5 h-5" />, text: 'System Hardening & Defense Strategies' }
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-start gap-4 bg-zinc-900/40 border border-white/5 p-5 rounded-xl hover:border-emerald-500/20 hover:bg-zinc-900/60 transition-all"
                        whileHover={{ y: -2 }}
                      >
                        <div className="text-emerald-400 mt-1 shrink-0">{item.icon}</div>
                        <div className="text-sm text-gray-300 leading-tight">{item.text}</div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-4">
                    Industry-aligned with: <span className="text-emerald-400">EC-Council CEH,</span> <span className="text-emerald-400">OSCP,</span> <span className="text-emerald-400">CompTIA Security+</span>
                  </p>
                </motion.div>

                {/* Learning Path */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-5">Your Learning Path</h3>
                  <div className="space-y-3">
                    {[
                      { level: 'CCEH 101', title: 'Beginner', desc: 'Foundation & Core Concepts', color: 'emerald' },
                      { level: 'CCEH 201', title: 'Intermediate', desc: 'Advanced Exploitation', color: 'blue' },
                      { level: 'CCEH 301', title: 'Professional', desc: 'Real-world & Career Ready', color: 'purple' }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-center gap-4"
                        whileHover={{ x: 5 }}
                      >
                        <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/20 border border-${item.color}-500/30 flex items-center justify-center font-bold text-${item.color}-400 shrink-0 text-sm`}>
                          {i + 1}
                        </div>
                        <div className="flex-1 bg-zinc-900/30 rounded-lg p-3 border border-white/5">
                          <div className="font-medium text-white text-sm">{item.level}: {item.title}</div>
                          <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
                        </div>
                        {i < 2 && <div className="text-emerald-400/40 text-lg shrink-0">→</div>}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Course Outcomes */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-5">Course Outcomes</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {[
                      { icon: <CheckCircle className="w-5 h-5" />, text: 'Strong Foundation in Ethical Hacking' },
                      { icon: <CheckCircle className="w-5 h-5" />, text: 'Real-world Attack Understanding' },
                      { icon: <CheckCircle className="w-5 h-5" />, text: 'Ready for Advanced Levels' }
                    ].map((outcome, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4 hover:border-emerald-500/40 transition-all"
                        whileHover={{ y: -2 }}
                      >
                        <div className="text-emerald-400 mt-0.5 shrink-0">{outcome.icon}</div>
                        <span className="text-sm text-gray-300">{outcome.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Curriculum Preview */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-2xl font-semibold mb-8">What You Will Learn (Curriculum Highlights)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "নেটওয়ার্ক কীভাবে কাজ করে, IP, Ports ও Protocols সম্পর্কে পরিষ্কার ধারণা পাবে",
                      "নিজের কম্পিউটারে একটি সম্পূর্ণ hacking lab setup করতে শিখবে",
                      "Windows ও Linux এর বেসিক এবং Kali Linux ব্যবহার শিখবে",
                      "Target সম্পর্কে তথ্য সংগ্রহ (OSINT) করে hacking শুরু করতে শিখবে",
                      "Network scan করে system-এর দুর্বলতা খুঁজে বের করতে পারবে",
                      "System থেকে গুরুত্বপূর্ণ তথ্য (users, services) extract করার techniques শিখবে",
                      "Vulnerability খুঁজে বের করে analysis করতে পারবে",
                      "Password hacking ও cracking techniques practically শিখবে",
                      "Linux system-এ privilege escalation করে full control নিতে পারবে",
                      "Windows system-এ admin access gain করার methods শিখবে",
                      "Malware কীভাবে কাজ করে এবং analyse করতে হয় তা বুঝবে",
                      "Network sniffing ও MITM attack সম্পর্কে বাস্তব ধারণা পাবে",
                      "Social engineering attack ও human psychology ব্যবহার শিখবে",
                      "DoS/DDoS attack ও এর prevention techniques শিখবে"
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-start gap-4 bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-900/80 transition-colors"
                        whileHover={{ y: -2 }}
                      >
                        <div className="text-emerald-400 mt-1 font-bold">✓</div>
                        <div className="text-sm text-gray-300">{item}</div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-6 text-center">+ More modules in full curriculum →</p>
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
                <img src="./images/instructor.jpg" alt="Instructor" className="w-64 h-64 object-cover rounded-3xl" />
                <div>
                  <div className="text-emerald-400">LEAD INSTRUCTOR</div>
                  <div className="text-4xl font-bold mt-3">Rubaeat Farhan</div>
                  <div className="text-emerald-400 mt-1">OSCP • CEH • 3+ Years Experience</div>
                  <p className="mt-8 text-gray-300">Rubaeat Farhan is a seasoned cybersecurity professional with over 3 years of experience in ethical hacking and penetration testing. He has worked with various organizations to strengthen their security posture and has trained hundreds of students in the field.</p>
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

            {activeTab === 'requirements' && (
              <div>
                <h3 className="text-2xl font-semibold mb-8">Course Requirements</h3>
                <div className="bg-zinc-900 rounded-3xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="text-emerald-400 text-2xl mt-1">💻</div>
                      <div>
                        <div className="font-semibold text-lg">Laptop PC Required</div>
                        <div className="text-gray-400">A personal computer or laptop is essential for hands-on labs and practice</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-emerald-400 text-2xl mt-1">🧠</div>
                      <div>
                        <div className="font-semibold text-lg">4 GB Minimum RAM</div>
                        <div className="text-gray-400">At least 4GB of RAM is required to run virtual machines and tools smoothly</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-emerald-400 text-2xl mt-1">💾</div>
                      <div>
                        <div className="font-semibold text-lg">128 GB Minimum Storage</div>
                        <div className="text-gray-400">Minimum 128GB storage space for installing tools, VMs, and course materials</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-emerald-400 text-2xl mt-1">🚫</div>
                      <div>
                        <div className="font-semibold text-lg">No Other Subscriptions Needed</div>
                        <div className="text-gray-400">No need for TryHackMe, Hack The Box, or any other paid platforms - everything is included</div>
                      </div>
                    </div>
                  </div>
                </div>
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
                href="https://drive.google.com/file/d/1UBghBS5Mou1xw532TH1Yq7meGdwVeQNB/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-2xl text-sm flex items-center justify-center gap-2 relative overflow-hidden group font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-lg"
                >
                  📥
                </motion.span>
                <span className="relative z-10">DOWNLOAD SYLLABUS</span>
              </motion.a>

              <div className="mt-8">
                <div className="text-xs text-gray-400 mb-4">SAMPLE CERTIFICATE</div>
                <img src="./images/Certificate.jpg" alt="Certificate" className="rounded-3xl shadow-2xl w-full" />
              </div>

              {/* How to Buy - Compact */}
              <motion.div 
                className="mt-8 bg-gradient-to-br from-amber-900/20 to-zinc-800 border border-amber-500/20 rounded-2xl p-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-xs text-amber-400 font-semibold mb-3 flex items-center gap-2">
                  <span>🛍️</span> How to Buy
                </div>
                <motion.div 
                  onClick={() => alert('YouTube video will be embedded here')}
                  className="aspect-video bg-black rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Play className="w-8 h-8 text-amber-400 ml-1" />
                  </motion.div>
                </motion.div>
                <p className="text-xs text-gray-400 mt-3 text-center">Step-by-step guide</p>
              </motion.div>

              <div className="text-xs text-center text-gray-500 mt-8">30-day money-back guarantee</div>
            </div>
          </div>
        </div>

        {/* Video & FAQ Section */}
        <div className="mt-20">
          {/* Video & FAQ Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Course Preview Video */}
            <motion.div 
              className="bg-gradient-to-br from-emerald-900/15 to-zinc-900/5 rounded-2xl p-6 border border-emerald-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Course Overview Video</h3>
              <motion.div 
                className="aspect-video bg-black rounded-xl flex items-center justify-center relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-center relative z-10">
                  <motion.div 
                    onClick={() => alert('Demo video playing... (placeholder)')} 
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-xl hover:shadow-emerald-500/40 transition-all"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Play className="w-8 h-8 text-black ml-1" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
              <p className="text-gray-400 text-center mt-3 text-xs">Introduction to Ethical Hacking</p>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-900/15 to-zinc-900/5 rounded-2xl p-6 border border-emerald-500/10"
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Quick FAQs</h3>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {faqs.slice(0, 4).map((faq, i) => (
                  <motion.details
                    key={i}
                    className="group bg-zinc-900/40 border border-white/5 rounded-lg overflow-hidden hover:border-emerald-500/20 transition-all"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <summary className="flex justify-between items-center cursor-pointer p-3 font-medium text-white hover:text-emerald-400 transition-colors list-none text-sm">
                      <span>{faq.q}</span>
                      <span className="text-xs text-emerald-400">+</span>
                    </summary>
                    <p className="text-gray-400 text-xs px-3 pb-3 border-t border-white/5 pt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.details>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Course Syllabus Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Course Syllabus</h3>
            <div className="grid grid-cols-6 gap-2 mb-6">
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <motion.div
                  key={page}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[8.5/11] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent" />
                    <div className="text-center z-10">
                      <div className="text-2xl font-bold text-gray-300 mb-1">{page}</div>
                      <div className="text-xs text-gray-500 font-medium">Syllabus</div>
                    </div>
                    <div className="absolute top-0 right-0 w-4 h-4 bg-emerald-400/15"></div>
                  </div>
                  <div className="p-2 bg-gray-50 border-t border-gray-200">
                    <p className="text-xs text-gray-600 font-medium">Sheet {page} of 6</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={() => alert('Downloading syllabus PDF...')}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📥 Download Full Syllabus
            </motion.button>
          </motion.div>

          {/* Certification Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">Certifications & Recognition</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 rounded-3xl p-6 border border-white/10">
                <div className="text-center mb-4">
                  <div className="text-emerald-400 text-sm font-medium">SAMPLE CERTIFICATE</div>
                </div>
                <img src="./images/Certificate.jpg" alt="Certificate Demo" className="rounded-2xl shadow-2xl w-full" />
              </div>
              <div className="bg-zinc-900 rounded-3xl p-6 border border-white/10">
                <div className="text-center mb-6">
                  <div className="text-emerald-400 text-sm font-medium">INDUSTRY RECOGNITION</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <img src="./images/ec-council.png" alt="EC Council" className="w-16 h-16 mx-auto mb-2 rounded-lg bg-white p-2" />
                    <div className="text-xs text-gray-400">EC Council</div>
                  </div>
                  <div className="text-center">
                    <img src="./images/oscp.png" alt="OSCP" className="w-16 h-16 mx-auto mb-2 rounded-lg bg-white p-2" />
                    <div className="text-xs text-gray-400">OSCP</div>
                  </div>
                  <div className="text-center">
                    <img src="./images/comptia.png" alt="CompTIA" className="w-16 h-16 mx-auto mb-2 rounded-lg bg-white p-2" />
                    <div className="text-xs text-gray-400">CompTIA</div>
                  </div>
                  <div className="text-center">
                    <img src="./images/cissp.png" alt="CISSP" className="w-16 h-16 mx-auto mb-2 rounded-lg bg-white p-2" />
                    <div className="text-xs text-gray-400">CISSP</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Next Courses Section */}
        <motion.div 
          className="mt-32 pt-20 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀 Next Courses You Need To Learn
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Continue your hacking journey with our advanced courses. Build on your foundational knowledge and master ethical hacking at professional levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: 2,
                title: "CCEH 201 : Certified Ethical Hacking (Advanced)",
                description: "Advanced techniques for experienced hackers. Deep dive into complex exploitation and defense evasion.",
                price: 2999,
                duration: "12 weeks",
                level: "Advanced",
                modules: 26,
                students: "437",
                rating: 5.0,
                image: "./images/course2.jpg",
                badge: "INTERMEDIATE"
              },
              {
                id: 3,
                title: "CCEH 301 : Certified Ethical Hacking (Job/Career/Intermediate)",
                description: "Job-ready ethical hacking training. Resume building, interview preparation and real-world projects.",
                price: 1999,
                duration: "10 weeks",
                level: "Professional",
                modules: 22,
                students: "892",
                rating: 4.8,
                image: "./images/course3.jpg",
                badge: "PROFESSIONAL"
              }
            ].map((nextCourse, idx) => (
              <motion.div
                key={nextCourse.id}
                className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={nextCourse.image} 
                    alt={nextCourse.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-emerald-500/90 px-4 py-1 rounded-full text-xs font-bold text-black">
                    {nextCourse.badge}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-bold text-white">{nextCourse.title}</div>
                  </div>
                </div>

                {/* Course Info */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{nextCourse.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-white/10">
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold">{nextCourse.modules}</div>
                      <div className="text-xs text-gray-400">Modules</div>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold">{nextCourse.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold">{nextCourse.duration}</div>
                      <div className="text-xs text-gray-400">Duration</div>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400">Starting at</div>
                      <div className="text-2xl font-bold text-emerald-400">৳{nextCourse.price}</div>
                    </div>
                    <motion.button
                      onClick={() => onEnroll(nextCourse.id)}
                      className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enroll
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continue Learning CTA */}
          <motion.div 
            className="mt-16 text-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-gray-400 mb-6">Don't stop here! Continue your learning journey</p>
            <motion.button
              onClick={() => alert('View all courses')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-2xl font-bold text-white inline-flex items-center gap-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Courses</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Career Paths Section */}
        <motion.div 
          className="mt-32 pt-20 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              After Completing This Course, You Can Go Into
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Multiple career paths await you in the cybersecurity industry. Choose your specialization and build a rewarding career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Ethical Hacking / Penetration Testing",
                description: "System, network ও web app hack করে vulnerability খুঁজে বের করা",
                color: "emerald"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Cyber Security Analyst",
                description: "Threat detect, monitor ও security improve করা",
                color: "blue"
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "Bug Bounty Hunting",
                description: "Website/app-এ vulnerability খুঁজে income করা",
                color: "purple"
              },
              {
                icon: <Terminal className="w-8 h-8" />,
                title: "Network Security",
                description: "Network secure রাখা ও attacks prevent করা",
                color: "cyan"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Digital Forensics & OSINT",
                description: "Investigation, tracking ও data analysis করা",
                color: "orange"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Vulnerability Assessment",
                description: "System scan করে risk identify করা",
                color: "red"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Malware Analysis (Basic Level)",
                description: "Malware কীভাবে কাজ করে তা বুঝা ও analyse করা",
                color: "pink"
              }
            ].map((career, idx) => (
              <motion.div
                key={idx}
                className={`group bg-gradient-to-br from-${career.color}-900/10 to-zinc-900/5 border border-${career.color}-500/10 rounded-2xl p-6 hover:border-${career.color}-500/30 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-${career.color}-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-${career.color}-500/20 transition-colors`}>
                  <div className={`text-${career.color}-400 group-hover:text-${career.color}-300 transition-colors`}>
                    {career.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {career.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {career.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-gray-400 mb-6">Ready to start your cybersecurity career?</p>
            <motion.button
              onClick={() => alert('Get career guidance')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-2xl font-bold text-white inline-flex items-center gap-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Career Guidance</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Massive Reviews Section */}
        <motion.div 
          className="mt-32 pt-20 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌟 What Our Students Say
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real stories from real hackers who transformed their careers with our courses
            </p>
          </div>

          <div className="space-y-8">
            {/* Review 1 - Text + Image */}
            <motion.div
              className="bg-zinc-900 rounded-3xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" className="w-16 h-16 rounded-2xl" />
                    <div>
                      <div className="font-semibold text-lg">Rahim Khan</div>
                      <div className="text-emerald-400 text-sm">Cyber Security Analyst, Dhaka</div>
                      <div className="flex text-yellow-400 mt-1">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    "This course completely changed my career. The practical labs are excellent and instructors are very supportive. 
                    I went from knowing nothing about hacking to landing a job at a top security firm in just 6 months!"
                  </p>
                </div>
                <div className="md:w-80">
                  <div className="rounded-2xl w-full h-48 bg-gradient-to-br from-emerald-500/20 to-zinc-900/50 flex items-center justify-center border border-white/10">
                    <span className="text-gray-400 text-sm">Review Image</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Review 2 - Video Review */}
            <motion.div
              className="bg-zinc-900 rounded-3xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student" className="w-16 h-16 rounded-2xl" />
                    <div>
                      <div className="font-semibold text-lg">Fatima Ahmed</div>
                      <div className="text-emerald-400 text-sm">Penetration Tester, Chittagong</div>
                      <div className="flex text-yellow-400 mt-1">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    "Best ethical hacking course in Bangladesh. I got my first job after completing this course. 
                    The community support is amazing - always someone to help when you're stuck."
                  </p>
                </div>
                <div className="md:w-80">
                  <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
                    <motion.div
                      onClick={() => alert('Playing review video...')}
                      className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-8 h-8 text-black ml-1" />
                    </motion.div>
                    <div className="absolute bottom-4 left-4 text-white text-sm">Watch Fatima's Story</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Review 3 - Text Only */}
            <motion.div
              className="bg-zinc-900 rounded-3xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Student" className="w-16 h-16 rounded-2xl" />
                <div>
                  <div className="font-semibold text-lg">Alex Rivera</div>
                  <div className="text-emerald-400 text-sm">Security Engineer @ Google</div>
                  <div className="flex text-yellow-400 mt-1">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                "The hands-on labs completely transformed my career. Landed my dream job within 3 months of completing the program. 
                The instructors are legends in the industry and the community is incredibly supportive."
              </p>
            </motion.div>

            {/* Review 4 - Multiple Images */}
            <motion.div
              className="bg-zinc-900 rounded-3xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Student" className="w-16 h-16 rounded-2xl" />
                    <div>
                      <div className="font-semibold text-lg">Jordan Patel</div>
                      <div className="text-emerald-400 text-sm">Bug Bounty Hunter</div>
                      <div className="flex text-yellow-400 mt-1">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    "Made my first $15k bounty 6 weeks into the course. The instructors are legends in the industry. 
                    This course gave me the confidence to start bug hunting professionally."
                  </p>
                </div>
                <div className="lg:w-80">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg w-full h-24 bg-gradient-to-br from-emerald-500/20 to-zinc-900/50 flex items-center justify-center border border-white/10">
                      <span className="text-gray-400 text-xs">Image 1</span>
                    </div>
                    <div className="rounded-lg w-full h-24 bg-gradient-to-br from-emerald-500/20 to-zinc-900/50 flex items-center justify-center border border-white/10">
                      <span className="text-gray-400 text-xs">Image 2</span>
                    </div>
                    <div className="rounded-lg w-full h-24 bg-gradient-to-br from-emerald-500/20 to-zinc-900/50 flex items-center justify-center border border-white/10">
                      <span className="text-gray-400 text-xs">Image 3</span>
                    </div>
                    <div className="rounded-lg w-full h-24 bg-gradient-to-br from-emerald-500/20 to-zinc-900/50 flex items-center justify-center border border-white/10">
                      <span className="text-gray-400 text-xs">Image 4</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Review 5 - Video + Text */}
            <motion.div
              className="bg-zinc-900 rounded-3xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Student" className="w-16 h-16 rounded-2xl" />
                    <div>
                      <div className="font-semibold text-lg">Marcus Chen</div>
                      <div className="text-emerald-400 text-sm">CTO @ Fintech Startup</div>
                      <div className="flex text-yellow-400 mt-1">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    "Best cybersecurity education I've experienced. The community alone is worth the investment. 
                    I've hired 3 graduates from this program and they all exceeded expectations."
                  </p>
                </div>
                <div className="md:w-80">
                  <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                    <motion.div
                      onClick={() => alert('Playing testimonial video...')}
                      className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-8 h-8 text-black ml-1" />
                    </motion.div>
                    <div className="absolute bottom-4 left-4 text-white text-sm">Marcus's Success Story</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* More Reviews Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Sarah Kim",
                  role: "Security Consultant",
                  text: "The course structure is perfect for busy professionals. I completed it while working full-time.",
                  avatar: "https://randomuser.me/api/portraits/women/28.jpg",
                  rating: 5
                },
                {
                  name: "David Wong",
                  role: "Network Administrator",
                  text: "Finally understood how hackers think. This course opened my eyes to real security issues.",
                  avatar: "https://randomuser.me/api/portraits/men/52.jpg",
                  rating: 5
                },
                {
                  name: "Lisa Thompson",
                  role: "IT Manager",
                  text: "Worth every penny. The practical skills I gained are directly applicable to my job.",
                  avatar: "https://randomuser.me/api/portraits/women/33.jpg",
                  rating: 5
                },
                {
                  name: "Carlos Rodriguez",
                  role: "DevSecOps Engineer",
                  text: "The community support is incredible. Got help within minutes whenever I was stuck.",
                  avatar: "https://randomuser.me/api/portraits/men/41.jpg",
                  rating: 5
                }
              ].map((review, idx) => (
                <motion.div
                  key={idx}
                  className="bg-zinc-900 rounded-2xl p-6 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-xl" />
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-emerald-400 text-xs">{review.role}</div>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-3">
                    {'★'.repeat(review.rating)}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">"{review.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Load More Reviews */}
          <motion.div 
            className="mt-16 text-center"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <button
              onClick={() => alert('Loading more reviews...')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-400 hover:from-emerald-600 hover:to-cyan-500 rounded-2xl font-bold text-white inline-flex items-center gap-2 transition-all duration-300"
            >
              <span>Load More Reviews</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
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
  };

  const joinCommunity = () => {
    showSuccessToast("Welcome to the Cyber Cracker Community! Discord invite sent to your email.");
  };

  const bookConsultation = () => {
    window.open("https://www.facebook.com/CyberCrackerAcademy", "_blank");
  };

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {view === 'landing' && (
        <>
          {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="Cyber Cracker Academy" className="w-10 h-10 rounded-full object-cover border border-white/10 shadow-lg shadow-black/30" />
            <div>
              <div className="font-bold text-2xl tracking-tighter">CYBER CRACKER</div>
              <div className="text-[10px] text-emerald-400 -mt-1 tracking-[2px]">ACADEMY</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#courses" className="hover:text-emerald-400 transition-colors">Programs</a>
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

                  <div className="space-y-4">
                    {program.courses.map((course, courseIndex) => {
                      const variantClass = courseCardVariants[courseIndex % courseCardVariants.length];

                      return (
                        <motion.button
                          key={course.id}
                          onClick={() => openCourseDetail(course.id)}
                          whileHover={{ y: -6, scale: 1.01 }}
                          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                          className={`w-full text-left ${variantClass} rounded-3xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                        >
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="font-semibold text-lg leading-tight text-white">{course.title}</div>
                            <div className="text-xs uppercase tracking-[1px] text-white/80 bg-white/10 rounded-full px-3 py-1">{course.level}</div>
                          </div>

                          <div className="flex flex-wrap gap-2 text-xs text-white/80 mb-4">
                            <span className="px-3 py-2 bg-white/10 rounded-full">{course.duration}</span>
                            <span className="px-3 py-2 bg-white/10 rounded-full">{course.category}</span>
                          </div>

                          <p className="text-sm text-white/80 line-clamp-2 mb-5">{course.description}</p>

                          <div className="flex items-center justify-between gap-4">
                            <span className="text-emerald-200 font-semibold text-sm uppercase tracking-[1px]">Course Path</span>
                            <span className="inline-flex items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-500 text-white px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-emerald-700 hover:border-emerald-700 btn-hover-emerald">
                              View Details
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
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

      {/* ABOUT */}
      <section id="about" className="bg-zinc-950 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <div className="inline text-xs uppercase tracking-[3px] text-emerald-400 border border-emerald-500/20 px-4 py-1 rounded-full">ABOUT CYBER CRACKER</div>
              <h2 className="text-5xl font-semibold tracking-tighter mt-6">Who We Are</h2>
              <p className="mt-6 text-lg text-gray-300 max-w-3xl leading-8">
                Cyber Cracker Academy is a Bangladesh-based cybersecurity learning platform dedicated to building skilled and ethical cybersecurity professionals.
              </p>
              <p className="mt-6 text-lg text-gray-400 max-w-3xl leading-8">
                We focus on real-world skills, practical learning, and career development, so students can confidently step into the cybersecurity field.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-xl shadow-black/20">
                  <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Our Mission</div>
                  <p className="text-gray-300 leading-7">
                    Our mission is to help Bangladeshi students and beginners gain practical cybersecurity knowledge that actually works in real-life situations.
                    We aim to reduce the gap between theory-based education and real industry skills, and create a new generation of ethical hackers and security experts.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-xl shadow-black/20">
                  <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Why We Started</div>
                  <p className="text-gray-300 leading-7">
                    In Bangladesh, many students learn cybersecurity only from theory or scattered online content. But when it comes to real-world practice, they struggle.
                    That’s why we created Cyber Cracker Academy — a platform where you learn by doing, practicing, and solving real problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-black/20">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-center p-8">
                  <div>
                    <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Our Programs</div>
                    <div className="text-white text-2xl font-semibold mb-4">Two core programs designed for real skills.</div>
                    <div className="space-y-4 text-gray-300">
                      <div>
                        <div className="font-semibold">CCEH (Cyber Cracker Ethical Hacking)</div>
                        <div className="text-sm text-gray-400 mt-1">Learn ethical hacking from beginner to advanced level with practical labs and real attack scenarios.</div>
                      </div>
                      <div>
                        <div className="font-semibold">CCSE (Cyber Cracker Security Expert)</div>
                        <div className="text-sm text-gray-400 mt-1">Build strong defensive skills, including system security, monitoring, and protection techniques.</div>
                      </div>
                    </div>
                  </div>
                  <img src="/images/instructor.jpg" alt="Cybersecurity team" className="w-full rounded-3xl object-cover h-72 shadow-2xl shadow-black/30" />
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-black/20">
                <div className="grid gap-6 lg:grid-cols-2 items-end p-8">
                  <div>
                    <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Trusted by learners</div>
                    <p className="text-gray-300 leading-7 mb-6">
                      Our community and program design are built around trust, practical outcomes, and student-first support.
                    </p>
                    <button
                      onClick={() => joinCommunity()}
                      className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-4 text-black font-semibold shadow-lg shadow-emerald-500/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
                    >
                      Join the Community
                    </button>
                  </div>
                  <img src="/images/hero.jpg" alt="Learning community" className="w-full rounded-3xl object-cover h-72 shadow-2xl shadow-black/30" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-xl shadow-black/20">
              <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Our Team</div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl overflow-hidden bg-zinc-800 shadow-inner shadow-black/20">
                  <img src="/images/instructor.jpg" alt="Team member" className="w-full h-48 object-cover" />
                </div>
                <div className="text-gray-300 leading-7">
                  Our team is a blend of ethical hackers, cybersecurity engineers, and real practitioners who keep the content fresh and career-focused.
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-xl shadow-black/20">
              <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Community & Presence</div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl overflow-hidden bg-zinc-800 shadow-inner shadow-black/20">
                  <img src="/images/course1.jpg" alt="Community workshops" className="w-full h-48 object-cover" />
                </div>
                <div className="text-gray-300 leading-7">
                  We build trust with students across Bangladesh through tutorials, live sessions, and support that helps learners stay current.
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-xl shadow-black/20">
              <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Why Trust Us</div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>✔ Focus on practical, real-world skills</li>
                <li>✔ Programs designed for Bangladeshi students</li>
                <li>✔ Honest and growing community</li>
                <li>✔ Continuous learning support</li>
              </ul>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-400/10 rounded-3xl p-8 shadow-xl shadow-black/20">
              <div className="text-white text-xl font-semibold mb-4">Start Your Journey</div>
              <p className="text-gray-300 leading-7 mb-6">If you are serious about learning and building a career, Cyber Cracker Academy is here to guide you step by step.</p>
              <button
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-lg shadow-emerald-500/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Join Today
              </button>
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
              EXPLORE PROGRAMS
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
              <div className="cursor-pointer hover:text-white">Programs</div>
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


