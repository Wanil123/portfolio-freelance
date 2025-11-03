// src/components/Skills.jsx
import { useTranslation } from "react-i18next";
import {
  Palette,
  Server,
  Code,
  Globe2,
  ShieldCheck,
  Layers,
  Network,
} from "lucide-react";

const SkillBar = ({ name, level }) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm mb-1 text-slate-100">
      <span>{name}</span>
      <span className="text-slate-400">{level}%</span>
    </div>
    <div className="h-2 bg-slate-900/40 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

export default function Skills() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/60 border border-slate-700/40 text-sm mb-4">
            <Globe2 size={16} className="text-emerald-300" />
            {lang === "fr"
              ? "Compétences adaptées aux projets web professionnels"
              : "Skills for professional web projects"}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            {lang === "fr" ? "Notre expertise technique" : "Our technical expertise"}
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            {lang === "fr"
              ? "Nous concevons des interfaces modernes, des applications web complètes et, lorsque c’est nécessaire, des intégrations ERP (Odoo 17). Toutes nos livraisons peuvent être bilingues (FR/EN)."
              : "We build modern interfaces, complete web applications and, when needed, ERP/Odoo 17 integrations. All deliveries can be bilingual (FR/EN)."}
          </p>
        </div>

        {/* 4 colonnes principales */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* 1. Front-End / UI */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-violet-500/20 text-violet-200">
                <Palette />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  {lang === "fr" ? "Front-end & UX/UI" : "Front-end & UX/UI"}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === "fr"
                    ? "Sites modernes, responsive, accessibles"
                    : "Modern, responsive, accessible"}
                </p>
              </div>
            </div>
            <SkillBar name="HTML5 / CSS3" level={96} />
            <SkillBar name="JavaScript (ES6+)" level={92} />
            <SkillBar name="React" level={86} />
            <SkillBar name="Vue.js 3" level={88} />
            <SkillBar name="Tailwind / Bootstrap" level={94} />
            <p className="text-xs text-slate-400 mt-3">
              {lang === "fr"
                ? "Idéal pour vitrines, dashboards, interfaces clients."
                : "Perfect for marketing sites, dashboards, customer portals."}
            </p>
          </div>

          {/* 2. Back-End / APIs */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-200">
                <Server />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  {lang === "fr" ? "Back-end & API" : "Back-end & API"}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === "fr"
                    ? "Applications métier & intégrations"
                    : "Business apps & integrations"}
                </p>
              </div>
            </div>
            <SkillBar name="PHP / Laravel" level={90} />
            <SkillBar name="Python" level={82} />
            <SkillBar name="REST / JSON APIs" level={85} />
            <SkillBar name="MySQL / PostgreSQL" level={84} />
            <SkillBar name="Auth / rôles" level={80} />
            <p className="text-xs text-slate-400 mt-3">
              {lang === "fr"
                ? "Pour applications internes, SaaS, connecteurs."
                : "For internal apps, SaaS, connectors."}
            </p>
          </div>

          {/* 3. CMS / Delivery / SEO */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-200">
                <Code />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  {lang === "fr" ? "CMS & mise en ligne" : "CMS & delivery"}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === "fr"
                    ? "WordPress, Netlify, sites d’agence"
                    : "WordPress, Netlify, agency sites"}
                </p>
              </div>
            </div>
            <SkillBar name="WordPress" level={78} />
            <SkillBar name="Headless (React)" level={80} />
            <SkillBar name={lang === "fr" ? "i18n (FR/EN)" : "i18n (FR/EN)"} level={90} />
            <SkillBar name={lang === "fr" ? "SEO technique" : "Technical SEO"} level={70} />
            <p className="text-xs text-slate-400 mt-3">
              {lang === "fr"
                ? "Pour entreprises qui veulent être trouvées et publier vite."
                : "For companies that want to be found and publish fast."}
            </p>
          </div>

          {/* 4. ERP / Odoo / Workflow */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-200">
                <Network />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  {lang === "fr" ? "Odoo & workflow" : "Odoo & workflow"}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === "fr"
                    ? "Quand le site doit parler à l’ERP"
                    : "When the website must talk to ERP"}
                </p>
              </div>
            </div>
            <SkillBar
              name={
                lang === "fr"
                  ? "Odoo 17 (portails, PDF, modules)"
                  : "Odoo 17 (portals, PDF, modules)"
              }
              level={85}
            />
            <SkillBar name="Odoo ↔ APIs externes" level={80} />
            <SkillBar name="QWeb / OWL" level={78} />
            <SkillBar name="Déploiement Odoo" level={72} />
            <p className="text-xs text-slate-400 mt-3">
              {lang === "fr"
                ? "Utile pour les PME qui veulent relier leur site, leur facturation ou leur portail client."
                : "Useful for SMEs that want to connect site, invoicing or client portal."}
            </p>
          </div>
        </div>

        {/* Bloc “ce que ça apporte” */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex gap-3">
            <ShieldCheck className="text-emerald-300 mt-1" />
            <div>
              <h4 className="text-white font-medium">
                {lang === "fr" ? "Qualité production" : "Production quality"}
              </h4>
              <p className="text-slate-400 text-sm">
                {lang === "fr"
                  ? "Code structuré, versionné, prêt à intégrer dans votre environnement."
                  : "Structured, versioned code, ready for your environment."}
              </p>
            </div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex gap-3">
            <Layers className="text-violet-300 mt-1" />
            <div>
              <h4 className="text-white font-medium">
                {lang === "fr" ? "Bilingue FR/EN" : "Bilingual FR/EN"}
              </h4>
              <p className="text-slate-400 text-sm">
                {lang === "fr"
                  ? "Utile pour le marché canadien, européen ou pour vos filiales."
                  : "Useful for Canadian, European or international markets."}
              </p>
            </div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex gap-3">
            <Globe2 className="text-cyan-300 mt-1" />
            <div>
              <h4 className="text-white font-medium">
                {lang === "fr" ? "Habitué au remote" : "Remote-ready"}
              </h4>
              <p className="text-slate-400 text-sm">
                {lang === "fr"
                  ? "Process clair pour travailler à distance avec votre équipe."
                  : "Clear process to work remotely with your team."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
