// src/components/Services.jsx
import { useTranslation } from "react-i18next";
import { services } from "../data/services.js";
import { Check, Code, Globe2, Zap, ArrowRight, Shield, Clock } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Services = ({ scrollToSection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const ordered = [
    "web-apps",
    "ecommerce",
    "frontend",
    "apis",
    "odoo",
    "maintenance",
  ];
  const sortedServices = ordered
    .map((key) => services.find((s) => s.key === key))
    .filter(Boolean);

  const guarantees = [
    {
      icon: Code,
      title: lang === "fr" ? "Code propre" : "Clean code",
      desc: lang === "fr" ? "Standards 2025" : "2025 standards",
      color: "from-violet-400 to-purple-400"
    },
    {
      icon: Globe2,
      title: lang === "fr" ? "Bilingue FR/EN" : "Bilingual FR/EN",
      desc: lang === "fr" ? "i18n inclus" : "i18n included",
      color: "from-cyan-400 to-blue-400"
    },
    {
      icon: Zap,
      title: lang === "fr" ? "Livraison rapide" : "Fast delivery",
      desc: lang === "fr" ? "2-4 semaines" : "2-4 weeks",
      color: "from-emerald-400 to-green-400"
    },
    {
      icon: Shield,
      title: lang === "fr" ? "Support 30j" : "30-day support",
      desc: lang === "fr" ? "Garantie incluse" : "Warranty included",
      color: "from-orange-400 to-amber-400"
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Section */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Zap size={14} />
            <span>{lang === "fr" ? "Services professionnels" : "Professional services"}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Solutions web{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  clés en main
                </span>
              </>
            ) : (
              <>
                Turnkey web{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  solutions
                </span>
              </>
            )}
          </h2>
          
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "De la conception au déploiement, ont crée des sites web modernes et performants qui transforment votre présence digitale."
              : "From design to deployment, we create modern, high-performance websites that transform your digital presence."}
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {sortedServices.map((service, index) => {
            const title = lang === "fr" ? service.title.fr : service.title.en;
            const price = lang === "fr" ? service.price.fr : service.price.en;
            const timeline = lang === "fr" ? service.timeline.fr : service.timeline.en;
            const features = lang === "fr" ? service.features.fr : service.features.en;
            const idealFor = lang === "fr" ? service.idealFor.fr : service.idealFor.en;

            return (
              <Reveal key={service.id} delay={index * 0.08}>
                <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 flex flex-col h-full hover:border-violet-400/50 transition-all duration-300 overflow-hidden">
                  
                  {/* Glow effect on hover */}
                  <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent rounded-2xl blur-xl transition-opacity duration-500" />
                  
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-2xl group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white leading-tight mb-1">
                            {title}
                          </h3>
                          <p className="text-sm font-semibold text-violet-400">{price}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 text-sm text-slate-300 flex-1 mb-4">
                      {features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Ideal for */}
                    {idealFor && (
                      <div className="mb-4 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                        <p className="text-xs text-slate-400 mb-1 font-medium uppercase tracking-wider">
                          {lang === "fr" ? "Idéal pour" : "Ideal for"}
                        </p>
                        <p className="text-sm text-slate-200">{idealFor}</p>
                      </div>
                    )}

                    {/* Timeline */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                      <Clock size={14} className="text-violet-400/70" />
                      <span>{timeline}</span>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => scrollToSection?.("contact")}
                      className="group/btn w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all"
                    >
                      {lang === "fr" ? "Demander un devis" : "Request quote"}
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Guarantees Section - Premium Design */}
        <Reveal delay={0.2}>
          <div className="relative">
            {/* Glow background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />
            
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {lang === "fr" ? "Garanties incluses" : "Included guarantees"}
                </h3>
                <p className="text-sm text-slate-400">
                  {lang === "fr" 
                    ? "Chaque projet bénéficie de ces standards professionnels"
                    : "Every project benefits from these professional standards"}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {guarantees.map((guarantee, idx) => {
                  const Icon = guarantee.icon;
                  return (
                    <div
                      key={idx}
                      className="group flex flex-col items-center text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-violet-500/30 hover:bg-slate-800/50 transition-all"
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${guarantee.color} bg-opacity-10 mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} className={`bg-gradient-to-br ${guarantee.color} bg-clip-text text-transparent`} />
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        {guarantee.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {guarantee.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-6 border-t border-slate-800/50 text-center">
                <p className="text-sm text-slate-300 mb-3">
                  {lang === "fr" 
                    ? "Prêt à transformer votre présence en ligne?"
                    : "Ready to transform your online presence?"}
                </p>
                <button
                  onClick={() => scrollToSection?.("contact")}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 text-white text-sm font-medium transition-all"
                >
                  {lang === "fr" ? "Discutons de votre projet" : "Let's discuss your project"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;