// src/components/Contact.jsx
import { useLanguage } from "../hooks/useLanguage";
import { COMPANY } from "../constants/config";
import { Sparkles, Zap, ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import ContactForm from "./contact/ContactForm";
import ContactMethods from "./contact/ContactMethods";
import AvailabilityBadge from "./contact/AvailabilityBadge";

const Contact = () => {
  const { lang } = useLanguage();

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
              ? "Décrivez-nous votre projet web. Nous vous revenons rapidement avec un plan d'action et une estimation détaillée."
              : "Tell us about your web project. We'll get back to you quickly with an action plan and detailed estimate."}
          </p>
        </Reveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Contact Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>

          {/* Right Column - Contact Methods & Calendly */}
          <div className="space-y-6">
            <ContactMethods />
            <AvailabilityBadge />
          </div>
        </div>

        {/* Bottom Banner */}
        <Reveal delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-4 md:p-6 lg:p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 bg-opacity-10 border border-emerald-500/30 flex-shrink-0">
                    <Zap size={18} className="text-emerald-400 md:hidden" />
                    <Zap size={22} className="text-emerald-400 hidden md:block" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm md:text-base">
                      {lang === "fr"
                        ? "Réponse garantie sous 24h"
                        : "Guaranteed response within 24h"}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-400">
                      {lang === "fr"
                        ? "Nous répondons rapidement à chaque demande."
                        : "We respond quickly to every request."}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="text-right">
                    <p className="text-[10px] md:text-xs text-slate-500 mb-0.5 md:mb-1">
                      {lang === "fr" ? "Basé à" : "Based in"}
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">{COMPANY.location}</p>
                  </div>
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-xl md:text-2xl">
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
