// ─── Centralized portfolio data — bilingual ───────────────────
// en = English  |  fr = Français
// All real data verified against GitHub repos and CV.

export const personal = {
  name:     'Rahma Chriha',
  initials: 'RC',
  title: {
    en: 'Software Engineer & Full Stack Developer',
    fr: 'Ingénieure Logiciel & Développeuse Full Stack',
  },
  tagline: {
    en: 'I design and build web applications, REST APIs, and software solutions focused on code quality, user experience, and maintainable architecture.',
    fr: "Je conçois et développe des applications web, des API REST et des solutions logicielles en privilégiant la qualité du code, l'expérience utilisateur et une architecture maintenable.",
  },
  location:  'Sousse, Tunisia',
  email:     'Rahmach1222@gmail.com',
  phone:     '+216 54 669 911',
  github:    'https://github.com/rahmach12',
  cv: {
    en: '/cv-en.pdf',
    fr: '/cv-fr.pdf',
  },
  cvEn:      '/cv-en.pdf',
  cvFr:      '/cv-fr.pdf',
  avatar:    '/profile.jpg',
  available: {
    en: 'Open to opportunities',
    fr: 'Ouverte aux opportunités',
  },
};

// ─── Navigation ───────────────────────────────────────────────
export const navLinks = [
  { id: 'home',        label: { en: 'Home',       fr: 'Accueil'     } },
  { id: 'about',       label: { en: 'About',      fr: 'À propos'    } },
  { id: 'projects',    label: { en: 'Projects',   fr: 'Projets'     } },
  { id: 'skills',      label: { en: 'Skills',     fr: 'Compétences' } },
  { id: 'experience',  label: { en: 'Experience', fr: 'Expérience'  } },
  { id: 'contact',     label: { en: 'Contact',    fr: 'Contact'     } },
];

// ─── About ────────────────────────────────────────────────────
export const about = {
  headline: {
    en: 'Building quality software with purpose.',
    fr: 'Concevoir des logiciels de qualité avec intention.',
  },
  paragraphs: [
    {
      en: "I recently graduated as a Software Engineer from EPI Digital School (Sousse) and also hold a Bachelor's degree in Computer Science with a Big Data specialization from ISIMS (Sfax). My academic path gave me solid foundations across full-stack development, API design, database architecture, and distributed systems.",
      fr: "Récemment diplômée ingénieure en Génie Informatique à l'EPI Digital School (Sousse), je possède également une licence en informatique spécialisée en Big Data de l'ISIMS (Sfax). Mon parcours m'a permis d'acquérir des bases solides en développement full-stack, conception d'API, architecture de bases de données et systèmes distribués.",
    },
    {
      en: "Throughout my studies, I built real projects: a CRM school management platform (graduation project), a microservices e-learning architecture, an e-commerce health platform, a recruitment app and more. Each project was an opportunity to go beyond the assignment — to design properly, think about maintainability, and care about the end user.",
      fr: "Tout au long de mes études, j'ai réalisé des projets concrets : une plateforme CRM de gestion scolaire (projet de fin d'études), une architecture e-learning en microservices, une plateforme e-commerce santé, une application de recrutement, et d'autres encore. Chaque projet a été une occasion d'aller au-delà de l'exercice — de bien concevoir, de penser à la maintenabilité et de soigner l'expérience utilisateur.",
    },
    {
      en: "I am now seeking my first professional opportunity in software engineering, particularly in full-stack development, backend architecture, or web/mobile development. I thrive when I have real problems to solve, quality standards to uphold, and a team to grow with.",
      fr: "Je recherche aujourd'hui ma première opportunité professionnelle en ingénierie logicielle, notamment en développement full-stack, architecture backend ou développement web/mobile. Je m'épanouis face à de vrais problèmes à résoudre, des standards de qualité à respecter et une équipe avec laquelle progresser.",
    },
  ],
  highlights: [
    {
      icon: '🎓',
      title: { en: 'Engineering Degree', fr: "Diplôme d'ingénieure" },
      desc:  { en: 'Software Engineering — EPI Digital School', fr: 'Génie Informatique — EPI Digital School' },
    },
    {
      icon: '📊',
      title: { en: 'Big Data Bachelor', fr: 'Licence Big Data' },
      desc:  { en: 'Computer Science, Big Data — ISIMS Sfax', fr: 'Informatique, Big Data — ISIMS Sfax' },
    },
    {
      icon: '🛠',
      title: { en: 'Full Stack Projects', fr: 'Projets Full Stack' },
      desc:  { en: 'Web, Mobile, APIs, Data', fr: 'Web, Mobile, API, Data' },
    },
    {
      icon: '🌍',
      title: { en: '3 Languages', fr: '3 Langues' },
      desc:  { en: 'Arabic · French · English', fr: 'Arabe · Français · Anglais' },
    },
  ],
};

