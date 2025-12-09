
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Award, Code } from 'lucide-react';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const values = [
  {
    icon: Zap,
    title: 'Eficiência',
    description: 'Automatizamos processos para que sua equipe possa focar no que realmente importa: o crescimento do negócio.',
  },
  {
    icon: Users,
    title: 'Parceria',
    description: 'Trabalhamos como uma extensão da sua equipe, garantindo que sua visão se torne uma realidade de sucesso.',
  },
  {
    icon: Award,
    title: 'Qualidade',
    description: 'Entregamos código limpo, documentado e soluções robustas que geram valor a longo prazo.',
  },
  {
    icon: Code,
    title: 'Inovação',
    description: 'Utilizamos as melhores tecnologias, como React, para construir soluções modernas e de alto impacto.',
  },
];

const containerVariants = {
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

const About = () => {
  return (
    <>
      <SEO
        title="Sobre Nós"
        description="Conheça a Nidus, nossa missão de otimizar e inovar através de desenvolvimento web moderno e automação inteligente de processos."
        keywords="sobre nidus, agência de desenvolvimento, automação de processos, equipe nidus"
      />

      <div className="pt-24 sm:pt-32 bg-background text-foreground">
        {/* Hero Section */}
        <motion.section 
          className="py-16 sm:py-20 px-6 text-center"
          initial="offscreen"
          animate="onscreen"
          variants={containerVariants}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6">
            Nós somos a <span className="text-primary">Nidus</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Uma agência de desenvolvimento e automação dedicada a construir o futuro digital do seu negócio.
          </p>
        </motion.section>

        {/* Story Section */}
        <section className="py-20 bg-background/50 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
                transition={{ staggerChildren: 0.2 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-6">
                  Nossa Missão: <span className="text-primary">Inovar e Otimizar</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A Nidus nasceu da convicção de que a tecnologia deve ser uma aliada estratégica. Nosso objetivo é libertar empresas de tarefas manuais e repetitivas, permitindo que elas se concentrem em inovação e crescimento.
                  </p>
                  <p>
                    Com expertise em desenvolvimento web moderno e automação de processos, criamos ecossistemas digitais coesos e eficientes. Construímos desde sites institucionais e plataformas complexas até a integração de todos os seus sistemas para que funcionem em perfeita harmonia.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-md h-96 rounded-lg overflow-hidden border border-border shadow-lg">
                  <img className="w-full h-full object-cover" alt="Equipe de desenvolvimento colaborando em um escritório moderno, com gráficos digitais sobrepostos." src="https://images.unsplash.com/photo-1556761175-5973dd30399d" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-foreground mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Os princípios que guiam cada linha de código e cada projeto que entregamos.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="p-6 bg-card rounded-lg border border-border text-center shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
