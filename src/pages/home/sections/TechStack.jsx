import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiSupabase, SiPython, SiDocker, SiFigma } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB', description: 'Interfaces modernas' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', description: 'Backend robusto' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: 'Código seguro' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', description: 'Design system' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', description: 'Database & Auth' },
  { name: 'Python', icon: SiPython, color: '#3776AB', description: 'Automação' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', description: 'Deploy otimizado' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', description: 'Design & UX' },
];

const TechStack = () => {
  const headerRef = useRef(null);
  const techRefs = useRef([]);
  const infoRef = useRef(null);

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

      // Tech items stagger animation
      techRefs.current.forEach((tech, index) => {
        if (tech) {
          gsap.fromTo(tech,
            { opacity: 0, y: isMobile ? 10 : 20 },
            {
              opacity: 1,
              y: 0,
              duration: animDuration,
              delay: isMobile ? index * 0.04 : index * 0.1,
              scrollTrigger: {
                trigger: tech,
                start: 'top 80%',
                once: true,
              }
            }
          );
        }
      });

      // Info animation
      gsap.fromTo(infoRef.current,
        { opacity: 0, y: isMobile ? 10 : 20 },
        {
          opacity: 1,
          y: 0,
          duration: animDuration,
          delay: isMobile ? 0.4 : 0.8,
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            once: true,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleTechHover = (e, isEntering) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.tech-icon');
    
    gsap.to(card, {
      y: isEntering ? -8 : 0,
      scale: isEntering ? 1.05 : 1,
      duration: 0.3,
      ease: 'power2.out'
    });
    
    if (icon) {
      gsap.to(icon, {
        rotate: isEntering ? 360 : 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div
          ref={headerRef}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
            Tecnologias de Ponta
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-3 sm:px-0">
            Utilizamos as ferramentas mais modernas e confiáveis do mercado para garantir a melhor qualidade
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                ref={(el) => (techRefs.current[index] = el)}
                onMouseEnter={(e) => handleTechHover(e, true)}
                onMouseLeave={(e) => handleTechHover(e, false)}
                className="group relative bg-card border rounded-xl p-4 sm:p-6 text-center hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div
                    className="tech-icon w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center"
                  >
                    <Icon
                      className="w-full h-full"
                      style={{ color: tech.color }}
                    />
                  </div>
                  
                  <h3 className="font-bold text-base sm:text-lg mb-1">{tech.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{tech.description}</p>
                </div>

                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div
          ref={infoRef}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-3xl mx-auto">
            E muito mais... Nossa stack é constantemente atualizada com as melhores práticas e ferramentas do mercado
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
