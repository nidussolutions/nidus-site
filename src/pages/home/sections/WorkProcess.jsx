import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, FileCode, Rocket, LineChart, Check } from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Descoberta',
    description: 'Entendemos seu negócio, desafios e objetivos através de reuniões e análises detalhadas.',
    details: ['Workshop de alinhamento', 'Mapeamento de requisitos', 'Definição de escopo'],
  },
  {
    icon: FileCode,
    title: 'Planejamento',
    description: 'Criamos a arquitetura técnica, design e cronograma do projeto com foco em resultados.',
    details: ['Prototipação e wireframes', 'Definição de tecnologias', 'Cronograma detalhado'],
  },
  {
    icon: Rocket,
    title: 'Desenvolvimento',
    description: 'Construímos sua solução com sprints ágeis, entregas incrementais e comunicação constante.',
    details: ['Sprints de 2 semanas', 'Code reviews rigorosos', 'Demos de progresso'],
  },
  {
    icon: LineChart,
    title: 'Lançamento & Crescimento',
    description: 'Deploy otimizado, monitoramento e suporte contínuo para garantir o sucesso do projeto.',
    details: ['Deploy com zero downtime', 'Monitoramento 24/7', 'Suporte e melhorias'],
  },
];

const WorkProcess = () => {
  const headerRef = useRef(null);
  const stepsRef = useRef([]);
  const dotsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const animDuration = isMobile ? 0.25 : 0.5;
    
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: isMobile ? 10 : 20 },
        {
          opacity: 1,
          y: 0,
          duration: animDuration,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            once: true,
          }
        }
      );

      // Steps animation
      stepsRef.current.forEach((step, index) => {
        if (step) {
          const isEven = index % 2 === 0;
          gsap.fromTo(step,
            { opacity: 0, x: isMobile ? 0 : (isEven ? -50 : 50), y: isMobile ? 15 : 0 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: animDuration,
              delay: isMobile ? index * 0.05 : index * 0.1,
              scrollTrigger: {
                trigger: step,
                start: 'top 80%',
                once: true,
              }
            }
          );
        }
      });

      // Timeline dots animation
      dotsRef.current.forEach((dot, index) => {
        if (dot) {
          gsap.fromTo(dot,
            { scale: 0 },
            {
              scale: 1,
              duration: isMobile ? 0.15 : 0.3,
              delay: isMobile ? index * 0.05 + 0.1 : index * 0.1 + 0.2,
              scrollTrigger: {
                trigger: dot,
                start: 'top 80%',
                once: true,
              }
            }
          );
        }
      });

      // CTA animation
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: isMobile ? 10 : 20 },
        {
          opacity: 1,
          y: 0,
          duration: animDuration,
          delay: isMobile ? 0.2 : 0.4,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            once: true,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleStepHover = (e, isEntering) => {
    gsap.to(e.currentTarget, {
      scale: isEntering ? 1.05 : 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div
          ref={headerRef}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
            Nossa Metodologia
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-3 sm:px-0">
            Um processo transparente e colaborativo do início ao fim
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.title}
                  ref={(el) => (stepsRef.current[index] = el)}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'md:text-right'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                    <div
                      onMouseEnter={(e) => handleStepHover(e, true)}
                      onMouseLeave={(e) => handleStepHover(e, false)}
                      className="inline-block p-5 sm:p-6 md:p-8 bg-card border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
                    >
                      <div className={`flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-primary mb-1">
                            Etapa {index + 1}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className={`space-y-2 ${isEven ? '' : 'md:text-right'}`}>
                        {step.details.map((detail) => (
                          <div
                            key={detail}
                            className={`flex items-center gap-2 ${isEven ? '' : 'md:flex-row-reverse'}`}
                          >
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot - Desktop */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                    <div
                      ref={(el) => (dotsRef.current[index] = el)}
                      className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="mt-12 sm:mt-16 lg:mt-20 text-center p-6 sm:p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Pronto para começar?</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 px-4 sm:px-0">
            Vamos transformar sua ideia em realidade com um processo comprovado
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
