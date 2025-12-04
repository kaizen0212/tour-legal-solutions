import { useLanguage } from "@/contexts/LanguageContext";
import portrait from "@/assets/portrait.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-secondary/10" />
      <div className="absolute top-1/4 left-8 w-2 h-32 bg-secondary" />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-primary-foreground space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium">
                {t.hero.subtitle}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Badara Alou
                <span className="block text-secondary">Touré</span>
              </h1>
            </div>
            
            <div className="w-24 h-0.5 bg-secondary" />
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-light leading-relaxed max-w-xl">
              {t.hero.tagline}
            </p>
            
            <p className="text-primary-foreground/70 text-lg">
              {t.hero.locations}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold tracking-wider uppercase text-sm hover:bg-secondary/90 transition-all duration-300 hover:shadow-gold"
              >
                {t.hero.contactBtn}
              </a>
              <a
                href="#expertise"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary text-secondary font-semibold tracking-wider uppercase text-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                {t.hero.servicesBtn}
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative flex justify-center lg:justify-end" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-secondary/30 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/20 -z-20" />
              <img
                src={portrait}
                alt="Badara Alou Touré"
                className="w-80 md:w-96 h-auto object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;