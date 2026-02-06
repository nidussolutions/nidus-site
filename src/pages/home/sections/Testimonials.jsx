import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CEO, TechStart',
    company: 'TechStart Solutions',
    rating: 5,
    text: 'A Nidus transformou completamente nosso processo de vendas. O sistema desenvolvido aumentou nossa eficiência em 60% e a experiência do cliente melhorou drasticamente.',
    avatar: 'CS',
    bgColor: 'bg-primary-400',
    borderColor: 'border-primary-600',
  },
  {
    name: 'Marina Costa',
    role: 'Diretora de Marketing',
    company: 'Innovate Digital',
    rating: 5,
    text: 'Profissionalismo e qualidade excepcionais. A equipe entendeu perfeitamente nossa visão e entregou além das expectativas. Recomendo fortemente!',
    avatar: 'MC',
    bgColor: 'bg-secondary-400',
    borderColor: 'border-secondary-600',
  },
  {
    name: 'Pedro Santos',
    role: 'Founder',
    company: 'FoodTech Pro',
    rating: 5,
    text: 'O app desenvolvido pela Nidus revolucionou nosso negócio. Interface intuitiva, performance impecável e suporte sempre presente. Parceria de longo prazo garantida!',
    avatar: 'PS',
    bgColor: 'bg-accent-500',
    borderColor: 'border-accent-700',
  },
];

const Testimonials = () => {
  const headerRef = useRef(null);
  const testimonialsRef = useRef([]);
  const trustRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const animDuration = isMobile ? 0.25 : 0.5;
    
    const ctx = gsap.context(() => {
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

      // Testimonials stagger animation
      testimonialsRef.current.forEach((testimonial, index) => {
        if (testimonial) {
          gsap.fromTo(testimonial,
            { opacity: 0, y: isMobile ? 15 : 30 },
            {
              opacity: 1,
              y: 0,
              duration: animDuration,
              delay: isMobile ? index * 0.05 : index * 0.1,
              scrollTrigger: {
                trigger: testimonial,
                start: 'top 80%',
                once: true,
              }
            }
          );
        }
      });

      // Trust indicators animation
      gsap.fromTo(trustRef.current,
        { opacity: 0, y: isMobile ? 10 : 20 },
        {
          opacity: 1,
          y: 0,
          duration: animDuration,
          delay: isMobile ? 0.2 : 0.4,
          scrollTrigger: {
            trigger: trustRef.current,
            start: 'top 80%',
            once: true,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleTestimonialHover = (e, isEntering) => {
    gsap.killTweensOf(e.currentTarget);
    gsap.to(e.currentTarget, {
      y: isEntering ? -4 : 0,
      rotate: isEntering ? -1 : 0,
      duration: 0.25,
      ease: 'power1.out',
      clearProps: isEntering ? '' : 'all'
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-neutral-100 relative overflow-hidden grain-light">
      {/* Warm Retro Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-secondary-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-400/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 relative z-10">
        <div
          ref={headerRef}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-4 px-2 sm:px-0 text-neutral-900">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-medium max-w-2xl mx-auto px-3 sm:px-0">
            Confiança construída através de resultados reais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              ref={(el) => (testimonialsRef.current[index] = el)}
              onMouseEnter={(e) => handleTestimonialHover(e, true)}
              onMouseLeave={(e) => handleTestimonialHover(e, false)}
              className="relative group"
            >
              {/* Polaroid-style card with heavy grain */}
              <div className="grain-heavy relative h-full p-6 sm:p-7 pb-8 sm:pb-10 bg-white border-4 border-neutral-900 rounded-2xl shadow-retro-lg hover:shadow-retro-xl transition-all duration-300">
                {/* Photo tape effect at top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-secondary-300/60 border-2 border-neutral-900/20 rotate-1" />
                
                {/* Quote Icon - Retro style */}
                <div className={`absolute top-4 sm:top-5 right-4 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full ${testimonial.bgColor} border-2 border-neutral-900 shadow-retro-sm`}>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                </div>

                {/* Rating with retro stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 rounded-sm bg-secondary-400 border-2 border-neutral-900 flex items-center justify-center">
                      <Star className="w-3 h-3 fill-white text-white" />
                    </div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-neutral-800 font-medium mb-5 sm:mb-6 leading-relaxed">
                  “{testimonial.text}”
                </p>

                {/* Author - Polaroid bottom section */}
                <div className="flex items-center gap-4 pt-4 border-t-4 border-neutral-200">
                  {/* Large colored circle avatar */}
                  <div className={`w-14 h-14 rounded-full ${testimonial.bgColor} border-3 border-neutral-900 flex items-center justify-center text-white font-display font-black text-lg shadow-retro-sm`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-display font-bold text-base text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-700 font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-neutral-600 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                
                {/* Vintage corner stamp */}
                <div className={`absolute bottom-3 right-3 w-4 h-4 rounded-full ${testimonial.bgColor} opacity-30 rotate-45`} />
              </div>
            </div>
          ))}
        </div>

        {/* Retro Trust Indicators */}
        <div
          ref={trustRef}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-6 sm:gap-8 p-6 sm:p-8 bg-white border-4 border-neutral-900 rounded-3xl shadow-retro-lg grain-light">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-black bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent mb-2">4.8/5</div>
              <div className="text-sm font-display font-bold text-neutral-700 uppercase tracking-wider">Avaliação Média</div>
            </div>
            <div className="h-12 sm:h-16 w-1 bg-neutral-300 rounded-full" />
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-black bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-sm font-display font-bold text-neutral-700 uppercase tracking-wider">Satisfação</div>
            </div>
            <div className="h-12 sm:h-16 w-1 bg-neutral-300 rounded-full" />
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-black bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-sm font-display font-bold text-neutral-700 uppercase tracking-wider">Clientes Felizes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
