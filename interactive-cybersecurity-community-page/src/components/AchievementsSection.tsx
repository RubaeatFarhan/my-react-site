import { achievements } from '../data';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyber-600/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-300 text-xs font-medium mb-4">
            <span>🏆</span> Your Progress
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Track your contributions and earn badges as you grow in the community.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.id}
              className="animate-slide-up group"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className={`p-5 rounded-xl border transition-all duration-300 ${
                achievement.earned
                  ? 'bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/30'
                  : 'bg-slate-900/50 border-slate-700/30'
              }`}>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
                    achievement.earned
                      ? 'bg-amber-500/20'
                      : 'bg-slate-800'
                  }`}>
                    {achievement.earned ? achievement.icon : '🔒'}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-base mb-0.5 ${
                      achievement.earned ? 'text-amber-300' : 'text-slate-400'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className="text-slate-500 text-sm">{achievement.description}</p>

                    {achievement.earned && achievement.date && (
                      <div className="mt-2 text-xs text-amber-500/70 flex items-center gap-1">
                        <span>✅</span> Earned on {achievement.date}
                      </div>
                    )}

                    {!achievement.earned && achievement.progress !== undefined && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyber-600 to-cyber-400 rounded-full transition-all duration-1000"
                            style={{ width: `${achievement.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Stats */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-700/30">
            <h3 className="text-white font-semibold text-lg mb-4 text-center">📊 Community Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { value: '3,256', label: 'Resources Shared' },
                { value: '892', label: 'Events Held' },
                { value: '48', label: 'CTF Competitions' },
                { value: '12.4k', label: 'Tutorials Published' },
              ].map((stat) => (
                <div key={stat.label} className="p-3 rounded-lg bg-slate-800/50">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
