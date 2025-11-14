// src/components/Skills.jsx
import { useTranslation } from "react-i18next";
import {
  Palette,
  Server,
  Code,
  Globe2,
  ShieldCheck,
  Layers,
  Network,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const SkillBar = ({ name, level, color = "from-violet-500 to-purple-500" }) => (
  <div className="group mb-4">
    <div className="flex justify-between text-sm mb-2 text-slate-100">
      <span className="font-medium">{name}</span>
      <span className="text-slate-400 font-semibold">{level}%</span>
    </div>
    <div className="h-2.5 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/30">
      <div
        className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out rounded-full shadow-lg`}
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default function Skills() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const skillCategories = [
    {
      icon: Palette,
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/30",
      iconColor: "text-violet-300",
      title: lang === "fr" ? "Front-end & UX/UI" : "Front-end & UX/UI",
      subtitle: lang === "fr" ? "Interfaces modernes & accessibles" : "Modern & accessible interfaces",
      description: lang === "fr"
        ? "Sites vitrines, dashboards, portails clients avec design soigné."
        : "Landing pages, dashboards, client portals with polished design.",
      skills: [
        { name: "HTML5 / CSS3", level: 96, color: "from-orange-400 to-red-500" },
        { name: "JavaScript (ES6+)", level: 92, color: "from-yellow-400 to-orange-500" },
        { name: "React", level: 86, color: "from-cyan-400 to-blue-500" },
        { name: "Vue.js 3", level: 88, color: "from-green-400 to-emerald-500" },
        { name: "Tailwind / Bootstrap", level: 94, color: "from-sky-400 to-cyan-500" },
      ],
    },
    {
      icon: Server,
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-300",
      title: lang === "fr" ? "Back-end & API" : "Back-end & API",
      subtitle: lang === "fr" ? "Applications métier robustes" : "Robust business applications",
      description: lang === "fr"
        ? "Applications internes, SaaS, intégrations et connecteurs API."
        : "Internal apps, SaaS platforms, API integrations and connectors.",
      skills: [
        { name: "PHP / Laravel", level: 90, color: "from-red-400 to-orange-500" },
        { name: "Python", level: 82, color: "from-yellow-400 to-amber-500" },
        { name: "REST / JSON APIs", level: 85, color: "from-blue-400 to-indigo-500" },
        { name: "MySQL / PostgreSQL", level: 84, color: "from-blue-400 to-cyan-500" },
        { name: lang === "fr" ? "Auth & rôles" : "Auth & roles", level: 80, color: "from-purple-400 to-violet-500" },
      ],
    },
    {
      icon: Code,
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-300",
      title: lang === "fr" ? "CMS & Déploiement" : "CMS & Deployment",
      subtitle: lang === "fr" ? "Livraison rapide & SEO" : "Fast delivery & SEO",
      description: lang === "fr"
        ? "WordPress, sites headless et déploiements optimisés pour la visibilité."
        : "WordPress, headless sites and optimized deployments for visibility.",
      skills: [
        { name: "WordPress", level: 78, color: "from-slate-400 to-slate-600" },
        { name: lang === "fr" ? "Headless (React)" : "Headless (React)", level: 80, color: "from-cyan-400 to-blue-500" },
        { name: "i18n (FR/EN)", level: 90, color: "from-violet-400 to-purple-500" },
        { name: lang === "fr" ? "SEO technique" : "Technical SEO", level: 75, color: "from-green-400 to-emerald-500" },
        { name: "Git / CI/CD", level: 88, color: "from-orange-400 to-amber-500" },
      ],
    },
    {
      icon: Network,
      color: "from-orange-400 to-amber-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-300",
      title: lang === "fr" ? "Odoo & ERP" : "Odoo & ERP",
      subtitle: lang === "fr" ? "Intégrations avancées" : "Advanced integrations",
      description: lang === "fr"
        ? "Modules Odoo 17, portails clients, connexions ERP ↔ site web."
        : "Odoo 17 modules, customer portals, ERP ↔ website connections.",
      skills: [
        { name: lang === "fr" ? "Odoo 17 (modules, portails)" : "Odoo 17 (modules, portals)", level: 85, color: "from-purple-400 to-violet-500" },
        { name: lang === "fr" ? "Odoo ↔ APIs externes" : "Odoo ↔ External APIs", level: 80, color: "from-indigo-400 to-purple-500" },
        { name: "QWeb / OWL", level: 78, color: "from-violet-400 to-purple-500" },
        { name: lang === "fr" ? "PDF personnalisés" : "Custom PDFs", level: 82, color: "from-red-400 to-orange-500" },
        { name: lang === "fr" ? "Déploiement Odoo" : "Odoo deployment", level: 72, color: "from-blue-400 to-cyan-500" },
      ],
    },
  ];

  const guarantees = [
    {
      icon: ShieldCheck,
      color: "from-emerald-400 to-green-500",
      title: lang === "fr" ? "Qualité production" : "Production quality",
      description: lang === "fr"
        ? "Code structuré, versionné sur Git, testé et documenté pour votre équipe."
        : "Structured code, versioned on Git, tested and documented for your team.",
    },
    {
      icon: Layers,
      color: "from-violet-400 to-purple-500",
      title: lang === "fr" ? "Bilingue FR/EN" : "Bilingual FR/EN",
      description: lang === "fr"
        ? "Tous les projets peuvent être livrés en version bilingue avec i18n natif."
        : "All projects can be delivered bilingual with native i18n support.",
    },
    {
      icon: Globe2,
      color: "from-cyan-400 to-blue-500",
      title: lang === "fr" ? "Remote-friendly" : "Remote-friendly",
      description: lang === "fr"
        ? "Process clair et communication fluide pour collaborer à distance efficacement."
        : "Clear process and smooth communication for effective remote collaboration.",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <TrendingUp size={14} />
            <span>{lang === "fr" ? "Expertise technique" : "Technical expertise"}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Stack moderne &{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  maîtrisé
                </span>
              </>
            ) : (
              <>
                Modern &{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  mastered
                </span>{" "}
                stack
              </>
            )}
          </h2>
          
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Technologies front-end, back-end et ERP pour créer des solutions web complètes et performantes, livrées en bilingue."
              : "Front-end, back-end and ERP technologies to create complete, high-performance web solutions, delivered bilingually."}
          </p>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <Reveal key={category.title} delay={index * 0.1}>
                <div className="group relative h-full">
                  {/* Glow effect */}
                  <div className={`pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br ${category.color} opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
                  
                  <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 hover:border-violet-400/50 transition-all duration-300">
                    
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.bgColor} border ${category.borderColor} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={24} className={category.iconColor} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {category.title}
                        </h3>
                        <p className="text-sm text-slate-400 mb-2">
                          {category.subtitle}
                        </p>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills bars */}
                    <div className="space-y-1">
                      {category.skills.map((skill, idx) => (
                        <SkillBar
                          key={idx}
                          name={skill.name}
                          level={skill.level}
                          color={skill.color}
                        />
                      ))}
                    </div>

                    {/* Decorative gradient line */}
                    <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 group-hover:w-24 transition-all`} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Guarantees Section */}
        <Reveal delay={0.3}>
          <div className="relative">
            {/* Glow background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />
            
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-3">
                  <Sparkles size={14} />
                  <span>{lang === "fr" ? "Notre engagement" : "Our commitment"}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {lang === "fr" ? "Ce que vous obtenez avec chaque projet" : "What you get with every project"}
                </h3>
                <p className="text-slate-400 text-sm">
                  {lang === "fr"
                    ? "Standards professionnels garantis, peu importe la taille du projet"
                    : "Professional standards guaranteed, regardless of project size"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {guarantees.map((guarantee, idx) => {
                  const Icon = guarantee.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative p-6 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-violet-500/30 hover:bg-slate-800/50 transition-all"
                    >
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${guarantee.color} bg-opacity-10 border border-white/10 mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon size={22} className={`bg-gradient-to-br ${guarantee.color} bg-clip-text text-transparent`} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {guarantee.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {guarantee.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom stats */}
              <div className="mt-8 pt-8 border-t border-slate-800/50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Zap size={20} className="text-violet-400" />
                      <p className="text-3xl font-bold text-white">20+</p>
                    </div>
                    <p className="text-sm text-slate-400">
                      {lang === "fr" ? "Technologies maîtrisées" : "Technologies mastered"}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Globe2 size={20} className="text-cyan-400" />
                      <p className="text-3xl font-bold text-white">2</p>
                    </div>
                    <p className="text-sm text-slate-400">
                      {lang === "fr" ? "Langues (FR/EN)" : "Languages (FR/EN)"}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TrendingUp size={20} className="text-emerald-400" />
                      <p className="text-3xl font-bold text-white">100%</p>
                    </div>
                    <p className="text-sm text-slate-400">
                      {lang === "fr" ? "Code production-ready" : "Production-ready code"}
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
}