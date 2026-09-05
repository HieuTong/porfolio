import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold">
              <span>&gt;_</span>
            </div>
            <div>
              <span className="font-mono text-sm font-bold text-white tracking-tight">
                {PERSONAL_INFO.branding}
              </span>
              <p className="text-[11px] text-slate-500 font-mono">
                Hieu Le &bull; Software Engineer & AI Systems &bull; Melbourne, VIC
              </p>
            </div>
          </div>

          {/* Social / Contact links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 transition-colors ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} ({PERSONAL_INFO.branding}). All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>Melbourne, VIC &bull; AU</span>
            <span>&bull;</span>
            <span className="text-emerald-400/80">Available for immediate hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
