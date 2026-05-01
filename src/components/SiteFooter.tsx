import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const footerSections = [
  {
    title: "Navigate",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Community", to: "/community" },
      { label: "Ethical Hacking Course", to: "/professional-course" },
    ],
  },
  {
    title: "Course Pages",
    links: [
      { label: "Course Overview", to: "/professional-course#overview" },
      { label: "Curriculum", to: "/professional-course#curriculum" },
      { label: "Instructor", to: "/professional-course#instructor" },
      { label: "Reviews", to: "/professional-course#reviews" },
      { label: "FAQ", to: "/professional-course#faq" },
      { label: "Order Page", to: "/professional-course/order" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Terms of Service", to: "#" },
      { label: "Privacy Policy", to: "#" },
      { label: "Refund Policy", to: "#" },
      { label: "Support", to: "#" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-cyber-800/50 border-t border-cyber-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <Shield className="w-7 h-7 text-neon-green" />
              <span className="text-xl font-bold">
                <span className="text-white">Cyber</span>
                <span className="text-neon-green">Cracker</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Bangladesh&apos;s leading cybersecurity training academy, now serving students globally.
            </p>
            <div className="space-y-3">
              <a href="mailto:cybercrackermain@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-neon-green transition-colors text-sm">
                <Mail className="w-4 h-4" /> cybercrackermain@gmail.com
              </a>
              <a href="tel:+8801909040252" className="flex items-center gap-3 text-gray-400 hover:text-neon-green transition-colors text-sm">
                <Phone className="w-4 h-4" /> +880 1909-040252
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" /> Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith("/") ? (
                      <Link to={link.to} className="text-gray-400 hover:text-neon-green transition-colors text-sm">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.to} className="text-gray-400 hover:text-neon-green transition-colors text-sm">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-cyber-600/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CyberCracker Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://youtube.com/@cybercracker18?si=6aS33_vLCsJiJVEg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/share/g/1AaYw4HRQn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/cybercracker123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
