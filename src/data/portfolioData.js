// Portfolio Data - Rahma Chriha
// Centralized data for easy content management

export const personalInfo = {
  name: "Rahma Chriha",
  title: "Software Engineering Student",
  tagline: "Software Engineering Student | Full Stack Developer | Cloud Enthusiast",
  email: "Rahmach1222@gmail.com",
  phone: "+216 54 669 911",
  location: "Sahloul, Sousse",
  bio: `Determined, serious, and autonomous software engineering student with a strong sense of initiative and adaptability. Passionate about building innovative digital solutions and mastering cloud technologies.`,

  socials: {
    github: "https://github.com/rahmach12",
    linkedin: "https://www.linkedin.com/in/rahmach",
    email: "mailto:Rahmach1222@gmail.com"
  },

  cvFile: "/CV rahma chriha.pdf"
};

export const education = [
  {
    id: 1,
    degree: "Engineering Degree",
    institution: "EPI DIGITAL SCHOOL",
    location: "Sousse, Tunisie",
    period: "2023 - Present",
    description: "Software Engineering",
    icon: "🎓"
  },
  {
    id: 2,
    degree: "Bachelor's Degree (Computer Science Big Data)",
    institution: "ISIMS SFAX",
    location: "Sfax, Tunisie",
    period: "2019 - 2023",
    description: "Specialized in Big Data analysis and computer science fundamentals.",
    icon: "🎓"
  },
  {
    id: 3,
    degree: "AWS: Cloud Services & Infrastructure",
    institution: "Certification",
    location: "Online",
    period: "2024",
    description: "Cloud computing fundamentals and infrastructure management.",
    icon: "☁️"
  },
  {
    id: 4,
    degree: "CCNA 2: Networking & Routing",
    institution: "Certification",
    location: "Online",
    period: "2023",
    description: "Network fundamentals, routing, and switching.",
    icon: "🌐"
  }
];

export const experiences = [
  {
    id: 1,
    title: "Stage - Développeuse Full Stack",
    company: "Revive Hub",
    location: "Tunisie",
    period: "2025",
    type: "Projet",
    description: "Created a modern web platform for a medical technology brand, combining a professional showcase with e-commerce capabilities.",
    responsibilities: [
      "Frontend development with React.js and Tailwind CSS",
      "Backend development with Laravel",
      "Database management with MySQL"
    ],
    technologies: ["Laravel", "React.js", "Tailwind CSS", "MySQL"]
  },
  {
    id: 2,
    title: "Stage - Recruitment App",
    company: "Elite Council Consulting",
    location: "Tunisie",
    period: "2023",
    type: "Stage",
    description: "Designed and built a web and mobile application to streamline the recruitment process.",
    responsibilities: [
      "Developed web & mobile application",
      "Streamlined recruitment process from job creation to applications",
      "Used Laravel and Flutter"
    ],
    technologies: ["Laravel", "Flutter", "MySQL"]
  },
  {
    id: 3,
    title: "Stage - Food Delivery System",
    company: "MOBELITE",
    location: "Tunisie",
    period: "2022",
    type: "Stage",
    description: "Developed a comprehensive restaurant website featuring a menu management system and real-time order tracking.",
    responsibilities: [
      "Full stack development with PHP",
      "Menu management system implementation",
      "Real-time order tracking"
    ],
    technologies: ["PHP", "JavaScript", "HTML/CSS", "MySQL"]
  }
];

