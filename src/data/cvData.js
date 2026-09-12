// Centralized CV data configuration
export const cvData = {
  personalInfo: {
    en: [
      {
        name: 'Junior Donfack Assobjio',
        titles: {
          vision: 'Computer Science Engineering Student — Computer Vision & Robotics',
          software: 'Computer Science Engineering Student — Software Engineering & Full-Stack Development',
        },
        email: 'Juniorasobijo@gmail.com',
        phone: '+33 7 58 78 09 26',
        location: 'Belfort, France',
      },
    ],
    fr: [
      {
        name: 'Junior Donfack Assobjio',
        titles: {
          vision: 'Élève-ingénieur en informatique — Vision artificielle & robotique',
          software: 'Élève-ingénieur en informatique — Génie logiciel & développement full-stack',
        },
        email: 'Juniorasobijo@gmail.com',
        phone: '+33 7 58 78 09 26',
        location: 'Belfort, France',
      },
    ],
    // Surname-first, all-caps surname formatting for the CV header, per French CV convention
    formalName: 'DONFACK ASSOBJIO Junior',
    linkedin: 'linkedin.com/in/junior-donfack-assobjio',
    github: 'github.com/donjunior01',
    gitlab: 'gitlab.com/donjunior01',
    website: 'donjunior01.github.io/portfolio',
    photoUrl: null, // Optional - can be added later
  },

  summary: {
    en: 'Computer science engineering student with a full-stack background (Java/Spring Boot, Angular/React), now specializing in Computer Vision and Robotics at UTBM (Belfort, France). Built and shipped production back-end systems end-to-end, from secure REST APIs to multi-tenant SaaS architecture. Currently seeking a 2027 internship in France.',
    fr: 'Élève-ingénieur en informatique au parcours full-stack (Java/Spring Boot, Angular/React), aujourd\'hui en spécialisation vision par ordinateur et robotique à l\'UTBM (Belfort, France). A conçu et déployé des systèmes back-end de production, d\'API REST sécurisées à une architecture SaaS multi-tenant. Recherche activement un stage 2027 en France.',
  },

  education: {
    en: [
      {
        title: 'Exchange Program — Artificial Vision Specialty (Vision – Image Department)',
        institution: 'Université de Technologie de Belfort-Montbéliard (UTBM)',
        location: 'Belfort, France',
        period: '2026 - 2027',
        highlights: {
          vision: [
            'VA51 Image Processing — convolution, edge detection (Sobel, Canny), mathematical morphology, segmentation',
            'VA52 Pattern Recognition — convolutional neural networks, classification, transfer learning',
            'VA55 Vision-Based Control — camera calibration, pose estimation, visual servoing',
            'VA56 Mobile Robotics — ROS2, odometry, navigation, sensor fusion',
            'VA50 Computer Vision Project — full project, from dataset to deployed model',
          ],
          software: [
            'Computer vision curriculum covering image processing, pattern recognition, vision-based control, mobile robotics, and a capstone project (VA50–VA56)',
          ],
        },
      },
      {
        title: 'Cycle Ingénieur en Informatique, Option ISI EN — 4e Année Validée',
        institution: 'Institut Saint Jean',
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
        includeInCV: false,
      },
    ],
    fr: [
      {
        title: 'Programme d\'Échange — Filière Vision Artificielle (Catégorie Vision – Image)',
        institution: 'Université de Technologie de Belfort-Montbéliard (UTBM)',
        location: 'Belfort, France',
        period: '2026 - 2027',
        highlights: {
          vision: [
            'VA51 Traitement de l\'image — convolution, détection de contours (Sobel, Canny), morphologie mathématique, segmentation',
            'VA52 Reconnaissance des formes — réseaux de neurones convolutifs, classification, transfer learning',
            'VA55 Contrôle basé vision — calibration caméra, estimation de pose, asservissement visuel',
            'VA56 Robotique mobile — ROS2, odométrie, navigation, fusion de capteurs',
            'VA50 Projet Vision artificielle — projet complet, du jeu de données au modèle déployé',
          ],
          software: [
            'Cursus vision artificielle couvrant le traitement d\'image, la reconnaissance des formes, le contrôle basé vision, la robotique mobile et un projet de synthèse (VA50–VA56)',
          ],
        },
      },
      {
        title: 'Cycle Ingénieur en Informatique, Option ISI EN — 4e Année Validée',
        institution: 'Institut Saint Jean',
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
        includeInCV: false,
      },
    ],
  },

  experience: {
    en: [
      {
        title: 'Back-End Developer — Intern',
        company: 'Axe-Tech SARL',
        location: 'Douala, Cameroon (Remote)',
        period: 'May - August 2026',
        type: 'internship',
        project: 'Kamba — multi-tenant, OHADA-compliant business management SaaS for Cameroonian SMEs',
        responsibilities: {
          vision: [
            'Sole back-end developer: designed and shipped a secure, multi-tenant REST API (Spring Boot 3.3, Java 21, MySQL 8) with JWT + Argon2id authentication and a five-role RBAC model',
            'Built an OHADA/SYSCOHADA compliance module and deployed to a production Ubuntu VPS, following Scrum and UML modelling',
          ],
          software: [
            'Sole back-end developer: designed and implemented a secure REST API (Spring Boot 3.3, Java 21, MySQL 8)',
            'JWT + Argon2id authentication, five-role RBAC model, invite-only registration',
            'Multi-tenant isolation across all modules; database migrations managed via Flyway',
            'OHADA/SYSCOHADA compliance module (VAT, income tax, XAF currency rules)',
            'Ubuntu VPS deployment (Nginx, systemd); Scrum methodology, UML modelling, integration code reviews',
          ],
        },
      },
      {
        title: 'IT Assistant',
        company: 'JD SARL',
        location: 'Yaoundé, Cameroon',
        period: 'July - August 2025',
        type: 'internship',
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
        type: 'internship',
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
        type: 'internship',
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
        type: 'freelance',
        responsibilities: [
          'Custom furniture design and fabrication',
          'Client consultation and sales management',
        ],
      },
    ],
    fr: [
      {
        title: 'Développeur Back-End — Stagiaire',
        company: 'Axe-Tech SARL',
        location: 'Douala, Cameroun (à distance)',
        period: 'Mai - Août 2026',
        type: 'internship',
        project: 'Kamba — SaaS de gestion d\'entreprise multi-tenant conforme OHADA pour PME camerounaises',
        responsibilities: {
          vision: [
            'Seul développeur back-end : conception et déploiement d\'une API REST sécurisée et multi-tenant (Spring Boot 3.3, Java 21, MySQL 8) avec authentification JWT + Argon2id et RBAC à cinq rôles',
            'Module de conformité OHADA/SYSCOHADA et déploiement en production sur VPS Ubuntu, démarche Scrum et modélisation UML',
          ],
          software: [
            'Seul développeur back-end : conception et implémentation d\'une API REST sécurisée (Spring Boot 3.3, Java 21, MySQL 8)',
            'Authentification JWT + Argon2id, modèle RBAC à cinq rôles, inscription sur invitation',
            'Isolation multi-tenant sur l\'ensemble des modules, migrations de base gérées via Flyway',
            'Module de conformité OHADA/SYSCOHADA (TVA, IRPP, règlement en XAF)',
            'Déploiement VPS Ubuntu (Nginx, systemd) ; démarche Scrum, modélisation UML, revue de code d\'intégration',
          ],
        },
      },
      {
        title: 'Assistant Informatique',
        company: 'JD SARL',
        location: 'Yaoundé, Cameroun',
        period: 'Juillet - Août 2025',
        type: 'internship',
        responsibilities: [
          'Conception et mise en œuvre de l\'infrastructure réseau de l\'entreprise',
          'Support technique quotidien et maintenance des systèmes',
          'Développement d\'une application de gestion des tâches en tant que développeur Full Stack',
          'Résolution de problèmes matériels et logiciels pour plus de 20 employés',
        ],
      },
      {
        title: 'Assistant Commercial',
        company: 'SOTICAM',
        location: 'Yaoundé, Cameroun',
        period: 'Juin - Août 2023',
        type: 'internship',
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
        type: 'internship',
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
        type: 'freelance',
        responsibilities: [
          'Conception et fabrication de meubles sur mesure',
          'Consultation client et gestion des ventes',
        ],
      },
    ],
  },

  // Controls the order projects render in on the CV for a given profile.
  // Ids not listed here render after the ordered ones, in their natural array order.
  projectOrder: {
    vision: ['basic-cv', 'tictactoe', 'dijkstra', 'seruca'],
    software: ['seruca', 'task-management', 'immunization', 'portfolio-site'],
  },

  projects: {
    en: [
      {
        id: 'basic-cv',
        name: 'Basic Computer Vision',
        tech: ['Python', 'OpenCV', 'NumPy'],
        role: 'Individual Developer',
        period: '2026 - Ongoing',
        highlights: [
          'Image pipeline: color spaces (BGR / grayscale / HSV), Gaussian filtering, NumPy-based slicing and cropping',
          'Edge detection: Canny combined with morphological dilation and contour extraction',
          'Real-time processing: webcam and video capture, HSV segmentation and frame-by-frame contour tracking',
        ],
        github: 'https://github.com/donjunior01/basic_computer_vision',
        profiles: ['vision'],
      },
      {
        id: 'task-management',
        name: 'Task Management System',
        tech: ['Spring Boot 3', 'Java 17', 'Angular', 'MySQL', 'Docker', 'Node.js'],
        role: 'Full Stack Developer',
        period: '2025 - 2026',
        highlights: [
          'Project, task, team, deliverable, and time-tracking management; three-role RBAC, OpenAPI/Swagger documentation',
          'Separate Node.js AI service, Docker containerization, interactive dashboards and calendar',
        ],
        github: 'https://github.com/donjunior01/taskManagement-',
        profiles: ['software'],
      },
      {
        id: 'immunization',
        name: 'VaxTrack — Immunization Management System (Team Project)',
        tech: ['Spring Boot', 'Angular', 'JWT'],
        role: 'Full Stack Developer',
        period: '2025',
        isGroupProject: true,
        highlights: [
          'Spring Boot + Angular: patient records, vaccination registration, batch and stock tracking, coverage reports',
          'JWT authentication, role-based route guards, continuous deployment via GitHub Actions',
        ],
        github: 'https://github.com/donjunior01/Immunization-Management-Sytem-group5-project-',
        profiles: ['software'],
      },
      {
        id: 'ticket-tracker',
        name: 'Ticket Tracker',
        tech: ['JavaScript', 'HTML', 'CSS'],
        role: 'Full Stack Developer',
        highlights: ['Single-screen application to manage and track support tickets'],
        github: 'https://github.com/donjunior01/TicketTracker',
        profiles: [],
      },
      {
        id: 'dijkstra',
        name: "Dijkstra's Algorithm Visualisation",
        tech: ['Python', 'NetworkX', 'Matplotlib', 'Tkinter'],
        role: 'Individual Developer',
        period: '2025',
        highlights: [
          'Interactive Tkinter application: random connected graph generation, click-to-select node interaction',
          'Shortest-path rendering with NetworkX and Matplotlib, visited-node coloring',
        ],
        github: 'https://github.com/donjunior01/dijkstra_virsualisation',
        profiles: ['vision'],
      },
      {
        id: 'banking',
        name: 'Banking System',
        tech: ['Java'],
        role: 'Collaborative Developer',
        highlights: ['Standalone application simulating a banking system with account management and transactions'],
        github: 'https://github.com/NinjaShadowBoy/BankingSystemWithJava',
        profiles: [],
      },
      {
        id: 'online-shopping',
        name: 'Online Shopping App (Team Project)',
        tech: ['Java', 'HTML', 'CSS'],
        role: 'Full Stack Developer',
        isGroupProject: true,
        highlights: ['Java web-based online shopping platform with product catalog and order management'],
        github: 'https://github.com/Astera-Lainey/OnlineShoppingApp-ISJ_Inge3_ISI_Group_3-Java_Web',
        profiles: [],
      },
      {
        id: 'football-uml',
        name: 'Football Management System (UML)',
        tech: ['UML', 'System Design'],
        role: 'System Analyst',
        highlights: ['UML design diagrams and information system modelling for a football management system'],
        github: 'https://github.com/DONJUNIOR916/Information-System-Modelling-projects',
        profiles: [],
      },
      {
        id: 'seruca',
        name: 'SERUCA — Event Recommendation Platform (Team Project)',
        tech: ['Spring Boot 3.2', 'Java 17', 'PostgreSQL', 'Redis', 'Angular', 'Docker'],
        role: 'Backend Contributor',
        period: '2025 - 2026',
        isGroupProject: true,
        highlights: {
          vision: [
            'Hybrid recommendation engine using TF-IDF similarity, collaborative filtering and content-based filtering',
          ],
          software: [
            'Microservices architecture: API Gateway, user, event, recommendation, and notification services (Spring Boot 3.2, Java 17)',
            'PostgreSQL + Flyway, Redis cache, Docker Compose orchestration, GitHub Actions CI, Angular front end',
            'Hybrid recommendation engine using TF-IDF similarity, collaborative filtering and content-based filtering',
          ],
        },
        github: 'https://gitlab.com/AkongaManuel/seruca',
        profiles: ['vision', 'software'],
      },
      {
        id: 'retailcloud',
        name: 'RetailCloud — Billing Management System',
        tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'CI/CD'],
        role: 'Full Stack Developer',
        highlights: ['Retail billing platform with automated VAT/discounts, Angular frontend, microservices and GitLab CI/CD pipeline'],
        github: 'https://gitlab.com/elsa-web/retail-cloud_ci-cd_kana_mbakop_leonce_elsa-donfack_assobjio_junior',
        profiles: [],
      },
      {
        id: 'sji-btp-g7',
        name: 'SJI BTP 2025 ISI3 Group 7',
        tech: ['Java'],
        role: 'Full Stack Developer',
        highlights: ['School Java project — SJI BTP 2025 ISI3 English-speaking group 7'],
        github: 'https://github.com/DONJUNIOR916/Sji_btp_2025_isi3_en_g7',
        profiles: [],
      },
      {
        id: 'sji-web-g3',
        name: 'SJI ISI3 Group 3 Web',
        tech: ['HTML', 'CSS'],
        role: 'Full Stack Developer',
        highlights: ['Group web project — SJI ISI3 English-speaking group 3'],
        github: 'https://github.com/Aichatou18/sji_ing3isi_-group3-_web_-English-speaking-',
        profiles: [],
      },
      {
        id: 'tictactoe',
        name: 'SDL2 Tic-Tac-Toe',
        tech: ['C++11', 'SDL2'],
        role: 'Individual Developer',
        period: '2025',
        highlights: [
          'Unbeatable AI via minimax algorithm with alpha-beta pruning; three difficulty levels',
          'Board sizes from 3×3 to 6×6, SDL2 graphics rendering, animations and procedurally generated sound',
        ],
        github: 'https://github.com/donjunior01/dl2-tic-tac-toe',
        profiles: ['vision'],
      },
      {
        id: 'portfolio-site',
        name: 'Personal Portfolio',
        tech: ['React 18', 'React Router', 'Framer Motion', 'react-pdf', 'EmailJS', 'Tailwind CSS'],
        role: 'Individual Developer',
        period: '2025 - Ongoing',
        highlights: [
          'React Router, Framer Motion, PDF CV generation (react-pdf), EmailJS contact form, multilingual interface',
        ],
        github: 'https://github.com/donjunior01/portfolio',
        profiles: ['software'],
      },
      {
        id: 'daj',
        name: 'D.A.J',
        tech: ['HTML'],
        role: 'Individual Developer',
        highlights: ['Personal HTML project'],
        github: 'https://github.com/DONJUNIOR916/D.A.J',
        profiles: [],
      },
    ],
    fr: [
      {
        id: 'basic-cv',
        name: 'Basic Computer Vision',
        tech: ['Python', 'OpenCV', 'NumPy'],
        role: 'Développeur Individuel',
        period: '2026 - en cours',
        highlights: [
          'Pipeline image : espaces colorimétriques (BGR / niveaux de gris / HSV), filtrage gaussien, recadrage par slicing NumPy',
          'Détection de contours : Canny combiné à la dilatation morphologique et à l\'extraction de contours',
          'Traitement temps réel : capture webcam et vidéo, segmentation HSV et suivi de contours image par image',
        ],
        github: 'https://github.com/donjunior01/basic_computer_vision',
        profiles: ['vision'],
      },
      {
        id: 'task-management',
        name: 'Task Management System',
        tech: ['Spring Boot 3', 'Java 17', 'Angular', 'MySQL', 'Docker', 'Node.js'],
        role: 'Développeur Full Stack',
        period: '2025 - 2026',
        highlights: [
          'Gestion de projets, tâches, équipes, livrables et suivi du temps ; RBAC à trois rôles, documentation OpenAPI/Swagger',
          'Service IA séparé en Node.js, conteneurisation Docker, tableaux de bord et calendrier interactifs',
        ],
        github: 'https://github.com/donjunior01/taskManagement-',
        profiles: ['software'],
      },
      {
        id: 'immunization',
        name: 'VaxTrack — Système de Gestion de la Vaccination (Projet de Groupe)',
        tech: ['Spring Boot', 'Angular', 'JWT'],
        role: 'Développeur Full Stack',
        period: '2025',
        isGroupProject: true,
        highlights: [
          'Spring Boot + Angular : dossiers patients, enregistrement des vaccinations, suivi des lots et des stocks, rapports de couverture',
          'Authentification JWT, gardes de routes par rôle, déploiement continu via GitHub Actions',
        ],
        github: 'https://github.com/donjunior01/Immunization-Management-Sytem-group5-project-',
        profiles: ['software'],
      },
      {
        id: 'ticket-tracker',
        name: 'Suivi de Tickets',
        tech: ['JavaScript', 'HTML', 'CSS'],
        role: 'Développeur Full Stack',
        highlights: ['Application monopage pour la gestion et le suivi des tickets de support'],
        github: 'https://github.com/donjunior01/TicketTracker',
        profiles: [],
      },
      {
        id: 'dijkstra',
        name: 'Visualisation de l\'Algorithme de Dijkstra',
        tech: ['Python', 'NetworkX', 'Matplotlib', 'Tkinter'],
        role: 'Développeur Individuel',
        period: '2025',
        highlights: [
          'Application Tkinter interactive : génération de graphes connexes aléatoires, sélection des nœuds au clic',
          'Rendu du plus court chemin avec NetworkX et Matplotlib, coloration des nœuds visités',
        ],
        github: 'https://github.com/donjunior01/dijkstra_virsualisation',
        profiles: ['vision'],
      },
      {
        id: 'banking',
        name: 'Système Bancaire',
        tech: ['Java'],
        role: 'Développeur Collaboratif',
        highlights: ['Application autonome simulant un système bancaire complet avec gestion de comptes et transactions'],
        github: 'https://github.com/NinjaShadowBoy/BankingSystemWithJava',
        profiles: [],
      },
      {
        id: 'online-shopping',
        name: 'Application de Boutique en Ligne (Projet de Groupe)',
        tech: ['Java', 'HTML', 'CSS'],
        role: 'Développeur Full Stack',
        isGroupProject: true,
        highlights: ['Plateforme e-commerce Java avec catalogue de produits et gestion des commandes'],
        github: 'https://github.com/Astera-Lainey/OnlineShoppingApp-ISJ_Inge3_ISI_Group_3-Java_Web',
        profiles: [],
      },
      {
        id: 'football-uml',
        name: 'Système de Gestion de Football (UML)',
        tech: ['UML', 'Conception Système'],
        role: 'Analyste Système',
        highlights: ['Diagrammes UML et modélisation du système d\'information pour un système de gestion de football'],
        github: 'https://github.com/DONJUNIOR916/Information-System-Modelling-projects',
        profiles: [],
      },
      {
        id: 'seruca',
        name: 'SERUCA — Plateforme de Recommandation d\'Événements (Projet de Groupe)',
        tech: ['Spring Boot 3.2', 'Java 17', 'PostgreSQL', 'Redis', 'Angular', 'Docker'],
        role: 'Contributeur Back-End',
        period: '2025 - 2026',
        isGroupProject: true,
        highlights: {
          vision: [
            'Moteur de recommandation hybride : similarité TF-IDF, filtrage collaboratif et filtrage par contenu',
          ],
          software: [
            'Architecture microservices : API Gateway, services utilisateur, événement, recommandation et notification (Spring Boot 3.2, Java 17)',
            'PostgreSQL + Flyway, cache Redis, orchestration Docker Compose, intégration continue GitHub Actions, front Angular',
            'Moteur hybride : similarité TF-IDF, filtrage collaboratif et filtrage par contenu',
          ],
        },
        github: 'https://gitlab.com/AkongaManuel/seruca',
        profiles: ['vision', 'software'],
      },
      {
        id: 'retailcloud',
        name: 'RetailCloud — Système de Facturation',
        tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker', 'CI/CD'],
        role: 'Développeur Full Stack',
        highlights: ['Plateforme de facturation retail avec calcul automatique TVA/remises, frontend Angular, microservices et pipeline CI/CD GitLab'],
        github: 'https://gitlab.com/elsa-web/retail-cloud_ci-cd_kana_mbakop_leonce_elsa-donfack_assobjio_junior',
        profiles: [],
      },
      {
        id: 'sji-btp-g7',
        name: 'SJI BTP 2025 ISI3 Groupe 7',
        tech: ['Java'],
        role: 'Développeur Full Stack',
        highlights: ['Projet Java scolaire — SJI BTP 2025 ISI3 groupe anglophone 7'],
        github: 'https://github.com/DONJUNIOR916/Sji_btp_2025_isi3_en_g7',
        profiles: [],
      },
      {
        id: 'sji-web-g3',
        name: 'SJI ISI3 Groupe 3 Web',
        tech: ['HTML', 'CSS'],
        role: 'Développeur Full Stack',
        highlights: ['Projet web de groupe — SJI ISI3 groupe anglophone 3'],
        github: 'https://github.com/Aichatou18/sji_ing3isi_-group3-_web_-English-speaking-',
        profiles: [],
      },
      {
        id: 'tictactoe',
        name: 'Tic-Tac-Toe SDL2',
        tech: ['C++11', 'SDL2'],
        role: 'Développeur Individuel',
        period: '2025',
        highlights: [
          'IA imbattable par algorithme minimax avec élagage alpha-bêta ; trois niveaux de difficulté',
          'Plateaux 3×3 à 6×6, rendu graphique SDL2, animations et génération procédurale du son',
        ],
        github: 'https://github.com/donjunior01/dl2-tic-tac-toe',
        profiles: ['vision'],
      },
      {
        id: 'portfolio-site',
        name: 'Portfolio Personnel',
        tech: ['React 18', 'React Router', 'Framer Motion', 'react-pdf', 'EmailJS', 'Tailwind CSS'],
        role: 'Développeur Individuel',
        period: '2025 - en cours',
        highlights: [
          'React Router, Framer Motion, génération de CV en PDF (react-pdf), formulaire de contact EmailJS, interface multilingue',
        ],
        github: 'https://github.com/donjunior01/portfolio',
        profiles: ['software'],
      },
      {
        id: 'daj',
        name: 'D.A.J',
        tech: ['HTML'],
        role: 'Développeur Individuel',
        highlights: ['Projet HTML personnel'],
        github: 'https://github.com/DONJUNIOR916/D.A.J',
        profiles: [],
      },
    ],
  },

  // General skill set shown on the portfolio site (src/utils/constants.js derives from this).
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
      { name: 'ROS2', level: 30, inProgress: true },
      { name: 'PyTorch', level: 30, inProgress: true },
    ],
    vision: [
      { name: 'OpenCV', level: 75 },
      { name: 'Image Processing', level: 75 },
      { name: 'Real-Time Video Processing', level: 65 },
      { name: 'NumPy', level: 80 },
      { name: 'Matplotlib', level: 75 },
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

  // Exact, ordered skill categories for the CV, tailored per profile — matches the reference documents.
  skillsByProfile: {
    vision: {
      en: [
        { category: 'Vision / AI', items: ['OpenCV', 'Image Processing', 'Real-Time Video Processing', 'NumPy', 'Matplotlib'] },
        { category: 'Languages', items: ['Python', 'Java 21', 'C++11', 'TypeScript', 'SQL'] },
        { category: 'Algorithms', items: ['Minimax with Alpha-Beta Pruning', 'Dijkstra', 'TF-IDF', 'Collaborative Filtering'] },
        { category: 'Development', items: ['Spring Boot 3', 'REST APIs', 'Angular', 'React', 'PostgreSQL', 'MySQL'] },
        { category: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Linux (Ubuntu)', 'Maven', 'GitHub Actions'] },
        { category: 'Methods', items: ['Scrum', 'UML', 'Microservices Architecture', 'RBAC'] },
      ],
      fr: [
        { category: 'Vision / IA', items: ['OpenCV', 'traitement d\'image', 'traitement vidéo temps réel', 'NumPy', 'Matplotlib'] },
        { category: 'Langages', items: ['Python', 'Java 21', 'C++11', 'TypeScript', 'SQL'] },
        { category: 'Algorithmique', items: ['Minimax avec élagage alpha-bêta', 'Dijkstra', 'TF-IDF', 'filtrage collaboratif'] },
        { category: 'Développement', items: ['Spring Boot 3', 'API REST', 'Angular', 'React', 'PostgreSQL', 'MySQL'] },
        { category: 'Outils', items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Linux (Ubuntu)', 'Maven', 'GitHub Actions'] },
        { category: 'Méthodes', items: ['Scrum', 'UML', 'architecture microservices', 'RBAC'] },
      ],
    },
    software: {
      en: [
        { category: 'Backend', items: ['Java 21', 'Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'REST APIs', 'JWT', 'Argon2id'] },
        { category: 'Frontend', items: ['Angular', 'React 18', 'TypeScript', 'Tailwind CSS', 'Thymeleaf'] },
        { category: 'Data', items: ['PostgreSQL', 'MySQL 8', 'Redis', 'Flyway', 'JPA/Hibernate'] },
        { category: 'DevOps', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Nginx', 'Linux (Ubuntu)', 'Maven'] },
        { category: 'Architecture', items: ['Microservices', 'API Gateway', 'Multi-tenant', 'RBAC', 'OpenAPI/Swagger'] },
        { category: 'Other', items: ['Python', 'C++11', 'OpenCV', 'Scrum', 'UML'] },
      ],
      fr: [
        { category: 'Back-end', items: ['Java 21', 'Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'API REST', 'JWT', 'Argon2id'] },
        { category: 'Front-end', items: ['Angular', 'React 18', 'TypeScript', 'Tailwind CSS', 'Thymeleaf'] },
        { category: 'Données', items: ['PostgreSQL', 'MySQL 8', 'Redis', 'Flyway', 'JPA/Hibernate'] },
        { category: 'DevOps', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Nginx', 'Linux (Ubuntu)', 'Maven'] },
        { category: 'Architecture', items: ['Microservices', 'API Gateway', 'multi-tenant', 'RBAC', 'OpenAPI/Swagger'] },
        { category: 'Autres', items: ['Python', 'C++11', 'OpenCV', 'Scrum', 'UML'] },
      ],
    },
  },

  languagesSpoken: {
    en: [
      { name: 'French', level: 'working language' },
      { name: 'English', level: '[CEFR level] (Linguaskill Business preparation, UV LE03)' },
    ],
    fr: [
      { name: 'Français', level: 'langue de travail' },
      { name: 'Anglais', level: '[niveau CECRL] (préparation Linguaskill Business, UV LE03)' },
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
    en: ['Financial market analysis (SMC/ICT methodology)', 'Open-source development'],
    fr: ['Analyse des marchés financiers (méthodologie SMC/ICT)', 'Développement open source'],
  },

  extracurricular: {
    en: [
      {
        role: 'Events Manager',
        organization: 'School Sports Board, Institut Saint Jean',
        description: 'Organize and coordinate university sporting events',
      },
    ],
    fr: [
      {
        role: 'Gestionnaire d\'Événements',
        organization: 'Conseil Sportif de l\'École, Institut Saint Jean',
        description: 'Organiser et coordonner les événements sportifs universitaires',
      },
    ],
  },
};

export default cvData;
