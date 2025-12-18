// src/components/Hero.jsx
import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Hero = ({ scrollToSection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-slate-950 -z-20" />

      {/* Gradient Orbs - Animated (smaller on mobile for performance) */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-violet-500/30 rounded-full blur-[64px] md:blur-[128px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-500/20 rounded-full blur-[50px] md:blur-[100px] animate-pulse-slow animation-delay-2000 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-500/10 rounded-full blur-[75px] md:blur-[150px] -z-10" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center pt-20 pb-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 backdrop-blur-sm mb-8 animate-fade-in">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="text-violet-200 text-sm font-medium">
            {lang === "fr" ? "Disponible pour nouveaux projets" : "Available for new projects"}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6 animate-fade-in-up">
          {lang === "fr" ? (
            <>
              Sites web qui{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  convertissent
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47 2 153 2 199 5.5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#a78bfa"/>
                      <stop offset="0.5" stopColor="#c084fc"/>
                      <stop offset="1" stopColor="#f472b6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </>
          ) : (
            <>
              Websites that{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  convert
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C47 2 153 2 199 5.5" stroke="url(#gradient2)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient2" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#a78bfa"/>
                      <stop offset="0.5" stopColor="#c084fc"/>
                      <stop offset="1" stopColor="#f472b6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
          {lang === "fr"
            ? "Studio web spécialisé en sites vitrines et e-commerce. Design moderne, code propre, livraison rapide."
            : "Web studio specialized in business websites and e-commerce. Modern design, clean code, fast delivery."}
        </p>

        {/* Single Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <button
            onClick={() => scrollToSection("contact")}
            className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-xl shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              {lang === "fr" ? "Démarrer mon projet" : "Start my project"}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="group flex items-center gap-2 px-6 py-4 text-slate-300 hover:text-white font-medium transition-colors active:scale-95"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 group-hover:border-violet-500/50 group-hover:bg-slate-800 transition-all">
              <Play size={16} className="text-violet-400 ml-0.5" />
            </div>
            <span>{lang === "fr" ? "Voir les projets" : "View projects"}</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{lang === "fr" ? "Livraison 2-4 sem." : "2-4 weeks delivery"}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{lang === "fr" ? "Bilingue FR/EN" : "Bilingual FR/EN"}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{lang === "fr" ? "Support 30 jours" : "30-day support"}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-violet-400 rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
