import { Building, Shield, FileText, Users, Lock, Globe, Cpu, Scale, Briefcase, Pickaxe, Search, Building2, Handshake, TrendingUp, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Expertise = () => {
  const { t } = useLanguage();

  const businessIcons = [Building, FileText, Scale, Users];
  const digitalIcons = [Lock, Shield, Globe, Cpu];
  const strategicIcons = [Pickaxe, Search, Building2, Handshake, TrendingUp];

  return (
    <section id="expertise" className="py-24 bg-primary relative">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-2 h-32 bg-secondary" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium mb-4">
            {t.expertise.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-8">
            {t.expertise.title}
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Droit des Affaires */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-foreground">
                {t.expertise.businessLaw.title}
              </h3>
            </div>
            <ul className="space-y-5">
              {t.expertise.businessLaw.items.map((item, index) => {
                const Icon = businessIcons[index];
                return (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                      <Icon className="w-4 h-4 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                    </div>
                    <span className="text-primary-foreground/80 text-base pt-1">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Droit du Numérique */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                <Cpu className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-foreground">
                {t.expertise.digitalLaw.title}
              </h3>
            </div>
            <ul className="space-y-5">
              {t.expertise.digitalLaw.items.map((item, index) => {
                const Icon = digitalIcons[index];
                return (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                      <Icon className="w-4 h-4 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                    </div>
                    <span className="text-primary-foreground/80 text-base pt-1">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Conseil Stratégique */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                <Target className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-foreground">
                {t.expertise.strategicConsulting.title}
              </h3>
            </div>
            <ul className="space-y-5">
              {t.expertise.strategicConsulting.items.map((item, index) => {
                const Icon = strategicIcons[index];
                return (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-300">
                      <Icon className="w-4 h-4 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                    </div>
                    <span className="text-primary-foreground/80 text-base pt-1">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;