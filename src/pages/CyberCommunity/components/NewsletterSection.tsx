import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-600/10 via-transparent to-cyber-600/10" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-slide-up">
          {/* Shield icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyber-500 to-cyber-600 p-[3px]">
            <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center">
              <svg className="w-8 h-8 text-cyber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay <span className="bg-gradient-to-r from-cyber-400 to-cyber-300 bg-clip-text text-transparent">Protected</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Get weekly cybersecurity news, community highlights, and exclusive resources delivered to your inbox.
          </p>

          {subscribed ? (
            <div className="px-6 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 inline-flex items-center gap-2 animate-scale-in">
              <span>✅</span> Successfully subscribed! Check your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyber-500/50 focus:ring-1 focus:ring-cyber-500/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-cyber-600 hover:bg-cyber-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-cyber-600/25 hover:shadow-cyber-500/40 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-slate-600 mt-4">
            🔒 No spam. Unsubscribe anytime. We protect your data.
          </p>
        </div>
      </div>
    </section>
  );
}
