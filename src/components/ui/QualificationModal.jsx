// src/components/ui/QualificationModal.jsx
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight, ArrowLeft, Calendar, FileSearch } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { CONTACT } from "../../constants/config";

const projectTypes = [
  { id: "vitrine",  emoji: "🏢", fr: "Site vitrine / Refonte",       en: "Business website / Redesign" },
  { id: "ecommerce",emoji: "🛒", fr: "Boutique en ligne",             en: "E-commerce store" },
  { id: "ai",       emoji: "🤖", fr: "Automatisation IA",             en: "AI Automation" },
  { id: "other",    emoji: "💬", fr: "Autre / Je découvre encore",    en: "Other / Not sure yet" },
];

const budgets = [
  { id: "under-3k", fr: "Moins de 3 000 $",     en: "Under $3,000",       qualified: false },
  { id: "3k-5k",   fr: "3 000 $ – 5 000 $",    en: "$3,000 – $5,000",    qualified: true  },
  { id: "5k-10k",  fr: "5 000 $ – 10 000 $",   en: "$5,000 – $10,000",   qualified: true  },
  { id: "10k+",    fr: "Plus de 10 000 $",      en: "Over $10,000",       qualified: true  },
];

const timelines = [
  { id: "asap",        fr: "Le plus tôt possible",    en: "As soon as possible"     },
  { id: "this-month",  fr: "Ce mois-ci",              en: "This month"              },
  { id: "1-3-months",  fr: "1 à 3 mois",             en: "1 to 3 months"           },
  { id: "exploring",   fr: "Je découvre mes options", en: "Just exploring for now"  },
];

const stepTitles = {
  fr: ["Type de projet", "Budget", "Timeline"],
  en: ["Project type",   "Budget", "Timeline"],
};

export const openQualificationModal = () =>
  document.dispatchEvent(new Event("open-qualification"));

