// src/components/Testimonials.jsx
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Shield,
  Clock,
  Code2,
  Zap,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Testimonials = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const testimonials = [
    {
      name: "François Lacroix",
      initials: "FL",
      role: {
        fr: "Directeur des opérations",
        en: "Director of Operations",
      },
      company: "LamIPict.com",
      rating: 5,
      quote: {
        fr: "On cherchait quelqu'un pour bâtir notre plateforme e-commerce d'impression photo (laminage photo), pis Wanil a dépassé nos attentes. Le site est rapide, professionnel, pis nos clients trouvent ça facile de commander. En plus y'a respecté le budget et le deadline. Franchement, ça vaut la peine.",
        en: "We were looking for someone to build our photo printing e-commerce platform, and Wanil exceeded our expectations. The site is fast, professional, and our customers find it easy to order. On top of that, he respected the budget and the deadline. Honestly, it's worth it.",
      },
      project: {
        fr: "Site e-commerce",
        en: "E-commerce site",
      },
      date: {
        fr: "Décembre 2025",
        en: "December 2025",
      },
    },
  ];

  const guarantees = [
    {
      icon: Shield,
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-500/10",
      title: {
        fr: "Satisfaction garantie",
        en: "Satisfaction guaranteed",
      },
      description: {
        fr: "Si le résultat ne correspond pas au cahier des charges, corrections illimitées jusqu'à votre satisfaction complète.",
        en: "If the result doesn't match the specs, unlimited revisions until you're completely satisfied.",
      },
    },
    {
      icon: Clock,
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500/10",
      title: {
        fr: "Livraison à temps",
        en: "On-time delivery",
      },
      description: {
        fr: "Délais respectés ou 10% de remise. Chaque projet inclut un calendrier précis avec jalons clairs.",
        en: "Deadlines met or 10% discount. Each project includes a precise timeline with clear milestones.",
      },
    },
    {
      icon: Code2,
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10",
      title: {
        fr: "Code source inclus",
        en: "Source code included",
      },
      description: {
        fr: "Vous êtes propriétaire de votre code. Repository Git, documentation et formation inclus.",
        en: "You own your code. Git repository, documentation and training included.",
      },
    },
    {
      icon: Zap,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-500/10",
      title: {
        fr: "Support 30 jours",
        en: "30-day support",
      },
      description: {
        fr: "Après la livraison, support gratuit pour corrections de bugs et ajustements mineurs.",
        en: "After delivery, free support for bug fixes and minor adjustments.",
      },
    },
  ];

  const completedProjects = [
    {
      status: lang === "fr" ? "Livré" : "Delivered",
      type: lang === "fr" ? "Site e-commerce" : "E-commerce site",
      industry: "LamIPict — Montréal",
      color: "from-emerald-400 to-green-500",
    },
  ];

  const currentProjects = [];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>
              {lang === "fr"
                ? "Retour client & engagements"
                : "Client feedback & commitments"}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Un premier client,{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  un vrai retour
                </span>
              </>
            ) : (
              <>
                First client,{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  real feedback
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Voici le retour de mon premier client livré, et mes engagements pour chaque projet."
              : "Here's the feedback from my first delivered client, and my commitments for every project."}
          </p>
        </Reveal>

        {/* Testimonial Card */}
        {testimonials.map((testimonial, idx) => (
          <Reveal key={idx} delay={0.1}>
            <div className="relative mb-12 md:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />

              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-violet-500/30 rounded-2xl p-6 md:p-8 lg:p-10 backdrop-blur-sm">
                {/* Quote icon + Stars */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/30">
                    <Quote size={22} className="text-violet-400" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-amber-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <blockquote className="text-base md:text-lg text-slate-200 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote[lang]}&rdquo;
                </blockquote>

                {/* Author info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-slate-800/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white font-bold text-lg">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-400">
                        {testimonial.role[lang]} — {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-medium border border-emerald-500/30">
                      <CheckCircle2 size={12} />
                      {testimonial.project[lang]}
                    </span>
                    <span className="text-xs text-slate-500">
                      {testimonial.date[lang]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group relative h-full">
                  <div
                    className={`pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br ${guarantee.color} opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
                  />

                  <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 hover:border-violet-400/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl ${guarantee.bgColor} border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <Icon
                          size={24}
                          className={`bg-gradient-to-br ${guarantee.color} bg-clip-text text-transparent`}
                        />
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
                      ? "1 projet livré"
                      : "1 project delivered"}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {lang === "fr"
                      ? "Un client satisfait à Montréal — d'autres à venir."
                      : "A satisfied client in Montreal — more to come."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {completedProjects.map((project, idx) => (
                    <div
                      key={`completed-${idx}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${project.color} border border-white/10`}
                      >
                        <CheckCircle2 size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">
                          {project.type}
                        </p>
                        <p className="text-xs text-emerald-400">
                          {project.industry}
                        </p>
                      </div>
                    </div>
                  ))}
                  {currentProjects.map((project, idx) => (
                    <div
                      key={`current-${idx}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/30 border border-slate-700/30"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${project.color} border border-white/10`}
                      >
                        <Clock size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">
                          {project.type}
                        </p>
                        <p className="text-xs text-slate-500">
                          {project.industry}
                        </p>
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
                ? "Devenez mon prochain client satisfait"
                : "Become my next satisfied client"}
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
            >
              {lang === "fr"
                ? "Obtenir un devis gratuit"
                : "Get a free quote"}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
