import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Packs from "@/components/Packs";
import Formations from "@/components/Formations";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Mission />
      <Packs />
      <Formations />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
