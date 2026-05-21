// Common types used across the project
export interface BilingualField {
  en: string;
  fr: string;
}

export type Language = "en" | "fr";

export interface Project {
  id: number;
  key: string;
  title: BilingualField;
  description: BilingualField;
  tech: string[];
  features: { en: string[]; fr: string[] };
  image: string;
  link: string;
  github?: string;
  icon: string;
  featured?: boolean;
  isClientProject?: boolean;
  isAIDemo?: boolean;
}

export interface Service {
  id: string;
  title: BilingualField;
  description: BilingualField;
  features: { en: string[]; fr: string[] };
  icon: string;
  price?: BilingualField;
  timeline?: BilingualField;
}

export interface PricingOffer {
  name: string;
  price: string;
  pages: string;
  timeline: string;
  features: string[];
  ideal: string;
  roi?: string;
  popular: boolean;
  color: string;
  accent: string;
  accentBg: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsappNumber: string;
  calendlyUrl: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
}

export interface CompanyInfo {
  name: string;
  location: string;
  website: string;
}
