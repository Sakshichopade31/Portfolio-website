import React from 'react';
import { Sparkles, Video, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_REDIRECTS } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Name / Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-zinc-100 group-hover:border-zinc-500 transition-colors shadow-inner">
            <Video className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-100 tracking-tight group-hover:text-white flex items-center gap-1.5">
              {PERSONAL_INFO.name}
              <span className="text-[10px] font-mono text-zinc-500 font-normal hidden sm:inline">
                · CapCut Editor
              </span>
            </div>
            <div className="text-[11px] text-zinc-400 font-mono flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.roleStatus}</span>
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
          <a href="#about" className="hover:text-zinc-100 transition-colors">
            About Me
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            Experience
          </a>
          <a href="#works" className="hover:text-zinc-100 transition-colors">
            My Work (Reels)
          </a>
          <a href="#software" className="hover:text-zinc-100 transition-colors">
            CapCut Toolkit
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => CONTACT_REDIRECTS.linkedin()}
            title="Open LinkedIn"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-all"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </button>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 text-zinc-950 text-xs font-semibold hover:bg-emerald-400 transition-all shadow-sm active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Hire / Redirect</span>
          </button>
        </div>
      </div>
    </header>
  );
};
