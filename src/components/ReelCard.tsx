import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Upload, Sparkles, Clock, Film } from 'lucide-react';
import { ReelProject } from '../types';

interface ReelCardProps {
  project: ReelProject;
  onOpenModal: (project: ReelProject) => void;
}

export const ReelCard: React.FC<ReelCardProps> = ({ project, onOpenModal }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState<number>(0);
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Playhead simulation when no real local video is loaded
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !localVideoUrl) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          const next = prev + 2;
          // cycle subtitles based on progress
          const subs = project.keyScene.subtitles;
          const subIdx = Math.floor((next / 100) * subs.length) % subs.length;
          setActiveSubtitleIndex(subIdx);
          return next;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying, localVideoUrl, project.keyScene.subtitles]);

  // Handle local file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLocalVideoUrl(url);
      setIsPlaying(true);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (localVideoUrl && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (localVideoUrl && videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="bg-zinc-900/70 border border-zinc-800/90 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all flex flex-col group">
      {/* 9:16 Vertical Reel Player Container */}
      <div className="relative aspect-[9/16] w-full bg-zinc-950 overflow-hidden select-none">
        {/* If local video is loaded */}
        {localVideoUrl ? (
          <video
            ref={videoRef}
            src={localVideoUrl}
            className="w-full h-full object-cover"
            loop
            playsInline
            muted={isMuted}
            onTimeUpdate={() => {
              if (videoRef.current) {
                const current = videoRef.current.currentTime;
                const dur = videoRef.current.duration || 1;
                setProgress((current / dur) * 100);
              }
            }}
          />
        ) : (
          /* High-Fidelity Custom Animated Visual Scene */
          <div
            className={`w-full h-full bg-gradient-to-b ${project.keyScene.bgGradient} relative flex flex-col justify-between p-4`}
          >
            {/* Background Texture & Graphic Scene */}
            <div className="absolute inset-0 opacity-40 overflow-hidden pointer-events-none">
              {project.keyScene.illustrationType === 'cafe' && (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-24 h-24 rounded-full border border-amber-300/40 flex items-center justify-center mb-4 bg-amber-900/30">
                    <span className="font-display font-bold text-amber-200 text-xs tracking-widest text-center px-2">
                      FIRANGISH
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-full max-w-[200px] mt-4 opacity-75">
                    <div className="h-16 rounded bg-amber-950/60 border border-amber-500/20 flex flex-col items-center justify-center text-[10px] text-amber-300 font-mono">
                      <span>☕ Espresso</span>
                      <span className="text-[8px] text-amber-400/80">Dual Angle</span>
                    </div>
                    <div className="h-16 rounded bg-amber-950/60 border border-amber-500/20 flex flex-col items-center justify-center text-[10px] text-amber-300 font-mono">
                      <span>🍕 Artisan</span>
                      <span className="text-[8px] text-amber-400/80">Courtyard</span>
                    </div>
                  </div>
                </div>
              )}

              {project.keyScene.illustrationType === 'wellness' && (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-[11px] font-mono text-emerald-300 mb-2 border border-emerald-500/30 px-2 py-0.5 rounded bg-emerald-950/40">
                    VEDWELL HEALTH
                  </div>
                  <div className="w-28 h-28 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 flex flex-col items-center justify-center p-2 mb-3">
                    <div className="text-2xl mb-1">🫀</div>
                    <span className="text-[9px] font-bold text-emerald-300 uppercase">
                      Digestive Health
                    </span>
                    <span className="text-[8px] text-zinc-400">Pure Gud vs Sugar</span>
                  </div>
                  <div className="text-[9px] text-emerald-400/80 font-mono">
                    Milk Purity Test Demonstration
                  </div>
                </div>
              )}

              {project.keyScene.illustrationType === 'voxpop_timer' && (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-rose-500/60 flex flex-col items-center justify-center bg-rose-950/40 animate-pulse">
                    <span className="text-2xl font-black text-rose-200 font-mono">5s</span>
                    <span className="text-[8px] uppercase tracking-wider text-rose-300">Countdown</span>
                  </div>
                  <div className="mt-4 flex gap-1 justify-center">
                    {['♟️ Chess', '🎲 Ludo', '🐍 Snakes', '🎩 Monopoly', '🃏 Cards'].map((g, i) => (
                      <span key={i} className="text-[8px] bg-rose-950/80 border border-rose-500/30 px-1 py-0.5 rounded text-rose-200">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.keyScene.illustrationType === 'trivia_cards' && (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-3xl mb-2">🎁</div>
                  <div className="text-xs font-bold text-sky-200 mb-1">Win A Gift Hamper</div>
                  <div className="w-32 h-20 rounded-lg bg-sky-950/80 border border-sky-400/40 flex items-center justify-center p-2 text-[10px] text-sky-300 font-bold">
                    Uno Skip Card? 🛑
                  </div>
                  <div className="mt-2 text-[9px] font-mono text-sky-400/80">3 Seconds Response Time</div>
                </div>
              )}

              {project.keyScene.illustrationType === 'space' && (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-900 to-violet-600/40 blur-xs border border-violet-400/40 flex items-center justify-center mb-2">
                    <span className="text-3xl">🪐</span>
                  </div>
                  <div className="text-xs font-mono text-violet-300 tracking-wider">
                    DEEP SPACE B-ROLL
                  </div>
                  <div className="text-[9px] text-zinc-400 mt-1">Cosmic Explainer · Hormozi Captions</div>
                </div>
              )}
            </div>

            {/* Top Bar inside 9:16 Frame */}
            <div className="relative z-10 flex items-center justify-between text-xs">
              <span className={`px-2 py-0.5 rounded-full border text-[10px] font-medium backdrop-blur-md ${project.keyScene.badgeColor}`}>
                {project.keyScene.badgeText}
              </span>
              <div className="flex items-center gap-1.5">
                {isPlaying && (
                  <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] font-mono text-emerald-400">
                    <span className="w-1 h-2 bg-emerald-400 animate-pulse" />
                    <span className="w-1 h-3 bg-emerald-400 animate-pulse delay-75" />
                    <span className="w-1 h-1.5 bg-emerald-400 animate-pulse delay-150" />
                  </span>
                )}
                <span className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-zinc-300">
                  {project.duration}
                </span>
              </div>
            </div>

            {/* Center: Dynamic Kinetic Subtitle Simulation */}
            <div className="relative z-10 my-auto text-center px-2">
              <div className="inline-block p-2 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 shadow-lg max-w-[90%]">
                <p className="text-xs sm:text-sm font-bold font-display uppercase tracking-wide text-yellow-300 leading-snug drop-shadow-md">
                  {project.keyScene.subtitles[activeSubtitleIndex] || project.hookText}
                </p>
                <div className="text-[9px] text-zinc-400 font-mono mt-1 flex items-center justify-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                  <span>CapCut Kinetic Subtitle</span>
                </div>
              </div>

              {/* Watermark credit if present (like in Firangish video) */}
              {project.credits && (
                <div className="mt-4 text-[9px] font-mono text-zinc-400/80 tracking-wider uppercase">
                  Edited by: {project.credits}
                </div>
              )}
            </div>

            {/* Bottom Controls Bar inside Frame */}
            <div className="relative z-10 space-y-2">
              {/* Scrub Progress Bar */}
              <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-400 h-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-white/90">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors active:scale-90"
                  title={isPlaying ? 'Pause Reel' : 'Play Reel'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-zinc-300" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-300" />}
                  </button>

                  <button
                    onClick={() => onOpenModal(project)}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors"
                    title="Expand Reel Details"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-zinc-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hover Overlay Button to inspect or load video */}
        <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <input
            ref={fileInputRef}
            type="file"
            accept="video/mp4,video/quicktime,video/webm"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            title="Drop or select your local video file to play in this frame"
            className="px-2 py-1 rounded-md bg-zinc-900/90 border border-zinc-700 text-[10px] text-zinc-300 hover:text-white flex items-center gap-1 backdrop-blur-md"
          >
            <Upload className="w-3 h-3 text-emerald-400" />
            <span>Load Video</span>
          </button>
        </div>
      </div>

      {/* Reel Card Metadata and Techniques Breakdown */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Duration */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <span className="font-medium text-emerald-400">{project.categoryLabel}</span>
            <span className="flex items-center gap-1 font-mono text-[11px] text-zinc-400">
              <Clock className="w-3 h-3 text-zinc-400" />
              {project.duration}
            </span>
          </div>

          <h3 className="text-base font-bold text-white font-display mb-1 group-hover:text-emerald-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed">
            {project.description}
          </p>

          {/* Key Editing Techniques */}
          <div className="space-y-1.5 mb-4">
            <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
              <Film className="w-3 h-3 text-emerald-400" />
              <span>CapCut Techniques Used</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techniques.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer Action */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
          <span className="text-[11px] font-mono text-zinc-400">
            {project.keyScene.highlightStat}
          </span>
          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group/btn"
          >
            <span>Breakdown & Specs</span>
            <Maximize2 className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
