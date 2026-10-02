import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ArrowUpRight, Send, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { CONTACT_REDIRECTS, PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [projectType, setProjectType] = useState('Brand & Commercial Reel');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} - from ${senderName || 'Client'}`);
    const body = encodeURIComponent(
      `Hello Sakshi,\n\nName: ${senderName || 'N/A'}\nProject Type: ${projectType}\n\nProject Scope & Details:\n${message || 'I would like to discuss video editing services for an upcoming project.'}\n\nLooking forward to collaborating!`
    );
    // Redirect via mailto
    window.location.href = `mailto:chopade.sakshi31@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-950 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Ready to Work Remotely</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Interested in hiring me for your brand promos, social media reels, or college media projects? Choose your preferred channel below to redirect directly.
          </p>
        </div>

        {/* 3 Direct Redirect Action Cards (strictly with NO plain text email, phone, or link shown) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Redirect */}
          <div className="bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                Email Inquiry
              </h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Click below to open your default mail app with a pre-configured editing inquiry draft.
              </p>
            </div>
            <button
              onClick={CONTACT_REDIRECTS.email}
              className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-950 text-zinc-200 text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Email Me (Redirect)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Call & WhatsApp Redirect */}
          <div className="bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1 group-hover:text-teal-300 transition-colors">
                Direct Call / WhatsApp
              </h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Start a phone call immediately on mobile or open a quick chat directly on WhatsApp.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={CONTACT_REDIRECTS.phoneCall}
                className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-teal-500 hover:text-zinc-950 text-zinc-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 active:scale-95"
                title="Initiate phone call"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call (Redirect)</span>
              </button>
              <button
                onClick={CONTACT_REDIRECTS.whatsapp}
                className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-teal-500 hover:text-zinc-950 text-zinc-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 active:scale-95"
                title="Open WhatsApp chat"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* LinkedIn Redirect */}
          <div className="bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1 group-hover:text-sky-300 transition-colors">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Connect professionally on LinkedIn to review student background, network, and recommendations.
              </p>
            </div>
            <button
              onClick={CONTACT_REDIRECTS.linkedin}
              className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-sky-500 hover:text-zinc-950 text-zinc-200 text-xs font-semibold transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Connect on LinkedIn (Redirect)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Inquiry Form that Redirects to Mail Client with Pre-filled draft */}
        <div className="max-w-2xl mx-auto bg-zinc-900/40 border border-zinc-800/90 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Project Inquiry Builder</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-1">
            Have a project in mind?
          </h3>
          <p className="text-xs text-zinc-400 mb-6">
            Fill in your project scope below and click redirect. Your message will be formatted and loaded into your mail client instantly.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-zinc-300 font-medium mb-1.5">Your Name or Brand</label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g., Alex / Firangish Cafe"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1.5">Project Type</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <option value="Brand & Commercial Reel">Brand & Commercial Reel</option>
                  <option value="Hospitality & Cafe Video">Hospitality & Cafe Video</option>
                  <option value="Event Vox Pop / Street Quiz">Event Vox Pop / Street Quiz</option>
                  <option value="Podcast & Talking Head Clips">Podcast & Talking Head Clips</option>
                  <option value="College Technical Event Video">College Technical Event Video</option>
                  <option value="Ongoing Remote Editor Retainer">Ongoing Remote Editor Retainer</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-zinc-300 font-medium mb-1.5">Project Details & Requirements</label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share footage details, number of reels needed, turnaround timeline, or reference videos..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Redirects safely to your mail app with no links exposed</span>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-all active:scale-95 shadow-md shadow-emerald-950/40"
              >
                <Send className="w-3.5 h-3.5 fill-current" />
                <span>Redirect & Send Draft</span>
              </button>
            </div>

            {submitted && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2 text-xs">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Opening your email client with your project draft...</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
