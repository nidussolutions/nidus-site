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
          duration: 0.8,
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
      stagger: 0.08,
      duration: 0.8,
      ease: 'back.out(1.7)',
    })
      // Pulse suave
      .to(letters, {
        scale: 1.05,
        duration: 0.4,
        yoyo: true,
        repeat: 1,
        stagger: 0.05,
        ease: 'power1.inOut',
      }, '-=0.2')
      // Prepara para sair
      .to(letters, {
        y: -20,
        opacity: 0.8,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.in',
      }, '+=0.3');

    // Cleanup
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #e0f2fe 0%, #f0fdfa 50%, #f3e8ff 100%)',
      }}
    >
      {/* Efeito de partículas/grid de fundo */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      {/* Círculo de glow atrás do texto */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(20, 184, 166, 0.1) 50%, transparent 70%)`,
        }}
      />

      {/* Texto NIDUS */}
      <div ref={textRef} className="relative">
        <h1 className="text-8xl md:text-9xl font-black tracking-wider flex">
          {['N', 'I', 'D', 'U', 'S'].map((letter, index) => (
            <span
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 50%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Linha decorativa */}
        <div className="mt-6 h-1.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full opacity-60" />
      </div>

      {/* Loading indicator sutil */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-primary-500 animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Skip button (opcional) */}
      {showSkipButton && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 px-4 py-2 text-neutral-600 hover:text-primary-600 text-sm font-medium transition-colors rounded-lg hover:bg-white/50"
        >
          Pular →
        </button>
      )}
    </div>
  );
};

export default SplashScreen;
