// src/components/WhatsAppButton.jsx
import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { CONTACT } from "../constants/config";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { lang } = useLanguage();

  const TEL = `tel:${CONTACT.phone.replace(/\s/g, "")}`;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-0 mb-3 animate-fadeIn">
          <div className="relative bg-white text-slate-800 rounded-xl shadow-xl p-4 max-w-[220px]">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium mb-1">
              {lang === "fr" ? "On se parle?" : "Let's talk?"}
            </p>
            <p className="text-xs text-slate-600">
              {lang === "fr"
                ? "Appelez-moi directement — je réponds."
                : "Call me directly — I pick up."}
            </p>
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45" />
          </div>
        </div>
      )}

      {/* Phone Button */}
      <a
        href={TEL}
        className="group relative flex items-center"
        aria-label={lang === "fr" ? "Appeler Wanil" : "Call Wanil"}
      >
        <div className="absolute inset-0 bg-violet-500 rounded-full animate-ping opacity-20" />
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all group-hover:scale-105">
          <Phone size={22} className="text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
