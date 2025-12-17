// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Safe localStorage access (handles SSR and errors)
const getSavedLang = () => {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("lang");
    }
  } catch (e) {
    // localStorage not available (incognito, SSR, etc.)
  }
  return null;
};

const savedLang = getSavedLang() || "en";

i18n
  .use(initReactI18next)
  .init({
    lng: savedLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: {
          // Navigation
          home: "Home",
          services: "Services",
          skills: "Skills",
          projects: "Projects",
          contact: "Contact",
          about: "About",
          faq: "FAQ",
          offers: "Pricing",
          testimonials: "Reviews",
          process: "Process",

          // Status
          available: "Available for Freelance",
          scrollTop: "Back to top",

          // CTAs
          getQuote: "Get a quote",
          startProject: "Start a project",
          viewProjects: "View projects",
          bookCall: "Book a call",
          sendMessage: "Send message",
          freeConsultation: "Free consultation",

          // Form
          yourName: "Your name",
          yourEmail: "Your email",
          estimatedBudget: "Estimated budget",
          describeProject: "Describe your project",
          selectOption: "Select an option",
          sending: "Sending...",
          messageSent: "Message sent successfully!",
          messageError: "Error sending message. Please try again.",
          responseTime: "Response within 24h",

          // Budget options
          budgetUnder3k: "Under $3,000",
          budget3kTo5k: "$3,000 - $5,000",
          budget5kTo10k: "$5,000 - $10,000",
          budgetOver10k: "Over $10,000",
          budgetNotSure: "Not sure yet",

          // Sections
          trustedBy: "Trusted by businesses in",
          clientSectors: "Clients from all sectors in Québec and internationally",
          whatClientsSay: "What our clients say",
          projectsDelivered: "Projects delivered",
          satisfiedClients: "Satisfied clients",
          averageRating: "Average rating",

          // Footer
          allRightsReserved: "All rights reserved",
          basedIn: "Based in",

          // Misc
          learnMore: "Learn more",
          seeDetails: "See details",
          close: "Close",
        },
      },
      fr: {
        common: {
          // Navigation
          home: "Accueil",
          services: "Services",
          skills: "Compétences",
          projects: "Projets",
          contact: "Contact",
          about: "À propos",
          faq: "FAQ",
          offers: "Tarifs",
          testimonials: "Avis",
          process: "Processus",

          // Status
          available: "Disponible en freelance",
          scrollTop: "Retour en haut",

          // CTAs
          getQuote: "Obtenir un devis",
          startProject: "Démarrer un projet",
          viewProjects: "Voir mes projets",
          bookCall: "Réserver un appel",
          sendMessage: "Envoyer le message",
          freeConsultation: "Consultation gratuite",

          // Form
          yourName: "Votre nom",
          yourEmail: "Votre email",
          estimatedBudget: "Budget estimé",
          describeProject: "Décrivez votre projet",
          selectOption: "Sélectionnez une option",
          sending: "Envoi en cours...",
          messageSent: "Message envoyé avec succès!",
          messageError: "Erreur lors de l'envoi. Veuillez réessayer.",
          responseTime: "Réponse sous 24h",

          // Budget options
          budgetUnder3k: "Moins de 3 000 $",
          budget3kTo5k: "3 000 $ - 5 000 $",
          budget5kTo10k: "5 000 $ - 10 000 $",
          budgetOver10k: "Plus de 10 000 $",
          budgetNotSure: "Pas encore défini",

          // Sections
          trustedBy: "Ils nous font confiance",
          clientSectors: "Des clients de tous secteurs au Québec et à l'international",
          whatClientsSay: "Ce que disent nos clients",
          projectsDelivered: "Projets livrés",
          satisfiedClients: "Clients satisfaits",
          averageRating: "Note moyenne",

          // Footer
          allRightsReserved: "Tous droits réservés",
          basedIn: "Basé à",

          // Misc
          learnMore: "En savoir plus",
          seeDetails: "Voir les détails",
          close: "Fermer",
        },
      },
    },
  });

export default i18n;
