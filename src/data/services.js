// src/data/services.js

export const services = [
  {
    id: 1,
    key: "business-website",
    title: {
      en: "Business Website",
      fr: "Site vitrine",
    },
    price: {
      en: "from $3,500 CAD",
      fr: "à partir de 3 500 $ CAD",
    },
    icon: "🏢",
    timeline: {
      en: "2–3 weeks",
      fr: "2 à 3 semaines",
    },
    features: {
      en: [
        "5-7 custom pages",
        "Modern responsive design",
        "Contact form with notifications",
        "Basic SEO optimization",
        "Bilingual interface (FR/EN)",
        "Google Analytics setup",
      ],
      fr: [
        "5-7 pages sur mesure",
        "Design moderne et responsive",
        "Formulaire de contact avec notifications",
        "Optimisation SEO de base",
        "Interface bilingue (FR/EN)",
        "Configuration Google Analytics",
      ],
    },
    idealFor: {
      en: "SMBs, professionals, consultants, service providers",
      fr: "PME, professionnels, consultants, prestataires de services",
    },
    featured: true,
  },
  {
    id: 2,
    key: "ecommerce",
    title: {
      en: "E-Commerce Store",
      fr: "Boutique en ligne",
    },
    price: {
      en: "from $5,500 CAD",
      fr: "à partir de 5 500 $ CAD",
    },
    icon: "🛒",
    timeline: {
      en: "3–4 weeks",
      fr: "3 à 4 semaines",
    },
    features: {
      en: [
        "Complete product catalog",
        "Shopping cart & checkout",
        "Stripe/PayPal integration",
        "Inventory management",
        "Order tracking system",
        "Admin training included",
      ],
      fr: [
        "Catalogue produits complet",
        "Panier & processus de paiement",
        "Intégration Stripe/PayPal",
        "Gestion des stocks",
        "Système de suivi commandes",
        "Formation admin incluse",
      ],
    },
    idealFor: {
      en: "Retailers, brands, artisans selling products online",
      fr: "Commerçants, marques, artisans vendant en ligne",
    },
    featured: true,
  },
  {
    id: 3,
    key: "landing-page",
    title: {
      en: "Landing Page",
      fr: "Page d'atterrissage",
    },
    price: {
      en: "from $1,800 CAD",
      fr: "à partir de 1 800 $ CAD",
    },
    icon: "🎯",
    timeline: {
      en: "1–2 weeks",
      fr: "1 à 2 semaines",
    },
    features: {
      en: [
        "Single high-converting page",
        "Optimized for conversions",
        "A/B testing ready",
        "Fast loading speed",
        "Mobile-first design",
        "CTA optimization",
      ],
      fr: [
        "Page unique à haute conversion",
        "Optimisée pour les conversions",
        "Prête pour tests A/B",
        "Chargement ultra-rapide",
        "Design mobile-first",
        "Optimisation des CTA",
      ],
    },
    idealFor: {
      en: "Product launches, campaigns, lead generation",
      fr: "Lancements, campagnes, génération de leads",
    },
    featured: false,
  },
  {
    id: 4,
    key: "maintenance",
    title: {
      en: "Maintenance & Support",
      fr: "Maintenance & support",
    },
    price: {
      en: "$60–85/hr CAD",
      fr: "60–85 $/h CAD",
    },
    icon: "🛠️",
    timeline: {
      en: "Ongoing",
      fr: "Continu",
    },
    features: {
      en: [
        "Bug fixes & updates",
        "Content modifications",
        "Performance optimization",
        "Security patches",
        "New feature additions",
        "Priority support 24h",
      ],
      fr: [
        "Correctifs & mises à jour",
        "Modifications de contenu",
        "Optimisation performance",
        "Correctifs de sécurité",
        "Ajout de fonctionnalités",
        "Support prioritaire 24h",
      ],
    },
    idealFor: {
      en: "Existing sites, long-term partnerships",
      fr: "Sites existants, partenariats long terme",
    },
    featured: false,
  },
];
