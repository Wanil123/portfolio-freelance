// src/components/Contact.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  Zap,
  Calendar,
  Globe2,
  Check,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Clock,
  Send,
  User,
  DollarSign,
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const Contact = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WHATSAPP_LINK =
    "https://wa.me/15793685230?text=Bonjour%20Wanil,%20je%20veux%20parler%20de%20mon%20projet%20web.";

  const budgetOptions = [
    { value: "< 3000", label: lang === "fr" ? "Moins de 3 000 $" : "Under $3,000" },
    { value: "3000-5000", label: lang === "fr" ? "3 000 $ - 5 000 $" : "$3,000 - $5,000" },
    { value: "5000-10000", label: lang === "fr" ? "5 000 $ - 10 000 $" : "$5,000 - $10,000" },
    { value: "> 10000", label: lang === "fr" ? "Plus de 10 000 $" : "Over $10,000" },
    { value: "not-sure", label: lang === "fr" ? "Pas encore défini" : "Not sure yet" },
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: lang === "fr" ? "Email" : "Email",
      value: "info@prime-dev-studios.com",
      href: "mailto:info@prime-dev-studios.com",
      bgColor: "bg-violet-500/10",
      iconColor: "text-violet-300",
      description: lang === "fr" ? "Réponse sous 24h" : "Response within 24h",
    },
    {
      icon: MessageCircle,
      label: lang === "fr" ? "WhatsApp" : "WhatsApp",
      value: "+1 579-368-5230",
      href: WHATSAPP_LINK,
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-300",
      description: lang === "fr" ? "Réponse rapide" : "Fast response",
    },
    {
      icon: Phone,
      label: lang === "fr" ? "Téléphone" : "Phone",
      value: "+1 579-368-5230",
      href: "tel:+15793685230",
      bgColor: "bg-cyan-500/10",
      iconColor: "text-cyan-300",
      description:
        lang === "fr" ? "Disponible sur RDV" : "Available by appointment",
    },
  ];

  const availability = [
    {
      icon: Globe2,
      text:
        lang === "fr"
          ? "Remote Canada · Europe · International"
          : "Remote Canada · Europe · International",
    },
    {
      icon: Clock,
      text: lang === "fr" ? "Réponse en moins de 24h" : "Response within 24h",
    },
    {
      icon: Check,
      text: lang === "fr" ? "Consultation gratuite" : "Free consultation",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // Check if we're on Netlify (production) or local dev
    const isNetlify = window.location.hostname.includes('netlify.app') ||
                      window.location.hostname.includes('prime-dev') ||
                      window.location.hostname === 'primedevstudios.com' ||
                      window.location.hostname === 'www.primedevstudios.com';

    try {
      if (isNetlify) {
        // Use Netlify Forms in production
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "contact",
            ...formData,
          }).toString(),
        });

        if (response.ok) {
          setFormStatus("success");
          setFormData({ name: "", email: "", budget: "", message: "" });
        } else {
          throw new Error("Netlify form submission failed");
        }
      } else {
        // Use FormSubmit.co as fallback for local dev and other environments
        const response = await fetch("https://formsubmit.co/ajax/info@prime-dev-studios.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            budget: formData.budget || "Non spécifié",
            message: formData.message,
            _subject: `Nouveau message de ${formData.name} - PrimeDev Studios`,
          }),
        });

        if (response.ok) {
          setFormStatus("success");
          setFormData({ name: "", email: "", budget: "", message: "" });
        } else {
          throw new Error("FormSubmit submission failed");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <Sparkles size={14} />
            <span>
              {lang === "fr"
                ? "Parlons de votre projet"
                : "Let's talk about your project"}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Prêt à{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  démarrer?
                </span>
              </>
            ) : (
              <>
                Ready to{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  start?
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Parlez-nous de votre projet web. Nous vous revenons rapidement avec un plan d'action et une estimation détaillée."
              : "Tell us about your web project. We'll get back to you quickly with an action plan and detailed estimate."}
          </p>
        </Reveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Contact Form */}
          <Reveal delay={0.1}>
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

                {/* Netlify Form */}
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Hidden field for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

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
                      placeholder={lang === "fr" ? "Jean Dupont" : "John Smith"}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
                    />
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
                      placeholder="email@exemple.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
                    />
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all appearance-none cursor-pointer"
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

                  {/* Message */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-slate-300 mb-2 font-medium">
                      <FileText size={14} className="text-violet-400" />
                      {lang === "fr" ? "Décrivez votre projet" : "Describe your project"} *
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {lang === "fr" ? "Envoi en cours..." : "Sending..."}
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
                  {formStatus === "success" && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                      <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                      <p className="text-sm text-emerald-300">
                        {lang === "fr"
                          ? "Message envoyé avec succès! Nous vous répondrons sous 24h."
                          : "Message sent successfully! We'll respond within 24h."}
                      </p>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                      <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                      <p className="text-sm text-red-300">
                        {lang === "fr"
                          ? "Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement."
                          : "Error sending message. Please try again or contact us directly."}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Contact Methods & Calendly */}
          <div className="space-y-6">
            {/* Quick Contact Methods */}
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {lang === "fr" ? "Ou contactez-nous directement" : "Or contact us directly"}
                  </h4>
                  <div className="space-y-3">
                    {contactMethods.map((method, idx) => {
                      const Icon = method.icon;
                      return (
                        <a
                          key={idx}
                          href={method.href}
                          target={
                            method.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            method.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="group flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-violet-500/50 hover:bg-slate-800/50 transition-all"
                        >
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-lg ${method.bgColor} border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform`}
                          >
                            <Icon size={18} className={method.iconColor} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium text-sm truncate">
                              {method.value}
                            </p>
                            <p className="text-xs text-slate-500">
                              {method.description}
                            </p>
                          </div>
                          <ArrowRight
                            size={16}
                            className="text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all flex-shrink-0"
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Calendly */}
            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-50" />

                <div className="relative bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/50">
                      <Calendar size={28} className="text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white text-center mb-2">
                    {lang === "fr" ? "Préférez un appel?" : "Prefer a call?"}
                  </h3>

                  <p className="text-sm text-slate-300 text-center mb-4">
                    {lang === "fr"
                      ? "Réservez un appel gratuit de 30 minutes"
                      : "Book a free 30-minute call"}
                  </p>

                  <a
                    href="https://calendly.com/maiwanpar/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all"
                  >
                    <Calendar size={18} />
                    {lang === "fr" ? "Réserver un appel" : "Book a call"}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>

                  <div className="mt-4 pt-4 border-t border-violet-500/20">
                    <ul className="space-y-1.5">
                      {[
                        lang === "fr" ? "Vos objectifs et besoins" : "Your goals and needs",
                        lang === "fr" ? "Technologies recommandées" : "Recommended technologies",
                        lang === "fr" ? "Timeline et budget" : "Timeline and budget",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check size={12} className="text-emerald-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Availability badges */}
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {availability.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg bg-slate-900/50 border border-slate-800/50 text-[10px] md:text-xs text-slate-400"
                    >
                      <Icon size={10} className="text-violet-400 flex-shrink-0 md:hidden" />
                      <Icon size={12} className="text-violet-400 flex-shrink-0 hidden md:block" />
                      <span className="whitespace-nowrap">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Banner */}
        <Reveal delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-4 md:p-6 lg:p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 bg-opacity-10 border border-emerald-500/30 flex-shrink-0">
                    <Zap size={18} className="text-emerald-400 md:hidden" />
                    <Zap size={22} className="text-emerald-400 hidden md:block" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm md:text-base">
                      {lang === "fr"
                        ? "Réponse garantie sous 24h"
                        : "Guaranteed response within 24h"}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-400">
                      {lang === "fr"
                        ? "Nous répondons rapidement à chaque demande."
                        : "We respond quickly to every request."}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="text-right">
                    <p className="text-[10px] md:text-xs text-slate-500 mb-0.5 md:mb-1">
                      {lang === "fr" ? "Basé à" : "Based in"}
                    </p>
                    <p className="text-white font-semibold text-sm md:text-base">Montréal, QC</p>
                  </div>
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-xl md:text-2xl">
                    🇨🇦
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
