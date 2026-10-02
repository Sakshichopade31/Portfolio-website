import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ReelGrid } from './components/ReelGrid';
import { Software } from './components/Software';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReelModal } from './components/ReelModal';
import { ReelProject } from './types';
import { CONTACT_REDIRECTS, PERSONAL_INFO } from './data/portfolioData';
import { X, Mail, Phone, MessageSquare, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedReel, setSelectedReel] = useState<ReelProject | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-emerald-500 selection:text-zinc-950">
      {/* Top Navigation */}
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onContactClick={() => setIsContactModalOpen(true)} />
        <About />
        <ReelGrid onOpenModal={(project) => setSelectedReel(project)} />
        <Software />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Reel Detail Breakdown Modal */}
      {selectedReel && (
        <ReelModal project={selectedReel} onClose={() => setSelectedReel(null)} />
      )}

      {/* Quick Contact Redirect Dialog Modal */}
      {isContactModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-sm font-semibold text-white font-display">
                  Connect with {PERSONAL_INFO.name}
                </h3>
              </div>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="w-7 h-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Available for remote short-form video editing contracts and freelance reels. Click any channel to redirect directly:
            </p>

            {/* Redirect Action List */}
            <div className="space-y-2.5">
              <button
                onClick={() => {
                  setIsContactModalOpen(false);
                  CONTACT_REDIRECTS.email();
                }}
                className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/80 transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                      Send Email (Redirect)
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      Opens your default mail app with project template
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </button>

              <button
                onClick={() => {
                  setIsContactModalOpen(false);
                  CONTACT_REDIRECTS.phoneCall();
                }}
                className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-teal-500/50 hover:bg-zinc-800/80 transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-teal-300">
                      Direct Phone Call (Redirect)
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      Initiate mobile phone dialer immediately
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-teal-400 transition-colors" />
              </button>

              <button
                onClick={() => {
                  setIsContactModalOpen(false);
                  CONTACT_REDIRECTS.whatsapp();
                }}
                className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-teal-500/50 hover:bg-zinc-800/80 transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                      Chat on WhatsApp (Redirect)
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      Open direct conversation in WhatsApp
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </button>

              <button
                onClick={() => {
                  setIsContactModalOpen(false);
                  CONTACT_REDIRECTS.linkedin();
                }}
                className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-sky-500/50 hover:bg-zinc-800/80 transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-sky-300">
                      LinkedIn Profile (Redirect)
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      View full student background and connections
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-colors" />
              </button>
            </div>

            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                No contact data exposed directly
              </span>
              <span className="text-emerald-400 font-mono">Ready to work remotely</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
