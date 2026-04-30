import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCoursesHover, setIsCoursesHover] = useState(false);

  const mainNavLinks = [
    { label: "Programs", path: "/" },
    { label: "Courses", path: "#" },
    { label: "About", path: "/about" },
    { label: "Community", path: "/community" },
  ];

  const courseLinks = [
    { name: "Ethical Hacking", path: "/course/metasploit-framework", description: "Advanced msfconsole training", image: "/images/CCEH101.png" },
    { name: "Bug Bounty Hunting", path: "/course/bug-bounty", description: "Real-world vulnerability hunting", image: "/images/course2.jpg" },
    { name: "Malware Analysis", path: "/course/metasploit-framework", description: "Reverse engineering & threat intel", image: "/images/course3.jpg" },
    { name: "Professional Course", path: "/professional-course", description: "Full Red/Purple Team package", image: "/images/course4.jpg" },
  ];

  const courseNavLinks = [
    { label: "Overview", anchor: "/professional-course#overview" },
    { label: "Curriculum", anchor: "/professional-course#curriculum" },
    { label: "Instructor", anchor: "/professional-course#instructor" },
    { label: "Reviews", anchor: "/professional-course#reviews" },
    { label: "FAQ", anchor: "/professional-course#faq" },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 shadow-lg shadow-black/20"
      onMouseLeave={() => setIsCoursesHover(false)}
    >

      {/* ── TOP BAR: Cyber Cracker Academy Main Navigation ── */}
      <div className="bg-black/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <img
              src="/images/logo.jpg"
              alt="Cyber Cracker Academy"
              className="w-9 h-9 rounded-full object-cover border border-white/10 shadow-md"
            />
            <div>
              <div className="font-bold text-white text-lg tracking-tighter leading-none">CYBER CRACKER</div>
              <div className="text-[9px] text-emerald-400 tracking-[2px]">ACADEMY</div>
            </div>
          </Link>

          {/* Desktop Main Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {mainNavLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.label === "Courses" && setIsCoursesHover(true)}
              >
                {link.path === "#" ? (
                  <button className="text-white hover:text-emerald-400 transition-colors duration-200 tracking-wide">
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="text-white hover:text-emerald-400 transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-1.5 text-sm border border-white/30 hover:border-white/70 rounded-full text-white transition-colors">
              Consult
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-xl text-sm font-semibold text-white flex items-center gap-1.5 transition-all">
              START LEARNING <span className="text-base leading-none">→</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Courses Sub-Navigation Bar (Desktop) */}
      {isCoursesHover && (
        <div 
          className="hidden md:block bg-white border-b border-slate-200 shadow-2xl"
          onMouseEnter={() => setIsCoursesHover(true)}
          onMouseLeave={() => setIsCoursesHover(false)}
        >
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-4 gap-8">
              {courseLinks.map((course) => (
                <Link
                  key={course.path}
                  to={course.path}
                  className="group flex flex-col gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-500/30 hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                  onClick={() => setIsCoursesHover(false)}
                >
                  <div className="aspect-square w-full overflow-hidden rounded-2xl border border-slate-200">
                    <img 
                      src={course.image} 
                      alt={course.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{course.name}</div>
                    <div className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{course.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── BOTTOM BAR: Course Section Anchor Links ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between h-11">
            {/* Course section anchors */}
            <div className="flex items-center gap-6">
              {courseNavLinks.map((link) => (
                <a
                  key={link.anchor}
                  href={link.anchor}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors py-2 border-b-2 border-transparent hover:border-indigo-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Sign In — far right */}
            <button className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors px-4 py-1.5 rounded-lg hover:bg-slate-100">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE DROPDOWN MENU ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-4 space-y-1">

            {/* Main nav section */}
            <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold px-2 mb-2">Main Navigation</div>
            {mainNavLinks.map((link) => (
              <div key={link.label}>
                {link.label === "Courses" ? (
                  <div className="space-y-1">
                    <button 
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        // You could add mobile sub-menu state here if needed, 
                        // but for now let's just list them below or use a simpler approach.
                      }}
                    >
                      {link.label}
                    </button>
                    <div className="pl-6 space-y-1 border-l border-slate-100 ml-4">
                      {courseLinks.map((c) => (
                        <Link
                          key={c.path}
                          to={c.path}
                          className="block px-4 py-2 text-xs font-medium text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="border-t border-slate-100 my-3" />

            {/* Course section anchors */}
            <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold px-2 mb-2">Course Sections</div>
            {courseNavLinks.map((link) => (
              <a
                key={link.anchor}
                href={link.anchor}
                className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 mt-3 flex flex-col gap-2">
              <button className="text-sm font-medium text-slate-700 px-4 py-2.5 rounded-lg hover:bg-slate-100 transition-colors text-left">
                Sign In
              </button>
              <button className="text-sm font-semibold text-white bg-emerald-500 hover:bg-emerald-600 px-4 py-2.5 rounded-lg transition-all">
                START LEARNING
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
