import React from 'react';
import { Video, Mail, Phone, ArrowUpRight, Heart } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_REDIRECTS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs py-12 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          {/* Left info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{PERSONAL_INFO.name}</div>
              <div className="text-[11px] text-zinc-400">
                {PERSONAL_INFO.headline} · {PERSONAL_INFO.location}
              </div>
            </div>
          </div>

          {/* Quick Redirect Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={CONTACT_REDIRECTS.email}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800"
              title="Send Email (Redirect)"
            >
              <Mail className="w-4 h-4" />
            </button>
            <button
              onClick={CONTACT_REDIRECTS.phoneCall}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800"
              title="Call Directly (Redirect)"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={CONTACT_REDIRECTS.linkedin}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800 flex items-center gap-1"
              title="Open LinkedIn (Redirect)"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Edited with CapCut. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built for high-retention storytelling · Ready to work remotely</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
