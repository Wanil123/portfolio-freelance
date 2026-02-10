// src/components/Process.jsx
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Palette,
  Code,
  ShoppingCart,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const steps = [
  {
    id: "01",
    key: "discovery",
    icon: Lightbulb,
    color: "from-cyan-400 to-blue-500",
    fr: {
      title: "Découverte & objectifs",
      desc: "Je clarifie votre activité, votre marché, votre public (FR/EN) et surtout ce que le site doit accomplir : vendre, présenter ou générer des contacts.",
    },
    en: {
      title: "Discovery & goals",
      desc: "I clarify your business, target audience (FR/EN) and what the site must do: sell, present or generate leads.",
    },
  },
  {
    id: "02",
    key: "plan",
    icon: CheckCircle2,
    color: "from-emerald-400 to-green-500",
    fr: {
      title: "Plan de projet & devis",
      desc: "Structure du site, fonctionnalités, technologies (React, Laravel, Tailwind), délais et budget. Tout est formalisé, sans surprise.",
    },
    en: {
      title: "Project plan & estimate",
      desc: "Site structure, features, stack (React, Laravel, Tailwind), timeline and budget. Everything is written, no surprises.",
    },
  },
  {
    id: "03",
    key: "design",
    icon: Palette,
    color: "from-pink-400 to-rose-500",
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
    icon: Code,
    color: "from-violet-400 to-purple-500",
    fr: {
      title: "Développement du site / app",
      desc: "Intégration soignée en React + Tailwind ou Laravel, animations, responsive, formulaires de contact, bilingue FR/EN. Code versionné et propre.",
    },
    en: {
      title: "Website / app development",
      desc: "Clean React + Tailwind or Laravel build, animations, responsive, contact forms, FR/EN. Versioned code.",
    },
  },
  {
    id: "05",
    key: "ecom",
    icon: ShoppingCart,
    color: "from-orange-400 to-amber-500",
    fr: {
      title: "E-commerce & intégrations",
      desc: "Boutique en ligne avec Laravel, paiement (Stripe), connexion à vos outils (CRM, Odoo, API, automatisations e-mail). Conçu pour convertir.",
    },
    en: {
      title: "E-commerce & integrations",
      desc: "Online shop with Laravel, payments (Stripe), CRM/Odoo/API connections, email automations. Built to sell.",
    },
  },
];

const included = {
  fr: [
    "Contrat / mandat clair",
    "Suivi par e-mail / WhatsApp",
    "Code livré et versionné (Git)",
    "Site bilingue FR/EN disponible",
    "Déploiement (Netlify, VPS, hébergeur client)",
    "Formation administration incluse",
    "Support 30 jours post-lancement",
  ],
  en: [
    "Clear contract / SoW",
    "Follow-up by e-mail / WhatsApp",
    "Code on Git / handover",
    "Bilingual site FR/EN available",
    "Deployment (Netlify, VPS, client hosting)",
    "Admin training included",
    "30-day post-launch support",
  ],
};

const Process = ({ id = "process", scrollToSection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const handleQuoteClick = () => {
    if (scrollToSection) {
      scrollToSection("contact");
    } else {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id={id} className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>
              {lang === "fr" ? "Processus de livraison" : "Delivery process"}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                De l'idée au{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  lancement
                </span>
              </>
            ) : (
              <>
                From idea to{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  launch
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Un processus structuré et transparent pour livrer votre projet web dans les temps, sans surprise."
              : "A structured, transparent process to deliver your web project on time, with no surprises."}
          </p>
        </Reveal>

        {/* Steps Timeline */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Vertical connecting line */}
          <div className="absolute left-7 md:left-9 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/30 via-violet-500/40 to-orange-500/30" />

          <div className="space-y-5 md:space-y-6">
            {steps.map((step, index) => {
              const content = step[lang];
              const Icon = step.icon;

              return (
                <Reveal key={step.key} delay={index * 0.08}>
                  <div className="group relative flex gap-4 md:gap-6">
                    {/* Step icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`flex h-14 w-14 md:h-[4.5rem] md:w-[4.5rem] items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:scale-105 transition-transform duration-300`}
                      >
                        <Icon size={26} className="text-white" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 min-w-0">
                      <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 rounded-2xl p-5 md:p-6 group-hover:border-violet-400/30 transition-all duration-300">
                        <span
                          className={`inline-block text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-1.5`}
                        >
                          {lang === "fr" ? `Étape ${step.id}` : `Step ${step.id}`}
                        </span>
                        <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight">
                          {content.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {content.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom Section - What's Included + CTA */}
        <Reveal delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left - Included */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 size={24} className="text-emerald-400" />
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {lang === "fr"
                          ? "Toujours inclus dans chaque projet"
                          : "Always included in every project"}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-400 mb-6">
                      {lang === "fr"
                        ? "Qualité professionnelle garantie, peu importe le forfait choisi."
                        : "Professional quality guaranteed, regardless of the package you choose."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {included[lang].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-violet-500/30 hover:bg-slate-800/50 transition-all"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-emerald-400 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-slate-200">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - CTA Card */}
                <div className="relative">
                  <div className="sticky top-8 space-y-4">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30">
                      <h4 className="text-lg font-bold text-white mb-3">
                        {lang === "fr"
                          ? "Prêt à démarrer ?"
                          : "Ready to start?"}
                      </h4>
                      <p className="text-sm text-slate-300 mb-4">
                        {lang === "fr"
                          ? "Parlez-moi de votre projet et recevez une estimation détaillée sous 48h."
                          : "Tell me about your project and receive a detailed estimate within 48 hours."}
                      </p>
                      <button
                        onClick={handleQuoteClick}
                        className="group w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
                      >
                        {lang === "fr"
                          ? "Demander une soumission"
                          : "Request a quote"}
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>

                    {/* Trust badge */}
                    <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-xs font-bold text-white border-2 border-slate-950">
                            R
                          </div>
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-xs font-bold text-white border-2 border-slate-950">
                            T
                          </div>
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-xs font-bold text-white border-2 border-slate-950">
                            L
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">
                            {lang === "fr"
                              ? "Stack moderne"
                              : "Modern stack"}
                          </p>
                          <p className="text-xs text-slate-400">
                            React · Tailwind · Laravel
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Timeline */}
        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400">
              {lang === "fr" ? (
                <>
                  <span className="text-violet-400 font-semibold">
                    Délai moyen :
                  </span>{" "}
                  2 à 8 semaines selon la complexité du projet
                </>
              ) : (
                <>
                  <span className="text-violet-400 font-semibold">
                    Average timeline:
                  </span>{" "}
                  2 to 8 weeks depending on project complexity
                </>
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Process;
