import { useRef, useEffect } from 'react';
import { Mail, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactOptions = [
  {
    icon: Mail,
    title: 'Email',
    description: 'ola@mynidus.dev',
    href: 'mailto:ola@mynidus.dev',
    cta: 'Enviar Email',
  },
  {
    icon: Calendar,
    title: 'Agendar Reunião',
    description: 'Escolha o melhor horário',
    href: 'https://calendly.com/ola-mynidus/30min',
    cta: 'Agendar Agora',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Resposta rápida',
    href: 'https://wa.me/5528999618665',
    cta: 'Iniciar Conversa',
  },
];

const ContactSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: 0.2 + index * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-glow" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Vamos <span className="gradient-text">Conversar</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Escolha a melhor forma de entrar em contato. Estamos prontos para
          transformar sua ideia em realidade.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <a
                key={option.title}
                ref={(el) => (cardsRef.current[index] = el)}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600/20 to-secondary-600/20 mb-4 group-hover:from-primary-600/30 group-hover:to-secondary-600/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary-400 group-hover:text-primary-300">
                    {option.cta}
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Main CTA */}
        <Button
          size="lg"
          asChild
          className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white font-semibold px-10 py-6 text-lg rounded-xl glow-purple transition-all duration-300"
        >
          <a
            href="https://calendly.com/ola-mynidus/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Consultoria Gratuita
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