// ─── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id: 'eduflow-crm',
    featured: true,
    title: 'EduFlow CRM',
    category: { en: 'Full Stack · Graduation Project', fr: "Full Stack · Projet de fin d'études" },
    year: '2026',
    subtitle: {
      en: 'Intelligent School Management CRM',
      fr: 'CRM Intelligent de Gestion Scolaire',
    },
    description: {
      en: "A comprehensive CRM platform for educational institutions — my graduation project developed individually. It covers the full lifecycle of school operations: student and teacher management, grading, attendance, internship tracking, financial management, role-based access, real-time notifications, and PDF report generation.",
      fr: "Plateforme CRM complète pour établissements éducatifs — mon projet de fin d'études réalisé individuellement. Elle couvre tout le cycle de vie d'un établissement scolaire : gestion des étudiants et enseignants, notes, absences, stages, gestion financière, contrôle d'accès par rôles, notifications en temps réel et génération de documents PDF.",
    },
    tech: ['Laravel 12', 'React.js', 'Tailwind CSS', 'MySQL', 'Docker', 'REST API', 'JWT'],
    features: {
      en: [
        'Student & teacher management with role-based access (Admin / Teacher / Student)',
        'Grade and attendance tracking with automatic alerts',
        'Internship lifecycle management',
        'Financial management: tuition fees, payment tracking',
        'JWT-secured authentication with granular permissions',
        'Real-time notifications',
        'PDF report & transcript generation',
        'Interactive analytics dashboard',
      ],
      fr: [
        "Gestion des étudiants et enseignants avec contrôle d'accès par rôles (Admin / Enseignant / Étudiant)",
        'Suivi des notes et absences avec alertes automatiques',
        'Gestion du cycle de vie des stages',
        'Gestion financière : frais de scolarité, suivi des paiements',
        'Authentification sécurisée JWT avec permissions granulaires',
        'Notifications en temps réel',
        'Génération de bulletins et documents PDF',
        'Tableau de bord analytique interactif',
      ],
    },
    role: {
      en: "Sole developer — architecture design, backend API (Laravel), frontend SPA (React), database modeling, Docker setup, and documentation.",
      fr: "Développeuse unique — conception de l'architecture, API backend (Laravel), SPA frontend (React), modélisation de la base de données, configuration Docker et documentation.",
    },
    challenges: {
      en: 'Designing a multi-role permission system that remains flexible for future roles. Implementing real-time notifications without a WebSocket server by using efficient polling and event-driven patterns within Laravel.',
      fr: "Concevoir un système de permissions multi-rôles flexible pour des évolutions futures. Implémenter des notifications en temps réel sans serveur WebSocket en utilisant le polling optimisé et les patterns événementiels de Laravel.",
    },
    github: 'https://github.com/rahmach12/EduFlow-CRM',
    demo: null,
    color: '#8b5cf6',
  },
  {
    id: 'eduflow-elearning',
    featured: true,
    title: 'EduFlow E-Learning',
    category: { en: 'Microservices · Backend Architecture', fr: 'Microservices · Architecture Backend' },
    year: '2024',
    subtitle: {
      en: 'Distributed E-Learning Platform',
      fr: 'Plateforme E-Learning Distribuée',
    },
    description: {
      en: "An e-learning platform built around a Spring Cloud microservices architecture. Each domain (courses, users, enrollment, notifications) is an independent service, coordinated via Eureka service discovery, a central API Gateway, and Config Server. The Angular frontend consumes the API through the gateway.",
      fr: "Plateforme d'e-learning construite sur une architecture microservices Spring Cloud. Chaque domaine (cours, utilisateurs, inscriptions, notifications) est un service indépendant, coordonné via Eureka, une API Gateway centrale et un Config Server. Le frontend Angular consomme l'API via la passerelle.",
    },
    tech: ['Spring Boot', 'Spring Cloud', 'Eureka', 'API Gateway', 'Config Server', 'Angular', 'MySQL', 'Docker', 'JWT', 'OpenFeign'],
    features: {
      en: [
        'Microservices decomposition: courses, users, enrollment, notifications',
        'Eureka service registry & discovery',
        'Spring Cloud API Gateway (routing, authentication filter)',
        'Centralized Config Server',
        'Inter-service communication via OpenFeign',
        'JWT authentication propagated across services',
        'Angular SPA consuming the gateway API',
        'Dockerized services for consistent deployment',
      ],
      fr: [
        "Décomposition en microservices : cours, utilisateurs, inscriptions, notifications",
        "Registre et découverte de services Eureka",
        "API Gateway Spring Cloud (routage, filtre d'authentification)",
        "Config Server centralisé",
        "Communication inter-services via OpenFeign",
        "Authentification JWT propagée entre les services",
        "SPA Angular consommant l'API de la passerelle",
        "Services dockerisés pour un déploiement cohérent",
      ],
    },
    role: {
      en: "Designed and implemented the microservices architecture, all Spring Boot services, the API Gateway configuration, and the Angular frontend integration.",
      fr: "Conception et implémentation de l'architecture microservices, de tous les services Spring Boot, de la configuration API Gateway et de l'intégration Angular.",
    },
    challenges: {
      en: 'Managing JWT propagation across stateless services without a shared session. Handling service-to-service failures gracefully with circuit breaker patterns and fallback responses.',
      fr: 'Gérer la propagation JWT entre des services sans état partagé. Gérer les défaillances inter-services avec des circuit breakers et des réponses de repli.',
    },
    github: 'https://github.com/rahmach12/EduFlow',
    demo: null,
    color: '#6d28d9',
  },
  {
    id: 'revivehub',
    featured: true,
    title: 'Revive Hub',
    category: { en: 'Full Stack · E-Commerce', fr: 'Full Stack · E-Commerce' },
    year: '2025',
    subtitle: {
      en: 'Health & Wellness E-Commerce Platform',
      fr: 'Plateforme E-Commerce Santé & Bien-être',
    },
    description: {
      en: 'A full-stack e-commerce platform dedicated to health products and services, built with Laravel and React. It features a product catalogue, shopping cart, order management, promotions system, user accounts, and an admin back-office.',
      fr: "Une plateforme e-commerce full-stack dédiée aux produits et services de santé, construite avec Laravel et React. Elle dispose d'un catalogue produits, d'un panier, d'une gestion des commandes, d'un système de promotions, d'espaces utilisateurs et d'un back-office administrateur.",
    },
    tech: ['Laravel', 'React', 'TypeScript', 'Vite', 'MySQL', 'REST API', 'Laravel Sanctum'],
    features: {
      en: [
        'Product catalogue with categories and search',
        'Shopping cart and checkout flow',
        'Order tracking and history',
        'Promotions and discount codes',
        'Sanctum-based SPA authentication',
        'Admin dashboard for product and order management',
      ],
      fr: [
        'Catalogue produits avec catégories et recherche',
        "Panier et tunnel d'achat",
        'Suivi des commandes et historique',
        'Promotions et codes de réduction',
        'Authentification SPA via Sanctum',
        'Tableau de bord admin pour la gestion des produits et commandes',
      ],
    },
    role: {
      en: 'Full stack developer — Laravel REST API, React frontend with TypeScript, authentication, admin panel, and database design.',
      fr: 'Développeuse full stack — API REST Laravel, frontend React TypeScript, authentification, panneau admin et modélisation de la base de données.',
    },
    challenges: {
      en: 'Implementing a smooth SPA authentication flow with Laravel Sanctum while keeping the frontend and backend strictly decoupled.',
      fr: 'Mettre en place un flux d\'authentification SPA fluide avec Laravel Sanctum tout en maintenant un couplage strict entre frontend et backend.',
    },
    github: 'https://github.com/rahmach12/ReviveHub',
    demo: null,
    color: '#7c3aed',
  },
  {
    id: 'hirestorm',
    featured: false,
    title: 'Hirestorm',
    category: { en: 'Full Stack · Web & Mobile', fr: 'Full Stack · Web & Mobile' },
    year: '2023',
    subtitle: {
      en: 'Recruitment Management Application',
      fr: 'Application de Gestion du Recrutement',
    },
    description: {
      en: "A web and mobile application to streamline the end-to-end recruitment process — from job posting to candidate onboarding. The Laravel backend powers a RESTful API consumed by the Flutter mobile app.",
      fr: "Application web et mobile pour fluidifier le processus de recrutement de bout en bout — de la publication d'offres à l'intégration des candidats. Le backend Laravel expose une API REST consommée par l'application mobile Flutter.",
    },
    tech: ['Laravel', 'PHP', 'Flutter', 'Dart', 'MySQL', 'REST API'],
    features: {
      en: [
        'Job posting and applicant tracking',
        'Interview scheduling',
        'Candidate pipeline management',
        'Mobile app (Flutter) for recruiters',
        'RESTful API backend',
      ],
      fr: [
        "Publication d'offres et suivi des candidatures",
        'Planification des entretiens',
        'Gestion du pipeline de candidats',
        'Application mobile (Flutter) pour les recruteurs',
        'API RESTful backend',
      ],
    },
    role: {
      en: 'Built the Laravel backend API and the Flutter mobile application.',
      fr: "Développement de l'API backend Laravel et de l'application mobile Flutter.",
    },
    challenges: {
      en: 'Keeping the API contract consistent between the web admin and mobile app while iterating quickly on both.',
      fr: "Maintenir un contrat API cohérent entre l'admin web et l'application mobile lors d'itérations rapides sur les deux.",
    },
    github: 'https://github.com/rahmach12/Hirestorm',
    demo: null,
    color: '#5b21b6',
  },
  {
    id: 'ministore',
    featured: false,
    title: 'Mini Store',
    category: { en: 'Mobile · Flutter', fr: 'Mobile · Flutter' },
    year: '2024',
    subtitle: {
      en: 'Flutter E-Commerce Mobile App',
      fr: 'Application Mobile E-Commerce Flutter',
    },
    description: {
      en: "A Flutter e-commerce mobile app (Urban Gear concept) consuming the FakeStore API. It demonstrates state management with Provider, API integration, product browsing, cart management, and a clean mobile UI.",
      fr: "Application mobile e-commerce Flutter (concept Urban Gear) consommant l'API FakeStore. Elle illustre la gestion d'état avec Provider, l'intégration API, la navigation produits, la gestion du panier et une interface mobile soignée.",
    },
    tech: ['Flutter', 'Dart', 'Provider', 'REST API', 'FakeStore API'],
    features: {
      en: [
        'Product listing from REST API (FakeStore)',
        'State management with Provider',
        'Shopping cart and favorites',
        'Category filtering',
        'Clean and responsive mobile UI',
      ],
      fr: [
        'Catalogue produits depuis une API REST (FakeStore)',
        "Gestion d'état avec Provider",
        'Panier et favoris',
        'Filtrage par catégorie',
        'Interface mobile responsive et soignée',
      ],
    },
    role: {
      en: 'Sole developer — UI design and implementation, Provider state management, API integration.',
      fr: "Développeuse unique — design et implémentation de l'interface, gestion d'état Provider, intégration API.",
    },
    challenges: {
      en: 'Managing efficient state updates across the cart and product list without unnecessary rebuilds using Provider correctly.',
      fr: "Gérer des mises à jour d'état efficaces entre le panier et la liste de produits sans reconstructions inutiles en utilisant Provider correctement.",
    },
    github: 'https://github.com/rahmach12/ministore',
    demo: null,
    color: '#4c1d95',
  },
  {
    id: 'decision-dashboard',
    featured: false,
    title: 'Decision Support Dashboard',
    category: { en: 'Data & BI · Analytics', fr: 'Data & BI · Analytique' },
    year: '2024',
    subtitle: {
      en: 'Business Intelligence & Data Analysis Dashboard',
      fr: 'Tableau de Bord Décisionnel & Analyse de Données',
    },
    description: {
      en: 'A business intelligence project focused on data preparation, exploratory analysis, and interactive dashboards to support decision-making. Built with Power BI, SQL, and ETL processes to transform raw data into actionable visual insights.',
      fr: "Projet de business intelligence axé sur la préparation des données, l'analyse exploratoire et des tableaux de bord interactifs pour l'aide à la décision. Développé avec Power BI, SQL et des processus ETL pour transformer des données brutes en insights visuels exploitables.",
    },
    tech: ['Power BI', 'SQL', 'ETL', 'Exploratory Data Analysis', 'Data Modeling'],
    features: {
      en: [
        'Data extraction, transformation, and loading (ETL pipeline)',
        'Exploratory data analysis and cleaning',
        'Interactive Power BI dashboards',
        'SQL-based data modeling and aggregation',
        'KPI tracking and visualization',
        'Decision-support reports for stakeholders',
      ],
      fr: [
        "Pipeline ETL : extraction, transformation et chargement des données",
        'Analyse exploratoire et nettoyage des données',
        'Tableaux de bord interactifs Power BI',
        'Modélisation et agrégation des données via SQL',
        'Suivi et visualisation des KPI',
        "Rapports d'aide à la décision pour les parties prenantes",
      ],
    },
    role: {
      en: 'Data analyst — data pipeline design, SQL queries, ETL implementation, and Power BI dashboard creation.',
      fr: "Analyste de données — conception du pipeline de données, requêtes SQL, implémentation ETL et création des tableaux de bord Power BI.",
    },
    challenges: {
      en: 'Handling inconsistent and incomplete raw data across multiple sources while maintaining analytical accuracy in the final dashboards.',
      fr: "Gérer des données brutes incohérentes et incomplètes provenant de plusieurs sources tout en maintenant la précision analytique dans les tableaux de bord finaux.",
    },
    github: null,
    demo: null,
    color: '#3b0764',
  },
  {
    id: 'restaurant',
    featured: false,
    title: 'Restaurant Ordering',
    category: { en: 'Web App · PHP', fr: 'Application Web · PHP' },
    year: '2022',
    subtitle: {
      en: 'Restaurant Ordering & Delivery Website',
      fr: 'Site de Commande et Livraison de Restaurant',
    },
    description: {
      en: 'A restaurant ordering and delivery web application built with PHP and JavaScript. Features menu management, a client-facing ordering interface, back-office order tracking, and delivery status updates.',
      fr: "Application web de commande et livraison pour restaurant, développée en PHP et JavaScript. Inclut la gestion du menu, une interface de commande client, un back-office de suivi des commandes et la mise à jour du statut de livraison.",
    },
    tech: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
    features: {
      en: [
        'Menu management (admin back-office)',
        'Client ordering interface',
        'Order tracking',
        'Delivery status management',
      ],
      fr: [
        'Gestion du menu (back-office admin)',
        'Interface de commande client',
        'Suivi des commandes',
        'Gestion du statut de livraison',
      ],
    },
    role: {
      en: 'Full stack developer — frontend, backend (PHP), and MySQL database.',
      fr: 'Développeuse full stack — frontend, backend PHP et base de données MySQL.',
    },
    challenges: {
      en: 'Implementing order state transitions cleanly in vanilla PHP without a framework.',
      fr: "Gérer les transitions d'état des commandes proprement en PHP vanilla sans framework.",
    },
    github: null,
    demo: null,
    color: '#2e1065',
  },
];

