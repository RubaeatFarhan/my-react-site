import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Award, Zap, Users, ArrowRight, Star, BookOpen, Target, Code, Lock, Rocket } from 'lucide-react';
import { MetasploitCourseCard } from '../components/MetasploitCourseCard';

export const Courses = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden pt-24">
      {/* FEATURED COURSES - BUG BOUNTY & TRENDING */}
      <section id="featured-courses" className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs tracking-[2px] px-4 py-2 rounded-full mb-6"
            >
              <motion.span 
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-lg"
              >
                🔥
              </motion.span>
              TRENDING COURSES
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold tracking-tighter mt-4"
            >
              In-Demand Specializations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mt-4"
            >
              Master specialized skills that are highly sought after in the cybersecurity industry
            </motion.p>
          </div>

          {/* Featured Courses - Bug Bounty & Malware Development */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Main Featured Course - Bug Bounty */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.01 }}
              className="group bg-gradient-to-br from-amber-900/30 to-zinc-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/20 hover:shadow-amber-500/20 transition-all duration-500"
            >
              {/* Course Image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-amber-900/20 to-black">
                <img 
                  src="./images/course1.jpg" 
                  alt="Bug Bounty Hunting" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Trending Badge */}
                <motion.div 
                  initial={{ x: -100, rotate: -25 }}
                  animate={{ x: 0, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="absolute top-6 left-6 flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg"
                >
                  <motion.span 
                    animate={{ rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🔥
                  </motion.span>
                  <span className="font-bold text-sm">Trending</span>
                </motion.div>

                {/* Rating Badge */}
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                  <span className="text-yellow-400 text-sm">★ 4.9</span>
                </div>

                {/* Students Enrolled */}
                <div className="absolute bottom-6 left-6">
                  <div className="text-white text-sm font-semibold mb-1">340+ Students Enrolled</div>
                  <div className="text-gray-300 text-xs">& Growing Fast</div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="text-amber-400 text-xs uppercase tracking-[2px] font-bold mb-2">SPECIALIZED COURSE</div>
                    <h3 className="text-3xl font-bold text-white leading-tight">Bug Bounty Hunting Masterclass</h3>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 mt-4">
                  Learn how to find vulnerabilities on real-world applications and earn money through bug bounty programs. Get practical techniques from top bounty hunters with 340+ students already earning.
                </p>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8 py-6 border-y border-amber-500/20">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/40">
                      <span className="text-amber-400 font-bold text-lg">16</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">16 Modules</div>
                      <div className="text-gray-400 text-xs">Comprehensive curriculum</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/40">
                      <span className="text-amber-400 font-bold text-lg">8</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">8 Weeks</div>
                      <div className="text-gray-400 text-xs">Structured learning</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Real-World</div>
                      <div className="text-gray-400 text-xs">Practical techniques</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                      <Award className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Certification</div>
                      <div className="text-gray-400 text-xs">Industry recognized</div>
                    </div>
                  </motion.div>
                </div>

                {/* Course Highlights */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 text-sm">What You'll Learn:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Web Application Vulnerability Hunting",
                      "API Security & Exploitation",
                      "Mobile App Penetration Testing",
                      "Server-side Vulnerability Discovery",
                      "Report Writing & Communication",
                      "Earning Your First Bounty"
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        <span className="text-amber-400">✓</span>
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Pricing and Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm mb-1">Investment</div>
                    <div className="text-4xl font-bold text-white">
                      ৳1,999
                      <span className="text-lg text-gray-400 ml-2">One-time</span>
                    </div>
                  </div>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <motion.button
                      onClick={() => navigate('/course/bug-bounty')}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex-1 sm:flex-none px-6 py-3 border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      VIEW DETAILS
                    </motion.button>

                    <motion.button
                      onClick={() => navigate('/enroll/bug-bounty')}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
                    >
                      <span>ENROLL NOW</span>
                      <Zap className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Featured Course - Malware Development Advanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.01 }}
              className="group bg-gradient-to-br from-red-900/30 to-zinc-900 border border-red-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20 hover:shadow-red-500/20 transition-all duration-500"
            >
              {/* Course Image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-red-900/20 to-black">
                <img 
                  src="./images/course1.jpg" 
                  alt="Malware Development Advanced" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Advanced Badge */}
                <motion.div 
                  initial={{ x: -100, rotate: -25 }}
                  animate={{ x: 0, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="absolute top-6 left-6 flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full shadow-lg"
                >
                  <motion.span 
                    animate={{ rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⚡
                  </motion.span>
                  <span className="font-bold text-sm">Advanced</span>
                </motion.div>

                {/* Rating Badge */}
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                  <span className="text-yellow-400 text-sm">★ 4.8</span>
                </div>

                {/* Students Enrolled */}
                <div className="absolute bottom-6 left-6">
                  <div className="text-white text-sm font-semibold mb-1">187+ Students Enrolled</div>
                  <div className="text-gray-300 text-xs">Expert-Level Course</div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="text-red-400 text-xs uppercase tracking-[2px] font-bold mb-2">ADVANCED SPECIALIZATION</div>
                    <h3 className="text-3xl font-bold text-white leading-tight">Malware Development Advanced</h3>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 mt-4">
                  Master advanced malware analysis, reverse engineering, and threat intelligence. Learn from security researchers who work on cutting-edge threats. Build custom analysis tools and understand attacker methodologies.
                </p>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8 py-6 border-y border-red-500/20">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/40">
                      <span className="text-red-400 font-bold text-lg">14</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">14 Modules</div>
                      <div className="text-gray-400 text-xs">In-depth technical content</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/40">
                      <span className="text-red-400 font-bold text-lg">10</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">10 Weeks</div>
                      <div className="text-gray-400 text-xs">Advanced structured path</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center border border-violet-500/40">
                      <Code className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Hands-On Labs</div>
                      <div className="text-gray-400 text-xs">20+ practical exercises</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center border border-violet-500/40">
                      <Lock className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">Expert Support</div>
                      <div className="text-gray-400 text-xs">1-on-1 mentoring available</div>
                    </div>
                  </motion.div>
                </div>

                {/* Course Highlights */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 text-sm">What You'll Master:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Binary Analysis & Disassembly",
                      "Malware Behavior Emulation",
                      "Custom Tool Development",
                      "Threat Intelligence Analysis",
                      "Advanced Reverse Engineering",
                      "Forensic Investigation Techniques"
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        <span className="text-red-400">✓</span>
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Pricing and Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm mb-1">Investment</div>
                    <div className="text-4xl font-bold text-white">
                      ৳3,499
                      <span className="text-lg text-gray-400 ml-2">One-time</span>
                    </div>
                  </div>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <motion.button
                      onClick={() => navigate('/course/malware-development')}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex-1 sm:flex-none px-6 py-3 border-2 border-red-500 text-red-400 hover:bg-red-500/10 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      VIEW DETAILS
                    </motion.button>

                    <motion.button
                      onClick={() => navigate('/enroll/malware-development')}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-red-500/30 flex items-center justify-center gap-2"
                    >
                      <span>ENROLL NOW</span>
                      <Zap className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stats Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-emerald-900/30 to-zinc-900 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Active Learners</div>
                  <div className="text-2xl font-bold text-white">340+</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Students earning through bug bounties</p>
            </motion.div>

            {/* Stats Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-sky-900/30 to-zinc-900 border border-sky-500/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-sky-500/20 flex items-center justify-center border border-sky-500/40">
                  <Award className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Average Earnings</div>
                  <div className="text-2xl font-bold text-white">$5K+</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Per student in first 3 months</p>
            </motion.div>

            {/* Stats Card 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-violet-900/30 to-zinc-900 border border-violet-500/30 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center border border-violet-500/40">
                  <Zap className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs">Success Rate</div>
                  <div className="text-2xl font-bold text-white">89%</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Students find first vulnerability</p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-amber-500/10 border border-amber-500/20 rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Earning Through Bug Bounties?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 340+ students who are already finding vulnerabilities and earning money. Get lifetime access to all course materials and community support.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:shadow-xl hover:shadow-white/20 transition-all inline-flex items-center gap-2"
            >
              START YOUR BUG BOUNTY JOURNEY
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* METASPLOIT FRAMEWORK COURSE - SPECIAL FEATURE */}
      <section className="bg-gradient-to-b from-slate-900/50 via-slate-900 to-slate-900/50 py-24 border-t border-slate-700/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs tracking-[2px] px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              ADVANCED PENTESTING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Metasploit Framework Mastery
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Complete hands-on course covering msfconsole from basics to advanced exploitation techniques with ethical focus
            </p>
          </motion.div>

          <MetasploitCourseCard
            onDetails={() => navigate('/course/metasploit-framework')}
            onEnroll={() => navigate('/enroll/metasploit-framework')}
          />
        </div>
      </section>

      {/* All Courses Grid - Professional & Interactive */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs tracking-[2px] px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            ALL AVAILABLE COURSES
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Master Your Specialization
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose from our comprehensive collection of industry-leading cybersecurity courses. Each course is designed by experts to provide practical, real-world skills that employers demand.
          </p>
        </motion.div>

        {/* Filters/Category Tabs - Optional */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {['All Courses', 'Beginner', 'Advanced', 'Professional'].map((cat, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                idx === 0 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30' 
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-300'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Professional Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Ethical Hacking Fundamentals (CCEH 101)", 
              level: "Beginner",
              icon: Shield,
              color: "from-emerald-500 to-teal-500",
              duration: "4 Months", 
              price: "৳2,999",
              image: "./images/course1.jpg",
              rating: 4.8,
              students: 256,
              description: "Master the fundamentals of ethical hacking and penetration testing. Learn to identify vulnerabilities before attackers do.",
              skills: ["Network Analysis", "System Security", "Basic Exploitation", "Ethical Guidelines"]
            },
            { 
              title: "Advanced Penetration Testing (CCEH 201)", 
              level: "Advanced",
              icon: Code,
              color: "from-blue-500 to-cyan-500",
              duration: "12 Weeks", 
              price: "৳2,999",
              image: "./images/course1.jpg",
              rating: 4.9,
              students: 189,
              description: "Deep dive into advanced penetration testing techniques. Exploit complex systems and write professional reports.",
              skills: ["Web App Hacking", "API Testing", "Privilege Escalation", "Report Writing"]
            },
            { 
              title: "Professional Security Certification (CCEH 301)", 
              level: "Professional",
              icon: Rocket,
              color: "from-amber-500 to-orange-500",
              duration: "10 Weeks", 
              price: "৳1,999",
              image: "./images/course1.jpg",
              rating: 4.7,
              students: 142,
              description: "Industry-recognized certification course. Get certified and boost your career in cybersecurity.",
              skills: ["Advanced Exploitation", "Network Defense", "Incident Response", "Certification Prep"]
            },
            { 
              title: "Secure Coding Essentials (CCSE 101)", 
              level: "Beginner",
              icon: Lock,
              color: "from-violet-500 to-purple-500",
              duration: "8 Weeks", 
              price: "৳2,699",
              image: "./images/course1.jpg",
              rating: 4.8,
              students: 218,
              description: "Learn to write secure code and prevent common vulnerabilities. Essential for all developers.",
              skills: ["OWASP Top 10", "Input Validation", "Authentication", "Cryptography Basics"]
            },
            { 
              title: "Cloud Security Mastery (CCSE 201)", 
              level: "Intermediate",
              icon: Target,
              color: "from-pink-500 to-rose-500",
              duration: "10 Weeks", 
              price: "৳2,799",
              image: "./images/course1.jpg",
              rating: 4.9,
              students: 173,
              description: "Secure cloud infrastructure and applications. AWS, Azure, and GCP security best practices.",
              skills: ["AWS Security", "Cloud Architecture", "IAM Policies", "Compliance Frameworks"]
            },
            { 
              title: "Malware Analysis & Reverse Engineering (CCSE 301)", 
              level: "Professional",
              icon: BookOpen,
              color: "from-red-500 to-pink-500",
              duration: "12 Weeks", 
              price: "৳2,999",
              image: "./images/course1.jpg",
              rating: 4.8,
              students: 127,
              description: "Analyze malware samples and understand attack mechanisms. Advanced technical deep-dive.",
              skills: ["Reverse Engineering", "Malware Analysis", "Binary Exploitation", "Threat Intelligence"]
            },
          ].map((course, idx) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group h-full"
              >
                <div className="relative bg-gradient-to-br from-white/5 via-white/2 to-transparent border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 h-full flex flex-col backdrop-blur-xl hover:border-white/20">
                  
                  {/* Course Image Container */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Level Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md ${
                          course.level === 'Beginner' ? 'bg-emerald-500/70' :
                          course.level === 'Intermediate' ? 'bg-blue-500/70' :
                          'bg-purple-500/70'
                        }`}
                      >
                        {course.level}
                      </motion.div>
                    </div>

                    {/* Students & Rating - Bottom of Image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm text-white font-semibold">{course.rating}</span>
                        </div>
                      </div>
                      <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gray-200">
                        {course.students}+ Students
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-1">
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-400 font-semibold mb-2">Key Skills:</div>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.slice(0, 3).map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-2.5 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-xs rounded-full font-medium hover:border-cyan-500/60 transition-all cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

                    {/* Course Details Row */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                        <div className="text-gray-400 text-xs mb-1">Duration</div>
                        <div className="text-white font-bold">{course.duration}</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                        <div className="text-gray-400 text-xs mb-1">Access</div>
                        <div className="text-white font-bold">Lifetime</div>
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="mb-6">
                      <div className="text-gray-400 text-xs mb-1">Investment</div>
                      <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {course.price}
                        </div>
                        <div className="text-xs text-gray-400">One-time</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 mt-auto">
                      <motion.button
                        onClick={() => navigate(`/course/${course.title.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`)}
                        whileHover={{ scale: 1.02, x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2.5 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>

                      <motion.button
                        onClick={() => navigate(`/enroll/${course.title.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-2.5 bg-gradient-to-r ${course.color} text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:shadow-cyan-500/20`}
                      >
                        Enroll Now
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Spotlight Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Can't decide? Explore the full course catalog with detailed syllabus and testimonials</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all inline-flex items-center gap-2"
          >
            Browse All Courses
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
