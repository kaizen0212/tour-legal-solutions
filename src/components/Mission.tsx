import { useLanguage } from "@/contexts/LanguageContext";

const Mission = () => {
  const { t, language } = useLanguage();

  const roles = language === "fr" ? [
    "Accompagner les entreprises et indépendants dans la mise en œuvre de projets stratégiques et opérationnels",
    "Assurer une veille réglementaire et fournir des solutions adaptées aux besoins spécifiques de chaque client",
    "Faciliter l'internationalisation des entreprises, en particulier en Afrique de l'Ouest et à Dubaï",
    "Collaborer avec des experts juridiques locaux pour garantir la conformité légale et réglementaire des projets",
  ] : [
    "Support companies and freelancers in implementing strategic and operational projects",
    "Ensure regulatory monitoring and provide solutions tailored to each client's specific needs",
    "Facilitate business internationalization, particularly in West Africa and Dubai",
    "Collaborate with local legal experts to ensure legal and regulatory compliance of projects",
  ];

  return (
    <section className="py-24 bg-primary relative">
      {/* Decorative */}
      <div className="absolute top-1/4 right-8 w-2 h-32 bg-secondary" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            {t.mission.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-8">
            {language === "fr" ? "Mon Rôle" : "My Role"}
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mb-12" />
          
          <p className="text-primary-foreground/80 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            {t.mission.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 border border-primary-foreground/10 p-6 flex items-start gap-4 hover:border-secondary/50 transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary-foreground font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-primary-foreground/80">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;