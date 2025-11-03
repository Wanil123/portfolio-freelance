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
                ? "Pourquoi je suis passé en indépendant"
                : "Why I went independent"}
            </h2>
          </div>
          <p className="text-slate-200 mb-4 text-sm md:text-base">
            {lang === "fr"
              ? "Après avoir travaillé sur de vrais projets clients chez G.S.D Group (Odoo 17, portails, PDF personnalisés, interfaces bilingues) et sur des projets Laravel/Vue, j’ai réalisé que j’aimais travailler directement avec le client — sans 10 intermédiaires."
              : "After working on real client projects at G.S.D Group (Odoo 17, portals, custom PDF, bilingual interfaces) and on Laravel/Vue projects, I realized I love building things directly with the client — no long communication chain, no slow iterations."}
          </p>
          <p className="text-slate-200 mb-4 text-sm md:text-base">
            {lang === "fr"
              ? "Le freelance me permet de travailler avec des entreprises au Canada, des agences en Europe  tout en gardant le même niveau de qualité."
              : "Freelance allows me to work with Canadian businesses, agencies in Europe while keeping the same code quality and delivery standards."}
          </p>
          <div className="bg-slate-950/40 border border-slate-700/80 rounded-xl p-5 mb-4">
            <p className="text-slate-100 mb-3 font-medium">
              {lang === "fr" ? "Ce qui me motive :" : "What drives me:"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                lang === "fr" ? "Liberté d’innover" : "Freedom to innovate",
                lang === "fr" ? "Relation client directe" : "Direct client relationships",
                lang === "fr" ? "Apprentissage continu" : "Continuous learning",
                lang === "fr" ? "Impact international" : "Global impact",
                lang === "fr" ? "Responsabilité sur le delivery" : "Full ownership of delivery",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-200 text-sm">
                  <Check size={16} className="text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-300 text-sm">
            {lang === "fr"
              ? "Si vous cherchez quelqu’un qui comprend le côté business (processus, ERP, bilingue) et qui code (React/Vue/Laravel/Javascript/Wordpress/Odoo), on peut travailler ensemble."
              : "If you need someone who both understands the business side (process, ERP, bilingual) and the code side (React/Vue/Laravel/Javascript/Wordpress/Odoo), we can work together."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyIndependent;
