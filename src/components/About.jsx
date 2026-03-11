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
  Shield,
  Bot,
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
          ? "Pas d'intermédiaire. Vous échangez directement avec l'équipe qui développe votre site. Questions, changements, feedback — tout est rapide."
          : "No middleman. You work directly with the team building your site. Questions, changes, feedback — everything is fast.",
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
    {
      icon: Bot,
      title: lang === "fr" ? "Automatisation intelligente" : "Smart automation",
      description:
        lang === "fr"
          ? "Chatbots IA, agents vocaux, automatisation CRM et suivi des leads — nous intégrons des solutions IA directement dans vos projets pour automatiser et convertir."
          : "AI chatbots, voice agents, CRM automation and lead tracking — we integrate AI solutions directly into your projects to automate and convert.",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-500/10",
      iconColor: "text-pink-300",
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
              ? "Studio de développement web & automatisation IA, basé à Montréal."
              : "Web development & AI automation studio, based in Montréal."}
          </p>
        </Reveal>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left Column - Story + Photo */}
          <Reveal delay={0.1}>
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50" />

              <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                {/* Photo + Name */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/assets/wanil.jpeg"
                    alt="Wanil Parfait"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border-2 border-violet-500/30 shadow-lg shadow-violet-500/20"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Wanil Parfait
                    </h3>
                    <p className="text-sm text-violet-300 font-medium">
                      {lang === "fr"
                        ? "Fondateur & Développeur principal"
                        : "Founder & Lead Developer"}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">
                        {lang === "fr" ? "Disponible pour nouveaux projets" : "Available for new projects"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio - human tone */}
                <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                  <p>
                    {lang === "fr"
                      ? "PrimeDev Studios est un studio de développement web basé à Montréal, spécialisé en React, TypeScript et Laravel. Avec plus de 5 ans d'expérience en développement full-stack et plus de 3 ans en entreprise à bâtir des APIs servant 10 000+ requêtes par jour, nous apportons une expertise concrète à chaque projet."
                      : "PrimeDev Studios is a Montreal-based web development studio specializing in React, TypeScript and Laravel. With over 5 years of full-stack experience and 3+ years building enterprise APIs serving 10,000+ requests per day, we bring real-world expertise to every project."}
                  </p>

                  <p>
                    {lang === "fr"
                      ? "Fondé par Wanil Parfait, le studio est né d'une conviction : les PME méritent un partenaire technique qui travaille directement avec elles — sans intermédiaire, sans délai inutile. Chez PrimeDev, vous travaillez avec les gens qui codent votre projet."
                      : "Founded by Wanil Parfait, the studio was born from a belief: SMBs deserve a technical partner that works directly with them — no middlemen, no unnecessary delays. At PrimeDev, you work with the people who build your project."}
                  </p>

                  <p>
                    {lang === "fr"
                      ? "Aujourd'hui, nous intégrons l'IA dans nos projets web — chatbots, agents vocaux, automatisation CRM — pour aider les PME à ne plus perdre de clients le soir et les week-ends."
                      : "Today, we integrate AI into our web projects — chatbots, voice agents, CRM automation — to help SMBs stop losing clients during evenings and weekends."}
                  </p>
                </div>

                {/* Key facts */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: MapPin,
                      text: "Montréal, QC",
                      detail: lang === "fr" ? "Remote disponible" : "Remote available",
                    },
                    {
                      icon: Globe2,
                      text: lang === "fr" ? "Français & English" : "French & English",
                      detail: lang === "fr" ? "Bilingue natif" : "Natively bilingual",
                    },
                    {
                      icon: Code2,
                      text: "React · Laravel · n8n",
                      detail: lang === "fr" ? "Stack web + IA" : "Web + AI stack",
                    },
                    {
                      icon: CheckCircle2,
                      text: lang === "fr" ? "5 ans d'expérience" : "5 years experience",
                      detail: lang === "fr" ? "APIs 10K+ requêtes/jour" : "APIs 10K+ requests/day",
                    },
                  ].map((fact, idx) => {
                    const Icon = fact.icon;
                    return (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-800/30">
                        <Icon size={14} className="text-violet-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-white font-medium">{fact.text}</p>
                          <p className="text-[10px] text-slate-500">{fact.detail}</p>
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
                {lang === "fr" ? "Pourquoi travailler avec nous" : "Why work with us"}
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
                ? "Un projet en tête? Écrivez-nous, nous répondons en moins de 24h."
                : "Have a project in mind? Write to us, we reply within 24h."}
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
