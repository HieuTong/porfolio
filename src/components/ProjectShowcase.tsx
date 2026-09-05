import { useState } from 'react';
import { SHIPPED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  ArrowRight, 
  Globe,
  X 
} from 'lucide-react';

export function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml-systems', label: 'Production ML & Systems' },
    { id: 'computer-vision', label: 'Computer Vision & Healthcare' },
    { id: 'machine-learning', label: 'Machine Learning & Analytics' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? SHIPPED_PROJECTS
    : SHIPPED_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
              <span>02 // PROJECT SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Project Showcase
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Production-ready ML microservices, leak-proof computer vision pipelines, and scalable predictive modeling.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/80 transition-all flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-black/50"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.year} &bull; {project.category.toUpperCase().replace('-', ' ')}
                  </span>
                  
                  <div className="flex items-center gap-3">
                    {(project.demoUrl || project.liveUrl) && (
                      <a
                        href={project.demoUrl || project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20"
                        title="Open Live Demo"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                        title="View GitHub repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-1 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Key Metrics Grid */}
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/70">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <span className="block text-xs font-bold text-emerald-400 font-mono">
                          {m.value}
                        </span>
                        <span className="block text-[10px] text-slate-400 mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet points */}
                <div className="space-y-2 mb-5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Deep Dive Modal Trigger */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inspect System Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProjectModal && (
          <div 
            id="project-detail-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {activeProjectModal.year} &bull; {activeProjectModal.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activeProjectModal.title}
                  </h3>
                  <p className="text-xs text-slate-400">{activeProjectModal.subtitle}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 space-y-5 text-xs sm:text-sm">
                {activeProjectModal.problemStatement && (
                  <div>
                    <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1.5">
                      Engineering Challenge & Problem Statement
                    </h4>
                    <p className="text-slate-300 leading-relaxed bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                      {activeProjectModal.problemStatement}
                    </p>
                  </div>
                )}

                {activeProjectModal.solution && (
                  <div>
                    <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1.5">
                      Engineered Solution
                    </h4>
                    <p className="text-slate-300 leading-relaxed bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                      {activeProjectModal.solution}
                    </p>
                  </div>
                )}

                {activeProjectModal.architectureHighlights && (
                  <div>
                    <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      System Architecture Highlights
                    </h4>
                    <div className="space-y-2">
                      {activeProjectModal.architectureHighlights.map((arch, i) => (
                        <div key={i} className="flex items-start gap-2 text-slate-300 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{arch}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeProjectModal.metrics && (
                  <div>
                    <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                      Validated Benchmark Metrics
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {activeProjectModal.metrics.map((m) => (
                        <div key={m.label} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
                          <span className="block text-sm font-bold text-emerald-400 font-mono">
                            {m.value}
                          </span>
                          <span className="block text-[10px] text-slate-400 mt-0.5">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  {(activeProjectModal.demoUrl || activeProjectModal.liveUrl) && (
                    <a
                      href={activeProjectModal.demoUrl || activeProjectModal.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white flex items-center gap-2 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {activeProjectModal.githubUrl && (
                    <a
                      href={activeProjectModal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-white hover:border-slate-700 flex items-center gap-2 transition-colors"
                    >
                      <Github className="w-4 h-4 text-emerald-400" />
                      <span>View Repository</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
