import React, { useRef, useEffect } from 'react';
import { Zap, Users, Award, Code } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const missionSectionRef = useRef(null);
  const missionTitleRef = useRef(null);
  const missionTextRef = useRef(null);
  const imageRef = useRef(null);
  const valuesHeaderRef = useRef(null);
  const valuesGridRef = useRef(null);

  useEffect(() => {
    // Hero section animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Título do hero com split de palavras
      if (heroTitleRef.current) {
        tl.fromTo(
          heroTitleRef.current,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out'
          }
        );
      }

      if (heroSubtitleRef.current) {
        tl.fromTo(
          heroSubtitleRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
          },
          '-=0.5'
        );
      }

      // Mission section com ScrollTrigger
      if (missionTitleRef.current && missionSectionRef.current) {
        gsap.fromTo(
          missionTitleRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: missionSectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // Parágrafos da missão com stagger
      const paragraphs = missionTextRef.current?.querySelectorAll('p');
      if (paragraphs) {
        gsap.fromTo(
          paragraphs,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: missionTextRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // Imagem com efeito parallax e scale
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.9, rotationY: -15 },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Parallax sutil na imagem durante scroll
      if (missionSectionRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: missionSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          }
        });
      }

      // Values header animation
      if (valuesHeaderRef.current) {
        gsap.fromTo(
          valuesHeaderRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: valuesHeaderRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
        }
      );

      // Values cards com stagger e hover effects
      if (valuesGridRef.current && valuesGridRef.current.children) {
        const cards = valuesGridRef.current.children;

        if (cards && cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.15,
              ease: 'back.out(1.4)',
              scrollTrigger: {
                trigger: valuesGridRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              }
            }
          );

        // Hover animations para cada card
        Array.from(cards).forEach((card) => {
          const icon = card.querySelector('.value-icon');

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)',
              duration: 0.3,
              ease: 'power2.out',
            });

            if (icon) {
              gsap.to(icon, {
                scale: 1.2,
                rotation: 360,
                duration: 0.5,
                ease: 'back.out(2)',
              });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              duration: 0.3,
              ease: 'power2.out',
            });

            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out',
              });
            }
          });
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Sobre Nós"
        description="Conheça a Nidus, nossa missão de otimizar e inovar através de desenvolvimento web moderno e automação inteligente de processos."
        keywords="sobre nidus, agência de desenvolvimento, automação de processos, equipe nidus"
      />

      <div className="pt-24 sm:pt-32 bg-background text-foreground">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center"
        >
          <h1
            ref={heroTitleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4 sm:mb-6 px-4 sm:px-0"
          >
            Nós somos a <span className="text-primary">Nidus</span>
          </h1>
          <p
            ref={heroSubtitleRef}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-0"
          >
            Uma agência de desenvolvimento e automação dedicada a construir o futuro digital do seu negócio.
          </p>
        </section>

        {/* Mission Section */}
        <section
          ref={missionSectionRef}
          className="py-12 sm:py-16 lg:py-20 bg-background/50 border-y border-border"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2
                  ref={missionTitleRef}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4 sm:mb-6"
                >
                  Nossa Missão: <span className="text-primary">Inovar e Otimizar</span>
                </h2>
                <div
                  ref={missionTextRef}
                  className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground"
                >
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
                <div className="relative w-full max-w-md h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden border border-border shadow-lg">
                  <img
                    className="w-full h-full object-cover"
                    alt="Equipe de desenvolvimento colaborando em um escritório moderno, com gráficos digitais sobrepostos."
                    src="/about.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={valuesHeaderRef}
              className="text-center mb-10 sm:mb-12 lg:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-3 sm:mb-4 px-4 sm:px-0">
                Nossos Valores
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Os princípios que guiam cada linha de código e cada projeto que entregamos.
              </p>
            </div>

            <div
              ref={valuesGridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-5 sm:p-6 bg-card rounded-lg border border-border text-center shadow-sm cursor-pointer"
                >
                  <div className="value-icon flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 mx-auto mb-3 sm:mb-4">
                    <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-2">{value.title}</h3>
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