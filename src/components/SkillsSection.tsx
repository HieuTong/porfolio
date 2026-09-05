import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Layers, 
  Search, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Database, 
  Cloud, 
  Layout, 
  Code,
  Sparkles
} from 'lucide-react';

export function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');

  const categoryIcons: Record<string, typeof Layers> = {
    'Machine Learning & AI': Cpu,
    'Programming Languages': Code,
    'Data & Backend Systems': Database,
    'Cloud & DevOps': Cloud,
    'Software Engineering & Architecture': Layout
  };

  const filteredCategories = SKILL_CATEGORIES.map(category => {
    const matchingSkills = category.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      skills: matchingSkills
    };
  }).filter(category => {
    if (activeCategoryTab !== 'all' && category.title !== activeCategoryTab) {
      return false;
    }
    return category.skills.length > 0;
  });

  return (
    <section id="skills" className="py-20 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
              <span>03 // TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Engineering Stack
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Categorized proficiency across modern machine learning frameworks, high-throughput backend services, distributed data pipelines, and production DevOps.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="skills-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skill (e.g. PyTorch, Docker)..."
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 mb-8 self-start">
          <button
            type="button"
            onClick={() => setActiveCategoryTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCategoryTab === 'all'
                ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            All Categories
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setActiveCategoryTab(cat.title)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategoryTab === cat.title
                  ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Layers;

            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {category.title}
                      </h3>
                      <span className="text-[10px] text-slate-400 block font-mono">
                        {category.skills.length} skills listed
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/60 flex items-center justify-between hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-xs font-medium text-slate-200">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {skill.years && (
                            <span className="text-[10px] font-mono text-slate-500">
                              {skill.years}
                            </span>
                          )}
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                            skill.level === 'Advanced'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : skill.level === 'Proficient'
                              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
