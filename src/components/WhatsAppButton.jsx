// src/components/WhatsAppButton.jsx
// Despite the legacy name, this is a floating call button (tel:) — kept this
// filename to avoid breaking imports across the app.
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { CONTACT } from "../constants/config";

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  const TEL = `tel:${CONTACT.phone.replace(/\s/g, "")}`;

  useEffect(() => {
    // Reveal once the user has actually engaged with the page (after scroll
    // OR a longer dwell time) — less aggressive than the previous 3s pop-in.
    let scrollHandler;
    const timer = setTimeout(() => setIsVisible(true), 8000);
    scrollHandler = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
        window.removeEventListener("scroll", scrollHandler);
        clearTimeout(timer);
      }
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50"
      style={{
        bottom: 'calc(1rem + env(safe-area-inset-bottom))',
        left: 'calc(1rem + env(safe-area-inset-left))',
      }}
    >
      <a
        href={TEL}
        className="group relative flex items-center"
        aria-label={lang === "fr" ? "Appeler Wanil" : "Call Wanil"}
        onClick={() => {
          try { window.plausible && window.plausible("Floating Call Click"); } catch (_) {}
        }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity" />
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all group-hover:scale-105">
          <Phone size={22} className="text-white" />
        </div>
      </a>
    </div>
  );
};

export default FloatingCallButton;
