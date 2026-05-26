// src/components/Projects.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { projects } from "../data/projects.js";
import { Check, ExternalLink, Code2, X, ChevronRight, Rocket, Play, Star, ArrowRight, Bot } from "lucide-react";
import { Reveal } from "./ui/Reveal";

// Explicit display order — most impressive first within each section.
// Edit the array to change the showcase priority.
const DISPLAY_ORDER = [
  // Client projects (hero section — full-width cards at the top)
  1,    // LamIPict — flagship e-commerce client project
  10,   // Groupe Destiné — bilingual showcase client
  // AI Demos
  8,    // RénoConnect AI
  9,    // DentiFlow AI
  // Personal — visual showstoppers first
  5,    // WeatherPro     — canvas particles + aurora
  11,   // LuxeMode       — full React 19 e-commerce SPA
  4,    // SUSPENDED      — real-time audio visualizer
  3,    // Clinical Trials API — production backend
  2,    // Film Festival  — full-stack Laravel
  6,    // Maison Élysée  — WordPress luxury
  7,    // Le Ciel Doré   — WordPress restaurant
];

const orderedProjects = [...projects].sort((a, b) => {
  const ai = DISPLAY_ORDER.indexOf(a.id);
  const bi = DISPLAY_ORDER.indexOf(b.id);
  return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
});

const heroProjects = orderedProjects.filter((p) => p.isClientProject);
const aiDemoProjects = orderedProjects.filter((p) => p.isAIDemo);
const personalProjects = orderedProjects.filter((p) => !p.isClientProject && !p.isAIDemo);

