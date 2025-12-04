import { MapPin, BookOpen, Users, Award } from "lucide-react";

const Formations = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Programmes Spécialisés",
      description: "Formations complètes sur les enjeux juridiques du digital",
    },
    {
      icon: Users,
      title: "Public Varié",
      description: "Entreprises, institutions, juristes et porteurs de projet",
    },
    {
      icon: MapPin,
      title: "Disponibles à",
      description: "Dakar et Bamako, avec extension progressive en Afrique francophone",
    },
    {
      icon: Award,
      title: "Expertise Reconnue",
      description: "RGPD, cybersécurité, conformité des plateformes digitales",
    },
  ];

  return (
    <section id="formations" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4">
              Formations
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
              Droit du Numérique
            </h2>
            <div className="w-24 h-0.5 bg-secondary mb-8" />
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              Je propose des programmes de formation spécialisés destinés aux entreprises, 
              institutions, juristes et porteurs de projet souhaitant maîtriser les enjeux 
              juridiques du digital.
            </p>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              Ces formations sont actuellement disponibles à Dakar et à Bamako, et sont 
              appelées à se développer progressivement dans l'ensemble de l'Afrique francophone.
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              Demander le programme
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-muted p-6 border-l-4 border-secondary hover:shadow-elegant transition-shadow duration-300"
              >
                <feature.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-lg font-display font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formations;
