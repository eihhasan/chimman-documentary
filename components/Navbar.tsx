import React from 'react';
import { Menu, Globe, Compass } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] p-4 md:p-10 flex items-center justify-between mix-blend-difference">
      <div className="flex items-center gap-2 md:gap-3">
        <Compass className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
        <h1 className="text-white font-black tracking-[-0.05em] text-xl md:text-2xl hidden md:block m-0 leading-none">
          {BRAND_NAME}
        </h1>
      </div>



      <div className="flex items-center gap-6">
        <button className="text-white hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white rounded-md" aria-label="Change Language">
          <Globe className="w-5 h-5" aria-hidden="true" />
        </button>
        <button className="text-white hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white rounded-md" aria-label="Open Menu">
          <Menu className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
