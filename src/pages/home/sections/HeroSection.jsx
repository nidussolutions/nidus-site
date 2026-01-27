import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Code2, Sparkles, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const text1 = 'Transformando Ideias em';
const text2 = 'Soluções Digitais';

const container = {
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { value: '50+', label: 'Projetos Entregues' },
  { value: '98%', label: 'Satisfação' },
  { value: '5+', label: 'Anos de Experiência' },
];

const HeroSection = ({ onContact, onServices, onScrollDown }) => {
  const { scrollY } = useScroll();

  const exploreOpacity = useTransform(scrollY, [0, 80], [1, 0]);
  const exploreY = useTransform(scrollY, [0, 80], [0, 10]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Desenvolvimento Sob Medida
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground">
          <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            className="block"
          >
            {text1.split('').map((char, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              {text2.split('').map((char, i) => (
                <motion.span key={i} variants={letter} className="inline-block">
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          Somos especialistas em desenvolvimento web moderno e automação inteligente.
          <br className="hidden md:block" />
          Criamos experiências digitais que impulsionam seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" onClick={onContact} className="group">
            Agende uma Reunião
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button size="lg" variant="outline" onClick={onServices} className="group">
            <Code2 className="mr-2 w-5 h-5" />
            Nossos Serviços
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: exploreOpacity, y: exploreY }}
        className="absolute bottom-10 z-10"
      >
        <Button
          variant="ghost"
          onClick={onScrollDown}
          className="flex flex-col hover:bg-transparent"
        >
          <span className="text-xs uppercase tracking-widest mb-1 text-muted-foreground">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="text-muted-foreground" />
          </motion.div>
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
