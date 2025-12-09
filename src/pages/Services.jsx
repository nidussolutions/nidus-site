
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, CheckCircle, Smartphone, Palette, Briefcase, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const services = [
  { icon: Code, title: 'Desenvolvimento Web Sob Medida', description: 'Criamos sites, landing pages e sistemas web com React e outras tecnologias de ponta, com foco em performance e SEO.', features: ['Sites Institucionais', 'Landing Pages de Conversão', 'Plataformas Web Complexas', 'Otimização de Performance (Core Web Vitals)'], },
  { icon: Zap, title: 'Automação de Processos', description: 'Desenvolvemos workflows de automação para conectar suas ferramentas, eliminar tarefas manuais e otimizar a eficiência operacional.', features: ['Integração de APIs', 'Automação de Marketing e Vendas', 'Sincronização de Dados', 'Processos de Onboarding Automatizados'], },
  { icon: Smartphone, title: 'Desenvolvimento Mobile', description: 'Construímos aplicativos para iOS e Android com React Native, oferecendo uma experiência nativa com um código-base unificado.', features: ['Apps para iOS e Android', 'Interface Responsiva', 'Notificações Push', 'Integração com Hardware Nativo'], },
  { icon: Database, title: 'Backend e APIs', description: 'Desenvolvemos a espinha dorsal de suas aplicações com Node.js e Supabase, garantindo escalabilidade e segurança.', features: ['APIs REST e GraphQL', 'Bancos de Dados (SQL & NoSQL)', 'Autenticação e Autorização', 'Arquitetura de Microsserviços'], },
  { icon: Palette, title: 'UI/UX Design', description: 'Projetamos interfaces intuitivas e esteticamente agradáveis que melhoram a experiência do usuário e fortalecem sua marca.', features: ['Pesquisa com Usuários', 'Wireframing e Prototipagem', 'Design Systems', 'Testes de Usabilidade'], },
  { icon: Briefcase, title: 'Consultoria Estratégica', description: 'Analisamos seus desafios e oferecemos um roadmap tecnológico claro para alinhar suas ferramentas e processos aos seus objetivos de negócio.', features: ['Diagnóstico de Processos', 'Seleção de Ferramentas (Stack)', 'Planejamento de Arquitetura', 'Mentoria Técnica'], },
];

const pageVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const itemVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Nossos Serviços"
        description="Explore nossos serviços de desenvolvimento web com React, automação de processos, design UI/UX e consultoria para impulsionar seu negócio."
        keywords="serviços de desenvolvimento, automação de processos, design ui/ux, consultoria de ti, desenvolvimento react"
      />

      <div className="pt-24 sm:pt-32 bg-background text-foreground">
        <motion.section 
          className="py-16 sm:py-20 px-6 text-center"
          initial="offscreen"
          animate="onscreen"
          variants={pageVariants}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Soluções completas para transformar sua presença digital e otimizar suas operações.
          </p>
        </motion.section>

        <section className="py-20 bg-background/50 border-y border-border">
          <motion.div 
            className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors flex flex-col shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="py-20 sm:py-24 bg-background">
          <motion.div
            className="max-w-4xl mx-auto px-6 text-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={pageVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground mb-6">
              Vamos construir algo incrível juntos?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Pronto para levar seu negócio para o próximo nível com tecnologia e automação?
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-primary hover:bg-opacity-90 text-primary-foreground font-semibold"
            >
              Entre em Contato
            </Button>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;
