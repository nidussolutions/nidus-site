import { motion } from 'framer-motion';
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
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossa Metodologia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo transparente e colaborativo do início ao fim
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'md:text-right'
                  }`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block p-8 bg-card border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary mb-1">
                            Etapa {index + 1}
                          </div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
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
                    </motion.div>
                  </div>

                  {/* Timeline Dot - Desktop */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-lg"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border"
        >
          <h3 className="text-2xl font-bold mb-3">Pronto para começar?</h3>
          <p className="text-muted-foreground mb-4">
            Vamos transformar sua ideia em realidade com um processo comprovado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
