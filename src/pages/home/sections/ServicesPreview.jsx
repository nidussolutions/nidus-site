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
        bgColor: 'bg-primary-400',
        borderColor: 'border-primary-600',
        iconColor: 'text-white',
        shadowColor: 'shadow-retro-color',
    },
    {
        icon: Zap,
        title: 'Automação Inteligente',
        description:
            'Integração de ferramentas e automações customizadas para ganho de eficiência e escalabilidade operacional.',
        bgColor: 'bg-secondary-400',
        borderColor: 'border-secondary-600',
        iconColor: 'text-neutral-900',
        shadowColor: 'shadow-retro',
    },
    {
        icon: Database,
        title: 'Backend e APIs',
        description: 'Desenvolvemos a espinha dorsal de suas aplicações com Node.js e tecnologias modernas, garantindo escalabilidade e segurança.',
        bgColor: 'bg-accent-500',
        borderColor: 'border-accent-700',
        iconColor: 'text-white',
        shadowColor: 'shadow-retro-lg',
    },
    {
        icon: Smartphone,
        title: 'Desenvolvimento Mobile',
        description: 'Construímos aplicativos nativos para iOS e Android com React Native, oferecendo experiência premium com código unificado.',
        bgColor: 'bg-gradient-to-br from-primary-500 to-secondary-500',
        borderColor: 'border-neutral-900',
        iconColor: 'text-white',
        shadowColor: 'shadow-retro-color-double',
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
            // Section reveal animation - sem parallax para scroll mais fluido
            if (!isMobile) {
                gsap.fromTo(sectionRef.current,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 85%',
                            once: true,
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
        
        // Kill any existing tweens on these elements
        gsap.killTweensOf(card);
        if (icon) gsap.killTweensOf(icon);
        
        gsap.to(card, {
            y: isEntering ? -4 : 0,
            duration: 0.25,
            ease: 'power1.out',
            clearProps: isEntering ? '' : 'all'
        });
        
        if (icon) {
            gsap.to(icon, {
                scale: isEntering ? 1.05 : 1,
                rotate: isEntering ? -3 : 0,
                duration: 0.25,
                ease: 'power1.out',
                clearProps: isEntering ? '' : 'all'
            });
        }
    };

    return (
        <section
            ref={sectionRef}
            id="services-preview"
            className="py-16 sm:py-20 lg:py-24 bg-neutral-100 relative grain-light"
        >
            {/* Retro Decorative Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />
            
            {/* Geometric Shapes Background */}
            <div className="absolute top-20 right-10 w-24 h-24 rounded-full border-4 border-primary-300 opacity-15" />
            <div className="absolute bottom-32 left-10 w-32 h-32 rotate-12 border-4 border-secondary-300 opacity-15" />
            
            <div className="max-w-7xl mx-auto px-3 sm:px-6">
                <div
                    ref={headerRef}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-4 px-2 sm:px-0 text-neutral-900">
                        Soluções Completas para seu Negócio
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-medium max-w-2xl mx-auto px-3 sm:px-0">
                        Do conceito ao deploy, cuidamos de cada detalhe do seu projeto digital
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto mb-10 sm:mb-14">
                    {services.map(({ icon: Icon, title, description, bgColor, borderColor, iconColor, shadowColor }, index) => (
                        <div
                            key={title}
                            ref={(el) => (cardsRef.current[index] = el)}
                            onMouseEnter={(e) => handleCardHover(e, true)}
                            onMouseLeave={(e) => handleCardHover(e, false)}
                            className="group relative"
                        >
                            {/* Retro Card */}
                            <div className={`grain-light relative h-full p-6 sm:p-8 bg-white border-4 ${borderColor} rounded-3xl ${shadowColor} hover:shadow-retro-xl`}>
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon in colored circle */}
                                    <div
                                        className={`icon-wrapper w-16 h-16 sm:w-20 sm:h-20 mb-5 sm:mb-6 flex items-center justify-center rounded-full ${bgColor} border-3 border-neutral-900 ${shadowColor}`}
                                    >
                                        <Icon className={`${iconColor} w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]`} />
                                    </div>
                                    
                                    <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 text-neutral-900">
                                        {title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
                                        {description}
                                    </p>
                                </div>

                                {/* Retro Corner Decoration */}
                                <div className={`absolute top-4 right-4 w-4 h-4 rounded-full ${bgColor} opacity-40`} />
                                <div className={`absolute bottom-4 left-4 w-3 h-3 ${bgColor} rotate-45 opacity-30`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Retro CTA Button */}
                <div
                    ref={ctaRef}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        onClick={() => navigate('/services')}
                        className="group bg-primary-500 hover:bg-primary-600 text-white font-display font-bold text-lg px-10 py-6 rounded-2xl border-3 border-neutral-900 shadow-retro-lg hover:shadow-retro-color-offset transition-all"
                    >
                        Ver Todos os Serviços
                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
