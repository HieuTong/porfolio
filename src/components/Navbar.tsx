import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  Terminal, 
  FileText, 
  Mail, 
  Briefcase, 
  Code2, 
  Layers,
  Compass
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Background', href: '#about', icon: Terminal },
    { name: 'Projects', href: '#projects', icon: Code2 },
    { name: 'Roadmap', href: '#roadmap', icon: Compass },
    { name: 'Skills & Stack', href: '#skills', icon: Layers },
    { name: 'Experience', href: '#experience', icon: Briefcase }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#" 
          id="nav-brand-logo"
          className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-base group-hover:border-emerald-400 transition-colors shadow-inner">
            <span>&gt;_</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              {PERSONAL_INFO.branding}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for hire" />
            </span>
            <span className="text-[11px] text-slate-400 tracking-wide font-mono hidden sm:inline-block">
              SWE & AI Systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1.5"
              >
                <Icon className="w-3.5 h-3.5 text-slate-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            id="nav-btn-email-cta"
            className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5"
            title={PERSONAL_INFO.email}
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Email</span>
          </a>

          <button
            type="button"
            id="nav-btn-resume"
            onClick={onOpenResume}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20 active:scale-95 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-slate-950" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            id="nav-btn-mobile-resume"
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 text-xs flex items-center gap-1"
            title="Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            type="button"
            id="nav-btn-toggle-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="nav-mobile-drawer"
          className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 px-4 pt-3 pb-6 mt-2 shadow-2xl transition-all"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors flex items-center gap-2.5"
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              type="button"
              id="mobile-nav-btn-resume"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>View Full Resume</span>
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
