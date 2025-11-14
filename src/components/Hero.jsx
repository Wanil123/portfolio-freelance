// src/components/Hero.jsx
import { Globe2, CheckCircle2, Sparkles, ArrowRight, Code2, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = ({ scrollToSection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const techBadges = {
    frontend: [
      { name: "React", color: "from-cyan-400 to-blue-500" },
      { name: "Vue.js", color: "from-green-400 to-emerald-500" },
    ],
    backend: [
      { name: "Laravel", color: "from-red-400 to-orange-500" },
      { name: "Odoo 17", color: "from-purple-400 to-violet-500" },
      { name: "Python", color: "from-yellow-400 to-amber-500" },
      { name: "WordPress", color: "from-sky-400 to-cyan-500" },
    ],
  };

  const highlights = [
    {
      icon: CheckCircle2,
      text: lang === "fr" ? "Livraison en 2-4 semaines" : "2-4 weeks delivery",
      color: "text-emerald-400"
    },
    {
      icon: Zap,
      text: lang === "fr" ? "Support bilingue FR/EN" : "Bilingual support FR/EN",
      color: "text-violet-400"
    },
    {
      icon: Globe2,
      text: lang === "fr" ? "Remote Canada • Europe • International" : "Remote Canada • Europe • International",
      color: "text-cyan-400"
    },
  ];

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-28 lg:pt-36 pb-16 md:pb-20 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950 -z-10" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* LEFT - Main Content */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-400/30 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span>
              {lang === "fr"
                ? "Disponible en freelance partout dans le monde"
                : "Available for Freelance Worldwide"}
            </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
                {lang === "fr" ? (
                  <>
                    Votre site web,{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      livré proprement
                    </span>
                  </>
                ) : (
                  <>
                    Your website,{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      done right
                    </span>
                  </>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                {lang === "fr"
                  ? "Développeur full-stack spécialisé en sites vitrines, e-commerce et applications sur mesure. Code propre, design moderne, livraison rapide."
                  : "Full-stack developer specializing in landing pages, e-commerce and custom web apps. Clean code, modern design, fast delivery."}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                {lang === "fr" ? "Stack" : "Stack"}:
              </span>
              {[...techBadges.frontend, ...techBadges.backend].map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${tech.color} bg-opacity-10 border border-white/10 text-white text-xs font-medium backdrop-blur-sm hover:scale-105 transition-transform cursor-default`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all text-sm md:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  {lang === "fr" ? "Démarrer un projet" : "Start a project"}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-6 md:px-8 py-3 md:py-3.5 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-white font-semibold rounded-xl backdrop-blur-sm transition-all text-sm md:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  {lang === "fr" ? "Voir mes projets" : "View projects"}
                  <Code2 size={18} className="group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/50">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-slate-300 text-xs md:text-sm"
                  >
                    <Icon size={16} className={item.color} />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT - Feature Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50" />
            
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles size={20} className="text-violet-400" />
                  {lang === "fr" ? "Services offerts" : "Services offered"}
                </h3>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                {[
                  {
                    title: lang === "fr" ? "Sites vitrines" : "Landing pages",
                    desc: lang === "fr" ? "Modernes, rapides, optimisés SEO" : "Modern, fast, SEO-optimized",
                    icon: "🎨"
                  },
                  {
                    title: lang === "fr" ? "E-commerce" : "E-commerce",
                    desc: lang === "fr" ? "Boutiques en ligne complètes" : "Complete online stores",
                    icon: "🛍️"
                  },
                  {
                    title: lang === "fr" ? "Applications web" : "Web apps",
                    desc: lang === "fr" ? "Dashboards, portails, SaaS" : "Dashboards, portals, SaaS",
                    icon: "⚡"
                  },
                  {
                    title: lang === "fr" ? "Intégrations Odoo" : "Odoo integrations",
                    desc: lang === "fr" ? "Modules custom, portails, API" : "Custom modules, portals, API",
                    icon: "🔧"
                  },
                ].map((service, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-violet-500/30 hover:bg-slate-800/50 transition-all cursor-default"
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base mb-1">
                        {service.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-400">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-6 border-t border-slate-800/50">
                <p className="text-xs text-slate-400 text-center">
                  {lang === "fr"
                    ? "Forfaits clés en main disponibles · Consultation gratuite"
                    : "Turnkey packages available · Free consultation"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;