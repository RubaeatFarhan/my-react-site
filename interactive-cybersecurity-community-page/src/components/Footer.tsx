export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cyber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs font-mono">CS</span>
              </div>
              <span className="text-white font-bold">CyberSec</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering cybersecurity professionals and enthusiasts worldwide through community-driven knowledge sharing.
            </p>
            <div className="flex gap-3 mt-4">
              {['🐦', '💼', '📺', '💬'].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-lg bg-slate-800/50 hover:bg-cyber-600/20 hover:text-cyber-300 border border-slate-700/30 flex items-center justify-center text-sm transition-all"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Community</h4>
            <ul className="space-y-2.5">
              {['Forum', 'Members', 'Events', 'Resources', 'Achievements'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-500 hover:text-cyber-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2.5">
              {['Help Center', 'Contact Us', 'Report Issue', 'Bug Bounty', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-cyber-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Terms of Service', 'Code of Conduct', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-cyber-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} CyberSec Community. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-data-pulse" />
            All systems secure
            <span className="mx-2">•</span>
            Made with 🛡️ by the community
          </div>
        </div>
      </div>
    </footer>
  );
}
