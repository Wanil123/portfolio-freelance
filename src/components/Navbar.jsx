// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Globe2, Phone, Calendar, MessageSquare } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { COMPANY, CONTACT } from "../constants/config";

const links = [
  { id: "services", en: "Services", fr: "Services" },
  { id: "projects", en: "Projects", fr: "Projets" },
  { id: "offers", en: "Pricing", fr: "Forfaits" },
  { id: "about", en: "About", fr: "À propos" },
  { id: "contact", en: "Contact", fr: "Contact" },
];

const Navbar = ({ activeSection, scrollToSection, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, i18n } = useLanguage();
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(68);

  // Measure actual navbar height to avoid any gap
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  // Lock scroll on html + body (body alone doesn't block iOS Safari)
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isOpen) {
      html.style.overflowY = "hidden";
      body.style.overflowY = "hidden";
    } else {
      html.style.overflowY = "";
      body.style.overflowY = "";
    }
    return () => {
      html.style.overflowY = "";
      body.style.overflowY = "";
    };
  }, [isOpen]);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  const toggleLang = () => {
    const next = lang === "en" ? "fr" : "en";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  const phoneRaw = CONTACT.phone.replace(/[\s\-]/g, "");
  const TEL = `tel:${phoneRaw}`;
  const isIOS = typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const SMS = `sms:${phoneRaw}${isIOS ? "&" : "?"}body=${encodeURIComponent(
    lang === "fr"
      ? "Bonjour Wanil, je veux discuter de mon projet."
      : "Hello Wanil, I want to discuss my project."
  )}`;

  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-[10000] w-full overflow-visible transition-colors duration-300 ${
          isScrolled || isOpen
            ? "bg-slate-950 border-b border-slate-800"
            : "bg-slate-950/80 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          {/* LOGO */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="group flex items-center gap-3 flex-shrink-0"
          >
            <img
              src="/logo1.JPG"
              alt={COMPANY.name}
              width={52}
              height={52}
              className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl"
            />
          </button>

          {/* DESKTOP — nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={
                    isActive
                      ? "text-white text-sm px-3 py-1.5 rounded-full bg-slate-900/70 border border-violet-500/40"
                      : "text-slate-300 hover:text-white text-sm px-3 py-1.5 rounded-full hover:bg-slate-900/30 transition-colors"
                  }
                >
                  {lang === "fr" ? link.fr : link.en}
                </button>
              );
            })}
          </div>

          {/* DESKTOP — right side */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <a
              href={TEL}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium hover:border-violet-500/40 hover:text-white transition-colors"
            >
              <Phone size={12} />
              <span>{CONTACT.phone}</span>
            </a>
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-700/60 text-slate-100 text-xs hover:border-slate-600 transition-colors"
            >
              <Globe2 size={13} />
              <span className="uppercase font-medium">{lang === "fr" ? "FR" : "EN"}</span>
            </button>
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all sm:hover:scale-105 active:scale-95"
            >
              <Calendar size={14} />
              <span>{lang === "fr" ? "Appel gratuit" : "Free call"}</span>
            </a>
          </div>

          {/* MOBILE — lang + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-900/40 border border-slate-700/60 text-slate-100 text-xs"
            >
              <Globe2 size={12} />
              <span className="uppercase">{lang === "fr" ? "FR" : "EN"}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((p) => !p)}
              aria-label={lang === "fr" ? (isOpen ? "Fermer le menu" : "Ouvrir le menu") : (isOpen ? "Close menu" : "Open menu")}
              aria-expanded={isOpen}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/70 border border-slate-700/60 text-white active:bg-slate-700/80 transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {isOpen && createPortal(
        <div
          className="fixed inset-0 flex flex-col md:hidden animate-fadeIn"
          style={{ zIndex: 9999, paddingTop: navHeight, touchAction: "none" }}
        >
          {/* Blurred backdrop */}
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" />

          {/* Violet separator */}
          <div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
            style={{ top: navHeight }}
          />

          {/* Scrollable content */}
          <div className="relative flex flex-col flex-1 overflow-y-auto" style={{ touchAction: "pan-y" }}>

            {/* Logo dans le menu */}
            <div className="px-8 pt-8 pb-2">
              <img
                src="/logo1.JPG"
                alt={COMPANY.name}
                width={64}
                height={64}
                className="w-16 h-16 object-contain rounded-xl"
              />
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-8 pt-4 pb-4">
              {links.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className="w-full flex items-center gap-5 py-5 text-left border-b border-slate-800/40 last:border-0 group active:opacity-70"
                    style={{
                      opacity: 0,
                      animation: "fade-in-up 0.4s ease forwards",
                      animationDelay: `${i * 55}ms`,
                    }}
                  >
                    <span className="text-xs font-mono text-violet-500/50 w-5 tabular-nums flex-shrink-0 group-hover:text-violet-400 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-2xl font-bold tracking-tight transition-colors ${
                      isActive ? "text-violet-400" : "text-white group-hover:text-violet-300"
                    }`}>
                      {lang === "fr" ? link.fr : link.en}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTAs */}
            <div
              className="px-6 py-6 space-y-3 border-t border-slate-800/60"
              style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
            >
              <a
                href={CONTACT.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-base shadow-lg shadow-violet-500/30 active:opacity-90"
              >
                <Calendar size={18} />
                {lang === "fr" ? "Réserver un appel gratuit" : "Book a free call"}
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={SMS}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-slate-700/60 bg-slate-900/80 text-slate-200 font-semibold text-sm active:bg-slate-800"
                >
                  <MessageSquare size={16} className="text-violet-400" />
                  SMS
                </a>
                <a
                  href={TEL}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-slate-700/60 bg-slate-900/80 text-slate-200 font-semibold text-sm active:bg-slate-800"
                >
                  <Phone size={16} className="text-violet-400" />
                  {lang === "fr" ? "Appel" : "Call"}
                </a>
              </div>

              <p className="text-center text-xs text-slate-500 pt-1">
                {lang === "fr" ? "Réponse en moins de 2h" : "Reply within 2h"}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;
