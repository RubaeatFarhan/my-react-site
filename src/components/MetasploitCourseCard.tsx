import { motion } from 'framer-motion';
import { Star, Zap } from 'lucide-react';

export const MetasploitCourseCard = ({ onEnroll, onDetails }: { onEnroll?: () => void; onDetails?: () => void }) => {
  const course = {
    title: '🎓 Metasploit Framework',
    subtitle: 'msfconsole - Full Course Structure',
    description: 'Master Metasploit Framework from basics to advanced exploitation. Complete hands-on course with ethical pentesting focus.',
    thumbnail: '/images/metasploit-course-thumbnail.png',
    icon: '/images/metasploit-course-icon.png',
    price: 2499,
    duration: '12 Weeks',
    students: 421,
    rating: 4.85,
    level: 'Intermediate to Advanced'
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

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <img
                  src={course.icon}
                  alt="Metasploit course icon"
                  className="w-16 h-16 rounded-2xl border border-cyan-500/30 bg-slate-950 object-cover"
                />
                <div>
                  <p className="text-sm uppercase tracking-[1px] text-cyan-300 font-semibold">Metasploit Framework</p>
                  <p className="text-sm text-gray-400">Safe, lab-based penetration testing training</p>
                </div>
              </div>

              <img
                src={course.thumbnail}
                alt="Metasploit course thumbnail"
                className="hidden lg:block w-48 h-28 rounded-3xl object-cover border border-white/10 shadow-xl"
              />
            </motion.div>
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
            className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between"
          >
            <div>
              <div className="text-gray-400 text-sm mb-1">Investment</div>
              <div className="text-3xl font-bold">৳{course.price.toLocaleString()}</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <motion.button
                onClick={onDetails}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none px-8 py-3 border border-cyan-500/30 text-cyan-300 bg-slate-900 hover:bg-slate-800 rounded-xl transition-all"
              >
                View Details
              </motion.button>
              <motion.button
                onClick={onEnroll}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Enroll Now</span>
                <Zap className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

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
