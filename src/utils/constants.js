// The portfolio site derives its facts from cvData.js (the CV generator's data)
// so the two never contradict each other. Only presentational-only extras that
// don't correspond to a CV fact (category labels, short display badges) are
// hand-curated here.
import { cvData } from '../data/cvData';
import { resolveByProfile } from './cvSectionOrder';

const EN = 'en';
const SITE_PROFILE = 'vision'; // default profile used when flattening profile-dependent CV fields for the site

const utbm = cvData.education[EN][0];
const isj = cvData.education[EN][1];

export const personalInfo = {
  name: cvData.personalInfo[EN][0].name,
  role: 'Engineering Student | Computer Vision & Robotics @ UTBM | Full Stack Developer',
  tagline:
    'Full-stack developer (Java/Spring Boot, Angular/React) specializing in Computer Vision and Robotics at UTBM — seeking a 2027 internship in France.',
  school: `UTBM, ${utbm.location} — exchange ${utbm.period.replace(/\s/g, '')} · ${isj.institution}, ${isj.location}`,
  email: cvData.personalInfo[EN][0].email,
  phone: cvData.personalInfo[EN][0].phone,
  location: cvData.personalInfo[EN][0].location,
  linkedin: `https://www.${cvData.personalInfo.linkedin}`,
  github: `https://${cvData.personalInfo.github}`,
  gitlab: `https://${cvData.personalInfo.gitlab}`,
};

const internshipsCount = cvData.experience[EN].filter((e) => e.type === 'internship').length;
const technologiesCount = new Set(
  Object.values(cvData.skills).flat().map((s) => s.name)
).size;

export const stats = [
  { label: 'Years Study', value: '4+' },
  { label: 'Projects', value: `${cvData.projects[EN].length}` },
  { label: 'Technologies', value: `${technologiesCount}+` },
  { label: 'Internships', value: `${internshipsCount}` },
];

// Only entries flagged for the site (includeInCV: false keeps GCE out of the CV,
// but it still belongs on the site's education timeline).
export const education = cvData.education[EN].map((edu) => ({
  degree: edu.title,
  institution: edu.institution,
  period: edu.period,
  location: edu.location,
}));

const EXPERIENCE_TYPE_LABELS = {
  internship: 'Internship',
  freelance: 'Freelance',
};

export const experience = cvData.experience[EN].map((exp) => {
  const responsibilities = resolveByProfile(exp.responsibilities, SITE_PROFILE);
  return {
    title: exp.title,
    company: exp.company,
    period: exp.period,
    description: responsibilities[0],
    type: EXPERIENCE_TYPE_LABELS[exp.type] || 'Internship',
  };
});

export const activities = cvData.extracurricular[EN].map(
  (a) => `${a.role} - ${a.organization}`
);

export const interests = cvData.interests[EN];

// General site skill set — identical shape/content to the CV's general skills.
export const skills = cvData.skills;

const SHORT_LANGUAGE_LEVELS = {
  French: 'Native',
  English: 'Fluent',
};

export const spokenLanguages = cvData.languagesSpoken[EN].map((lang) => ({
  name: lang.name,
  level: SHORT_LANGUAGE_LEVELS[lang.name] || lang.level,
}));

// Presentational-only category label per project id — not a CV fact, so it
// isn't part of cvData.js.
const PROJECT_TYPE_LABELS = {
  'basic-cv': 'Computer Vision',
  'task-management': 'Full Stack',
  immunization: 'Full Stack',
  'ticket-tracker': 'Full Stack',
  dijkstra: 'Algorithm',
  banking: 'Full Stack',
  'online-shopping': 'Full Stack',
  'football-uml': 'Modelling',
  seruca: 'AI / Full Stack',
  retailcloud: 'Full Stack / DevOps',
  'sji-btp-g7': 'School Project',
  'sji-web-g3': 'School Project',
  tictactoe: 'Game',
  'portfolio-site': 'Full Stack',
  daj: 'Personal',
};

// basic_computer_vision and seruca are featured first, per the UTBM positioning.
const FEATURED_PROJECT_IDS = [
  'basic-cv',
  'seruca',
  'task-management',
  'immunization',
  'tictactoe',
  'dijkstra',
  'portfolio-site',
];

const mapProject = (p) => ({
  title: p.name,
  description: resolveByProfile(p.highlights, SITE_PROFILE).join(' '),
  technologies: p.tech,
  type: PROJECT_TYPE_LABELS[p.id] || 'Project',
  featured: FEATURED_PROJECT_IDS.includes(p.id) || undefined,
  github: p.github,
});

const projectsById = Object.fromEntries(cvData.projects[EN].map((p) => [p.id, p]));

export const featuredProjects = FEATURED_PROJECT_IDS.map((id) => mapProject(projectsById[id]));

export const allProjects = [
  ...featuredProjects,
  ...cvData.projects[EN]
    .filter((p) => !FEATURED_PROJECT_IDS.includes(p.id))
    .map(mapProject),
];

export const services = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web application development using modern frameworks and technologies',
    technologies: ['React', 'Angular', 'Spring Boot', 'Node.js', 'MySQL', 'MongoDB'],
    icon: '💻',
  },
  {
    title: 'Web & Mobile Development',
    description: 'Responsive and cross-platform applications for web and mobile devices',
    technologies: ['React', 'Angular', 'HTML5', 'CSS3', 'JavaScript'],
    icon: '📱',
  },
  {
    title: 'Database Design & Management',
    description: 'Efficient database architecture, optimization, and management solutions',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'NoSQL'],
    icon: '🗄️',
  },
  {
    title: 'IT Support & Network Administration',
    description: 'Technical support, network setup, and system administration services',
    technologies: ['Networking', 'System Administration', 'Troubleshooting'],
    icon: '🔧',
  },
  {
    title: 'Code Review & Consultation',
    description: 'Professional code review, architecture consultation, and best practices guidance',
    technologies: ['Code Quality', 'Best Practices', 'Architecture'],
    icon: '🔍',
  },
  {
    title: 'Technical Training & Mentoring',
    description: 'One-on-one mentoring and training in software development and programming',
    technologies: ['Teaching', 'Mentoring', 'Training'],
    icon: '👨‍🏫',
  },
];

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];
