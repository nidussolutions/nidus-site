import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import PromotionPopup from '@/components/PromotionPopup';
import SEO from '@/components/SEO';

import HeroSection from './home/sections/HeroSection';
import ServicesPreview from './home/sections/ServicesPreview';
import TechStack from './home/sections/TechStack';
import Portfolio from './home/sections/Portfolio';
import WorkProcess from './home/sections/WorkProcess';
import Testimonials from './home/sections/Testimonials';

const Home = () => {
  const navigate = useNavigate();
  const targetRef = useRef(null);
  const heroRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        y: '50%',
        scrollTrigger: {
          trigger: targetRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem('nidus_promotion_seen')) {
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
        sessionStorage.setItem('nidus_promotion_seen', 'false');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToServices = useCallback(() => {
    document
      .getElementById('services-preview')
      ?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO
        title="Desenvolvimento Web e Automação Inteligente | Nidus"
        description="Transformamos ideias em soluções digitais inovadoras. Agência especialista em desenvolvimento web moderno, automação e tecnologia de ponta."
        keywords="desenvolvimento web, automação, react, typescript, node.js, nidus, agência digital, software house"
      />

      <PromotionPopup isOpen={isPopupOpen} onOpenChange={setIsPopupOpen} />

      <div ref={targetRef} className="bg-background">
        <div ref={heroRef}>
          <HeroSection
            onContact={() => navigate('/contact')}
            onServices={() => navigate('/services')}
            onScrollDown={scrollToServices}
          />
        </div>

        <ServicesPreview />

        <TechStack />

        <Portfolio />

        <WorkProcess />

        <Testimonials />

        <section className="border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <CallToAction />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
