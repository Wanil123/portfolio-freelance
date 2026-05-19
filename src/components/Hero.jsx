// src/components/Hero.jsx
import { Phone, Calendar, Zap, Shield, Clock, MessageSquare } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { CONTACT, formatScarcityLabel } from "../constants/config";

const Hero = ({ scrollToSection }) => {
  const { lang } = useLanguage();

  const phoneRaw = CONTACT.phone.replace(/[\s\-]/g, "");
  const TEL = `tel:${phoneRaw}`;
  // `?body=` works on iOS 14+ and Android. The previous `&body=` (without a
  // preceding query separator) was malformed and silently dropped the message
  // on iPhones.
  const SMS = `sms:${phoneRaw}?body=${encodeURIComponent(
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
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center pt-16 pb-16">

        {/* Scarcity Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-500/10 border border-amber-400/40 backdrop-blur-sm mb-6 animate-fade-in max-w-[95vw]">
          <div className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </div>
          <span className="text-amber-200 text-xs sm:text-sm font-semibold text-center">
            {formatScarcityLabel(lang)}
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
            ? "Site web professionnel + IA qui répond à vos leads 24h/7j. Livré en 2 à 4 semaines dans le périmètre convenu, sinon 10% de remise automatique."
            : "Professional website + AI that answers your leads 24/7. Delivered in 2-4 weeks within the agreed scope — miss the deadline, get 10% back automatically."}
        </p>

        {/* Social proof line */}
        <p className="text-sm text-slate-400 mb-10 animate-fade-in-up animation-delay-300">
          {lang === "fr"
            ? "Wanil Parfait · Développeur full-stack · 5+ ans d'expérience · Montréal, QC"
            : "Wanil Parfait · Full-stack developer · 5+ years experience · Montréal, QC"}
        </p>

        {/* PRIMARY CTA — one dominant action */}
        <div className="flex flex-col items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <button
            type="button"
            onClick={() => document.dispatchEvent(new Event("open-qualification"))}
            className="group relative w-full sm:w-auto px-5 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-base sm:text-lg rounded-2xl shadow-xl shadow-violet-500/40 hover:shadow-violet-500/60 transition-all duration-300 sm:hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center justify-center gap-2">
              <Calendar size={20} />
              {lang === "fr" ? "Réserver mon appel gratuit (30 min)" : "Book my free call (30 min)"}
            </span>
          </button>

          {/* Secondary contact options */}
          <div className="flex items-center justify-center gap-2 gap-y-2 flex-wrap">
            <span className="text-xs text-slate-400 w-full text-center sm:w-auto">
              {lang === "fr" ? "ou contactez-moi directement :" : "or reach me directly:"}
            </span>
            <a
              href={SMS}
              className="flex items-center gap-1.5 px-5 py-3 min-h-[44px] rounded-full border border-slate-700/60 bg-slate-900/40 hover:border-violet-500/50 hover:bg-slate-800/50 text-slate-300 hover:text-white text-sm font-medium transition-all active:scale-95"
            >
              <MessageSquare size={15} />
              <span>SMS</span>
            </a>
            <a
              href={TEL}
              className="flex items-center gap-1.5 px-5 py-3 min-h-[44px] rounded-full border border-slate-700/60 bg-slate-900/40 hover:border-violet-500/50 hover:bg-slate-800/50 text-slate-300 hover:text-white text-sm font-medium transition-all active:scale-95"
            >
              <Phone size={15} />
              <span>{lang === "fr" ? "Appel" : "Call"}</span>
            </a>
          </div>

          {/* Audit CTA — lower-commitment entry for cold prospects */}
          <p className="text-xs text-slate-400 text-center">
            {lang === "fr" ? "Pas encore prêt ?" : "Not ready to commit?"}{" "}
            <button
              type="button"
              onClick={() => document.dispatchEvent(new Event("open-qualification"))}
              className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
            >
              {lang === "fr"
                ? "Audit gratuit de votre site en 10 min →"
                : "Free 10-min website audit →"}
            </button>
          </p>
        </div>

        {/* Trust signals bar — 3 cols even on mobile (with shorter labels) so the
            section stays compact and doesn't shove the scroll indicator off screen
            on short viewports like iPhone SE. */}
        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3 animate-fade-in-up animation-delay-600 w-full max-w-xl mx-auto sm:max-w-none">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-3 sm:px-4 rounded-xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm">
            <Zap size={16} className="text-violet-400 flex-shrink-0" />
            <span className="text-[11px] sm:text-sm text-slate-300 font-medium text-center leading-tight">
              {lang === "fr" ? "5+ ans" : "5+ years"}
              <span className="hidden sm:inline">{lang === "fr" ? " d'expérience" : " experience"}</span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-3 sm:px-4 rounded-xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm">
            <Clock size={16} className="text-violet-400 flex-shrink-0" />
            <span className="text-[11px] sm:text-sm text-slate-300 font-medium text-center leading-tight">
              {lang === "fr" ? "2-4 sem." : "2-4 wks"}
              <span className="hidden sm:inline">{lang === "fr" ? " livraison" : " delivery"}</span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-3 sm:px-4 rounded-xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm">
            <Shield size={16} className="text-violet-400 flex-shrink-0" />
            <span className="text-[11px] sm:text-sm text-slate-300 font-medium text-center leading-tight">
              {lang === "fr" ? "Paiement 3x" : "Pay in 3x"}
            </span>
          </div>
        </div>

        {/* Scroll indicator — hidden on mobile to avoid overlap with trust signals on short viewports */}
        <button
          type="button"
          onClick={() => scrollToSection("services")}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          style={{ bottom: "max(2rem, env(safe-area-inset-bottom))" }}
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
