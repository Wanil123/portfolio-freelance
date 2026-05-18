// src/components/Footer.jsx
import { useState, useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { CONTACT, SOCIAL, COMPANY } from "../constants/config";
import {
  Linkedin,
  Github,
  Mail,
  Globe2,
  MapPin,
  Phone,
  Calendar,
  Code2,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const handler = () => setShowPrivacy(true);
    document.addEventListener("open-privacy", handler);
    return () => document.removeEventListener("open-privacy", handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const TEL = `tel:${CONTACT.phone.replace(/[\s\-]/g, "")}`;

  const socialLinks = [
    {
      name: "LinkedIn",
      href: SOCIAL.linkedin,
      icon: Linkedin,
      color: "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30",
    },
    {
      name: "GitHub",
      href: SOCIAL.github,
      icon: Github,
      color: "hover:bg-slate-500/10 hover:text-slate-300 hover:border-slate-500/30",
    },
    {
      name: "Email",
      href: `mailto:${CONTACT.email}`,
      icon: Mail,
      color: "hover:bg-violet-500/10 hover:text-violet-400 hover:border-violet-500/30",
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
    { name: "n8n / AI", gradient: "from-purple-400 to-violet-500" },
  ];

  const logoSrc = `/logo1.JPG`;

  return (
    <footer className="relative mt-20 border-t border-slate-800/50 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950 overflow-hidden">
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
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-xl blur-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 overflow-hidden shadow-xl">
                  <img
                    src={logoSrc}
                    alt={COMPANY.name}
                    className="h-14 w-14 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.innerHTML = `<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20"><span style="color:#a78bfa;font-size:20px;">⚡</span></div>`;
                    }}
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                  {COMPANY.name}
                </h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                  {lang === "fr"
                    ? "Développeur full-stack solo · Montréal"
                    : "Solo full-stack developer · Montréal"}
                </p>
              </div>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {lang === "fr"
                ? "Wanil Parfait — développeur full-stack à Montréal. Sites vitrines, e-commerce et automatisation IA pour PME québécoises. Vous parlez toujours directement avec moi."
                : "Wanil Parfait — full-stack developer in Montréal. Business websites, e-commerce, and AI automation for SMBs. You always deal directly with me."}
            </p>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-xs text-slate-500">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50">
                  <MapPin size={12} className="text-violet-400/70" />
                </div>
                <span>
                  {COMPANY.location} ·{" "}
                  {lang === "fr" ? "Remote disponible" : "Remote available"}
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
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 active:scale-95"
            >
              <Calendar size={15} />
              {lang === "fr" ? "Réserver un appel gratuit" : "Book a free call"}
            </a>
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
                  className="group text-left text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2.5 py-1.5"
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
          <Reveal delay={0.2} className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              {lang === "fr" ? "Contactez-moi" : "Contact me"}
            </h4>

            {/* Phone — top priority */}
            <a
              href={TEL}
              className="group flex items-center gap-3 p-3 rounded-xl bg-violet-500/5 border border-violet-500/20 hover:border-violet-400/50 hover:bg-violet-500/10 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={18} className="text-violet-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 mb-0.5">{lang === "fr" ? "Appel direct" : "Direct call"}</p>
                <p className="text-sm text-white font-medium">{CONTACT.phone}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={18} className="text-violet-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                <p className="text-sm text-white font-medium truncate">
                  {CONTACT.email}
                </p>
              </div>
            </a>

            {/* Social */}
            <div>
              <p className="text-xs text-slate-500 mb-3">
                {lang === "fr" ? "Retrouvez-moi" : "Find me"}
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
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500">
                <span>© {year} {COMPANY.name}</span>
                <span className="hidden md:inline">·</span>
                <span className="hidden md:inline">
                  {lang === "fr" ? "Tous droits réservés" : "All rights reserved"}
                </span>
                <span>·</span>
                <span className="text-slate-600">NEQ {COMPANY.neq}</span>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => setShowPrivacy(true)}
                  className="hover:text-violet-400 transition-colors underline underline-offset-2 px-2 py-1 -mx-2 -my-1 min-h-[44px] inline-flex items-center"
                >
                  {lang === "fr" ? "Mentions légales" : "Privacy Policy"}
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 md:gap-2 text-[10px] md:text-[11px]">
                <span className="px-2 md:px-2.5 py-1 md:py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40 text-violet-400/80 font-medium hover:border-violet-500/50 transition-colors cursor-default">
                  {lang === "fr" ? "Paiement en 3x" : "Pay in 3x"}
                </span>
                <span className="text-slate-600 hidden md:inline">·</span>
                <span className="px-2 md:px-2.5 py-1 md:py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40 text-violet-400/80 font-medium hover:border-violet-500/50 transition-colors cursor-default">
                  {lang === "fr" ? "Livraison garantie" : "Delivery guaranteed"}
                </span>
                <span className="text-slate-600 hidden md:inline">·</span>
                <span className="px-2 md:px-2.5 py-1 md:py-1.5 rounded-lg bg-slate-800/40 border border-slate-700/40 text-violet-400/80 font-medium hover:border-violet-500/50 transition-colors cursor-default">
                  FR/EN
                </span>
              </div>
            </div>

            {/* Made with love */}
            {/* Safe area for iOS home indicator */}
            <div className="mt-6 text-center" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
              <p className="text-xs text-slate-600">
                {lang === "fr" ? (
                  <>
                    Conçu et développé avec{" "}
                    <span className="text-violet-400">♥</span> à Montréal par Wanil Parfait
                  </>
                ) : (
                  <>
                    Designed and built with{" "}
                    <span className="text-violet-400">♥</span> in Montréal by Wanil Parfait
                  </>
                )}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <PrivacyPolicy isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </footer>
  );
};

export default Footer;
