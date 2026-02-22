// src/components/PrivacyPolicy.jsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X, Shield } from "lucide-react";

const PrivacyPolicy = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const content = lang === "fr" ? {
    title: "Mentions l\u00e9gales & Politique de confidentialit\u00e9",
    sections: [
      {
        heading: "\u00c9diteur du site",
        text: "PrimeDev Studios\nWanil Parfait \u2014 D\u00e9veloppeur web freelance\nMontr\u00e9al, QC, Canada\ninfo@prime-dev-studios.com",
      },
      {
        heading: "H\u00e9bergement",
        text: "Ce site est h\u00e9berg\u00e9 par Netlify, Inc. (San Francisco, CA, USA). Les donn\u00e9es transmises via le formulaire de contact sont trait\u00e9es par FormSubmit.co.",
      },
      {
        heading: "Collecte de donn\u00e9es",
        text: "Ce site ne collecte aucune donn\u00e9e personnelle via des cookies de suivi. Seules les informations soumises volontairement via le formulaire de contact (nom, email, message) sont collect\u00e9es dans le but exclusif de r\u00e9pondre \u00e0 votre demande.",
      },
      {
        heading: "Utilisation des donn\u00e9es",
        text: "Vos donn\u00e9es de contact sont utilis\u00e9es uniquement pour r\u00e9pondre \u00e0 vos demandes de projet. Elles ne sont jamais vendues, partag\u00e9es ou utilis\u00e9es \u00e0 des fins commerciales tierces.",
      },
      {
        heading: "Vos droits",
        text: "Conform\u00e9ment \u00e0 la Loi 25 du Qu\u00e9bec et au RGPD (pour les visiteurs europ\u00e9ens), vous disposez d\u2019un droit d\u2019acc\u00e8s, de rectification et de suppression de vos donn\u00e9es personnelles. Contactez-nous \u00e0 info@prime-dev-studios.com pour toute demande.",
      },
      {
        heading: "Propri\u00e9t\u00e9 intellectuelle",
        text: "L\u2019ensemble du contenu de ce site (textes, images, code, design) est la propri\u00e9t\u00e9 de PrimeDev Studios. Toute reproduction sans autorisation est interdite.",
      },
    ],
  } : {
    title: "Legal Notice & Privacy Policy",
    sections: [
      {
        heading: "Site Publisher",
        text: "PrimeDev Studios\nWanil Parfait \u2014 Freelance Web Developer\nMontreal, QC, Canada\ninfo@prime-dev-studios.com",
      },
      {
        heading: "Hosting",
        text: "This site is hosted by Netlify, Inc. (San Francisco, CA, USA). Data submitted through the contact form is processed by FormSubmit.co.",
      },
      {
        heading: "Data Collection",
        text: "This site does not collect any personal data through tracking cookies. Only information voluntarily submitted through the contact form (name, email, message) is collected solely to respond to your inquiry.",
      },
      {
        heading: "Use of Data",
        text: "Your contact information is used solely to respond to your project inquiries. It is never sold, shared, or used for third-party commercial purposes.",
      },
      {
        heading: "Your Rights",
        text: "In accordance with Quebec's Law 25 and GDPR (for European visitors), you have the right to access, rectify, and delete your personal data. Contact us at info@prime-dev-studios.com for any request.",
      },
      {
        heading: "Intellectual Property",
        text: "All content on this site (text, images, code, design) is the property of PrimeDev Studios. Any reproduction without authorization is prohibited.",
      },
    ],
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-slate-950 border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 md:p-6 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/30">
              <Shield size={18} className="text-violet-400" />
            </div>
            <h2 className="text-lg font-bold text-white">{content.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 overflow-y-auto max-h-[calc(85vh-80px)] space-y-6">
          {content.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-2">
                {section.heading}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-800/50">
            <p className="text-xs text-slate-500">
              {lang === "fr"
                ? `Derni\u00e8re mise \u00e0 jour : f\u00e9vrier 2026`
                : `Last updated: February 2026`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
