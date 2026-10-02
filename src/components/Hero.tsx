import React from 'react';
import { Play, Mail, Phone, ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Laptop } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_REDIRECTS } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-800/80">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/30 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-10 w-[350px] h-[250px] bg-teal-500/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Main Bio Content */}
          <div className="max-w-2xl">
            {/* Status / Location badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-emerald-400">Available Now</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400 flex items-center gap-1">
                <Laptop className="w-3.5 h-3.5 text-zinc-400" />
                Ready to work remotely
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-400" />
                Nagpur, IN
              </span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display mb-4">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{PERSONAL_INFO.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 font-medium mb-4 leading-snug">
              {PERSONAL_INFO.headline}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              3rd-year <span className="text-zinc-200 font-medium">B.Tech student from Nagpur</span> with{' '}
              <span className="text-zinc-200 font-medium">4–5 years of video editing experience</span>. Active{' '}
              <span className="text-zinc-200 font-medium">video editor in my college technical club</span>, specializing in high-retention short-form reels, commercial brand promos, street vox pops, and dynamic CapCut editing.
            </p>

            {/* Redirect Action CTAs (Strictly no raw email/phone/url in plain text) */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 transition-all shadow-md shadow-emerald-950/40 active:scale-95"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>View My Reels</span>
              </a>

              <button
                onClick={CONTACT_REDIRECTS.email}
                title="Send an email to Sakshi"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 text-sm font-medium transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Send Email (Redirect)</span>
              </button>

              <button
                onClick={CONTACT_REDIRECTS.linkedin}
                title="Connect with Sakshi on LinkedIn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 text-sm font-medium transition-all active:scale-95"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </button>

              <button
                onClick={onContactClick}
                title="Show all redirect options"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 text-sm transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call / WhatsApp</span>
              </button>
            </div>

            {/* Security / Privacy reassurance note */}
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Contact links redirect safely to email, phone dialer & LinkedIn</span>
            </div>
          </div>

          {/* Quick Highlight Card */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">
                  Profile Snapshot
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  Verified Editor
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-zinc-200">Education & Base</div>
                    <div className="text-zinc-400">B.Tech 3rd Year · Nagpur</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-zinc-200">Editing Experience</div>
                    <div className="text-zinc-400">4–5 Years Hands-on Practice</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-zinc-200">Club Leadership</div>
                    <div className="text-zinc-400">Video Editor, College Technical Club</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-zinc-200">Primary Software</div>
                    <div className="text-zinc-400 font-mono text-emerald-400 font-semibold">
                      CapCut (Desktop & Mobile)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-zinc-200">Work Mode</div>
                    <div className="text-emerald-400 font-medium">100% Remote Ready Worldwide</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-800">
                <button
                  onClick={CONTACT_REDIRECTS.email}
                  className="w-full py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-medium text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Start a Project Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 pt-8 border-t border-zinc-900">
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-3.5 sm:p-4">
            <div className="text-2xl font-bold text-white font-display">4–5</div>
            <div className="text-xs text-zinc-400 mt-0.5">Years Experience</div>
            <div className="text-[11px] text-zinc-500 mt-1">Short-form video craft</div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-3.5 sm:p-4">
            <div className="text-2xl font-bold text-emerald-400 font-display">3rd Yr</div>
            <div className="text-xs text-zinc-400 mt-0.5">B.Tech Student</div>
            <div className="text-[11px] text-zinc-500 mt-1">Nagpur, Maharashtra</div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-3.5 sm:p-4">
            <div className="text-2xl font-bold text-teal-400 font-display">Tech Club</div>
            <div className="text-xs text-zinc-400 mt-0.5">Official Video Editor</div>
            <div className="text-[11px] text-zinc-500 mt-1">College media & promos</div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-3.5 sm:p-4">
            <div className="text-2xl font-bold text-cyan-400 font-display">CapCut</div>
            <div className="text-xs text-zinc-400 mt-0.5">Specialist Workflow</div>
            <div className="text-[11px] text-zinc-500 mt-1">Keyframing & kinetic captions</div>
          </div>
        </div>
      </div>
    </section>
  );
};
