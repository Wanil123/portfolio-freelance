// src/components/Services.jsx
import { useTranslation } from "react-i18next";
import { services } from "../data/services.js";
import { Check, ArrowRight, Zap, Clock, Star } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Services = ({ scrollToSection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  // Show featured services first
  const sortedServices = [...services].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

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
            <span>{lang === "fr" ? "Nos services" : "Our services"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Sites web{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  sur mesure
                </span>
              </>
            ) : (
              <>
                Custom{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  websites
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Du site vitrine à la boutique en ligne, nous créons des solutions web modernes adaptées à vos besoins."
              : "From business websites to online stores, we create modern web solutions tailored to your needs."}
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sortedServices.map((service, index) => {
            const title = lang === "fr" ? service.title.fr : service.title.en;
            const price = lang === "fr" ? service.price.fr : service.price.en;
            const timeline = lang === "fr" ? service.timeline.fr : service.timeline.en;
            const features = lang === "fr" ? service.features.fr : service.features.en;
            const idealFor = lang === "fr" ? service.idealFor.fr : service.idealFor.en;

            return (
              <Reveal key={service.id} delay={index * 0.1}>
                <div className={`group relative h-full ${service.featured ? '' : ''}`}>

                  {/* Featured badge */}
                  {service.featured && (
                    <div className="absolute -top-3 right-4 z-10">
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-medium shadow-lg">
                        <Star size={10} fill="currentColor" />
                        <span>{lang === "fr" ? "Populaire" : "Popular"}</span>
                      </div>
                    </div>
                  )}

                  {/* Glow effect on hover */}
                  <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent rounded-2xl blur-xl transition-opacity duration-500" />

                  <div className={`relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border ${service.featured ? 'border-violet-500/50' : 'border-slate-800/50'} rounded-2xl p-6 flex flex-col hover:border-violet-400/50 transition-all duration-300 overflow-hidden`}>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-3xl group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white leading-tight mb-1">
                            {title}
                          </h3>
                          <p className="text-lg font-semibold text-violet-400">{price}</p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-4 pb-4 border-b border-slate-800/50">
                      <Clock size={14} className="text-violet-400/70" />
                      <span>{timeline}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 text-sm text-slate-300 flex-1 mb-4">
                      {features.map((feat, idx) => (
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

                    {/* CTA Button */}
                    <button
                      onClick={() => scrollToSection?.("contact")}
                      className={`group/btn w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl ${service.featured
                          ? 'bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40'
                          : 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 text-white'
                        } text-sm font-semibold transition-all active:scale-95`}
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

        {/* Bottom CTA */}
        <Reveal delay={0.3}>
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-4">
              {lang === "fr"
                ? "Besoin d'un service personnalisé? Parlons de votre projet."
                : "Need a custom service? Let's talk about your project."}
            </p>
            <button
              onClick={() => scrollToSection?.("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 text-white text-sm font-medium transition-all active:scale-95"
            >
              {lang === "fr" ? "Consultation gratuite" : "Free consultation"}
              <ArrowRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
