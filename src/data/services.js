// src/data/services.js
import { Monitor, RefreshCw, ShoppingCart, MessageSquare, Bot, Zap } from "lucide-react";

export const services = [
  {
    id: "site-vitrine",
    icon: Monitor,
    featured: true,
    title: {
      fr: "Site vitrine",
      en: "Business website",
    },
    price: {
      fr: "Projet clé en main",
      en: "Turnkey project",
    },
    timeline: {
      fr: "2 à 4 semaines",
      en: "2 to 4 weeks",
    },
    features: {
      fr: [
        "5-10 pages sur mesure",
        "Design moderne et responsive",
        "Formulaire de contact avec notifications",
        "Optimisation SEO de base",
        "Interface bilingue (FR/EN)",
        "Configuration Google Analytics",
      ],
      en: [
        "5-10 custom pages",
        "Modern, responsive design",
        "Contact form with notifications",
        "Basic SEO optimization",
        "Bilingual interface (FR/EN)",
        "Google Analytics setup",
      ],
    },
    idealFor: {
      fr: "PME, professionnels, consultants, prestataires de services",
      en: "SMBs, professionals, consultants, service providers",
    },
  },
  {
    id: "refonte-de-site",
    icon: RefreshCw,
    featured: false,
    title: {
      fr: "Refonte de site",
      en: "Website redesign",
    },
    price: {
      fr: "Projet clé en main",
      en: "Turnkey project",
    },
    timeline: {
      fr: "2 à 3 semaines",
      en: "2 to 3 weeks",
    },
    features: {
      fr: [
        "Refonte visuelle complète",
        "Design UI/UX moderne",
        "Optimisation mobile",
        "Amélioration des performances",
        "Migration du contenu",
        "Préservation du SEO",
      ],
      en: [
        "Complete visual redesign",
        "Modern UI/UX design",
        "Mobile optimization",
        "Performance improvements",
        "Content migration",
        "SEO preservation",
      ],
    },
    idealFor: {
      fr: "Sites désuets, rebranding, projets de modernisation",
      en: "Outdated sites, rebranding, modernization projects",
    },
  },
  {
    id: "boutique-en-ligne",
    icon: ShoppingCart,
    featured: false,
    title: {
      fr: "Boutique en ligne",
      en: "E-commerce store",
    },
    price: {
      fr: "Projet clé en main",
      en: "Turnkey project",
    },
    timeline: {
      fr: "3 à 6 semaines",
      en: "3 to 6 weeks",
    },
    features: {
      fr: [
        "Catalogue produits complet",
        "Panier & processus de paiement",
        "Intégration Stripe/PayPal",
        "Gestion des stocks & commandes",
        "Système de suivi commandes",
        "Formation admin incluse",
      ],
      en: [
        "Full product catalog",
        "Cart & checkout process",
        "Stripe/PayPal integration",
        "Inventory & order management",
        "Order tracking system",
        "Admin training included",
      ],
    },
    idealFor: {
      fr: "Commerçants, marques, artisans vendant en ligne",
      en: "Retailers, brands, artisans selling online",
    },
  },
  {
    id: "chatbot-ai",
    icon: MessageSquare,
    featured: false,
    title: {
      fr: "Chatbot IA intelligent",
      en: "AI Smart Chatbot",
    },
    price: {
      fr: "Forfait mensuel",
      en: "Monthly plan",
    },
    timeline: {
      fr: "1 à 2 semaines",
      en: "1 to 2 weeks",
    },
    features: {
      fr: [
        "Chatbot IA intégré à votre site web",
        "Répond aux questions fréquentes automatiquement",
        "Capture et qualifie les leads 24/7",
        "Connexion CRM (HubSpot, GoHighLevel)",
        "Personnalisé à votre entreprise et vos services",
        "Historique des conversations et analytics",
      ],
      en: [
        "AI chatbot embedded on your website",
        "Answers FAQs automatically",
        "Captures and qualifies leads 24/7",
        "CRM connection (HubSpot, GoHighLevel)",
        "Customized to your business and services",
        "Conversation history and analytics",
      ],
    },
    idealFor: {
      fr: "PME, e-commerce, prestataires de services, SaaS",
      en: "SMBs, e-commerce, service providers, SaaS",
    },
  },
  {
    id: "agent-ai-receptionniste",
    icon: Bot,
    featured: true,
    title: {
      fr: "Agent IA réceptionniste",
      en: "AI Receptionist Agent",
    },
    price: {
      fr: "Forfait mensuel",
      en: "Monthly plan",
    },
    timeline: {
      fr: "1 à 2 semaines",
      en: "1 to 2 weeks",
    },
    features: {
      fr: [
        "Réponse aux appels 24/7 par agent vocal IA",
        "Qualification automatique des leads",
        "Prise de rendez-vous automatisée (Calendly/Cal.com)",
        "Envoi SMS/email de confirmation",
        "Intégration CRM & Google Sheets",
        "Tableau de bord de suivi en temps réel",
      ],
      en: [
        "24/7 AI-powered phone answering",
        "Automatic lead qualification",
        "Automated appointment booking (Calendly/Cal.com)",
        "SMS/email confirmation sent automatically",
        "CRM & Google Sheets integration",
        "Real-time tracking dashboard",
      ],
    },
    idealFor: {
      fr: "Entrepreneurs, cliniques, cabinets, entreprises de services",
      en: "Contractors, clinics, firms, service businesses",
    },
  },
  {
    id: "automatisation-ventes",
    icon: Zap,
    featured: false,
    title: {
      fr: "Automatisation des ventes",
      en: "Sales Automation",
    },
    price: {
      fr: "Forfait mensuel",
      en: "Monthly plan",
    },
    timeline: {
      fr: "2 à 3 semaines",
      en: "2 to 3 weeks",
    },
    features: {
      fr: [
        "Follow-up email/SMS automatique des prospects",
        "Séquences de nurturing IA personnalisées",
        "Relance automatique des paniers abandonnés",
        "Intégration CRM avec scoring IA des leads",
        "Rapports de conversion automatisés",
        "Workflows n8n / Make.com sur mesure",
      ],
      en: [
        "Automatic email/SMS prospect follow-up",
        "AI-powered personalized nurturing sequences",
        "Automated abandoned cart recovery",
        "CRM integration with AI lead scoring",
        "Automated conversion reports",
        "Custom n8n / Make.com workflows",
      ],
    },
    idealFor: {
      fr: "E-commerce, agences, entreprises B2B, équipes de vente",
      en: "E-commerce, agencies, B2B companies, sales teams",
    },
  },
];
