// src/components/ui/QualificationModal.jsx
import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight, ArrowLeft, Calendar, FileSearch, Loader2, CheckCircle2, Mail, User, Phone as PhoneIcon, Link as LinkIcon } from "lucide-react";
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
  { id: "3k-5k",    fr: "3 000 $ – 5 000 $",    en: "$3,000 – $5,000",    qualified: true  },
  { id: "5k-10k",   fr: "5 000 $ – 10 000 $",   en: "$5,000 – $10,000",   qualified: true  },
  { id: "10k+",     fr: "Plus de 10 000 $",      en: "Over $10,000",       qualified: true  },
  { id: "not-sure", fr: "Pas encore sûr — on en discute", en: "Not sure yet — let's discuss", qualified: true },
];

const timelines = [
  { id: "asap",        fr: "Le plus tôt possible",    en: "As soon as possible"     },
  { id: "this-month",  fr: "Ce mois-ci",              en: "This month"              },
  { id: "1-3-months",  fr: "1 à 3 mois",             en: "1 to 3 months"           },
  { id: "exploring",   fr: "Je découvre mes options", en: "Just exploring for now"  },
];

const stepTitles = {
  fr: ["Type de projet", "Budget", "Timeline", "Vos coordonnées"],
  en: ["Project type",   "Budget", "Timeline", "Your contact info"],
};

// Lightweight analytics helper — works with Plausible if installed, no-op otherwise
const track = (name, props) => {
  try {
    if (typeof window !== "undefined" && typeof window.plausible === "function") {
      window.plausible(name, props ? { props } : undefined);
    }
  } catch (_) { /* never let analytics break the modal */ }
};

const labelForId = (arr, id, lang) => {
  const found = arr.find((x) => x.id === id);
  return found ? (found[lang] || found.fr) : id;
};

export const openQualificationModal = () =>
  document.dispatchEvent(new Event("open-qualification"));

// Defined at module scope so React keeps the same component identity across
// parent re-renders — otherwise the input loses focus on every keystroke.
function FieldInput({ name, type = "text", icon: Icon, placeholder, autoComplete, required, value, error, showError, onChange, onBlur }) {
  const visibleError = showError ? error : null;
  return (
    <div>
      <div className="relative">
        <Icon size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={() => onBlur && onBlur(name)}
          placeholder={placeholder + (required ? " *" : "")}
          autoComplete={autoComplete}
          aria-required={required}
          aria-invalid={!!visibleError}
          className={`w-full pl-9 pr-3 py-3 rounded-lg bg-slate-800/60 border ${
            visibleError ? "border-rose-500/60" : "border-slate-700/60"
          } text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-violet-500/60 transition-colors`}
        />
      </div>
      {visibleError && (
        <p className="text-[11px] text-rose-400 mt-1">{visibleError}</p>
      )}
    </div>
  );
}

