// src/components/Projects.jsx
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects.js";
import { Check, ExternalLink } from "lucide-react";

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const order = ["ecommerce", "weather", "event", "odoo"];
  const sortedProjects = order
    .map((k) => projects.find((p) => p.key === k))
    .filter(Boolean);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-violet-200 mb-2">
            {lang === "fr" ? "Projets livrés" : "Delivered projects"}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {lang === "fr"
              ? "Exemples de réalisations professionnelles"
              : "Examples of professional work"}
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            {lang === "fr"
              ? "Applications web, e-commerce, plateformes Laravel et portails Odoo. Tous les projets ci-dessous ont été pensés pour être déployés, documentés et utilisables par un client."
              : "Web apps, e-commerce, Laravel platforms and Odoo portals. All projects below were built to be deployed, documented and usable by a client."}
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {sortedProjects.map((p) => {
            const title = typeof p.title === "string" ? p.title : p.title[lang];
            const subtitle =
              typeof p.subtitle === "string" ? p.subtitle : p.subtitle[lang];
            const description =
              typeof p.description === "string"
                ? p.description
                : p.description[lang];
            const features = Array.isArray(p.features)
              ? p.features
              : p.features?.[lang] || [];
            const tech = p.tech || [];
            const imgSrc = p.image || (p.images && p.images[0]);

            return (
              <div
                key={p.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6"
              >
                {/* LEFT */}
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-100 border border-violet-400/30">
                      {subtitle}
                    </span>
                    {p.context?.[lang] && (
                      <span className="text-xs px-3 py-1 rounded-full bg-slate-900/60 text-slate-200 border border-slate-700/50">
                        {p.context[lang]}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <span>{p.icon || "💻"}</span>
                    {title}
                  </h3>

                  <p className="text-slate-200 mb-3 text-sm md:text-base">
                    {description}
                  </p>

                  <p className="text-sm text-slate-300 mb-2">
                    {lang === "fr"
                      ? "Fonctionnalités principales :"
                      : "Key features:"}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {features.slice(0, 5).map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-sm text-slate-200"
                      >
                        <Check size={14} className="text-emerald-400 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-slate-800 text-xs text-slate-100 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* link / private */}
                  {p.link && p.link !== "#" ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-violet-200 hover:text-violet-100 text-sm"
                    >
                      {lang === "fr" ? "Voir la démo en ligne" : "View live demo"}{" "}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <p className="text-xs text-slate-500">
                      {lang === "fr"
                        ? "Projet en environnement privé / client (accès sur demande)."
                        : "Private / client environment (access on request)."}
                    </p>
                  )}
                </div>

                {/* RIGHT */}
                <div className="bg-slate-950/20 rounded-xl border border-slate-800 flex items-center justify-center min-h-48">
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={title}
                      loading="lazy"
                      className="rounded-lg border border-slate-700/70 shadow-md max-h-48 md:max-h-64 object-cover"
                    />
                  ) : (
                    <div className="text-slate-500 text-sm text-center p-6">
                      {lang === "fr"
                        ? "Capture d’écran à venir"
                        : "Screenshot / mockup placeholder"}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bandeau de crédibilité */}
        <div className="mt-10 bg-slate-950/40 border border-slate-800 rounded-2xl p-5 text-sm text-slate-200 flex flex-col md:flex-row gap-3 md:justify-between">
          <p>
            {lang === "fr"
              ? "Tous les projets sont livrés avec code versionné (Git) et documentation rapide."
              : "All projects are delivered with versioned code (Git) and quick documentation."}
          </p>
          <p>
            {lang === "fr"
              ? "Déploiement possible sur Netlify, VPS ou environnement du client."
              : "Deployment available on Netlify, VPS or client environment."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
