import { useState } from "react";
import { Rocket, Calendar, FileCheck, X } from "lucide-react";

interface Pack {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  content: string[];
}

const packs: Pack[] = [
  {
    id: "express",
    icon: Rocket,
    title: "Pack Lancement Express",
    subtitle: "Pour entrepreneurs qui démarrent",
    description: "Idéal pour les entrepreneurs qui démarrent ou veulent se mettre en conformité rapidement.",
    content: [
      "Analyse rapide de la situation juridique de l'entreprise",
      "Aide à choisir la forme juridique adaptée",
      "Rédaction des documents de base (statuts, mentions légales, CGV simples)",
      "Conseils pour éviter les erreurs fréquentes au démarrage",
      "30 minutes d'appel de suivi",
    ],
  },
  {
    id: "serenite",
    icon: Calendar,
    title: "Pack Sérénité Mensuelle",
    subtitle: "Suivi régulier",
    description: "Pour les petites entreprises et indépendants qui veulent un suivi régulier et éviter les surprises.",
    content: [
      "Assistance illimitée par mail sur des questions juridiques courantes",
      "Relecture ou création de contrats simples (3 documents par mois inclus)",
      "Audit juridique trimestriel (point sur conformité, échéances)",
      "1 appel mensuel de 30 minutes pour conseils personnalisés",
    ],
  },
  {
    id: "pro",
    icon: FileCheck,
    title: "Pack Contrats Pro",
    subtitle: "Documents solides",
    description: "Pour les sociétés qui ont besoin de documents solides pour sécuriser leurs relations commerciales.",
    content: [
      "Rédaction ou révision de 3 contrats au choix (contrat client, prestataire, confidentialité, partenariat)",
      "Conseils personnalisés pour chaque contrat",
    ],
  },
];

const Packs = () => {
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);

  return (
    <section id="packs" className="py-24 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Nos Offres
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
            Nos Packs
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mb-8" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des solutions adaptées à chaque étape de votre développement
          </p>
        </div>

        {/* Pack Bubbles */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {packs.map((pack) => (
            <button
              key={pack.id}
              onClick={() => setSelectedPack(pack)}
              className="group relative"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary flex flex-col items-center justify-center text-center p-6 shadow-elegant hover:shadow-gold transition-all duration-500 transform hover:scale-105 group-hover:bg-secondary cursor-pointer">
                <pack.icon className="w-10 h-10 text-secondary group-hover:text-secondary-foreground mb-3 transition-colors duration-300" />
                <span className="text-primary-foreground group-hover:text-secondary-foreground text-sm md:text-base font-display font-semibold leading-tight transition-colors duration-300">
                  {pack.title.split(" ").slice(0, 2).join(" ")}
                </span>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Cliquez sur une bulle pour découvrir les détails
        </p>
      </div>

      {/* Modal */}
      {selectedPack && (
        <div
          className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPack(null)}
        >
          <div
            className="bg-card max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-primary p-8 relative">
              <button
                onClick={() => setSelectedPack(null)}
                className="absolute top-4 right-4 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-secondary flex items-center justify-center">
                  <selectedPack.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary-foreground">
                    {selectedPack.title}
                  </h3>
                  <p className="text-secondary">{selectedPack.subtitle}</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-foreground/80 text-lg mb-6">{selectedPack.description}</p>
              
              <h4 className="font-display font-semibold text-primary mb-4 text-lg">Contenu :</h4>
              <ul className="space-y-3">
                {selectedPack.content.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href="#contact"
                  onClick={() => setSelectedPack(null)}
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  Réserver un appel
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packs;
