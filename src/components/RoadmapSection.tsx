import { UPCOMING_PROJECTS } from '../data/portfolioData';
import { CheckCircle2, Circle } from 'lucide-react';

// Renders the "what I'm building next" list from UPCOMING_PROJECTS.
// Progress is derived from milestones, so a project only looks further
// along when a milestone is actually ticked off in the data.
export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <span>NEXT // ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What I'm Building Next
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-3xl">
            Planned and in-progress work. A milestone is ticked only when the work is done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {UPCOMING_PROJECTS.map((p) => {
            const done = p.milestones.filter((m) => m.completed).length;
            const pct = p.milestones.length ? Math.round((done / p.milestones.length) * 100) : 0;

            return (
              <article
                key={p.id}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl flex flex-col"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    {p.domain}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    {p.status}
                  </span>
                  <span className="text-slate-500">{p.timeline}</span>
                </div>

                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.executiveSummary}</p>

                <div className="mt-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">The problem</span>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">{p.problemStatement}</p>
                </div>

                <div className="mt-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Why it matters</span>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">{p.hiringTeamTakeaway}</p>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1.5">
                    <span>Milestones</span>
                    <span>{done}/{p.milestones.length}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden mb-3">
                    <div className="h-full bg-emerald-400" style={{ width: `${pct}%` }} />
                  </div>
                  <ul className="space-y-1.5">
                    {p.milestones.map((m) => (
                      <li key={m.title} className="flex items-start gap-2 text-xs">
                        {m.completed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-400" />
                        ) : (
                          <Circle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-600" />
                        )}
                        <span className={m.completed ? 'text-slate-200' : 'text-slate-400'}>{m.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                  {p.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-950 border border-slate-800/80 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
