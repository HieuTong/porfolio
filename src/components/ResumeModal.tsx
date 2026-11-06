import { buildResumeText } from '../utils/resumeText';
import { useState } from 'react';
import { 
  PERSONAL_INFO, 
  EDUCATION_DATA, 
  WORK_EXPERIENCE, 
  SHIPPED_PROJECTS, 
  SKILL_CATEGORIES, 
  REFERENCE, 
  LEADERSHIP_ACTIVITIES 
} from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumePlainText = buildResumeText();

    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="resume-modal" 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in"
    >
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
              RESUME // HIEU LE
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Melbourne, VIC &bull; Master of AI @ RMIT &bull; 5 Yrs SWE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950/95 font-sans text-slate-200 text-xs sm:text-sm space-y-8 print:text-black print:bg-white">
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-slate-800">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Melbourne, VIC
              </span>
              <span>&bull;</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-300 hover:text-emerald-400 underline">
                {PERSONAL_INFO.email}
              </a>
              <span>&bull;</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-300 hover:text-emerald-400">
                {PERSONAL_INFO.phoneDisplay}
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                LinkedIn
              </a>
              <span>&bull;</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Section */}
          <div>
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider pb-1 mb-2 border-b border-slate-800">
              Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.subheadline} {PERSONAL_INFO.availability}.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider pb-1 mb-3 border-b border-slate-800">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.institution}>
                  <div className="flex justify-between font-bold text-white text-xs sm:text-sm">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-slate-400">{edu.location}</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-400 font-medium">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-slate-400">{edu.period}</span>
                  </div>
                  {edu.coursework && (
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      <strong className="text-slate-300">Relevant Coursework:</strong> {edu.coursework.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider pb-1 mb-3 border-b border-slate-800">
              Work Experience
            </h2>
            <div className="space-y-5">
              {WORK_EXPERIENCE.map((job) => (
                <div key={job.id}>
                  <div className="flex justify-between font-bold text-white text-xs sm:text-sm">
                    <span>{job.company}</span>
                    <span className="font-mono text-slate-400">{job.location}</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-400 font-medium mb-1.5">
                    <span>{job.role}</span>
                    <span className="font-mono text-slate-400">{job.period}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">&bull;</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider pb-1 mb-3 border-b border-slate-800">
              Selected Projects
            </h2>
            <div className="space-y-4">
              {SHIPPED_PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between font-bold text-white text-xs sm:text-sm">
                    <span>{proj.title}</span>
                    <span className="font-mono text-slate-400">{proj.year}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mb-1">
                    {proj.tags.join(', ')}
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">&bull;</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider pb-1 mb-2 border-b border-slate-800">
              Skills
            </h2>
            <div className="text-xs text-slate-300 space-y-1 leading-relaxed">
              {SKILL_CATEGORIES.map((cat) => (
                <p key={cat.title}>
                  <strong className="text-white">{cat.title}:</strong> {cat.skills.map((s) => s.name).join(', ')}
                </p>
              ))}
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider pb-1 mb-2 border-b border-slate-800">
              References
            </h2>
            <div className="text-xs text-slate-300">
              <p className="font-bold text-white">{REFERENCE.name}</p>
              <p className="text-emerald-400">{REFERENCE.title}, {REFERENCE.company}</p>
              <p className="font-mono text-slate-400 mt-0.5">{REFERENCE.email ? `Email: ${REFERENCE.email}` : 'Available on request'}</p>
              <p className="mt-1 text-slate-300 leading-relaxed">{REFERENCE.quote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
