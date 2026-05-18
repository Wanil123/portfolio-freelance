// src/components/About.jsx
import { useLanguage } from "../hooks/useLanguage";
import { COMPANY, CONTACT } from "../constants/config";
import {
  Globe2,
  Code2,
  MapPin,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Calendar,
  Shield,
  Bot,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const About = () => {
  const { lang } = useLanguage();

  const strengths = [
    {
      icon: MessageSquare,
      title: lang === "fr" ? "Vous parlez directement avec moi" : "You talk directly to me",
      description:
        lang === "fr"
          ? "Pas d'intermédiaire, pas de junior à qui déléguer. Vous échangez avec le développeur qui code votre site — questions, changements, feedback, tout passe par moi."
          : "No middleman, no junior handling your project. You work directly with the developer writing your code — questions, changes, feedback — all through me.",
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-300",
    },
    {
      icon: Code2,
      title: lang === "fr" ? "Code propre, livré prêt" : "Clean code, shipped ready",
      description:
        lang === "fr"
          ? "Pas de prototype à refaire. Vous recevez un produit déployé, documenté et que vous pouvez maintenir. Le code vous appartient à 100%."
          : "No prototype to redo. You receive a deployed, documented product you can maintain. The code is 100% yours.",
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
          ? "Corrections illimitées jusqu'à votre satisfaction. Support 30 jours après livraison. Si je rate le délai, vous recevez 10% de remise — automatiquement."
          : "Unlimited revisions until you're satisfied. 30-day post-launch support. If I miss the deadline, you get 10% back — automatically.",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-500/10",
      iconColor: "text-amber-300",
    },
    {
      icon: Bot,
      title: lang === "fr" ? "IA intégrée dès le départ" : "AI built in from the start",
      description:
        lang === "fr"
          ? "Chatbots IA, agents vocaux, automatisation CRM — j'intègre des solutions IA dans vos projets pour répondre à vos leads 24h/7j, même quand vous dormez."
          : "AI chatbots, voice agents, CRM automation — I integrate AI into your projects to answer leads 24/7, even while you sleep.",
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
                La personne derrière{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PrimeDev
                </span>
              </>
            ) : (
              <>
                The person behind{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PrimeDev
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Développeur full-stack solo à Montréal — ce qui signifie que vous avez toujours affaire à moi, du premier appel à la mise en ligne."
              : "Solo full-stack developer in Montréal — which means you always deal with me, from the first call to go-live."}
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
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/40 to-purple-500/40 rounded-2xl blur-md" />
                    <img
                      src="/wanil.jpeg"
                      alt="Wanil Parfait"
                      className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl object-cover border-2 border-violet-500/40 shadow-xl shadow-violet-500/20"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Wanil Parfait
                    </h3>
                    <p className="text-sm text-violet-300 font-medium mb-3">
                      {lang === "fr"
                        ? "Fondateur & Développeur — PrimeDev Studios"
                        : "Founder & Developer — PrimeDev Studios"}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-3">
                      <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">
                        {lang === "fr" ? "Disponible — 2 spots ce trimestre" : "Available — 2 spots this quarter"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                      {lang === "fr"
                        ? "Développeur full-stack solo · Montréal, QC · 5+ ans d'expérience"
                        : "Solo full-stack developer · Montréal, QC · 5+ years experience"}
                    </p>
                  </div>
                </div>

                {/* Bio - first person, solo as strength */}
                <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                  <p>
                    {lang === "fr"
                      ? "Je suis développeur full-stack avec plus de 5 ans d'expérience — dont 3 ans en entreprise à construire des APIs de production pour des secteurs critiques (aérospatiale et industrie manufacturière). J'ai fondé PrimeDev Studios pour offrir aux PME québécoises ce que les grandes agences ne peuvent pas : un accès direct au développeur, sans intermédiaire."
                      : "I'm a full-stack developer with 5+ years of experience — including 3 years building production APIs for critical industries (aerospace and manufacturing). I founded PrimeDev Studios to give SMBs what big agencies can't: direct access to the developer, no middlemen."}
                  </p>

                  <p>
                    {lang === "fr"
                      ? "Travailler seul, c'est un choix stratégique. Cela signifie que c'est moi qui répond à vos messages, moi qui code vos fonctionnalités, et moi qui m'engage sur les délais. Vous n'êtes jamais transféré à un junior ou perdu dans un système de tickets."
                      : "Working solo is a deliberate choice. It means I'm the one answering your messages, writing your features, and committing to deadlines. You're never passed off to a junior or lost in a ticket system."}
                  </p>

                  <p>
                    {lang === "fr"
                      ? "Aujourd'hui, j'intègre l'IA dans chaque projet — chatbots, agents vocaux, automatisation CRM — pour que vos leads reçoivent une réponse à 2h du matin, pas le lendemain matin."
                      : "Today, I integrate AI into every project — chatbots, voice agents, CRM automation — so your leads get a response at 2am, not the next morning."}
                  </p>
                </div>

                {/* Key facts */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      icon: MapPin,
                      text: COMPANY.location,
                      detail: lang === "fr" ? "Remote disponible" : "Remote available",
                    },
                    {
                      icon: Globe2,
                      text: lang === "fr" ? "Français & English" : "French & English",
                      detail: lang === "fr" ? "Bilingue natif" : "Natively bilingual",
                    },
                    {
                      icon: Code2,
                      text: "React · Vue.js · Laravel · n8n",
                      detail: lang === "fr" ? "Stack web + IA" : "Web + AI stack",
                    },
                    {
                      icon: CheckCircle2,
                      text: lang === "fr" ? "5+ ans d'expérience" : "5+ years experience",
                      detail: lang === "fr" ? "APIs production — secteur critique" : "Production APIs — critical sector",
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
                {lang === "fr" ? "Pourquoi travailler avec moi" : "Why work with me"}
              </p>
            </Reveal>
            {strengths.map((strength, idx) => {
              const Icon = strength.icon;
              return (
                <Reveal key={idx} delay={0.1 + idx * 0.05}>
                  <div className="group relative">
                    <div
                      className={`pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br ${strength.color} rounded-xl blur-xl transition-opacity duration-500`}
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
                ? "30 minutes d'appel gratuit — je vous dis honnêtement si je peux vous aider et combien ça coûte."
                : "30-minute free call — I'll tell you honestly if I can help and what it costs."}
            </p>

            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:scale-105 active:scale-95 text-base"
            >
              <Calendar size={18} />
              {lang === "fr"
                ? "Réserver mon appel gratuit (30 min)"
                : "Book my free call (30 min)"}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
