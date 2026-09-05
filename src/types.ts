export interface Project {
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
  domain: 'Agentic AI' | 'Graph ML & Fintech' | 'Robotics & Vision' | 'MLOps & Systems';
  timeline: string;
  status: 'In Prototyping' | 'Architecture Design' | 'Active Research' | 'Benchmarking';
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
