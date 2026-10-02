import React from 'react';
import { GraduationCap, Award, Users, Globe2, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_REDIRECTS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Background & Experience
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              About Me & Journey
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Grounded in tech, passionate about editing. Crafting short-form content that communicates clearly and converts viewers.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>B.Tech Student & Dedicated Video Editor</span>
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                I am currently in my <strong>3rd year of B.Tech in Nagpur</strong>. Over the past <strong>4–5 years</strong>, I have honed my editing craft by creating hundreds of short-form videos — analyzing pacing, viewer drop-offs, sound transitions, and visual retention hooks.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Beyond independent projects, I serve as a <strong>Video Editor in my college technical club</strong>. There, I produce official club reels, technical symposium promos, speaker introduction videos, and event recaps that generate thousands of views and drive student participation.
              </p>
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-300">
                  <span className="font-semibold text-white">100% Ready to Work Remotely: </span>
                  Equipped with a fast editing setup, prompt communication, and a streamlined workflow to deliver projects on time across remote teams, agency clients, and creators.
                </div>
              </div>
            </div>

            {/* Quick Principles / Work Ethic */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2.5">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-white mb-1">Hook Retention First</h4>
                <p className="text-xs text-zinc-400">
                  Capturing attention within the first 2 seconds through sound cues, kinetic captions, and seamless visual pattern interrupts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-2.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-semibold text-white mb-1">Speed & Reliability</h4>
                <p className="text-xs text-zinc-400">
                  Consistent turnarounds, structured file organization, and open feedback loops for rapid revisions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div id="experience" className="lg:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">
              Experience Timeline
            </div>

            {PERSONAL_INFO.experienceHighlights.map((exp, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/50 border border-zinc-800/90 rounded-2xl p-5 relative overflow-hidden group hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {exp.period}
                  </span>
                  {idx === 0 && (
                    <span className="text-[10px] uppercase font-semibold text-teal-300">
                      College Role
                    </span>
                  )}
                </div>

                <h4 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {exp.role}
                </h4>
                <div className="text-xs font-medium text-zinc-400 mb-3 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{exp.organization}</span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}

            {/* Remote readiness banner */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/30 to-zinc-900/80 border border-emerald-500/20 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-emerald-300">
                  Looking for a reliable editor?
                </div>
                <div className="text-[11px] text-zinc-400">
                  Available for contracts, ongoing reels & remote gigs.
                </div>
              </div>
              <button
                onClick={CONTACT_REDIRECTS.email}
                className="shrink-0 p-2 rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors"
                title="Send Email"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
