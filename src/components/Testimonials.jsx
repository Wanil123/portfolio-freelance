// src/components/Testimonials.jsx
import { useTranslation } from "react-i18next";
import { Star, Quote, Building2, Sparkles } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Testimonials = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const testimonials = [
    {
      id: 1,
      name: "Marie-Claire Dubois",
      role: lang === "fr" ? "Fondatrice" : "Founder",
      company: "BoutiqueMode QC",
      industry: lang === "fr" ? "E-commerce Mode" : "Fashion E-commerce",
      avatar: "MC",
      rating: 5,
      text: {
        fr: "Wanil a livré notre boutique en ligne en seulement 3 semaines. Le site est rapide, beau et nos ventes ont augmenté de 40% le premier mois. Communication excellente tout au long du projet.",
        en: "Wanil delivered our online store in just 3 weeks. The site is fast, beautiful and our sales increased by 40% in the first month. Excellent communication throughout the project.",
      },
      result: {
        fr: "+40% de ventes",
        en: "+40% sales",
      },
      color: "from-pink-400 to-rose-500",
    },
    {
      id: 2,
      name: "Jean-François Tremblay",
      role: lang === "fr" ? "Directeur TI" : "IT Director",
      company: "Groupe Industriel MTL",
      industry: lang === "fr" ? "Manufacturier" : "Manufacturing",
      avatar: "JF",
      rating: 5,
      text: {
        fr: "L'intégration Odoo 17 était complexe mais Wanil a su créer des portails clients bilingues parfaitement adaptés à nos besoins. Le support post-lancement était impeccable.",
        en: "The Odoo 17 integration was complex but Wanil created bilingual customer portals perfectly suited to our needs. Post-launch support was impeccable.",
      },
      result: {
        fr: "Portail livré en 4 sem.",
        en: "Portal delivered in 4 wks",
      },
      color: "from-violet-400 to-purple-500",
    },
    {
      id: 3,
      name: "Sophie Lavoie",
      role: lang === "fr" ? "Propriétaire" : "Owner",
      company: "Clinique Santé Plus",
      industry: lang === "fr" ? "Santé & Bien-être" : "Health & Wellness",
      avatar: "SL",
      rating: 5,
      text: {
        fr: "Notre ancien site datait de 2018. Wanil l'a complètement modernisé avec un design professionnel et un système de réservation en ligne. Nos patients adorent!",
        en: "Our old site was from 2018. Wanil completely modernized it with a professional design and online booking system. Our patients love it!",
      },
      result: {
        fr: "+65% réservations en ligne",
        en: "+65% online bookings",
      },
      color: "from-emerald-400 to-green-500",
    },
    {
      id: 4,
      name: "Alexandre Chen",
      role: "CEO",
      company: "TechStart Inc.",
      industry: lang === "fr" ? "Startup SaaS" : "SaaS Startup",
      avatar: "AC",
      rating: 5,
      text: {
        fr: "On avait besoin d'un MVP rapide pour lever des fonds. Wanil a compris notre vision et livré une application fonctionnelle en 5 semaines. Investisseurs impressionnés!",
        en: "We needed a fast MVP to raise funds. Wanil understood our vision and delivered a working application in 5 weeks. Investors were impressed!",
      },
      result: {
        fr: "MVP en 5 semaines",
        en: "MVP in 5 weeks",
      },
      color: "from-cyan-400 to-blue-500",
    },
  ];

  const stats = [
    {
      value: "15+",
      label: lang === "fr" ? "Projets livrés" : "Projects delivered",
    },
    {
      value: "100%",
      label: lang === "fr" ? "Clients satisfaits" : "Satisfied clients",
    },
    {
      value: "4.9/5",
      label: lang === "fr" ? "Note moyenne" : "Average rating",
    },
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
            <span>{lang === "fr" ? "Témoignages clients" : "Client testimonials"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Ce que disent{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  nos clients
                </span>
              </>
            ) : (
              <>
                What our{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  clients say
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Des projets livrés avec succès, des clients satisfaits. Découvrez leurs expériences."
              : "Successfully delivered projects, satisfied clients. Discover their experiences."}
          </p>
        </Reveal>

        {/* Stats Row */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 md:mb-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.1}>
              <div className="group relative h-full">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent rounded-2xl blur-xl transition-opacity duration-500" />

                <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 hover:border-violet-400/50 transition-all duration-300 flex flex-col">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote size={48} className="text-violet-400" />
                  </div>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4 relative z-10">
                    {/* Avatar */}
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-white font-bold text-lg flex-shrink-0`}>
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-lg truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Building2 size={12} className="text-slate-500" />
                        <span className="text-xs text-slate-500">{testimonial.industry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed flex-1 mb-4">
                    "{testimonial.text[lang]}"
                  </p>

                  {/* Result badge */}
                  <div className="mt-auto pt-4 border-t border-slate-800/50">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${testimonial.color} bg-opacity-10 border border-white/10`}>
                      <span className="text-xs font-semibold text-white">
                        {testimonial.result[lang]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-4">
              {lang === "fr"
                ? "Rejoignez nos clients satisfaits"
                : "Join our satisfied clients"}
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
            >
              {lang === "fr" ? "Démarrer mon projet" : "Start my project"}
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
