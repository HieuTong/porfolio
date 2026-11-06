import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  FileText, 
  Copy, 
  Check, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Activity
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const keyMetrics = [
    { value: '6+ Yrs', label: 'Shipping to Real Customers', sublabel: 'Identity verification, fintech, healthcare' },
    { value: '1M+', label: 'Customers Protected', sublabel: 'On-device liveness, 99% accuracy' },
    { value: '10+', label: 'Banks', sublabel: 'Using my iOS liveness frameworks' },
    { value: '0.876 F1', label: 'Cancer Detection', sublabel: 'On patients the model never saw' }
  ];

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/80"
    >
      {/* Background ambient glow - restrained, subtle, engineered */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-[450px] h-[300px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Info Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold">{PERSONAL_INFO.branding}</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Open to AI, ML & Forward Deployed Engineer roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">{PERSONAL_INFO.name}</span>
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-medium text-slate-200">
              {PERSONAL_INFO.headline}
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Contact Pills Bar (Prominently placed as requested) */}
            <div 
              id="hero-contact-bar"
              className="mt-6 w-full p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-lg shadow-black/40 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Direct Contact Information
                </span>
                <span className="text-slate-500">Fast Response (&lt;24 hrs)</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Email with copy */}
                <div className="flex items-center">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    id="hero-link-email"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-mono">{PERSONAL_INFO.email}</span>
                  </a>
                  <button
                    type="button"
                    id="hero-copy-email-btn"
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    title="Copy email to clipboard"
                    className="ml-1 p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone with copy */}
                <div className="flex items-center">
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    id="hero-link-phone"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 hover:text-white hover:border-slate-700 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-mono">{PERSONAL_INFO.phoneDisplay}</span>
                  </a>
                  <button
                    type="button"
                    id="hero-copy-phone-btn"
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    title="Copy phone to clipboard"
                    className="ml-1 p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Melbourne, VIC</span>
                </div>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-link-github"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-link-linkedin"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {copiedField && (
                <div className="mt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  Copied {copiedField} to clipboard!
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                id="hero-cta-projects"
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                id="hero-cta-resume"
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Full Resume</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="hero-cta-email"
                className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 hover:border-slate-600 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Email Hugh</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Telemetry & Engineering Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-black/60 p-5 backdrop-blur-md overflow-hidden relative">
              {/* Header bar of terminal */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">hieu.le@engine:~$</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYS: ONLINE</span>
                </div>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-xs space-y-3">
                <div>
                  <span className="text-slate-500">$</span>{' '}
                  <span className="text-emerald-300">cat</span>{' '}
                  <span className="text-slate-300">profile.json</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-[11px] leading-relaxed text-slate-300 space-y-1">
                  <p><span className="text-emerald-400">"candidate"</span>: <span className="text-slate-100">"{PERSONAL_INFO.name}"</span>,</p>
                  <p><span className="text-emerald-400">"branding"</span>: <span className="text-cyan-300">"{PERSONAL_INFO.branding}"</span>,</p>
                  <p><span className="text-emerald-400">"education"</span>: <span className="text-slate-200">"Master of AI @ RMIT University (2025-2026)"</span>,</p>
                  <p><span className="text-emerald-400">"undergraduate"</span>: <span className="text-slate-200">"B.S. Software Engineering @ VNU-HCM"</span>,</p>
                  <p><span className="text-emerald-400">"core_pillars"</span>: [</p>
                  <p className="pl-4 text-slate-400">"On-Device Computer Vision (iOS liveness, 10+ banks)",</p>
                  <p className="pl-4 text-slate-400">"Deep Learning with Leakage-Aware Evaluation (PyTorch)",</p>
                  <p className="pl-4 text-slate-400">"Production ML Services (FastAPI, Docker, CI/CD)"</p>
                  <p>],</p>
                  <p><span className="text-emerald-400">"status"</span>: <span className="text-emerald-400 font-semibold">"Available full-time from Nov 2026"</span></p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Reference: Senior SWE, Atlassian
                  </span>
                  <a 
                    href="#reference" 
                    className="text-emerald-400 hover:underline text-[10px]"
                  >
                    Details &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Impact Numbers Banner */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyMetrics.map((metric) => (
            <div 
              key={metric.label}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors font-mono">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
