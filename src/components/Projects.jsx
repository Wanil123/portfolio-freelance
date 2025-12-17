// src/components/Projects.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects.js";
import { Check, ExternalLink, Sparkles, Code2, X, ChevronRight, Rocket } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const [selectedProject, setSelectedProject] = useState(null);

  const order = ["ecommerce", "weather", "event", "odoo"];
  const sortedProjects = order
    .map((k) => projects.find((p) => p.key === k))
    .filter(Boolean);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Rocket size={14} />
            <span>{lang === "fr" ? "Portfolio" : "Portfolio"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Projets{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  livrés
                </span>
              </>
            ) : (
              <>
                Delivered{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  projects
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Sites web, applications et intégrations déployés en production."
              : "Websites, applications and integrations deployed in production."}
          </p>
        </Reveal>

        {/* Projects Grid - Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedProjects.map((p, index) => {
            const title = typeof p.title === "string" ? p.title : p.title[lang];
            const subtitle = typeof p.subtitle === "string" ? p.subtitle : p.subtitle[lang];
            const description = typeof p.description === "string" ? p.description : p.description[lang];
            const tech = p.tech || [];
            const imgSrc = p.image || (p.images && p.images[0]);

            return (
              <Reveal key={p.id} delay={index * 0.1}>
                <div
                  className="group relative cursor-pointer"
                  onClick={() => openModal(p)}
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl transition-opacity duration-500" />

                  <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-violet-400/50 transition-all duration-300">

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      {imgSrc ? (
                        <>
                          <img
                            src={imgSrc}
                            alt={title}
                            loading="lazy"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                        </>
                      ) : (
                        <div className="w-full h-full bg-slate-800/50 flex items-center justify-center">
                          <Code2 size={40} className="text-slate-600" />
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-violet-200 border border-violet-400/30 font-medium">
                          <Sparkles size={10} />
                          {subtitle}
                        </span>
                      </div>

                      {/* View indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-500/80 backdrop-blur-sm">
                          <ChevronRight size={16} className="text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2 group-hover:text-violet-300 transition-colors">
                        <span className="text-xl">{p.icon || "💻"}</span>
                        <span className="line-clamp-1">{title.split("—")[0].trim()}</span>
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                        {description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tech.slice(0, 4).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                        {tech.length > 4 && (
                          <span className="px-2 py-1 text-xs text-slate-500">
                            +{tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-800/50">
                        <span className="text-xs text-slate-500">
                          {p.context?.[lang] || ""}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
                          {lang === "fr" ? "Voir détails" : "View details"}
                          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <Reveal delay={0.3}>
          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <p className="text-2xl md:text-3xl font-bold text-violet-400">15+</p>
              <p className="text-xs md:text-sm text-slate-400">{lang === "fr" ? "Projets livrés" : "Projects delivered"}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <p className="text-2xl md:text-3xl font-bold text-emerald-400">100%</p>
              <p className="text-xs md:text-sm text-slate-400">{lang === "fr" ? "Satisfaction" : "Satisfaction"}</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
              <p className="text-2xl md:text-3xl font-bold text-cyan-400">30j</p>
              <p className="text-xs md:text-sm text-slate-400">{lang === "fr" ? "Support inclus" : "Support included"}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {(() => {
                const title = typeof selectedProject.title === "string" ? selectedProject.title : selectedProject.title[lang];
                const subtitle = typeof selectedProject.subtitle === "string" ? selectedProject.subtitle : selectedProject.subtitle[lang];
                const description = typeof selectedProject.description === "string" ? selectedProject.description : selectedProject.description[lang];
                const features = Array.isArray(selectedProject.features)
                  ? selectedProject.features
                  : selectedProject.features?.[lang] || [];
                const tech = selectedProject.tech || [];
                const imgSrc = selectedProject.image || (selectedProject.images && selectedProject.images[0]);

                return (
                  <>
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-200 border border-violet-400/30 font-medium">
                        <Sparkles size={12} />
                        {subtitle}
                      </span>
                      {selectedProject.context?.[lang] && (
                        <span className="text-xs px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50">
                          {selectedProject.context[lang]}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                      <span className="text-3xl">{selectedProject.icon || "💻"}</span>
                      <span>{title}</span>
                    </h3>

                    {/* Image */}
                    {imgSrc && (
                      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6 border border-slate-800/50">
                        <img
                          src={imgSrc}
                          alt={title}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-slate-300 mb-6 text-base leading-relaxed">
                      {description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        {lang === "fr" ? "Fonctionnalités clés" : "Key features"}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                            <Check size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        {lang === "fr" ? "Technologies" : "Technologies"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 text-sm text-slate-100 rounded-lg"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-slate-800/50 flex flex-wrap gap-4">
                      {selectedProject.link && selectedProject.link !== "#" ? (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all"
                        >
                          {lang === "fr" ? "Voir le projet" : "View project"}
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Code2 size={16} />
                          <span>
                            {lang === "fr"
                              ? "Projet client privé · Accès sur demande"
                              : "Private client project · Access on request"}
                          </span>
                        </div>
                      )}
                      <button
                        onClick={closeModal}
                        className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
                      >
                        {lang === "fr" ? "Fermer" : "Close"}
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
