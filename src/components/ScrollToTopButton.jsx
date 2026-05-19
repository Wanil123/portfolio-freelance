// src/components/ScrollToTopButton.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const raf = useRef(0);
  const { lang } = useLanguage();

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
        setVisible(y > 400);
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
      type="button"
      onClick={() =>
        scrollToTop(
          window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
        )
      }
      className="group fixed z-50 animate-fadeIn flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 active:scale-95 transition-all"
      style={{
        bottom: 'calc(1rem + env(safe-area-inset-bottom))',
        right: 'calc(1rem + env(safe-area-inset-right))',
      }}
      aria-label={label}
      title={`${label} (Alt+↑)`}
    >
      <ArrowUp size={18} className="text-white" strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTopButton;