const Projects = () => {
  const { lang, getField: getFieldFromHook } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(() => new Set());
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  const openModal = useCallback((project) => {
    triggerRef.current = document.activeElement;
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    if (triggerRef.current && document.contains(triggerRef.current)) {
      triggerRef.current.focus();
    }
    triggerRef.current = null;
  }, []);

  // Body scroll lock tied to modal state, with a guaranteed cleanup — so the
  // body is always unlocked even if Projects unmounts while the modal is open.
  useEffect(() => {
    if (!selectedProject) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") { closeModal(); return; }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = [...modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )].filter((el) => !el.disabled && el.offsetParent !== null);
        if (!focusable.length) return;
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
  }, [selectedProject, closeModal]);

  const handleImageLoad = useCallback((id) => {
    setImageLoaded((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const getField = useCallback((field) => getFieldFromHook(field), [getFieldFromHook]);

  // ─── Render helpers (not components, just JSX functions) ───

  const renderImage = useCallback((p, isHero) => (
    <div className={`relative overflow-hidden bg-slate-800/50 ${
      isHero
        ? "h-48 sm:h-56 lg:min-h-[320px] lg:w-1/2"
        : "h-24 sm:h-40 md:h-44 lg:h-48"
    }`}>
      {!imageLoaded.has(p.id) && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-pulse" />
      )}
      <img
        src={p.image}
        alt={getField(p.title)}
        loading="lazy"
        onLoad={() => handleImageLoad(p.id)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          imageLoaded.has(p.id) ? "opacity-100" : "opacity-0"
        } group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

      {/* Subtitle badge — hidden on mobile tile, visible from sm+ */}
      <div className={`${isHero ? "absolute" : "hidden sm:absolute sm:block"} top-3 left-3 md:top-4 md:left-4`}>
        <span className="inline-flex items-center gap-1 text-[10px] md:text-xs px-2 py-1 md:px-3 rounded-full bg-slate-900/80 backdrop-blur-sm text-violet-200 border border-violet-400/30 font-medium">
          <Code2 size={10} />
          {getField(p.subtitle)}
        </span>
      </div>

      {/* Live status — small dot on mobile, full pill from sm+ */}
      {p.link && (
        <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 md:top-4 md:right-4">
          <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline text-[10px] md:text-xs text-emerald-300 font-medium">{lang === "fr" ? "En ligne" : "Live"}</span>
          </div>
        </div>
      )}

      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60"
          aria-label={`${lang === "fr" ? "Voir" : "View"} ${getField(p.title)}`}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50 hover:scale-110 transition-transform">
            <Play size={24} className="text-white ml-1" />
          </div>
        </a>
      )}
    </div>
  ), [lang, handleImageLoad, getField, imageLoaded]);

  const renderContent = useCallback((p, isHero) => {
    const tech = p.tech || [];
    const maxTech = isHero ? 5 : 3;

    return (
      <div className={`p-2 sm:p-4 md:p-5 flex flex-col flex-1 ${isHero ? "lg:p-8 lg:justify-center" : ""}`}>
        {isHero && (
          <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            {getField(p.context)}
          </p>
        )}

        <h3 className={`font-bold text-white mb-1 sm:mb-1.5 md:mb-2 group-hover:text-violet-300 transition-colors ${
          isHero
            ? "text-lg md:text-xl lg:text-2xl"
            : "text-xs sm:text-base md:text-lg line-clamp-2 sm:line-clamp-1 leading-tight sm:leading-normal"
        }`}>
          {isHero ? getField(p.title) : getField(p.title).split("—")[0].trim()}
        </h3>

        {/* Description — hidden on mobile tile (3 cols), shown from sm+ */}
        <p className={`mb-3 md:mb-4 ${
          isHero
            ? "text-sm md:text-base text-slate-400 leading-relaxed"
            : "hidden sm:block text-xs md:text-sm text-slate-400 line-clamp-2 flex-1"
        }`}>
          {getField(p.description)}
        </p>

        {/* Tech badges — hidden on mobile tile, shown from sm+ */}
        <div className={`flex-wrap mb-3 md:mb-4 ${
          isHero
            ? "flex gap-1.5 md:gap-2"
            : "hidden sm:flex gap-1 md:gap-1.5"
        }`}>
          {tech.slice(0, maxTech).map((t, idx) => (
            <span
              key={idx}
              className={`bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded ${
                isHero ? "px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm" : "px-1.5 py-0.5 md:px-2 md:py-1 text-xs"
              }`}
            >
              {t}
            </span>
          ))}
          {tech.length > maxTech && (
            <span className={`text-slate-500 ${isHero ? "px-2 py-1 text-xs md:text-sm" : "px-1.5 py-0.5 text-xs"}`}>
              +{tech.length - maxTech}
            </span>
          )}
        </div>

        <div className={`flex items-center gap-1.5 sm:gap-2 md:gap-3 pt-2 sm:pt-3 ${
          isHero ? "border-t border-slate-800/50 pt-4" : "border-t-0 sm:border-t border-slate-800/50"
        }`}>
          {p.link ? (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 rounded-md sm:rounded-lg md:rounded-xl text-white font-medium transition-all active:scale-95 ${
                p.isClientProject
                  ? "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600"
                  : "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
              } ${isHero
                ? "px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base"
                : "px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-[11px] sm:text-xs md:text-sm"
              }`}
              aria-label={`${lang === "fr" ? "Voir le site" : "View site"} — ${getField(p.title)}`}
            >
              <ExternalLink size={isHero ? 16 : 12} className="sm:hidden" />
              <ExternalLink size={isHero ? 16 : 14} className="hidden sm:inline" />
              <span className="sm:hidden">{lang === "fr" ? "Voir" : "View"}</span>
              <span className="hidden sm:inline">{lang === "fr" ? "Voir le site" : "View site"}</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={() => openModal(p)}
              className={`flex-1 flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 rounded-md sm:rounded-lg md:rounded-xl text-white font-medium transition-all active:scale-95 ${
                p.isClientProject
                  ? "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600"
                  : "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
              } ${isHero
                ? "px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base"
                : "px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 text-[11px] sm:text-xs md:text-sm"
              }`}
            >
              <ChevronRight size={isHero ? 16 : 12} className="sm:hidden" />
              <ChevronRight size={isHero ? 16 : 14} className="hidden sm:inline" />
              <span className="sm:hidden">{lang === "fr" ? "Détails" : "Details"}</span>
              <span className="hidden sm:inline">{lang === "fr" ? "Voir détails" : "View details"}</span>
            </button>
          )}
          {/* Chevron secondary — hidden on mobile tile (button takes full width), visible from sm+ */}
          <button
            type="button"
            onClick={() => openModal(p)}
            className={`hidden sm:flex items-center justify-center rounded-lg md:rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all active:scale-95 ${
              isHero ? "w-10 h-10 md:w-12 md:h-12" : "w-11 h-11 md:w-10 md:h-10"
            }`}
            aria-label={lang === "fr" ? "Voir détails" : "View details"}
          >
            <ChevronRight size={isHero ? 20 : 16} />
          </button>
        </div>
      </div>
    );
  }, [lang, openModal, getField]);

  const renderCard = useCallback((p, isHero = false) => (
    <div className="group relative h-full">
      {p.isClientProject && (
        <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 md:-top-3 md:-right-3 z-10">
          <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2 md:px-3 md:py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[9px] sm:text-[10px] md:text-xs font-medium shadow-lg">
            <Star size={10} />
            <span className="hidden sm:inline">{lang === "fr" ? "Projet client" : "Client project"}</span>
          </div>
        </div>
      )}
      {p.isAIDemo && (
        <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 md:-top-3 md:-right-3 z-10">
          <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2 md:px-3 md:py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[9px] sm:text-[10px] md:text-xs font-medium shadow-lg">
            <Bot size={10} />
            <span className="hidden sm:inline">{lang === "fr" ? "Démo concept IA" : "AI concept demo"}</span>
          </div>
        </div>
      )}
      {!p.isClientProject && !p.isAIDemo && (
        <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 md:-top-3 md:-right-3 z-10">
          <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-2 md:px-3 md:py-1 rounded-full bg-slate-700 border border-slate-600 text-slate-200 text-[9px] sm:text-[10px] md:text-xs font-medium shadow-lg">
            <Code2 size={10} />
            <span className="hidden sm:inline">{lang === "fr" ? "Projet perso" : "Personal"}</span>
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
  ), [lang, renderImage, renderContent]);

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Rocket size={14} />
            <span>{lang === "fr" ? "Réalisations" : "Our Work"}</span>
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
              ? "2 sites clients livrés — et des démos en ligne pour montrer ce que je peux construire pour vous."
              : "2 delivered client sites — plus live demos showing what I can build for you."}
          </p>
        </Reveal>

        {/* Section 1 — Projets clients livrés */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />
            <span className="text-xs md:text-sm text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-2">
              <Star size={12} />
              {lang === "fr" ? "2 projets clients livrés" : "2 delivered client projects"}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-700/40 to-transparent" />
          </div>
        </Reveal>

        {heroProjects.map((hp) => (
          <Reveal key={hp.id} className="mb-8 md:mb-12">
            {renderCard(hp, true)}
          </Reveal>
        ))}

        {/* Section 2 — Démos IA */}
        {aiDemoProjects.length > 0 && (
          <>
            <Reveal>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />
                <span className="text-xs md:text-sm text-violet-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Bot size={12} />
                  {lang === "fr" ? "Démos IA — ce que je peux construire pour vous" : "AI Demos — what I can build for you"}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-700/40 to-transparent" />
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 mb-8 md:mb-12">
              {aiDemoProjects.map((p, index) => (
                <Reveal key={p.id} delay={index * 0.1}>
                  {renderCard(p)}
                </Reveal>
              ))}
            </div>
          </>
        )}

        {/* Section 3 — Lab & expérimentations */}
        {personalProjects.length > 0 && (
          <>
            <Reveal>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
                <span className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider flex items-center gap-2">
                  <Code2 size={12} />
                  {lang === "fr" ? "Lab & expérimentations techniques" : "Lab & technical experiments"}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
              </div>
            </Reveal>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
              {personalProjects.map((p, index) => {
                // When there's exactly 1 leftover card in the last row,
                // make it span the full width so the row doesn't look orphaned.
                const remainder = personalProjects.length % 3;
                const isLastOrphan =
                  remainder === 1 && index === personalProjects.length - 1;
                // When there are 2 leftover cards, they fill 2/3 of the row.
                // That's fine visually — no fix needed.
                return (
                  <Reveal
                    key={p.id}
                    delay={index * 0.05}
                    className={isLastOrphan ? "col-span-3" : ""}
                  >
                    {renderCard(p)}
                  </Reveal>
                );
              })}
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
              type="button"
              ref={closeButtonRef}
              onClick={closeModal}
              aria-label={lang === "fr" ? "Fermer" : "Close"}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
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
                const features = selectedProject.features?.[lang] || [];
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
                      {selectedProject.isAIDemo && (
                        <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/30 font-medium">
                          <Bot size={12} />
                          Demo
                        </span>
                      )}
                      {selectedProject.link && (
                        <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Live
                        </span>
                      )}
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
                      {selectedProject.link && (
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
                      )}
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
