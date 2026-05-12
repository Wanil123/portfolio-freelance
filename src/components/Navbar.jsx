// src/components/Navbar.jsx
import { useState, useEffect } from "react";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
            : "bg-slate-950/80 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 md:py-3 flex items-center justify-between gap-4">
          {/* LOGO */}
          <button
            onClick={() => handleNavClick("home")}
            className="group flex items-center gap-2.5 flex-shrink-0"
          >
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/50 to-purple-500/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/logo.png"
                alt={COMPANY.name}
                width={56}
                height={56}
                className="relative w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl shadow-xl border-2 border-violet-500/50 group-hover:border-violet-400/80 transition-all duration-300"
              />
            </div>
            <span className="font-bold text-sm md:text-base bg-gradient-to-r from-white via-violet-100 to-white bg-clip-text text-transparent whitespace-nowrap">
              {COMPANY.name}
            </span>
          </button>

          {/* DESKTOP — nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
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
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-900/40 border border-slate-700/60 text-slate-100 text-xs"
            >
              <Globe2 size={12} />
              <span className="uppercase">{lang === "fr" ? "FR" : "EN"}</span>
            </button>
            {/* Larger tap target: p-2.5 = 44px touch area */}
            <button
              className="text-white p-2.5 -mr-1"
              onClick={() => setIsOpen((p) => !p)}
              aria-label={lang === "fr" ? "Ouvrir le menu" : "Toggle navigation"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 z-[49] bg-slate-950 overflow-y-auto md:hidden flex flex-col"
          style={{ top: "68px" }}
        >
          {/* Nav links */}
          <div className="flex-1">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-6 py-4 text-base border-b border-slate-800/60 font-medium transition-colors ${
                    isActive
                      ? "text-white bg-slate-900/60 border-l-4 border-l-violet-500"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/30"
                  }`}
                >
                  {lang === "fr" ? link.fr : link.en}
                </button>
              );
            })}
          </div>

          {/* Mobile CTAs — padding-bottom accounts for iOS home indicator */}
          <div className="p-5 space-y-3 border-t border-slate-800" style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))' }}>
            <a
              href={CONTACT.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-base shadow-lg shadow-violet-500/25"
              onClick={() => setIsOpen(false)}
            >
              <Calendar size={18} />
              {lang === "fr" ? "Réserver un appel gratuit" : "Book a free call"}
            </a>
            <div className="flex gap-3">
              <a
                href={SMS}
                className="flex items-center justify-center gap-2 flex-1 py-3.5 rounded-xl border border-slate-700 bg-slate-900/50 text-slate-200 font-semibold text-sm"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare size={16} />
                SMS
              </a>
              <a
                href={TEL}
                className="flex items-center justify-center gap-2 flex-1 py-3.5 rounded-xl border border-slate-700 bg-slate-900/50 text-slate-200 font-semibold text-sm"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={16} />
                {lang === "fr" ? "Appel" : "Call"}
              </a>
            </div>
            <p className="text-center text-xs text-slate-500 pb-2">
              {lang === "fr" ? "Je réponds en moins de 2h" : "I reply within 2h"}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
