import { MapPin, BookOpen, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Formations = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: language === "fr" ? "Programmes Spécialisés" : "Specialized Programs",
      description: language === "fr" ? "Formations complètes sur les enjeux juridiques du digital" : "Complete training on digital legal challenges",
    },
    {
      icon: Users,
      title: language === "fr" ? "Public Varié" : "Diverse Audience",
      description: t.formations.targets.join(", "),
    },
    {
      icon: MapPin,
      title: t.formations.locationsLabel,
      description: t.formations.locations.join(", "),
    },
    {
      icon: Award,
      title: language === "fr" ? "Expertise Reconnue" : "Recognized Expertise",
      description: language === "fr" ? "RGPD, cybersécurité, conformité des plateformes digitales" : "GDPR, cybersecurity, digital platform compliance",
    },
  ];

  return (
    <section id="formations" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4">
              {t.formations.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
              {t.formations.title}
            </h2>
            <div className="w-24 h-0.5 bg-secondary mb-8" />
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              {t.formations.description}
            </p>
            
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              {t.formations.availability}
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              {language === "fr" ? "Demander le programme" : "Request program"}
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