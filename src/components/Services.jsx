// src/components/Services.jsx
import { useTranslation } from "react-i18next";
import { services } from "../data/services.js";
import { Check, Code, Globe2, Zap } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Services = ({ scrollToSection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const ordered = [
    "web-apps",
    "ecommerce",
    "frontend",
    "apis",
    "odoo",
    "maintenance",
  ];
  const sortedServices = ordered
    .map((key) => services.find((s) => s.key === key))
    .filter(Boolean);

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal className="text-center mb-10">
          <p className="text-sm uppercase tracking-wide text-violet-200 mb-2">
            {lang === "fr"
              ? "Services PrimeDev Studios inc."
              : "PrimeDev Studios inc. services"}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {lang === "fr"
              ? "Des solutions web complètes, prêtes pour la production"
              : "Complete web solutions, production-ready"}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            {lang === "fr"
              ? "Sites vitrines, applications web, e-commerce, intégrations et, au besoin, Odoo/ERP. Livré en français et en anglais, à distance."
              : "Marketing sites, web apps, e-commerce, integrations and, when needed, Odoo/ERP. Delivered in FR/EN, remotely."}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedServices.map((service, index) => {
            const title = lang === "fr" ? service.title.fr : service.title.en;
            const price = lang === "fr" ? service.price.fr : service.price.en;
            const timeline =
              lang === "fr" ? service.timeline.fr : service.timeline.en;
            const features =
              lang === "fr" ? service.features.fr : service.features.en;
            const idealFor =
              lang === "fr" ? service.idealFor.fr : service.idealFor.en;

            return (
              <Reveal key={service.id} delay={index * 0.08}>
                <div className="relative group bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6 flex flex-col hover:border-violet-400/80 hover:-translate-y-1 transition-all duration-200 overflow-hidden">
                  {/* petit glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-violet-500/10 to-transparent blur-2xl transition" />
                  {/* header */}
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="text-2xl" aria-hidden="true">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold leading-tight">
                        {title}
                      </h3>
                      <p className="text-slate-400 text-sm">{price}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-200 flex-1 relative z-10">
                    {features.slice(0, 4).map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check size={14} className="text-emerald-400 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-slate-400 mt-4 relative z-10">
                    {idealFor && (
                      <>
                        {lang === "fr" ? "Idéal pour : " : "Ideal for: "}
                        {idealFor}
                      </>
                    )}
                  </p>

                  <button
                    onClick={() => scrollToSection?.("contact")}
                    className="mt-4 px-4 py-2 rounded-full bg-violet-500 hover:bg-violet-400 text-sm text-white relative z-10 w-full sm:w-auto"
                  >
                    {lang === "fr"
                      ? "Demander une soumission"
                      : "Request a quote"}
                  </button>

                  <p className="text-xs text-slate-500 mt-3 relative z-10">
                    {timeline}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* bandeau garanties */}
        <Reveal delay={0.2}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/40 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-slate-100 text-sm">
              <Code size={16} className="text-violet-300" />
              <span>
                {lang === "fr"
                  ? "Code propre & maintenable"
                  : "Clean & maintainable code"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-100 text-sm">
              <Globe2 size={16} className="text-violet-300" />
              <span>{lang === "fr" ? "Bilingue FR/EN" : "Bilingual FR/EN"}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-100 text-sm">
              <Zap size={16} className="text-violet-300" />
              <span>
                {lang === "fr"
                  ? "Déploiement & formation"
                  : "Deployment & training"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-100 text-sm">
              <Check size={16} className="text-violet-300" />
              <span>{lang === "fr" ? "Support 30 jours" : "30-day support"}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
