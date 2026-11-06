import os, re, pathlib

# Repair script: brings the portfolio to the intended state no matter which
# earlier steps ran. Every step checks before it changes anything, so it is
# safe to run more than once.

def read(p): return pathlib.Path(p).read_text()
def write(p, s):
    pathlib.Path(p).parent.mkdir(parents=True, exist_ok=True)
    pathlib.Path(p).write_text(s)

problems = []

def apply(path, steps):
    """steps: (done_marker, old, new, is_regex). Skip a step if done_marker is already there."""
    s = read(path); changed = False
    for done, old, new, is_regex in steps:
        if done and done in s:
            continue
        if is_regex:
            s2, n = re.subn(old, new, s, count=1, flags=re.S)
            matched = n > 0
        else:
            matched = old in s
            s2 = s.replace(old, new, 1) if matched else s
        if not matched:
            problems.append(f"{path}: could not apply -> {old[:60]!r}")
        elif s2 != s:
            s, changed = s2, True
    if changed:
        write(path, s)
    print(("fixed   " if changed else "ok      ") + path)

# 1. The data file: keep only the first copy if a heredoc pasted it several times
p = 'src/data/portfolioData.ts'
lines = read(p).split('\n')
cut = next((i for i, l in enumerate(lines) if l.startswith('EOF')), None)
if cut is not None:
    write(p, '\n'.join(lines[:cut]).rstrip() + '\n')
    print('fixed   ' + p + f' (removed pasted duplicates after line {cut})')
s = read(p)
if s.count('export const PERSONAL_INFO') != 1 or 'Hugh (Hieu) Le' not in s:
    problems.append(p + ': not the new version, re-run the data heredoc on its own')
else:
    apply(p, [
        ("combined the uploads with RxSwift", r"'(?:Fixed failures from concurrent frame uploads|Uploaded liveness frames concurrently and used a DispatchGroup)[^\n]*?',",
         "'Uploaded liveness frames concurrently and combined the uploads with RxSwift\\\\'s zip, so verification started only after every frame had uploaded, fixing failures caused by verifying with missing frames.',", True),
        ("'RxSwift & Concurrency'", "'Client Rollouts', 'Concurrency']", "'Client Rollouts', 'RxSwift & Concurrency']", False),
    ])

