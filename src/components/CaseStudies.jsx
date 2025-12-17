// src/components/CaseStudies.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  TrendingUp,
  Clock,
  Target,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Users,
  Zap,
  BarChart3,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const CaseStudies = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const [expandedCase, setExpandedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      client: "BoutiqueMode QC",
      industry: {
        fr: "E-commerce Mode",
        en: "Fashion E-commerce",
      },
      logo: "BM",
      color: "from-pink-400 to-rose-500",
      challenge: {
        fr: "Une boutique de mode québécoise vendait uniquement en magasin. Ils voulaient lancer leur présence en ligne mais avaient un budget limité et un délai serré avant la saison des fêtes.",
        en: "A Quebec fashion boutique was selling only in-store. They wanted to launch their online presence but had a limited budget and tight deadline before the holiday season.",
      },
      solution: {
        fr: "Développement d'une boutique e-commerce React avec catalogue produits, panier d'achats, et intégration Stripe. Interface bilingue FR/EN et design responsive mobile-first.",
        en: "Development of a React e-commerce store with product catalog, shopping cart, and Stripe integration. Bilingual FR/EN interface and mobile-first responsive design.",
      },
      results: [
        {
          metric: "+40%",
          label: { fr: "Augmentation des ventes", en: "Sales increase" },
          icon: TrendingUp,
        },
        {
          metric: "3 sem.",
          label: { fr: "Délai de livraison", en: "Delivery time" },
          icon: Clock,
        },
        {
          metric: "92",
          label: { fr: "Score Lighthouse", en: "Lighthouse score" },
          icon: Zap,
        },
      ],
      testimonial: {
        fr: "Wanil a livré notre boutique en ligne en seulement 3 semaines. Le site est rapide, beau et nos ventes ont augmenté de 40% le premier mois.",
        en: "Wanil delivered our online store in just 3 weeks. The site is fast, beautiful and our sales increased by 40% in the first month.",
      },
      author: "Marie-Claire D., Fondatrice",
      tech: ["React 18", "Tailwind CSS", "Stripe", "Netlify"],
    },
    {
      id: 2,
      client: "Groupe Industriel MTL",
      industry: {
        fr: "Manufacturier",
        en: "Manufacturing",
      },
      logo: "GI",
      color: "from-violet-400 to-purple-500",
      challenge: {
        fr: "Une entreprise manufacturière utilisait Odoo 17 mais avait besoin de portails clients personnalisés bilingues pour permettre à leurs clients de suivre leurs commandes et factures.",
        en: "A manufacturing company was using Odoo 17 but needed custom bilingual customer portals to allow their clients to track orders and invoices.",
      },
      solution: {
        fr: "Développement de modules Odoo personnalisés avec portail client bilingue (FR/EN), génération automatique de rapports PDF QWeb, et intégration API avec leur système de livraison.",
        en: "Development of custom Odoo modules with bilingual customer portal (FR/EN), automatic QWeb PDF report generation, and API integration with their shipping system.",
      },
      results: [
        {
          metric: "-60%",
          label: { fr: "Appels support client", en: "Customer support calls" },
          icon: Users,
        },
        {
          metric: "4 sem.",
          label: { fr: "Délai de livraison", en: "Delivery time" },
          icon: Clock,
        },
        {
          metric: "100%",
          label: { fr: "Adoption client", en: "Client adoption" },
          icon: Target,
        },
      ],
      testimonial: {
        fr: "L'intégration Odoo 17 était complexe mais Wanil a su créer des portails clients bilingues parfaitement adaptés à nos besoins. Le support post-lancement était impeccable.",
        en: "The Odoo 17 integration was complex but Wanil created bilingual customer portals perfectly suited to our needs. Post-launch support was impeccable.",
      },
      author: "Jean-François T., Directeur TI",
      tech: ["Odoo 17", "Python", "QWeb", "PostgreSQL"],
    },
    {
      id: 3,
      client: "Clinique Santé Plus",
      industry: {
        fr: "Santé & Bien-être",
        en: "Health & Wellness",
      },
      logo: "CS",
      color: "from-emerald-400 to-green-500",
      challenge: {
        fr: "Une clinique de santé avait un site web daté de 2018, non responsive et sans système de réservation en ligne. Ils perdaient des patients au profit de concurrents plus modernes.",
        en: "A health clinic had a dated 2018 website, not responsive and without an online booking system. They were losing patients to more modern competitors.",
      },
      solution: {
        fr: "Refonte complète du site avec design moderne, système de réservation en ligne intégré avec leur agenda, et optimisation SEO locale pour Montréal.",
        en: "Complete website redesign with modern design, integrated online booking system with their calendar, and local SEO optimization for Montreal.",
      },
      results: [
        {
          metric: "+65%",
          label: { fr: "Réservations en ligne", en: "Online bookings" },
          icon: BarChart3,
        },
        {
          metric: "2.5 sem.",
          label: { fr: "Délai de livraison", en: "Delivery time" },
          icon: Clock,
        },
        {
          metric: "#3",
          label: { fr: "Position Google locale", en: "Local Google ranking" },
          icon: Target,
        },
      ],
      testimonial: {
        fr: "Notre ancien site datait de 2018. Wanil l'a complètement modernisé avec un design professionnel et un système de réservation en ligne. Nos patients adorent!",
        en: "Our old site was from 2018. Wanil completely modernized it with a professional design and online booking system. Our patients love it!",
      },
      author: "Sophie L., Propriétaire",
      tech: ["Vue.js 3", "Tailwind CSS", "Calendly API", "Netlify"],
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>{lang === "fr" ? "Études de cas" : "Case studies"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Résultats{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  concrets
                </span>
              </>
            ) : (
              <>
                Concrete{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  results
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs."
              : "Discover how we helped our clients achieve their goals."}
          </p>
        </Reveal>

        {/* Case Studies */}
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.1}>
              <div
                className={`group relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  expandedCase === study.id
                    ? "border-violet-500/50"
                    : "border-slate-800/50 hover:border-slate-700/50"
                }`}
              >
                {/* Main Content (Always visible) */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Logo & Info */}
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${study.color} text-white font-bold text-lg flex-shrink-0`}
                      >
                        {study.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {study.client}
                        </h3>
                        <p className="text-sm text-slate-400 mb-3">
                          {study.industry[lang]}
                        </p>

                        {/* Results Summary */}
                        <div className="flex flex-wrap gap-4">
                          {study.results.map((result, idx) => {
                            const Icon = result.icon;
                            return (
                              <div key={idx} className="flex items-center gap-2">
                                <Icon size={16} className="text-violet-400" />
                                <span className="text-lg font-bold text-white">
                                  {result.metric}
                                </span>
                                <span className="text-xs text-slate-500">
                                  {result.label[lang]}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() =>
                        setExpandedCase(expandedCase === study.id ? null : study.id)
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white text-sm font-medium transition-all"
                    >
                      {expandedCase === study.id
                        ? lang === "fr"
                          ? "Réduire"
                          : "Collapse"
                        : lang === "fr"
                        ? "Voir les détails"
                        : "View details"}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          expandedCase === study.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    expandedCase === study.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-slate-800/50">
                      <div className="grid md:grid-cols-2 gap-6 pt-6">
                        {/* Challenge */}
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                            <Target size={16} className="text-amber-400" />
                            {lang === "fr" ? "Le défi" : "The challenge"}
                          </h4>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {study.challenge[lang]}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                            <CheckCircle2 size={16} className="text-emerald-400" />
                            {lang === "fr" ? "La solution" : "The solution"}
                          </h4>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {study.solution[lang]}
                          </p>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="mt-6 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                        <p className="text-sm text-slate-300 italic mb-2">
                          "{study.testimonial[lang]}"
                        </p>
                        <p className="text-xs text-slate-500">
                          — {study.author}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="text-xs text-slate-500">
                          {lang === "fr" ? "Technologies:" : "Technologies:"}
                        </span>
                        {study.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-md bg-slate-800/50 border border-slate-700/30 text-xs text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
            >
              {lang === "fr"
                ? "Discutons de votre projet"
                : "Let's discuss your project"}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudies;
