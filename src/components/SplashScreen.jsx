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
        // Aguarda um pouco antes de iniciar a transição final
        setTimeout(() => {
          // Fade out do splash completo
          gsap.to(container, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
              if (onComplete) onComplete();
            },
          });
        }, 800);
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
      // Glow effect
      .to(text, {
        textShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(139, 92, 246, 0.4)',
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)',
      }}
    >
      {/* Efeito de partículas/grid de fundo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Círculo de glow atrás do texto */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, ${colors.brand.primary[500]} 0%, transparent 70%)`,
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
                background: `linear-gradient(135deg, ${colors.brand.primary[400]}, ${colors.brand.secondary[400]})`,
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
        <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full" />
      </div>

      {/* Loading indicator sutil */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"
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
          className="absolute bottom-8 right-8 text-neutral-400 hover:text-neutral-200 text-sm transition-colors"
        >
          Pular →
        </button>
      )}
    </div>
  );
};

export default SplashScreen;
