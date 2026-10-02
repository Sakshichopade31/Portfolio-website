import React from 'react';
import { Layers, Sliders, Volume2, Type, Zap, Monitor, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Software: React.FC = () => {
  return (
    <section id="software" className="py-16 md:py-20 border-b border-zinc-800/80 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Software & Tooling
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display flex items-center gap-3">
              <span>Software I Use:</span>
              <span className="px-3 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xl sm:text-2xl font-mono">
                CapCut
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Mastering CapCut across desktop and mobile to achieve broadcast-level precision, snappy visual hooks, and seamless viral pacing.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PERSONAL_INFO.capcutSkills.map((skill, index) => {
            const icons = [
              <Type key="0" className="w-4 h-4 text-emerald-400" />,
              <Layers key="1" className="w-4 h-4 text-teal-400" />,
              <Volume2 key="2" className="w-4 h-4 text-cyan-400" />,
              <Sliders key="3" className="w-4 h-4 text-sky-400" />,
              <Sparkles key="4" className="w-4 h-4 text-emerald-300" />,
              <Zap key="5" className="w-4 h-4 text-amber-400" />,
            ];

            return (
              <div
                key={index}
                className="bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-5 hover:border-zinc-700 transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CapCut Workflow Bar */}
        <div className="mt-8 p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-200">
              <Monitor className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Full Short-Form Pipeline in CapCut</div>
              <div className="text-[11px] text-zinc-400">
                Raw Footage Ingestion → Beat Alignment → Jump Cutting → Kinetic Captions → SFX Polish → 4K 60FPS Delivery
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto">
            1080x1920 9:16 Optimized
          </div>
        </div>
      </div>
    </section>
  );
};