# 2. Files written in full (small, so rewriting is simplest)
FILES = {
  'src/types.ts': r'''export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: 'ml-systems' | 'computer-vision' | 'machine-learning' | 'backend';
  tags: string[];
  summary: string;
  highlights: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  architectureHighlights?: string[];
  problemStatement?: string;
  solution?: string;
}

export interface UpcomingProject {
  id: string;
  title: string;
  codename: string;
  domain: 'Agentic AI' | 'ML Systems' | 'Computer Vision' | 'On-Device AI';
  timeline: string;
  status: 'Planned' | 'Architecture Design' | 'In Prototyping' | 'Active Research' | 'Benchmarking';
  progress: number;
  executiveSummary: string;
  problemStatement: string;
  architectureDetails: string[];
  keyInnovations: string[];
  techStack: string[];
  hiringTeamTakeaway: string;
  milestones: {
    title: string;
    completed: boolean;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  summary?: string;
  bullets: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    years?: string;
    iconName?: string;
  }[];
}

export interface ReferenceItem {
  name: string;
  title: string;
  company: string;
  email: string;
  quote: string;
}
''',
  'src/components/RoadmapSection.tsx': r'''import { UPCOMING_PROJECTS } from '../data/portfolioData';
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
''',
  'src/utils/resumeText.ts': r'''import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  WORK_EXPERIENCE,
  SHIPPED_PROJECTS,
  REFERENCE
} from '../data/portfolioData';

// Builds the plain-text resume from the same data the site renders,
// so the copied resume can never drift out of sync with the page.
export function buildResumeText(): string {
  const education = EDUCATION_DATA.map((e) =>
    [
      `${e.institution}, ${e.location}`,
      `${e.degree} (${e.period})`,
      e.coursework?.length ? `Coursework: ${e.coursework.join(', ')}` : ''
    ].filter(Boolean).join('\n')
  ).join('\n\n');

  const experience = WORK_EXPERIENCE.map((x) =>
    [`${x.company} (${x.location}) — ${x.role} (${x.period})`, ...x.bullets.map((b) => `- ${b}`)].join('\n')
  ).join('\n\n');

  const projects = SHIPPED_PROJECTS.map((p) => {
    const link = p.liveUrl ?? p.githubUrl;
    return `- ${p.title} (${p.year}): ${p.tags.join(', ')}${link ? ` (${link.replace(/^https?:\/\//, '')})` : ''}`;
  }).join('\n');

  return `
${PERSONAL_INFO.name}
${PERSONAL_INFO.location} · ${PERSONAL_INFO.email} · ${PERSONAL_INFO.linkedin} · ${PERSONAL_INFO.github} · ${PERSONAL_INFO.phoneDisplay}

Profile
${PERSONAL_INFO.bio}

Education
${education}

Work Experience
${experience}

Selected Projects
${projects}

Reference
${REFERENCE.name}, ${REFERENCE.title}, ${REFERENCE.company}
`.trim();
}
''',
  'src/index.css': r'''@import "tailwindcss";

/*
  Theme: "Verified" — a cool, light theme drawn from identity verification.
  The components use Tailwind colour names (slate, emerald, cyan...). Instead of
  editing ~400 class names across every component, we redefine what those names
  mean here. Tailwind v4 builds every utility from these CSS variables, so this
  one file re-skins the whole site.

  slate is inverted: slate-950 (used for page backgrounds) becomes the lightest
  tone and slate-100 (used for text) becomes the darkest, so a dark layout turns
  into a light one without touching its structure.
*/
@theme {
  --font-sans: 'Schibsted Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;

  /* Neutrals: cool grey-blue, like the guilloche print on an ID card */
  --color-slate-950: #f3f5f7; /* page */
  --color-slate-900: #ffffff; /* cards and panels */
  --color-slate-800: #dce1e7; /* borders, tracks */
  --color-slate-700: #c3cad2;
  --color-slate-600: #9aa4ae;
  --color-slate-500: #6a7682; /* small labels, 4.5:1 on white */
  --color-slate-400: #56626e; /* secondary text */
  --color-slate-300: #36424e; /* body text */
  --color-slate-200: #26313c;
  --color-slate-100: #1a242e;
  --color-white: #121a23;     /* headings: ink, not pure black */

  /* Accent: ultramarine, replacing the old green everywhere it was used */
  --color-emerald-300: #1f2890; /* hover: darker on a light page */
  --color-emerald-400: #2f3bbf; /* links, active pills, icons */
  --color-emerald-500: #3c49d6; /* tints at /10–/30 */
  --color-emerald-600: #2530a0;

  /* Secondary hues collapse into the same family so the page stays calm */
  --color-teal-300: #4a56d9;
  --color-cyan-300: #3c49d6;
  --color-cyan-400: #2f3bbf;
  --color-blue-400: #2f3bbf;
  --color-blue-500: #6f7be6;

  --shadow-lg: 0 6px 16px -8px rgb(18 26 35 / 0.12);
  --shadow-xl: 0 12px 28px -14px rgb(18 26 35 / 0.16);
}

@layer base {
  body {
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }

  code, pre, .font-mono {
    font-family: var(--font-mono);
  }

  h1, h2, h3 {
    letter-spacing: -0.02em;
  }

  :focus-visible {
    outline: 2px solid var(--color-emerald-400);
    outline-offset: 2px;
  }
}

/*
  The one bold element: the flash sequence. Flash liveness checks project a
  short sequence of colours onto the user's face and read the reflection.
  This strip along the top of the hero is that sequence.
*/
#hero::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 6px;
  background: linear-gradient(
    90deg,
    #19b4d2 0 25%,
    #d63a8a 25% 50%,
    #f0b429 50% 75%,
    #2f3bbf 75% 100%
  );
}

/* Printing the resume: restore real white paper and black ink */
@media print {
  :root {
    --color-white: #ffffff;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #f3f5f7;
}
::-webkit-scrollbar-thumb {
  background: #c3cad2;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #9aa4ae;
}
''',
}
for path, content in FILES.items():
    if not os.path.exists(path) or read(path) != content:
        write(path, content); print('fixed   ' + path)
    else:
        print('ok      ' + path)

