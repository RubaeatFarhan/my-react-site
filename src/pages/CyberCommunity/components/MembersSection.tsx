import { useState } from 'react';
import { communityMembers } from '../data';

export default function MembersSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'online' | 'vip' | 'admin'>('all');
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const filtered = activeTab === 'all'
    ? communityMembers
    : activeTab === 'online'
    ? communityMembers.filter(m => m.status === 'online')
    : activeTab === 'vip'
    ? communityMembers.filter(m => m.roleBadge === 'vip' || m.roleBadge === 'admin' || m.roleBadge === 'mod')
    : communityMembers.filter(m => m.roleBadge === 'admin' || m.roleBadge === 'mod');

  const badgeColors = {
    admin: 'bg-red-500/20 text-red-400 border-red-500/30',
    mod: 'bg-cyber-500/20 text-cyber-300 border-cyber-500/30',
    vip: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    member: 'bg-slate-700/50 text-slate-400 border-slate-600/30',
  };

  const statusColors = {
    online: 'bg-emerald-500',
    away: 'bg-amber-500',
    offline: 'bg-slate-600',
  };

  return (
    <section id="members" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-300 text-xs font-medium mb-4">
            <span>👥</span> Meet the Community
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Active Members</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Connect with cybersecurity experts, researchers, and enthusiasts from around the globe.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { key: 'all', label: 'All Members', icon: '👥' },
            { key: 'online', label: 'Online Now', icon: '🟢' },
            { key: 'vip', label: 'Top Contributors', icon: '⭐' },
            { key: 'admin', label: 'Staff Team', icon: '🛡️' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-cyber-600 text-white shadow-lg shadow-cyber-600/25'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/30'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((member, idx) => (
            <div
              key={member.id}
              className="animate-slide-up group"
              style={{ animationDelay: `${idx * 0.08}s` }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className={`relative p-5 rounded-xl border transition-all duration-300 ${
                hoveredMember === member.id
                  ? 'bg-cyber-500/10 border-cyber-500/40 shadow-lg shadow-cyber-500/10 translate-y-[-4px]'
                  : 'bg-slate-900/50 border-slate-700/30 hover:border-slate-600/50'
              }`}>
                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${statusColors[member.status]} ${member.status === 'online' ? 'animate-data-pulse' : ''}`} />
                  <span className="text-xs text-slate-500 capitalize">{member.status}</span>
                </div>

                {/* Avatar */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyber-500 to-cyber-600 p-[2px] mb-4">
                  <div className="w-full h-full rounded-[10px] bg-slate-900 flex items-center justify-center text-lg font-bold text-cyber-400">
                    {member.avatar}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-white font-semibold text-base mb-0.5">{member.name}</h3>
                <p className="text-slate-500 text-sm mb-3">{member.role}</p>

                {/* Badge */}
                <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-medium border ${badgeColors[member.roleBadge]}`}>
                  {member.roleBadge === 'admin' ? '🛡️ Admin' : member.roleBadge === 'mod' ? '⚔️ Mod' : member.roleBadge === 'vip' ? '⭐ VIP' : 'Member'}
                </span>

                {/* Stats */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-700/30 text-sm text-slate-500">
                  <span>📝 {member.posts.toLocaleString()}</span>
                  <span>⭐ {member.reputation.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 border border-slate-700/50 text-slate-400 hover:text-white rounded-xl transition-all hover:bg-white/5 hover:border-cyber-500/30 font-medium">
            View All 28,472 Members →
          </button>
        </div>
      </div>
    </section>
  );
}
