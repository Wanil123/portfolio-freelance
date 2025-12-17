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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-2.5 md:py-3 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 text-white"
        >
          <img
            src="/logo.png"
            alt="PrimeDev Studios"
            width="56"
            height="56"
            className="shrink-0 aspect-square object-contain h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-2xl shadow-lg border border-violet-500/30 bg-slate-950"
          />
          <span className="font-semibold text-xs md:text-sm lg:text-lg leading-tight text-left">
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