# 3. Components
apply('src/App.tsx', [
    ('RoadmapSection', "import { ProjectShowcase } from './components/ProjectShowcase';",
     "import { ProjectShowcase } from './components/ProjectShowcase';\nimport { RoadmapSection } from './components/RoadmapSection';", False),
    ('<RoadmapSection />', '<ProjectShowcase />', '<ProjectShowcase />\n\n        <RoadmapSection />', False),
])
apply('src/components/Navbar.tsx', [
    ('Compass', r"Layers\s*\n\} from 'lucide-react';", "Layers,\n  Compass\n} from 'lucide-react';", True),
    ('#roadmap', "{ name: 'Projects', href: '#projects', icon: Code2 },",
     "{ name: 'Projects', href: '#projects', icon: Code2 },\n    { name: 'Roadmap', href: '#roadmap', icon: Compass },", False),
])
apply('src/components/Hero.tsx', [
    ("'0.876 F1'", r"const keyMetrics = \[.*?\];", """const keyMetrics = [
    { value: '6+ Yrs', label: 'Shipping to Real Customers', sublabel: 'Identity verification, fintech, healthcare' },
    { value: '1M+', label: 'Customers Protected', sublabel: 'On-device liveness, 99% accuracy' },
    { value: '10+', label: 'Banks', sublabel: 'Using my iOS liveness frameworks' },
    { value: '0.876 F1', label: 'Cancer Detection', sublabel: 'On patients the model never saw' }
  ];""", True),
    ('Forward Deployed Engineer roles', 'Open for SWE & AI/ML Engineering Roles', 'Open to AI, ML & Forward Deployed Engineer roles', False),
    ('{PERSONAL_INFO.subheadline}', r'(<p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">).*?(</p>)',
     r"\1\n              {PERSONAL_INFO.subheadline}\n            \2", True),
    ('On-Device Computer Vision (iOS liveness', '"Production ML Lifecycles (FastAPI, Docker, scikit-learn)"', '"On-Device Computer Vision (iOS liveness, 10+ banks)"', False),
    ('Leakage-Aware Evaluation (PyTorch)', '"Deep Learning & Computer Vision (PyTorch, 0.90 F1)"', '"Deep Learning with Leakage-Aware Evaluation (PyTorch)"', False),
    ('Production ML Services (FastAPI, Docker, CI/CD)', '"Distributed Fintech & Scalable Microservices (5+ yrs)"', '"Production ML Services (FastAPI, Docker, CI/CD)"', False),
    ('Available full-time from Nov 2026', '"Ready for immediate hire / interviews"', '"Available full-time from Nov 2026"', False),
    (None if 'curl</span>' in read('src/components/Hero.tsx') else 'const keyMetrics', r'<div>\s*<span className="text-slate-500">\$</span>\{\' \'\}\s*<span className="text-emerald-300">curl</span>.*?(<div className="pt-2 border-t)', r"\1", True),
    ('Reference: Senior SWE, Atlassian', 'Verified Atlassian Senior SWE Ref', 'Reference: Senior SWE, Atlassian', False),
    ('Details &rarr;', 'Read Quote &rarr;', 'Details &rarr;', False),
    ('Email Hugh', '<span>Email Hieu</span>', '<span>Email Hugh</span>', False),
])
apply('src/components/AboutSection.tsx', [
    ('Six years shipping software', 'Bridging 5 years of battle-tested software engineering with advanced academic research in machine learning, computer vision, and autonomous systems.',
     'Six years shipping software to real customers in banking identity verification, fintech and healthcare, now applied to machine learning.', False),
    ('PERSONAL_INFO.bio', r'(<div className="space-y-4 text-sm leading-relaxed text-slate-300">).*?(</div>)',
     r"\1\n                {PERSONAL_INFO.bio.split('\\n\\n').map((para) => (\n                  <p key={para.slice(0, 24)}>{para}</p>\n                ))}\n              \2", True),
    ('On-Device Computer Vision (iOS)', 'End-to-End ML Lifecycle (Offline to Online)', 'On-Device Computer Vision (iOS)', False),
    ('Leakage-Aware ML Evaluation', 'Robust CI/CD Pipelines & Dockerized APIs', 'Leakage-Aware ML Evaluation', False),
    ('Production ML Services (FastAPI, Docker)', 'High-Security Biometrics & Fintech Systems', 'Production ML Services (FastAPI, Docker)', False),
    ('Client-Facing Delivery with Banks', 'Clean MVVM Architecture & Reusable SDKs', 'Client-Facing Delivery with Banks', False),
    ('<span>REFERENCE</span>', '<span>INDUSTRY REFERENCE</span>', '<span>REFERENCE</span>', False),
    ('<p className="text-sm text-slate-200 leading-relaxed mb-4">', r'<blockquote className="text-sm italic text-slate-200 leading-relaxed mb-4">\s*"\{REFERENCE\.quote\}"\s*</blockquote>',
     '<p className="text-sm text-slate-200 leading-relaxed mb-4">\n                {REFERENCE.quote}\n              </p>', True),
    ('Available on request', r'<a\s*href=\{`mailto:\$\{REFERENCE\.email\}`\}.*?</a>',
     """{REFERENCE.email ? (
                  <a
                    href={`mailto:${REFERENCE.email}`}
                    className="text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    <span>{REFERENCE.email}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-400">Available on request</span>
                )}""", True),
    ('Awards & Community', '<span>Leadership & Community</span>', '<span>Awards & Community</span>', False),
    ('<div className="space-y-3">', r"(\{LEADERSHIP_ACTIVITIES\.map\(\(act\) => \(.*?\)\)\})", r'<div className="space-y-3">\n              \1\n              </div>', True),
])
apply('src/components/ResumeModal.tsx', [
    ('buildResumeText()', r"const resumePlainText = `.*?`\.trim\(\);", "const resumePlainText = buildResumeText();", True),
    ("from '../utils/resumeText'", "import { useState } from 'react';", "import { buildResumeText } from '../utils/resumeText';\nimport { useState } from 'react';", False),
    ('{PERSONAL_INFO.name}', r'(\n\s*)Hieu Le(\n)', r"\1{PERSONAL_INFO.name}\2", True),
    ('{PERSONAL_INFO.availability}', r'Software Engineer with 5 years of experience building and shipping production applications.*?Seeking Software Engineering, Machine Learning Engineering, or AI Engineering opportunities\.',
     "{PERSONAL_INFO.subheadline} {PERSONAL_INFO.availability}.", True),
    ('SKILL_CATEGORIES.map', r'(<div className="text-xs text-slate-300 space-y-1 leading-relaxed">)\s*<p><strong className="text-white">Programming:</strong>.*?(</div>)',
     r"""\1
              {SKILL_CATEGORIES.map((cat) => (
                <p key={cat.title}>
                  <strong className="text-white">{cat.title}:</strong> {cat.skills.map((s) => s.name).join(', ')}
                </p>
              ))}
            \2""", True),
    ("'Available on request'", '<p className="font-mono text-slate-400 mt-0.5">Email: {REFERENCE.email}</p>',
     '<p className="font-mono text-slate-400 mt-0.5">{REFERENCE.email ? `Email: ${REFERENCE.email}` : \'Available on request\'}</p>', False),
    ('<p className="mt-1 text-slate-300 leading-relaxed">{REFERENCE.quote}</p>', r'<p className="mt-1 text-slate-300 leading-relaxed italic">\s*"\{REFERENCE\.quote\}"\s*</p>',
     '<p className="mt-1 text-slate-300 leading-relaxed">{REFERENCE.quote}</p>', True),
])
apply('src/components/Footer.tsx', [
    ('{PERSONAL_INFO.headline}', 'Hieu Le &bull; Software Engineer & AI Systems &bull; Melbourne, VIC',
     '{PERSONAL_INFO.name} &bull; {PERSONAL_INFO.headline} &bull; Melbourne, VIC', False),
])
apply('src/components/ExperienceTimeline.tsx', [
    ('Six years shipping to real customers', '5 years of production software engineering across Singapore and U.S. teams, driving measurable business results in fintech trading, biometric security, and health insurance.',
     'Six years shipping to real customers across Singapore and U.S. teams: on-device identity verification for banks, a crypto exchange, and a healthcare insurance app.', False),
])

