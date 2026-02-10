// src/components/Hero.jsx
import { ArrowRight, Zap, Globe2, Shield, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
const Hero = ({ scrollToSection }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

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
            ? "Développeur full-stack à Montréal. Des sites et e-commerces conçus pour transformer vos visiteurs en clients — livrés clé en main."
            : "Full-stack developer in Montréal. Websites and e-commerce stores designed to turn visitors into customers — delivered turnkey."}
        </p>

        {/* CTAs */}
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
            className="group flex items-center gap-2 px-6 py-4 rounded-xl border border-slate-700/50 hover:border-violet-500/50 text-slate-300 hover:text-white font-medium transition-all active:scale-95"
          >
            <span>{lang === "fr" ? "Voir les projets" : "View projects"}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex flex-col items-center gap-5 animate-fade-in-up animation-delay-600">
          {/* Real project proof */}
          <button
            onClick={() => scrollToSection("projects")}
            className="group inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900/60 border border-slate-800/50 hover:border-violet-500/30 backdrop-blur-sm transition-all"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
              <CheckCircle2 size={14} className="text-emerald-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                {lang === "fr" ? "Dernier projet livré" : "Latest project shipped"}
              </p>
              <p className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">
                LamIPict.com — {lang === "fr" ? "E-commerce en production" : "E-commerce in production"}
              </p>
            </div>
            <ArrowRight size={14} className="text-slate-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </button>

          {/* Key benefits */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap size={14} className="text-violet-400" />
              {lang === "fr" ? "Livraison 2-4 sem." : "2-4 weeks delivery"}
            </span>
            <span className="hidden sm:block w-px h-3.5 bg-slate-700" />
            <span className="flex items-center gap-1.5">
              <Globe2 size={14} className="text-violet-400" />
              {lang === "fr" ? "Bilingue FR/EN" : "Bilingual FR/EN"}
            </span>
            <span className="hidden sm:block w-px h-3.5 bg-slate-700" />
            <span className="flex items-center gap-1.5">
              <Shield size={14} className="text-violet-400" />
              {lang === "fr" ? "Satisfaction garantie" : "Satisfaction guaranteed"}
            </span>
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