export const skills = {
  languages: [
    { name: "PHP", level: 90, icon: "🐘" },
    { name: "JavaScript", level: 90, icon: "⚡" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Java", level: 80, icon: "☕" }
  ],

  frameworks: [
    { name: "Spring Boot", level: 85, icon: "🍃" },
    { name: "Laravel", level: 90, icon: "🔺" },
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Angular", level: 80, icon: "🅰️" },
    { name: "Flutter", level: 85, icon: "📱" }
  ],

  databases: [
    { name: "SQL (MySQL)", level: 90, icon: "🐬" },
    { name: "PostgreSQL", level: 85, icon: "🐘" },
    { name: "MongoDB", level: 80, icon: "🍃" }
  ],

  tools: [
    { name: "Git & GitHub", level: 95, icon: "📦" },
    { name: "Docker", level: 80, icon: "🐳" },
    { name: "Figma", level: 85, icon: "🎨" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Power BI", level: 85, icon: "📊" }
  ],

  methodologies: [
    { name: "Agile", icon: "🔄" },
    { name: "Scrum", icon: "🏃" },
    { name: "ETL", icon: "🔄" }
  ],

  languages_spoken: [
    { name: "Arabic", level: 100, flag: "🇹🇳" },
    { name: "English", level: 90, flag: "🇬🇧" },
    { name: "French", level: 90, flag: "🇫🇷" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "HireStorm",
    subtitle: "Recruitment Management Application",
    description: "Solution complète de gestion du recrutement (ATS). Optimisation du processus d'embauche de la candidature à l'intégration.",
    longDescription: `HireStorm est une application de gestion du recrutement conçue pour simplifier les processus RH. Elle permet de suivre les candidats, gérer les entretiens et collaborer sur les décisions d'embauche.
    
    L'application offre une interface intuitive pour les recruteurs et un portail candidat fluide.`,
    features: [
      "Suivi des candidatures (ATS)",
      "Planification des entretiens",
      "Workflow de recrutement personnalisable",
      "Tableau de bord RH analytique",
      "Gestion des offres d'emploi"
    ],
    technologies: ["Laravel", "PHP", "Flutter", "MySQL"],
    category: "Full-Stack",
    image: "/projects/hirestorm.png", // Placeholder
    github: "https://github.com/rahmach12/hirestorm",
    demo: null,
    featured: true,
    date: "2024"
  },
  {
    id: 2,
    title: "EduFlow",
    subtitle: "School Management System",
    description: "Plateforme complète de gestion éducative. Backend robuste en Spring Boot et Frontend dynamique avec Angular.",
    longDescription: `EduFlow modernise la gestion scolaire. Architecture séparée avec une API REST Spring Boot puissante et une interface utilisateur Angular réactive.
    
    Gère tout le cycle de vie scolaire : inscriptions, notes, emplois du temps et communication parents-professeurs.`,
    features: [
      "Architecture complet Frontend/Backend",
      "Gestion des rôles (Admin, Prof, Élève)",
      "Tableaux de bord interactifs",
      "Gestion des notes et absences",
      "Sécurité JWT"
    ],
    technologies: ["Spring Boot", "Angular", "MySQL", "JWT", "TypeScript"],
    category: "Full-Stack",
    image: "/projects/eduflow.png",
    github: "https://github.com/rahmach12/eduflow",
    demo: null,
    featured: true,
    date: "2023"
  },
  {
    id: 3,
    title: "Revive Hub",
    subtitle: "Plateforme E-commerce Santé",
    description: "Plateforme spécialisée santé/bien-être. Backend Laravel solide et Frontend React moderne.",
    longDescription: `Revive Hub offre une expérience d'achat fluide pour les produits de santé. Focus sur l'accessibilité et la performance.
    
    Intègre un catalogue complexe, gestion des stocks, et un système de commande sécurisé.`,
    features: [
      "Catalogue produits avancé",
      "Système de panier et commande",
      "Panel administrateur",
      "Authentification sécurisée"
    ],
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    category: "Full-Stack",
    image: "/projects/revive-hub.png",
    github: "https://github.com/rahmach12/ReviveHub",
    demo: null,
    featured: true,
    date: "2024"
  },
  {
    id: 4,
    title: "Mini Store",
    subtitle: "Application E-commerce Flutter",
    description: "Application mobile e-commerce (Urban Gear). Utilisation de l'API FakeStore, gestion d'état avec Provider.",
    longDescription: `Mini Store (Urban Gear) est une application mobile de démonstration e-commerce. Elle consomme une API externe pour afficher des produits dynamiques.
    
    Démontre la maîtrise de Flutter, de la gestion d'état complexe et de l'intégration API.`,
    features: [
      "Gestion d'état avec Provider",
      "Intégration API (FakeStore)",
      "Design Responsive Mobile",
      "Panier et Favoris"
    ],
    technologies: ["Flutter", "Dart", "Provider", "REST API"],
    category: "Mobile",
    image: "/projects/urban-gear.png",
    github: "https://github.com/rahmach12/ministore",
    demo: null,
    featured: true,
    date: "2024"
  }
];

export const contact = {
  email: "rahmach1222@gmail.com",
  phone: "+216 54 669 911",
  location: "Sousse, Tunisie",
  availability: "Disponible pour stages et opportunités",

  socialLinks: [
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/rahmach12",
      color: "#333"
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/rahmach",
      color: "#0077b5"
    },
    {
      name: "Email",
      icon: "email",
      url: "mailto:rahmach1222@gmail.com",
      color: "#ea4335"
    }
  ]
};
