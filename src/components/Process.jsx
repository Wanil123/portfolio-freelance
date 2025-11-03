// src/components/Process.jsx
import { useTranslation } from "react-i18next";

const steps = [
  {
    id: "01",
    key: "discovery",
    fr: {
      title: "Découverte & objectifs",
      desc: "Nous clarifions votre activité, votre marché, votre public (FR/EN) et surtout ce que le site doit accomplir : vendre, présenter, générer des contacts ou automatiser.",
    },
    en: {
      title: "Discovery & goals",
      desc: "We clarify your business, target audience (FR/EN) and what the site must do: sell, present, generate leads or automate.",
    },
  },
  {
    id: "02",
    key: "plan",
    fr: {
      title: "Plan de projet & devis",
      desc: "Structure du site ou de l’application, fonctionnalités, technologies (React, Vue, Laravel, WordPress), délais et budget. Tout est formalisé, sans surprise.",
    },
    en: {
      title: "Project plan & estimate",
      desc: "Site/app structure, features, stack (React, Vue, Laravel, WordPress), timeline and budget. Everything is written, no surprises.",
    },
  },
  {
    id: "03",
    key: "design",
    fr: {
      title: "UX/UI & contenu",
      desc: "Maquettes Figma/XD selon votre identité visuelle, variantes sombre/clair, sections services/projets, SEO de base. Validation avant développement.",
    },
    en: {
      title: "UX/UI & content",
      desc: "Figma/XD mockups based on your brand, dark/light variants, services/projects sections, basic SEO. Validation before dev.",
    },
  },
  {
    id: "04",
    key: "build",
    fr: {
      title: "Développement du site / app",
      desc: "Intégration soignée en React/Vue ou WordPress, animations, responsive, formulaires de contact, bilingue FR/EN. Code versionné et propre.",
    },
    en: {
      title: "Website / app development",
      desc: "Clean React/Vue or WordPress build, animations, responsive, contact forms, FR/EN. Versioned code.",
    },
  },
  {
    id: "05",
    key: "ecom",
    fr: {
      title: "E-commerce & intégrations",
      desc: "Boutique en ligne (WooCommerce / Laravel), paiement (Stripe), connexion à vos outils (CRM, API, automatisations e-mail). Conçu pour convertir.",
    },
    en: {
      title: "E-commerce & integrations",
      desc: "Online shop (WooCommerce / Laravel), payments (Stripe), CRM/API connections, email automations. Built to sell.",
    },
  },
  {
    id: "06",
    key: "odoo",
    fr: {
      title: "Odoo / ERP & maintenance",
      desc: "Pour les entreprises qui souhaitent aller plus loin : portails clients bilingues, modules Odoo 17 sur mesure, accompagnement et mises à jour.",
    },
    en: {
      title: "Odoo / ERP & maintenance",
      desc: "For companies that need more: bilingual customer portals, custom Odoo 17 modules, support and updates.",
    },
  },
];

const included = {
  fr: [
    "Contrat / mandat clair",
    "Suivi par e-mail / WhatsApp",
    "Code livré et versionné (Git)",
    "Possibilité de site bilingue FR/EN",
    "Déploiement (Netlify, VPS, hébergeur client)",
  ],
  en: [
    "Clear contract / SoW",
    "Follow-up by e-mail / WhatsApp",
    "Code on Git / handover",
    "Bilingual site FR/EN available",
    "Deployment (Netlify, VPS, client hosting)",
  ],
};

const Process = ({ id = "process" }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "fr";

  return (
    <section id={id} className="py-16 md:py-20 bg-slate-950/10">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm tracking-[0.25em] uppercase text-violet-200/70">
              {lang === "fr" ? "Processus de réalisation" : "Delivery process"}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-2">
              {lang === "fr"
                ? "Notre façon de livrer votre projet web"
                : "How we deliver your web project"}
            </h2>
            <p className="text-slate-300 mt-4 max-w-2xl leading-relaxed text-sm md:text-base">
              {lang === "fr"
                ? "Pensé pour les PME, agences et entrepreneurs qui souhaitent un site ou une application modernes, rapides, multilingues — avec la possibilité d’ajouter de l’Odoo par la suite."
                : "Built for SMBs, agencies and entrepreneurs who want a modern, fast, multilingual site — with the option to add Odoo later."}
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-700/60 rounded-2xl px-5 py-4 max-w-sm">
            <p className="text-xs uppercase tracking-wide text-slate-200/70 mb-2">
              {lang === "fr" ? "Prestations les plus demandées" : "Most requested"}
            </p>
            <p className="text-slate-100 text-sm">
              {lang === "fr"
                ? "Sites vitrines, landing pages, e-commerce, intégrations API, WordPress, React/Vue, puis Odoo."
                : "Marketing sites, landing pages, e-commerce, API integrations, WordPress, React/Vue, then Odoo."}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Col 1 : 1-2-3 */}
          <div className="space-y-6">
            {steps.slice(0, 3).map((step) => {
              const content = step[lang];
              return (
                <div
                  key={step.key}
                  className="rounded-2xl bg-slate-900/40 border border-slate-800/70 p-4 md:p-6 hover:border-violet-400/80 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-violet-500/10 border border-violet-400/50 flex items-center justify-center text-violet-100 font-semibold">
                      {step.id}
                    </div>
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {content.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {content.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Col 2 : 4-5-6 */}
          <div className="space-y-6">
            {steps.slice(3, 6).map((step) => {
              const content = step[lang];
              return (
                <div
                  key={step.key}
                  className="rounded-2xl bg-slate-900/40 border border-slate-800/70 p-4 md:p-6 hover:border-violet-400/80 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-violet-500/10 border border-violet-400/50 flex items-center justify-center text-violet-100 font-semibold">
                      {step.id}
                    </div>
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {content.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {content.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Col 3 : bloc agence */}
          <div className="rounded-2xl bg-gradient-to-b from-violet-600/15 to-slate-900/60 border border-violet-500/40 p-6 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-violet-100/90 mb-2">
                {lang === "fr" ? "Toujours inclus" : "Always included"}
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {lang === "fr"
                  ? "Qualité agence, livrables clairs"
                  : "Agency-level, clear deliverables"}
              </h3>
              <ul className="space-y-3">
                {included[lang].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-300/90" />
                    <span className="text-slate-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/30 border border-violet-500/30 rounded-xl p-4">
              <p className="text-slate-100 text-sm mb-3">
                {lang === "fr"
                  ? "Expliquez-nous votre projet (site, application, e-commerce ou intégration) et nous revenons vers vous rapidement."
                  : "Tell us about your project (site, app, e-commerce or integration) and we’ll get back to you quickly."}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-violet-500 text-white text-sm font-medium hover:bg-violet-400 transition"
              >
                {lang === "fr" ? "Parler à PrimeDev" : "Talk to PrimeDev"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
