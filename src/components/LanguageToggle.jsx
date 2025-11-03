// src/components/LanguageToggle.jsx
import { Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const toggleLang = () => {
    const next = lang === "en" ? "fr" : "en";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-600/60 bg-slate-900/40 hover:bg-slate-800 transition text-slate-100 text-sm"
    >
      <Globe2 size={16} />
      <span className="tracking-wide uppercase">{lang === "en" ? "EN" : "FR"}</span>
    </button>
  );
};

export default LanguageToggle;
