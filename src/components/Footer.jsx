// src/components/Footer.jsx
import { useTranslation } from "react-i18next";
import {
  Linkedin,
  Github,
  Mail,
  Globe2,
  MapPin,
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/wanil-parfait-b26889108/",
      icon: Linkedin,
      color:
        "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30",
    },
    {
      name: "GitHub",
      href: "https://github.com/wanilparfait",
      icon: Github,
      color:
        "hover:bg-slate-500/10 hover:text-slate-300 hover:border-slate-500/30",
    },
    {
      name: "Email",
      href: "mailto:info@prime-dev-studios.com",
      icon: Mail,
      color:
        "hover:bg-violet-500/10 hover:text-violet-400 hover:border-violet-500/30",
    },
  ];

  const navLinks = [
    { id: "home", fr: "Accueil", en: "Home" },
    { id: "services", fr: "Services", en: "Services" },
    { id: "projects", fr: "Projets", en: "Projects" },
    { id: "offers", fr: "Forfaits", en: "Pricing" },
    { id: "about", fr: "À propos", en: "About" },
    { id: "contact", fr: "Contact", en: "Contact" },
  ];

  const techStack = [
    { name: "React", gradient: "from-cyan-400 to-blue-500" },
    { name: "Laravel", gradient: "from-red-400 to-orange-500" },
    { name: "Tailwind", gradient: "from-sky-400 to-cyan-500" },
    { name: "Odoo 17", gradient: "from-purple-400 to-violet-500" },
  ];

  // 🔹 Logo (depuis ton site)
  const logoSrc = "https://www.prime-dev-studios.com/logo.png";

  return (
    <footer className="relative mt-20 border-t border-slate-800/50 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/5 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-10">
          {/* Brand Section */}
          <Reveal className="md:col-span-5 space-y-5">
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="flex items-center gap-3 mb-4 group"
            >
              {/* Logo with glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-xl blur-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 overflow-hidden shadow-xl">
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt="PrimeDev Studios"
                      className="h-10 w-10 object-contain"
                      onError={(e) => {
                        // Fallback si le logo ne se charge pas
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                      <Code2 size={20} className="text-violet-300" />
                    </div>
                  )}
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  PrimeDev Studios
                </h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                  {lang === "fr"
                    ? "Développeur full-stack"
                    : "Full-stack developer"}
                </p>
              </div>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {lang === "fr"
                ? "Développeur full-stack basé à Montréal. Sites vitrines, e-commerce et applications sur mesure. Code propre, livraison rapide, support bilingue FR/EN."
                : "Full-stack developer based in Montreal. Business websites, e-commerce and custom web apps. Clean code, fast delivery, bilingual EN/FR support."}
            </p>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-xs text-slate-500">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <MapPin size={12} className="text-violet-400/70" />
                </div>
                <span>
                  Montréal, QC ·{" "}
                  {lang === "fr" ? "Remote mondial" : "Remote worldwide"}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-500">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <Globe2 size={12} className="text-violet-400/70" />
                </div>
                <span>
                  {lang === "fr"
                    ? "Projets bilingues FR/EN"
                    : "Bilingual projects EN/FR"}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
            >
              {lang === "fr" ? "Démarrer un projet" : "Start a project"}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.1} className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              {lang === "fr" ? "Navigation" : "Navigation"}
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="group text-left text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover:bg-violet-400 transition-all group-hover:shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    {lang === "fr" ? link.fr : link.en}
                  </span>
                </button>
              ))}
            </nav>
          </Reveal>

          {/* Contact & Social */}
          <Reveal delay={0.2} className="md:col-span-4 space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              {lang === "fr" ? "Restons en contact" : "Stay connected"}
            </h4>

            {/* Email */}
            <a
              href="mailto:info@prime-dev-studios.com"
              className="group flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={18} className="text-violet-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 mb-0.5">
                  {lang === "fr" ? "Email" : "Email"}
                </p>
                <p className="text-sm text-white font-medium truncate">
                  info@prime-dev-studios.com
                </p>
              </div>
            </a>

            {/* Social */}
            <div>
              <p className="text-xs text-slate-500 mb-3">
                {lang === "fr" ? "Suivez-moi" : "Follow me"}
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-400 transition-all ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack Badge */}
            <div className="pt-4 border-t border-slate-800/50">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-violet-400" />
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {lang === "fr" ? "Technologies" : "Technologies"}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-lg bg-gradient-to-r ${tech.gradient} bg-opacity-10 border border-white/10 text-white text-xs font-medium backdrop-blur-sm hover:scale-105 transition-transform cursor-default`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <Reveal delay={0.3}>
          <div className="pt-8 border-t border-slate-800/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-4 text-[11px] text-slate-500">
                <span>© {year} PrimeDev Studios</span>
                <span className="hidden md:inline">·</span>
                <span className="hidden md:inline">
                  {lang === "fr"
                    ? "Tous droits réservés"
                    : "All rights reserved"}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 md:gap-2 text-[10px] md:text-[11px]">
                <span className="px-2 md:px-2.5 py-1 md:py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40 text-violet-400/80 font-medium hover:border-violet-500/50 transition-colors cursor-default">
                  {lang === "fr" ? "Code propre" : "Clean code"}
                </span>
                <span className="text-slate-600 hidden md:inline">·</span>
                <span className="px-2 md:px-2.5 py-1 md:py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40 text-violet-400/80 font-medium hover:border-violet-500/50 transition-colors cursor-default">
                  {lang === "fr" ? "Livraison rapide" : "Fast delivery"}
                </span>
                <span className="text-slate-600 hidden md:inline">·</span>
                <span className="px-2 md:px-2.5 py-1 md:py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40 text-violet-400/80 font-medium hover:border-violet-500/50 transition-colors cursor-default">
                  FR/EN
                </span>
              </div>
            </div>

            {/* Made with love */}
            <div className="mt-6 text-center">
              <p className="text-xs text-slate-600">
                {lang === "fr" ? (
                  <>
                    Conçu et développé avec{" "}
                    <span className="text-violet-400">♥</span> à Montréal
                  </>
                ) : (
                  <>
                    Designed and built with{" "}
                    <span className="text-violet-400">♥</span> in Montréal
                  </>
                )}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
