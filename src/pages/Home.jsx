import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import PromotionPopup from '@/components/PromotionPopup';
import SEO from '@/components/SEO';

import HeroSection from './home/sections/HeroSection';
import ServicesPreview from './home/sections/ServicesPreview';
import TechStack from './home/sections/TechStack';
import WorkProcess from './home/sections/WorkProcess';
import Testimonials from './home/sections/Testimonials';

const Home = () => {
  const navigate = useNavigate();
  const targetRef = useRef(null);
  const heroRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    let animation;

    if (heroRef.current && targetRef.current) {
      // Parallax direto com scrub responsivo
      animation = gsap.to(heroRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: targetRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.3, // Responsivo mas suave
        },
      });
    }

    return () => {
      if (animation?.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      if (animation) {
        animation.kill();
      }
    };
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

        <WorkProcess />

        <Testimonials />

        <CallToAction />
        
        <Footer />
      </div>
    </>
  );
};

export default Home;
