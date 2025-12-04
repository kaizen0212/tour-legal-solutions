import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="flex items-center gap-2 px-3 py-1.5 border border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 text-sm font-medium tracking-wider"
    >
      {language === "fr" ? "EN" : "FR"}
    </button>
  );
};

export default LanguageSwitcher;
