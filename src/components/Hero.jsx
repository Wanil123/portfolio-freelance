// src/components/Hero.jsx
import { Globe2, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = ({ scrollToSection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  return (
    <section
      id="home"
      className="pt-24 md:pt-28 lg:pt-32 pb-16 bg-gradient-to-b from-slate-950 via-slate-950/50 to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-400/40 text-violet-50 text-xs mb-5">
            <Globe2 size={14} />
            <span>
              {lang === "fr"
                ? "Disponible en freelance partout dans le monde"
                : "Available for Freelance Worldwide"}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            {lang === "fr" ? "Développeur Web Full-Stack" : "Full-Stack Web Developer"}
            <span className="block text-violet-200 text-base md:text-lg mt-3">
              React · Vue.js · Laravel · Odoo 17 · WordPress · JavaScript
            </span>
          </h1>

          <p className="mt-4 text-slate-200 text-sm md:text-base">
            {lang === "fr"
              ? "Ont crée des solutions web qui évoluent avec votre entreprise — full-stack, bilingues, prêtes pour la production."
              : "We build web solutions that grow with your business — full-stack, bilingual, production-ready."}
          </p>

          {/* CTA */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-5 py-2.5 bg-violet-500 hover:bg-violet-400 text-sm rounded-full text-white text-center"
            >
              {lang === "fr" ? "Réserver un appel" : "Book Free Consultation"}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-900/40 border border-slate-700 hover:border-slate-500 text-sm rounded-full text-slate-100 text-center"
            >
              {lang === "fr" ? "Voir les projets" : "View Projects"}
            </button>
          </div>

          {/* BADGES */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
            {[
              lang === "fr" ? "2+ ans d'expérience" : "2+ years experience",
              lang === "fr" ? "Spécialiste Odoo 17" : "Odoo 17 specialist",
              lang === "fr" ? "Bilingue FR/EN" : "Bilingual FR/EN",
              lang === "fr" ? "Remote friendly" : "Remote friendly",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-slate-200 text-sm">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6 mt-6 md:mt-0">
          <h2 className="text-white font-semibold mb-4">
            {lang === "fr" ? "Stack technique & focus" : "Tech Stack & Focus"}
          </h2>
          <div className="space-y-4 text-sm">
            {/* FRONT-END */}
            <div>
              <p className="text-slate-300 mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-violet-400"></span>
                Front-End
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript ES6+",
                  "React",
                  "Vue.js",
                  "Tailwind CSS",
                  "Bootstrap",
                  "Responsive / WCAG",
                  "Figma / Adobe XD",
                ].map((t) => (
                  <span key={t} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* BACK-END / ERP */}
            <div>
              <p className="text-slate-300 mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                Back-End / ERP
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "PHP",
                  "Laravel",
                  "Python",
                  "Odoo 17",
                  "QWeb / OWL",
                  "REST APIs",
                  "MySQL",
                  "PostgreSQL",
                  "WordPress",
                ].map((t) => (
                  <span key={t} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* TOOLS */}
            <div>
              <p className="text-slate-300 mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {["Git/GitHub", "Jira / Agile", "Netlify / Vite", "CI/CD", "i18n (FR/EN)"].map(
                  (t) => (
                    <span key={t} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-100">
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            <p className="text-xs text-slate-400">
              {lang === "fr"
                ? "Tous les détails dans la section Compétences ci-dessous."
                : "Full list in the Skills section below."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
