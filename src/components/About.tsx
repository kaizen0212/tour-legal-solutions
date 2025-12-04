import { GraduationCap, Globe, Briefcase } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formation",
      description: "Master 2 Droit des Affaires, MBA, Spécialisation Droit du Numérique",
    },
    {
      icon: Globe,
      title: "International",
      description: "France, Bamako, Dakar, Émirats Arabes Unis",
    },
    {
      icon: Briefcase,
      title: "Expérience",
      description: "+4 ans de conseil en stratégie et ingénierie juridique",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4">
              À Propos
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
              Votre Partenaire Juridique
            </h2>
            <div className="w-24 h-0.5 bg-secondary mx-auto" />
          </div>

          <div className="prose prose-lg max-w-none text-foreground/80 text-center mb-16 text-xl leading-relaxed">
            <p>
              Titulaire d'un Master 2 en Droit des Affaires et en Management Business & Administration, 
              complété par une spécialisation en Droit du Numérique, j'accompagne les entreprises et 
              entrepreneurs dans la sécurisation et le développement de leurs projets en France et à l'international.
            </p>
            <p className="mt-6">
              Depuis plus de 4 ans, j'interviens en tant que consultant en stratégie et en ingénierie 
              juridique auprès d'acteurs basés en France, à Bamako, à Dakar, ainsi qu'aux Émirats arabes unis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 text-center shadow-elegant hover:shadow-gold transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
