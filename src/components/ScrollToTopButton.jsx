// src/components/ScrollToTopButton.jsx
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 p-2.5 md:p-3 rounded-full bg-violet-500 hover:bg-violet-400 text-white shadow-lg"
      aria-label={lang === "fr" ? "Retour en haut" : "Scroll to top"}
    >
      <ChevronUp size={18} />
    </button>
  );
};

export default ScrollToTopButton;
