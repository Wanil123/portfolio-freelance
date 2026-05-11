import { useLanguage } from "../../hooks/useLanguage";
import { Globe2, Check, Clock } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const AvailabilityBadge = () => {
  const { lang } = useLanguage();

  const availability = [
    {
      icon: Globe2,
      text:
        lang === "fr"
          ? "Remote Canada \u00b7 Europe \u00b7 International"
          : "Remote Canada \u00b7 Europe \u00b7 International",
    },
    {
      icon: Clock,
      text: lang === "fr" ? "R\u00e9ponse en moins de 24h" : "Response within 24h",
    },
    {
      icon: Check,
      text: lang === "fr" ? "Consultation gratuite" : "Free consultation",
    },
  ];

  return (
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
  );
};

export default AvailabilityBadge;
