// Centralized CV data configuration
export const cvData = {
  personalInfo: {
    en: [
      {
        name: 'Junior Donfack Assobjio',
        title: 'Software Engineering Student | Full Stack Developer',
        email: 'Juniorasobijo@gmail.com',
        phone: '+237 652 800 389',
        location: 'Yaounde, Cameroon',
      },
    ],
    fr: [
      {
        name: 'Junior Donfack Assobjio',
        title: 'Étudiant en Génie Logiciel | Développeur Full Stack',
        email: 'Juniorasobijo@gmail.com',
        phone: '+237 652 800 389',
        location: 'Yaoundé, Cameroon',
      },
    ],
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

  education: {
    en: [
      {
        title: 'Master of Science in Software Engineering (Year 4)',
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
    fr: [
      {
        title: 'Master en Génie Logiciel (Année 4)',
        institution: 'Saint Jean Ingénieur',
        location: 'Yaoundé, Cameroun',
        period: '2022 - 2027',
        highlights: [
          'Spécialisation en Développement Full Stack',
          'Focus sur l\'Architecture Logicielle et la Gestion de Bases de Données',
        ],
      },
      {
        title: 'GCE Advanced Level',
        institution: 'NESCAS',
        location: 'Cameroun',
        period: '2019 - 2021',
        highlights: [],
      },
    ],
  },

  experience: {
    en: [
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
        title: 'School Maintenance Staff',
        company: 'Saint Jean Ingénieur',
        location: 'Yaoundé, Cameroon',
        period: '2024 - Present',
        responsibilities: ['Weekly classroom maintenance and sanitation'],
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
        title: 'IT Intern (Support and Maintenance)',
        company: 'OG/OLABS - Octal Academy',
        location: 'Yaoundé, Cameroon',
        period: 'November 2021 - February 2022',
        responsibilities: [
          'Assistance in deployment and configuration of basic network equipment and protocols',
          'Software installation, updates, and license management',
          'Backup and data recovery operations',
          'Security patch management and antivirus deployment',
        ],
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
    fr: [
      {
        title: 'Assistant Informatique',
        company: 'JD SARL',
        location: 'Yaoundé, Cameroun',
        period: 'Juillet - Août 2025',
        responsibilities: [
          'Conception et mise en œuvre de l\'infrastructure réseau de l\'entreprise',
          'Support technique quotidien et maintenance des systèmes',
          'Développement d\'une application de gestion des tâches en tant que développeur Full Stack',
          'Résolution de problèmes matériels et logiciels pour plus de 20 employés',
        ],
      },
      {
        title: 'Personnel d\'Entretien Scolaire',
        company: 'Saint Jean Ingénieur',
        location: 'Yaoundé, Cameroun',
        period: '2024 - Présent',
        responsibilities: ['Entretien et assainissement hebdomadaire des salles de classe'],
      },
      {
        title: 'Assistant Commercial',
        company: 'SOTICAM',
        location: 'Yaoundé, Cameroun',
        period: 'Juin - Août 2023',
        responsibilities: [
          'Gestion des commandes clients et des opérations d\'inventaire quotidiennes',
          'Support aux équipes de vente avec des campagnes promotionnelles',
          'Engagement avec les clients pour identifier les besoins spécifiques',
        ],
      },
      {
        title: 'Stagiaire Informatique (Support et Maintenance)',
        company: 'OG/OLABS - Octal Academy',
        location: 'Yaoundé, Cameroun',
        period: 'Novembre 2021 - Février 2022',
        responsibilities: [
          'Aide au déploiement et à la configuration des équipements réseaux de base et protocoles',
          'Installation de logiciels, mises à jour et gestion des licences',
          'Opérations de sauvegarde et récupération de données',
          'Gestion des correctifs de sécurité et déploiement d\'antivirus',
        ],
      },
      {
        title: 'Artisan Menuisier & Ventes',
        company: 'Travailleur Indépendant',
        location: 'Yaoundé, Cameroun',
        period: 'Saisonnier (Vacances)',
        responsibilities: [
          'Conception et fabrication de meubles sur mesure',
          'Consultation client et gestion des ventes',
        ],
      },
    ],
  },

  projects: {
    en: [
      {
        id: 'task-management',
        name: 'Task Management Application',
        tech: ['HTML', 'CSS', 'JavaScript'],
        role: 'Full Stack Developer',
        description: 'Enterprise task management app with creation, assignment, follow-up, and delivery confirmation',
        github: 'https://github.com/donjunior01/taskManagement-',
      },
      {
        id: 'immunization',
        name: 'Immunization Management System',
        tech: ['SCSS', 'Angular', 'Java'],
        role: 'Full Stack Developer',
        description: 'Group healthcare app for disease and vaccination tracking with patient records and schedules',
        github: 'https://github.com/donjunior01/Immunization-Management-Sytem-group5-project-',
      },
      {
        id: 'ticket-tracker',
        name: 'Ticket Tracker',
        tech: ['JavaScript', 'HTML', 'CSS'],
        role: 'Full Stack Developer',
        description: 'Single-screen application to manage and track support tickets',
        github: 'https://github.com/donjunior01/TicketTracker',
      },
      {
        id: 'dijkstra',
        name: 'Dijkstra Visualisation',
        tech: ['Python'],
        role: 'Individual Developer',
        description: "Interactive visualisation of Dijkstra's shortest-path algorithm on weighted graphs",
        github: 'https://github.com/donjunior01/dijkstra_virsualisation',
      },
      {
        id: 'tictactoe',
        name: 'Tic-Tac-Toe (SDL2)',
        tech: ['C++', 'SDL2'],
        role: 'Individual Developer',
        description: 'Advanced SDL2 Tic-Tac-Toe game with multiple board sizes and AI opponents',
        github: 'https://github.com/donjunior01/dl2-tic-tac-toe',
      },
    ],
    fr: [
      {
        id: 'task-management',
        name: 'Application de Gestion des Tâches',
        tech: ['HTML', 'CSS', 'JavaScript'],
        role: 'Développeur Full Stack',
        description: "Application de gestion des tâches d'entreprise avec création, suivi et confirmation de livraison",
        github: 'https://github.com/donjunior01/taskManagement-',
      },
      {
        id: 'immunization',
        name: 'Système de Gestion de la Vaccination',
        tech: ['SCSS', 'Angular', 'Java'],
        role: 'Développeur Full Stack',
        description: 'Application de santé pour la gestion des maladies et le suivi des vaccinations avec dossiers patients',
        github: 'https://github.com/donjunior01/Immunization-Management-Sytem-group5-project-',
      },
      {
        id: 'ticket-tracker',
        name: 'Suivi de Tickets',
        tech: ['JavaScript', 'HTML', 'CSS'],
        role: 'Développeur Full Stack',
        description: 'Application monopage pour la gestion et le suivi des tickets de support',
        github: 'https://github.com/donjunior01/TicketTracker',
      },
      {
        id: 'dijkstra',
        name: 'Visualisation Dijkstra',
        tech: ['Python'],
        role: 'Développeur Individuel',
        description: "Visualisation interactive de l'algorithme du plus court chemin de Dijkstra sur des graphes pondérés",
        github: 'https://github.com/donjunior01/dijkstra_virsualisation',
      },
      {
        id: 'tictactoe',
        name: 'Tic-Tac-Toe (SDL2)',
        tech: ['C++', 'SDL2'],
        role: 'Développeur Individuel',
        description: "Jeu de morpion avancé avec SDL2, plusieurs tailles de plateau et adversaires IA",
        github: 'https://github.com/donjunior01/dl2-tic-tac-toe',
      },
    ],
  },

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
      { name: 'SQLite', level: 80 },
      { name: 'NoSQL', level: 70 },
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'VS Code', level: 90 },
      { name: 'IntelliJ IDEA', level: 80 },
      { name: 'Eclipse', level: 75 },
      { name: 'Figma', level: 75 },
      { name: 'Adobe XD', level: 70 },
      { name: 'WordPress', level: 80 },
    ],
    competencies: [
      { name: 'Full Stack Development', level: 85 },
      { name: 'Web Development', level: 85 },
      { name: 'Mobile Development', level: 75 },
      { name: 'Database Management', level: 80 },
      { name: 'Network Administration', level: 75 },
      { name: 'IT Support', level: 80 },
      { name: 'Trello', level: 85 },
    ],
  },

  languagesSpoken: {
    en: [
      { name: 'French', level: 'Native' },
      { name: 'English', level: 'Fluent' },
    ],
    fr: [
      { name: 'Français', level: 'Langue Maternelle' },
      { name: 'Anglais', level: 'Courant' },
    ],
  },

  certifications: {
    en: [
      {
        name: 'Touch Typing Certificate',
        issuer: 'Typing.com',
        date: null,
      },
    ],
    fr: [
      {
        name: 'Certificat de Dactylographie',
        issuer: 'Typing.com',
        date: null,
      },
    ],
  },

  interests: {
    en: ['Reading', 'Music', 'Photography', 'Sports', 'Hiking', 'Language Learning'],
    fr: ['Lecture', 'Musique', 'Photographie', 'Sports', 'Randonnée', 'Apprentissage des Langues'],
  },

  extracurricular: {
    en: [
      {
        role: 'Events Manager',
        organization: 'School Sports Board, Saint Jean Ingénieur',
        description: 'Organize and coordinate university sporting events',
      },
    ],
    fr: [
      {
        role: 'Gestionnaire d\'Événements',
        organization: 'Conseil Sportif de l\'École, Saint Jean Ingénieur',
        description: 'Organiser et coordonner les événements sportifs universitaires',
      },
    ],
  },
};

export default cvData;