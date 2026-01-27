import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'CEO, TechStart',
    company: 'TechStart Solutions',
    rating: 5,
    text: 'A Nidus transformou completamente nosso processo de vendas. O sistema desenvolvido aumentou nossa eficiência em 60% e a experiência do cliente melhorou drasticamente.',
    avatar: 'CS',
  },
  {
    name: 'Marina Costa',
    role: 'Diretora de Marketing',
    company: 'Innovate Digital',
    rating: 5,
    text: 'Profissionalismo e qualidade excepcionais. A equipe entendeu perfeitamente nossa visão e entregou além das expectativas. Recomendo fortemente!',
    avatar: 'MC',
  },
  {
    name: 'Pedro Santos',
    role: 'Founder',
    company: 'FoodTech Pro',
    rating: 5,
    text: 'O app desenvolvido pela Nidus revolucionou nosso negócio. Interface intuitiva, performance impecável e suporte sempre presente. Parceria de longo prazo garantida!',
    avatar: 'PS',
  },
];

const Testimonials = () => {
  const headerRef = useRef(null);
  const testimonialsRef = useRef([]);
  const trustRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
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
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.1,
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
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.4,
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
    gsap.to(e.currentTarget, {
      y: isEntering ? -8 : 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          ref={headerRef}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
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
              <div className="relative h-full p-6 sm:p-8 bg-card border rounded-2xl shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary/10 opacity-50 group-hover:opacity-100 transition-opacity">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          ref={trustRef}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 p-6 bg-card border rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Clientes Felizes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
