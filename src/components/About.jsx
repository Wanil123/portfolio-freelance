// src/components/About.jsx
import { useTranslation } from "react-i18next";
import {
  Globe2,
  Code2,
  MapPin,
  CheckCircle2,
  Layers,
  Rocket,
} from "lucide-react";

const About = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  return (
    <section id="about" className="py-16 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-sm text-slate-100 mb-4">
            <Globe2 size={16} className="text-emerald-300" />
            {lang === "fr"
              ? "À propos de PrimeDev Studios."
              : "About PrimeDev Studios."}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            {lang === "fr"
              ? "Un studio web moderne pour les équipes qui veulent livrer."
              : "A modern web studio for teams that want to ship."}
          </h2>
          <p className="text-slate-300 text-sm md:text-base">
            {lang === "fr"
              ? "Nous concevons et développons des expériences web propres, rapides et bilingues (FR/EN), prêtes à connecter vos outils (CRM, ERP, Odoo 17, APIs). Basé à Montréal, disponible en remote pour le Canada et l’international."
              : "We design and build clean, fast, bilingual (FR/EN) web experiences, ready to connect to your tools (CRM, ERP, Odoo 17, APIs). Based in Montréal, available remotely for Canada and international clients."}
          </p>
        </div>

        {/* 2 COLONNES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* COLONNE GAUCHE */}
          <div className="space-y-5 text-slate-200 text-sm md:text-base">
            <p>
              {lang === "fr"
                ? "PrimeDev Studios est dirigé par Wanil Parfait, développeur full-stack formé en conception et programmation web, avec une vraie expérience terrain sur React, Vue.js, Laravel, WordPress Odoo 17 et plus encors."
                : "PrimeDev Studios is led by Wanil Parfait, a full-stack developer trained in web design & programming, with real-world experience in React, Vue.js, Laravel, WordPress, Odoo 17 and many more."}
            </p>

            <p>
              {lang === "fr"
                ? "Nous travaillons comme une petite équipe senior : on clarifie le besoin, on propose l’architecture front/back, on livre un produit propre que vous pouvez montrer à vos clients ou brancher à vos systèmes — sans refonte totale 2 semaines plus tard."
                : "We work like a compact senior team: we clarify the need, propose the front/back architecture, and deliver a clean product you can show to clients or plug into your systems — without having to rebuild it two weeks later."}
            </p>

            <p>
              {lang === "fr"
                ? "Notre clientèle : agences qui manquent de dev, PME qui veulent une vraie présence en ligne, fondateurs qui ont besoin d’un MVP, et entreprises qui doivent connecter leur site à Odoo 17."
                : "Our clients: agencies that need extra dev capacity, SMBs that want a real online presence, founders who need an MVP, and companies that must connect their site to Odoo 17."}
            </p>

            {/* POINTS CLÉS */}
            <ul className="space-y-2">
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-400 mt-1" size={18} />
                <span>
                  {lang === "fr"
                    ? "Bilingue FR / EN — parfait pour le Québec et l’international."
                    : "Bilingual FR / EN — perfect for Québec and international."}
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-400 mt-1" size={18} />
                <span>
                  {lang === "fr"
                    ? "Stack moderne : React, Vue 3, Tailwind, Laravel, WordPress."
                    : "Modern stack: React, Vue 3, Tailwind, Laravel, WordPress."}
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-400 mt-1" size={18} />
                <span>
                  {lang === "fr"
                    ? "Intégrations avancées : APIs, CRM, ERP, Odoo 17 (portails, modules, QWeb)."
                    : "Advanced integrations: APIs, CRM, ERP, Odoo 17 (portals, modules, QWeb)."}
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 className="text-emerald-400 mt-1" size={18} />
                <span>
                  {lang === "fr"
                    ? "Livrables prêts à déployer (Netlify, Vercel, VPS, Odoo)."
                    : "Deliverables ready to deploy (Netlify, Vercel, VPS, Odoo)."}
                </span>
              </li>
            </ul>
          </div>

          {/* COLONNE DROITE – CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Expertise */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Code2 className="text-emerald-200" />
                <h3 className="text-white font-semibold text-sm">
                  {lang === "fr" ? "Sites & apps modernes" : "Modern sites & apps"}
                </h3>
              </div>
              <p className="text-sm text-slate-200">
                React, Vue 3, Tailwind, Laravel, WordPress
              </p>
              <p className="text-xs text-slate-400 mt-2">
                {lang === "fr"
                  ? "UX soignée, animation légère, performance."
                  : "Clean UX, light animation, performance."}
              </p>
            </div>

            {/* Odoo / ERP */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Layers className="text-amber-200" />
                <h3 className="text-white font-semibold text-sm">
                  {lang === "fr" ? "Connecté à vos outils" : "Connected to your tools"}
                </h3>
              </div>
              <p className="text-sm text-slate-200">
                {lang === "fr"
                  ? "Portails Odoo 17, modules sur mesure, QWeb."
                  : "Odoo 17 portals, custom modules, QWeb."}
              </p>
              <p className="text-xs text-slate-400 mt-2">
                {lang === "fr"
                  ? "Pour les équipes qui doivent automatiser."
                  : "For teams that need automation."}
              </p>
            </div>

            {/* Localisation */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-cyan-200" />
                <h3 className="text-white font-semibold text-sm">
                  {lang === "fr" ? "Basé à Montréal" : "Based in Montréal"}
                </h3>
              </div>
              <p className="text-sm text-slate-200">
                {lang === "fr"
                  ? "Mandats Québec, Canada et l’international."
                  : "Projects in Québec, Canada and international."}
              </p>
              <p className="text-xs text-slate-400 mt-2">
                {lang === "fr"
                  ? "Facturation simple, communication claire."
                  : "Simple billing, clear communication."}
              </p>
            </div>

            {/* Méthode */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="text-violet-200" />
                <h3 className="text-white font-semibold text-sm">
                  {lang === "fr" ? "Process en 3 étapes" : "3-step process"}
                </h3>
              </div>
              <p className="text-sm text-slate-200">
                {lang === "fr"
                  ? "1. Cadrage rapide · 2. Design/Dev · 3. Mise en ligne + support."
                  : "1. Fast scoping · 2. Design/Dev · 3. Launch + support."}
              </p>
              <p className="text-xs text-slate-400 mt-2">
                {lang === "fr"
                  ? "Pensé pour les clients qui n’ont pas le temps."
                  : "Built for busy clients."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-300 mb-4">
            {lang === "fr"
              ? "Un site à moderniser, une web app à livrer ou un portail Odoo à intégrer ?"
              : "Need to modernize a site, ship a web app or integrate an Odoo portal?"}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white rounded-full px-6 py-2.5 text-sm transition"
          >
            {lang === "fr" ? "Discuter de votre projet" : "Talk about your project"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
