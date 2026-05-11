// src/components/offers/AIStatsSection.jsx
import { Phone, Zap, TrendingUp } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { getAiStats } from "./OffersData";

const iconMap = { Phone, Zap, TrendingUp };

const AIStatsSection = ({ lang }) => {
  const stats = getAiStats(lang);

  return (
    <Reveal delay={0.15}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {stats.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={idx}
              className={`flex items-center gap-4 p-4 rounded-xl border ${item.bg} backdrop-blur-sm`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.bg} flex-shrink-0`}
              >
                <Icon size={20} className={item.color} />
              </div>
              <div>
                <p className={`text-2xl font-bold ${item.color}`}>
                  {item.stat}
                </p>
                <p className="text-xs text-slate-400">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
};

export default AIStatsSection;
