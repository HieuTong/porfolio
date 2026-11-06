import {
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
