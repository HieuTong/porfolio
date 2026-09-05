import { WORK_EXPERIENCE } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Award,
  ArrowUpRight
} from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <span>04 // PRODUCTION TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Work Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-3xl">
            5 years of production software engineering across Singapore and U.S. teams, driving measurable business results in fintech trading, biometric security, and health insurance.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {WORK_EXPERIENCE.map((job) => (
            <div 
              key={job.id}
              className="relative group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors shadow-sm" />

              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800/90 group-hover:border-slate-700 transition-all shadow-xl">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {job.role}
                      </h3>
                      <span className="text-slate-500 hidden sm:inline">&bull;</span>
                      <span className="text-emerald-400 font-semibold text-base sm:text-lg">
                        {job.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 mt-1 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {job.location}
                      </span>
                      <span>&bull;</span>
                      <span>{job.type}</span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-950 border border-slate-800 text-slate-300 self-start sm:self-auto">
                    {job.period}
                  </span>
                </div>

                {job.summary && (
                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed font-medium">
                    {job.summary}
                  </p>
                )}

                {/* Bullets with metric emphasis */}
                <div className="space-y-3 mb-6">
                  {job.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {job.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 border border-slate-800/80 text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