# 4. index.html: title, link previews and fonts
DESC = 'Hugh (Hieu) Le — engineer who ships AI to real devices and real customers. Six years in banking identity verification, fintech and healthcare; Master of AI, RMIT.'
apply('index.html', [
    ('ML & AI Engineer, Melbourne</title>', r'<title>.*?</title>', '<title>hieu.le | ML & AI Engineer, Melbourne</title>', True),
    ('content="hieu.le | ML', r'(<meta property="og:title" content=")[^"]*(")', r'\1hieu.le | ML & AI Engineer, Melbourne\2', True),
    ('<meta name="description" content="Hugh', r'(<meta name="description" content=")[^"]*(")', r'\g<1>' + DESC + r'\2', True),
    ('<meta property="og:description" content="Hugh', r'(<meta property="og:description" content=")[^"]*(")', r'\g<1>' + DESC + r'\2', True),
    ('Schibsted', r'family=JetBrains\+Mono[^"]*?display=swap', 'family=IBM+Plex+Mono:wght@400;500;600&family=Schibsted+Grotesk:wght@400;500;600;700;800&display=swap', True),
])

print()
if problems:
    print('Needs attention:')
    for x in problems: print('  - ' + x)
else:
    print('All done. Now run: npx tsc --noEmit && npm run build')
