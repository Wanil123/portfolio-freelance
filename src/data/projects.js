// src/data/projects.js

export const projects = [
  // === CLIENT PROJECT (hero) ===
  {
    id: 1,
    key: "lamipict",
    title: {
      en: "LamIPict — Photo Lamination E-Commerce",
      fr: "LamIPict — Boutique Lamination Photo",
    },
    subtitle: {
      en: "E-Commerce Platform",
      fr: "Plateforme E-commerce",
    },
    context: {
      en: "Client project — Montreal",
      fr: "Projet client — Montréal",
    },
    description: {
      en: "Complete e-commerce platform for professional photo lamination services. 3 product types, 76+ sizes, integrated image editor, Stripe payments, automated tax calculation for all Canadian provinces, and full admin dashboard.",
      fr: "Plateforme e-commerce complète pour services de lamination photo professionnelle. 3 types de produits, 76+ formats, éditeur d'image intégré, paiements Stripe, calcul automatique des taxes pour toutes les provinces canadiennes et tableau de bord admin complet.",
    },
    tech: ["React 18", "TypeScript", "Laravel 10", "MySQL", "Stripe", "Tailwind CSS", "Vite"],
    features: {
      en: [
        "3 product types with 76+ size options",
        "Built-in image editor (crop, rotate, adjust)",
        "Stripe payment integration (PCI-DSS)",
        "Automated tax calculation (all provinces)",
        "Zone-based shipping with tracking",
        "Bilingual interface (FR/EN)",
        "Promo code system with validation",
        "Complete admin dashboard",
      ],
      fr: [
        "3 types de produits avec 76+ formats",
        "Éditeur d'image intégré (recadrer, rotation, ajuster)",
        "Intégration paiement Stripe (PCI-DSS)",
        "Calcul automatique des taxes (toutes provinces)",
        "Livraison par zone avec suivi",
        "Interface bilingue (FR/EN)",
        "Système de codes promo avec validation",
        "Tableau de bord admin complet",
      ],
    },
    link: "https://lamipict.com",
    icon: "📸",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80",
    featured: true,
    isClientProject: true,
  },

  // === PROFESSIONAL PROJECTS ===
  {
    id: 2,
    key: "film-festival",
    title: {
      en: "5:7 Film Festival",
      fr: "5:7 Festival de Films",
    },
    subtitle: {
      en: "Full-Stack Application",
      fr: "Application Full-Stack",
    },
    context: {
      en: "Full-stack development",
      fr: "Développement full-stack",
    },
    description: {
      en: "Reservation platform for a film festival with role-based access management and integrated analytics. Complete system for managing screenings, bookings, and audience data.",
      fr: "Plateforme de réservations pour festival de films avec gestion des rôles et analytics intégrés. Système complet pour gérer les projections, réservations et données d'audience.",
    },
    tech: ["Laravel", "Tailwind", "MySQL", "JavaScript", "Adobe XD"],
    features: {
      en: [
        "Film screening reservation system",
        "Role-based access management",
        "Integrated analytics dashboard",
        "User authentication & profiles",
        "Responsive modern interface",
        "Admin panel for event management",
      ],
      fr: [
        "Système de réservation de projections",
        "Gestion d'accès par rôles",
        "Tableau de bord analytics intégré",
        "Authentification et profils utilisateurs",
        "Interface moderne responsive",
        "Panneau admin pour gestion d'événements",
      ],
    },
    link: "https://film-festival1.netlify.app/",
    icon: "🎬",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop&q=80",
    featured: true,
  },
  {
    id: 3,
    key: "clinical-trials",
    title: {
      en: "Clinical Trials Data API",
      fr: "Clinical Trials Data API",
    },
    subtitle: {
      en: "Back-End API",
      fr: "API Back-End",
    },
    context: {
      en: "Back-end architecture",
      fr: "Architecture back-end",
    },
    description: {
      en: "REST API for clinical trial data management — patients, biomarkers and laboratory analyses with automatic anomaly detection. Fully documented, tested and containerized.",
      fr: "API REST pour la gestion de données d'essais cliniques — patients, biomarqueurs et analyses de laboratoire avec détection automatique des anomalies. Entièrement documentée, testée et conteneurisée.",
    },
    tech: ["FastAPI", "SQLAlchemy 2.0", "Pydantic v2", "Alembic", "pytest", "JWT", "Docker"],
    features: {
      en: [
        "Patient data management (CRUD)",
        "Biomarker tracking & history",
        "Laboratory analysis management",
        "Automatic anomaly detection",
        "JWT authentication & authorization",
        "Comprehensive API documentation (Swagger)",
        "Database migrations with Alembic",
        "Full test coverage with pytest",
      ],
      fr: [
        "Gestion des données patients (CRUD)",
        "Suivi et historique des biomarqueurs",
        "Gestion des analyses de laboratoire",
        "Détection automatique des anomalies",
        "Authentification et autorisation JWT",
        "Documentation API complète (Swagger)",
        "Migrations de base de données avec Alembic",
        "Couverture de tests complète avec pytest",
      ],
    },
    link: "https://clinical-trials-data-api.onrender.com",
    github: "https://github.com/wanil-the-dev/clinical-trials-data-api",
    icon: "🧬",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80",
    featured: true,
  },
  {
    id: 4,
    key: "music",
    title: {
      en: "MusikeApp — Streaming Interface",
      fr: "MusikeApp — Interface Streaming",
    },
    subtitle: {
      en: "Front-End Development",
      fr: "Développement Front-End",
    },
    context: {
      en: "UI/UX development",
      fr: "Développement UI/UX",
    },
    description: {
      en: "Modern music streaming interface with playlist management, functional audio player with progress bar, search and filtering — built as a front-end UI showcase.",
      fr: "Interface de streaming musical avec gestion de playlists, lecteur audio fonctionnel avec barre de progression, recherche et filtrage — développée comme vitrine front-end.",
    },
    tech: ["React", "Tailwind CSS", "Web Audio API", "Vite"],
    features: {
      en: [
        "Functional audio player with controls",
        "Playlist creation and management",
        "Track search and filtering",
        "Progress bar with seek functionality",
        "Volume control and mute toggle",
        "Responsive dark UI design",
      ],
      fr: [
        "Lecteur audio fonctionnel avec contrôles",
        "Création et gestion de playlists",
        "Recherche et filtrage de pistes",
        "Barre de progression avec navigation",
        "Contrôle du volume et sourdine",
        "Interface sombre responsive",
      ],
    },
    link: "https://musike-app.netlify.app/",
    icon: "🎵",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=500&fit=crop&q=80",
    featured: false,
  },
  {
    id: 5,
    key: "weather",
    title: {
      en: "WeatherPro — Weather Dashboard",
      fr: "WeatherPro — Tableau de bord météo",
    },
    subtitle: {
      en: "API Integration",
      fr: "Intégration API",
    },
    context: {
      en: "API integration",
      fr: "Intégration API",
    },
    description: {
      en: "Real-time weather dashboard built with Vue 3 and Composition API. Geolocation, city search worldwide, 5-day forecasts and dynamic backgrounds based on conditions.",
      fr: "Tableau de bord météo en temps réel avec Vue 3 et Composition API. Géolocalisation, recherche de villes mondiale, prévisions 5 jours et arrière-plans dynamiques selon la météo.",
    },
    tech: ["Vue.js 3", "Composition API", "OpenWeatherMap API", "Tailwind CSS"],
    features: {
      en: [
        "Real-time weather via OpenWeatherMap",
        "5-day detailed forecasts",
        "Automatic geolocation",
        "City search worldwide",
        "Dynamic weather backgrounds",
        "Temperature unit toggle (C/F)",
      ],
      fr: [
        "Météo temps réel via OpenWeatherMap",
        "Prévisions détaillées 5 jours",
        "Géolocalisation automatique",
        "Recherche de villes mondiale",
        "Arrière-plans dynamiques météo",
        "Changement d'unité (C/F)",
      ],
    },
    link: "https://your-weather-ap.netlify.app/",
    icon: "🌤️",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop&q=80",
    featured: false,
  },
];
