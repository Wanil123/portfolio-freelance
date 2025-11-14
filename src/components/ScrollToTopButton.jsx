// src/components/ScrollToTopButton.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const label = useMemo(
    () => (lang === "fr" ? "Retour en haut" : "Scroll to top"),
    [lang]
  );

  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const y = window.scrollY || document.documentElement.scrollTop || 0;
        const h =
          (document.documentElement.scrollHeight ||
            document.body.scrollHeight) -
          window.innerHeight;
        const pct = h > 0 ? Math.min(1, Math.max(0, y / h)) : 0;
        setVisible(y > 400);
        setProgress(pct);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKey = (e) => {
      if (e.altKey && e.key === "ArrowUp") {
        e.preventDefault();
        scrollToTop(prefersReduced);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const scrollToTop = (reduced = false) => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        scrollToTop(
          window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
        )
      }
      className="group fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-fadeIn"
      aria-label={label}
      title={`${label} (Alt+↑)`}
    >
      {/* Glow background - plus petit */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Main button - compact */}
      <div className="relative flex items-center gap-2 px-3 py-2 md:px-3.5 md:py-2.5 bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-xl hover:shadow-violet-500/20 transition-all duration-300 group-hover:-translate-y-0.5">
        
        {/* Progress bar background */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-violet-500/15 to-purple-500/15 transition-all duration-200"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Icon - plus petit */}
        <div className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/40">
          <ArrowUp size={16} className="text-white" strokeWidth={2.5} />
        </div>

        {/* Text - seulement sur tablet+ */}
        <span className="hidden md:block relative text-xs font-semibold text-white whitespace-nowrap">
          {lang === "fr" ? "Haut" : "Top"}
        </span>

        {/* Progress percentage - seulement sur large screens */}
        <span className="hidden lg:block relative text-[10px] text-slate-400 font-mono">
          {Math.round(progress * 100)}%
        </span>
      </div>
    </button>
  );
};

export default ScrollToTopButton;