import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, FileCode, Rocket, LineChart, Check } from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Descoberta',
    description: 'Entendemos seu negócio, desafios e objetivos através de reuniões e análises detalhadas.',
    details: ['Workshop de alinhamento', 'Mapeamento de requisitos', 'Definição de escopo'],
    bgColor: 'bg-primary-400',
    borderColor: 'border-primary-600',
  },
  {
    icon: FileCode,
    number: '02',
    title: 'Planejamento',
    description: 'Criamos a arquitetura técnica, design e cronograma do projeto com foco em resultados.',
    details: ['Prototipação e wireframes', 'Definição de tecnologias', 'Cronograma detalhado'],
    bgColor: 'bg-secondary-400',
    borderColor: 'border-secondary-600',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Desenvolvimento',
    description: 'Construímos sua solução com sprints ágeis, entregas incrementais e comunicação constante.',
    details: ['Sprints de 2 semanas', 'Code reviews rigorosos', 'Demos de progresso'],
    bgColor: 'bg-accent-500',
    borderColor: 'border-accent-700',
  },
  {
    icon: LineChart,
    number: '04',
    title: 'Lançamento & Crescimento',
    description: 'Deploy otimizado, monitoramento e suporte contínuo para garantir o sucesso do projeto.',
    details: ['Deploy com zero downtime', 'Monitoramento 24/7', 'Suporte e melhorias'],
    bgColor: 'bg-gradient-to-br from-primary-500 to-secondary-500',
    borderColor: 'border-neutral-900',
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
    gsap.killTweensOf(e.currentTarget);
    gsap.to(e.currentTarget, {
      y: isEntering ? -4 : 0,
      duration: 0.25,
      ease: 'power1.out',
      clearProps: isEntering ? '' : 'all'
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-neutral-50 relative grain-light">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div
          ref={headerRef}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-4 px-2 sm:px-0 text-neutral-900">
            Nossa Metodologia
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-medium max-w-2xl mx-auto px-3 sm:px-0">
            Um processo transparente e colaborativo do início ao fim
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop - Thicker retro style */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-secondary-400 to-accent-500 rounded-full" />

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
                      className="grain-light p-6 sm:p-8 bg-white border-4 border-neutral-900 rounded-3xl shadow-retro-lg hover:shadow-retro-xl transition-all duration-300 w-full"
                    >
                      <div className={`flex items-start gap-4 sm:gap-5 mb-4 sm:mb-5 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        {/* Large Number Badge */}
                        <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl ${step.bgColor} border-3 ${step.borderColor} shadow-retro-sm`}>
                          <span className="text-2xl sm:text-3xl font-display font-black text-white">{step.number}</span>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl sm:text-3xl font-display font-black mb-2 text-neutral-900">{step.title}</h3>
                          <div className={`w-16 h-1 ${step.bgColor} rounded-full ${isEven ? '' : 'md:ml-auto'}`} />
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-700 font-medium mb-5 sm:mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className={`space-y-2.5 ${isEven ? '' : 'md:text-right'}`}>
                        {step.details.map((detail) => (
                          <div
                            key={detail}
                            className={`flex items-center gap-2.5 ${isEven ? '' : 'md:flex-row-reverse'}`}
                          >
                            <div className={`w-6 h-6 flex items-center justify-center rounded-full ${step.bgColor} border-2 border-neutral-900 flex-shrink-0`}>
                              <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                            </div>
                            <span className="text-sm font-medium text-neutral-800">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot - Desktop - Larger retro style */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                    <div
                      ref={(el) => (dotsRef.current[index] = el)}
                      className={`w-6 h-6 rounded-full ${step.bgColor} border-4 border-neutral-900 shadow-retro-sm`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Retro CTA */}
        <div
          ref={ctaRef}
          className="mt-12 sm:mt-16 lg:mt-20 text-center p-8 sm:p-10 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-3xl border-4 border-neutral-900 shadow-retro-xl grain-light"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-black mb-3 text-white">Pronto para começar?</h3>
          <p className="text-base sm:text-lg text-white font-medium mb-3 sm:mb-4 px-4 sm:px-0">
            Vamos transformar sua ideia em realidade com um processo comprovado 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
