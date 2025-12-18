// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X, Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const links = [
  { id: "home", en: "Home", fr: "Accueil" },
  { id: "services", en: "Services", fr: "Services" },
  { id: "process", en: "Process", fr: "Processus" },
  { id: "skills", en: "Skills", fr: "Compétences" },
  { id: "projects", en: "Projects", fr: "Projets" },
  { id: "contact", en: "Contact", fr: "Contact" },
  { id: "about", en: "About", fr: "À propos" },
];

const Navbar = ({ activeSection, scrollToSection, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  const toggleLang = () => {
    const next = lang === "en" ? "fr" : "en";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out will-change-[background-color,border-color] ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-2.5 md:py-3 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => handleNavClick("home")}
          className="group flex items-center gap-3"
        >
          {/* Logo avec glow effect */}
          <div className="relative flex-shrink-0">
            {/* Glow background */}
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/50 to-purple-500/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="/logo.png"
              alt="PrimeDev Studios"
              width={56}
              height={56}
              style={{ width: '56px', height: '56px', minWidth: '56px', minHeight: '56px', objectFit: 'contain' }}
              className="relative rounded-2xl shadow-xl border-2 border-violet-500/50 group-hover:border-violet-400/80 group-hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Texte sur une ligne */}
          <span className="font-bold text-base md:text-lg bg-gradient-to-r from-white via-violet-100 to-white bg-clip-text text-transparent group-hover:from-violet-200 group-hover:via-white group-hover:to-violet-200 transition-all duration-300 whitespace-nowrap">
            PrimeDev Studios
          </span>
        </button>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-3">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={
                  isActive
                    ? "text-white text-sm px-3 py-1.5 rounded-full bg-slate-900/70 border border-violet-500/40 shadow-sm"
                    : "text-slate-200 hover:text-white text-sm px-3 py-1.5 rounded-full hover:bg-slate-900/30"
                }
              >
                {lang === "fr" ? link.fr : link.en}
              </button>
            );
          })}

          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-700/60 text-slate-100 text-xs"
          >
            <Globe2 size={14} />
            <span className="uppercase">{lang === "fr" ? "FR" : "EN"}</span>
          </button>
        </div>

        {/* MOBILE BTN */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen((p) => !p)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-t border-slate-800">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={
                  isActive
                    ? "block w-full text-left px-6 py-3 text-white bg-slate-900/50"
                    : "block w-full text-left px-6 py-3 text-slate-200"
                }
              >
                {lang === "fr" ? link.fr : link.en}
              </button>
            );
          })}

          <div className="px-6 py-3 flex items-center justify-between gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/40 border border-slate-700/60 text-slate-100 text-xs"
            >
              <Globe2 size={14} />
              <span className="uppercase">{lang === "fr" ? "FR" : "EN"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
