// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "en";

i18n
  .use(initReactI18next)
  .init({
    lng: savedLang,
    fallbackLng: "en",
    resources: {
      en: {
        common: {
          home: "Home",
          services: "Services",
          skills: "Skills",
          projects: "Projects",
          contact: "Contact",
          available: "Available",
          scrollTop: "Back to top",
        },
      },
      fr: {
        common: {
          home: "Accueil",
          services: "Services",
          skills: "Compétences",
          projects: "Projets",
          contact: "Contact",
          available: "Disponible",
          scrollTop: "Retour en haut",
        },
      },
    },
  });

export default i18n;
