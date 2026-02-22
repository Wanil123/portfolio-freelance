// src/components/WhyIndependent.jsx
import { useTranslation } from "react-i18next";
import { Rocket, Check } from "lucide-react";

const WhyIndependent = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  return (
    <section id="why" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-900/60 to-slate-900/20 border border-slate-700 rounded-2xl p-4 md:p-6 lg:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full bg-violet-500/20 text-violet-200">
              <Rocket size={20} />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              {lang === "fr"
                ? "Pourquoi choisir PrimeDev Studios"
                : "Why choose PrimeDev Studios"}
            </h2>
          </div>
          <p className="text-slate-200 mb-4 text-sm md:text-base">
            {lang === "fr"
              ? "Après plusieurs années à concevoir et optimiser des solutions web complètes pour des PME et des organisations, nous avons fondé PrimeDev Studios pour offrir une approche directe et sans intermédiaire."
              : "After years designing and optimizing complete web solutions for SMBs and organizations, we founded PrimeDev Studios to offer a direct, no-middleman approach."}
          </p>
          <div className="bg-slate-950/40 border border-slate-700/80 rounded-xl p-5 mb-4">
            <p className="text-slate-100 mb-3 font-medium">
              {lang === "fr" ? "Notre approche nous permet de :" : "Our approach allows us to:"}
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  fr: "Travailler en direct avec nos clients, sans intermédiaires ni lourdeur administrative",
                  en: "Work directly with our clients, without intermediaries or administrative burden"
                },
                {
                  fr: "Mieux comprendre leurs besoins réels et proposer des solutions sur mesure",
                  en: "Better understand their real needs and offer tailored solutions"
                },
                {
                  fr: "Livrer plus rapidement, avec un suivi humain et transparent",
                  en: "Deliver faster, with human and transparent follow-up"
                },
                {
                  fr: "Garder le contrôle sur la qualité, la fiabilité et l'innovation de chaque projet",
                  en: "Maintain control over the quality, reliability and innovation of each project"
                },
                {
                  fr: "Intégrer l'IA et l'automatisation dans chaque projet pour offrir des résultats concrets et mesurables",
                  en: "Integrate AI and automation into every project to deliver concrete, measurable results"
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-slate-200 text-sm">
                  <Check size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{lang === "fr" ? item.fr : item.en}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4">
            <p className="text-slate-100 font-medium text-sm md:text-base">
              {lang === "fr"
                ? "Notre vision : devenir LE partenaire IA de confiance pour les PME québécoises, en créant des sites web intelligents et des automatisations qui ont un impact réel sur leur chiffre d'affaires."
                : "Our vision: to become THE trusted AI partner for Québec SMBs, building smart websites and automations that have a real impact on their revenue."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIndependent;
