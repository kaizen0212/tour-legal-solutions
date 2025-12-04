import { GraduationCap, Globe, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: GraduationCap,
      title: t.about.highlights.formation.title,
      description: t.about.highlights.formation.description,
    },
    {
      icon: Globe,
      title: t.about.highlights.international.title,
      description: t.about.highlights.international.description,
    },
    {
      icon: Briefcase,
      title: t.about.highlights.experience.title,
      description: t.about.highlights.experience.description,
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4">
              {t.about.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
              {t.about.title}
            </h2>
            <div className="w-24 h-0.5 bg-secondary mx-auto" />
          </div>

          <div className="prose prose-lg max-w-none text-foreground/80 text-center mb-16 text-xl leading-relaxed">
            <p>{t.about.description1}</p>
            <p className="mt-6">{t.about.description2}</p>
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