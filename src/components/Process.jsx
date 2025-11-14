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
  Settings,
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
    icon: CheckCircle2,
    color: "from-emerald-400 to-green-500",
    fr: {
      title: "Plan de projet & devis",
      desc: "Structure du site ou de l'application, fonctionnalités, technologies (React, Vue, Laravel, WordPress), délais et budget. Tout est formalisé, sans surprise.",
    },
    en: {
      title: "Project plan & estimate",
      desc: "Site/app structure, features, stack (React, Vue, Laravel, WordPress), timeline and budget. Everything is written, no surprises.",
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
    icon: ShoppingCart,
    color: "from-orange-400 to-amber-500",
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
    icon: Settings,
    color: "from-indigo-400 to-blue-500",
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
  const lang = i18n.language?.startsWith("en") ? "en" : "fr";

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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const content = step[lang];
            const Icon = step.icon;

            return (
              <Reveal key={step.key} delay={index * 0.08}>
                <div className="group relative h-full">
                  {/* Glow effect on hover */}
                  <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent rounded-2xl blur-xl transition-opacity duration-500" />

                  <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 hover:border-violet-400/50 transition-all duration-300 overflow-hidden">
                    {/* Header with icon and number */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <Icon
                          size={20}
                          className={`bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}
                        />
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-sm font-bold flex-shrink-0">
                        {step.id}
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">
                      {content.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {content.desc}
                    </p>

                    <div
                      className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${step.color} opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all`}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
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
                          ? "Parlez-nous de votre projet et recevez une estimation détaillée sous 48h."
                          : "Tell us about your project and receive a detailed estimate within 48 hours."}
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
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white border-2 border-slate-950">
                            V
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
                            React · Vue · Laravel
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
