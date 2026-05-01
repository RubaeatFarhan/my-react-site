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
          <div className="flex items-center gap-6">
            {["Facebook", "YouTube", "Telegram", "LinkedIn"].map((social) => (
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
