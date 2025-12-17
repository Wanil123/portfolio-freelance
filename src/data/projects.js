// src/data/projects.js

export const projects = [
  {
    id: 1,
    key: "ecommerce",
    title: {
      en: "LuxeMode — Modern E-Commerce Platform",
      fr: "LuxeMode — Plateforme e-commerce moderne",
    },
    subtitle: {
      en: "E-Commerce",
      fr: "E-commerce",
    },
    context: {
      en: "Fashion retail",
      fr: "Mode & retail",
    },
    description: {
      en: "High-performance single-page e-commerce application featuring dynamic product filtering, shopping cart, favorites system, and seamless bilingual experience with dark/light theme support.",
      fr: "Application e-commerce haute performance avec filtrage dynamique de produits, panier d'achats, système de favoris et expérience bilingue fluide avec support thème clair/sombre.",
    },
    tech: ["React 18", "Vite", "Tailwind CSS", "Context API", "i18next", "Netlify"],
    features: {
      en: [
        "Real-time shopping cart & wishlist",
        "Advanced product filtering & search",
        "Dark mode with persistent preferences",
        "Fully bilingual interface (FR/EN)",
        "Mobile-first responsive design",
        "Optimized performance (90+ Lighthouse score)",
      ],
      fr: [
        "Panier d'achats & liste de souhaits en temps réel",
        "Filtrage avancé & recherche de produits",
        "Mode sombre avec préférences persistantes",
        "Interface entièrement bilingue (FR/EN)",
        "Design responsive mobile-first",
        "Performance optimisée (score Lighthouse 90+)",
      ],
    },
    link: "https://luxe-mode.netlify.app",
    icon: "🛍️",
    // Unsplash: Modern fashion e-commerce aesthetic - clothing rack with stylish items
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=75&fm=webp",
  },
  {
    id: 2,
    key: "weather",
    title: {
      en: "WeatherPro — Real-Time Weather Application",
      fr: "WeatherPro — Application météo temps réel",
    },
    subtitle: {
      en: "Weather App",
      fr: "Application météo",
    },
    context: {
      en: "Vue.js showcase",
      fr: "Démonstration Vue.js",
    },
    description: {
      en: "Modern weather application built with Vue 3 Composition API, featuring real-time weather data, automatic geolocation, 5-day forecasts, and dynamic UI that adapts to weather conditions.",
      fr: "Application météo moderne construite avec Vue 3 Composition API, offrant données météo en temps réel, géolocalisation automatique, prévisions 5 jours et interface dynamique qui s'adapte aux conditions.",
    },
    tech: ["Vue.js 3", "Composition API", "OpenWeatherMap API", "Tailwind CSS", "Vite", "i18n"],
    features: {
      en: [
        "Real-time weather via OpenWeatherMap API",
        "5-day detailed forecasts with hourly breakdown",
        "Automatic geolocation with manual search",
        "Dynamic backgrounds based on weather conditions",
        "Multilingual support with automatic detection",
        "Responsive design optimized for all devices",
      ],
      fr: [
        "Météo en temps réel via API OpenWeatherMap",
        "Prévisions 5 jours détaillées avec données horaires",
        "Géolocalisation automatique avec recherche manuelle",
        "Arrière-plans dynamiques selon conditions météo",
        "Support multilingue avec détection automatique",
        "Design responsive optimisé pour tous appareils",
      ],
    },
    link: "https://your-weather-ap.netlify.app/",
    icon: "🌤️",
    // Unsplash: Weather app aesthetic - dramatic sky with clouds and sun
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&q=75&fm=webp",
  },
  {
    id: 3,
    key: "event",
    title: {
      en: "5:7 Film Festival — Event Management Platform",
      fr: "5:7 Film Festival — Plateforme de gestion d'événements",
    },
    subtitle: {
      en: "Full-Stack Platform",
      fr: "Plateforme full-stack",
    },
    context: {
      en: "Event platform",
      fr: "Plateforme événementielle",
    },
    description: {
      en: "Comprehensive event management system with user authentication, role-based access control, booking functionality, admin dashboard, and interactive venue mapping for a film festival.",
      fr: "Système complet de gestion d'événements avec authentification utilisateurs, contrôle d'accès par rôles, fonctionnalité de réservation, tableau de bord admin et cartographie interactive des lieux pour un festival de films.",
    },
    tech: ["Laravel 10", "Tailwind CSS", "MySQL", "Blade", "JavaScript", "Google Maps API"],
    features: {
      en: [
        "Multi-role authentication system (admin, organizer, attendee)",
        "Real-time event booking with seat selection",
        "Comprehensive admin dashboard with analytics",
        "Interactive venue map with Google Maps integration",
        "Email notifications for bookings & updates",
        "Responsive design for mobile & desktop",
      ],
      fr: [
        "Système d'authentification multi-rôles (admin, organisateur, participant)",
        "Réservation d'événements en temps réel avec sélection de sièges",
        "Tableau de bord admin complet avec analytics",
        "Carte interactive des lieux avec intégration Google Maps",
        "Notifications email pour réservations & mises à jour",
        "Design responsive pour mobile & desktop",
      ],
    },
    link: "https://projet-web2-e4.cpsw-fcsei.com/",
    icon: "🎬",
    // Unsplash: Film festival - audience watching movie with colorful screen light
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop&q=75&fm=webp",
  },
  {
    id: 4,
    key: "odoo",
    title: {
      en: "Odoo 17 — Custom ERP Solutions",
      fr: "Odoo 17 — Solutions ERP personnalisées",
    },
    subtitle: {
      en: "ERP Customization",
      fr: "Personnalisation ERP",
    },
    context: {
      en: "Enterprise client",
      fr: "Client entreprise",
    },
    description: {
      en: "Advanced Odoo 17 customizations including bilingual customer portals, custom PDF report generation with QWeb templates, third-party API integrations, and security rule implementations for enterprise clients.",
      fr: "Personnalisations avancées Odoo 17 incluant portails clients bilingues, génération de rapports PDF personnalisés avec templates QWeb, intégrations API tierces et implémentation de règles de sécurité pour clients entreprise.",
    },
    tech: ["Odoo 17", "Python", "QWeb", "PostgreSQL", "XML", "JavaScript"],
    features: {
      en: [
        "Fully bilingual customer portal (FR/EN) with custom branding",
        "Automated custom PDF quotes & invoices with dynamic content",
        "Seamless third-party API integrations (payment, shipping, CRM)",
        "Advanced security rules & access control (ir.model.access)",
        "Responsive portal UI with modern design (Bootstrap/Tailwind)",
        "Comprehensive training & documentation for client team",
      ],
      fr: [
        "Portail client entièrement bilingue (FR/EN) avec image de marque personnalisée",
        "Génération automatique de devis & factures PDF avec contenu dynamique",
        "Intégrations API tierces fluides (paiement, livraison, CRM)",
        "Règles de sécurité avancées & contrôle d'accès (ir.model.access)",
        "Interface portail responsive avec design moderne (Bootstrap/Tailwind)",
        "Formation complète & documentation pour l'équipe client",
      ],
    },
    link: "#",
    icon: "🧩",
    // Unsplash: ERP/Business software aesthetic - modern office dashboard setup
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=75&fm=webp",
  },
];