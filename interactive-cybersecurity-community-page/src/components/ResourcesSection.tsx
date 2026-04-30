import { useState } from 'react';
import { resources } from '../data';

const typeIcons: Record<string, string> = {
  guide: '📖',
  tool: '🛠️',
  paper: '📄',
  code: '💻',
};

const typeColors: Record<string, string> = {
  guide: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
  tool: 'from-green-500/20 to-green-600/10 border-green-500/30',
  paper: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
  code: 'from-amber-500/20 to-amber-600/10 border-amber-500/30',
};

const difficultyColors = {
  beginner: 'bg-emerald-500/20 text-emerald-400',
  intermediate: 'bg-amber-500/20 text-amber-400',
  advanced: 'bg-red-500/20 text-red-400',
};

export default function ResourcesSection() {
  const [activeResource, setActiveResource] = useState<number | null>(null);

  return (
    <section id="resources" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-300 text-xs font-medium mb-4">
            <span>📦</span> Community Resources
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Tools & Resources</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Curated guides, tools, research papers, and code shared by the community.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((resource, idx) => (
            <div
              key={resource.id}
              className="animate-slide-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setActiveResource(resource.id)}
              onMouseLeave={() => setActiveResource(null)}
            >
              <div className={`h-full p-5 rounded-xl border bg-gradient-to-b transition-all duration-300 ${
                typeColors[resource.type]
              } ${
                activeResource === resource.id
                  ? 'shadow-lg shadow-cyber-500/10 translate-y-[-4px]'
                  : 'hover:shadow-md hover:shadow-cyber-500/5'
              }`}>
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{typeIcons[resource.type]}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${difficultyColors[resource.difficulty]}`}>
                    {resource.difficulty}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-cyber-300 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {resource.description}
                </p>

                {/* Meta */}
                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <span>👤</span>
                    <span>{resource.author}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>⬇️ {resource.downloads.toLocaleString()} downloads</span>
                    <span>⭐ {resource.rating}</span>
                  </div>
                </div>

                {/* Download button */}
                <button className="w-full mt-4 px-3 py-2 bg-cyber-600/80 hover:bg-cyber-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-cyber-600/25 active:scale-95">
                  Download →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 border border-slate-700/50 text-slate-400 hover:text-white rounded-xl transition-all hover:bg-white/5 hover:border-cyber-500/30 font-medium">
            📚 Browse All Resources
          </button>
        </div>
      </div>
    </section>
  );
}
