import { useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const text1 = 'Transformando Ideias em';
const text2 = 'Soluções Digitais';

const stats = [
  { value: '5+', label: 'Anos de Experiência', color: 'from-primary-500 to-primary-600' },
  { value: '98%', label: 'Satisfação', color: 'from-secondary-500 to-secondary-600' },
  { value: '200+', label: 'Clientes Atendidos', color: 'from-accent-500 to-accent-600' },
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
    const animDuration = isMobile ? 0.2 : 0.35;
    const animStagger = isMobile ? 0.015 : 0.025;
    
    const ctx = gsap.context(() => {
      // Badge animation
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          opacity: 0,
          y: isMobile ? 8 : 15,
          duration: animDuration,
        });
      }

      // Title letters animation - simplificado em mobile
      if (isMobile) {
        if (titleRef.current) {
          gsap.from(titleRef.current, {
            opacity: 0,
            y: 8,
            duration: animDuration,
            delay: 0.05,
          });
        }
      } else {
        if (titleRef.current) {
          const letters = titleRef.current.querySelectorAll('.letter');
          if (letters && letters.length > 0) {
            gsap.from(letters, {
              opacity: 0,
              y: 15,
              duration: 0.4,
              stagger: animStagger,
              delay: 0.1,
            });
          }
        }
      }

      // Description animation
      if (descRef.current) {
        gsap.from(descRef.current, {
          opacity: 0,
          y: isMobile ? 8 : 15,
          duration: animDuration,
          delay: isMobile ? 0.1 : 0.25,
        });
      }

      // Buttons animation
      if (buttonsRef.current && buttonsRef.current.children && buttonsRef.current.children.length > 0) {
        gsap.fromTo(buttonsRef.current.children,
          {
            opacity: 0,
            y: isMobile ? 8 : 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: animDuration,
            delay: isMobile ? 0.15 : 0.35,
            stagger: isMobile ? 0.04 : 0.08,
            ease: 'power2.out',
          }
        );
      }

      // Stats animation
      if (statsRef.current && statsRef.current.children && statsRef.current.children.length > 0) {
        gsap.from(statsRef.current.children, {
          opacity: 0,
          y: isMobile ? 8 : 15,
          duration: animDuration,
          delay: isMobile ? 0.2 : 0.45,
          stagger: isMobile ? 0.04 : 0.08,
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
            duration: isMobile ? 0.8 : 1.2,
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
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-3 sm:px-6 py-16 sm:py-0 relative overflow-hidden grain-light">
      {/* Subtle Vintage Pattern Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      
      {/* Elementos geométricos sutis Neo-Retro */}
      <div className="absolute top-20 left-[10%] w-24 h-24 rounded-full border border-primary-950 opacity-8" />
      <div className="absolute top-40 right-[15%] w-20 h-20 rotate-45 border border-secondary-500 opacity-10" />
      <div className="absolute bottom-40 left-[20%] w-32 h-32 rounded-2xl border border-accent-400 opacity-6" />
      
      {/* Orbs sutis com tons vintage */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-neutral-200 to-accent-400/20 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-secondary-500/15 to-neutral-100 rounded-full blur-3xl opacity-30" />

      {/* Content */}
      <div className="relative z-10">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent-500 border border-neutral-800 shadow-sm"
        >
          <Star className="w-4 h-4 text-neutral-800 fill-neutral-800" />
          <span className="text-sm font-display font-semibold text-neutral-800 tracking-wide">
            Desenvolvimento Sob Medida
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold tracking-tight mb-6"
          style={{
            letterSpacing: '-0.02em',
          }}
        >
          <span className="block text-neutral-900">
            {text1.split('').map((char, i) => (
              <span key={i} className="letter inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
          <span className="block mt-2" style={{
            background: 'linear-gradient(135deg, #C1440E 0%, #2A9D8F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {text2.split('').map((char, i) => (
              <span key={i} className="letter inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </h1>

        <p
          ref={descRef}
          className="max-w-2xl mx-auto text-base sm:text-xl md:text-2xl text-neutral-700 font-medium mb-10 leading-relaxed px-1 sm:px-0"
        >
          Somos especialistas em desenvolvimento web moderno e automação inteligente.
          <br className="hidden md:block" />
          Criamos experiências digitais que impulsionam seu negócio.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full sm:w-auto px-2 sm:px-0"
          style={{ opacity: 1 }}
        >
          <Button 
            size="lg" 
            onClick={onContact} 
            className="group w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white font-display font-semibold text-lg px-8 py-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Agende uma Reunião
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button 
            size="lg" 
            variant="outline" 
            onClick={onServices} 
            className="group w-full sm:w-auto bg-transparent hover:bg-secondary-500 hover:text-white text-neutral-900 border-2 border-neutral-900 font-display font-semibold text-lg px-8 py-6 rounded-lg transition-all"
          >
            Nossos Serviços
          </Button>
        </div>

        {/* Neo-Retro Stats Cards */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto w-full px-2 sm:px-0"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative grain-light bg-neutral-50 p-6 sm:p-8 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative">
                <div className={`text-4xl sm:text-5xl md:text-6xl font-display font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-sans font-medium text-neutral-600 leading-tight">
                  {stat.label}
                </div>
              </div>
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
          className="flex flex-col hover:bg-transparent group"
        >
          <span className="text-xs uppercase tracking-widest mb-1 text-neutral-700 font-display font-medium">
            Explore
          </span>
          <div className="chevron p-2 rounded-full border-2 border-neutral-900 bg-accent-500 group-hover:bg-secondary-500 transition-colors">
            <ChevronDown className="text-neutral-900" />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
