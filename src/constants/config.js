export const CONTACT = {
  email: "info@prime-dev-studios.com",
  phone: "+1 579-368-5230",
  calendlyUrl: "https://calendly.com/maiwanpar/30min",
};

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/wanil-parfait-b26889108/",
  github: "https://github.com/wanilparfait",
};

export const COMPANY = {
  name: "PrimeDev Studios",
  location: "Montréal, QC",
  website: "https://www.prime-dev-studios.com",
  neq: "2281463465",
};

// Number of showcase-program spots — used by the Programme Vitrine section,
// which is a genuinely defined offer with a fixed number of slots.
export const SCARCITY_SPOTS = 2;

// Honest availability badge for the Hero / About sections. A real, verifiable
// promise (24h response) instead of invented countdown scarcity — consistent
// with the brand's "I tell you the truth" positioning.
export function availabilityLabel(lang) {
  return lang === "fr"
    ? "Disponible — réponse sous 24 h"
    : "Available now — reply within 24h";
}
