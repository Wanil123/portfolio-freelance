// src/components/About.jsx
import { useTranslation } from "react-i18next";
import {
  Globe2,
  Code2,
  MapPin,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Zap,
  Shield,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const About = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const strengths = [
    {
      icon: MessageSquare,
      title: lang === "fr" ? "Communication directe" : "Direct communication",
      description:
        lang === "fr"
          ? "Pas de chargé de projet entre nous. Vous parlez directement au développeur qui code votre site. Questions, changements, feedback — tout est rapide."
          : "No project manager between us. You talk directly to the developer building your site. Questions, changes, feedback — everything is fast.",
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-300",
    },
    {
      icon: Code2,
      title: lang === "fr" ? "Code propre, livré prêt" : "Clean code, shipped ready",
      description:
        lang === "fr"
          ? "Pas de prototype à refaire. Vous recevez un produit déployé, documenté et que vous pouvez maintenir. Le code vous appartient."
          : "No prototype to redo. You receive a deployed, documented product you can maintain. The code is yours.",
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500/10",
      iconColor: "text-violet-300",
    },
    {
      icon: Globe2,
      title: lang === "fr" ? "Bilingue FR/EN natif" : "Natively bilingual FR/EN",
      description:
        lang === "fr"
          ? "Interface, contenu, SEO — tout est pensé dans les deux langues dès le départ. Idéal pour le marché québécois et canadien."
          : "Interface, content, SEO — everything is designed in both languages from day one. Ideal for the Québec and Canadian market.",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-300",
    },
    {
      icon: Shield,
      title: lang === "fr" ? "Satisfaction garantie" : "Satisfaction guaranteed",
      description:
        lang === "fr"
          ? "Corrections illimitées jusqu'à votre satisfaction. Support 30 jours après livraison. Si le délai n'est pas respecté, 10% de remise."
          : "Unlimited revisions until you're satisfied. 30-day post-launch support. If the deadline is missed, 10% discount.",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-500/10",
      iconColor: "text-amber-300",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>{lang === "fr" ? "À propos" : "About"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Derrière{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PrimeDev
                </span>
              </>
            ) : (
              <>
                Behind{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PrimeDev
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Un développeur full-stack senior, basé à Montréal, qui livre des projets web en production."
              : "A senior full-stack developer, based in Montréal, shipping web projects to production."}
          </p>
        </Reveal>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left Column - Story */}
          <Reveal delay={0.1}>
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50" />

              <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs font-medium mb-4">
                    <Zap size={12} />
                    <span>{lang === "fr" ? "Qui je suis" : "Who I am"}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Wanil Parfait
                  </h3>
                  <p className="text-sm text-violet-300 font-medium">
                    {lang === "fr"
                      ? "Développeur full-stack · Fondateur de PrimeDev Studios"
                      : "Full-stack developer · Founder of PrimeDev Studios"}
                  </p>
                </div>

                <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                  <p>
                    {lang === "fr"
                      ? "Développeur full-stack basé à Montréal, je conçois et livre des sites web et applications performantes avec React, Laravel et Tailwind CSS. Chaque projet est pensé pour la production : rapide, bilingue FR/EN et optimisé pour le référencement."
                      : "Full-stack developer based in Montréal, I design and ship high-performance websites and applications using React, Laravel and Tailwind CSS. Every project is built for production: fast, bilingual FR/EN and SEO-optimized."}
                  </p>

                  <p>
                    {lang === "fr"
                      ? "J'ai fondé PrimeDev Studios pour offrir un service direct, sans intermédiaire. De la conception au déploiement, un seul interlocuteur — ce qui garantit une communication claire, des délais respectés et un résultat conforme à vos attentes."
                      : "I founded PrimeDev Studios to provide a direct, no-middleman service. From design to deployment, one point of contact — ensuring clear communication, met deadlines and a result that matches your expectations."}
                  </p>

                  <p>
                    {lang === "fr"
                      ? "Je collabore principalement avec des PME qui souhaitent une présence en ligne professionnelle, des fondateurs qui ont besoin d'un MVP solide rapidement, et des agences à la recherche d'un développeur externe fiable."
                      : "I primarily work with SMBs seeking a professional online presence, founders who need a solid MVP fast, and agencies looking for a reliable external developer."}
                  </p>
                </div>

                {/* Key facts */}
                <div className="mt-6 pt-6 border-t border-slate-800/50 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      icon: MapPin,
                      text: lang === "fr" ? "Montréal, QC" : "Montréal, QC",
                      detail: lang === "fr" ? "Disponible en remote" : "Available remotely",
                    },
                    {
                      icon: Globe2,
                      text: lang === "fr" ? "Français & English" : "French & English",
                      detail: lang === "fr" ? "Sites bilingues natifs" : "Natively bilingual sites",
                    },
                    {
                      icon: Code2,
                      text: "React · Laravel · Tailwind",
                      detail: lang === "fr" ? "Stack principal" : "Main stack",
                    },
                    {
                      icon: CheckCircle2,
                      text: lang === "fr" ? "LamIPict.com livré" : "LamIPict.com delivered",
                      detail: lang === "fr" ? "E-commerce en production" : "E-commerce in production",
                    },
                  ].map((fact, idx) => {
                    const Icon = fact.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30">
                        <Icon size={16} className="text-violet-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-white font-medium">{fact.text}</p>
                          <p className="text-xs text-slate-500">{fact.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Why work with me */}
          <div className="space-y-4 md:space-y-5">
            <Reveal>
              <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wider mb-2">
                {lang === "fr" ? "Pourquoi travailler avec moi" : "Why work with me"}
              </p>
            </Reveal>
            {strengths.map((strength, idx) => {
              const Icon = strength.icon;
              return (
                <Reveal key={idx} delay={0.1 + idx * 0.05}>
                  <div className="group relative">
                    <div
                      className={`pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br ${strength.color} opacity-20 rounded-xl blur-xl transition-opacity duration-500`}
                    />

                    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-xl p-5 md:p-6 hover:border-violet-400/50 transition-all">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ${strength.bgColor} border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <Icon size={22} className={strength.iconColor} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-1.5">
                            {strength.title}
                          </h4>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {strength.description}
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

        {/* CTA Section */}
        <Reveal delay={0.3}>
          <div className="text-center">
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              {lang === "fr"
                ? "Un projet en tête? Écrivez-moi, je réponds en moins de 24h."
                : "Have a project in mind? Write to me, I reply within 24h."}
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
