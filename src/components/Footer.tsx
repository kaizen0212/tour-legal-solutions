import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Badara Touré" className="h-16 w-auto" />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} Badara Alou Touré - Business & Strategy
            </p>
            <p className="text-primary-foreground/50 text-xs mt-2">
              Consultant en Développement Stratégique et Juridique
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
