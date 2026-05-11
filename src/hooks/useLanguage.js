import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const getField = (field) => {
    if (typeof field === "string") return field;
    return field?.[lang] || field?.en || "";
  };

  return { lang, i18n, getField };
};
