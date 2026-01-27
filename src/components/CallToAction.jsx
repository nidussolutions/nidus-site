import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ctaVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className='relative py-16 sm:py-20 lg:py-24 overflow-hidden'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={ctaVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-3 sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-primary/10 border border-primary/20"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-primary">
            Consultoria Gratuita
          </span>
        </motion.div>

        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground px-2 sm:px-0">
          Pronto para Transformar seu Negócio?
        </h2>
        
        <p className='text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 sm:px-0'>
          Vamos conversar sobre como podemos criar soluções digitais personalizadas 
          que impulsionam crescimento e automatizam processos.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="group text-base px-6 sm:px-8 w-full sm:w-auto"
            >
              <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Agende uma Consultoria
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate('/services')}
              size="lg"
              variant="outline"
              className="text-base px-6 sm:px-8 w-full sm:w-auto"
            >
              Conheça Nossos Serviços
            </Button>
          </motion.div>
        </div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center text-xs sm:text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Resposta em 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary rounded-full" />
            <span>Sem compromisso</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span>Orçamento personalizado</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToAction;