import { useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, Code2, Sparkles, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const text1 = 'Transformando Ideias em';
const text2 = 'Soluções Digitais';

const stats = [
  { value: '5+', label: 'Anos de Experiência' },
  { value: '98%', label: 'Satisfação' },
  { value: '200+', label: 'Clientes Atendidos' },
];

const HeroSection = ({ onContact, onServices, onScrollDown }) => {
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const exploreRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const animDuration = isMobile ? 0.25 : 0.5;
    const animStagger = isMobile ? 0.02 : 0.04;
    
    const ctx = gsap.context(() => {
      // Badge animation
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          opacity: 0,
          y: isMobile ? 10 : 20,
          duration: animDuration,
        });
      }

      // Title letters animation - simplificado em mobile
      if (isMobile) {
        if (titleRef.current) {
          gsap.from(titleRef.current, {
            opacity: 0,
            y: 10,
            duration: animDuration,
            delay: 0.1,
          });
        }
      } else {
        if (titleRef.current) {
          const letters = titleRef.current.querySelectorAll('.letter');
          if (letters && letters.length > 0) {
            gsap.from(letters, {
              opacity: 0,
              y: 20,
              duration: 0.6,
              stagger: animStagger,
              delay: 0.2,
            });
          }
        }
      }

      // Description animation
      if (descRef.current) {
        gsap.from(descRef.current, {
          opacity: 0,
          y: isMobile ? 10 : 20,
          duration: animDuration,
          delay: isMobile ? 0.15 : 0.4,
        });
      }

      // Buttons animation
      if (buttonsRef.current && buttonsRef.current.children && buttonsRef.current.children.length > 0) {
        gsap.fromTo(buttonsRef.current.children,
          {
            opacity: 0,
            y: isMobile ? 10 : 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: animDuration,
            delay: isMobile ? 0.2 : 0.6,
            stagger: isMobile ? 0.05 : 0.1,
            ease: 'power2.out',
          }
        );
      }

      // Stats animation
      if (statsRef.current && statsRef.current.children && statsRef.current.children.length > 0) {
        gsap.from(statsRef.current.children, {
          opacity: 0,
          y: isMobile ? 10 : 20,
          duration: animDuration,
          delay: isMobile ? 0.25 : 0.8,
          stagger: isMobile ? 0.05 : 0.1,
        });
      }

      // Explore button scroll animation - desabilitado em mobile
      if (!isMobile && exploreRef.current) {
        gsap.to(exploreRef.current, {
          opacity: 0,
          y: 10,
          scrollTrigger: {
            trigger: exploreRef.current,
            start: 'top top',
            end: '+=80',
            scrub: true,
          },
        });
      }

      // Chevron bounce animation
      if (exploreRef.current) {
        const chevron = exploreRef.current.querySelector('.chevron');
        if (chevron) {
          gsap.to(chevron, {
            y: 6,
            duration: isMobile ? 1 : 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
          });
        }
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger && (
          st.trigger === exploreRef.current || 
          st.trigger.contains?.(exploreRef.current)
        )) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-3 sm:px-6 py-16 sm:py-0 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 mb-3 sm:mb-6 rounded-full bg-primary/10 border border-primary/20"
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="text-[0.7rem] sm:text-sm font-medium text-primary">
            Desenvolvimento Sob Medida
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground"
        >
          <span className="block">
            {text1.split('').map((char, i) => (
              <span key={i} className="letter inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              {text2.split('').map((char, i) => (
                <span key={i} className="letter inline-block">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </span>
        </h1>

        <p
          ref={descRef}
          className="max-w-3xl mx-auto text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 leading-relaxed px-1 sm:px-0"
        >
          Somos especialistas em desenvolvimento web moderno e automação inteligente.
          <br className="hidden md:block" />
          Criamos experiências digitais que impulsionam seu negócio.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center mb-8 sm:mb-16 w-full sm:w-auto px-2 sm:px-0"
          style={{ opacity: 1 }}
        >
          <Button size="lg" onClick={onContact} className="group w-full sm:w-auto">
            Agende uma Reunião
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button size="lg" variant="outline" onClick={onServices} className="group w-full sm:w-auto">
            <Code2 className="mr-2 w-5 h-5" />
            Nossos Serviços
          </Button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto w-full px-2 sm:px-0"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div className="text-[0.65rem] sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={exploreRef}
        className="absolute bottom-6 sm:bottom-10 z-10"
      >
        <Button
          variant="ghost"
          onClick={onScrollDown}
          className="flex flex-col hover:bg-transparent"
        >
          <span className="text-xs uppercase tracking-widest mb-1 text-muted-foreground">
            Explore
          </span>
          <div className="chevron">
            <ChevronDown className="text-muted-foreground" />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
