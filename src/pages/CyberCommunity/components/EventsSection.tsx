import { useState } from 'react';
import { events } from '../data';

const typeColors = {
  webinar: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  workshop: 'bg-cyber-500/20 text-cyber-300 border-cyber-500/30',
  ctf: 'bg-red-500/20 text-red-400 border-red-500/30',
  meetup: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
};

const typeIcons = {
  webinar: '🎙️',
  workshop: '🔧',
  ctf: '🏁',
  meetup: '🤝',
};

export default function EventsSection() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  return (
    <section id="events" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-600/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-300 text-xs font-medium mb-4">
            <span>📅</span> Upcoming Events
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Community Events</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Webinars, workshops, CTF competitions, and meetups to level up your skills.
          </p>
        </div>

        {/* Events Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className="animate-slide-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
            >
              <div className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                activeEvent === event.id
                  ? 'bg-cyber-500/10 border-cyber-500/40 shadow-lg shadow-cyber-500/10'
                  : 'bg-slate-900/50 border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-900/70'
              }`}>
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-500/0 via-cyber-500/0 to-cyber-500/0 group-hover:from-cyber-500/5 transition-all duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`px-3 py-1.5 rounded-lg text-sm border ${typeColors[event.type]}`}>
                        {typeIcons[event.type]} {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </div>
                      <span className="text-slate-500 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.attendees} attending
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <svg className="w-4 h-4 text-cyber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <svg className="w-4 h-4 text-cyber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <span className="text-cyber-400">🎤</span> {event.host}
                    </span>
                  </div>

                  {/* Expandable */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeEvent === event.id ? 'max-h-20 mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-cyber-500/20">
                      <button className="px-4 py-2 bg-cyber-600 hover:bg-cyber-500 text-white text-sm font-medium rounded-lg transition-all">
                        Register Now →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Calendar */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 border border-slate-700/50 text-slate-400 hover:text-white rounded-xl transition-all hover:bg-white/5 hover:border-cyber-500/30 font-medium">
            📅 View Full Calendar
          </button>
        </div>
      </div>
    </section>
  );
}
