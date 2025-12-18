// src/components/TrustedBy.jsx
import { useTranslation } from "react-i18next";
import {
  Layout,
  ShoppingBag,
  Zap,
  Globe2,
  Code2,
  Clock,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

const TrustedBy = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const specializations = [
    {
      icon: Layout,
      name: lang === "fr" ? "Sites vitrines" : "Business websites",
      description: lang === "fr" ? "PME & professionnels" : "SMB & professionals",
      color: "from-violet-400 to-purple-500",
    },
    {
      icon: ShoppingBag,
      name: lang === "fr" ? "E-commerce" : "E-commerce",
      description: lang === "fr" ? "Boutiques en ligne" : "Online stores",
      color: "from-pink-400 to-rose-500",
    },
  ];

  const stats = [
    {
      value: "2-4",
      unit: lang === "fr" ? "sem." : "wks",
      label: lang === "fr" ? "Livraison" : "Delivery",
      icon: Clock,
    },
    {
      value: "FR/EN",
      unit: "",
      label: lang === "fr" ? "Bilingue" : "Bilingual",
      icon: Globe2,
    },
    {
      value: "100%",
      unit: "",
      label: lang === "fr" ? "Code sur mesure" : "Custom code",
      icon: Code2,
    },
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50 -z-10" />

      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Specialization Header */}
        <Reveal>
          <div className="text-center mb-10">
            <p className="text-sm text-slate-400 uppercase tracking-wider font-medium mb-2">
              {lang === "fr" ? "Notre spécialisation" : "Our specialization"}
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {lang === "fr"
                ? "Sites web modernes pour PME et e-commerce"
                : "Modern websites for SMBs and e-commerce"}
            </h3>
          </div>
        </Reveal>

        {/* Specializations Cards */}
        <Reveal delay={0.1}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-10">
            {specializations.map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <div
                  key={idx}
                  className="group flex items-center gap-4 px-6 py-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 hover:border-violet-500/30 transition-all"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${spec.color} bg-opacity-10 border border-white/10 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-0.5">
                      {spec.name}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {spec.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Stats Bar */}
        <Reveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50" />

            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/50 rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="text-center">
                      <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-2">
                        <Icon size={20} className="text-violet-400 hidden md:block" />
                        <Icon size={16} className="text-violet-400 md:hidden" />
                        <p className="text-2xl md:text-3xl font-bold text-white">
                          {stat.value}
                          {stat.unit && <span className="text-lg md:text-xl text-violet-400">{stat.unit}</span>}
                        </p>
                      </div>
                      <p className="text-xs md:text-sm text-slate-400">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-slate-800/50">
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                    {lang === "fr" ? "Satisfaction garantie" : "Satisfaction guaranteed"}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-medium">
                    {lang === "fr" ? "Support 30 jours" : "30-day support"}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
                    {lang === "fr" ? "Paiement flexible" : "Flexible payment"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustedBy;
