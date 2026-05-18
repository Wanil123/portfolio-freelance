import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { CONTACT, COMPANY } from "../../constants/config";
import {
  Mail,
  ArrowRight,
  Send,
  User,
  DollarSign,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Globe,
} from "lucide-react";

const ContactForm = () => {
  const { lang } = useLanguage();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    hasWebsite: "",
    message: "",
    consent: false,
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [cooldown, setCooldown] = useState(false);
  const cooldownTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current);
    };
  }, []);

  // Validation helpers
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;

  const validationMessages = {
    nameRequired: lang === "fr" ? "Le nom est requis." : "Name is required.",
    nameMin: lang === "fr" ? "Le nom doit contenir au moins 2 caractères." : "Name must be at least 2 characters.",
    nameMax: lang === "fr" ? "Le nom ne peut pas dépasser 100 caractères." : "Name cannot exceed 100 characters.",
    emailRequired: lang === "fr" ? "L'email est requis." : "Email is required.",
    emailInvalid: lang === "fr" ? "Veuillez entrer un email valide." : "Please enter a valid email.",
    messageRequired: lang === "fr" ? "Le message est requis." : "Message is required.",
    messageMin: lang === "fr" ? "Le message doit contenir au moins 10 caractères." : "Message must be at least 10 characters.",
    messageMax: lang === "fr" ? "Le message ne peut pas dépasser 2000 caractères." : "Message cannot exceed 2000 characters.",
    networkError: lang === "fr"
      ? "Erreur de connexion. Vérifiez votre connexion internet et réessayez."
      : "Connection error. Check your internet connection and try again.",
    serverError: lang === "fr"
      ? "Erreur du serveur. Veuillez réessayer plus tard ou contactez-nous directement."
      : "Server error. Please try again later or contact us directly.",
  };

  const validateForm = () => {
    const newErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.name = validationMessages.nameRequired;
    } else if (trimmedName.length < 2) {
      newErrors.name = validationMessages.nameMin;
    } else if (trimmedName.length > 100) {
      newErrors.name = validationMessages.nameMax;
    }

    if (!trimmedEmail) {
      newErrors.email = validationMessages.emailRequired;
    } else if (!isValidEmail(trimmedEmail)) {
      newErrors.email = validationMessages.emailInvalid;
    }

    if (!trimmedMessage) {
      newErrors.message = validationMessages.messageRequired;
    } else if (trimmedMessage.length < 10) {
      newErrors.message = validationMessages.messageMin;
    } else if (trimmedMessage.length > 2000) {
      newErrors.message = validationMessages.messageMax;
    }

    if (!formData.consent) {
      newErrors.consent = lang === "fr"
        ? "Vous devez accepter la politique de confidentialité pour envoyer votre message."
        : "You must accept the privacy policy to send your message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const projectTypeOptions = [
    { value: "site-vitrine", label: lang === "fr" ? "Site vitrine" : "Business website" },
    { value: "ecommerce", label: lang === "fr" ? "Boutique en ligne" : "E-commerce store" },
    { value: "agent-ia", label: lang === "fr" ? "Agent IA réceptionniste" : "AI Receptionist Agent" },
    { value: "chatbot", label: lang === "fr" ? "Chatbot IA" : "AI Chatbot" },
    { value: "automatisation", label: lang === "fr" ? "Automatisation / CRM" : "Automation / CRM" },
    { value: "app-custom", label: lang === "fr" ? "Application sur mesure" : "Custom application" },
    { value: "autre", label: lang === "fr" ? "Autre" : "Other" },
  ];

  const budgetOptions = [
    { value: "< 3000", label: lang === "fr" ? "Moins de 3 000 $" : "Under $3,000" },
    { value: "3000-5000", label: lang === "fr" ? "3 000 $ - 5 000 $" : "$3,000 - $5,000" },
    { value: "5000-10000", label: lang === "fr" ? "5 000 $ - 10 000 $" : "$5,000 - $10,000" },
    { value: "> 10000", label: lang === "fr" ? "Plus de 10 000 $" : "Over $10,000" },
    { value: "not-sure", label: lang === "fr" ? "Pas encore défini" : "Not sure yet" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormStatus(null);

    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      projectType: formData.projectType.trim(),
      budget: formData.budget.trim(),
      timeline: formData.timeline.trim(),
      hasWebsite: formData.hasWebsite.trim(),
      message: formData.message.trim(),
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(CONTACT.formEndpoint, {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: trimmedData.name,
          email: trimmedData.email,
          projectType: trimmedData.projectType || (lang === "fr" ? "Non spécifié" : "Not specified"),
          budget: trimmedData.budget || (lang === "fr" ? "Non spécifié" : "Not specified"),
          timeline: trimmedData.timeline || (lang === "fr" ? "Non spécifié" : "Not specified"),
          hasWebsite: trimmedData.hasWebsite || (lang === "fr" ? "Non spécifié" : "Not specified"),
          message: trimmedData.message,
          _subject: lang === "fr"
            ? `Nouveau message de ${trimmedData.name} — ${COMPANY.name}`
            : `New message from ${trimmedData.name} — ${COMPANY.name}`,
          _replyto: trimmedData.email,
          _template: "table",
          _honeypot: "",
        }),
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", projectType: "", budget: "", timeline: "", hasWebsite: "", message: "", consent: false });
        setErrors({});
        setCooldown(true);
        cooldownTimerRef.current = setTimeout(() => setCooldown(false), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      if (error.name === "AbortError" || (error instanceof TypeError && error.message === "Failed to fetch")) {
        setFormStatus("network-error");
      } else {
        setFormStatus("error");
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50" />

      <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {lang === "fr"
              ? "Envoyez-nous un message"
              : "Send us a message"}
          </h3>
          <p className="text-slate-400 text-sm">
            {lang === "fr"
              ? "Décrivez votre projet et nous vous répondons sous 24h."
              : "Describe your project and we'll respond within 24h."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Honeypot anti-spam (hidden from users) */}
          <input
            type="text"
            name="_honeypot"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name */}
          <div>
            <label htmlFor="field-name" className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
              <User size={14} className="text-violet-400" />
              {lang === "fr" ? "Votre nom" : "Your name"} *
            </label>
            <input
              id="field-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              aria-required="true"
              maxLength={100}
              placeholder={lang === "fr" ? "Jean Dupont" : "John Smith"}
              className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${errors.name ? "border-red-500/50" : "border-slate-700/50"} text-base text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all`}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="field-email" className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
              <Mail size={14} className="text-violet-400" />
              {lang === "fr" ? "Votre email" : "Your email"} *
            </label>
            <input
              id="field-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              aria-required="true"
              inputMode="email"
              autoComplete="email"
              placeholder={lang === "fr" ? "email@exemple.com" : "email@example.com"}
              className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${errors.email ? "border-red-500/50" : "border-slate-700/50"} text-base text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="project-type-select" className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
              <FileText size={14} className="text-violet-400" />
              {lang === "fr" ? "Type de projet" : "Project type"}
            </label>
            <select
              id="project-type-select"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              aria-label={lang === "fr" ? "Type de projet" : "Project type"}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-base text-white focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-slate-900">
                {lang === "fr" ? "Sélectionnez un type" : "Select a type"}
              </option>
              {projectTypeOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-slate-900">
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="budget-select" className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
              <DollarSign size={14} className="text-violet-400" />
              {lang === "fr" ? "Budget estimé" : "Estimated budget"}
            </label>
            <select
              id="budget-select"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              aria-label={lang === "fr" ? "Budget estimé" : "Estimated budget"}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-base text-white focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-slate-900">
                {lang === "fr" ? "Sélectionnez une option" : "Select an option"}
              </option>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-slate-900">
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Timeline */}
          <div>
            <label htmlFor="timeline-select" className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
              <Clock size={14} className="text-violet-400" />
              {lang === "fr" ? "Quand souhaitez-vous démarrer?" : "When would you like to start?"}
            </label>
            <select
              id="timeline-select"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              aria-label={lang === "fr" ? "Quand souhaitez-vous démarrer?" : "When would you like to start?"}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-base text-white focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-slate-900">
                {lang === "fr" ? "Sélectionnez une option" : "Select an option"}
              </option>
              <option value="asap" className="bg-slate-900">{lang === "fr" ? "Dès que possible" : "ASAP"}</option>
              <option value="this-month" className="bg-slate-900">{lang === "fr" ? "Ce mois-ci" : "This month"}</option>
              <option value="1-3-months" className="bg-slate-900">{lang === "fr" ? "Dans 1 à 3 mois" : "In 1-3 months"}</option>
              <option value="exploring" className="bg-slate-900">{lang === "fr" ? "Je me renseigne" : "Just exploring"}</option>
            </select>
          </div>

          {/* Has Website */}
          <div>
            <label htmlFor="has-website-select" className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
              <Globe size={14} className="text-violet-400" />
              {lang === "fr" ? "Avez-vous déjà un site web?" : "Do you already have a website?"}
            </label>
            <select
              id="has-website-select"
              name="hasWebsite"
              value={formData.hasWebsite}
              onChange={handleInputChange}
              aria-label={lang === "fr" ? "Avez-vous déjà un site web?" : "Do you already have a website?"}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-base text-white focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-slate-900">
                {lang === "fr" ? "Sélectionnez une option" : "Select an option"}
              </option>
              <option value="yes" className="bg-slate-900">{lang === "fr" ? "Oui" : "Yes"}</option>
              <option value="no" className="bg-slate-900">{lang === "fr" ? "Non" : "No"}</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="field-message" className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
              <FileText size={14} className="text-violet-400" />
              {lang === "fr" ? "Décrivez votre projet" : "Describe your project"} *
            </label>
            <textarea
              id="field-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              aria-required="true"
              rows={3}
              placeholder={
                lang === "fr"
                  ? "J'ai besoin d'un site e-commerce pour vendre mes produits..."
                  : "I need an e-commerce site to sell my products..."
              }
              className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${errors.message ? "border-red-500/50" : "border-slate-700/50"} text-base text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none`}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Loi 25 — Consentement */}
          <div>
            <label className={`flex items-start gap-3 cursor-pointer group ${errors.consent ? "text-red-400" : "text-slate-400"}`}>
              <input
                type="checkbox"
                name="consent"
                id="field-consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-0.5 h-5 w-5 rounded border-slate-600 bg-slate-800 accent-violet-500 cursor-pointer flex-shrink-0"
              />
              <span className="text-xs leading-relaxed">
                {lang === "fr" ? (
                  <>J'accepte que mes informations soient utilisées pour me contacter au sujet de mon projet, conformément à la{" "}
                  <button type="button" onClick={() => document.dispatchEvent(new CustomEvent("open-privacy"))} className="underline underline-offset-2 hover:text-violet-400 transition-colors">
                    Politique de confidentialité
                  </button>
                  {" "}(Loi 25). *</>
                ) : (
                  <>I agree that my information will be used to contact me about my project, in accordance with the{" "}
                  <button type="button" onClick={() => document.dispatchEvent(new CustomEvent("open-privacy"))} className="underline underline-offset-2 hover:text-violet-400 transition-colors">
                    Privacy Policy
                  </button>
                  {" "}(Law 25). *</>
                )}
              </span>
            </label>
            {errors.consent && <p className="text-red-400 text-xs mt-1.5 ml-7">{errors.consent}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || cooldown}
            className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {lang === "fr" ? "Envoi en cours..." : "Sending..."}
              </>
            ) : cooldown ? (
              <>
                <CheckCircle2 size={18} />
                {lang === "fr" ? "Message envoyé!" : "Message sent!"}
              </>
            ) : (
              <>
                <Send size={18} />
                {lang === "fr" ? "Envoyer le message" : "Send message"}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </>
            )}
          </button>

          {/* Status Messages */}
          <div aria-live="polite" aria-atomic="true">
            {formStatus === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                <p className="text-sm text-emerald-300">
                  {lang === "fr"
                    ? "Message envoyé avec succès! Nous vous répondons sous 24h."
                    : "Message sent successfully! We'll respond within 24h."}
                </p>
              </div>
            )}

            {formStatus === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-300">
                  {validationMessages.serverError}
                </p>
              </div>
            )}

            {formStatus === "network-error" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-300">
                  {validationMessages.networkError}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
