import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss, SiSupabase, SiPython, SiDocker, SiFigma } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB', bg: 'bg-cyan-400', border: 'border-cyan-600', description: 'Interfaces modernas' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', bg: 'bg-green-500', border: 'border-green-700', description: 'Backend robusto' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', bg: 'bg-blue-500', border: 'border-blue-700', description: 'Código seguro' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', bg: 'bg-cyan-500', border: 'border-cyan-700', description: 'Design system' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', bg: 'bg-emerald-400', border: 'border-emerald-600', description: 'Database & Auth' },
  { name: 'Python', icon: SiPython, color: '#3776AB', bg: 'bg-blue-600', border: 'border-blue-800', description: 'Automação' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', bg: 'bg-sky-500', border: 'border-sky-700', description: 'Deploy otimizado' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', bg: 'bg-red-500', border: 'border-red-700', description: 'Design & UX' },
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
    
    // Kill any existing tweens
    gsap.killTweensOf(card);
    if (icon) gsap.killTweensOf(icon);
    
    gsap.to(card, {
      y: isEntering ? -5 : 0,
      duration: 0.25,
      ease: 'power1.out',
      clearProps: isEntering ? '' : 'all'
    });
    
    if (icon) {
      gsap.to(icon, {
        rotate: isEntering ? 8 : 0,
        scale: isEntering ? 1.1 : 1,
        duration: 0.3,
        ease: 'power1.out',
        clearProps: isEntering ? '' : 'all'
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-neutral-50 to-neutral-100 grain-light relative">
      {/* Retro Decorative Elements */}
      <div className="absolute top-16 left-[5%] w-20 h-20 rounded-full border-4 border-secondary-300 opacity-15" />
      <div className="absolute bottom-20 right-[8%] w-28 h-28 rotate-12 border-4 border-primary-300 opacity-15" />
      
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div
          ref={headerRef}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-4 px-2 sm:px-0 text-neutral-900">
            Tecnologias de Ponta
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-medium max-w-2xl mx-auto px-3 sm:px-0">
            Utilizamos as ferramentas mais modernas e confiáveis do mercado para garantir a melhor qualidade
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-7">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                ref={(el) => (techRefs.current[index] = el)}
                onMouseEnter={(e) => handleTechHover(e, true)}
                onMouseLeave={(e) => handleTechHover(e, false)}
                className="group relative grain-light bg-white border-4 border-neutral-900 rounded-3xl p-5 sm:p-7 text-center shadow-retro hover:shadow-retro-lg transition-all duration-300"
              >
                <div className="relative z-10">
                  {/* Large colored circle with icon */}
                  <div
                    className={`tech-icon w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center rounded-full ${tech.bg} border-3 border-neutral-900 shadow-retro-sm`}
                  >
                    <Icon
                      className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                    />
                  </div>
                  
                  <h3 className="font-display font-bold text-base sm:text-lg mb-1 text-neutral-900">{tech.name}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium">{tech.description}</p>
                </div>

                {/* Corner decoration */}
                <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${tech.bg} opacity-50`} />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div
          ref={infoRef}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-secondary-400 border-3 border-neutral-900 rounded-full shadow-retro">
            <p className="text-neutral-900 font-display font-bold text-sm sm:text-base">
              E muito mais... Nossa stack é constantemente atualizada! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
