// src/components/Projects.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects.js";
import { Check, ExternalLink, Sparkles, Code2, X, ChevronRight, Rocket, Play } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Rocket size={14} />
            <span>{lang === "fr" ? "Portfolio" : "Portfolio"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {lang === "fr" ? (
              <>
                Projets{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  en ligne
                </span>
              </>
            ) : (
              <>
                Live{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  projects
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-2">
            {lang === "fr"
              ? "Applications web déployées et accessibles. Cliquez pour voir en direct."
              : "Deployed web applications, live and accessible. Click to see them in action."}
          </p>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, index) => {
            const title = typeof p.title === "string" ? p.title : p.title[lang];
            const subtitle = typeof p.subtitle === "string" ? p.subtitle : p.subtitle[lang];
            const description = typeof p.description === "string" ? p.description : p.description[lang];
            const tech = p.tech || [];

            return (
              <Reveal key={p.id} delay={index * 0.1}>
                <div className="group relative h-full">
                  {/* Featured badge */}
                  {p.featured && (
                    <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10">
                      <div className="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-[10px] md:text-xs font-medium shadow-lg">
                        <Sparkles size={10} />
                        <span>{lang === "fr" ? "Vedette" : "Featured"}</span>
                      </div>
                    </div>
                  )}

                  {/* Hover glow - desktop only */}
                  <div className="hidden md:block pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl transition-opacity duration-500" />

                  <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-xl md:rounded-2xl overflow-hidden hover:border-violet-400/50 transition-all duration-300 flex flex-col">

                    {/* Image */}
                    <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-slate-800/50">
                      {/* Loading skeleton */}
                      {!imageLoaded[p.id] && (
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
                      )}

                      {/* Real image */}
                      <img
                        src={p.image}
                        alt={title}
                        loading="lazy"
                        onLoad={() => handleImageLoad(p.id)}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          imageLoaded[p.id] ? 'opacity-100' : 'opacity-0'
                        } group-hover:scale-105`}
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 md:top-4 md:left-4">
                        <span className="inline-flex items-center gap-1 text-[10px] md:text-xs px-2 py-1 md:px-3 rounded-full bg-slate-900/80 backdrop-blur-sm text-violet-200 border border-violet-400/30 font-medium">
                          <Code2 size={10} />
                          {subtitle}
                        </span>
                      </div>

                      {/* Live indicator */}
                      <div className="absolute top-3 right-3 md:top-4 md:right-4">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] md:text-xs text-emerald-300 font-medium">Live</span>
                        </div>
                      </div>

                      {/* Play overlay on hover - desktop only */}
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60"
                      >
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50 hover:scale-110 transition-transform">
                          <Play size={24} className="text-white ml-1" />
                        </div>
                      </a>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-5 flex flex-col flex-1">
                      {/* Title */}
                      <h3 className="text-base md:text-lg font-bold text-white mb-1.5 md:mb-2 group-hover:text-violet-300 transition-colors line-clamp-1">
                        {title.split("—")[0].trim()}
                      </h3>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-slate-400 mb-3 md:mb-4 line-clamp-2 flex-1">
                        {description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4">
                        {tech.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 md:px-2 md:py-1 bg-slate-800/50 border border-slate-700/50 text-[10px] md:text-xs text-slate-300 rounded"
                          >
                            {t}
                          </span>
                        ))}
                        {tech.length > 3 && (
                          <span className="px-1.5 py-0.5 text-[10px] md:text-xs text-slate-500">
                            +{tech.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 md:gap-3 pt-3 border-t border-slate-800/50">
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-xs md:text-sm font-medium transition-all active:scale-95"
                        >
                          <ExternalLink size={12} className="md:hidden" />
                          <ExternalLink size={14} className="hidden md:block" />
                          {lang === "fr" ? "Voir" : "View"}
                        </a>
                        <button
                          onClick={() => openModal(p)}
                          className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all active:scale-95"
                          aria-label={lang === "fr" ? "Voir détails" : "View details"}
                        >
                          <ChevronRight size={16} className="md:hidden" />
                          <ChevronRight size={18} className="hidden md:block" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.3}>
          <div className="mt-10 md:mt-12 text-center">
            <p className="text-slate-400 text-xs md:text-sm mb-3 md:mb-4">
              {lang === "fr"
                ? "Vous avez un projet similaire en tête?"
                : "Have a similar project in mind?"}
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 text-white text-sm font-medium transition-all active:scale-95"
            >
              {lang === "fr" ? "Discutons de votre projet" : "Let's discuss your project"}
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-slate-950/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-xl md:rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} className="md:hidden" />
              <X size={20} className="hidden md:block" />
            </button>

            {/* Modal Image */}
            {selectedProject.image && (
              <div className="relative h-48 md:h-64 overflow-hidden rounded-t-xl md:rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={typeof selectedProject.title === "string" ? selectedProject.title : selectedProject.title[lang]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>
            )}

            {/* Modal Content */}
            <div className="p-5 md:p-8">
              {(() => {
                const title = typeof selectedProject.title === "string" ? selectedProject.title : selectedProject.title[lang];
                const subtitle = typeof selectedProject.subtitle === "string" ? selectedProject.subtitle : selectedProject.subtitle[lang];
                const description = typeof selectedProject.description === "string" ? selectedProject.description : selectedProject.description[lang];
                const features = Array.isArray(selectedProject.features)
                  ? selectedProject.features
                  : selectedProject.features?.[lang] || [];
                const tech = selectedProject.tech || [];

                return (
                  <>
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-200 border border-violet-400/30 font-medium">
                        <Code2 size={12} />
                        {subtitle}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Live
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="text-2xl md:text-3xl">{selectedProject.icon}</span>
                      <span>{title}</span>
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 mb-5 md:mb-6 text-sm md:text-base leading-relaxed">
                      {description}
                    </p>

                    {/* Features */}
                    <div className="mb-5 md:mb-6">
                      <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 md:mb-3">
                        {lang === "fr" ? "Fonctionnalités" : "Features"}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2">
                        {features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                            <Check size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-5 md:mb-6">
                      <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 md:mb-3">
                        {lang === "fr" ? "Technologies" : "Technologies"}
                      </p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 md:px-3 md:py-1.5 bg-slate-800/50 border border-slate-700/50 text-xs md:text-sm text-slate-100 rounded-lg"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-slate-800/50 flex flex-col sm:flex-row gap-3">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all active:scale-95 text-sm md:text-base"
                      >
                        {lang === "fr" ? "Voir le projet" : "View project"}
                        <ExternalLink size={16} />
                      </a>
                      <button
                        onClick={closeModal}
                        className="px-5 md:px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors active:scale-95 text-sm md:text-base"
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
