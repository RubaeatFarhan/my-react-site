import { motion } from 'framer-motion';
import { Shield, Award, Zap, Users, ArrowRight } from 'lucide-react';

export const Courses = () => {
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

          {/* Bug Bounty Course Card */}
          <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
            {/* Main Featured Course - Bug Bounty */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.01 }}
              className="lg:col-span-2 group bg-gradient-to-br from-amber-900/30 to-zinc-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/20 hover:shadow-amber-500/20 transition-all duration-500"
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
                      onClick={() => alert('Redirecting to course details...')}
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
                      onClick={() => alert('Redirecting to enrollment...')}
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

            {/* Side Cards - Quick Stats */}
            <div className="space-y-6 h-full">
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
                whileInView={{ opacity: 1, x: 0 }}
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

      {/* All Courses Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">All Available Courses</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore all our cybersecurity courses and find the perfect program for your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "CCEH 101", level: "Beginner", duration: "4 Months", price: "৳2,999" },
            { title: "CCEH 201", level: "Advanced", duration: "12 Weeks", price: "৳2,999" },
            { title: "CCEH 301", level: "Professional", duration: "10 Weeks", price: "৳1,999" },
            { title: "CCSE 101", level: "Beginner", duration: "8 Weeks", price: "৳2,699" },
            { title: "CCSE 201", level: "Intermediate", duration: "10 Weeks", price: "৳2,799" },
            { title: "CCSE 301", level: "Professional", duration: "12 Weeks", price: "৳2,999" },
          ].map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">{course.level}</span>
                <span className="text-xs text-gray-500">{course.duration}</span>
              </div>
              <p className="text-2xl font-bold text-emerald-400 mb-4">{course.price}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all"
              >
                View Course
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
