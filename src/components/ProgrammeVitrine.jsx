// src/components/ProgrammeVitrine.jsx
import { useLanguage } from "../hooks/useLanguage";
import { CONTACT } from "../constants/config";
import {
  Star,
  CheckCircle2,
  Calendar,
  Flame,
  Users,
  Camera,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const ProgrammeVitrine = () => {
  const { lang } = useLanguage();

  const benefits = lang === "fr"
    ? [
        { icon: TrendingUp, text: "Réduction de 15% sur le forfait choisi" },
        { icon: Camera, text: "Votre projet présenté en étude de cas détaillée sur mon portfolio" },
        { icon: Star, text: "Photos professionnelles de votre site intégrées dans la présentation" },
        { icon: Users, text: "Votre logo et témoignage mis en avant auprès de futurs clients" },
        { icon: CheckCircle2, text: "Paiement en 3 fois sans frais (40% / 30% / 30%)" },
        { icon: Calendar, text: "Priorité de démarrage — votre projet passe en tête de file" },
      ]
    : [
        { icon: TrendingUp, text: "15% discount on your chosen package" },
        { icon: Camera, text: "Your project featured as a detailed case study on my portfolio" },
        { icon: Star, text: "Professional screenshots of your site integrated into the showcase" },
        { icon: Users, text: "Your logo and testimonial highlighted to future clients" },
        { icon: CheckCircle2, text: "Payment in 3 installments, no fees (40% / 30% / 30%)" },
        { icon: Calendar, text: "Priority start — your project jumps to the front of the queue" },
      ];

  const criteria = lang === "fr"
    ? [
        "Entreprise réelle basée au Québec ou au Canada",
        "Votre activité est visible en ligne (réseaux, Google Maps, etc.)",
        "Vous acceptez que votre logo et résultats soient partagés dans mon portfolio",
        "Vous êtes prêt(e) à démarrer dans les 30 prochains jours",
      ]
    : [
        "Real business based in Quebec or Canada",
        "Your business has an online presence (social media, Google Maps, etc.)",
        "You agree to have your logo and results shared in my portfolio",
        "You're ready to start within the next 30 days",
      ];

  return (
    <section id="vitrine" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <Reveal>
          {/* Scarcity badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-400/40 backdrop-blur-sm">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </div>
              <Flame size={14} className="text-amber-400" />
              <span className="text-amber-200 text-sm font-semibold">
                {lang === "fr"
                  ? "Programme Vitrine — 2 places disponibles ce trimestre"
                  : "Showcase Program — 2 spots available this quarter"}
              </span>
            </div>
          </div>

          {/* Main card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-amber-500/20 rounded-3xl blur-2xl opacity-60" />

            <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-950/95 border border-violet-500/30 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f06_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f06_1px,transparent_1px)] bg-[size:3rem_3rem]" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
                {/* Left: What is it */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-400/30 text-violet-300 text-xs font-medium mb-5">
                    <Star size={12} fill="currentColor" />
                    {lang === "fr" ? "Offre exclusive" : "Exclusive offer"}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {lang === "fr" ? (
                      <>
                        Le{" "}
                        <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                          Programme Vitrine
                        </span>
                      </>
                    ) : (
                      <>
                        The{" "}
                        <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                          Showcase Program
                        </span>
                      </>
                    )}
                  </h2>

                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    {lang === "fr"
                      ? "Chaque trimestre, je sélectionne 2 entreprises pour devenir des projets vitrine de PrimeDev Studios. En échange d'un droit de présentation de votre projet dans mon portfolio, vous bénéficiez d'une réduction significative et d'une priorité de traitement."
                      : "Each quarter, I select 2 businesses to become showcase projects for PrimeDev Studios. In exchange for the right to present your project in my portfolio, you get a significant discount and priority handling."}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {lang === "fr"
                      ? "Ce n'est pas une offre promotionnelle générique — je sélectionne les projets qui me permettent de démontrer ma valeur auprès de futurs clients dans votre industrie. Votre succès est mon meilleur argument de vente."
                      : "This isn't a generic promotion — I select projects that let me demonstrate my value to future clients in your industry. Your success is my best sales argument."}
                  </p>

                  {/* Criteria */}
                  <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      {lang === "fr" ? "Critères de sélection" : "Selection criteria"}
                    </p>
                    <ul className="space-y-2.5">
                      {criteria.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle2 size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Benefits + CTA */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                      {lang === "fr" ? "Ce que vous obtenez" : "What you get"}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {benefits.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                          <li key={i} className="flex items-start gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/20 flex-shrink-0">
                              <Icon size={15} className="text-violet-400" />
                            </div>
                            <span className="text-sm text-slate-200 leading-relaxed pt-1">
                              {benefit.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Spots counter */}
                  <div className="mb-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-amber-200">
                        {lang === "fr" ? "Places disponibles ce trimestre" : "Spots available this quarter"}
                      </span>
                      <span className="text-2xl font-bold text-amber-400">2/2</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-2 rounded-full bg-amber-400/30">
                        <div className="h-full w-full rounded-full bg-amber-400" />
                      </div>
                      <div className="flex-1 h-2 rounded-full bg-amber-400/30">
                        <div className="h-full w-full rounded-full bg-amber-400" />
                      </div>
                    </div>
                    <p className="text-xs text-amber-300/70 mt-2">
                      {lang === "fr"
                        ? "Renouvellement au prochain trimestre"
                        : "Refreshes next quarter"}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href={CONTACT.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-900 font-bold text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:scale-105 active:scale-95"
                  >
                    <Calendar size={18} />
                    {lang === "fr"
                      ? "Postuler au Programme Vitrine — Appel gratuit"
                      : "Apply to Showcase Program — Free call"}
                  </a>
                  <p className="text-center text-xs text-slate-500 mt-3">
                    {lang === "fr"
                      ? "Je vous confirme votre éligibilité lors de l'appel de 30 min"
                      : "I'll confirm your eligibility during the 30-min call"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProgrammeVitrine;