const QualificationModal = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen]     = useState(false);
  const [step, setStep]         = useState(0);
  const [answers, setAnswers]   = useState({ type: null, budget: null, timeline: null });
  const [form, setForm]         = useState({ name: "", email: "", phone: "", siteUrl: "" });
  const [errors, setErrors]     = useState({});
  const [touched, setTouched]   = useState({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const honeypotBookRef = useRef(null);
  const honeypotAuditRef = useRef(null);
  const triggerRef = useRef(null);

  const resetAll = useCallback(() => {
    setStep(0);
    setAnswers({ type: null, budget: null, timeline: null });
    setForm({ name: "", email: "", phone: "", siteUrl: "" });
    setErrors({});
    setTouched({});
    setHasAttemptedSubmit(false);
    setSubmitting(false);
    setSubmitted(false);
    setSubmitError(null);
  }, []);

  useEffect(() => {
    const handler = () => {
      triggerRef.current = document.activeElement;
      resetAll();
      setIsOpen(true);
      track("Modal Opened");
    };
    document.addEventListener("open-qualification", handler);
    return () => document.removeEventListener("open-qualification", handler);
  }, [resetAll]);

  const close = useCallback(() => {
    setIsOpen(false);
    if (!submitted && step > 0) {
      track("Modal Abandoned", { atStep: stepTitles.en[Math.min(step, 3)] });
    }
    // Restore focus to the element that opened the modal
    if (triggerRef.current && document.contains(triggerRef.current)) {
      triggerRef.current.focus();
    }
  }, [submitted, step]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  // Lock body scroll while modal is open — iOS Safari ignores overflow:hidden alone,
  // but combining it with position:fixed on body works across browsers.
  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isQualified = answers.budget
    ? budgets.find((b) => b.id === answers.budget)?.qualified ?? false
    : false;

  const selectAndAdvance = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    track("Step Completed", { step: key, value });
    setStep((s) => (key === "timeline" ? 3 : s + 1));
  };

  const validateForm = () => {
    const next = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      next.name = lang === "fr" ? "Nom requis (2 caractères min)" : "Name required (2 chars min)";
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailOk) {
      next.email = lang === "fr" ? "Email valide requis" : "Valid email required";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    // Validate this field only on blur, but don't surface errors for empty
    // pristine fields — only for fields the user has typed in.
    if (!form[name]) return;
    if (name === "name" && form.name.trim().length < 2) {
      setErrors((prev) => ({ ...prev, name: lang === "fr" ? "Nom requis (2 caractères min)" : "Name required (2 chars min)" }));
    }
    if (name === "email") {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
      if (!emailOk) {
        setErrors((prev) => ({ ...prev, email: lang === "fr" ? "Email valide requis" : "Valid email required" }));
      }
    }
  };

  const submitLead = async (action) => {
    const honeypot = action === "book" ? honeypotBookRef.current : honeypotAuditRef.current;
    if (honeypot && honeypot.value) return;
    setHasAttemptedSubmit(true);
    if (!validateForm()) return;
    setSubmitting(true);
    setSubmitError(null);

    // Normalize URL: prepend https:// if missing
    const normalizedUrl = form.siteUrl.trim()
      ? (form.siteUrl.trim().match(/^https?:\/\//i) ? form.siteUrl.trim() : `https://${form.siteUrl.trim()}`)
      : "—";

    const payload = {
      _subject: `[${action === "book" ? "QUALIFIÉ" : "AUDIT"}] ${form.name.trim()} — ${labelForId(projectTypes, answers.type, "fr")}`,
      _replyto: form.email.trim(),
      _template: "table",
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || "—",
      siteUrl: normalizedUrl,
      projectType: labelForId(projectTypes, answers.type, "fr"),
      budget: labelForId(budgets, answers.budget, "fr"),
      timeline: labelForId(timelines, answers.timeline, "fr"),
      qualified: isQualified ? "OUI" : "NON",
      intent: action === "book" ? "Demande d'appel 30 min" : "Demande d'audit gratuit",
      lang: lang.toUpperCase(),
      submittedAt: new Date().toISOString(),
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(CONTACT.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      track(action === "book" ? "Lead Submitted - Qualified" : "Lead Submitted - Audit", {
        budget: answers.budget,
        timeline: answers.timeline,
        type: answers.type,
      });

      setSubmitted(true);
      if (action === "book") {
        // Small delay so the user sees the success state before Calendly opens
        setTimeout(() => {
          window.open(CONTACT.calendlyUrl, "_blank", "noopener,noreferrer");
        }, 400);
      }
    } catch (err) {
      setSubmitError(
        lang === "fr"
          ? "Impossible d'envoyer. Réessayez ou contactez-moi directement."
          : "Couldn't send. Try again or contact me directly."
      );
      track("Lead Submit Error", { action });
    } finally {
      setSubmitting(false);
    }
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

  const handleFieldChange = (name, value) => {
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: null }));
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(2, 6, 23, 0.88)" }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div
        className="relative w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label={lang === "fr" ? "Qualification du projet" : "Project qualification"}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/50 flex-shrink-0">
          <div>
            <h2 className="text-sm font-bold text-white">
              {submitted
                ? (lang === "fr" ? "C'est dans la boîte !" : "All set!")
                : step < 3
                  ? (lang === "fr" ? "2 min pour trouver la meilleure option" : "2 min to find your best option")
                  : (lang === "fr" ? "Plus qu'une étape" : "Last step")}
            </h2>
            {!submitted && (
              <p className="text-[11px] text-slate-500 mt-0.5">
                {lang === "fr"
                  ? `Étape ${Math.min(step + 1, 4)} / 4 — ${stepTitles.fr[Math.min(step, 3)]}`
                  : `Step ${Math.min(step + 1, 4)} / 4 — ${stepTitles.en[Math.min(step, 3)]}`}
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
        {!submitted && (
          <div className="h-0.5 bg-slate-800 flex-shrink-0">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300"
              style={{ width: `${((Math.min(step, 3) + 1) / 4) * 100}%` }}
            />
          </div>
        )}

        <div className="p-6 overflow-y-auto">
          {/* Step 0 — Type de projet */}
          {step === 0 && !submitted && (
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
          {step === 1 && !submitted && (
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
          {step === 2 && !submitted && (
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

          {/* Step 3 — Result + lead capture */}
          {step === 3 && !submitted && (
            isQualified ? (
              <div className="space-y-5">
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/30">
                      <Calendar size={26} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {lang === "fr" ? "Vous êtes au bon endroit." : "You're in the right place."}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lang === "fr"
                        ? "30 min — je vous dis honnêtement si je peux aider, à quel prix et quel délai."
                        : "30 min — I'll tell you honestly if I can help, the price and the timeline."}
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={(e) => { e.preventDefault(); submitLead("book"); }}
                  className="space-y-3"
                  noValidate
                >
                  {/* Honeypot */}
                  <input ref={honeypotBookRef} type="text" name="_honey" tabIndex={-1} autoComplete="off"
                         aria-hidden="true"
                         style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none", height: 0 }} />

                  <FieldInput
                    name="name"
                    icon={User}
                    placeholder={lang === "fr" ? "Votre nom" : "Your name"}
                    autoComplete="name"
                    required
                    value={form.name}
                    error={errors.name}
                    showError={hasAttemptedSubmit || touched.name}
                    onChange={handleFieldChange}
                    onBlur={handleBlur}
                  />
                  <FieldInput
                    name="email"
                    type="email"
                    icon={Mail}
                    placeholder={lang === "fr" ? "Votre email" : "Your email"}
                    autoComplete="email"
                    required
                    value={form.email}
                    error={errors.email}
                    showError={hasAttemptedSubmit || touched.email}
                    onChange={handleFieldChange}
                    onBlur={handleBlur}
                  />
                  <FieldInput
                    name="phone"
                    type="tel"
                    icon={PhoneIcon}
                    placeholder={lang === "fr" ? "Téléphone (optionnel)" : "Phone (optional)"}
                    autoComplete="tel"
                    value={form.phone}
                    error={errors.phone}
                    onChange={handleFieldChange}
                  />

                  {submitError && (
                    <p className="text-xs text-rose-400 text-center">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-bold shadow-lg shadow-violet-500/30 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Calendar size={18} />
                    )}
                    {submitting
                      ? (lang === "fr" ? "Envoi..." : "Sending...")
                      : (lang === "fr" ? "Réserver mon appel de 30 min" : "Book my 30-min call")}
                  </button>
                </form>

                <p className="text-[11px] text-center text-slate-500 leading-relaxed">
                  {lang === "fr"
                    ? "Gratuit · Sans engagement · Réponse sous 24h"
                    : "Free · No commitment · Reply within 24h"}
                </p>

                <BackButton toStep={2} />
              </div>
            ) : (
              <div className="space-y-5">
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700">
                      <FileSearch size={26} className="text-violet-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {lang === "fr" ? "Commençons par un audit." : "Let's start with an audit."}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lang === "fr"
                        ? "Nos forfaits débutent à 4 500 $. Envoyez-moi votre site — je vous prépare un audit Loom gratuit en 48h."
                        : "Our packages start at $4,500. Send me your site — I'll prepare a free Loom audit in 48h."}
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={(e) => { e.preventDefault(); submitLead("audit"); }}
                  className="space-y-3"
                  noValidate
                >
                  <input ref={honeypotAuditRef} type="text" name="_honey" tabIndex={-1} autoComplete="off"
                         aria-hidden="true"
                         style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none", height: 0 }} />

                  <FieldInput
                    name="name"
                    icon={User}
                    placeholder={lang === "fr" ? "Votre nom" : "Your name"}
                    autoComplete="name"
                    required
                    value={form.name}
                    error={errors.name}
                    showError={hasAttemptedSubmit || touched.name}
                    onChange={handleFieldChange}
                    onBlur={handleBlur}
                  />
                  <FieldInput
                    name="email"
                    type="email"
                    icon={Mail}
                    placeholder={lang === "fr" ? "Votre email" : "Your email"}
                    autoComplete="email"
                    required
                    value={form.email}
                    error={errors.email}
                    showError={hasAttemptedSubmit || touched.email}
                    onChange={handleFieldChange}
                    onBlur={handleBlur}
                  />
                  <FieldInput
                    name="siteUrl"
                    type="url"
                    icon={LinkIcon}
                    placeholder={lang === "fr" ? "URL de votre site (optionnel)" : "Your website URL (optional)"}
                    autoComplete="url"
                    value={form.siteUrl}
                    error={errors.siteUrl}
                    onChange={handleFieldChange}
                  />

                  {submitError && (
                    <p className="text-xs text-rose-400 text-center">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-violet-500/50 text-white font-semibold text-sm transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <FileSearch size={16} />
                    )}
                    {submitting
                      ? (lang === "fr" ? "Envoi..." : "Sending...")
                      : (lang === "fr" ? "Demander l'audit gratuit (48h)" : "Request free audit (48h)")}
                  </button>
                </form>

                <p className="text-[11px] text-center text-slate-500 leading-relaxed">
                  {lang === "fr"
                    ? "Je vous reviens dans les 48h — aucun engagement."
                    : "I'll get back to you within 48h — no strings attached."}
                </p>

                <BackButton toStep={2} />
              </div>
            )
          )}

          {/* Success state */}
          {submitted && (
            <div className="text-center space-y-5 py-4">
              <div className="flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/30">
                  <CheckCircle2 size={32} className="text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {isQualified
                    ? (lang === "fr" ? "On se parle bientôt." : "Talk to you soon.")
                    : (lang === "fr" ? "Audit en préparation." : "Audit in progress.")}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isQualified
                    ? (lang === "fr"
                        ? "J'ouvre mon calendrier dans un nouvel onglet. Choisissez le moment qui vous convient."
                        : "I'm opening my calendar in a new tab. Pick a time that works.")
                    : (lang === "fr"
                        ? "Je vous prépare votre audit Loom et je vous reviens par email dans les 48h."
                        : "I'm preparing your Loom audit and will email you back within 48h.")}
                </p>
              </div>

              {isQualified && (
                <button
                  onClick={() => window.open(CONTACT.calendlyUrl, "_blank", "noopener,noreferrer")}
                  className="text-sm text-violet-400 hover:text-violet-300 underline underline-offset-2"
                >
                  {lang === "fr" ? "Le calendrier ne s'est pas ouvert ?" : "Calendar didn't open?"}
                </button>
              )}

              <button
                onClick={close}
                className="w-full px-6 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm transition-all active:scale-95"
              >
                {lang === "fr" ? "Fermer" : "Close"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default QualificationModal;
