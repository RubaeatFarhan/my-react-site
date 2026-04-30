import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, BookOpen, Award, CheckCircle, Zap, Code } from 'lucide-react';

const courseDatabase: Record<string, any> = {
  'bug-bounty': {
    id: 'bug-bounty',
    title: 'Bug Bounty Hunting Masterclass',
    description: 'Learn how to find vulnerabilities on real-world applications and earn money through bug bounty programs.',
    price: 1999,
    duration: '8 Weeks',
    moduleCount: 16,
    students: 340,
    rating: 4.9,
    level: 'Intermediate',
    image: './images/course1.jpg',
    instructor: 'John Security Expert',
    instructorBio: '10+ years in cybersecurity, worked with top companies and discovered 500+ vulnerabilities',
    aboutCourse: `This comprehensive masterclass teaches you the art and science of bug bounty hunting. You'll learn from top bounty hunters who have earned thousands of dollars finding and reporting vulnerabilities. The course covers real-world techniques, tools, and methodologies used by professional security researchers.

    By the end of this course, you'll be able to:
    • Identify vulnerabilities in web applications
    • Perform security assessments professionally
    • Write compelling bug reports
    • Earn consistent income through bug bounty programs`,
    modules: [
      { id: 1, name: 'Introduction to Bug Bounty Programs', duration: '2 hours', lessons: 8 },
      { id: 2, name: 'Web Application Fundamentals', duration: '3 hours', lessons: 12 },
      { id: 3, name: 'Reconnaissance & Information Gathering', duration: '4 hours', lessons: 15 },
      { id: 4, name: 'Web Vulnerability Scanning', duration: '3 hours', lessons: 10 },
      { id: 5, name: 'API Security Testing', duration: '4 hours', lessons: 14 },
      { id: 6, name: 'Authentication & Authorization Flaws', duration: '3 hours', lessons: 11 },
      { id: 7, name: 'Business Logic Vulnerabilities', duration: '2 hours', lessons: 9 },
      { id: 8, name: 'Mobile App Testing', duration: '3 hours', lessons: 12 },
      { id: 9, name: 'Report Writing Excellence', duration: '2 hours', lessons: 8 },
      { id: 10, name: 'Earning Your First Bounty', duration: '2 hours', lessons: 7 },
      { id: 11, name: 'Advanced Exploitation Techniques', duration: '4 hours', lessons: 16 },
      { id: 12, name: 'Case Studies & Real Bounties', duration: '3 hours', lessons: 10 },
      { id: 13, name: 'Building a Bug Bounty Portfolio', duration: '2 hours', lessons: 9 },
      { id: 14, name: 'Tools & Automation', duration: '3 hours', lessons: 11 },
      { id: 15, name: 'Legal & Ethical Considerations', duration: '1 hour', lessons: 5 },
      { id: 16, name: 'Capstone Project', duration: '8 hours', lessons: 1 },
    ],
    learningOutcomes: [
      'Master vulnerability detection and exploitation',
      'Write professional security reports',
      'Identify and exploit OWASP Top 10 vulnerabilities',
      'Use industry-standard security tools',
      'Earn money through legitimate bug bounty platforms',
      'Build a career in cybersecurity'
    ],
    requirements: [
      'Basic understanding of web technologies',
      'Familiarity with Linux command line',
      'Python or JavaScript knowledge',
      'Curious mindset and passion for security'
    ],
    reviews: [
      { name: 'Ahmed Hassan', rating: 5, comment: 'Found my first bug worth $2000 after week 6!' },
      { name: 'Sarah Johnson', rating: 5, comment: 'Best cybersecurity course I have ever taken' },
      { name: 'Mike Chen', rating: 4.9, comment: 'Instructors are incredibly knowledgeable and responsive' }
    ]
  },
  'malware-development': {
    id: 'malware-development',
    title: 'Malware Development Advanced',
    description: 'Master advanced malware analysis, reverse engineering, and threat intelligence. Learn from security researchers.',
    price: 3499,
    duration: '10 Weeks',
    moduleCount: 14,
    students: 187,
    rating: 4.8,
    level: 'Professional',
    image: './images/course1.jpg',
    instructor: 'Dr. Security Researcher',
    instructorBio: '15+ years in threat intelligence, published multiple security papers, former SOC manager',
    aboutCourse: `Deep dive into advanced malware analysis and reverse engineering. This expert-level course teaches you how to analyze sophisticated malware, understand attacker methodologies, and build custom analysis tools. Perfect for security researchers and threat intelligence professionals.

    By the end of this course, you'll be able to:
    • Analyze complex malware samples
    • Reverse engineer binary code
    • Develop custom analysis tools
    • Contribute to threat intelligence`,
    modules: [
      { id: 1, name: 'Malware Analysis Fundamentals', duration: '3 hours', lessons: 10 },
      { id: 2, name: 'Binary Analysis Basics', duration: '4 hours', lessons: 14 },
      { id: 3, name: 'Assembly Language Deep Dive', duration: '5 hours', lessons: 18 },
      { id: 4, name: 'Reverse Engineering Tools', duration: '3 hours', lessons: 12 },
      { id: 5, name: 'Dynamic Analysis Techniques', duration: '4 hours', lessons: 15 },
      { id: 6, name: 'Malware Behavior Analysis', duration: '3 hours', lessons: 11 },
      { id: 7, name: 'Unpacking & Obfuscation Techniques', duration: '4 hours', lessons: 13 },
      { id: 8, name: 'API Hooking & Interception', duration: '3 hours', lessons: 12 },
      { id: 9, name: 'Network Analysis for Malware', duration: '3 hours', lessons: 10 },
      { id: 10, name: 'Exploit Analysis', duration: '4 hours', lessons: 14 },
      { id: 11, name: 'Ransomware Analysis Case Studies', duration: '3 hours', lessons: 9 },
      { id: 12, name: 'Building Custom Analysis Tools', duration: '5 hours', lessons: 16 },
      { id: 13, name: 'Threat Intelligence Integration', duration: '2 hours', lessons: 8 },
      { id: 14, name: 'Advanced Capstone Project', duration: '10 hours', lessons: 1 },
    ],
    learningOutcomes: [
      'Perform sophisticated malware analysis',
      'Reverse engineer binary code effectively',
      'Develop custom malware analysis tools',
      'Understand advanced attacker techniques',
      'Contribute to threat intelligence operations',
      'Become a subject matter expert in malware research'
    ],
    requirements: [
      'Strong C/C++ programming skills',
      'Advanced knowledge of operating systems',
      'Assembly language proficiency',
      'Prior malware analysis experience'
    ],
    reviews: [
      { name: 'Dr. Michael', rating: 5, comment: 'Excellent deep technical content, industry best practices' },
      { name: 'Security Manager', rating: 4.8, comment: 'My team learned more in this course than years of practice' }
    ]
  },
  'metasploit-framework': {
    id: 'metasploit-framework',
    title: '🎓 Metasploit Framework (msfconsole) – Full Course Structure',
    description: 'Master the Metasploit Framework from basics to advanced exploitation. Complete hands-on course with ethical pentesting focus and real-world lab environments.',
    price: 2499,
    duration: '12 Weeks',
    moduleCount: 16,
    students: 421,
    rating: 4.85,
    level: 'Intermediate to Advanced',
    image: '/images/metasploit-course-thumbnail.png',
    icon: '/images/metasploit-course-icon.png',
    instructor: 'Ethical Hacker Pro',
    instructorBio: '12+ years in penetration testing, OSCP certified, worked with Fortune 500 companies',
    aboutCourse: `Master Metasploit Framework from the ground up! This comprehensive course teaches you how to use msfconsole effectively for penetration testing in legal, ethical environments. Learn reconnaissance, exploitation, post-exploitation techniques, and complete attack workflows in controlled lab environments.

By the end of this course, you'll be able to:
• Use msfconsole with proficiency for security assessments
• Execute complete attack lifecycles in ethical labs
• Understand and deploy exploits and payloads
• Perform post-exploitation and maintain access
• Build professional penetration testing reports
• Navigate the ethical and legal considerations of security testing

⚠️ CRITICAL: This course emphasizes ETHICAL & LEGAL usage only. All labs are on intentionally vulnerable systems in isolated environments.`,
    modules: [
      { id: 1, name: 'Introduction to Metasploit', duration: '2 hours', lessons: 8, details: ['What is Metasploit Framework', 'Use cases in cybersecurity & penetration testing', 'Ethical vs illegal usage (VERY important)', 'Overview of msfconsole interface', 'Types of modules (high-level)'] },
      { id: 2, name: 'Lab Setup (Safe Environment)', duration: '3 hours', lessons: 10, details: ['Installing Kali Linux / Parrot OS', 'Setting up Metasploit Framework', 'Creating a virtual lab (Attacker + Target)', 'Using vulnerable machines', 'Network configuration (NAT / Host-only)'] },
      { id: 3, name: 'msfconsole Basics', duration: '2.5 hours', lessons: 9, details: ['Starting msfconsole', 'Understanding the CLI structure', 'help & search commands', 'use & info commands', 'back & exit commands', 'Navigating modules efficiently'] },
      { id: 4, name: 'Working with Auxiliary Modules', duration: '3 hours', lessons: 12, details: ['Concept of auxiliary modules', 'Scanning & enumeration basics', 'Port scanning via Metasploit', 'Service detection', 'Practical lab: scanning a target system'] },
      { id: 5, name: 'Exploits Fundamentals', duration: '3 hours', lessons: 11, details: ['What is an exploit', 'How vulnerabilities are used', 'Structure of an exploit module', 'Selecting and loading exploits', 'Matching exploit with target'] },
      { id: 6, name: 'Payloads Deep Dive', duration: '3.5 hours', lessons: 13, details: ['What is a payload', 'Singles payload type', 'Stagers payload type', 'Stages payload type', 'Reverse vs bind connections', 'Setting payloads in msfconsole'] },
      { id: 7, name: 'Exploit Execution Workflow', duration: '2.5 hours', lessons: 10, details: ['Setting target options (RHOSTS, RPORT)', 'Using set and setg commands', 'Running exploits (run / exploit)', 'Understanding output results', 'Troubleshooting common issues'] },
      { id: 8, name: 'Sessions & Access Management', duration: '2 hours', lessons: 8, details: ['What is a session', 'Types of sessions', 'Interacting with sessions', 'Backgrounding sessions', 'Session management commands'] },
      { id: 9, name: 'Post-Exploitation Basics', duration: '3 hours', lessons: 11, details: ['What is post-exploitation', 'Information gathering after access', 'Privilege levels (basic concept)', 'Running post modules', 'Maintaining access (concept only)'] },
      { id: 10, name: 'Meterpreter Basics', duration: '3.5 hours', lessons: 14, details: ['What is Meterpreter', 'Key features overview', 'system info command', 'File navigation commands', 'Process viewing capabilities', 'Why it\'s powerful (conceptual)'] },
      { id: 11, name: 'Encoders & Evasion Concepts', duration: '2.5 hours', lessons: 9, details: ['Why encoders exist', 'Basic working concept', 'Encoding vs encryption differences', 'Limitations of encoders', 'When to use encoders'] },
      { id: 12, name: 'NOPs & Payload Stability', duration: '2 hours', lessons: 7, details: ['What is NOP (No Operation)', 'Why it\'s used in exploits', 'Concept of payload reliability', 'NOP sled technique', 'Stability considerations'] },
      { id: 13, name: 'Plugins & Automation', duration: '2.5 hours', lessons: 10, details: ['What are plugins in Metasploit', 'Loading plugins', 'Automating repetitive tasks', 'Resource scripts (.rc files)', 'Creating custom automation'] },
      { id: 14, name: 'Database Integration', duration: '3 hours', lessons: 11, details: ['Why Metasploit uses a database', 'Storing scan results', 'Managing hosts, services, vulnerabilities', 'Workflow improvement using database', 'Database queries and filtering'] },
      { id: 15, name: 'Real-World Workflow Simulation', duration: '4 hours', lessons: 16, details: ['Full attack lifecycle (ethical lab)', 'Recon phase', 'Scan phase', 'Exploit phase (controlled lab)', 'Post-exploitation phase', 'Reporting mindset (very important)'] },
      { id: 16, name: 'Reporting & Documentation', duration: '3 hours', lessons: 12, details: ['Why reporting matters', 'Target info documentation', 'Vulnerability details reporting', 'Impact assessment', 'Fix recommendations', 'Professional pentesting mindset'] }
    ],
    learningOutcomes: [
      'Proficiently use Metasploit Framework (msfconsole)',
      'Execute complete penetration testing workflows',
      'Understand and deploy exploits and payloads',
      'Perform post-exploitation and access management',
      'Create professional penetration testing reports',
      'Maintain ethical and legal standards in security testing',
      'Set up and manage isolated lab environments',
      'Understand meterpreter and session management'
    ],
    requirements: [
      'Basic networking knowledge (TCP/IP basics)',
      'Familiarity with Linux command line',
      'Understanding of cybersecurity fundamentals',
      'Virtual machine knowledge (VirtualBox/VMware)',
      'Ethical mindset and commitment to legal testing'
    ],
    reviews: [
      { name: 'Alex Penetration Tester', rating: 5, comment: 'Perfect foundation for OSCP prep! Lab environments are realistic and well-structured.' },
      { name: 'Sarah Security Analyst', rating: 5, comment: 'Finally understood how Metasploit actually works. Instructor explains complex concepts clearly.' },
      { name: 'John Red Teamer', rating: 4.85, comment: 'Excellent coverage of msfconsole from basics to advanced. Great emphasis on ethics and legality.' }
    ]
  }
};

export const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseDatabase[courseId || 'bug-bounty'];

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden pt-24">
      {/* Back Button */}
      <motion.button
        onClick={() => navigate('/')}
        whileHover={{ x: -5 }}
        className="ml-6 mb-4 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </motion.button>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Course Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="bg-cyan-500/20 border border-cyan-500/40 px-4 py-2 rounded-full">
                <span className="text-cyan-300 font-bold">{course.level}</span>
              </div>
            </div>
          </motion.div>

          {/* Course Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-xl font-bold">{course.rating}</span>
              <span className="text-gray-400">({course.students}+ students)</span>
            </div>

            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {course.title}
            </h1>

            {course.icon && (
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={course.icon}
                  alt="Metasploit course icon"
                  className="w-16 h-16 rounded-2xl border border-cyan-500/30 bg-slate-950 object-cover"
                />
                <div>
                  <p className="text-sm uppercase tracking-[1px] text-cyan-300 font-semibold">Metasploit Framework</p>
                  <p className="text-sm text-gray-400">Safe, ethical hacking lab training with msfconsole.</p>
                </div>
              </div>
            )}


            {/* Course Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-400">Duration</span>
                </div>
                <p className="text-2xl font-bold">{course.duration}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-400">Modules</span>
                </div>
                <p className="text-2xl font-bold">{course.moduleCount}</p>
              </div>
            </div>

            {/* Pricing and CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div>
                <p className="text-gray-400 mb-2">Investment</p>
                <p className="text-4xl font-bold">৳{course.price.toLocaleString()}</p>
              </div>
              <motion.button
                onClick={() => navigate(`/enroll/${courseId}`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Enroll Now</span>
                <Zap className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Course */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold mb-6">About This Course</h2>
          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line mb-8">
            {course.aboutCourse}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Learning Outcomes */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-cyan-400" />
                What You'll Learn
              </h3>
              <ul className="space-y-3">
                {course.learningOutcomes.map((outcome: string, idx: number) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-cyan-400 mt-1">✓</span>
                    {outcome}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-cyan-400" />
                Requirements
              </h3>
              <ul className="space-y-3">
                {course.requirements.map((req: string, idx: number) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-blue-400 mt-1">•</span>
                    {req}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Instructor */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12"
        >
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold">
              {course.instructor.charAt(0)}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{course.instructor}</h3>
              <p className="text-gray-300 text-lg mb-4">{course.instructorBio}</p>
              <Award className="w-5 h-5 text-purple-400" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Modules */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold mb-8">Course Modules</h2>
        <div className="grid gap-4">
          {course.modules.map((module: any, idx: number) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold mb-2">Module {module.id}: {module.name}</h4>
                  <p className="text-gray-400">{module.lessons} lessons • {module.duration}</p>
                </div>
                <BookOpen className="w-6 h-6 text-cyan-400" />
              </div>
              {module.details?.length > 0 && (
                <div className="mt-5 text-gray-300">
                  <p className="text-sm font-semibold text-cyan-300 mb-3">What this module covers</p>
                  <ul className="grid gap-2 text-sm text-gray-300">
                    {module.details.map((detail: string, detailIdx: number) => (
                      <li key={detailIdx} className="flex items-start gap-3">
                        <span className="mt-1 text-cyan-400">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold mb-8">Student Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {course.reviews.map((review: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{review.comment}</p>
              <p className="font-bold">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-300 mb-8">Join {course.students}+ students already learning. Get lifetime access to all course materials.</p>
          <motion.button
            onClick={() => navigate(`/enroll/${courseId}`)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all inline-flex items-center gap-2"
          >
            Enroll Now
            <Zap className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
