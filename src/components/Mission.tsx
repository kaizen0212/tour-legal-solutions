import { Target, TrendingUp, Shield, Lightbulb } from "lucide-react";

const Mission = () => {
  const roles = [
    "Accompagner les entreprises et indépendants dans la mise en œuvre de projets stratégiques et opérationnels",
    "Assurer une veille réglementaire et fournir des solutions adaptées aux besoins spécifiques de chaque client",
    "Faciliter l'internationalisation des entreprises, en particulier en Afrique de l'Ouest et à Dubaï",
    "Collaborer avec des experts juridiques locaux pour garantir la conformité légale et réglementaire des projets",
  ];

  return (
    <section className="py-24 bg-primary relative">
      {/* Decorative */}
      <div className="absolute top-1/4 right-8 w-2 h-32 bg-secondary" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Ma Mission
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-8">
            Mon Rôle
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mb-12" />
          
          <p className="text-primary-foreground/80 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Offrir un accompagnement stratégique, opérationnel et juridique permettant aux organisations 
            de sécuriser leurs activités, de gagner en performance et de saisir les opportunités liées 
            à l'innovation et à la transformation numérique.
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
