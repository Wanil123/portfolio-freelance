// src/components/Footer.jsx
import { useTranslation } from "react-i18next";
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  return (
    <footer className="py-8 border-t border-slate-800 mt-10 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500">
          {lang === "fr"
            ? `© ${new Date().getFullYear()} PrimeDev Studios `
            : `© ${new Date().getFullYear()} PrimeDev Studios`}
        </p>
        <div className="flex items-center gap-4 text-slate-300">
          <a
            href="https://www.linkedin.com/in/wanil-parfait-b26889108/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <Github size={16} />
          </a>
          <a href="mailto:info@prime-dev-studios.com" className="hover:text-white">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
