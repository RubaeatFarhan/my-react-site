import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 shadow-md shadow-primary-200">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Master<span className="text-primary-600">Class</span>
              <span className="text-xs font-semibold text-primary-500 ml-0.5">PRO</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Overview
            </a>
            <a href="#curriculum" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Curriculum
            </a>
            <a href="#instructor" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Instructor
            </a>
            <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Reviews
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors px-4 py-2">
              Sign In
            </button>
            <button className="text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 px-5 py-2.5 rounded-lg shadow-md shadow-primary-200 hover:shadow-lg hover:shadow-primary-300 transition-all">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {["Overview", "Curriculum", "Instructor", "Reviews", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-3 flex flex-col gap-2">
              <button className="text-sm font-medium text-slate-700 px-4 py-2.5 rounded-lg hover:bg-slate-100 transition-colors">
                Sign In
              </button>
              <button className="text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 px-4 py-2.5 rounded-lg shadow-md transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
