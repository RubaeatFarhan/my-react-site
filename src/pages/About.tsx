import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden pt-24">
      {/* ABOUT Section */}
      <section id="about" className="bg-zinc-950 py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            <div className="grid gap-16 xl:grid-cols-[1.2fr_0.8fr] items-start">
              <div>
                <div className="inline text-xs uppercase tracking-[3px] text-emerald-400 border border-emerald-500/20 px-4 py-1 rounded-full">ABOUT CYBER CRACKER</div>
                <h2 className="text-5xl font-semibold tracking-tighter mt-6">Who We Are</h2>
                <p className="mt-8 text-lg text-gray-300 max-w-3xl leading-9">
                  Cyber Cracker Academy is a Bangladesh-based cybersecurity learning platform dedicated to building skilled and ethical cybersecurity professionals.
                </p>
                <p className="mt-8 text-lg text-gray-400 max-w-3xl leading-9">
                  We focus on real-world skills, practical learning, and career development, so students can confidently step into the cybersecurity field.
                </p>

                <div className="mt-14 grid gap-8 sm:grid-cols-2">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 border border-white/10 rounded-3xl p-10 shadow-xl shadow-black/20 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-5">Our Mission</div>
                    <p className="text-gray-300 leading-8">
                      Our mission is to help Bangladeshi students and beginners gain practical cybersecurity knowledge that actually works in real-life situations.
                      We aim to reduce the gap between theory-based education and real industry skills, and create a new generation of ethical hackers and security experts.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 border border-white/10 rounded-3xl p-10 shadow-xl shadow-black/20 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-5">Why We Started</div>
                    <p className="text-gray-300 leading-8">
                      In Bangladesh, many students learn cybersecurity only from theory or scattered online content. But when it comes to real-world practice, they struggle.
                      That's why we created Cyber Cracker Academy — a platform where you learn by doing, practicing, and solving real problems.
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="grid gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-black/20"
                >
                  <div className="grid gap-8 lg:grid-cols-[1fr_1fr] items-center p-10">
                    <div>
                      <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Our Programs</div>
                      <div className="text-white text-2xl font-semibold mb-4">Two core programs designed for real skills.</div>
                      <div className="space-y-5 text-gray-300">
                        <div>
                          <div className="font-semibold">CCEH (Cyber Cracker Ethical Hacking)</div>
                          <div className="text-sm text-gray-400 mt-2">Learn ethical hacking from beginner to advanced level with practical labs and real attack scenarios.</div>
                        </div>
                        <div>
                          <div className="font-semibold">CCSE (Cyber Cracker Security Expert)</div>
                          <div className="text-sm text-gray-400 mt-2">Build strong defensive skills, including system security, monitoring, and protection techniques.</div>
                        </div>
                      </div>
                    </div>
                    <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-800 shadow-2xl shadow-black/30">
                      <img src="/images/instructor.jpg" alt="Cybersecurity team" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-black/20"
                >
                  <div className="grid gap-8 lg:grid-cols-2 items-end p-10">
                    <div>
                      <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Trusted by learners</div>
                      <p className="text-gray-300 leading-8 mb-8">
                        Our community and program design are built around trust, practical outcomes, and student-first support.
                      </p>
                      <button
                        onClick={() => window.open("https://www.facebook.com/CyberCrackerAcademy", "_blank")}
                        className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 text-black font-semibold shadow-lg shadow-emerald-500/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
                      >
                        Join the Community
                      </button>
                    </div>
                    <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-800 shadow-2xl shadow-black/30">
                      <img src="/images/hero.jpg" alt="Learning community" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-10 shadow-xl shadow-black/20"
              >
                <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Our Team</div>
                <p className="text-gray-300 leading-8 mb-8">
                  Our team is a blend of ethical hackers, cybersecurity engineers, and real practitioners who keep the content fresh and career-focused.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-800 shadow-inner shadow-black/20">
                    <img src="/images/instructor.jpg" alt="Team member" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-800 shadow-inner shadow-black/20">
                    <img src="/images/course2.jpg" alt="Team collaboration" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-10 shadow-xl shadow-black/20"
              >
                <div className="text-emerald-400 uppercase text-xs tracking-[2px] font-semibold mb-4">Community & Presence</div>
                <p className="text-gray-300 leading-8 mb-8">
                  We build trust with students across Bangladesh through tutorials, live sessions, and support that helps learners stay current.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-800 shadow-inner shadow-black/20">
                    <img src="/images/course1.jpg" alt="Community workshops" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-800 shadow-inner shadow-black/20">
                    <img src="/images/course3.jpg" alt="Student gathering" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Why Trust Us", items: ["✔ Focus on practical, real-world skills", "✔ Programs designed for Bangladeshi students", "✔ Honest and growing community", "✔ Continuous learning support"] },
              { title: "Learning Path", items: ["✔ Beginner-friendly to advanced roadmap", "✔ Step-by-step learning path", "✔ Hands-on practice", "✔ Real-world use cases"] },
              { title: "Student First", desc: "We continuously improve our content to ensure students get updated and relevant knowledge." },
              { title: "Start Your Journey", desc: "If you are serious about learning and building a career, Cyber Cracker Academy is here to guide you step by step." }
            ].map((box, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`border rounded-3xl p-10 shadow-xl shadow-black/20 ${
                  idx === 3 ? 'bg-emerald-500/10 border-emerald-400/10' : 'bg-zinc-900 border-white/10'
                }`}
              >
                <div className={`${idx === 3 ? 'text-white text-xl' : 'text-emerald-400 uppercase text-xs tracking-[2px]'} font-semibold mb-4`}>
                  {box.title}
                </div>
                {box.items ? (
                  <ul className="space-y-3 text-gray-300 text-sm leading-7">
                    {box.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-8">{box.desc}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
