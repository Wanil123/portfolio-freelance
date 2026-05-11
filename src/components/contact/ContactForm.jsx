import { useState } from "react";
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
} from "lucide-react";

const ContactForm = () => {
  const { lang } = useLanguage();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [cooldown, setCooldown] = useState(false);

  // Validation helpers
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validationMessages = {
    nameRequired: lang === "fr" ? "Le nom est requis." : "Name is required.",
    nameMin: lang === "fr" ? "Le nom doit contenir au moins 2 caracteres." : "Name must be at least 2 characters.",
    nameMax: lang === "fr" ? "Le nom ne peut pas depasser 100 caracteres." : "Name cannot exceed 100 characters.",
    emailRequired: lang === "fr" ? "L'email est requis." : "Email is required.",
    emailInvalid: lang === "fr" ? "Veuillez entrer un email valide." : "Please enter a valid email.",
    messageRequired: lang === "fr" ? "Le message est requis." : "Message is required.",
    messageMin: lang === "fr" ? "Le message doit contenir au moins 10 caracteres." : "Message must be at least 10 characters.",
    messageMax: lang === "fr" ? "Le message ne peut pas depasser 2000 caracteres." : "Message cannot exceed 2000 characters.",
    networkError: lang === "fr"
      ? "Erreur de connexion. Verifiez votre connexion internet et reessayez."
      : "Connection error. Check your internet connection and try again.",
    serverError: lang === "fr"
      ? "Erreur du serveur. Veuillez reessayer plus tard ou contactez-nous directement."
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const projectTypeOptions = [
    { value: "site-vitrine", label: lang === "fr" ? "Site vitrine" : "Business website" },
    { value: "ecommerce", label: lang === "fr" ? "Boutique en ligne" : "E-commerce store" },
    { value: "agent-ia", label: lang === "fr" ? "Agent IA receptionniste" : "AI Receptionist Agent" },
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
    { value: "not-sure", label: lang === "fr" ? "Pas encore defini" : "Not sure yet" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      message: formData.message.trim(),
    };

    try {
      const response = await fetch(CONTACT.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: trimmedData.name,
          email: trimmedData.email,
          projectType: trimmedData.projectType || (lang === "fr" ? "Non specifie" : "Not specified"),
          budget: trimmedData.budget || (lang === "fr" ? "Non specifie" : "Not specified"),
          message: trimmedData.message,
          _subject: lang === "fr"
            ? `Nouveau message de ${trimmedData.name} — ${COMPANY.name}`
            : `New message from ${trimmedData.name} — ${COMPANY.name}`,
          _replyto: trimmedData.email,
          _template: "table",
          _honeypot: "",
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
        setErrors({});
        setCooldown(true);
        setTimeout(() => setCooldown(false), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      if (error instanceof TypeError && error.message === "Failed to fetch") {
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
              ? "Decrivez votre projet et nous vous repondons sous 24h."
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
            <label className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
              <User size={14} className="text-violet-400" />
              {lang === "fr" ? "Votre nom" : "Your name"} *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              maxLength={100}
              placeholder={lang === "fr" ? "Jean Dupont" : "John Smith"}
              className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${errors.name ? "border-red-500/50" : "border-slate-700/50"} text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all`}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
              <Mail size={14} className="text-violet-400" />
              {lang === "fr" ? "Votre email" : "Your email"} *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder={lang === "fr" ? "email@exemple.com" : "email@example.com"}
              className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${errors.email ? "border-red-500/50" : "border-slate-700/50"} text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all`}
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
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-slate-900">
                {lang === "fr" ? "Selectionnez un type" : "Select a type"}
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
              {lang === "fr" ? "Budget estime" : "Estimated budget"}
            </label>
            <select
              id="budget-select"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              aria-label={lang === "fr" ? "Budget estime" : "Estimated budget"}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-slate-900">
                {lang === "fr" ? "Selectionnez une option" : "Select an option"}
              </option>
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-slate-900">
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
              <FileText size={14} className="text-violet-400" />
              {lang === "fr" ? "Decrivez votre projet" : "Describe your project"} *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder={
                lang === "fr"
                  ? "J'ai besoin d'un site e-commerce pour vendre mes produits..."
                  : "I need an e-commerce site to sell my products..."
              }
              className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${errors.message ? "border-red-500/50" : "border-slate-700/50"} text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none`}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
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
                {lang === "fr" ? "Message envoye!" : "Message sent!"}
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
                    ? "Message envoye avec succes! Nous vous repondons sous 24h."
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
