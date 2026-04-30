import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesHover, setIsCoursesHover] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '#' },
    { label: 'About', path: '/about' },
    { label: 'Community', path: '/community' },
  ];

  const subNavLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Journey', href: '#journey' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const courseLinks = [
    { name: 'Complete Ethical Hacking Course', path: '/professional-course', description: 'Advanced msfconsole training', image: '/images/CCEH101.png' },
    { name: 'Bug Bounty Hunting', path: '#', description: 'Real-world vulnerability hunting', image: '/images/course2.jpg', comingSoon: true },
    { name: 'Malware Analysis', path: '#', description: 'Reverse engineering & threat intel', image: '/images/course3.jpg', comingSoon: true },
    { name: 'Professional Red Team Course', path: '#', description: 'Full Red/Purple Team package', image: '/images/course4.jpg', comingSoon: true },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-xl shadow-black/20"
      onMouseLeave={() => setIsCoursesHover(false)}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
          <img src="/images/logo.jpg" alt="Cyber Cracker Academy" className="w-10 h-10 rounded-full object-cover border border-white/10 shadow-lg shadow-black/30" />
          <div>
            <div className="font-bold text-2xl tracking-tighter">CYBER CRACKER</div>
            <div className="text-[10px] text-emerald-400 -mt-1 tracking-[2px]">ACADEMY</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isCoursesItem = link.label === 'Courses';
            return (
              <motion.div
                key={link.label}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative"
                onMouseEnter={() => isCoursesItem && setIsCoursesHover(true)}
                onClick={() => isCoursesItem && setIsCoursesHover(!isCoursesHover)}
              >
                {link.path === '#' ? (
                  <button className="inline-flex items-center text-white transition-colors duration-300 hover:text-emerald-400 font-poppins tracking-[0.04em] font-medium cursor-pointer">
                    {link.label}
                  </button>
                ) : (
                  <NavLink to={link.path} className="inline-flex items-center text-white transition-colors duration-300 hover:text-emerald-400 font-poppins tracking-[0.04em] font-medium">
                    {({ isActive }) => (
                      <>
                        <span className={isActive ? 'text-emerald-400' : ''}>{link.label}</span>
                        <motion.span
                          layout
                          initial={false}
                          animate={{ scaleX: isActive ? 1 : 0 }}
                          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                          className="absolute left-0 right-0 bottom-[-4px] h-[2px] origin-left bg-emerald-400 rounded-full"
                        />
                      </>
                    )}
                  </NavLink>
                )}
              </motion.div>
            );
          })}
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
        <motion.button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </motion.button>
      </div>

      {/* Sub-Navigation Row (Desktop - Home Page Only) */}
      <AnimatePresence>
        {isHomePage && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="hidden md:block border-t border-white/5 bg-black/40 backdrop-blur-md overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-center gap-8">
              {subNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] font-bold uppercase tracking-[2px] text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-Navigation Bar (Desktop) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isCoursesHover ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="hidden md:block overflow-hidden bg-white border-t border-slate-200 shadow-2xl"
        onMouseEnter={() => setIsCoursesHover(true)}
      >
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-4 gap-8">
            {courseLinks.map((course) => (
              <Link
                key={course.name}
                to={course.comingSoon ? '#' : course.path}
                className={`group flex flex-col gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 ${
                  course.comingSoon 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:border-emerald-500/30 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5'
                }`}
                onClick={(e) => {
                  if (course.comingSoon) {
                    e.preventDefault();
                  } else {
                    setIsCoursesHover(false);
                  }
                }}
              >
                <div className="aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 relative">
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className={`w-full h-full object-cover transition-transform duration-500 ${!course.comingSoon && 'group-hover:scale-110'}`}
                  />
                  {course.comingSoon && (
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] flex items-center justify-center">
                      <span className="px-3 py-1 bg-white/90 text-slate-900 text-[10px] font-bold rounded-full tracking-wider uppercase">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <div className={`text-base font-bold text-slate-900 transition-colors ${!course.comingSoon && 'group-hover:text-emerald-600'}`}>
                    {course.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{course.description}</div>
                  {!course.comingSoon ? (
                    <div className="mt-4 flex items-center text-[10px] text-emerald-600 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      EXPLORE NOW <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </div>
                  ) : (
                    <div className="mt-4 flex items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      STAY TUNED
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4"
        >
          <div className="space-y-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.label === 'Courses' ? (
                  <div className="space-y-3">
                    <button 
                      onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                      className="flex items-center justify-between w-full text-sm text-white font-medium"
                    >
                      {link.label}
                      <motion.span animate={{ rotate: isMobileCoursesOpen ? 180 : 0 }}>▼</motion.span>
                    </button>
                    {isMobileCoursesOpen && (
                      <div className="pl-4 space-y-2 border-l border-white/10 ml-1">
                        {courseLinks.map((course) => (
                          <Link
                            key={course.name}
                            to={course.comingSoon ? '#' : course.path}
                            className={`block text-xs py-1 transition-colors ${
                              course.comingSoon 
                                ? 'text-gray-600 cursor-not-allowed' 
                                : 'text-gray-400 hover:text-emerald-400'
                            }`}
                            onClick={(e) => {
                              if (course.comingSoon) {
                                e.preventDefault();
                              } else {
                                setIsOpen(false);
                                setIsMobileCoursesOpen(false);
                              }
                            }}
                          >
                            {course.name} {course.comingSoon && '(Soon)'}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="block text-sm text-white transition-colors duration-300 hover:text-emerald-400 font-poppins tracking-[0.04em] font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
