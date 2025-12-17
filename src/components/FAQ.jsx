// src/components/FAQ.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  Clock,
  Globe,
  Headphones,
  DollarSign,
  Code2,
  Users,
  Server,
  Search
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const FAQ = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const faqs = [
    {
      icon: Clock,
      color: "from-blue-400 to-cyan-400",
      question: {
        fr: "Combien de temps prend la création d'un site web?",
        en: "How long does it take to create a website?",
      },
      answer: {
        fr: "Le délai dépend de la complexité du projet. Un site vitrine prend généralement 2-3 semaines, une boutique e-commerce 3-4 semaines, et une application sur mesure 4-8 semaines. Nous établissons un calendrier précis dès le début du projet.",
        en: "The timeline depends on project complexity. A business website typically takes 2-3 weeks, an e-commerce store 3-4 weeks, and a custom application 4-8 weeks. We establish a precise schedule at the start of the project.",
      },
    },
    {
      icon: Globe,
      color: "from-emerald-400 to-green-400",
      question: {
        fr: "Travaillez-vous avec des clients à l'extérieur du Québec?",
        en: "Do you work with clients outside Quebec?",
      },
      answer: {
        fr: "Absolument! Je travaille avec des clients partout au Canada, en Europe et à l'international. Toutes mes communications et livrables sont disponibles en français et en anglais. Les appels se font via Zoom ou Google Meet selon votre fuseau horaire.",
        en: "Absolutely! I work with clients across Canada, Europe, and internationally. All my communications and deliverables are available in both French and English. Calls are done via Zoom or Google Meet according to your timezone.",
      },
    },
    {
      icon: Headphones,
      color: "from-violet-400 to-purple-400",
      question: {
        fr: "Que se passe-t-il après la livraison du projet?",
        en: "What happens after the project is delivered?",
      },
      answer: {
        fr: "Tous mes forfaits incluent 30 jours de support post-lancement pour les ajustements mineurs et corrections de bugs. Après cette période, je propose des forfaits de maintenance mensuels ou des interventions ponctuelles selon vos besoins.",
        en: "All my packages include 30 days of post-launch support for minor adjustments and bug fixes. After this period, I offer monthly maintenance packages or one-time interventions based on your needs.",
      },
    },
    {
      icon: DollarSign,
      color: "from-amber-400 to-orange-400",
      question: {
        fr: "Quels sont vos tarifs?",
        en: "What are your rates?",
      },
      answer: {
        fr: "Mes forfaits commencent à 3 500 $ CAD pour un site vitrine et 5 500 $ CAD pour une boutique e-commerce. Les applications sur mesure sont établies sur devis. Je propose aussi des paiements en 2-3 versements pour faciliter votre budget.",
        en: "My packages start at $3,500 CAD for a business website and $5,500 CAD for an e-commerce store. Custom applications are quoted individually. I also offer payment in 2-3 installments to help with your budget.",
      },
    },
    {
      icon: Code2,
      color: "from-pink-400 to-rose-400",
      question: {
        fr: "Utilisez-vous des templates ou tout est sur mesure?",
        en: "Do you use templates or is everything custom?",
      },
      answer: {
        fr: "Je développe chaque projet sur mesure selon vos besoins spécifiques. Pas de templates génériques - chaque site est codé from scratch avec React, Vue.js ou Laravel pour garantir performance, évolutivité et unicité.",
        en: "I develop each project custom to your specific needs. No generic templates - each site is coded from scratch with React, Vue.js, or Laravel to ensure performance, scalability, and uniqueness.",
      },
    },
    {
      icon: Users,
      color: "from-cyan-400 to-blue-400",
      question: {
        fr: "Comment fonctionne le processus de collaboration?",
        en: "How does the collaboration process work?",
      },
      answer: {
        fr: "1) Appel découverte gratuit pour comprendre vos besoins. 2) Proposition détaillée avec prix et délais. 3) Dépôt de 50% pour démarrer. 4) Design et développement avec points réguliers. 5) Tests et révisions. 6) Mise en ligne et formation. 7) Paiement final et support 30 jours.",
        en: "1) Free discovery call to understand your needs. 2) Detailed proposal with pricing and timeline. 3) 50% deposit to start. 4) Design and development with regular check-ins. 5) Testing and revisions. 6) Launch and training. 7) Final payment and 30-day support.",
      },
    },
    {
      icon: Server,
      color: "from-indigo-400 to-violet-400",
      question: {
        fr: "Proposez-vous l'hébergement et le nom de domaine?",
        en: "Do you offer hosting and domain names?",
      },
      answer: {
        fr: "Je peux vous guider dans le choix de l'hébergement optimal (Netlify, Vercel, hébergement traditionnel) et vous aider à configurer votre domaine. Ces frais sont séparés et vous gardez le contrôle total de vos comptes.",
        en: "I can guide you in choosing optimal hosting (Netlify, Vercel, traditional hosting) and help you set up your domain. These costs are separate, and you maintain full control of your accounts.",
      },
    },
    {
      icon: Search,
      color: "from-teal-400 to-emerald-400",
      question: {
        fr: "Mon site sera-t-il optimisé pour le référencement (SEO)?",
        en: "Will my website be optimized for SEO?",
      },
      answer: {
        fr: "Oui, tous mes sites incluent une optimisation SEO de base: structure HTML sémantique, balises meta, sitemap, temps de chargement optimisé, responsive design et Core Web Vitals. Pour une stratégie SEO avancée, je peux vous recommander des spécialistes.",
        en: "Yes, all my sites include basic SEO optimization: semantic HTML structure, meta tags, sitemap, optimized loading times, responsive design, and Core Web Vitals. For advanced SEO strategy, I can recommend specialists.",
      },
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-200 text-xs md:text-sm font-medium mb-4">
            <HelpCircle size={14} />
            <span>{lang === "fr" ? "Questions fréquentes" : "Frequently asked questions"}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {lang === "fr" ? (
              <>
                Vos questions,{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  nos réponses
                </span>
              </>
            ) : (
              <>
                Your questions,{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  our answers
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Tout ce que vous devez savoir avant de démarrer votre projet web."
              : "Everything you need to know before starting your web project."}
          </p>
        </Reveal>

        {/* FAQ Grid - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <Reveal key={index} delay={index * 0.05}>
                <div
                  className={`group relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-violet-500/50 shadow-lg shadow-violet-500/10"
                      : "border-slate-800/50 hover:border-slate-700/50"
                  }`}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${faq.color} opacity-0 ${isOpen ? 'opacity-[0.03]' : 'group-hover:opacity-[0.02]'} transition-opacity duration-300`} />

                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="relative w-full flex items-start gap-4 p-5 md:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center shadow-lg ${isOpen ? 'shadow-violet-500/20' : ''}`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>

                    {/* Question text */}
                    <div className="flex-1 min-w-0 pt-1">
                      <span className={`block font-semibold text-sm md:text-base leading-snug transition-colors ${isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                        {faq.question[lang]}
                      </span>
                    </div>

                    {/* Chevron */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 mt-1 ${
                        isOpen
                          ? "bg-violet-500 rotate-180"
                          : "bg-slate-800/80 group-hover:bg-slate-700"
                      }`}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-colors ${
                          isOpen ? "text-white" : "text-slate-400"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 pl-[4.5rem] md:pl-[5rem]">
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {faq.answer[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/25 flex-shrink-0">
                  <Sparkles size={20} className="text-white md:hidden" />
                  <Sparkles size={24} className="text-white hidden md:block" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-white font-bold text-base md:text-lg">
                    {lang === "fr" ? "Une autre question?" : "Have another question?"}
                  </p>
                  <p className="text-xs md:text-sm text-slate-400">
                    {lang === "fr"
                      ? "Nous répondons en moins de 24h"
                      : "We respond within 24h"}
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all whitespace-nowrap text-sm md:text-base text-center"
              >
                {lang === "fr" ? "Poser une question" : "Ask a question"}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
