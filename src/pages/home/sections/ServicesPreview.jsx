import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Zap, Database, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        icon: Code,
        title: 'Desenvolvimento Web Moderno',
        description:
            'Criamos sites e aplicações web de alta performance com foco em UX, conversão e resultados mensuráveis.',
        gradient: 'from-primary/20 to-primary/5',
        iconColor: 'text-primary',
    },
    {
        icon: Zap,
        title: 'Automação Inteligente',
        description:
            'Integração de ferramentas e automações customizadas para ganho de eficiência e escalabilidade operacional.',
        gradient: 'from-secondary/20 to-secondary/5',
        iconColor: 'text-secondary',
    },
    {
        icon: Database,
        title: 'Backend e APIs',
        description: 'Desenvolvemos a espinha dorsal de suas aplicações com Node.js e tecnologias modernas, garantindo escalabilidade e segurança.',
        gradient: 'from-accent/20 to-accent/5',
        iconColor: 'text-accent',
    },
    {
        icon: Smartphone,
        title: 'Desenvolvimento Mobile',
        description: 'Construímos aplicativos nativos para iOS e Android com React Native, oferecendo experiência premium com código unificado.',
        gradient: 'from-primary/20 to-secondary/5',
        iconColor: 'text-primary',
    }
];

const ServicesPreview = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);
    const ctaRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const animDuration = isMobile ? 0.25 : 0.5;
        
        const ctx = gsap.context(() => {
            // Section parallax effect - desabilitado em mobile
            if (!isMobile) {
                gsap.fromTo(sectionRef.current,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top bottom',
                            end: 'top center',
                            scrub: 1,
                        }
                    }
                );
            }

            // Header animation
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: isMobile ? 10 : 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: animDuration,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 80%',
                        once: true,
                    }
                }
            );

            // Cards stagger animation
            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.fromTo(card,
                        { opacity: 0, y: isMobile ? 15 : 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: animDuration,
                            delay: isMobile ? index * 0.05 : index * 0.1,
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 80%',
                                once: true,
                            }
                        }
                    );
                }
            });

            // CTA animation
            gsap.fromTo(ctaRef.current,
                { opacity: 0, y: isMobile ? 10 : 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: animDuration,
                    delay: isMobile ? 0.2 : 0.4,
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 80%',
                        once: true,
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleCardHover = (e, isEntering) => {
        const card = e.currentTarget;
        const icon = card.querySelector('.icon-wrapper');
        
        gsap.to(card, {
            y: isEntering ? -8 : 0,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        if (icon) {
            gsap.to(icon, {
                scale: isEntering ? 1.1 : 1,
                rotate: isEntering ? 5 : 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    };

    return (
        <section
            ref={sectionRef}
            id="services-preview"
            className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background relative"
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="max-w-7xl mx-auto px-3 sm:px-6">
                <div
                    ref={headerRef}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
                        Soluções Completas para seu Negócio
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-3 sm:px-0">
                        Do conceito ao deploy, cuidamos de cada detalhe do seu projeto digital
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
                    {services.map(({ icon: Icon, title, description, gradient, iconColor }, index) => (
                        <div
                            key={title}
                            ref={(el) => (cardsRef.current[index] = el)}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full p-5 sm:p-6 md:p-8 bg-card border rounded-2xl shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    <div
                                        className={`icon-wrapper w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
                                    >
                                        <Icon className={`${iconColor} w-6 h-6 sm:w-7 sm:h-7`} />
                                    </div>
                                    
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                                        {title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        {description}
                                    </p>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div
                    ref={ctaRef}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        onClick={() => navigate('/services')}
                        className="group"
                    >
                        Ver Todos os Serviços
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
