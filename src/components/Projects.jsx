// src/components/Projects.jsx
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects.js";
import { Check, ExternalLink, Sparkles, Code2, GitBranch, Rocket } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const order = ["ecommerce", "weather", "event", "odoo"];
  const sortedProjects = order
    .map((k) => projects.find((p) => p.key === k))
    .filter(Boolean);

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
              ? "Sites web, applications et intégrations déployés en production. Chaque projet est conçu pour être maintenable et évolutif."
              : "Websites, applications and integrations deployed in production. Every project is built to be maintainable and scalable."}
          </p>
        </Reveal>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-12">
          {sortedProjects.map((p, index) => {
            const title = typeof p.title === "string" ? p.title : p.title[lang];
            const subtitle = typeof p.subtitle === "string" ? p.subtitle : p.subtitle[lang];
            const description =
              typeof p.description === "string" ? p.description : p.description[lang];
            const features = Array.isArray(p.features)
              ? p.features
              : p.features?.[lang] || [];
            const tech = p.tech || [];
            const imgSrc = p.image || (p.images && p.images[0]);

            return (
              <Reveal key={p.id} delay={index * 0.1}>
                <div className="group relative">
                  {/* Glow effect */}
                  <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl transition-opacity duration-500" />
                  
                  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 hover:border-violet-400/50 transition-all duration-300 overflow-hidden">
                    
                    {/* Content Side */}
                    <div className={`flex flex-col h-full ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-100 border border-violet-400/30 font-medium">
                          <Sparkles size={12} />
                          {subtitle}
                        </span>
                        {p.context?.[lang] && (
                          <span className="text-xs px-3 py-1.5 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50">
                            {p.context[lang]}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="text-3xl">{p.icon || "💻"}</span>
                        <span>{title}</span>
                      </h3>

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
                          {features.slice(0, 6).map((feat, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-slate-200"
                            >
                              <Check
                                size={16}
                                className="text-emerald-400 flex-shrink-0 mt-0.5"
                              />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 hover:border-violet-500/30 text-xs text-slate-100 rounded-lg transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTA / Status */}
                      <div className="mt-auto pt-4 border-t border-slate-800/50">
                        {p.link && p.link !== "#" ? (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all"
                          >
                            {lang === "fr" ? "Voir le projet" : "View project"}
                            <ExternalLink
                              size={16}
                              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                            />
                          </a>
                        ) : (
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Code2 size={14} />
                            <span>
                              {lang === "fr"
                                ? "Projet client privé · Accès sur demande"
                                : "Private client project · Access on request"}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="relative h-full min-h-[300px] lg:min-h-[400px] bg-slate-950/40 rounded-xl border border-slate-800/50 overflow-hidden group-hover:border-violet-500/30 transition-colors">
                        {imgSrc ? (
                          <>
                            {/* Image overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10" />
                            <img
                              src={imgSrc}
                              alt={title}
                              loading="lazy"
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                          </>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-6">
                              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/50 border border-slate-700/50 mb-4">
                                <Code2 size={32} className="text-slate-500" />
                              </div>
                              <p className="text-slate-500 text-sm">
                                {lang === "fr"
                                  ? "Capture d'écran à venir"
                                  : "Screenshot coming soon"}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Info Banner */}
        <Reveal delay={0.3}>
          <div className="mt-12 relative">
            {/* Glow background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />
            
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Git versioning */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 bg-opacity-10 border border-violet-500/30 flex-shrink-0">
                    <GitBranch size={22} className="text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {lang === "fr" ? "Code versionné" : "Versioned code"}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {lang === "fr"
                        ? "Tous les projets livrés avec Git et documentation"
                        : "All projects delivered with Git and documentation"}
                    </p>
                  </div>
                </div>

                {/* Deployment */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 bg-opacity-10 border border-emerald-500/30 flex-shrink-0">
                    <Rocket size={22} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {lang === "fr" ? "Déploiement inclus" : "Deployment included"}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {lang === "fr"
                        ? "Netlify, VPS ou environnement client"
                        : "Netlify, VPS or client environment"}
                    </p>
                  </div>
                </div>

                {/* Support */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 bg-opacity-10 border border-cyan-500/30 flex-shrink-0">
                    <Sparkles size={22} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {lang === "fr" ? "Support 30 jours" : "30-day support"}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {lang === "fr"
                        ? "Assistance post-lancement garantie"
                        : "Post-launch assistance guaranteed"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
