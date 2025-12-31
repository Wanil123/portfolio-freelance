// src/data/projects.js

export const projects = [
  {
    id: 1,
    key: "lamipict",
    title: {
      en: "LamIPict — Photo Lamination E-Commerce",
      fr: "LamIPict — Boutique Lamination Photo",
    },
    subtitle: {
      en: "E-Commerce",
      fr: "E-commerce",
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
    // Photo lamination - professional photo prints
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=80",
    featured: true,
    isClientProject: true,
  },
  {
    id: 2,
    key: "music",
    title: {
      en: "MusikeApp — Music Streaming Interface",
      fr: "MusikeApp — Interface de streaming musical",
    },
    subtitle: {
      en: "Web Application",
      fr: "Application web",
    },
    context: {
      en: "Demo project",
      fr: "Projet démo",
    },
    description: {
      en: "Modern music streaming interface inspired by Spotify. Features playlist management, audio player with progress bar, search functionality and sleek dark UI design.",
      fr: "Interface de streaming musical moderne inspirée de Spotify. Gestion de playlists, lecteur audio avec barre de progression, recherche et design sombre élégant.",
    },
    tech: ["React", "Tailwind CSS", "Audio API", "Vite"],
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
    // Unsplash: Music/audio - headphones with neon lights
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&h=500&fit=crop&q=80",
    featured: true,
  },
  {
    id: 3,
    key: "weather",
    title: {
      en: "WeatherPro — Weather Application",
      fr: "WeatherPro — Application météo",
    },
    subtitle: {
      en: "Vue.js App",
      fr: "Application Vue.js",
    },
    context: {
      en: "API Integration",
      fr: "Intégration API",
    },
    description: {
      en: "Real-time weather application built with Vue 3. Features automatic geolocation, city search, 5-day forecasts and dynamic backgrounds that change based on weather conditions.",
      fr: "Application météo temps réel construite avec Vue 3. Géolocalisation automatique, recherche de villes, prévisions 5 jours et arrière-plans dynamiques selon la météo.",
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
    // Unsplash: Weather/sky - dramatic clouds with sun
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop&q=80",
    featured: false,
  },
];
