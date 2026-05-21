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

  // Measure actual navbar height — re-measure on resize/rotation/lang change
  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    measure();
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined" && navRef.current) {
      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(navRef.current);
    } else {
      window.addEventListener("resize", measure);
    }
    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      else window.removeEventListener("resize", measure);
    };
  }, [lang]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Lock scroll — iOS Safari ignore overflow:hidden sur body, besoin de position:fixed
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isOpen) {
      const scrollY = window.scrollY;
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
    } else {
      const top = body.style.top;
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      if (top) window.scrollTo(0, parseInt(top) * -1);
    }
    return () => {
      const top = body.style.top;
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      if (top) window.scrollTo(0, parseInt(top) * -1);
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
  // `?body=` works on iOS 14+ and Android — the earlier iOS `&body=` was
  // malformed without a preceding query separator and dropped silently.
  const SMS = `sms:${phoneRaw}?body=${encodeURIComponent(
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
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-3 flex items-center justify-between gap-4">
          {/* LOGO */}
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            aria-label={lang === "fr" ? "PrimeDev Studios — retour en haut" : "PrimeDev Studios — back to top"}
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
                      : "text-slate-300 hover:text-white text-sm px-3 py-1.5 rounded-full border border-transparent hover:bg-slate-900/30 transition-colors"
                  }
                >
                  {lang === "fr" ? link.fr : link.en}
                </button>
              );
            })}
            <a
              href={lang === "fr" ? "/blog/" : "/blog/en/"}
              className="text-slate-300 hover:text-white text-sm px-3 py-1.5 rounded-full border border-transparent hover:bg-slate-900/30 transition-colors"
            >
              Blog
            </a>
          </div>

          {/* DESKTOP — right side (lg+ : aligned with the nav links breakpoint
              so 768–1024px shows the hamburger instead of an orphaned bar) */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
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
            <button
              type="button"
              onClick={() => document.dispatchEvent(new Event("open-qualification"))}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all sm:hover:scale-105 active:scale-95"
            >
              <Calendar size={14} />
              <span>{lang === "fr" ? "Appel gratuit" : "Free call"}</span>
            </button>
          </div>

          {/* MOBILE / TABLET — lang + hamburger (shown below lg) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/40 border border-slate-700/60 text-slate-100 text-xs min-h-[44px]"
            >
              <Globe2 size={13} />
              <span className="uppercase">{lang === "fr" ? "FR" : "EN"}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((p) => !p)}
              aria-label={lang === "fr" ? (isOpen ? "Fermer le menu" : "Ouvrir le menu") : (isOpen ? "Close menu" : "Open menu")}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/70 border border-slate-700/60 text-white active:bg-slate-700/80 transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {isOpen && createPortal(
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={lang === "fr" ? "Menu principal" : "Main menu"}
          className="fixed inset-0 flex flex-col lg:hidden animate-fadeIn"
          style={{ zIndex: 9999, paddingTop: navHeight, touchAction: "none" }}
        >
          {/* Backdrop — fully opaque, no bleed-through */}
          <div className="absolute inset-0 bg-slate-950" />

          {/* Violet separator */}
          <div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
            style={{ top: navHeight }}
          />

          {/* Scrollable content */}
          <div className="relative flex flex-col flex-1 overflow-y-auto" style={{ touchAction: "pan-y" }}>

            {/* Nav links */}
            <nav className="flex-1 px-8 pt-8 pb-4">
              {links.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className="w-full flex items-center gap-5 py-4 text-left border-b border-slate-800/40 last:border-0 group active:opacity-70"
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
              <a
                href={lang === "fr" ? "/blog/" : "/blog/en/"}
                className="w-full flex items-center gap-5 py-4 text-left border-b border-slate-800/40 group active:opacity-70"
                style={{
                  opacity: 0,
                  animation: "fade-in-up 0.4s ease forwards",
                  animationDelay: `${links.length * 55}ms`,
                }}
              >
                <span className="text-xs font-mono text-violet-500/50 w-5 tabular-nums flex-shrink-0">
                  {String(links.length + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors">
                  Blog
                </span>
              </a>
            </nav>

            {/* CTAs */}
            <div
              className="px-6 py-6 space-y-3 border-t border-slate-800/60"
              style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
            >
              <button
                type="button"
                onClick={() => { setIsOpen(false); document.dispatchEvent(new Event("open-qualification")); }}
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold text-base shadow-lg shadow-violet-500/30 active:opacity-90"
              >
                <Calendar size={18} />
                {lang === "fr" ? "Réserver un appel gratuit" : "Book a free call"}
              </button>

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

              <p className="text-center text-xs text-slate-400 pt-1">
                {lang === "fr" ? "Réponse sous 24h" : "Reply within 24h"}
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
