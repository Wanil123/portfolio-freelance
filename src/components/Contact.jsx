// src/components/Contact.jsx
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  Zap,
  Calendar,
  Globe2,
  Check,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Contact = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const WHATSAPP_LINK =
    "https://wa.me/15793685230?text=Bonjour%20Wanil,%20je%20veux%20parler%20de%20mon%20projet%20web.";

  const contactMethods = [
    {
      icon: Mail,
      label: lang === "fr" ? "Email" : "Email",
      value: "info@prime-dev-studios.com",
      href: "mailto:info@prime-dev-studios.com",
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-500/10",
      iconColor: "text-violet-300",
      description: lang === "fr" ? "Réponse sous 24h" : "Response within 24h",
    },
    {
      icon: MessageCircle,
      label: lang === "fr" ? "WhatsApp" : "WhatsApp",
      value: "+1 579-368-5230",
      href: WHATSAPP_LINK,
      color: "from-emerald-400 to-green-500",
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-300",
      description: lang === "fr" ? "Réponse rapide" : "Fast response",
    },
    {
      icon: Phone,
      label: lang === "fr" ? "Téléphone" : "Phone",
      value: "+1 579-368-5230",
      href: "tel:+15793685230",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-300",
      description:
        lang === "fr" ? "Disponible sur RDV" : "Available by appointment",
    },
  ];

  const availability = [
    {
      icon: Globe2,
      text:
        lang === "fr"
          ? "Remote Canada · Europe · International"
          : "Remote Canada · Europe · International",
    },
    {
      icon: Clock,
      text: lang === "fr" ? "Réponse en moins de 24h" : "Response within 24h",
    },
    {
      icon: Check,
      text: lang === "fr" ? "Consultation gratuite" : "Free consultation",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden">
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
                ? "Parlons de votre projet"
                : "Let's talk about your project"}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Prêt à{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  démarrer?
                </span>
              </>
            ) : (
              <>
                Ready to{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  start?
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Parlez-nous de votre projet web. Nous vous revenons rapidement avec un plan d'action et une estimation détaillée."
              : "Tell us about your web project. We'll get back to you quickly with an action plan and detailed estimate."}
          </p>
        </Reveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Left Column - Contact Methods */}
          <div className="lg:col-span-3 space-y-6">
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50" />

                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {lang === "fr"
                        ? "Contactez-nous directement"
                        : "Contact us directly"}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {lang === "fr"
                        ? "Pas de formulaire compliqué. Choisissez votre méthode préférée."
                        : "No complicated form. Choose your preferred method."}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactMethods.map((method, idx) => {
                      const Icon = method.icon;
                      return (
                        <a
                          key={idx}
                          href={method.href}
                          target={
                            method.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            method.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all"
                        >
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-xl ${method.bgColor} border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform`}
                          >
                            <Icon size={24} className={method.iconColor} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-slate-400 mb-1">
                              {method.label}
                            </p>
                            <p className="text-white font-semibold truncate">
                              {method.value}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                              {method.description}
                            </p>
                          </div>
                          <ArrowRight
                            size={20}
                            className="text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all flex-shrink-0"
                          />
                        </a>
                      );
                    })}
                  </div>

                  {/* Quick info */}
                  <div className="mt-6 pt-6 border-t border-slate-800/50">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {availability.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-slate-400"
                          >
                            <Icon
                              size={14}
                              className="text-violet-400 flex-shrink-0"
                            />
                            <span>{item.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column - Calendly */}
          <div className="lg:col-span-2">
            <Reveal delay={0.2}>
              <div className="sticky top-8 space-y-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-50" />

                  <div className="relative bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/50">
                        <Calendar size={32} className="text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white text-center mb-2">
                      {lang === "fr" ? "Appel de 30 minutes" : "30-minute call"}
                    </h3>

                    <p className="text-sm text-slate-300 text-center mb-6">
                      {lang === "fr"
                        ? "Discutons de votre projet et trouvons la meilleure approche ensemble."
                        : "Let's discuss your project and find the best approach together."}
                    </p>

                    <a
                      href="https://calendly.com/maiwanpar/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
                    >
                      <Calendar size={20} />
                      {lang === "fr" ? "Réserver un appel" : "Book a call"}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>

                    <div className="mt-6 p-4 rounded-xl bg-slate-950/50 border border-slate-800/50">
                      <p className="text-xs text-slate-400 mb-3 font-medium">
                        {lang === "fr"
                          ? "Ce que nous couvrirons :"
                          : "What we'll cover:"}
                      </p>
                      <ul className="space-y-2">
                        {[
                          lang === "fr"
                            ? "Vos objectifs et besoins"
                            : "Your goals and needs",
                          lang === "fr"
                            ? "Technologies recommandées"
                            : "Recommended technologies",
                          lang === "fr"
                            ? "Timeline et budget"
                            : "Timeline and budget",
                          lang === "fr"
                            ? "Prochaines étapes"
                            : "Next steps",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <Check
                              size={14}
                              className="text-emerald-400 flex-shrink-0 mt-0.5"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Alternative contact */}
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
                  <p className="text-xs text-slate-400 text-center">
                    {lang === "fr" ? (
                      <>
                        <span className="text-slate-300 font-medium">
                          Calendly indisponible?
                        </span>
                        <br />
                        Écrivez-nous par email ou WhatsApp.
                      </>
                    ) : (
                      <>
                        <span className="text-slate-300 font-medium">
                          Calendly unavailable?
                        </span>
                        <br />
                        Reach out via email or WhatsApp.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Banner */}
        <Reveal delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 bg-opacity-10 border border-emerald-500/30 flex-shrink-0">
                    <Zap size={22} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {lang === "fr"
                        ? "Réponse garantie sous 24h"
                        : "Guaranteed response within 24h"}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {lang === "fr"
                        ? "Nous prenons chaque demande au sérieux et répondons rapidement."
                        : "We take every request seriously and respond quickly."}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-xs text-slate-500 mb-1">
                      {lang === "fr" ? "Basé à" : "Based in"}
                    </p>
                    <p className="text-white font-semibold">Montréal, QC</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-2xl">
                    🇨🇦
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
