// src/components/offers/PricingCard.jsx
import {
  Layout,
  Check,
  ArrowRight,
  Clock,
  Star,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "../ui/Reveal";

const PricingCard = ({ offer, index, lang, activeTab, onContactClick }) => {
  const isAI = activeTab === "ai";
  const isMonthly = /\/(mois|mo)\b/i.test(offer.price);
  const isCustomPrice = offer.price === "Sur mesure" || offer.price === "Custom";
  const showStartingAt = /^(à partir|starting|from)/i.test(offer.price) || offer.price.endsWith("+");
  return (
    <div
      key={`${activeTab}-${offer.name}`}
      className="h-full"
    >
      <Reveal delay={index * 0.1}>
        <div
          className={`relative group h-full ${
            offer.popular ? "lg:-mt-4 lg:mb-4" : ""
          }`}
        >
          {/* Popular badge */}
          {offer.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold shadow-lg shadow-violet-500/30">
                <Star size={12} fill="currentColor" />
                <span>
                  {lang === "fr" ? "Plus populaire" : "Most popular"}
                </span>
              </div>
            </div>
          )}

          {/* Glow for popular */}
          {offer.popular && (
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-75" />
          )}

          {/* Card */}
          <div
            className={`relative h-full bg-gradient-to-br from-slate-900/90 to-slate-950/90 border ${
              offer.popular
                ? "border-violet-500/50"
                : "border-slate-800/50"
            } rounded-2xl p-6 md:p-8 flex flex-col hover:border-violet-400/50 transition-all duration-300 overflow-hidden`}
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent rounded-2xl transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Plan name */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                {offer.name}
              </h3>

              {/* Price */}
              <div className="mb-1">
                {showStartingAt && !isCustomPrice && (
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-400 uppercase tracking-wider">
                      {lang === "fr" ? "À partir de" : "Starting at"}
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent`}
                  >
                    {offer.price}
                  </span>
                </div>
              </div>

              {/* Meta info */}
              <div className="space-y-1.5 mb-6 pb-6 border-b border-slate-800/50">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Layout size={12} className="text-slate-500" />
                  <span>{offer.pages}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock size={12} className="text-violet-400/70" />
                  <span>
                    {lang === "fr" ? "Livraison" : "Delivery"}:{" "}
                    {offer.timeline}
                  </span>
                </div>
                {/* Only show installment promise on one-shot project pricing,
                    not on monthly AI subscriptions (regulatory + nonsensical). */}
                {!isCustomPrice && !isMonthly && !isAI && (
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <Shield size={12} />
                    <span>
                      {lang === "fr"
                        ? "Paiement en 3 fois sans frais"
                        : "Pay in 3 installments, no fees"}
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 text-sm text-slate-300 flex-1 mb-6">
                {offer.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className="flex-shrink-0 mt-0.5 text-emerald-400"
                    />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Ideal for */}
              <div className="mb-5 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                <p className="text-xs text-slate-400 mb-0.5 font-medium uppercase tracking-wider">
                  {lang === "fr" ? "Idéal pour" : "Ideal for"}
                </p>
                <p className="text-sm text-slate-200">{offer.ideal}</p>
              </div>

              {/* ROI context */}
              {offer.roi && (
                <div className="mb-5 flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                  <TrendingUp
                    size={14}
                    className="text-emerald-400 flex-shrink-0"
                  />
                  <p className="text-xs text-emerald-300 font-medium">
                    {offer.roi}
                  </p>
                </div>
              )}

              {/* CTA */}
              <button
                type="button"
                onClick={onContactClick}
                className={`group/btn w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl ${
                  offer.popular
                    ? "bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
                    : "bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-violet-500/50 text-white"
                } text-sm font-semibold transition-all sm:hover:scale-105 active:scale-95`}
              >
                {lang === "fr" ? "Réserver un appel gratuit" : "Book a free call"}
                <ArrowRight
                  size={14}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default PricingCard;
