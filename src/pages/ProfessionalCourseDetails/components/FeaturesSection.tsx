import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { key: 'syllabus', title: 'Course Syllabus', emoji: '📘', desc: 'Detailed, module-wise syllabus with learning outcomes.' },
  { key: 'routine', title: 'Course Routine', emoji: '🗓️', desc: 'Weekly class timetable and milestone schedule.' },
  { key: 'assignments', title: 'Assignment Handbook', emoji: '📝', desc: 'Guides, rubrics and sample answers for all assignments.' },
  { key: 'live', title: 'Live Classes', emoji: '🎥', desc: 'Interactive live sessions with Q&A and doubt-solving.' , badge: 'Live'},
  { key: 'resources', title: 'Resources', emoji: '📚', desc: 'Slides, cheatsheets, tools and external references.' },
  { key: 'archive', title: 'Previous Years Archive', emoji: '🗃️', desc: 'Recorded past classes and archived materials.' },
  { key: 'recorded', title: 'New Recorded Classes', emoji: '🔴', desc: 'Freshly recorded lessons from recent batches.' , badge: 'New'},
];

export default function FeaturesSection({ variant = 'details' }: { variant?: 'details' | 'order' }) {
  const isOrder = variant === 'order';

  return (
    <section className={isOrder ? 'py-12 lg:py-16 bg-transparent' : 'py-16 lg:py-20 bg-white'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className={isOrder ? 'text-3xl font-extrabold text-white' : 'text-3xl font-extrabold text-slate-900'}>Features</h2>
          <p className={isOrder ? 'mt-2 text-slate-300' : 'mt-2 text-slate-500'}>Everything you get when you enroll — designed to accelerate your learning.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className={isOrder ? 'relative rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-sm hover:shadow-xl transform transition-transform' : 'relative rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm hover:shadow-xl transform transition-transform'}
            >
              <div className="flex items-start gap-4">
                <div className={isOrder ? 'flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white text-2xl shadow-md flex-shrink-0' : 'flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white text-2xl shadow-md flex-shrink-0'}>
                  <span>{f.emoji}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className={isOrder ? 'text-lg font-semibold text-white' : 'text-lg font-semibold text-slate-900'}>{f.title}</h3>
                    {f.badge && (
                      <span className={isOrder ? 'ml-auto inline-flex items-center rounded-full bg-emerald-700/15 text-emerald-200 px-2 py-0.5 text-xs font-semibold' : 'ml-auto inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs font-semibold'}>
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <p className={isOrder ? 'mt-2 text-sm text-slate-300' : 'mt-2 text-sm text-slate-500'}>{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
