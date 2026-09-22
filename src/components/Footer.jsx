import React from 'react';
import { ArrowUp, Mail, Phone, MessageSquare, Heart, Sparkles } from 'lucide-react';
import { LinkedInIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-sapling-400/15 bg-dark-950/85 backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      {/* Subtle Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-24 bg-[#1c2824]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-24 bg-sapling-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-sapling-400/15">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dark-900 border border-sapling-400/30 flex items-center justify-center">
                <span className="font-sans font-bold text-sapling-400 text-base tracking-tight">
                  AM
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl text-white tracking-tight flex items-center gap-1.5">
                  <span>Adhwaith</span>
                  <span className="text-sapling-400">MV</span>
                </span>
                <span className="text-[10.5px] font-mono uppercase tracking-widest text-slate-400 -mt-0.5">
                  Digital Marketing Specialist
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Performance Digital Marketer fusing <span className="text-sapling-200 font-medium">BSc Mathematics quantitative rigor</span> with high-velocity creative advertising, SEO, and lead funnels to build exponential visibility and scalable revenue.
            </p>
            <div className="flex items-center gap-2 text-xs text-sapling-400 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-sapling-400 animate-pulse" />
              <span>Available for Consulting & Growth Execution</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sapling-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-sapling-400 transition-colors">About Me</a></li>
              <li><a href="#experience" className="hover:text-sapling-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-sapling-400 transition-colors">Featured Projects</a></li>
              <li><a href="#services" className="hover:text-sapling-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-sapling-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sapling-300 font-semibold">
              Connect
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm text-slate-400">
              <a 
                href={`mailto:${personalInfo.contact.email}`} 
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-sapling-400/10 flex items-center justify-center text-sapling-400 group-hover:bg-sapling-400/20 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{personalInfo.contact.email}</span>
              </a>
              <a 
                href={personalInfo.contact.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#1c2824]/40 border border-sapling-400/20 flex items-center justify-center text-sapling-400 group-hover:bg-[#1c2824]/60 transition-colors">
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href={`tel:${personalInfo.contact.phone}`} 
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-sapling-400/10 flex items-center justify-center text-sapling-400 group-hover:bg-sapling-400/20 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{personalInfo.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with Data, Math & Precision</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl glass-card border border-sapling-400/20 hover:border-sapling-400/50 hover:text-sapling-400 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
