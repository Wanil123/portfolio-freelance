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
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&q=80",
    featured: true,
    isClientProject: true,
  },

  // === CLIENT PROJECT #2 ===
  {
    id: 10,
    key: "groupe-destine",
    title: {
      en: "Groupe Destin\u00e9 Inc. \u2014 Community Organization",
      fr: "Groupe Destin\u00e9 Inc. \u2014 Organisation Communautaire",
    },
    subtitle: {
      en: "Business Website",
      fr: "Site Vitrine",
    },
    context: {
      en: "Client project \u2014 Montreal",
      fr: "Projet client \u2014 Montr\u00e9al",
    },
    description: {
      en: "Professional bilingual website for a multidisciplinary community development organization. 7 pages covering 4 sectors of intervention (Agriculture, Health, Security, Cleanliness), optimized contact form, SEO and fully responsive design.",
      fr: "Site web vitrine professionnel et bilingue pour une organisation de d\u00e9veloppement communautaire multidisciplinaire. 7 pages couvrant 4 secteurs d\u2019intervention (Agriculture, Sant\u00e9, S\u00e9curit\u00e9, Propret\u00e9), formulaire de contact optimis\u00e9, SEO et design responsive.",
    },
    tech: ["React", "Tailwind CSS", "i18next", "Vite", "SEO"],
    features: {
      en: [
        "7 custom pages with modern design",
        "4 sector showcase (Agriculture, Health, Security, Cleanliness)",
        "Bilingual interface (FR/EN)",
        "Optimized contact form with CTA",
        "Basic SEO optimization (H1/H2/H3, meta tags)",
        "Fully responsive design",
      ],
      fr: [
        "7 pages sur mesure avec design moderne",
        "Pr\u00e9sentation de 4 secteurs (Agriculture, Sant\u00e9, S\u00e9curit\u00e9, Propret\u00e9)",
        "Interface bilingue (FR/EN)",
        "Formulaire de contact optimis\u00e9 avec CTA",
        "Optimisation SEO de base (H1/H2/H3, balises meta)",
        "Design responsive complet",
      ],
    },
    icon: "\uD83C\uDFE2",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=500&fit=crop&q=80",
    featured: true,
    isClientProject: true,
  },

  // === AI AUTOMATION DEMOS ===
  {
    id: 8,
    key: "renoconnect-ai",
    title: {
      en: "RénoConnect AI — AI Receptionist Agent",
      fr: "RénoConnect AI — Agent IA Réceptionniste",
    },
    subtitle: {
      en: "AI Automation",
      fr: "Automatisation IA",
    },
    context: {
      en: "AI automation demo — Renovation industry",
      fr: "Démo automatisation IA — Industrie rénovation",
    },
    description: {
      en: "AI receptionist agent for a renovation company. Handles incoming calls 24/7, qualifies leads with AI scoring, books appointments automatically and syncs with CRM. Interactive demo with live conversation simulation.",
      fr: "Agent IA réceptionniste pour entreprise de rénovation. Gère les appels entrants 24/7, qualifie les leads avec scoring IA, prend les rendez-vous automatiquement et synchronise avec le CRM. Démo interactive avec simulation de conversation en direct.",
    },
    tech: ["React", "n8n", "Retell AI", "OpenAI", "Twilio", "Google Calendar API"],
    features: {
      en: [
        "24/7 AI-powered call answering",
        "Automatic lead qualification with scoring",
        "Appointment booking with calendar sync",
        "SMS/email confirmation automation",
        "Real-time analytics dashboard",
        "Live conversation demo with typing animation",
      ],
      fr: [
        "Réponse aux appels 24/7 par agent IA",
        "Qualification automatique des leads avec scoring",
        "Prise de rendez-vous avec sync calendrier",
        "Automatisation SMS/email de confirmation",
        "Tableau de bord analytics en temps réel",
        "Démo conversation live avec animation",
      ],
    },
    link: "https://reno-connect-ai.netlify.app",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop&q=80",
    featured: true,
    isAIDemo: true,
  },
  {
    id: 9,
    key: "dentiflow-ai",
    title: {
      en: "DentiFlow AI — Dental Clinic Automation",
      fr: "DentiFlow AI — Automatisation Clinique Dentaire",
    },
    subtitle: {
      en: "AI Automation",
      fr: "Automatisation IA",
    },
    context: {
      en: "AI automation demo — Healthcare",
      fr: "Démo automatisation IA — Santé",
    },
    description: {
      en: "Complete AI automation system for a dental clinic. Patient pipeline with AI scoring, 6 active automations (appointment reminders, no-show recovery, review collection), intelligent chatbot for online booking. Interactive demo with real-time metrics.",
      fr: "Système d'automatisation IA complet pour clinique dentaire. Pipeline patients avec scoring IA, 6 automatisations actives (rappels RDV, récupération no-show, collecte d'avis), chatbot intelligent pour prise de RDV en ligne. Démo interactive avec métriques temps réel.",
    },
    tech: ["React", "n8n", "OpenAI", "Twilio", "CRM Integration", "Vite"],
    features: {
      en: [
        "Patient pipeline with AI scoring",
        "6 active automation workflows",
        "No-show recovery (35% win-back rate)",
        "Intelligent booking chatbot",
        "Automated review collection",
        "ROI dashboard (14x monthly return)",
      ],
      fr: [
        "Pipeline patients avec scoring IA",
        "6 workflows d'automatisation actifs",
        "Récupération no-show (35% taux récupération)",
        "Chatbot intelligent de prise de RDV",
        "Collecte automatisée d'avis Google",
        "Tableau de bord ROI (14x retour mensuel)",
      ],
    },
    link: "https://dentiflow-ai.netlify.app",
    icon: "🦷",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop&q=80",
    featured: true,
    isAIDemo: true,
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
    id: 6,
    key: "maison-elysee",
    title: {
      en: "Maison Élysée — Luxury Fashion Boutique",
      fr: "Maison Élysée — Boutique Mode Luxe",
    },
    subtitle: {
      en: "WordPress Development",
      fr: "Développement WordPress",
    },
    context: {
      en: "WordPress custom development",
      fr: "Développement WordPress sur mesure",
    },
    description: {
      en: "WordPress e-commerce showcase for a fictional haute couture fashion house. Botiga child theme, custom plugin with shortcodes, elegant design and seamless FR/EN bilingual navigation.",
      fr: "Vitrine e-commerce WordPress pour une maison de haute couture fictive. Thème enfant Botiga, plugin sur mesure avec shortcodes, design élégant et navigation bilingue FR/EN.",
    },
    tech: ["WordPress", "PHP 8", "CSS3", "JavaScript", "Botiga", "MySQL"],
    features: {
      en: [
        "Botiga child theme with custom design",
        "Custom plugin with shortcodes",
        "Bilingual interface (FR/EN)",
        "Intersection Observer scroll animations",
        "Responsive luxury design",
        "Google Fonts (Playfair Display, Montserrat)",
      ],
      fr: [
        "Thème enfant Botiga avec design sur mesure",
        "Plugin custom avec shortcodes",
        "Interface bilingue (FR/EN)",
        "Animations au scroll avec Intersection Observer",
        "Design luxe responsive",
        "Google Fonts (Playfair Display, Montserrat)",
      ],
    },
    link: "https://maison-elysee.infinityfreeapp.com",
    github: "https://github.com/Wanil123/maison-elysee",
    icon: "👗",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop&q=80",
    featured: true,
  },
  {
    id: 7,
    key: "ciel-dore",
    title: {
      en: "Le Ciel Doré — 5-Star Restaurant",
      fr: "Le Ciel Doré — Restaurant 5 Étoiles",
    },
    subtitle: {
      en: "WordPress Development",
      fr: "Développement WordPress",
    },
    context: {
      en: "WordPress custom development",
      fr: "Développement WordPress sur mesure",
    },
    description: {
      en: "WordPress showcase for a fictional Mediterranean fine-dining restaurant. Custom post types for dishes & events, categorized menu card, online reservation system and FR/EN bilingual interface.",
      fr: "Site vitrine WordPress pour un restaurant gastronomique méditerranéen fictif. Types de contenu personnalisés, carte des menus par catégorie, réservation en ligne et interface bilingue FR/EN.",
    },
    tech: ["WordPress", "PHP 8", "CSS3", "JavaScript", "Botiga", "MySQL"],
    features: {
      en: [
        "Custom Post Types (dishes, events)",
        "Custom taxonomies (categories, cuisines)",
        "Online reservation form",
        "Dynamic menu card by category",
        "Bilingual interface (FR/EN)",
        "Scroll animations & page loader",
      ],
      fr: [
        "Types de contenu personnalisés (plats, événements)",
        "Taxonomies custom (catégories, cuisines)",
        "Formulaire de réservation en ligne",
        "Carte des menus dynamique par catégorie",
        "Interface bilingue (FR/EN)",
        "Animations au scroll & loader de page",
      ],
    },
    link: "http://le-ciel-dore.kesug.com",
    github: "https://github.com/Wanil123/le-ciel-dore",
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&q=80",
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
