// src/components/WhatsAppButton.jsx
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const WHATSAPP_NUMBER = "15793685230";
  const message = lang === "fr"
    ? "Bonjour! Je suis intéressé(e) par vos services de développement web."
    : "Hello! I'm interested in your web development services.";

  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Show tooltip after 5 seconds (first time only)
    const tooltipTimer = setTimeout(() => {
      const hasSeenTooltip = sessionStorage.getItem("whatsapp-tooltip-seen");
      if (!hasSeenTooltip) {
        setShowTooltip(true);
        sessionStorage.setItem("whatsapp-tooltip-seen", "true");
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full left-0 mb-3 animate-fadeIn">
          <div className="relative bg-white text-slate-800 rounded-xl shadow-xl p-4 max-w-[240px]">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium mb-1">
              {lang === "fr" ? "Besoin d'aide?" : "Need help?"}
            </p>
            <p className="text-xs text-slate-600">
              {lang === "fr"
                ? "Écrivez-nous sur WhatsApp pour une réponse rapide!"
                : "Message us on WhatsApp for a quick response!"}
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45" />
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
        aria-label={lang === "fr" ? "Contacter sur WhatsApp" : "Contact on WhatsApp"}
      >
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-25" />

        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

        {/* Button */}
        <div className="relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all group-hover:scale-105">
          <MessageCircle size={22} className="text-white" fill="white" />
          <span className="hidden md:block text-white font-semibold text-sm">
            WhatsApp
          </span>
        </div>

        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
