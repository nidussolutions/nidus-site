import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

import HeroSection from './home/sections/HeroSection';
import ServicesSection from './home/sections/ServicesSection';
import ContactSection from './home/sections/ContactSection';

const Home = () => {
  return (
    <>
      <SEO
        title="Software House | Desenvolvimento Web e Automação"
        description="Nidus é uma software house especializada em desenvolvimento web moderno, automação inteligente, APIs robustas e aplicativos mobile. Transformamos ideias em soluções digitais."
        keywords="software house, desenvolvimento web, automação, api, backend, mobile, react, node.js, aplicativos, nidus"
      />

      <div className="bg-background min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
