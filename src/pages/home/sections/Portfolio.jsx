import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-commerce de Alto Desempenho',
    description: 'Plataforma completa de vendas online com checkout otimizado e integração de pagamentos.',
    category: 'E-commerce',
    tags: ['React', 'Node.js', 'Stripe'],
    gradient: 'from-primary/10 to-secondary/10',
    metrics: { conversion: '+45%', speed: '95/100' },
  },
  {
    title: 'Sistema de Gestão Empresarial',
    description: 'Dashboard completo para gestão de operações, vendas e estoque em tempo real.',
    category: 'SaaS',
    tags: ['TypeScript', 'Supabase', 'Charts'],
    gradient: 'from-secondary/10 to-accent/10',
    metrics: { efficiency: '+60%', users: '500+' },
  },
  {
    title: 'Automação de Marketing',
    description: 'Sistema de automação de campanhas, leads e análise de performance para agências.',
    category: 'Automação',
    tags: ['Python', 'APIs', 'AI'],
    gradient: 'from-accent/10 to-primary/10',
    metrics: { time: '-70%', roi: '+180%' },
  },
  {
    title: 'App de Delivery Personalizado',
    description: 'Aplicativo mobile nativo para restaurantes com sistema de pedidos e tracking em tempo real.',
    category: 'Mobile',
    tags: ['React Native', 'Firebase', 'Maps'],
    gradient: 'from-primary/10 to-accent/10',
    metrics: { orders: '10k+', rating: '4.8★' },
  },
];

const Portfolio = () => {
  const headerRef = useRef(null);
  const projectsRef = useRef([]);
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

      // Projects stagger animation
      projectsRef.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(project,
            { opacity: 0, y: isMobile ? 15 : 30 },
            {
              opacity: 1,
              y: 0,
              duration: animDuration,
              delay: isMobile ? index * 0.05 : index * 0.1,
              scrollTrigger: {
                trigger: project,
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

  const handleHoverArrow = (e, isEntering) => {
    gsap.to(e.currentTarget, {
      scale: isEntering ? 1.1 : 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={headerRef}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-3 sm:px-0">
            Projetos que Impactam
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-3 sm:px-0">
            Conheça alguns dos projetos que desenvolvemos e os resultados alcançados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectsRef.current[index] = el)}
              className="group relative"
            >
              <div className="relative h-full p-5 sm:p-6 md:p-8 bg-card border rounded-2xl hover:border-primary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 mb-3 sm:mb-4 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-6 pt-4 border-t border-border">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div
                  className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onMouseEnter={(e) => handleHoverArrow(e, true)}
                  onMouseLeave={(e) => handleHoverArrow(e, false)}
                >
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Estes são apenas alguns exemplos. Cada projeto é único e personalizado.
          </p>
          <Button variant="outline" size="lg" className="group">
            Ver Mais Projetos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
