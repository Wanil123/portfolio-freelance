// src/data/skillCategories.js

export const skillCategories = [
  {
    key: "frontend",
    category: {
      en: "Front-End Development",
      fr: "Développement front-end",
    },
    icon: "Palette",
    color: "from-violet-400 to-purple-500",
    skills: [
      { name: { en: "HTML5 / CSS3", fr: "HTML5 / CSS3" }, level: 96 },
      { name: { en: "JavaScript ES6+", fr: "JavaScript ES6+" }, level: 92 },
      { name: { en: "React 18", fr: "React 18" }, level: 88 },
      { name: { en: "Vue.js 3", fr: "Vue.js 3" }, level: 90 },
      { name: { en: "Tailwind CSS", fr: "Tailwind CSS" }, level: 94 },
      { name: { en: "TypeScript", fr: "TypeScript" }, level: 82 },
    ],
    additional: {
      en: "Modern UI/UX implementation, responsive design, WCAG accessibility, micro-interactions, performance optimization, design handoff from Figma/Adobe XD",
      fr: "Implémentation UI/UX moderne, design responsive, accessibilité WCAG, micro-interactions, optimisation performance, intégration depuis Figma/Adobe XD",
    },
  },
  {
    key: "backend",
    category: {
      en: "Back-End & ERP",
      fr: "Back-end & ERP",
    },
    icon: "Server",
    color: "from-emerald-400 to-green-500",
    skills: [
      { name: { en: "PHP / Laravel", fr: "PHP / Laravel" }, level: 90 },
      { name: { en: "Python", fr: "Python" }, level: 84 },
      { name: { en: "Odoo 17 (modules, portals)", fr: "Odoo 17 (modules, portails)" }, level: 86 },
      { name: { en: "MySQL / PostgreSQL", fr: "MySQL / PostgreSQL" }, level: 88 },
      { name: { en: "REST APIs", fr: "APIs REST" }, level: 85 },
      { name: { en: "Authentication & Security", fr: "Authentification & sécurité" }, level: 82 },
    ],
    additional: {
      en: "Custom integrations, bilingual customer portals, admin dashboards, role-based access control, API design, database optimization, ERP customization",
      fr: "Intégrations personnalisées, portails clients bilingues, tableaux de bord admin, contrôle d'accès par rôles, conception d'API, optimisation base de données, personnalisation ERP",
    },
  },
  {
    key: "cms",
    category: {
      en: "CMS & Deployment",
      fr: "CMS & déploiement",
    },
    icon: "Code",
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: { en: "WordPress", fr: "WordPress" }, level: 80 },
      { name: { en: "Headless CMS (React/Vue)", fr: "CMS Headless (React/Vue)" }, level: 85 },
      { name: { en: "Vite / Webpack", fr: "Vite / Webpack" }, level: 88 },
      { name: { en: "i18n (FR/EN)", fr: "i18n (FR/EN)" }, level: 92 },
      { name: { en: "Technical SEO", fr: "SEO technique" }, level: 75 },
      { name: { en: "CI/CD Pipelines", fr: "Pipelines CI/CD" }, level: 80 },
    ],
    additional: {
      en: "Optimized for agency sites, landing pages, marketing campaigns, MVPs. Fast deployment, bilingual content management, performance monitoring, Core Web Vitals optimization",
      fr: "Optimisé pour sites d'agence, pages d'atterrissage, campagnes marketing, MVP. Déploiement rapide, gestion de contenu bilingue, monitoring performance, optimisation Core Web Vitals",
    },
  },
  {
    key: "tools",
    category: {
      en: "Tools & Workflow",
      fr: "Outils & méthodologie",
    },
    icon: "Globe2",
    color: "from-orange-400 to-amber-500",
    skills: [
      { name: { en: "Git / GitHub", fr: "Git / GitHub" }, level: 92 },
      { name: { en: "Agile / Scrum", fr: "Agile / Scrum" }, level: 88 },
      { name: { en: "Jira / Project Management", fr: "Jira / Gestion de projets" }, level: 85 },
      { name: { en: "Figma / Adobe XD", fr: "Figma / Adobe XD" }, level: 86 },
      { name: { en: "Netlify / Vercel", fr: "Netlify / Vercel" }, level: 90 },
      { name: { en: "Testing & QA", fr: "Tests & QA" }, level: 78 },
    ],
    additional: {
      en: "Remote collaboration expertise, code reviews, comprehensive documentation, automated testing, continuous integration, agile project management, design-to-code workflow",
      fr: "Expertise collaboration à distance, revues de code, documentation complète, tests automatisés, intégration continue, gestion de projets agile, workflow design vers code",
    },
  },
];