// ─── Skills ───────────────────────────────────────────────────
export const skills = [
  {
    category: { en: 'Programming Languages', fr: 'Langages' },
    icon: '{ }',
    items: ['PHP', 'Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Dart'],
  },
  {
    category: { en: 'Frontend', fr: 'Frontend' },
    icon: '◈',
    items: ['React.js', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript'],
  },
  {
    category: { en: 'Backend & APIs', fr: 'Backend & API' },
    icon: '⚙',
    items: ['Laravel', 'Spring Boot', 'Spring Cloud', 'REST APIs', 'JWT', 'Sanctum', 'OpenFeign'],
  },
  {
    category: { en: 'Mobile', fr: 'Mobile' },
    icon: '📱',
    items: ['Flutter', 'Dart', 'Provider'],
  },
  {
    category: { en: 'Databases', fr: 'Bases de données' },
    icon: '🗄',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: { en: 'Data & BI', fr: 'Data & BI' },
    icon: '📊',
    items: ['Power BI', 'ETL', 'Exploratory Data Analysis', 'SQL Analytics'],
  },
  {
    category: { en: 'DevOps & Tools', fr: 'DevOps & Outils' },
    icon: '🛠',
    items: ['Git', 'GitHub', 'Docker', 'Figma', 'UML', 'Agile / Scrum'],
  },
  {
    category: { en: 'Architecture', fr: 'Architecture' },
    icon: '🏛',
    items: ['Microservices', 'MVC', 'REST', 'API Design', 'OOP', 'Service Discovery'],
  },
];

// ─── Experience ───────────────────────────────────────────────
export const experience = [
  {
    id: 'revivehub-internship',
    role:    { en: 'Full Stack Developer — Internship', fr: 'Développeuse Full Stack — Stage' },
    company: 'Revive Hub Consulting',
    period:  { en: '2025', fr: '2025' },
    type:    { en: 'Internship', fr: 'Stage' },
    description: {
      en: 'Designed and developed a modern web platform for a medical technology brand, combining a professional showcase with full e-commerce capabilities.',
      fr: "Conception et développement d'une plateforme web moderne pour une marque de technologie médicale, combinant vitrine professionnelle et fonctionnalités e-commerce complètes.",
    },
    tasks: {
      en: [
        'Frontend development with React.js and Tailwind CSS',
        'Backend REST API with Laravel and Sanctum authentication',
        'Database modeling and MySQL optimization',
        'Product catalogue, cart, and order management',
      ],
      fr: [
        'Développement frontend avec React.js et Tailwind CSS',
        'API REST backend avec Laravel et authentification Sanctum',
        'Modélisation de la base de données et optimisation MySQL',
        'Catalogue produits, panier et gestion des commandes',
      ],
    },
    tech: ['Laravel', 'React.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
  },
  {
    id: 'elite-council-internship',
    role:    { en: 'Full Stack Developer — Internship', fr: 'Développeuse Full Stack — Stage' },
    company: 'Elite Council Consulting',
    period:  { en: '2023', fr: '2023' },
    type:    { en: 'Internship', fr: 'Stage' },
    description: {
      en: "Designed and built a web and mobile application to streamline the end-to-end recruitment process, from job creation to candidate onboarding.",
      fr: "Conception et développement d'une application web et mobile pour fluidifier le processus de recrutement de bout en bout, de la création d'offres à l'intégration des candidats.",
    },
    tasks: {
      en: [
        'Full-stack web application with Laravel',
        'Flutter mobile application for recruiters',
        'RESTful API design and implementation',
        'Candidate pipeline and interview scheduling',
      ],
      fr: [
        'Application web full-stack avec Laravel',
        'Application mobile Flutter pour les recruteurs',
        "Conception et implémentation d'une API RESTful",
        "Pipeline de candidats et planification des entretiens",
      ],
    },
    tech: ['Laravel', 'Flutter', 'MySQL', 'REST API'],
  },
  {
    id: 'mobelite-internship',
    role:    { en: 'Full Stack Developer — Internship', fr: 'Développeuse Full Stack — Stage' },
    company: 'MOBELITE',
    period:  { en: '2022', fr: '2022' },
    type:    { en: 'Internship', fr: 'Stage' },
    description: {
      en: 'Developed a comprehensive restaurant website featuring a menu management system and order tracking for a restaurant delivery service.',
      fr: 'Développement d\'un site web complet pour un service de restauration, avec un système de gestion de menu et le suivi des commandes.',
    },
    tasks: {
      en: [
        'Full-stack development with PHP and JavaScript',
        'Menu management back-office',
        'Online ordering interface for customers',
        'Order status tracking and delivery management',
      ],
      fr: [
        'Développement full-stack en PHP et JavaScript',
        'Back-office de gestion du menu',
        'Interface de commande en ligne pour les clients',
        'Suivi du statut des commandes et gestion de la livraison',
      ],
    },
    tech: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
  },
];

// ─── Education ────────────────────────────────────────────────
export const education = [
  {
    id: 'epi',
    degree:      { en: 'Engineering Degree — Software Engineering', fr: "Diplôme d'Ingénieure — Génie Informatique" },
    institution: 'EPI Digital School',
    location:    'Sousse, Tunisie',
    period:      '2023 – 2026',
    description: {
      en: 'Intensive engineering program covering software architecture, full-stack development, distributed systems, databases, mobile development, and project management.',
      fr: "Formation d'ingénieure couvrant l'architecture logicielle, le développement full-stack, les systèmes distribués, les bases de données, le développement mobile et la gestion de projet.",
    },
  },
  {
    id: 'isims',
    degree:      { en: "Bachelor's Degree — Computer Science, Big Data", fr: 'Licence — Informatique, Big Data' },
    institution: 'ISIMS',
    location:    'Sfax, Tunisie',
    period:      '2019 – 2023',
    description: {
      en: 'Computer science fundamentals with a specialization in Big Data analysis: data processing, ETL pipelines, analytics, and database management.',
      fr: "Fondamentaux de l'informatique avec une spécialisation en analyse Big Data : traitement des données, pipelines ETL, analytics et gestion de bases de données.",
    },
  },
  {
    id: 'lycee',
    degree:      { en: 'Scientific Baccalaureate', fr: 'Baccalauréat Sciences Expérimentales' },
    institution: 'Lycée Ibn Rochd',
    location:    'Tunisie',
    period:      '2019',
    description: {
      en: 'High school diploma in Experimental Sciences.',
      fr: 'Diplôme du baccalauréat, filière Sciences Expérimentales.',
    },
  },
];

// ─── Certifications ───────────────────────────────────────────
export const certifications = [
  {
    id: 'aws',
    name:   'AWS Cloud Services & Infrastructure',
    issuer: 'Amazon Web Services',
    year:   '2024',
    icon:   '☁️',
  },
  {
    id: 'ccna1',
    name:   'Cisco CCNA 1 — Introduction to Networks',
    issuer: 'Cisco',
    year:   '2023',
    icon:   '🌐',
  },
  {
    id: 'ccna2',
    name:   'Cisco CCNA 2 — Routing & Switching',
    issuer: 'Cisco',
    year:   '2023',
    icon:   '🌐',
  },
  {
    id: 'toeic',
    name:   'TOEIC',
    issuer: 'ETS',
    year:   '2023',
    icon:   '🇬🇧',
  },
];

// ─── Languages spoken ─────────────────────────────────────────
export const languages = [
  { name: { en: 'Arabic',  fr: 'Arabe'    }, level: { en: 'Native',                  fr: 'Langue maternelle'       } },
  { name: { en: 'French',  fr: 'Français' }, level: { en: 'Fluent',                  fr: 'Courant'                 } },
  { name: { en: 'English', fr: 'Anglais'  }, level: { en: 'Professional Proficiency', fr: 'Maîtrise professionnelle' } },
];

// ─── Contact ──────────────────────────────────────────────────
export const contactInfo = {
  email:    'Rahmach1222@gmail.com',
  phone:    '+216 54 669 911',
  location: 'Sousse, Tunisie',
  github:   'https://github.com/rahmach12',
  linkedin: 'https://www.linkedin.com/in/rahmach',
  cv: {
    en: '/cv-en.pdf',
    fr: '/cv-fr.pdf',
  },
  cvEn: '/cv-en.pdf',
  cvFr: '/cv-fr.pdf',
};
