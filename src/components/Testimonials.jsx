// src/components/Testimonials.jsx
import { useTranslation } from "react-i18next";
import { Sparkles, Shield, Clock, Code2, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Testimonials = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const guarantees = [
    {
      icon: Shield,
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-500/10",
      title: {
        fr: "Satisfaction garantie",
        en: "Satisfaction guaranteed"
      },
      description: {
        fr: "Si le résultat ne correspond pas au cahier des charges, corrections illimitées jusqu'à votre satisfaction complète.",
        en: "If the result doesn't match the specs, unlimited revisions until you're completely satisfied."
      }
    },
    {
      icon: Clock,
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500/10",
      title: {
        fr: "Livraison à temps",
        en: "On-time delivery"
      },
      description: {
        fr: "Délais respectés ou 10% de remise. Chaque projet inclut un calendrier précis avec jalons clairs.",
        en: "Deadlines met or 10% discount. Each project includes a precise timeline with clear milestones."
      }
    },
    {
      icon: Code2,
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10",
      title: {
        fr: "Code source inclus",
        en: "Source code included"
      },
      description: {
        fr: "Vous êtes propriétaire de votre code. Repository Git, documentation et formation inclus.",
        en: "You own your code. Git repository, documentation and training included."
      }
    },
    {
      icon: Zap,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-500/10",
      title: {
        fr: "Support 30 jours",
        en: "30-day support"
      },
      description: {
        fr: "Après la livraison, support gratuit pour corrections de bugs et ajustements mineurs.",
        en: "After delivery, free support for bug fixes and minor adjustments."
      }
    },
  ];

  const completedProjects = [
    {
      status: lang === "fr" ? "Livré" : "Delivered",
      type: lang === "fr" ? "Site e-commerce" : "E-commerce site",
      industry: "LamIPict — Montréal",
      color: "from-emerald-400 to-green-500"
    }
  ];

  const currentProjects = [
    {
      status: lang === "fr" ? "En développement" : "In development",
      type: lang === "fr" ? "Site vitrine" : "Business website",
      industry: lang === "fr" ? "Services professionnels" : "Professional services",
      color: "from-violet-400 to-purple-500"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>{lang === "fr" ? "Notre engagement" : "Our commitment"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Qualité{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  garantie
                </span>
              </>
            ) : (
              <>
                Quality{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  guaranteed
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Nouveau studio, standards professionnels. Voici nos engagements pour chaque projet."
              : "New studio, professional standards. Here are our commitments for every project."}
          </p>
        </Reveal>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group relative h-full">
                  {/* Hover glow */}
                  <div className={`pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br ${guarantee.color} opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />

                  <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 hover:border-violet-400/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${guarantee.bgColor} border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={24} className={`bg-gradient-to-br ${guarantee.color} bg-clip-text text-transparent`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {guarantee.title[lang]}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {guarantee.description[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Projects Status Section */}
        <Reveal delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <span className="text-emerald-400 text-sm font-medium">
                      {lang === "fr" ? "Activité récente" : "Recent activity"}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {lang === "fr"
                      ? "1 projet livré, 1 en cours"
                      : "1 project delivered, 1 in progress"}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {lang === "fr"
                      ? "Des clients satisfaits à Montréal et ailleurs."
                      : "Satisfied clients in Montreal and beyond."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Completed project */}
                  {completedProjects.map((project, idx) => (
                    <div
                      key={`completed-${idx}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${project.color} border border-white/10`}>
                        <CheckCircle2 size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{project.type}</p>
                        <p className="text-xs text-emerald-400">{project.industry}</p>
                      </div>
                    </div>
                  ))}
                  {/* Current project */}
                  {currentProjects.map((project, idx) => (
                    <div
                      key={`current-${idx}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/30 border border-slate-700/30"
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${project.color} border border-white/10`}>
                        <Clock size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{project.type}</p>
                        <p className="text-xs text-slate-500">{project.industry}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-4">
              {lang === "fr"
                ? "Devenez notre prochain client satisfait"
                : "Become our next satisfied client"}
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
            >
              {lang === "fr" ? "Obtenir un devis gratuit" : "Get a free quote"}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
