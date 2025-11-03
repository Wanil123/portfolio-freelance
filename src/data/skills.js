// src/data/skillCategories.js

export const skillCategories = [
  {
    key: "frontend",
    category: {
      en: "Front-End",
      fr: "Front-End",
    },
    icon: "Palette",
    skills: [
      { name: { en: "HTML5 / CSS3", fr: "HTML5 / CSS3" }, level: 96 },
      { name: { en: "JavaScript ES6+", fr: "JavaScript ES6+" }, level: 92 },
      { name: { en: "React", fr: "React" }, level: 86 },
      { name: { en: "Vue.js 3", fr: "Vue.js 3" }, level: 88 },
      { name: { en: "Tailwind / Bootstrap", fr: "Tailwind / Bootstrap" }, level: 94 },
    ],
    additional: {
      en: "UX/UI, responsive, accessibility (WCAG), design handoff (Figma/XD)",
      fr: "UX/UI, responsive, accessibilité (WCAG), intégration depuis Figma/XD",
    },
  },
  {
    key: "backend",
    category: {
      en: "Back-End & ERP",
      fr: "Back-End & ERP",
    },
    icon: "Server",
    skills: [
      { name: { en: "PHP / Laravel", fr: "PHP / Laravel" }, level: 90 },
      { name: { en: "Python", fr: "Python" }, level: 82 },
      {
        name: {
          en: "Odoo 17 (portals, reports, modules)",
          fr: "Odoo 17 (portails, rapports, modules)",
        },
        level: 85,
      },
      { name: { en: "MySQL / PostgreSQL", fr: "MySQL / PostgreSQL" }, level: 84 },
      { name: { en: "REST APIs", fr: "APIs REST" }, level: 82 },
    ],
    additional: {
      en: "Integrations, customer portals, dashboards, authentication",
      fr: "Intégrations, portails clients, tableaux de bord, authentification",
    },
  },
  {
    key: "cms",
    category: {
      en: "CMS & Delivery",
      fr: "CMS & Livraison",
    },
    icon: "Code",
    skills: [
      { name: { en: "WordPress", fr: "WordPress" }, level: 78 },
      { name: { en: "Headless (React)", fr: "Headless (React)" }, level: 80 },
      { name: { en: "Netlify / Vite", fr: "Netlify / Vite" }, level: 90 },
      { name: { en: "i18n (EN/FR)", fr: "i18n (FR/EN)" }, level: 90 },
      { name: { en: "Technical SEO", fr: "SEO technique" }, level: 70 },
    ],
    additional: {
      en: "Ideal for agency sites, landing pages, marketing content, MVPs",
      fr: "Idéal pour sites d’entreprise, landing pages, contenu marketing, MVP",
    },
  },
  {
    key: "tools",
    category: {
      en: "Tools & Workflow",
      fr: "Outils & Workflow",
    },
    icon: "Globe2",
    skills: [
      { name: { en: "Git / GitHub", fr: "Git / GitHub" }, level: 90 },
      { name: { en: "Agile / Scrum", fr: "Agile / Scrum" }, level: 85 },
      { name: { en: "Jira / planning", fr: "Jira / planification" }, level: 80 },
      { name: { en: "Figma / Adobe XD", fr: "Figma / Adobe XD" }, level: 85 },
      { name: { en: "CI/CD (Netlify, GH Actions)", fr: "CI/CD (Netlify, GH Actions)" }, level: 78 },
    ],
    additional: {
      en: "Remote collaboration, code reviews, documentation, QA",
      fr: "Collaboration à distance, revues de code, documentation, QA",
    },
  },
];
