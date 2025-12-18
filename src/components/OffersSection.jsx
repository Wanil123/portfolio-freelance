// src/components/OffersSection.jsx
import { useTranslation } from "react-i18next";
import {
  Layout,
  ShoppingBag,
  Code2,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const OffersSection = ({ scrollToSection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const title =
    lang === "fr" ? "Forfaits & tarifs" : "Packages & pricing";

  const subtitle =
    lang === "fr"
      ? "Offres transparentes et complètes pour démarrer rapidement. Pas de frais cachés, livraison garantie."
      : "Transparent, complete packages to start quickly. No hidden fees, guaranteed delivery.";

  // ✅ FONCTION COMMUNE POUR ALLER À LA SECTION CONTACT
  const handleContactClick = () => {
    if (typeof scrollToSection === "function") {
      scrollToSection("contact");
      return;
    }

    // Fallback si scrollToSection n'est pas fourni
    if (typeof document !== "undefined") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const offers =
    lang === "fr"
      ? [
          {
            icon: Layout,
            label: "Site vitrine PME",
            short:
              "Présentez votre entreprise professionnellement et générez des contacts qualifiés.",
            points: [
              "Design moderne et responsive",
              "5-7 pages (Accueil, Services, À propos, Contact, etc.)",
              "Formulaire de contact + CTA optimisés",
              "Optimisation SEO de base",
              "Version bilingue FR/EN incluse",
            ],
            price: "3 500 $",
            timeline: "2-3 semaines",
            popular: false,
            color: "from-cyan-400 to-blue-500",
          },
          {
            icon: ShoppingBag,
            label: "Boutique en ligne",
            short:
              "Vendez vos produits 24/7 avec une expérience client fluide et sécurisée.",
            points: [
              "Catalogue produits + filtres avancés",
              "Panier & checkout complet",
              "Intégration Stripe/PayPal",
              "Gestion des stocks & commandes",
              "Pages légales + politique de retour",
              "Formation administration incluse",
            ],
            price: "5 500 $",
            timeline: "3-4 semaines",
            popular: true,
            color: "from-violet-400 to-purple-500",
          },
          {
            icon: Code2,
            label: "Application sur mesure",
            short:
              "Portails, dashboards, outils internes adaptés à vos processus uniques.",
            points: [
              "Atelier de cadrage inclus",
              "Architecture personnalisée (API, DB, rôles)",
              "Interface moderne et intuitive",
              "Intégrations tierces (CRM, ERP, etc.)",
              "Tests complets + mise en production",
              "Support post-lancement 30 jours",
            ],
            price: "Sur devis",
            timeline: "4-8 semaines",
            popular: false,
            color: "from-emerald-400 to-green-500",
          },
        ]
      : [
          {
            icon: Layout,
            label: "Business website",
            short:
              "Present your company professionally and generate qualified leads.",
            points: [
              "Modern, responsive design",
              "5-7 pages (Home, Services, About, Contact, etc.)",
              "Contact form + optimized CTAs",
              "Basic SEO optimization",
              "Bilingual FR/EN version included",
            ],
            price: "3,500 CAD",
            timeline: "2-3 weeks",
            popular: false,
            color: "from-cyan-400 to-blue-500",
          },
          {
            icon: ShoppingBag,
            label: "E-commerce store",
            short:
              "Sell your products 24/7 with a smooth, secure customer experience.",
            points: [
              "Product catalog + advanced filters",
              "Cart & complete checkout",
              "Stripe/PayPal integration",
              "Inventory & order management",
              "Legal pages + refund policy",
              "Admin training included",
            ],
            price: "5,500 CAD",
            timeline: "3-4 weeks",
            popular: true,
            color: "from-violet-400 to-purple-500",
          },
          {
            icon: Code2,
            label: "Custom application",
            short:
              "Portals, dashboards, internal tools adapted to your unique processes.",
            points: [
              "Scoping workshop included",
              "Custom architecture (API, DB, roles)",
              "Modern, intuitive interface",
              "Third-party integrations (CRM, ERP, etc.)",
              "Complete testing + production launch",
              "30-day post-launch support",
            ],
            price: "On quote",
            timeline: "4-8 weeks",
            popular: false,
            color: "from-emerald-400 to-green-500",
          },
        ];

  return (
    <section
      id="offers"
      className="py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>
              {lang === "fr"
                ? "Tarification transparente"
                : "Transparent pricing"}
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
            {subtitle}
          </p>
        </Reveal>

        {/* Offers Grid */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 mb-12">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Reveal key={offer.label} delay={index * 0.1}>
                <div
                  className={`relative group h-full ${
                    offer.popular ? "lg:-mt-4 lg:mb-4" : ""
                  }`}
                >
                  {/* Popular badge */}
                  {offer.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold shadow-lg shadow-violet-500/30">
                        <Zap size={12} />
                        <span>
                          {lang === "fr"
                            ? "Plus populaire"
                            : "Most popular"}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Glow effect for popular */}
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
                      {/* Icon + Title */}
                      <div className="mb-6">
                        <div
                          className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${offer.color} bg-opacity-10 border border-white/10 mb-4 group-hover:scale-110 transition-transform`}
                        >
                          <Icon
                            size={24}
                            className={`bg-gradient-to-br ${offer.color} bg-clip-text text-transparent`}
                          />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {offer.label}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {offer.short}
                        </p>
                      </div>

                      {/* Price + Timeline */}
                      <div className="mb-6 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-xs text-slate-500 uppercase tracking-wider">
                            {lang === "fr" ? "À partir de" : "Starting at"}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-3xl font-bold text-white">
                            {offer.price}
                          </span>
                          {offer.price !== "Sur devis" &&
                            offer.price !== "On quote" && (
                              <span className="text-sm text-slate-400">
                                CAD
                              </span>
                            )}
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <div
                              className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${offer.color}`}
                            />
                            <span>
                              {lang === "fr" ? "Livraison" : "Delivery"}:{" "}
                              {offer.timeline}
                            </span>
                          </div>
                          {offer.price !== "Sur devis" && offer.price !== "On quote" && (
                            <div className="flex items-center gap-2 text-xs text-emerald-400">
                              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              <span>
                                {lang === "fr"
                                  ? "Paiement en 2-3 versements possible"
                                  : "Payment in 2-3 installments available"}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 text-sm text-slate-300 flex-1 mb-6">
                        {offer.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5"
                          >
                            <Check
                              size={18}
                              className={`flex-shrink-0 mt-0.5 bg-gradient-to-br ${offer.color} bg-clip-text text-transparent`}
                            />
                            <span className="leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Buttons */}
                      <div className="flex flex-col gap-3">
                        <button
                          onClick={handleContactClick}
                          className={`group/btn w-full flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl ${
                            offer.popular
                              ? "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
                              : "bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 text-white"
                          } text-xs md:text-sm font-semibold transition-all active:scale-95`}
                          type="button"
                        >
                          {lang === "fr"
                            ? "Obtenir un devis"
                            : "Get quote"}
                          <ArrowRight
                            size={14}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Info Section */}
        <Reveal delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* What's included */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Check size={20} className="text-emerald-400" />
                    {lang === "fr"
                      ? "Inclus dans tous les forfaits"
                      : "Included in all packages"}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      <span>
                        {lang === "fr"
                          ? "Code propre et documenté"
                          : "Clean, documented code"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      <span>
                        {lang === "fr"
                          ? "Responsive mobile/tablette/desktop"
                          : "Mobile/tablet/desktop responsive"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      <span>
                        {lang === "fr"
                          ? "Support 30 jours post-lancement"
                          : "30-day post-launch support"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Add-ons */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles size={20} className="text-violet-400" />
                    {lang === "fr"
                      ? "Options disponibles"
                      : "Available add-ons"}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      <span>
                        {lang === "fr"
                          ? "Maintenance mensuelle"
                          : "Monthly maintenance"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      <span>
                        {lang === "fr"
                          ? "Hébergement géré"
                          : "Managed hosting"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      <span>
                        {lang === "fr"
                          ? "Formation avancée"
                          : "Advanced training"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center items-start md:items-center">
                  <p className="text-sm text-slate-300 mb-4 md:text-center">
                    {lang === "fr"
                      ? "Besoin d'aide pour choisir? Parlons de votre projet."
                      : "Need help choosing? Let's discuss your project."}
                  </p>
                  <button
                    type="button"
                    onClick={handleContactClick}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 text-white text-sm font-semibold transition-all"
                  >
                    {lang === "fr"
                      ? "Consultation gratuite"
                      : "Free consultation"}
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
