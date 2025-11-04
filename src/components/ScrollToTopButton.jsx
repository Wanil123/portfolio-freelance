// src/components/ScrollToTopButton.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0); // 0→1
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

    // Raccourci clavier: Alt + Flèche haut
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

  // Progress ring geometry
  const size = 44; // px
  const stroke = 4;
  const r = (size - stroke) / 2;
  const C = 2 * Math.PI * r;
  const dash = C * (1 - progress);

  return (
    <button
      onClick={() => scrollToTop(
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
      )}
      className="
        group fixed bottom-4 right-4 md:bottom-6 md:right-6
        h-12 w-12 md:h-14 md:w-14
        rounded-full
        bg-violet-500/90 hover:bg-violet-400 active:bg-violet-500
        text-white
        shadow-xl shadow-violet-900/30
        backdrop-blur
        ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300
        transition
      "
      aria-label={label}
      title={`${label} (Alt+↑)`}
    >
      {/* Ring de progression (décoratif) */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 m-auto"
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="white"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: C,
            strokeDashoffset: dash,
            transition: "stroke-dashoffset 120ms linear",
          }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      <ChevronUp
        size={20}
        className="relative z-10 transition-transform group-hover:-translate-y-0.5"
      />
    </button>
  );
};

export default ScrollToTopButton;
