
import React, { useRef, useEffect } from 'react';
import { Zap, Users, Award, Code } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useFadeIn } from '@/hooks/useGSAP';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const values = [
  {
    icon: Zap,
    title: 'Eficiência',
    description: 'Automatizamos processos para que sua equipe possa focar no que realmente importa: o crescimento do negócio.',
  },
  {
    icon: Users,
    title: 'Parceria',
    description: 'Trabalhamos como uma extensão da sua equipe, garantindo que sua visão se torne uma realidade de sucesso.',
  },
  {
    icon: Award,
    title: 'Qualidade',
    description: 'Entregamos código limpo, documentado e soluções robustas que geram valor a longo prazo.',
  },
  {
    icon: Code,
    title: 'Inovação',
    description: 'Utilizamos as melhores tecnologias, como React, para construir soluções modernas e de alto impacto.',
  },
];

const About = () => {
  const heroRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const imageRef = useScrollAnimation({ from: { opacity: 0, scale: 0.9 }, to: { opacity: 1, scale: 1, duration: 0.8 } });
  const valuesHeaderRef = useScrollAnimation();
  const valuesGridRef = useRef(null);

  useEffect(() => {
    if (valuesGridRef.current) {
      const children = valuesGridRef.current.children;
      gsap.fromTo(children, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: valuesGridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }
  }, []);

  return (
    <>
      <SEO
        title="Sobre Nós"
        description="Conheça a Nidus, nossa missão de otimizar e inovar através de desenvolvimento web moderno e automação inteligente de processos."
        keywords="sobre nidus, agência de desenvolvimento, automação de processos, equipe nidus"
      />

      <div className="pt-24 sm:pt-32 bg-background text-foreground">
        <section 
          ref={heroRef}
          className="py-16 sm:py-20 px-6 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6">
            Nós somos a <span className="text-primary">Nidus</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Uma agência de desenvolvimento e automação dedicada a construir o futuro digital do seu negócio.
          </p>
        </section>

        <section className="py-20 bg-background/50 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div ref={missionRef}>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-6">
                  Nossa Missão: <span className="text-primary">Inovar e Otimizar</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A Nidus nasceu da convicção de que a tecnologia deve ser uma aliada estratégica. Nosso objetivo é libertar empresas de tarefas manuais e repetitivas, permitindo que elas se concentrem em inovação e crescimento.
                  </p>
                  <p>
                    Com expertise em desenvolvimento web moderno e automação de processos, criamos ecossistemas digitais coesos e eficientes. Construímos desde sites institucionais e plataformas complexas até a integração de todos os seus sistemas para que funcionem em perfeita harmonia.
                  </p>
                </div>
              </div>
              <div
                ref={imageRef}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-md h-96 rounded-lg overflow-hidden border border-border shadow-lg">
                  <img className="w-full h-full object-cover" alt="Equipe de desenvolvimento colaborando em um escritório moderno, com gráficos digitais sobrepostos." src="/about.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div
              ref={valuesHeaderRef}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam cada linha de código e cada projeto que entregamos.
              </p>
            </div>

            <div
              ref={valuesGridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 bg-card rounded-lg border border-border text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
