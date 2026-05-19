import { useLanguage } from "../../hooks/useLanguage";
import { CONTACT } from "../../constants/config";
import {
  Mail,
  Calendar,
  Check,
  Phone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "../ui/Reveal";

const ContactMethods = () => {
  const { lang } = useLanguage();

  const phoneRaw = CONTACT.phone.replace(/[\s\-]/g, "");
  const TEL = `tel:${phoneRaw}`;
  // `?body=` is the cross-platform form that works on iOS 14+ and Android.
  const SMS = `sms:${phoneRaw}?body=${encodeURIComponent(
    lang === "fr"
      ? "Bonjour Wanil, je veux discuter de mon projet web."
      : "Hello Wanil, I'd like to discuss my web project."
  )}`;

  const contactMethods = [
    {
      icon: Phone,
      label: lang === "fr" ? "Appel direct" : "Direct call",
      value: CONTACT.phone,
      href: TEL,
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
      hoverBorder: "hover:border-violet-400/60",
      hoverBg: "hover:bg-violet-500/10",
      iconColor: "text-violet-300",
      description: lang === "fr" ? "Je décroche — appel direct" : "I pick up — direct call",
      badge: lang === "fr" ? "Recommandé" : "Recommended",
    },
    {
      icon: MessageSquare,
      label: lang === "fr" ? "SMS / Texto" : "Text message",
      value: CONTACT.phone,
      href: SMS,
      bgColor: "bg-emerald-500/10",
      borderColor: "border-slate-700/30",
      hoverBorder: "hover:border-emerald-400/50",
      hoverBg: "hover:bg-emerald-500/5",
      iconColor: "text-emerald-300",
      description: lang === "fr" ? "Réponse sous 24h" : "Reply within 24h",
      badge: null,
    },
    {
      icon: Mail,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      bgColor: "bg-slate-700/20",
      borderColor: "border-slate-700/30",
      hoverBorder: "hover:border-slate-600/50",
      hoverBg: "hover:bg-slate-800/50",
      iconColor: "text-slate-300",
      description: lang === "fr" ? "Réponse sous 24h" : "Response within 24h",
      badge: null,
    },
  ];

  return (
    <>
      {/* Quick Contact Methods */}
      <Reveal delay={0.15}>
        <div className="relative">
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/50 rounded-2xl p-6 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-4">
              {lang === "fr" ? "Ou contactez-moi directement" : "Or contact me directly"}
            </h4>
            <div className="space-y-3">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <a
                    key={idx}
                    href={method.href}
                    className={`group flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border ${method.borderColor} ${method.hoverBorder} ${method.hoverBg} transition-all`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${method.bgColor} border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={18} className={method.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-white font-medium text-sm truncate">
                          {method.value}
                        </p>
                        {method.badge && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium">
                            {method.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">
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
              {lang === "fr" ? "Appel gratuit de 30 min" : "Free 30-minute call"}
            </h3>

            <p className="text-sm text-slate-300 text-center mb-4">
              {lang === "fr"
                ? "Budget, délais, faisabilité — je réponds à tout lors de l'appel."
                : "Budget, timeline, feasibility — I answer everything on the call."}
            </p>

            <button
              type="button"
              onClick={() => document.dispatchEvent(new Event("open-qualification"))}
              className="group w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:scale-105 active:scale-95"
            >
              <Calendar size={18} />
              {lang === "fr" ? "Réserver mon appel gratuit" : "Book my free call"}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <div className="mt-3 pt-3 border-t border-violet-500/20">
              <ul className="space-y-1.5">
                {[
                  lang === "fr" ? "Vos objectifs et besoins" : "Your goals and needs",
                  lang === "fr" ? "Ce qui vous coûte des leads" : "What's costing you leads",
                  lang === "fr" ? "Délais et budget — sans engagement" : "Timeline and budget — no commitment",
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
    </>
  );
};

export default ContactMethods;
