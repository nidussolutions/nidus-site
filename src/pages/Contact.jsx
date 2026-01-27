
import React, { useRef, useEffect } from 'react';
import { Mail, Calendar, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'ola@mynidus.dev',
    link: 'mailto:ola@mynidus.dev',
  },
  {
    icon: Calendar,
    title: 'Agende uma Reunião',
    content: 'Clique para marcar um horário',
    link: 'https://calendly.com/ola-mynidus/30min',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: 'Inicie uma conversa',
    link: 'https://wa.me/5528999618665',
  },
];

const Contact = () => {
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const formSectionRef = useRef(null);
  const formTitleRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      const heroTl = gsap.timeline();
      
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
      )
      .fromTo(
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

      // Form section animations
      gsap.fromTo(
        formSectionRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(
        formTitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Contact info cards animations
      if (contactInfoRef.current) {
        const cards = contactInfoRef.current.children;
        
        gsap.fromTo(
          cards,
          { opacity: 0, x: 50, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'back.out(1.3)',
            scrollTrigger: {
              trigger: contactInfoRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          }
        );

        // Hover animations para cada card
        Array.from(cards).forEach((card) => {
          const icon = card.querySelector('.contact-icon');
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -6,
              scale: 1.02,
              boxShadow: '0 15px 30px rgba(139, 92, 246, 0.2)',
              borderColor: 'rgba(139, 92, 246, 0.5)',
              duration: 0.3,
              ease: 'power2.out',
            });
            
            if (icon) {
              gsap.to(icon, {
                scale: 1.2,
                rotation: 10,
                duration: 0.4,
                ease: 'back.out(2)',
              });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
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
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <SEO
        title="Contato"
        description="Entre em contato com a Nidus para discutir seu projeto de desenvolvimento web ou automação. Estamos prontos para ajudar."
        keywords="contato nidus, agendar reunião, orçamento desenvolvimento web, consultoria automação"
      />

      <div className="pt-24 sm:pt-32 bg-background text-foreground">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center"
        >
          <h1 
            ref={heroTitleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4 sm:mb-6 px-4 sm:px-0"
          >
            Vamos Conversar?
          </h1>
          <p 
            ref={heroSubtitleRef}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-0"
          >
            Estamos ansiosos para ouvir sobre seu projeto e como podemos ajudar.
          </p>
        </section>

        {/* Contact Section */}
        <section className="pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-16">
              {/* Contact Form (Left Column) */}
              <div
                ref={formSectionRef}
                className="lg:col-span-3"
              >
                <div className="bg-card rounded-lg border border-border p-5 sm:p-6 md:p-8 h-full shadow-sm">
                  <h2 
                    ref={formTitleRef}
                    className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 sm:mb-6"
                  >
                    Envie uma mensagem
                  </h2>
                  <div ref={formRef}>
                    <ContactForm />
                  </div>
                </div>
              </div>

              {/* Contact Info (Right Column) */}
              <div 
                ref={contactInfoRef}
                className="lg:col-span-2 flex flex-col gap-4 sm:gap-6"
              >
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-card rounded-lg border border-border shadow-sm cursor-pointer"
                  >
                    <div className="contact-icon flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-card-foreground">{info.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
