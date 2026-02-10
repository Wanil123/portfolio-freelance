// src/components/OffersSection.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Layout,
  ShoppingBag,
  Code2,
  Check,
  ArrowRight,
  Sparkles,
  Clock,
  Star,
  Shield,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const OffersSection = ({ scrollToSection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const [activeTab, setActiveTab] = useState("vitrine");

  const handleContactClick = () => {
    if (typeof scrollToSection === "function") {
      scrollToSection("contact");
      return;
    }
    if (typeof document !== "undefined") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const tabs =
    lang === "fr"
      ? [
          { id: "vitrine", label: "Sites vitrines", icon: Layout },
          { id: "ecommerce", label: "Boutiques en ligne", icon: ShoppingBag },
          { id: "custom", label: "Sur mesure", icon: Code2 },
        ]
      : [
          { id: "vitrine", label: "Websites", icon: Layout },
          { id: "ecommerce", label: "E-commerce", icon: ShoppingBag },
          { id: "custom", label: "Custom", icon: Code2 },
        ];

  // ─── DATA ────────────────────────────────────────────────
  const data = {
    vitrine: {
      fr: [
        {
          name: "Essentiel",
          price: "4 500 $",
          pages: "5 pages sur mesure",
          timeline: "2-3 semaines",
          features: [
            "Design responsive sur mesure",
            "Formulaire de contact avec notifications",
            "Optimisation SEO de base",
            "Configuration Google Analytics",
            "Interface bilingue (FR/EN)",
          ],
          ideal: "Consultants, freelances, professionnels",
          popular: false,
          color: "from-cyan-400 to-blue-500",
          accent: "text-cyan-400",
          accentBg: "bg-cyan-500/10 border-cyan-500/20",
        },
        {
          name: "Professionnel",
          price: "6 500 $",
          pages: "7-10 pages sur mesure",
          timeline: "3-4 semaines",
          features: [
            "Tout de Essentiel +",
            "Blog intégré",
            "Animations & micro-interactions",
            "Stratégie SEO avancée",
            "Support post-lancement 60 jours",
          ],
          ideal: "PME, cabinets, agences",
          popular: true,
          color: "from-violet-400 to-purple-500",
          accent: "text-violet-400",
          accentBg: "bg-violet-500/10 border-violet-500/20",
        },
        {
          name: "Premium",
          price: "9 000 $+",
          pages: "10+ pages sur mesure",
          timeline: "4-6 semaines",
          features: [
            "Tout de Professionnel +",
            "Design UI/UX complet sur mesure",
            "Intégrations API tierces",
            "Dashboard administrateur",
            "Support prioritaire 90 jours",
          ],
          ideal: "Entreprises, marques établies",
          popular: false,
          color: "from-emerald-400 to-teal-500",
          accent: "text-emerald-400",
          accentBg: "bg-emerald-500/10 border-emerald-500/20",
        },
      ],
      en: [
        {
          name: "Essential",
          price: "4,500 CAD",
          pages: "5 custom pages",
          timeline: "2-3 weeks",
          features: [
            "Custom responsive design",
            "Contact form with notifications",
            "Basic SEO optimization",
            "Google Analytics setup",
            "Bilingual interface (FR/EN)",
          ],
          ideal: "Consultants, freelancers, professionals",
          popular: false,
          color: "from-cyan-400 to-blue-500",
          accent: "text-cyan-400",
          accentBg: "bg-cyan-500/10 border-cyan-500/20",
        },
        {
          name: "Professional",
          price: "6,500 CAD",
          pages: "7-10 custom pages",
          timeline: "3-4 weeks",
          features: [
            "Everything in Essential +",
            "Integrated blog",
            "Animations & micro-interactions",
            "Advanced SEO strategy",
            "60-day post-launch support",
          ],
          ideal: "SMBs, firms, agencies",
          popular: true,
          color: "from-violet-400 to-purple-500",
          accent: "text-violet-400",
          accentBg: "bg-violet-500/10 border-violet-500/20",
        },
        {
          name: "Premium",
          price: "9,000 CAD+",
          pages: "10+ custom pages",
          timeline: "4-6 weeks",
          features: [
            "Everything in Professional +",
            "Full custom UI/UX design",
            "Third-party API integrations",
            "Admin dashboard",
            "90-day priority support",
          ],
          ideal: "Businesses, established brands",
          popular: false,
          color: "from-emerald-400 to-teal-500",
          accent: "text-emerald-400",
          accentBg: "bg-emerald-500/10 border-emerald-500/20",
        },
      ],
    },
    ecommerce: {
      fr: [
        {
          name: "Starter",
          price: "7 500 $",
          pages: "Jusqu'à 50 produits",
          timeline: "3-4 semaines",
          features: [
            "Catalogue produits complet",
            "Panier & processus de paiement",
            "Intégration Stripe / PayPal",
            "Gestion des stocks",
            "Formation admin incluse",
          ],
          ideal: "Artisans, petits commerçants",
          popular: false,
          color: "from-cyan-400 to-blue-500",
          accent: "text-cyan-400",
          accentBg: "bg-cyan-500/10 border-cyan-500/20",
        },
        {
          name: "Business",
          price: "12 000 $",
          pages: "Jusqu'à 200 produits",
          timeline: "4-6 semaines",
          features: [
            "Tout de Starter +",
            "Filtres avancés & recherche",
            "Suivi de commandes client",
            "Codes promo & rabais",
            "Tableau de bord analytics",
          ],
          ideal: "Marques, retailers en ligne",
          popular: true,
          color: "from-violet-400 to-purple-500",
          accent: "text-violet-400",
          accentBg: "bg-violet-500/10 border-violet-500/20",
        },
        {
          name: "Entreprise",
          price: "Sur mesure",
          pages: "Produits illimités",
          timeline: "6-12 semaines",
          features: [
            "Tout de Business +",
            "Multi-devises & multi-langues",
            "Intégration Odoo 17 / ERP",
            "API & automatisations",
            "Support prioritaire 12 mois",
          ],
          ideal: "PME ambitieuses, marques en croissance",
          popular: false,
          color: "from-emerald-400 to-teal-500",
          accent: "text-emerald-400",
          accentBg: "bg-emerald-500/10 border-emerald-500/20",
        },
      ],
      en: [
        {
          name: "Starter",
          price: "7,500 CAD",
          pages: "Up to 50 products",
          timeline: "3-4 weeks",
          features: [
            "Full product catalog",
            "Cart & checkout process",
            "Stripe / PayPal integration",
            "Inventory management",
            "Admin training included",
          ],
          ideal: "Artisans, small retailers",
          popular: false,
          color: "from-cyan-400 to-blue-500",
          accent: "text-cyan-400",
          accentBg: "bg-cyan-500/10 border-cyan-500/20",
        },
        {
          name: "Business",
          price: "12,000 CAD",
          pages: "Up to 200 products",
          timeline: "4-6 weeks",
          features: [
            "Everything in Starter +",
            "Advanced filters & search",
            "Order tracking for clients",
            "Promo codes & discounts",
            "Analytics dashboard",
          ],
          ideal: "Brands, online retailers",
          popular: true,
          color: "from-violet-400 to-purple-500",
          accent: "text-violet-400",
          accentBg: "bg-violet-500/10 border-violet-500/20",
        },
        {
          name: "Enterprise",
          price: "Custom",
          pages: "Unlimited products",
          timeline: "6-12 weeks",
          features: [
            "Everything in Business +",
            "Multi-currency & multi-language",
            "Odoo 17 / ERP integration",
            "API & automations",
            "12-month priority support",
          ],
          ideal: "Ambitious SMBs, growing brands",
          popular: false,
          color: "from-emerald-400 to-teal-500",
          accent: "text-emerald-400",
          accentBg: "bg-emerald-500/10 border-emerald-500/20",
        },
      ],
    },
    custom: {
      fr: [
        {
          name: "Dashboard / Portail",
          price: "8 000 $+",
          pages: "Application web complète",
          timeline: "4-8 semaines",
          features: [
            "Atelier de cadrage inclus",
            "Authentification & rôles utilisateurs",
            "Interface moderne et intuitive",
            "Tableaux de bord interactifs",
            "Support post-lancement 60 jours",
          ],
          ideal: "Startups, équipes internes",
          popular: false,
          color: "from-cyan-400 to-blue-500",
          accent: "text-cyan-400",
          accentBg: "bg-cyan-500/10 border-cyan-500/20",
        },
        {
          name: "Application complète",
          price: "15 000 $+",
          pages: "Solution sur mesure",
          timeline: "6-12 semaines",
          features: [
            "Architecture personnalisée (API, DB)",
            "Intégrations tierces (CRM, ERP, etc.)",
            "Tests complets & CI/CD",
            "Mise en production & monitoring",
            "Support prioritaire 90 jours",
          ],
          ideal: "PME, entreprises en croissance",
          popular: true,
          color: "from-violet-400 to-purple-500",
          accent: "text-violet-400",
          accentBg: "bg-violet-500/10 border-violet-500/20",
        },
        {
          name: "Projet sur mesure",
          price: "Sur mesure",
          pages: "Selon vos besoins",
          timeline: "Sur évaluation",
          features: [
            "Cadrage complet du projet",
            "Architecture personnalisée",
            "Intégrations API & services tiers",
            "Tests complets & documentation",
            "Accompagnement continu 6 mois",
          ],
          ideal: "PME, entreprises en croissance",
          popular: false,
          color: "from-emerald-400 to-teal-500",
          accent: "text-emerald-400",
          accentBg: "bg-emerald-500/10 border-emerald-500/20",
        },
      ],
      en: [
        {
          name: "Dashboard / Portal",
          price: "8,000 CAD+",
          pages: "Full web application",
          timeline: "4-8 weeks",
          features: [
            "Scoping workshop included",
            "Authentication & user roles",
            "Modern, intuitive interface",
            "Interactive dashboards",
            "60-day post-launch support",
          ],
          ideal: "Startups, internal teams",
          popular: false,
          color: "from-cyan-400 to-blue-500",
          accent: "text-cyan-400",
          accentBg: "bg-cyan-500/10 border-cyan-500/20",
        },
        {
          name: "Full Application",
          price: "15,000 CAD+",
          pages: "Custom solution",
          timeline: "6-12 weeks",
          features: [
            "Custom architecture (API, DB)",
            "Third-party integrations (CRM, ERP)",
            "Full testing & CI/CD",
            "Production deployment & monitoring",
            "90-day priority support",
          ],
          ideal: "SMBs, growing companies",
          popular: true,
          color: "from-violet-400 to-purple-500",
          accent: "text-violet-400",
          accentBg: "bg-violet-500/10 border-violet-500/20",
        },
        {
          name: "Custom project",
          price: "Custom",
          pages: "Based on your needs",
          timeline: "On evaluation",
          features: [
            "Full project scoping",
            "Custom architecture",
            "API & third-party integrations",
            "Full testing & documentation",
            "6-month ongoing support",
          ],
          ideal: "SMBs, growing companies",
          popular: false,
          color: "from-emerald-400 to-teal-500",
          accent: "text-emerald-400",
          accentBg: "bg-emerald-500/10 border-emerald-500/20",
        },
      ],
    },
  };

  const offers = data[activeTab]?.[lang] || data.vitrine.fr;

  return (
    <section id="offers" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <Reveal className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>
              {lang === "fr" ? "Tarification transparente" : "Transparent pricing"}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Forfaits{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  clés en main
                </span>
              </>
            ) : (
              <>
                Turnkey{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  packages
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Des solutions adaptées à chaque étape de votre croissance. Pas de frais cachés, livraison garantie."
              : "Solutions tailored to every stage of your growth. No hidden fees, guaranteed delivery."}
          </p>
        </Reveal>

        {/* ─── TAB SWITCHER ─── */}
        <Reveal delay={0.1}>
          <div className="flex justify-center mb-10 md:mb-12">
            <div className="inline-flex gap-1 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800/60 backdrop-blur-sm w-full sm:w-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/25"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    }`}
                  >
                    <Icon size={14} className="flex-shrink-0" />
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ─── PRICING CARDS ─── */}
        <div
          key={activeTab}
          className="grid gap-6 md:gap-8 lg:grid-cols-3 mb-12"
        >
          {offers.map((offer, index) => (
            <Reveal key={`${activeTab}-${offer.name}`} delay={index * 0.1}>
              <div
                className={`relative group h-full ${
                  offer.popular ? "lg:-mt-4 lg:mb-4" : ""
                }`}
              >
                {/* Popular badge */}
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold shadow-lg shadow-violet-500/30">
                      <Star size={12} fill="currentColor" />
                      <span>
                        {lang === "fr" ? "Plus populaire" : "Most popular"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Glow for popular */}
                {offer.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-75" />
                )}

                {/* Card */}
                <div
                  className={`relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border ${
                    offer.popular
                      ? "border-violet-500/50"
                      : "border-slate-800/50"
                  } rounded-2xl p-6 md:p-8 flex flex-col hover:border-violet-400/50 transition-all duration-300 overflow-hidden`}
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent rounded-2xl transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Plan name */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {offer.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-1">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-slate-500 uppercase tracking-wider">
                          {lang === "fr" ? "À partir de" : "Starting at"}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent`}>
                          {offer.price}
                        </span>
                        {offer.price !== "Sur mesure" &&
                          offer.price !== "Custom" && (
                            <span className="text-sm text-slate-400">CAD</span>
                          )}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="space-y-1.5 mb-6 pb-6 border-b border-slate-800/50">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Layout size={12} className="text-slate-500" />
                        <span>{offer.pages}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock size={12} className="text-violet-400/70" />
                        <span>
                          {lang === "fr" ? "Livraison" : "Delivery"}:{" "}
                          {offer.timeline}
                        </span>
                      </div>
                      {offer.price !== "Sur mesure" &&
                        offer.price !== "Custom" && (
                          <div className="flex items-center gap-2 text-xs text-emerald-400">
                            <Shield size={12} />
                            <span>
                              {lang === "fr"
                                ? "Paiement en 2-3 versements possible"
                                : "Payment in 2-3 installments available"}
                            </span>
                          </div>
                        )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 text-sm text-slate-300 flex-1 mb-6">
                      {offer.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check
                            size={16}
                            className="flex-shrink-0 mt-0.5 text-emerald-400"
                          />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Ideal for */}
                    <div className="mb-5 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                      <p className="text-xs text-slate-500 mb-0.5 font-medium uppercase tracking-wider">
                        {lang === "fr" ? "Idéal pour" : "Ideal for"}
                      </p>
                      <p className="text-sm text-slate-200">{offer.ideal}</p>
                    </div>

                    {/* CTA */}
                    <button
                      type="button"
                      onClick={handleContactClick}
                      className={`group/btn w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl ${
                        offer.popular
                          ? "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
                          : "bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 text-white"
                      } text-sm font-semibold transition-all active:scale-95`}
                    >
                      {lang === "fr" ? "Obtenir un devis" : "Get quote"}
                      <ArrowRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ─── BOTTOM INFO ─── */}
        <Reveal delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Inclus */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Check size={20} className="text-emerald-400" />
                    {lang === "fr"
                      ? "Inclus dans tous les forfaits"
                      : "Included in all packages"}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {(lang === "fr"
                      ? [
                          "Code propre et documenté (React/Laravel)",
                          "Responsive mobile/tablette/desktop",
                          "Hébergement & mise en ligne",
                          "Support post-lancement inclus",
                        ]
                      : [
                          "Clean, documented code (React/Laravel)",
                          "Mobile/tablet/desktop responsive",
                          "Hosting & deployment",
                          "Post-launch support included",
                        ]
                    ).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles size={20} className="text-violet-400" />
                    {lang === "fr" ? "Options disponibles" : "Available add-ons"}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {(lang === "fr"
                      ? [
                          "Maintenance mensuelle (85-120 $/h)",
                          "SEO & référencement (800 $/mois+)",
                          "Landing pages additionnelles",
                          "Formation avancée",
                        ]
                      : [
                          "Monthly maintenance ($85-120/h)",
                          "SEO & ranking ($800/mo+)",
                          "Additional landing pages",
                          "Advanced training",
                        ]
                    ).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center items-start md:items-center">
                  <p className="text-sm text-slate-300 mb-4 md:text-center">
                    {lang === "fr"
                      ? "Pas sûr du forfait idéal? Parlons de votre projet."
                      : "Not sure which package? Let's discuss your project."}
                  </p>
                  <button
                    type="button"
                    onClick={handleContactClick}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all active:scale-95"
                  >
                    {lang === "fr"
                      ? "Consultation gratuite — 30 min"
                      : "Free consultation — 30 min"}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default OffersSection;
