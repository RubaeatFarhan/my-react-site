import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, BookOpen, Award, Zap, Heart } from 'lucide-react';

export const Community = () => {
  const communityBenefits = [
    {
      icon: Users,
      title: 'Connect & Network',
      description: 'Meet fellow cybersecurity enthusiasts, share knowledge, and build lasting professional relationships.',
    },
    {
      icon: MessageCircle,
      title: 'Ask & Learn',
      description: 'Get answers from experienced members, share doubts, and collaborate on projects and challenges.',
    },
    {
      icon: BookOpen,
      title: 'Exclusive Resources',
      description: 'Access community-created study materials, practice labs, and learning guides shared by members.',
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Earn badges and recognition for your contributions and achievements within the community.',
    },
    {
      icon: Zap,
      title: 'Real-Time Support',
      description: 'Get quick help from instructors and community leaders during your learning journey.',
    },
    {
      icon: Heart,
      title: 'Motivating Environment',
      description: 'Stay motivated with regular challenges, competitions, and success stories from fellow learners.',
    },
  ];

  const stats = [
    { number: '5000+', label: 'Active Members' },
    { number: '1000+', label: 'Daily Interactions' },
    { number: '500+', label: 'Resources Shared' },
    { number: '24/7', label: 'Community Support' },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden pt-24">
      {/* COMMUNITY Hero Section */}
      <section className="bg-gradient-to-b from-zinc-950 to-black py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center justify-center">
              <span className="px-4 py-1 rounded-full text-xs uppercase tracking-[3px] text-emerald-400 border border-emerald-500/20">
                OUR COMMUNITY
              </span>
            </div>
            <h1 className="text-6xl font-bold tracking-tighter">
              Join Our Growing <span className="text-emerald-400">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-9">
              Be part of a vibrant network of cybersecurity learners, professionals, and mentors dedicated to continuous learning and growth.
            </p>
            <button
              onClick={() => window.open("https://www.facebook.com/CyberCrackerAcademy", "_blank")}
              className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 text-black font-semibold shadow-lg shadow-emerald-500/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Join Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="px-4 py-1 rounded-full text-xs uppercase tracking-[3px] text-emerald-400 border border-emerald-500/20">
              WHY JOIN US
            </span>
            <h2 className="text-5xl font-semibold tracking-tighter mt-6 mb-6">
              What You'll Get
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our community offers multiple ways to learn, connect, and grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityBenefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-xl shadow-black/20 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="mb-6 inline-flex p-3 bg-emerald-400/10 rounded-2xl group-hover:bg-emerald-400/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-8">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-32 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16 xl:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="px-4 py-1 rounded-full text-xs uppercase tracking-[3px] text-emerald-400 border border-emerald-500/20">
                STAY CONNECTED
              </span>
              <h2 className="text-5xl font-semibold tracking-tighter mt-6 mb-8">
                Connect With Us
              </h2>
              <p className="text-lg text-gray-300 leading-8 mb-8">
                Join our active community on multiple platforms. Ask questions, share resources, and stay updated with the latest in cybersecurity.
              </p>
              <div className="space-y-4">
                <a
                  href="https://www.facebook.com/CyberCrackerAcademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-zinc-900 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <span className="text-2xl">f</span>
                  </div>
                  <div>
                    <div className="font-semibold">Facebook Community</div>
                    <div className="text-sm text-gray-400">Daily updates & discussions</div>
                  </div>
                </a>
                <a
                  href="https://discord.gg/cybercracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-zinc-900 border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold">Discord Server</div>
                    <div className="text-sm text-gray-400">Real-time chat & support</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video rounded-3xl overflow-hidden bg-zinc-800 shadow-2xl shadow-black/30"
            >
              <img src="/images/hero.jpg" alt="Community" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-zinc-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold tracking-tighter mb-8">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Start your journey with thousands of cybersecurity learners and professionals who are making an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => window.open("https://www.facebook.com/CyberCrackerAcademy", "_blank")}
              className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 text-black font-semibold shadow-lg shadow-emerald-500/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Join Community
            </button>
            <Link
              to="/course/bug-bounty"
              className="inline-flex items-center justify-center rounded-3xl border border-emerald-400/50 px-8 py-4 text-emerald-400 font-semibold hover:bg-emerald-400/10 transition-all"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
