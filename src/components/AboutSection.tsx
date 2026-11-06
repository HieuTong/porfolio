import { PERSONAL_INFO, EDUCATION_DATA, REFERENCE, LEADERSHIP_ACTIVITIES } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Quote, 
  MapPin, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  ArrowUpRight,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-b border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <span>01 // BACKGROUND & FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Rigor Meets Artificial Intelligence
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-3xl">
            Six years shipping software to real customers in banking identity verification, fintech and healthcare, now applied to machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Executive Biography</span>
              </h3>

              <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                {PERSONAL_INFO.bio.split('\n\n').map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>

              {/* Core Strengths Chips */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 block mb-3">CORE COMPETENCY HIGHLIGHTS</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>On-Device Computer Vision (iOS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Leakage-Aware ML Evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Production ML Services (FastAPI, Docker)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Client-Facing Delivery with Banks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reference Highlight Card */}
            <div id="reference" className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-emerald-500/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
                <Quote className="w-3.5 h-3.5" />
                <span>REFERENCE</span>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-4">
                {REFERENCE.quote}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                <div>
                  <div className="text-xs font-bold text-white">{REFERENCE.name}</div>
                  <div className="text-[11px] text-slate-400">
                    {REFERENCE.title}, <span className="text-emerald-400 font-semibold">{REFERENCE.company}</span>
                  </div>
                </div>

                {REFERENCE.email ? (
                  <a
                    href={`mailto:${REFERENCE.email}`}
                    className="text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    <span>{REFERENCE.email}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-400">Available on request</span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Academic Leadership */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Cards */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-5">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>Education</span>
              </h3>

              <div className="space-y-6">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div 
                    key={edu.institution}
                    className={`${idx !== 0 ? 'pt-5 border-t border-slate-800/80' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                        <div className="text-xs font-semibold text-emerald-400 mt-0.5">
                          {edu.institution}
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-400">
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1.5 mb-3">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{edu.location}</span>
                    </div>

                    {edu.coursework && (
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1.5">
                          Relevant Coursework:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course) => (
                            <span 
                              key={course}
                              className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-950 border border-slate-800/80 text-slate-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Activities */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Awards</span>
              </h3>

              <div className="space-y-3">
              {LEADERSHIP_ACTIVITIES.map((act) => (
                <div key={act.organization} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{act.organization}</span>
                    <span className="text-[10px] font-mono text-emerald-400">{act.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{act.role} &bull; {act.location}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