const QualificationModal = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen]   = useState(false);
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState({ type: null, budget: null, timeline: null });

  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      setStep(0);
      setAnswers({ type: null, budget: null, timeline: null });
    };
    document.addEventListener("open-qualification", handler);
    return () => document.removeEventListener("open-qualification", handler);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const isQualified = answers.budget
    ? budgets.find((b) => b.id === answers.budget)?.qualified ?? false
    : false;

  const handleBookCall = () => {
    window.open(CONTACT.calendlyUrl, "_blank", "noopener,noreferrer");
    close();
  };

  const handleScrollToContact = () => {
    close();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }, 200);
  };

  const selectAndAdvance = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((s) => (key === "timeline" ? 3 : s + 1));
  };

  const OptionButton = ({ onClick, left, right }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-700/50 hover:border-violet-500/40 hover:bg-violet-500/5 text-left transition-all active:scale-[0.98] group min-h-[56px]"
    >
      <span className="text-sm font-medium text-slate-200 group-hover:text-white flex-1">{left}</span>
      {right || <ArrowRight size={14} className="text-slate-600 group-hover:text-violet-400 flex-shrink-0 transition-colors" />}
    </button>
  );

  const BackButton = ({ toStep }) => (
    <button
      onClick={() => setStep(toStep)}
      className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors mt-4"
    >
      <ArrowLeft size={12} />
      {lang === "fr" ? "Retour" : "Back"}
    </button>
  );

  return createPortal(
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(2, 6, 23, 0.88)" }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        className="relative w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label={lang === "fr" ? "Qualification du projet" : "Project qualification"}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/50">
          <div>
            <h2 className="text-sm font-bold text-white">
              {step < 3
                ? (lang === "fr" ? "2 min pour trouver la meilleure option" : "2 min to find your best option")
                : (lang === "fr" ? "Votre recommandation" : "Your recommendation")}
            </h2>
            {step < 3 && (
              <p className="text-[11px] text-slate-500 mt-0.5">
                {lang === "fr"
                  ? `Étape ${step + 1} / 3 — ${stepTitles.fr[step]}`
                  : `Step ${step + 1} / 3 — ${stepTitles.en[step]}`}
              </p>
            )}
          </div>
          <button
            onClick={close}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Progress bar */}
        {step < 3 && (
          <div className="h-0.5 bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300"
              style={{ width: `${((step + 1) / 3) * 100}%` }}
            />
          </div>
        )}

        <div className="p-6">
          {/* Step 0 — Type de projet */}
          {step === 0 && (
            <div>
              <p className="text-sm text-slate-300 mb-4">
                {lang === "fr"
                  ? "Quel type de projet avez-vous en tête ?"
                  : "What type of project do you have in mind?"}
              </p>
              <div className="space-y-2.5">
                {projectTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => selectAndAdvance("type", t.id)}
                    className="w-full flex items-center gap-4 p-4 rounded-xl border border-slate-700/50 hover:border-violet-500/40 hover:bg-violet-500/5 text-left transition-all active:scale-[0.98] group min-h-[56px]"
                  >
                    <span className="text-xl flex-shrink-0">{t.emoji}</span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white flex-1">{t[lang]}</span>
                    <ArrowRight size={14} className="text-slate-600 group-hover:text-violet-400 flex-shrink-0 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1 — Budget */}
          {step === 1 && (
            <div>
              <p className="text-sm text-slate-300 mb-4">
                {lang === "fr"
                  ? "Quel est votre budget approximatif ?"
                  : "What's your approximate budget?"}
              </p>
              <div className="space-y-2.5">
                {budgets.map((b) => (
                  <OptionButton
                    key={b.id}
                    onClick={() => selectAndAdvance("budget", b.id)}
                    left={<span className="font-semibold text-white">{b[lang]}</span>}
                  />
                ))}
              </div>
              <BackButton toStep={0} />
            </div>
          )}

          {/* Step 2 — Timeline */}
          {step === 2 && (
            <div>
              <p className="text-sm text-slate-300 mb-4">
                {lang === "fr"
                  ? "Quand souhaitez-vous démarrer ?"
                  : "When would you like to start?"}
              </p>
              <div className="space-y-2.5">
                {timelines.map((t) => (
                  <OptionButton
                    key={t.id}
                    onClick={() => selectAndAdvance("timeline", t.id)}
                    left={t[lang]}
                  />
                ))}
              </div>
              <BackButton toStep={1} />
            </div>
          )}

          {/* Step 3 — Résultat */}
          {step === 3 && (
            isQualified ? (
              <div className="text-center space-y-5 py-2">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/30">
                    <Calendar size={28} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {lang === "fr" ? "Vous êtes au bon endroit." : "You're in the right place."}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {lang === "fr"
                      ? "30 minutes — je vous dis honnêtement si je peux vous aider, ce que ça coûte, et dans quel délai."
                      : "30 minutes — I'll tell you honestly if I can help, what it costs, and how long it takes."}
                  </p>
                </div>
                <button
                  onClick={handleBookCall}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-bold shadow-lg shadow-violet-500/30 transition-all hover:scale-105 active:scale-95"
                >
                  <Calendar size={18} />
                  {lang === "fr" ? "Réserver mon appel de 30 min" : "Book my 30-min call"}
                </button>
                <p className="text-xs text-slate-500">
                  {lang === "fr"
                    ? "Gratuit · Sans engagement · Disponible cette semaine"
                    : "Free · No commitment · Available this week"}
                </p>
              </div>
            ) : (
              <div className="text-center space-y-5 py-2">
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700">
                    <FileSearch size={28} className="text-violet-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {lang === "fr" ? "Commençons par un audit." : "Let's start with an audit."}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {lang === "fr"
                      ? "Nos forfaits débutent à 4 500 $. Pour explorer vos options en premier, envoyez-moi votre site — je vous prépare un audit Loom gratuit en 48h, sans engagement."
                      : "Our packages start at $4,500. To explore your options first, send me your site — I'll prepare a free Loom audit in 48h, no strings attached."}
                  </p>
                </div>
                <button
                  onClick={handleScrollToContact}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-violet-500/50 text-white font-semibold text-sm transition-all active:scale-95"
                >
                  <FileSearch size={16} />
                  {lang === "fr" ? "Demander l'audit gratuit (48h)" : "Request the free audit (48h)"}
                </button>
                <p className="text-xs text-slate-500">
                  {lang === "fr"
                    ? "Je reviendrai vers vous dans les 48h — aucun engagement."
                    : "I'll get back to you within 48h — no strings attached."}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default QualificationModal;
