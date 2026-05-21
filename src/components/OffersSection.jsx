// src/components/OffersSection.jsx
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { Check, Sparkles, Calendar } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { getTabs, pricingData } from "./offers/OffersData";
import PricingTab from "./offers/PricingTab";
import PricingCard from "./offers/PricingCard";
import AIStatsSection from "./offers/AIStatsSection";

const OffersSection = () => {
  const { lang } = useLanguage();
  // Default tab must match the first tab in getTabs() — "ai" — otherwise the
  // visual order suggests AI but the panel underneath shows Vitrine.
  const [activeTab, setActiveTab] = useState("ai");

  const handleContactClick = () => {
    document.dispatchEvent(new Event("open-qualification"));
  };

  const tabs = getTabs(lang);
  const offers = pricingData[activeTab]?.[lang] || pricingData.ai.fr;

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

        {/* Tab Switcher */}
        <Reveal delay={0.1}>
          <div className="flex justify-center mb-10 md:mb-12">
            <div
              role="tablist"
              aria-label={lang === "fr" ? "Catégories de forfaits" : "Pricing categories"}
              className="grid grid-cols-2 sm:inline-flex gap-1 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800/60 backdrop-blur-sm w-full sm:w-auto"
            >
              {tabs.map((tab) => (
                <PricingTab
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* AI ROI Stats */}
        {activeTab === "ai" && <AIStatsSection lang={lang} />}

        {/* Pricing Cards — 1 col mobile/tablet, 3 cols desktop (every category
            has exactly 3 offers → rows always full, no orphan card). */}
        <div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 items-start"
        >
          {offers.map((offer, index) => (
            <PricingCard
              key={`${activeTab}-${offer.name}`}
              offer={offer}
              index={index}
              lang={lang}
              activeTab={activeTab}
              onContactClick={handleContactClick}
            />
          ))}
        </div>

        {/* Bottom Info */}
        <Reveal delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Included */}
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
                          "Maintenance mensuelle (85–120 $ CAD/h)",
                          "SEO & référencement (800 $ CAD/mois+)",
                          "Landing pages additionnelles",
                          "Formation avancée",
                        ]
                      : [
                          "Monthly maintenance ($85–120 CAD/h)",
                          "SEO & ranking ($800+ CAD/mo)",
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
                      ? "Pas sûr du forfait idéal? 30 min d'appel gratuit — je vous dis exactement ce qu'il vous faut."
                      : "Not sure which package? 30-min free call — I'll tell you exactly what you need."}
                  </p>
                  <button
                    type="button"
                    onClick={handleContactClick}
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all hover:scale-105 active:scale-95"
                  >
                    <Calendar size={15} />
                    {lang === "fr"
                      ? "Réserver mon appel gratuit"
                      : "Book my free call"}
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
