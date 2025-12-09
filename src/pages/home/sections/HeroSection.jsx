import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const text1 = 'Desenvolvimento Web &';
const text2 = 'Automação Inteligente';

const container = {
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = ({ onContact, onServices, onScrollDown }) => {
  const { scrollY } = useScroll();

  // Quando começa a rolar, some
  const exploreOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const exploreY = useTransform(scrollY, [0, 80], [0, 10]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
        <motion.span
          variants={container}
          initial="hidden"
          animate="visible"
          className="block"
        >
          {text1.split('').map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <br />
          <span className="text-primary">
            {text2.split('').map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </motion.span>
      </h1>

      <p className="max-w-2xl text-lg text-muted-foreground mb-10">
        Construímos soluções digitais sob medida e automatizamos processos para escalar resultados.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" onClick={onContact}>
          Agende uma Reunião <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <Button size="lg" variant="outline" onClick={onServices}>
          Nossos Serviços
        </Button>
      </div>

      <motion.div
        style={{ opacity: exploreOpacity, y: exploreY }}
        className="absolute bottom-10"
      >
        <Button
          variant="ghost"
          onClick={onScrollDown}
          className="flex flex-col"
        >
          <span className="text-xs uppercase tracking-widest mb-1">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown />
          </motion.div>
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
