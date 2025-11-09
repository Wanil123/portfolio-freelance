// src/components/Contact.jsx
import { useTranslation } from "react-i18next";
import { Mail, Phone, Zap, Calendar, Globe2, Check } from "lucide-react";

const Contact = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const WHATSAPP_LINK =
    "https://wa.me/15793685230?text=Bonjour%20Wanil,%20je%20veux%20parler%20de%20mon%20projet%20web.";

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* header */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wide text-violet-200 mb-2 flex items-center justify-center gap-2">
            <Globe2 size={16} className="text-violet-200" />
            {lang === "fr"
              ? "Contactez PrimeDev Studios."
              : "Contact PrimeDev Studios."}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            {lang === "fr"
              ? "On vous répond en moins de 24 h."
              : "We answer in less than 24h."}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            {lang === "fr"
              ? "Montréal · Remote · FR/EN · Agences, startups, PME, fondateurs."
              : "Montreal · Remote · FR/EN · Agencies, startups, SMB, founders."}
          </p>
        </div>

        {/* 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* COL GAUCHE */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-7 flex flex-col gap-5">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {lang === "fr"
                  ? "Parlons de votre projet"
                  : "Let’s talk about your project"}
              </h3>
              <p className="text-slate-300 text-sm">
                {lang === "fr"
                  ? "Dites-nous ce que vous voulez livrer (site, app, intégration Odoo, refonte). On vous revient avec la meilleure approche."
                  : "Tell us what you want to ship (site, app, Odoo integration, redesign). We’ll come back with the best approach."}
              </p>
            </div>

            {/* email */}
            <a
              href="mailto:info@prime-dev-studios.com"
              className="flex items-center gap-3 bg-slate-950/30 border border-slate-800 rounded-2xl px-4 py-3.5 hover:border-violet-400/70 transition"
            >
              <div className="w-10 h-10 rounded-full bg-violet-500/15 flex items-center justify-center text-violet-200">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-200">
                  {lang === "fr" ? "Courriel" : "Email"}
                </p>
                <p className="text-white text-sm">info@prime-dev-studios.com</p>
              </div>
            </a>

            {/* whatsapp / phone */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-slate-950/30 border border-slate-800 rounded-2xl px-4 py-3.5 hover:border-violet-400/70 transition"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-200">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-200">
                  {lang === "fr" ? "Téléphone / WhatsApp" : "Phone / WhatsApp"}
                </p>
                <p className="text-white text-sm">+1 579-368-5230</p>
              </div>
            </a>

            <div className="flex items-center gap-2 text-emerald-200 text-sm">
              <Zap size={16} />
              <span>
                {lang === "fr" ? "Réponse rapide." : "Fast response."}
              </span>
            </div>

            <p className="text-xs text-slate-400 pt-1">
              {lang === "fr"
                ? "Pas de formulaire compliqué. Écrivez-nous direct."
                : "No complicated form. Contact us directly."}
            </p>
          </div>

          {/* COL DROITE */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-7 flex flex-col justify-between gap-5">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {lang === "fr"
                  ? "Réserver un appel de 30 min"
                  : "Book a 30-min call"}
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                {lang === "fr"
                  ? "Vous nous expliquez ce que vous voulez (WordPress, React, Laravel, Odoo, portail client) et on vous donne un plan + budget."
                  : "Tell us what you need (WordPress, React, Laravel, Odoo, client portal) and we’ll give you a plan + budget."}
              </p>

              <a
                href="https://calendly.com/maiwanpar/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-400 text-white font-medium rounded-full py-3 px-6 transition w-full sm:w-auto"
              >
                <Calendar size={18} />
                {lang === "fr" ? "Ouvrir Calendly" : "Open Calendly"}
              </a>
            </div>

            <div className="bg-slate-950/30 border border-slate-800 rounded-2xl p-4 flex items-start gap-3">
              <Check size={18} className="text-emerald-300 mt-1" />
              <div className="text-sm text-slate-200">
                <p className="font-medium">
                  {lang === "fr"
                    ? "Si Calendly ne fonctionne pas"
                    : "If Calendly is not available"}
                </p>
                <p className="text-slate-400">
                  {lang === "fr"
                    ? "écrivez à info@prime-dev-studios.com ou sur WhatsApp."
                    : "email info@prime-dev-studios.com or message on WhatsApp."}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              {lang === "fr"
                ? "Créneaux Montréal (EST). Possibilité d'appel soir/week-end selon projet."
                : "Montreal (EST) time slots. Evening/weekend possible depending on project."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
