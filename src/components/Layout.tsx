import type { ReactNode } from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-20 mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="uppercase text-xs mb-6 text-gray-400 tracking-[2px]">CYBER CRACKER</div>
              <p className="text-sm text-gray-400 leading-7">
                Bangladesh-based cybersecurity learning platform for building ethical hackers and security professionals.
              </p>
            </div>

            <div>
              <div className="uppercase text-xs mb-6 text-gray-400 tracking-[2px]">PROGRAMS</div>
              
              <a href="#" className="block mb-2 text-sm hover:text-emerald-400 transition-colors">CCEH Program</a>
              <a href="#" className="block mb-2 text-sm hover:text-emerald-400 transition-colors">CCSE Program</a>
              <a href="#" className="block mb-2 text-sm hover:text-emerald-400 transition-colors">Live Classes</a>
              <a href="#" className="block text-sm hover:text-emerald-400 transition-colors">Community</a>
            </div>

            <div>
              <div className="uppercase text-xs mb-6 text-gray-400 tracking-[2px]">RESOURCES</div>
              
              <a href="#" className="block mb-2 text-sm hover:text-emerald-400 transition-colors">Blog</a>
              <a href="#" className="block mb-2 text-sm hover:text-emerald-400 transition-colors">Documentation</a>
              <a href="#" className="block mb-2 text-sm hover:text-emerald-400 transition-colors">FAQ</a>
              <a href="#" className="block text-sm hover:text-emerald-400 transition-colors">Support</a>
            </div>

            <div>
              <div className="uppercase text-xs mb-6 text-gray-400 tracking-[2px]">CONTACT</div>
              
              <a href="#" className="block mb-2 text-sm hover:text-emerald-400">academy@cybercracker.io</a>
              <div className="text-xs text-gray-500 mt-8">MADE FOR THE ONES WHO WANT TO BREAK THINGS — THE RIGHT WAY.</div>
            </div>
          </div>
          
          <div className="text-center text-[10px] text-gray-600 mt-20">
            THIS IS A DEMO WEBSITE FOR ILLUSTRATION PURPOSES ONLY
          </div>
        </div>
      </footer>
    </div>
  );
};
