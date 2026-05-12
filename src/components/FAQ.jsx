// src/components/FAQ.jsx
import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { CONTACT } from "../constants/config";
import {
  ChevronDown,
  HelpCircle,
  Calendar,
  Clock,
  Globe,
  Headphones,
  DollarSign,
  Code2,
  Users,
  Server,
  Search,
  Shield,
  Zap,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const FAQ = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      icon: DollarSign,
      color: "from-amber-400 to-orange-400",
      question: {
        fr: "Puis-je payer en plusieurs fois?",
        en: "Can I pay in installments?",
      },
      answer: {
        fr: "Oui — je propose le paiement en 3 versements sans frais : 40% pour démarrer, 30% à mi-projet, 30% à la livraison. Cela s'applique à tous les forfaits. Pas de frais cachés, pas d'intérêts.",
        en: "Yes — I offer payment in 3 installments at no extra cost: 40% to start, 30% at mid-project, 30% at delivery. This applies to all packages. No hidden fees, no interest.",
      },
    },
    {
      icon: Clock,
      color: "from-blue-400 to-cyan-400",
      question: {
        fr: "Combien de temps prend la création d'un site web?",
        en: "How long does it take to create a website?",
      },
      answer: {
        fr: "Un site vitrine prend 2-3 semaines, une boutique e-commerce 3-4 semaines, et une application sur mesure 4-8 semaines. Je m'engage sur un délai précis dès le début — et si je le rate, vous recevez 10% de remise automatiquement.",
        en: "A business website takes 2-3 weeks, an e-commerce store 3-4 weeks, and a custom application 4-8 weeks. I commit to a precise deadline from the start — and if I miss it, you get a 10% discount automatically.",
      },
    },
    {
      icon: Shield,
      color: "from-rose-400 to-pink-400",
      question: {
        fr: "Et si je ne suis pas satisfait du résultat?",
        en: "What if I'm not satisfied with the result?",
      },
      answer: {
        fr: "Corrections illimitées dans la portée convenue du projet jusqu'à votre satisfaction complète — c'est dans le contrat. Je ne considère pas un projet comme terminé tant que vous n'êtes pas content. Et si le délai n'est pas respecté de mon côté, 10% de remise automatique.",
        en: "Unlimited revisions within the agreed project scope until you're fully satisfied — it's in the contract. I don't consider a project done until you're happy with it. And if I miss the deadline, you automatically get 10% back.",
      },
    },
    {
      icon: Zap,
      color: "from-violet-400 to-purple-400",
      question: {
        fr: "Pourquoi choisir un indépendant plutôt qu'une agence?",
        en: "Why choose a freelancer over an agency?",
      },
      answer: {
        fr: "Avec les grandes agences, vous communiquez souvent via des chefs de projet et plusieurs intermédiaires. Avec moi, vous travaillez directement avec la personne qui conçoit, développe et lance votre projet — pas d'intermédiaire, pas de pertes d'information, pas de marges gonflées. Résultat : plus rapide, moins cher, et vous savez toujours exactement qui est responsable.",
        en: "With larger agencies, you often communicate through account managers and multiple layers. With me, you work directly with the person designing, coding and launching your project — no middlemen, no miscommunications, no inflated margins. The result: faster, more affordable, and you always know exactly who's accountable.",
      },
    },
    {
      icon: Headphones,
      color: "from-emerald-400 to-green-400",
      question: {
        fr: "Que se passe-t-il après la livraison du projet?",
        en: "What happens after the project is delivered?",
      },
      answer: {
        fr: "Tous mes forfaits incluent 30 jours de support post-lancement pour les ajustements et corrections. Après cette période, je propose des interventions ponctuelles à 85$/h ou un forfait mensuel selon vos besoins.",
        en: "All my packages include 30 days of post-launch support for adjustments and fixes. After this period, I offer one-time interventions at $85/h or a monthly retainer based on your needs.",
      },
    },
    {
      icon: Globe,
      color: "from-cyan-400 to-blue-400",
      question: {
        fr: "Travaillez-vous avec des clients à l'extérieur du Québec?",
        en: "Do you work with clients outside Quebec?",
      },
      answer: {
        fr: "Oui — je travaille avec des clients partout au Canada et à l'international. Toutes les communications et livrables sont disponibles en français et en anglais. Les appels se font via Zoom selon votre fuseau horaire.",
        en: "Yes — I work with clients across Canada and internationally. All communications and deliverables are available in both French and English. Calls are done via Zoom based on your timezone.",
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
        fr: "Chaque projet est développé sur mesure selon vos besoins. Pas de templates génériques — chaque site est codé from scratch avec React, Vue.js ou Laravel pour garantir performance, unicité et évolutivité. Le code vous appartient à 100%.",
        en: "Every project is custom-built to your needs. No generic templates — each site is coded from scratch with React, Vue.js or Laravel for performance, uniqueness, and scalability. The code is 100% yours.",
      },
    },
    {
      icon: Users,
      color: "from-sky-400 to-blue-400",
      question: {
        fr: "Comment fonctionne le processus de collaboration?",
        en: "How does the collaboration process work?",
      },
      answer: {
        fr: "1) Appel gratuit de 30 min pour comprendre vos besoins. 2) Proposition détaillée avec prix et délais. 3) Acompte de 40% pour démarrer. 4) Design et développement avec points réguliers. 5) Tests et révisions. 6) Mise en ligne et formation. 7) Paiement final et support 30 jours.",
        en: "1) Free 30-min call to understand your needs. 2) Detailed proposal with pricing and timeline. 3) 40% deposit to start. 4) Design and development with regular check-ins. 5) Testing and revisions. 6) Launch and training. 7) Final payment and 30-day support.",
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
        fr: "Je vous guide dans le choix de l'hébergement optimal (Netlify, Vercel, hébergement traditionnel) et vous aide à configurer votre domaine. Ces frais sont séparés et vous gardez le contrôle total de vos comptes.",
        en: "I guide you in choosing optimal hosting (Netlify, Vercel, traditional hosting) and help you set up your domain. These costs are separate, and you maintain full control of your accounts.",
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
        fr: "Oui, tous les sites incluent une optimisation SEO de base : structure HTML sémantique, balises meta, sitemap, temps de chargement optimisé, responsive design et Core Web Vitals. Pour une stratégie SEO avancée (blogging, backlinks), je peux vous recommander des spécialistes.",
        en: "Yes, all sites include basic SEO optimization: semantic HTML structure, meta tags, sitemap, optimized loading times, responsive design, and Core Web Vitals. For advanced SEO strategy (blogging, backlinks), I can recommend specialists.",
      },
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-24 relative overflow-hidden">
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
                  réponses honnêtes
                </span>
              </>
            ) : (
              <>
                Your questions,{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  honest answers
                </span>
              </>
            )}
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {lang === "fr"
              ? "Tout ce que vous devez savoir avant de me confier votre projet."
              : "Everything you need to know before trusting me with your project."}
          </p>
        </Reveal>

        {/* FAQ - Two independent columns */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          {[faqs.slice(0, Math.ceil(faqs.length / 2)), faqs.slice(Math.ceil(faqs.length / 2))].map((column, colIndex) => (
            <div key={colIndex} className="flex-1 space-y-4 md:space-y-5">
              {column.map((faq, i) => {
                const index = colIndex * Math.ceil(faqs.length / 2) + i;
                const Icon = faq.icon;
                const isOpen = openIndex === index;

                return (
                  <Reveal key={index} delay={index * 0.05}>
                    <div
                      className={`group relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border rounded-2xl transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "border-violet-500/50 shadow-lg shadow-violet-500/10"
                          : "border-slate-800/50 hover:border-slate-700/50"
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${faq.color} opacity-0 ${isOpen ? 'opacity-[0.03]' : 'group-hover:opacity-[0.02]'} transition-opacity duration-300`} />

                      <button
                        id={`faq-question-${index}`}
                        onClick={() => toggleFAQ(index)}
                        className="relative w-full flex items-start gap-4 p-5 md:p-6 text-left"
                        aria-expanded={isOpen}
                      >
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center shadow-lg ${isOpen ? 'shadow-violet-500/20' : ''}`}
                        >
                          <Icon size={18} className="text-white" />
                        </div>

                        <div className="flex-1 min-w-0 pt-1">
                          <span className={`block font-semibold text-sm md:text-base leading-snug transition-colors ${isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                            {faq.question[lang]}
                          </span>
                        </div>

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

                      <div
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 pl-[3.5rem] md:pl-[5rem]">
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
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.4}>
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/25 flex-shrink-0">
                  <Calendar size={20} className="text-white md:hidden" />
                  <Calendar size={24} className="text-white hidden md:block" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-white font-bold text-base md:text-lg">
                    {lang === "fr" ? "Une autre question?" : "Have another question?"}
                  </p>
                  <p className="text-xs md:text-sm text-slate-400">
                    {lang === "fr"
                      ? "Je réponds en moins de 24h — ou appelez directement"
                      : "I respond within 24h — or call me directly"}
                  </p>
                </div>
              </div>
              <a
                href={CONTACT.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:scale-105 active:scale-95 whitespace-nowrap text-sm md:text-base text-center"
              >
                {lang === "fr" ? "Réserver un appel gratuit" : "Book a free call"}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
