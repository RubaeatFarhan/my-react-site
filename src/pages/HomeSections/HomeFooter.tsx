import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Programs: [
    'CompTIA Security+',
    'Certified Ethical Hacker',
    'CISSP Certification',
    'SOC Analyst Training',
    'Cloud Security',
    'Malware Analysis',
  ],
  Company: [
    'About Us',
    'Our Team',
    'Careers',
    'Blog',
    'Press Kit',
    'Partners',
  ],
  Support: [
    'Help Center',
    'Contact Us',
    'Student Portal',
    'Refund Policy',
    'Terms of Service',
    'Privacy Policy',
  ],
  Enterprise: [
    'Corporate Training',
    'Team Packages',
    'Custom Programs',
    'Consulting',
    'Volume Licensing',
    'Case Studies',
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-cyber-800/50 border-t border-cyber-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 grid lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <Shield className="w-7 h-7 text-neon-green" />
              <span className="text-xl font-bold">
                <span className="text-white">Cyber</span>
                <span className="text-neon-green">Cracker</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Bangladesh's leading cybersecurity training academy, now serving students globally. Building the next generation of cyber defenders since 2018.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@cybercracker.academy" className="flex items-center gap-3 text-gray-400 hover:text-neon-green transition-colors text-sm">
                <Mail className="w-4 h-4" /> info@cybercracker.academy
              </a>
              <a href="tel:+8801700000000" className="flex items-center gap-3 text-gray-400 hover:text-neon-green transition-colors text-sm">
                <Phone className="w-4 h-4" /> +880 1700-000000
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" /> Gulshan-2, Dhaka 1212, Bangladesh
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-neon-green transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-cyber-600/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Subscribe to our newsletter</h4>
              <p className="text-gray-400 text-sm">Get the latest cybersecurity insights and course updates.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-cyber-700/50 border border-cyber-600/30 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-neon-green/50 flex-1 sm:w-64"
              />
              <button className="px-6 py-3 bg-neon-green text-cyber-900 font-semibold text-sm rounded-xl hover:bg-neon-green/90 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-cyber-600/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CyberCracker Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Facebook', 'YouTube', 'Telegram', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-gray-500 hover:text-neon-green transition-colors text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
