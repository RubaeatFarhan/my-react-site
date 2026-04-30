import { stats } from '../data';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber-600/20 via-transparent to-transparent" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-500/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-500/50 to-transparent animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-300 text-xs font-medium mb-8 animate-scale-in">
            <span className="w-2 h-2 rounded-full bg-neon-500 animate-data-pulse" />
            <span className="tracking-wider uppercase">2,847 Active Members Online</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            United in{' '}
            <span className="bg-gradient-to-r from-cyber-400 via-cyber-300 to-neon-500 bg-clip-text text-transparent animate-gradient-shift">
              Cyber Defense
            </span>
            <br />
            <span className="text-slate-400">Together We Secure</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the world's most active cybersecurity community. Share knowledge, 
            collaborate on threats, and stay ahead of attackers — united by a common mission.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group relative px-8 py-3.5 bg-cyber-600 hover:bg-cyber-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyber-600/30 hover:shadow-cyber-500/50 hover:scale-105 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Join the Community
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-cyber-500 to-cyber-400 transition-transform duration-500" />
            </button>
            <button className="px-8 py-3.5 border border-slate-600/50 hover:border-cyber-500/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 hover:shadow-lg hover:shadow-cyber-500/10 hover:scale-105 active:scale-95">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Intro
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: stats.totalMembers.toLocaleString(), label: 'Members', icon: '👥' },
              { value: stats.totalPosts.toLocaleString(), label: 'Posts', icon: '💬' },
              { value: stats.totalTopics.toLocaleString(), label: 'Topics', icon: '📋' },
              { value: stats.resourcesShared.toLocaleString(), label: 'Resources', icon: '📦' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="animate-slide-up px-4 py-4 rounded-xl bg-white/[0.03] border border-slate-700/30 backdrop-blur-sm"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
