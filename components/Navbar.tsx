
import React from 'react';
import { Menu, Globe, Compass } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-6 md:p-10 flex items-center justify-between mix-blend-difference">
      <div className="flex items-center gap-3">
        <Compass className="w-6 h-6 text-white" />
        <span className="text-white font-black tracking-[-0.05em] text-2xl hidden md:block">
          {BRAND_NAME}
        </span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-zinc-400 font-black text-[10px] uppercase tracking-[0.3em]">
        <a href="#" className="hover:text-white transition-colors">Stories</a>
        <a href="#" className="hover:text-white transition-colors">Learnings</a>
        <a href="#" className="hover:text-white transition-colors">Next Trip</a>
        <a href="#" className="hover:text-white transition-colors">Merch</a>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-white hover:scale-110 transition-transform">
          <Globe className="w-5 h-5" />
        </button>
        <button className="text-white hover:scale-110 transition-transform">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
