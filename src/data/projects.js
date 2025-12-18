// src/data/projects.js

export const projects = [
  {
    id: 1,
    key: "ecommerce",
    title: {
      en: "LuxeMode — E-Commerce Platform",
      fr: "LuxeMode — Boutique en ligne",
    },
    subtitle: {
      en: "E-Commerce",
      fr: "E-commerce",
    },
    context: {
      en: "Demo project",
      fr: "Projet démo",
    },
    description: {
      en: "Complete e-commerce platform with product catalog, shopping cart, wishlist, advanced filters and bilingual interface. Modern React architecture with optimized performance.",
      fr: "Plateforme e-commerce complète avec catalogue produits, panier d'achats, favoris, filtres avancés et interface bilingue. Architecture React moderne avec performance optimisée.",
    },
    tech: ["React 18", "Vite", "Tailwind CSS", "Context API", "i18next"],
    features: {
      en: [
        "Shopping cart & wishlist with persistence",
        "Product filtering by category, price, size",
        "Dark/light theme with user preference",
        "Fully bilingual interface (FR/EN)",
        "Mobile-first responsive design",
        "Optimized performance (90+ Lighthouse)",
      ],
      fr: [
        "Panier & favoris avec persistance",
        "Filtrage par catégorie, prix, taille",
        "Thème clair/sombre avec préférence utilisateur",
        "Interface entièrement bilingue (FR/EN)",
        "Design responsive mobile-first",
        "Performance optimisée (Lighthouse 90+)",
      ],
    },
    link: "https://luxe-mode.netlify.app",
    icon: "🛍️",
    // Unsplash: Fashion e-commerce - stylish clothing rack
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop&q=80",
    featured: true,
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
