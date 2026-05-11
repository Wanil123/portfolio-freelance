// src/components/Hero.jsx
import { ArrowRight, Phone, Calendar, Zap, Shield, Clock } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { CONTACT } from "../constants/config";

const Hero = ({ scrollToSection }) => {
  const { lang } = useLanguage();

  const CALENDLY = CONTACT.calendlyUrl;
  const WHATSAPP = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    lang === "fr"
      ? "Bonjour Wanil, je veux discuter de mon projet web."
      : "Hello Wanil, I'd like to discuss my web project."
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-slate-950 -z-20" />
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-violet-500/30 rounded-full blur-[64px] md:blur-[128px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-500/20 rounded-full blur-[50px] md:blur-[100px] animate-pulse-slow animation-delay-2000 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[75px] md:blur-[150px] -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center pt-24 pb-16">

        {/* Scarcity Badge — style MetalMax "programme maison pilote" */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-400/40 backdrop-blur-sm mb-6 animate-fade-in">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </div>
          <span className="text-amber-200 text-sm font-semibold">
            {lang === "fr"
              ? "2 spots disponibles ce trimestre — places limitées"
              : "2 spots available this quarter — limited availability"}
          </span>
        </div>

        {/* Main Headline — client pain, not tech features */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6 animate-fade-in-up">
          {lang === "fr" ? (
            <>
              Votre PME perd{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  des clients
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47 2 153 2 199 5.5" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#a78bfa"/><stop offset="0.5" stopColor="#c084fc"/><stop offset="1" stopColor="#f472b6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {" "}chaque soir.
            </>
          ) : (
            <>
              Your business loses{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  clients
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47 2 153 2 199 5.5" stroke="url(#g2)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="g2" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#a78bfa"/><stop offset="0.5" stopColor="#c084fc"/><stop offset="1" stopColor="#f472b6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {" "}every night.
            </>
          )}
        </h1>

        {/* Subtitle — outcome-focused */}
        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-in-up animation-delay-200">
          {lang === "fr"
            ? "Site web professionnel + IA qui répond à vos leads 24h/7j. Livré en 2 à 4 semaines. Résultat garanti ou remboursé."
            : "Professional website + AI that answers your leads 24/7. Delivered in 2-4 weeks. Results guaranteed or refunded."}
        </p>

        {/* Social proof line */}
        <p className="text-sm text-slate-500 mb-10 animate-fade-in-up animation-delay-300">
          {lang === "fr"
            ? "Wanil Parfait · Développeur full-stack · 5+ ans d'expérience · Montréal, QC"
            : "Wanil Parfait · Full-stack developer · 5+ years experience · Montréal, QC"}
        </p>

        {/* PRIMARY CTA — one dominant action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-lg rounded-xl shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center justify-center gap-2">
              <Calendar size={20} />
              {lang === "fr" ? "Réserver mon appel gratuit (30 min)" : "Book my free call (30 min)"}
            </span>
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-emerald-500/40 hover:border-emerald-400/70 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-300 hover:text-emerald-200 font-semibold transition-all active:scale-95"
          >
            <Phone size={18} />
            <span>{lang === "fr" ? "WhatsApp — réponse rapide" : "WhatsApp — fast reply"}</span>
          </a>
        </div>

        {/* Trust signals bar — replace "2 projets livrés" avec des signaux d'autorité réels */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm">
            <Zap size={15} className="text-violet-400 flex-shrink-0" />
            <span className="text-sm text-slate-300 font-medium">
              {lang === "fr" ? "5+ ans expérience full-stack" : "5+ years full-stack experience"}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm">
            <Clock size={15} className="text-violet-400 flex-shrink-0" />
            <span className="text-sm text-slate-300 font-medium">
              {lang === "fr" ? "Livraison 2-4 sem. garantie" : "2-4 week delivery guaranteed"}
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm">
            <Shield size={15} className="text-violet-400 flex-shrink-0" />
            <span className="text-sm text-slate-300 font-medium">
              {lang === "fr" ? "Paiement en 3x sans frais" : "Pay in 3 installments, no fees"}
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("services")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          aria-label={lang === "fr" ? "Défiler vers le bas" : "Scroll down"}
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-violet-400 rounded-full animate-scroll-down" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
