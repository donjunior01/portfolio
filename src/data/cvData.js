// Centralized CV data configuration
export const cvData = {
  personalInfo: {
    name: 'Junior Donfack Assobjio',
    title: 'Software Engineering Student | Full Stack Developer',
    email: 'Juniorasobijo@gmail.com',
    phone: '+237 652 800 389',
    location: 'Yaoundé, Cameroon',
    linkedin: 'linkedin.com/in/junior-donfack-assobjio-905bb72b5/',
    github: 'github.com/donjunior01',
    gitlab: 'gitlab.com/donjunior01',
    website: 'donjunior01.github.io/portfolio',
    photoUrl: null, // Optional - can be added later
  },

  summary: {
    en: 'Passionate Software Engineering student with hands-on experience in Full Stack Development and IT Support. Skilled in building scalable web applications, managing databases, and network administration. Aspiring to contribute to innovative projects in machine learning, robotics, and cryptography.',
    fr: 'Étudiant passionné en génie logiciel avec une expérience pratique en développement Full Stack et support informatique. Compétent dans la création d\'applications web évolutives, la gestion de bases de données et l\'administration réseau. Aspirant à contribuer à des projets innovants en apprentissage automatique, robotique et cryptographie.',
  },

  education: [
    {
      title: 'Bachelor of Science in Software Engineering (Year 4)',
      institution: 'Saint Jean Ingénieur',
      location: 'Yaoundé, Cameroon',
      period: '2022 - 2027',
      highlights: [
        'Specialization in Full Stack Development',
        'Focus on Software Architecture and Database Management',
      ],
    },
    {
      title: 'GCE Advanced Level',
      institution: 'NESCAS',
      location: 'Cameroon',
      period: '2019 - 2021',
      highlights: [],
    },
  ],

  experience: [
    {
      title: 'IT Assistant',
      company: 'JD SARL',
      location: 'Yaoundé, Cameroon',
      period: 'July - August 2025',
      responsibilities: [
        'Designed and implemented company-wide network infrastructure',
        'Provided daily technical support and system maintenance',
        'Developed task management application as Full Stack developer',
        'Troubleshot hardware and software issues for 20+ employees',
      ],
    },
    {
      title: 'Commercial Assistant',
      company: 'SOTICAM',
      location: 'Yaoundé, Cameroon',
      period: 'June - August 2023',
      responsibilities: [
        'Managed customer orders and daily inventory operations',
        'Supported sales teams with promotional campaigns',
        'Engaged with clients to identify specific needs',
      ],
    },
    {
      title: 'School Maintenance Staff',
      company: 'Saint Jean Ingénieur',
      location: 'Yaoundé, Cameroon',
      period: '2024 - Present',
      responsibilities: ['Weekly classroom maintenance and sanitation'],
    },
    {
      title: 'Furniture Craftsman & Sales',
      company: 'Self-Employed',
      location: 'Yaoundé, Cameroon',
      period: 'Seasonal (Holidays)',
      responsibilities: [
        'Custom furniture design and fabrication',
        'Client consultation and sales management',
      ],
    },
  ],

  projects: [
    {
      id: 'real-estate',
      name: 'Real Estate Management System',
      tech: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
      role: 'Full Stack Developer',
      description: 'Complete property management platform with dynamic UI and database integration',
    },
    {
      id: 'agricultural',
      name: 'Agricultural Management Website',
      tech: ['Angular', 'Java', 'Spring Boot'],
      role: 'Full Stack Developer',
      description: 'Web platform for crop tracking and resource management',
    },
    {
      id: 'hotel',
      name: 'Hotel Management System',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      role: 'Full Stack Developer',
      description: 'Complete reservation and management system with responsive design',
    },
    {
      id: 'immunization',
      name: 'Immunization Management System',
      tech: ['Angular', 'Java'],
      role: 'Full Stack Developer',
      description: 'Patient vaccination tracking with calendar integration',
    },
    {
      id: 'task-management',
      name: 'Task Management Application',
      tech: ['Java'],
      role: 'Individual Developer',
      description: 'Personal productivity application with intuitive interface',
    },
  ],

  skills: {
    languages: [
      { name: 'Java', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
    ],
    frameworks: [
      { name: 'React', level: 85 },
      { name: 'Angular', level: 80 },
      { name: 'Spring Boot', level: 75 },
      { name: 'Node.js', level: 80 },
    ],
    databases: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'NoSQL', level: 70 },
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'VS Code', level: 90 },
      { name: 'IntelliJ IDEA', level: 80 },
      { name: 'Eclipse', level: 75 },
    ],
    competencies: [
      { name: 'Full Stack Development', level: 85 },
      { name: 'Web Development', level: 85 },
      { name: 'Mobile Development', level: 75 },
      { name: 'Database Management', level: 80 },
      { name: 'Network Administration', level: 75 },
      { name: 'IT Support', level: 80 },
    ],
  },

  languagesSpoken: [
    { name: 'French', level: 'Native' },
    { name: 'English', level: 'Fluent' },
  ],

  certifications: [
    {
      name: 'Touch Typing Certificate',
      issuer: 'Typing.com',
      date: null,
    },
  ],

  interests: ['Reading', 'Music', 'Photography', 'Sports', 'Hiking', 'Language Learning'],

  extracurricular: [
    {
      role: 'Events Manager',
      organization: 'School Sports Board, Saint Jean Ingénieur',
      description: 'Organize and coordinate university sporting events',
    },
  ],
};

export default cvData;