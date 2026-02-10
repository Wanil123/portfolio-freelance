// src/components/Projects.jsx
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects.js";
import { Check, ExternalLink, Code2, X, ChevronRight, Rocket, Play, Star, ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const heroProject = projects.find((p) => p.isClientProject);
const featuredProjects = projects.filter((p) => p.featured && !p.isClientProject);
const otherProjects = projects.filter((p) => !p.featured);

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (!selectedProject) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") { closeModal(); return; }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const handleImageLoad = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  const getField = (field) => typeof field === "string" ? field : field?.[lang] || "";

  // ─── Render helpers (not components, just JSX functions) ───

  const renderImage = (p, isHero) => (
    <div className={`relative overflow-hidden bg-slate-800/50 ${
      isHero ? "h-48 sm:h-56 lg:min-h-[320px] lg:w-1/2" : "h-40 sm:h-44 md:h-48"
    }`}>
      {!imageLoaded[p.id] && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
      )}
      <img
        src={p.image}
        alt={getField(p.title)}
        loading="lazy"
        onLoad={() => handleImageLoad(p.id)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          imageLoaded[p.id] ? "opacity-100" : "opacity-0"
        } group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

      <div className="absolute top-3 left-3 md:top-4 md:left-4">
        <span className="inline-flex items-center gap-1 text-[10px] md:text-xs px-2 py-1 md:px-3 rounded-full bg-slate-900/80 backdrop-blur-sm text-violet-200 border border-violet-400/30 font-medium">
          <Code2 size={10} />
          {getField(p.subtitle)}
        </span>
      </div>

      <div className="absolute top-3 right-3 md:top-4 md:right-4">
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] md:text-xs text-emerald-300 font-medium">{lang === "fr" ? "En ligne" : "Live"}</span>
        </div>
      </div>

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
  );

  const renderContent = (p, isHero) => {
    const tech = p.tech || [];
    const maxTech = isHero ? 5 : 3;

    return (
      <div className={`p-4 md:p-5 flex flex-col flex-1 ${isHero ? "lg:p-8 lg:justify-center" : ""}`}>
        {isHero && (
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            {getField(p.context)}
          </p>
        )}

        <h3 className={`font-bold text-white mb-1.5 md:mb-2 group-hover:text-violet-300 transition-colors ${
          isHero ? "text-lg md:text-xl lg:text-2xl" : "text-base md:text-lg line-clamp-1"
        }`}>
          {isHero ? getField(p.title) : getField(p.title).split("—")[0].trim()}
        </h3>

        <p className={`text-slate-400 mb-3 md:mb-4 ${
          isHero ? "text-sm md:text-base leading-relaxed" : "text-xs md:text-sm line-clamp-2 flex-1"
        }`}>
          {getField(p.description)}
        </p>

        <div className={`flex flex-wrap mb-3 md:mb-4 ${isHero ? "gap-1.5 md:gap-2" : "gap-1 md:gap-1.5"}`}>
          {tech.slice(0, maxTech).map((t, idx) => (
            <span
              key={idx}
              className={`bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded ${
                isHero ? "px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm" : "px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs"
              }`}
            >
              {t}
            </span>
          ))}
          {tech.length > maxTech && (
            <span className={`text-slate-500 ${isHero ? "px-2 py-1 text-xs md:text-sm" : "px-1.5 py-0.5 text-[10px] md:text-xs"}`}>
              +{tech.length - maxTech}
            </span>
          )}
        </div>

        <div className={`flex items-center gap-2 md:gap-3 pt-3 border-t border-slate-800/50 ${isHero ? "pt-4" : ""}`}>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-1.5 md:gap-2 rounded-lg md:rounded-xl text-white font-medium transition-all active:scale-95 ${
              p.isClientProject
                ? "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600"
                : "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
            } ${isHero ? "px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base" : "px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm"}`}
          >
            <ExternalLink size={isHero ? 16 : 14} />
            {lang === "fr" ? "Voir le site" : "View site"}
          </a>
          <button
            onClick={() => openModal(p)}
            className={`flex items-center justify-center rounded-lg md:rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all active:scale-95 ${
              isHero ? "w-10 h-10 md:w-12 md:h-12" : "w-9 h-9 md:w-10 md:h-10"
            }`}
            aria-label={lang === "fr" ? "Voir détails" : "View details"}
          >
            <ChevronRight size={isHero ? 20 : 16} />
          </button>
        </div>
      </div>
    );
  };

  const renderCard = (p, isHero = false) => (
    <div className="group relative h-full">
      {p.isClientProject && (
        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10">
          <div className="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[10px] md:text-xs font-medium shadow-lg">
            <Star size={10} />
            <span>{lang === "fr" ? "Projet client" : "Client project"}</span>
          </div>
        </div>
      )}

      <div className={`hidden md:block pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 ${
        p.isClientProject
          ? "bg-gradient-to-r from-emerald-500/20 to-green-500/20"
          : "bg-gradient-to-r from-violet-500/20 to-purple-500/20"
      }`} />

      <div className={`relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 flex ${
        isHero ? "flex-col lg:flex-row" : "flex-col"
      } ${
        p.isClientProject
          ? "border-emerald-500/30 hover:border-emerald-400/50"
          : "border-slate-800/50 hover:border-violet-400/50"
      }`}>
        {renderImage(p, isHero)}
        {renderContent(p, isHero)}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Rocket size={14} />
            <span>{lang === "fr" ? "Réalisations" : "My Work"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {lang === "fr" ? (
              <>Projets{" "}<span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">livrés</span></>
            ) : (
              <>Delivered{" "}<span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">projects</span></>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-2">
            {lang === "fr"
              ? "Des applications déployées en production, accessibles et performantes."
              : "Production-deployed applications, accessible and performant."}
          </p>
        </Reveal>

        {/* Hero Project — Client */}
        {heroProject && (
          <Reveal className="mb-8 md:mb-12">
            {renderCard(heroProject, true)}
          </Reveal>
        )}

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <>
            <Reveal>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
                <span className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider">
                  {lang === "fr" ? "Autres réalisations" : "More work"}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
              </div>
            </Reveal>

            <div className="flex flex-wrap gap-3 md:gap-6 mb-8 md:mb-12">
              {featuredProjects.map((p, index) => (
                <div key={p.id} className="w-[calc(50%-6px)]">
                  <Reveal delay={index * 0.1}>
                    {renderCard(p)}
                  </Reveal>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <Reveal>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
                <span className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider">
                  {lang === "fr" ? "Projets techniques" : "Technical projects"}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
              </div>
            </Reveal>

            <div className="flex flex-wrap gap-3 md:gap-6">
              {otherProjects.map((p, index) => (
                <div key={p.id} className="w-[calc(50%-6px)]">
                  <Reveal delay={index * 0.1}>
                    {renderCard(p)}
                  </Reveal>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Bottom CTA */}
        <Reveal delay={0.3}>
          <div className="mt-10 md:mt-16 text-center">
            <p className="text-slate-400 text-xs md:text-sm mb-3 md:mb-4">
              {lang === "fr" ? "Vous avez un projet en tête?" : "Have a project in mind?"}
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all active:scale-95"
            >
              {lang === "fr" ? "Discutons de votre projet" : "Let's discuss your project"}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-slate-950/90 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-xl md:rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} className="md:hidden" />
              <X size={20} className="hidden md:block" />
            </button>

            {selectedProject.image && (
              <div className="relative h-48 md:h-64 overflow-hidden rounded-t-xl md:rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={getField(selectedProject.title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>
            )}

            <div className="p-5 md:p-8">
              {(() => {
                const title = getField(selectedProject.title);
                const subtitle = getField(selectedProject.subtitle);
                const context = getField(selectedProject.context);
                const description = getField(selectedProject.description);
                const features = Array.isArray(selectedProject.features)
                  ? selectedProject.features
                  : selectedProject.features?.[lang] || [];
                const tech = selectedProject.tech || [];

                return (
                  <>
                    <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-4">
                      <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-200 border border-violet-400/30 font-medium">
                        <Code2 size={12} />
                        {subtitle}
                      </span>
                      {selectedProject.isClientProject && (
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-medium">
                          <Star size={12} />
                          {context}
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Live
                      </span>
                    </div>

                    <h3 id="project-modal-title" className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                      <span className="text-2xl md:text-3xl">{selectedProject.icon}</span>
                      <span>{title}</span>
                    </h3>

                    <p className="text-slate-300 mb-5 md:mb-6 text-sm md:text-base leading-relaxed">
                      {description}
                    </p>

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

                    <div className="mb-5 md:mb-6">
                      <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 md:mb-3">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {tech.map((t, idx) => (
                          <span key={idx} className="px-2.5 py-1 md:px-3 md:py-1.5 bg-slate-800/50 border border-slate-700/50 text-xs md:text-sm text-slate-100 rounded-lg">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800/50 flex flex-col sm:flex-row gap-3">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 rounded-xl font-semibold shadow-lg transition-all active:scale-95 text-sm md:text-base text-white ${
                          selectedProject.isClientProject
                            ? "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 shadow-emerald-500/20 hover:shadow-emerald-500/40"
                            : "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 shadow-violet-500/20 hover:shadow-violet-500/40"
                        }`}
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
