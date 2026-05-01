import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { cn } from '../utils/cn';
import SiteFooter from './SiteFooter';

export const Layout = ({ children, showFooter = true }: { children: ReactNode; showFooter?: boolean }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className={cn("flex-1", isHomePage ? "pt-[128px]" : "pt-20")}>
        {children}
      </main>

      {/* Footer */}
      {showFooter && <SiteFooter />}
    </div>
  );
};
