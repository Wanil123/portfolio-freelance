// src/components/About.jsx
import { useTranslation } from "react-i18next";
import {
  Globe2,
  Code2,
  MapPin,
  CheckCircle2,
  Layers,
  Rocket,
  Sparkles,
  ArrowRight,
  Users,
  Target,
  Zap,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const About = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const highlights = [
    {
      icon: CheckCircle2,
      text:
        lang === "fr"
          ? "Bilingue FR/EN — Parfait pour le Québec et l'international"
          : "Bilingual FR/EN — Perfect for Québec and international",
    },
    {
      icon: CheckCircle2,
      text:
        lang === "fr"
          ? "Stack moderne : React, Vue 3, Tailwind, Laravel, WordPress"
          : "Modern stack: React, Vue 3, Tailwind, Laravel, WordPress",
    },
    {
      icon: CheckCircle2,
      text:
        lang === "fr"
          ? "Intégrations avancées : APIs, CRM, ERP, Odoo 17"
          : "Advanced integrations: APIs, CRM, ERP, Odoo 17",
    },
    {
      icon: CheckCircle2,
      text:
        lang === "fr"
          ? "Livrables production-ready avec documentation"
          : "Production-ready deliverables with documentation",
    },
  ];

  const features = [
    {
      icon: Code2,
      title: lang === "fr" ? "Sites & apps modernes" : "Modern sites & apps",
      description: "React, Vue 3, Tailwind, Laravel, WordPress",
      detail:
        lang === "fr"
          ? "UX soignée, animations fluides, performance optimale"
          : "Clean UX, smooth animations, optimal performance",
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-300",
    },
    {
      icon: Layers,
      title: lang === "fr" ? "Connecté à vos outils" : "Connected to your tools",
      description:
        lang === "fr"
          ? "Portails Odoo 17, modules personnalisés, QWeb"
          : "Odoo 17 portals, custom modules, QWeb",
      detail:
        lang === "fr"
          ? "Automatisation et intégrations ERP avancées"
          : "Automation and advanced ERP integrations",
      color: "from-orange-400 to-amber-500",
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-300",
    },
    {
      icon: MapPin,
      title: lang === "fr" ? "Basé à Montréal" : "Based in Montréal",
      description:
        lang === "fr"
          ? "Projets Québec, Canada et international"
          : "Projects in Québec, Canada and international",
      detail:
        lang === "fr"
          ? "Remote-friendly avec communication claire"
          : "Remote-friendly with clear communication",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-300",
    },
    {
      icon: Rocket,
      title: lang === "fr" ? "Process en 3 étapes" : "3-step process",
      description:
        lang === "fr"
          ? "Cadrage rapide · Design/Dev · Lancement"
          : "Fast scoping · Design/Dev · Launch",
      detail:
        lang === "fr"
          ? "Optimisé pour les clients qui veulent avancer vite"
          : "Optimized for clients who want to move fast",
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500/10",
      iconColor: "text-violet-300",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "20+",
      label: lang === "fr" ? "Technologies" : "Technologies",
      color: "text-violet-400",
    },
    {
      icon: Globe2,
      value: "2",
      label: lang === "fr" ? "Langues (FR/EN)" : "Languages (FR/EN)",
      color: "text-cyan-400",
    },
    {
      icon: Target,
      value: "100%",
      label: lang === "fr" ? "Production-ready" : "Production-ready",
      color: "text-emerald-400",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>{lang === "fr" ? "À propos" : "About us"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Studio web{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  moderne
                </span>
              </>
            ) : (
              <>
                Modern web{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  studio
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Nous concevons des expériences web propres, rapides et bilingues (FR/EN), prêtes à s'intégrer à vos outils existants. Basé à Montréal, disponible en remote."
              : "We design clean, fast, bilingual (FR/EN) web experiences, ready to integrate with your existing tools. Based in Montréal, available remotely."}
          </p>
        </Reveal>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left Column - Story */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50" />

              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs font-medium mb-4">
                    <Zap size={12} />
                    <span>{lang === "fr" ? "Notre histoire" : "Our story"}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {lang === "fr"
                      ? "Expertise technique, approche humaine"
                      : "Technical expertise, human approach"}
                  </h3>
                </div>

                <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                  <p>
                    {lang === "fr"
                      ? "PrimeDev Studios est dirigé par Wanil Parfait, développeur full-stack avec une expérience concrète sur React, Vue.js, Laravel, WordPress, Odoo 17 et bien plus."
                      : "PrimeDev Studios is led by Wanil Parfait, a full-stack developer with hands-on experience in React, Vue.js, Laravel, WordPress, Odoo 17 and more."}
                  </p>

                  <p>
                    {lang === "fr"
                      ? "Nous travaillons comme une équipe senior compacte : on clarifie vos besoins, on propose l'architecture adaptée, et on livre un produit que vous pouvez déployer immédiatement — sans refonte dans deux semaines."
                      : "We work like a compact senior team: we clarify your needs, propose the right architecture, and deliver a product you can deploy immediately — no rebuilding in two weeks."}
                  </p>

                  <p>
                    {lang === "fr"
                      ? "Nos clients : agences en manque de développeurs, PME qui veulent une vraie présence en ligne, fondateurs qui ont besoin d'un MVP, et entreprises qui doivent connecter leur site à Odoo 17."
                      : "Our clients: agencies needing extra dev capacity, SMBs wanting a real online presence, founders needing an MVP, and companies needing to connect their site to Odoo 17."}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-6 pt-6 border-t border-slate-800/50 space-y-3">
                  {highlights.map((highlight, idx) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <Icon
                          size={18}
                          className="text-emerald-400 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-slate-200">
                          {highlight.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Features Grid */}
          <div className="space-y-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Reveal key={idx} delay={0.1 + idx * 0.05}>
                  <div className="group relative">
                    <div
                      className={`pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br ${feature.color} opacity-20 rounded-xl blur-xl transition-opacity duration-500`}
                    />

                    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-xl p-5 md:p-6 hover:border-violet-400/50 transition-all">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <Icon size={22} className={feature.iconColor} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-sm text-slate-200 mb-2 font-medium">
                            {feature.description}
                          </p>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {feature.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <Reveal delay={0.3}>
          <div className="relative mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx}>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Icon size={24} className={stat.color} />
                        <p className="text-4xl font-bold text-white">
                          {stat.value}
                        </p>
                      </div>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA Section */}
        <Reveal delay={0.4}>
          <div className="text-center">
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              {lang === "fr"
                ? "Un site à moderniser, une application à livrer ou un portail Odoo à intégrer?"
                : "Need to modernize a site, ship an application or integrate an Odoo portal?"}
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all text-base"
            >
              {lang === "fr"
                ? "Discutons de votre projet"
                : "Let's discuss your project"}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
