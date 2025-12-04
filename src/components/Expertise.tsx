import { Building, Shield, FileText, Users, Lock, Globe, Cpu, Scale } from "lucide-react";

const Expertise = () => {
  const businessLaw = [
    { icon: Building, text: "Création et structuration d'entreprise" },
    { icon: FileText, text: "Rédaction et analyse contractuelle" },
    { icon: Scale, text: "Gouvernance et conformité" },
    { icon: Users, text: "Accompagnement des opérations commerciales et partenariales" },
  ];

  const digitalLaw = [
    { icon: Lock, text: "Protection des données personnelles (RGPD & équivalents africains)" },
    { icon: Shield, text: "Conformité et cybersécurité" },
    { icon: Globe, text: "Réglementation des plateformes et services digitaux" },
    { icon: Cpu, text: "Accompagnement des projets innovants (SaaS, fintech, e-commerce, IA)" },
  ];

  return (
    <section id="expertise" className="py-24 bg-primary relative">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-2 h-32 bg-secondary" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            Domaines d'Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-8">
            Mes Compétences
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Droit des Affaires */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-10 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-foreground">
                Droit des Affaires
              </h3>
            </div>
            <ul className="space-y-6">
              {businessLaw.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-primary-foreground/80 text-lg pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Droit du Numérique */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-10 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                <Cpu className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-foreground">
                Droit du Numérique
              </h3>
            </div>
            <ul className="space-y-6">
              {digitalLaw.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                  </div>
                  <span className="text-primary-foreground/80 text-lg pt-1.5">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

// Adding missing import
import { Briefcase } from "lucide-react";
