import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { colors } from '@/design-system';

/**
 * SplashScreen - Tela inicial animada
 * Mostra o logo "NIDUS" com animações suaves antes de revelar o site
 */
const SplashScreen = ({ onComplete, showSkipButton = false }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const lettersRef = useRef([]);

  const handleSkip = () => {
    const container = containerRef.current;
    gsap.to(container, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
      onComplete,
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const letters = lettersRef.current;

    // Timeline principal
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out do splash completo
        gsap.to(container, {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      },
    });

    // Animação das letras - entrada
    tl.from(letters, {
      opacity: 0,
      y: 100,
      rotationX: -90,
      stagger: 0.06,
      duration: 0.6,
      ease: 'back.out(1.7)',
    })
      // Pulse suave
      .to(letters, {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        stagger: 0.04,
        ease: 'power1.inOut',
      }, '-=0.2')
      // Prepara para sair
      .to(letters, {
        y: -20,
        opacity: 0.8,
        duration: 0.3,
        stagger: 0.04,
        ease: 'power2.in',
      }, '+=0.2');

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center grain-heavy"
      style={{
        background: 'linear-gradient(135deg, #fef3c7 0%, #fdba74 40%, #fb923c 70%, #f97316 100%)',
      }}
    >
      {/* Retro geometric shapes background */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full border-8 border-secondary-500 opacity-20 animate-pulse" />
      <div className="absolute bottom-32 right-24 w-32 h-32 rotate-45 border-8 border-primary-600 opacity-25" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent-400 opacity-15" />
      <div className="absolute bottom-1/4 left-1/3 w-28 h-28 rounded-2xl border-6 border-secondary-400 opacity-20 rotate-12" />
      
      {/* Efeito retro dot pattern de fundo */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60" />

      {/* Círculos retro de glow atrás do texto */}
      <div
        className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-3xl opacity-50"
        style={{
          background: `radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, rgba(245, 158, 11, 0.3) 50%, transparent 70%)`,
        }}
      />

      {/* Texto NIDUS - SUPER Retro Style com borda grossa */}
      <div ref={textRef} className="relative px-4">
        <div className="relative inline-block border-8 border-neutral-900 bg-secondary-400 shadow-2xl px-8 py-4 rounded-3xl">
          <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] font-display font-black tracking-wider flex justify-center">
            {['N', 'I', 'D', 'U', 'S'].map((letter, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef.current[index] = el)}
                className="inline-block mx-1"
                style={{
                  color: '#dc2626',
                  textShadow: '6px 6px 0px rgba(0, 0, 0, 0.3), -2px -2px 0px rgba(249, 115, 22, 0.5)',
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
          
          {/* Fitas adesivas decorativas retro */}
          <div className="absolute -top-6 -right-6 w-32 h-10 bg-primary-500 border-4 border-neutral-900 opacity-70 rotate-12 shadow-xl" />
          <div className="absolute -bottom-6 -left-6 w-28 h-10 bg-accent-500 border-4 border-neutral-900 opacity-70 -rotate-6 shadow-xl" />
        </div>

        {/* Linha decorativa retro GROSSA */}
        <div className="mt-8 sm:mt-10 h-4 sm:h-6 bg-primary-600 border-4 border-neutral-900 rounded-full shadow-retro-lg" />
      </div>

      {/* Loading indicator retro GRANDE */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2">
        <div className="flex gap-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-8 h-8 bg-secondary-500 border-4 border-neutral-900 animate-bounce shadow-retro-lg"
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
        <p className="text-center mt-4 font-display font-bold text-xl text-neutral-900">CARREGANDO...</p>
      </div>

      {/* Skip button retro (opcional) */}
      {showSkipButton && (
        <button
          onClick={handleSkip}
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 px-4 py-2 sm:px-5 sm:py-2.5 bg-secondary-400 hover:bg-secondary-500 text-neutral-900 text-xs sm:text-sm font-display font-bold transition-all rounded-xl border-3 border-neutral-900 shadow-retro hover:shadow-retro-lg"
        >
          Pular →
        </button>
      )}
    </div>
  );
};

export default SplashScreen;
