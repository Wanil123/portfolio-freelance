// src/data/projects.js

export const projects = [
  {
    id: 1,
    key: "ecommerce",
    title: {
      en: "LuxeMode — Modern E-Commerce",
      fr: "LuxeMode — e-commerce moderne",
    },
    subtitle: {
      en: "E-Commerce Platform",
      fr: "Plateforme e-commerce",
    },
    context: {
      en: "For a fashion / boutique brand",
      fr: "Pour une marque / boutique mode",
    },
    description: {
      en: "Modern single-page e-commerce app with cart, favorites, filters, light/dark and bilingual interface.",
      fr: "Application e-commerce moderne (single-page) avec panier, favoris, filtres, thème clair/sombre et interface bilingue.",
    },
    tech: ["React 18", "Vite", "Tailwind CSS", "i18n", "Netlify"],
    features: {
      en: [
        "Shopping cart & favorites",
        "Dynamic filters & search",
        "Dark / light theme",
        "Bilingual interface (FR/EN)",
        "Fully responsive",
      ],
      fr: [
        "Panier d’achats + favoris",
        "Filtres et recherche dynamiques",
        "Thème clair / sombre",
        "Interface bilingue (FR/EN)",
        "Entièrement responsive",
      ],
    },
    link: "https://luxe-mode.netlify.app",
    icon: "🛍️",
    image: "/images/e-commerce.jpg",
  },
  {
    id: 2,
    key: "weather",
    title: {
      en: "WeatherPro — Real-Time Weather",
      fr: "WeatherPro — météo en temps réel",
    },
    subtitle: {
      en: "Real-Time Web App",
      fr: "Application web temps réel",
    },
    context: {
      en: "Front-end Vue 3 demo app",
      fr: "Application de démonstration Vue 3",
    },
    description: {
      en: "Vue.js weather app with global search, geolocation, 5-day forecasts and dynamic UI.",
      fr: "Application météo Vue.js avec recherche mondiale, géolocalisation, prévisions 5 jours et interface dynamique.",
    },
    tech: ["Vue.js 3", "Composition API", "OpenWeatherMap", "Tailwind CSS", "i18n"],
    features: {
      en: [
        "Real-time weather via OpenWeatherMap",
        "5-day forecast",
        "Automatic geolocation",
        "Dynamic backgrounds",
        "Multilingual UI",
      ],
      fr: [
        "Météo en temps réel (OpenWeatherMap)",
        "Prévisions sur 5 jours",
        "Géolocalisation automatique",
        "Arrière-plans dynamiques",
        "Interface multilingue",
      ],
    },
    link: "https://your-weather-ap.netlify.app",
    icon: "🌤️",
    image: "/images/meteo.jpg",
  },
  {
    id: 3,
    key: "event",
    title: {
      en: "5:7 Film Festival — Event Platform",
      fr: "5:7 Film Festival — plateforme événementielle",
    },
    subtitle: {
      en: "Full-Stack Event Platform",
      fr: "Plateforme événementielle full-stack",
    },
    context: {
      en: "Academic / team project",
      fr: "Projet d’équipe (contexte scolaire)",
    },
    description: {
      en: "Full event management system with booking, user roles, admin dashboard and interactive map.",
      fr: "Système complet de gestion d’événements avec réservations, rôles utilisateurs, tableau de bord admin et carte interactive.",
    },
    tech: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript", "Google Maps API"],
    features: {
      en: [
        "Role-based authentication",
        "Event booking",
        "Admin dashboard",
        "Google Maps integration",
        "Analytics ready",
      ],
      fr: [
        "Authentification par rôles",
        "Réservation d’événements",
        "Tableau de bord administrateur",
        "Intégration Google Maps",
        "Prêt pour analytics",
      ],
    },
    link: "https://projet-web2-e4.cpsw-fcsei.com/",
    icon: "🎬",
    image: "/images/film_festival.jpg",
  },
  {
    id: 4,
    key: "odoo",
    title: {
      en: "Odoo 17 — Custom Portals",
      fr: "Odoo 17 — portails personnalisés",
    },
    subtitle: {
      en: "Bilingual customer portals",
      fr: "Portails clients bilingues",
    },
    context: {
      en: "Internal / client environment",
      fr: "Environnement interne / client",
    },
    description: {
      en: "Custom Odoo 17 modules, PDF reports, secured customer portal and API integrations.",
      fr: "Modules Odoo 17 sur mesure, rapports PDF (QWeb), portail client sécurisé et intégrations API.",
    },
    tech: ["Odoo 17", "Python", "QWeb", "PostgreSQL"],
    features: {
      en: [
        "Bilingual portal (FR/EN)",
        "Custom PDF quotes",
        "3rd-party API integration",
        "Security rules (ir.model.access)",
        "Responsive UI (Bootstrap/Tailwind)",
      ],
      fr: [
        "Portail bilingue (FR/EN)",
        "Devis / factures PDF personnalisés",
        "Intégrations API tierces",
        "Règles de sécurité (ir.model.access)",
        "UI responsive (Bootstrap/Tailwind)",
      ],
    },
    link: "#",
    icon: "🧩",
    image: "/images/odoo.jpg",
  },
];
