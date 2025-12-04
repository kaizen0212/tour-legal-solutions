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
          {/* Portrait + Name */}
          <div className="text-primary-foreground space-y-8 animate-fade-in">
            {/* Portrait above name */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 border-2 border-secondary/30 -z-10" />
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/20 -z-20" />
                <img
                  src={portrait}
                  alt="Badara Alou Touré"
                  className="w-64 md:w-80 h-auto object-cover shadow-2xl"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Badara Alou
                <span className="block text-secondary">Touré</span>
              </h1>
              <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium">
                {t.hero.subtitle}
              </p>
              <p className="text-secondary tracking-[0.3em] uppercase text-sm font-medium">
                {t.hero.tagline}
              </p>
            </div>
            
            <div className="w-24 h-0.5 bg-secondary" />
            
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

          {/* Vision Text */}
          <div className="text-primary-foreground space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">
              B.T. Business & Strategy
            </h2>
            <div className="w-20 h-0.5 bg-secondary" />
            <p className="text-primary-foreground/90 text-xl md:text-2xl leading-relaxed font-body">
              {t.hero.vision1}
            </p>
            <p className="text-primary-foreground/80 text-xl md:text-2xl leading-relaxed font-body">
              {t.hero.vision2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;