import React, { useRef, useEffect } from 'react';
import { Code, Zap, CheckCircle, Smartphone, Palette, Briefcase, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { icon: Code, title: 'Desenvolvimento Web Sob Medida', description: 'Criamos sites, landing pages e sistemas web com React e outras tecnologias de ponta, com foco em performance e SEO.', features: ['Sites Institucionais', 'Landing Pages de Conversão', 'Plataformas Web Complexas', 'Otimização de Performance (Core Web Vitals)'], },
  { icon: Zap, title: 'Automação de Processos', description: 'Desenvolvemos workflows de automação para conectar suas ferramentas, eliminar tarefas manuais e otimizar a eficiência operacional.', features: ['Integração de APIs', 'Automação de Marketing e Vendas', 'Sincronização de Dados', 'Processos de Onboarding Automatizados'], },
  { icon: Smartphone, title: 'Desenvolvimento Mobile', description: 'Construímos aplicativos para iOS e Android com React Native, oferecendo uma experiência nativa com um código-base unificado.', features: ['Apps para iOS e Android', 'Interface Responsiva', 'Notificações Push', 'Integração com Hardware Nativo'], },
  { icon: Database, title: 'Backend e APIs', description: 'Desenvolvemos a espinha dorsal de suas aplicações com Node.js e Supabase, garantindo escalabilidade e segurança.', features: ['APIs REST e GraphQL', 'Bancos de Dados (SQL & NoSQL)', 'Autenticação e Autorização', 'Arquitetura de Microsserviços'], },
  { icon: Palette, title: 'UI/UX Design', description: 'Projetamos interfaces intuitivas e esteticamente agradáveis que melhoram a experiência do usuário e fortalecem sua marca.', features: ['Pesquisa com Usuários', 'Wireframing e Prototipagem', 'Design Systems', 'Testes de Usabilidade'], },
  { icon: Briefcase, title: 'Consultoria Estratégica', description: 'Analisamos seus desafios e oferecemos um roadmap tecnológico claro para alinhar suas ferramentas e processos aos seus objetivos de negócio.', features: ['Diagnóstico de Processos', 'Seleção de Ferramentas (Stack)', 'Planejamento de Arquitetura', 'Mentoria Técnica'], },
];

const Services = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const servicesGridRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const ctaTextRef = useRef(null);
  const ctaButtonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const heroTl = gsap.timeline();

      if (heroTitleRef.current) {
        heroTl.fromTo(
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
        heroTl.fromTo(
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

      // Services grid animations
      if (servicesGridRef.current && servicesGridRef.current.children) {
        const cards = Array.from(servicesGridRef.current.children);
        const triggerElement = servicesGridRef.current;

        if (cards && cards.length > 0 && triggerElement) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: 'back.out(1.3)',
              scrollTrigger: {
                trigger: triggerElement,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              }
            }
          );

          // Hover animations para cada card
          cards.forEach((card) => {
            const icon = card.querySelector('.service-icon');
            const features = card.querySelectorAll('.service-feature');

            const handleMouseEnter = () => {
              gsap.to(card, {
                y: -8,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)',
                borderColor: 'rgba(139, 92, 246, 0.5)',
                duration: 0.3,
                ease: 'power2.out',
              });

              if (icon) {
                gsap.to(icon, {
                  scale: 1.15,
                  rotation: 5,
                  duration: 0.4,
                  ease: 'back.out(2)',
                });
              }

              if (features.length > 0) {
                gsap.to(features, {
                  x: 5,
                  duration: 0.3,
                  stagger: 0.05,
                  ease: 'power2.out',
                });
              }
            };

            const handleMouseLeave = () => {
              gsap.to(card, {
                y: 0,
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                borderColor: 'hsl(var(--border))',
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

              if (features.length > 0) {
                gsap.to(features, {
                  x: 0,
                  duration: 0.3,
                  ease: 'power2.out',
                });
              }
            };

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
          });
        }
      }

      // CTA section animations
      if (ctaTitleRef.current && ctaSectionRef.current) {
        const titleElement = ctaTitleRef.current;
        const sectionElement = ctaSectionRef.current;
        gsap.fromTo(
          titleElement,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionElement,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      if (ctaTextRef.current && ctaSectionRef.current) {
        const textElement = ctaTextRef.current;
        const sectionElement = ctaSectionRef.current;
        gsap.fromTo(
          textElement,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionElement,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      if (ctaButtonRef.current && ctaSectionRef.current) {
        const buttonElement = ctaButtonRef.current;
        const sectionElement = ctaSectionRef.current;
        gsap.fromTo(
          buttonElement,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: sectionElement,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // CTA button hover
      const button = ctaButtonRef.current;
      if (button) {
        const handleButtonEnter = () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        const handleButtonLeave = () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        button.addEventListener('mouseenter', handleButtonEnter);
        button.addEventListener('mouseleave', handleButtonLeave);
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        title="Nossos Serviços"
        description="Explore nossos serviços de desenvolvimento web com React, automação de processos, design UI/UX e consultoria para impulsionar seu negócio."
        keywords="serviços de desenvolvimento, automação de processos, design ui/ux, consultoria de ti, desenvolvimento react"
      />

      <div className="pt-24 sm:pt-32 bg-background text-foreground">
        <section
          ref={heroRef}
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center"
        >
          <h1
            ref={heroTitleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4 sm:mb-6 px-4 sm:px-0"
          >
            Nossos <span className="text-primary">Serviços</span>
          </h1>
          <p
            ref={heroSubtitleRef}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-0"
          >
            Soluções completas para transformar sua presença digital e otimizar suas operações.
          </p>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-background/50 border-y border-border">
          <div
            ref={servicesGridRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 sm:p-8 bg-card rounded-lg border border-border flex flex-col shadow-sm cursor-pointer"
              >
                <div className="service-icon flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-card-foreground mb-3">{service.title}</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature) => (
                    <li key={feature} className="service-feature flex items-center text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          ref={ctaSectionRef}
          className="py-12 sm:py-16 lg:py-20 bg-background"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2
              ref={ctaTitleRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-4 sm:mb-6 px-4 sm:px-0"
            >
              Vamos construir algo incrível juntos?
            </h2>
            <p
              ref={ctaTextRef}
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4 sm:px-0"
            >
              Pronto para levar seu negócio para o próximo nível com tecnologia e automação?
            </p>
            <Button
              ref={ctaButtonRef}
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-primary text-primary-foreground font-semibold"
            >
              Entre em Contato
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;