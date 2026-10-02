import React, { useState } from 'react';
import { X, Clock, Film, CheckCircle2, Upload, Mail, Sparkles, Sliders } from 'lucide-react';
import { ReelProject } from '../types';
import { CONTACT_REDIRECTS } from '../data/portfolioData';

interface ReelModalProps {
  project: ReelProject | null;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ project, onClose }) => {
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null);

  if (!project) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLocalVideoUrl(url);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-zinc-900/95 backdrop-blur-md px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
              {project.categoryLabel}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs text-zinc-400 flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              {project.duration}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
            title="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 9:16 Video Preview Screen */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-zinc-700 shadow-2xl relative flex flex-col justify-between p-4">
              {localVideoUrl ? (
                <video
                  src={localVideoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-b ${project.keyScene.bgGradient} rounded-xl p-4 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between text-[11px] text-white/80 z-10">
                    <span className="font-mono text-emerald-400">{project.aspectRatio}</span>
                    <span className="font-mono">{project.duration}</span>
                  </div>

                  <div className="my-auto text-center z-10 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                    <div className="text-xs font-bold text-yellow-300 font-display uppercase leading-tight mb-1">
                      {project.hookText}
                    </div>
                    <div className="text-[10px] text-zinc-300 font-mono">
                      CapCut Kinetic Edit
                    </div>
                  </div>

                  <div className="z-10 text-center">
                    <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-[11px] font-medium transition-colors">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Play Your Own Video File</span>
                      <input
                        type="file"
                        accept="video/mp4,video/quicktime,video/webm"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="text-[11px] text-zinc-400 mt-2 font-mono text-center">
              Target Export: 1080 x 1920 (9:16 Vertical)
            </div>
          </div>

          {/* Right: Technical Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1.5">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-300 font-medium mb-3">
                {project.tagline}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              {project.credits && (
                <div className="mt-3 inline-block px-3 py-1 rounded bg-zinc-800/80 border border-zinc-700 text-xs font-mono text-emerald-400">
                  Original Reel Watermark: {project.credits}
                </div>
              )}
            </div>

            {/* Editing Techniques & Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Film className="w-4 h-4 text-emerald-400" />
                <span>Editing Techniques Implemented</span>
              </h4>
              <div className="space-y-2">
                {project.techniques.map((tech, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800">
              <div>
                <div className="text-[10px] uppercase font-mono text-zinc-400">Pacing Style</div>
                <div className="text-xs font-semibold text-white mt-0.5">
                  {project.metrics?.pacing || 'High Energy'}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-zinc-400">Cut Density</div>
                <div className="text-xs font-semibold text-emerald-400 mt-0.5">
                  {project.metrics?.cutCount || 'Dynamic'}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-mono text-zinc-400">Software Used</div>
                <div className="text-xs font-semibold text-white mt-0.5">
                  {project.metrics?.software || 'CapCut'}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ready for remote collaboration on similar edits</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  CONTACT_REDIRECTS.email();
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-xs hover:bg-emerald-400 transition-colors shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 fill-current" />
                <span>Request Similar Edit (Email Redirect)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
