export const CONTACT = {
  email: "info@prime-dev-studios.com",
  phone: "+1 579-368-5230",
  calendlyUrl: "https://calendly.com/maiwanpar/30min",
  formEndpoint: "https://formsubmit.co/ajax/info@prime-dev-studios.com",
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

// Number of open spots — keep in one place so it can't drift between sections
export const SCARCITY_SPOTS = 2;

const MONTHS_FR = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const MONTHS_EN_LONG = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// End of the current calendar quarter — rolls forward automatically
function getQuarterEnd(date = new Date()) {
  const q = Math.floor(date.getMonth() / 3);
  const endMonth = q * 3 + 2;
  return new Date(date.getFullYear(), endMonth + 1, 0);
}

// Returns "jusqu'au 30 juin" / "through June 30" — always current quarter
export function formatScarcityDate(lang) {
  const end = getQuarterEnd();
  const day = end.getDate();
  if (lang === "fr") {
    return `jusqu'au ${day} ${MONTHS_FR[end.getMonth()]}`;
  }
  return `through ${MONTHS_EN_LONG[end.getMonth()]} ${day}`;
}

// Returns the full label "2 spots disponibles — jusqu'au 30 juin" / "2 spots available — through June 30"
export function formatScarcityLabel(lang) {
  const datePart = formatScarcityDate(lang);
  if (lang === "fr") {
    return `${SCARCITY_SPOTS} spots disponibles — ${datePart}`;
  }
  return `${SCARCITY_SPOTS} spots available — ${datePart}`;
}
