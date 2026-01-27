
import React, { useRef, useEffect } from 'react';
import { Code, Zap, CheckCircle, Smartphone, Palette, Briefcase, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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
  const heroRef = useScrollAnimation();
  const servicesGridRef = useRef(null);
  const ctaRef = useScrollAnimation();

  useEffect(() => {
    if (servicesGridRef.current) {
      const children = servicesGridRef.current.children;
      gsap.fromTo(children, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: servicesGridRef.current,
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
        title="Nossos Serviços"
        description="Explore nossos serviços de desenvolvimento web com React, automação de processos, design UI/UX e consultoria para impulsionar seu negócio."
        keywords="serviços de desenvolvimento, automação de processos, design ui/ux, consultoria de ti, desenvolvimento react"
      />

      <div className="pt-24 sm:pt-32 bg-background text-foreground">
        <section 
          ref={heroRef}
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4 sm:mb-6 px-4 sm:px-0">
            Nossos <span className="text-primary">Serviços</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-0">
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
                className="p-6 sm:p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors flex flex-col shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-card-foreground mb-3">{service.title}</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div
            ref={ctaRef}
            className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-4 sm:mb-6 px-4 sm:px-0">
              Vamos construir algo incrível juntos?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4 sm:px-0">
              Pronto para levar seu negócio para o próximo nível com tecnologia e automação?
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-primary hover:bg-opacity-90 text-primary-foreground font-semibold"
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
