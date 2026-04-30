import { useState } from 'react';
import { forumTopics } from '../data';

const categories = ['All', 'Threat Alerts', 'Announcements', 'Guides & Tutorials', 'Help & Support', 'Discussions', 'Industry News', 'Tools & Resources', 'Bug Bounty'];

export default function ForumSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredTopic, setHoveredTopic] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? forumTopics
    : forumTopics.filter(t => t.category === activeCategory);

  return (
    <section id="forum" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-300 text-xs font-medium mb-4">
            <span>💬</span> Community Discussions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Forum Discussions</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Engage with fellow cybersecurity professionals. Share insights, ask questions, and stay updated.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-cyber-600 text-white shadow-lg shadow-cyber-600/25'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Topics List */}
        <div className="space-y-3">
          {filtered.map((topic, idx) => (
            <div
              key={topic.id}
              className="animate-slide-up group"
              style={{ animationDelay: `${idx * 0.05}s` }}
              onMouseEnter={() => setHoveredTopic(topic.id)}
              onMouseLeave={() => setHoveredTopic(null)}
            >
              <div
                className={`relative p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                  hoveredTopic === topic.id
                    ? 'bg-cyber-500/10 border-cyber-500/40 shadow-lg shadow-cyber-500/10'
                    : 'bg-slate-900/50 border-slate-700/30 hover:border-slate-600/50'
                } ${topic.isSticky ? 'border-l-cyber-500 border-l-2' : ''}`}
              >
                <div className="flex items-start gap-4">
                  {/* Author Avatar */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
                    topic.isSticky
                      ? 'bg-cyber-600/20 text-cyber-400'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {topic.authorAvatar}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      {topic.isSticky && (
                        <span className="px-2 py-0.5 bg-cyber-500/20 text-cyber-300 text-xs font-medium rounded">📌 Pinned</span>
                      )}
                      {topic.isHot && (
                        <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-medium rounded">🔥 Hot</span>
                      )}
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-500 text-xs rounded">{topic.category}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyber-300 transition-colors truncate">
                      {topic.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                      <span className="text-cyber-400/80 font-medium">{topic.author}</span>
                      <span>💬 {topic.replies} replies</span>
                      <span>👁️ {topic.views.toLocaleString()} views</span>
                      <span className="hidden sm:inline">{topic.lastActivity}</span>
                    </div>
                  </div>

                  {/* Activity badge */}
                  <div className="hidden sm:flex flex-col items-end shrink-0">
                    <div className="text-xs text-slate-500">Last post</div>
                    <div className="text-sm text-slate-400">{topic.lastActivity}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 border border-slate-700/50 text-slate-400 hover:text-white rounded-xl transition-all hover:bg-white/5 hover:border-cyber-500/30 font-medium">
            View All Topics →
          </button>
        </div>
      </div>
    </section>
  );
}
