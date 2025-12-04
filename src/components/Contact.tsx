import { Phone, Mail, Globe, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "(+33) 07 58 75 45 07",
      href: "tel:+33758754507",
    },
    {
      icon: Mail,
      label: "Email",
      value: "btbusinessstrategy@gmail.com",
      href: "mailto:btbusinessstrategy@gmail.com",
    },
    {
      icon: Globe,
      label: "Site Web",
      value: "www.badaratoure.com",
      href: "https://www.badaratoure.com",
    },
  ];

  const locations = ["France", "Afrique de l'Ouest", "UAE"];

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8">
              Travaillons Ensemble
            </h2>
            <div className="w-24 h-0.5 bg-secondary mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Prêt à sécuriser et développer vos projets ? Contactez-moi pour discuter de vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-card p-8 text-center shadow-elegant hover:shadow-gold transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                <p className="text-foreground font-semibold">{item.value}</p>
              </a>
            ))}
          </div>

          <div className="bg-primary p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-secondary" />
              <span className="text-primary-foreground font-display text-xl">Zones d'intervention</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {locations.map((location, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold tracking-wider uppercase text-sm"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
