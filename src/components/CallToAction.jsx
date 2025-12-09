import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
      className='text-center py-20 sm:py-24'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={ctaVariants}
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-nidus-text-dark mb-4">
        Pronto para Otimizar seu Negócio?
      </h2>
      <p className='text-lg text-nidus-text-light max-w-2xl mx-auto mb-8'>
        Vamos conversar sobre como a automação e um site de alta performance podem transformar suas operações e impulsionar seus resultados.
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => navigate('/contact')}
          size="lg"
          className="bg-nidus-purple hover:bg-opacity-90 text-nidus-white font-semibold shadow-lg shadow-nidus-purple/20"
        >
          Agende uma Consultoria Gratuita
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;