import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, BookOpen, Clock, Users, Star, Zap, CheckCircle } from 'lucide-react';

export const MetasploitCourseCard = ({ onEnroll }: { onEnroll?: () => void }) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [showAllModules, setShowAllModules] = useState(false);

  const course = {
    title: '🎓 Metasploit Framework',
    subtitle: 'msfconsole - Full Course Structure',
    description: 'Master Metasploit Framework from basics to advanced exploitation. Complete hands-on course with ethical pentesting focus.',
    price: 2499,
    duration: '12 Weeks',
    students: 421,
    rating: 4.85,
    level: 'Intermediate to Advanced'
  };

  const modules = [
    { id: 1, icon: '🔰', name: 'Introduction to Metasploit', duration: '2h', topics: ['What is Metasploit Framework', 'Use cases in cybersecurity & penetration testing', 'Ethical vs illegal usage (VERY important)', 'Overview of msfconsole interface', 'Types of modules (high-level)'] },
    { id: 2, icon: '🖥️', name: 'Lab Setup (Safe Environment)', duration: '3h', topics: ['Installing Kali Linux / Parrot OS', 'Setting up Metasploit Framework', 'Creating a virtual lab (Attacker + Target)', 'Using vulnerable machines', 'Network configuration (NAT / Host-only)'] },
    { id: 3, icon: '🧭', name: 'msfconsole Basics', duration: '2.5h', topics: ['Starting msfconsole', 'Understanding the CLI structure', 'Basic commands: help, search, use, info, back, exit', 'Navigating modules efficiently', 'Command workflow'] },
    { id: 4, icon: '🔍', name: 'Working with Auxiliary Modules', duration: '3h', topics: ['Concept of auxiliary modules', 'Scanning & enumeration basics', 'Port scanning via Metasploit', 'Service detection', 'Practical lab: scanning a target system'] },
    { id: 5, icon: '💥', name: 'Exploits Fundamentals', duration: '3h', topics: ['What is an exploit', 'How vulnerabilities are used', 'Structure of an exploit module', 'Selecting and loading exploits', 'Matching exploit with target'] },
    { id: 6, icon: '📦', name: 'Payloads Deep Dive', duration: '3.5h', topics: ['What is a payload', 'Types: Singles, Stagers, Stages', 'Reverse vs bind connections (conceptual)', 'Setting payloads in msfconsole', 'Payload selection strategy'] },
    { id: 7, icon: '⚙️', name: 'Exploit Execution Workflow', duration: '2.5h', topics: ['Setting target options: RHOSTS, RPORT', 'Using set and setg commands', 'Running exploits (run / exploit)', 'Understanding output results', 'Troubleshooting common issues'] },
    { id: 8, icon: '🔗', name: 'Sessions & Access Management', duration: '2h', topics: ['What is a session', 'Types of sessions', 'Interacting with sessions', 'Backgrounding sessions', 'Session management commands'] },
    { id: 9, icon: '🧠', name: 'Post-Exploitation Basics', duration: '3h', topics: ['What is post-exploitation', 'Information gathering after access', 'Privilege levels (basic concept)', 'Running post modules', 'Maintaining access (concept only)'] },
    { id: 10, icon: '🧰', name: 'Meterpreter Basics', duration: '3.5h', topics: ['What is Meterpreter', 'Key features overview', 'Commands: system info, file navigation, process viewing', 'Session interaction', 'Why it\'s powerful (conceptual)'] },
    { id: 11, icon: '🔐', name: 'Encoders & Evasion Concepts', duration: '2.5h', topics: ['Why encoders exist', 'Basic working concept (no bypass misuse)', 'Encoding vs encryption differences', 'Limitations of encoders', 'When to use encoders'] },
    { id: 12, icon: '🧩', name: 'NOPs & Payload Stability', duration: '2h', topics: ['What is NOP (No Operation)', 'Why it\'s used in exploits', 'Concept of payload reliability', 'NOP sled technique', 'Stability considerations'] },
    { id: 13, icon: '🔌', name: 'Plugins & Automation', duration: '2.5h', topics: ['What are plugins in Metasploit', 'Loading plugins', 'Automating repetitive tasks', 'Resource scripts (.rc files)', 'Custom automation creation'] },
    { id: 14, icon: '🗄️', name: 'Database Integration', duration: '3h', topics: ['Why Metasploit uses a database', 'Storing scan results', 'Managing hosts, services, vulnerabilities', 'Workflow improvement', 'Database queries and filtering'] },
    { id: 15, icon: '🌐', name: 'Real-World Workflow Simulation', duration: '4h', topics: ['Full attack lifecycle (ethical lab)', 'Recon → Scan → Exploit → Post-exploitation', 'Controlled lab environment', 'Attack sequencing', 'Reporting mindset (very important)'] },
    { id: 16, icon: '📊', name: 'Reporting & Documentation', duration: '3h', topics: ['Why reporting matters', 'Target info documentation', 'Vulnerability details reporting', 'Impact assessment', 'Professional pentesting mindset'] }
  ];

  const visibleModules = showAllModules ? modules : modules.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Course Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl mb-12"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs tracking-[2px] px-4 py-2 rounded-full mb-4"
            >
              <Zap className="w-4 h-4" />
              ADVANCED COURSE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
            >
              {course.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 mb-2"
            >
              {course.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-gray-400 max-w-2xl"
            >
              {course.description}
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-gray-400 text-xs mb-1">Duration</div>
              <div className="text-xl font-bold text-cyan-400">{course.duration}</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-gray-400 text-xs mb-1">Modules</div>
              <div className="text-xl font-bold text-cyan-400">16</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-gray-400 text-xs mb-1">Students</div>
              <div className="text-xl font-bold text-cyan-400">{course.students}+</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-gray-400 text-xs mb-1">Rating</div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-yellow-400">{course.rating}</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-gray-400 text-xs mb-1">Level</div>
              <div className="text-xl font-bold text-cyan-400">{course.level.split(' ')[0]}</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <div>
              <div className="text-gray-400 text-sm mb-1">Investment</div>
              <div className="text-3xl font-bold">৳{course.price.toLocaleString()}</div>
            </div>
            <motion.button
              onClick={onEnroll}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
            >
              <span>Enroll Now</span>
              <Zap className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Modules Section */}
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 flex items-center gap-3"
        >
          <BookOpen className="w-8 h-8 text-cyan-400" />
          Course Modules
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {visibleModules.map((module) => (
            <motion.div
              key={module.id}
              variants={itemVariants}
              className="group"
            >
              <motion.button
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                className="w-full text-left relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 p-6"
                whileHover={{ y: -4 }}
              >
                {/* Module Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-3xl">{module.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                          Module {module.id}: {module.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                          <Clock className="w-4 h-4" />
                          {module.duration}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedModule === module.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
              </motion.button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedModule === module.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 border-t-0 rounded-b-2xl p-6"
                  >
                    <div className="space-y-3">
                      {module.topics.map((topic, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{topic}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        {modules.length > 6 && (
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={() => setShowAllModules(!showAllModules)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 border-2 border-cyan-500/30 hover:border-cyan-500 text-cyan-400 font-bold rounded-xl transition-all hover:bg-cyan-500/5"
          >
            {showAllModules ? '- Hide Modules' : `+ Show All 16 Modules`}
          </motion.button>
        )}
      </div>

      {/* Key Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {[
          { icon: '✓', title: 'Ethical Focus', desc: 'VERY important emphasis on legal & ethical usage' },
          { icon: '🔬', title: 'Lab Based', desc: 'Complete isolated lab environments for safe practice' },
          { icon: '🎯', title: 'Real-World', desc: 'Full attack lifecycle simulation in controlled settings' }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-bold text-cyan-400 mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
