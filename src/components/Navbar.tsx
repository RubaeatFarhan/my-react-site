import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Programs', path: '/' },
    { label: 'Courses', path: '/courses', badge: '🔥 Trending' },
    { label: 'Live Classes', path: '/#live' },
    { label: 'About', path: '/about' },
    { label: 'Community', path: '/community' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/images/logo.jpg" alt="Cyber Cracker Academy" className="w-10 h-10 rounded-full object-cover border border-white/10 shadow-lg shadow-black/30" />
          <div>
            <div className="font-bold text-2xl tracking-tighter">CYBER CRACKER</div>
            <div className="text-[10px] text-emerald-400 -mt-1 tracking-[2px]">ACADEMY</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <div key={link.path} className="flex items-center gap-2 group">
              {link.path.startsWith('/#') ? (
                <a href={link.path} className="hover:text-emerald-400 transition-colors">
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-colors ${isActive ? 'text-emerald-400' : 'hover:text-emerald-400'}`
                  }
                >
                  {link.label}
                </NavLink>
              )}
              {link.badge && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full font-semibold group-hover:from-amber-600 group-hover:to-orange-600 transition-all"
                >
                  {link.badge}
                </motion.span>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex px-5 py-2 text-sm border border-white/30 hover:border-white/70 rounded-full transition-colors items-center gap-2"
          >
            <Users className="w-4 h-4" /> Consult
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all active:scale-95"
          >
            START LEARNING <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4"
        >
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm hover:text-emerald-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {link.badge && <span className="text-xs ml-2">{link.badge}</span>}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
