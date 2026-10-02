import React, { useState } from 'react';
import { Film, Filter, Sparkles, Video } from 'lucide-react';
import { Category, ReelProject } from '../types';
import { REELS_DATA } from '../data/portfolioData';
import { ReelCard } from './ReelCard';

interface ReelGridProps {
  onOpenModal: (project: ReelProject) => void;
}

export const ReelGrid: React.FC<ReelGridProps> = ({ onOpenModal }) => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filteredReels = REELS_DATA.filter((reel) => {
    if (activeFilter === 'all') return true;
    return reel.category === activeFilter;
  });

  const categories: { id: Category; label: string; count: number }[] = [
    { id: 'all', label: 'All Reels', count: REELS_DATA.length },
    {
      id: 'commercial',
      label: 'Brand & Commercial',
      count: REELS_DATA.filter((r) => r.category === 'commercial').length,
    },
    {
      id: 'voxpop',
      label: 'Vox Pop & Trivia',
      count: REELS_DATA.filter((r) => r.category === 'voxpop').length,
    },
    {
      id: 'podcast',
      label: 'Podcast & Explainer',
      count: REELS_DATA.filter((r) => r.category === 'podcast').length,
    },
  ];

  return (
    <section id="works" className="py-16 md:py-24 border-b border-zinc-800/80 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-2 flex items-center gap-1.5">
              <Film className="w-4 h-4 text-emerald-400" />
              Portfolio Showcase
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
              My Work — Featured Reels
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mt-2 leading-relaxed">
              Real projects featuring hospitality showcases, health brand explainers, rapid street vox pops, and podcast clips — all edited and polished using CapCut.
            </p>
          </div>

          {/* Filter Bar (Functional Buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto self-start md:self-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-500 text-zinc-950 font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-emerald-950/30 text-zinc-950 font-bold' : 'bg-zinc-800 text-zinc-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Reels Grid (Responsive 1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReels.map((project) => (
            <ReelCard key={project.id} project={project} onOpenModal={onOpenModal} />
          ))}
        </div>

        {/* Interactive Notice on How to Test */}
        <div className="mt-12 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2 text-zinc-300">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Each card features simulated CapCut timeline pacing. You can also click <strong>&quot;Load Video&quot;</strong> on any card to test your local .mp4/.mov file right inside the frame!
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 shrink-0">
            <Video className="w-3.5 h-3.5" />
            <span>9:16 Vertical Export Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
