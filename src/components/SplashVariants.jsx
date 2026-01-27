/**
 * Splash Screen Variants
 * 
 * Diferentes variações do splash screen para escolher
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { colors } from '@/design-system';

/**
 * Variant 1: Minimal - Simples e elegante
 */
export const MinimalSplash = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete,
          });
        }, 500);
      },
    });

    tl.from(logoRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: 'back.out(2)',
    })
      .to(logoRef.current, {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut',
      });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #e0f2fe 0%, #ccfbf1 100%)',
      }}
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <h1
        ref={logoRef}
        className="text-7xl md:text-9xl font-black z-10"
        style={{
          background: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 50%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        NIDUS
      </h1>
    </div>
  );
};

/**
 * Variant 2: Glitch Effect - Moderno e tech
 */
export const GlitchSplash = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    
    // Glitch effect
    const glitchTl = gsap.timeline({ repeat: 2 });
    glitchTl
      .to(text, {
        x: -2,
        duration: 0.05,
        repeat: 1,
        yoyo: true,
      })
      .to(text, {
        x: 2,
        duration: 0.05,
        repeat: 1,
        yoyo: true,
      });

    // Main timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 1.5,
            duration: 0.8,
            ease: 'power2.in',
            onComplete,
          });
        }, 600);
      },
    });

    tl.from(text, {
      opacity: 0,
      scale: 2,
      duration: 0.8,
      ease: 'power3.out',
    })
      .add(glitchTl, '-=0.4')
      .to(text, {
        textShadow: '0 0 15px rgba(14, 165, 233, 0.4), 0 0 30px rgba(14, 165, 233, 0.2)',
        duration: 0.5,
      });

    return () => {
      tl.kill();
      glitchTl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #bae6fd 0%, #99f6e4 100%)',
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <h1
        ref={textRef}
        className="text-8xl md:text-9xl font-black relative z-10"
        style={{
          fontFamily: 'monospace',
          letterSpacing: '0.1em',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        NIDUS
      </h1>
    </div>
  );
};

/**
 * Variant 3: Cinematic - Com reveal dramático
 */
export const CinematicSplash = ({ onComplete }) => {
  const containerRef = useRef(null);
  const topBarRef = useRef(null);
  const bottomBarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
            onComplete,
          });
        }, 800);
      },
    });

    // Barras se abrem
    tl.to([topBarRef.current, bottomBarRef.current], {
      scaleY: 0,
      duration: 1.2,
      ease: 'power3.inOut',
      stagger: 0.1,
    }, 0.5)
      // Logo aparece
      .from(logoRef.current, {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.8,
        ease: 'back.out(1.5)',
      }, '-=0.6')

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #f0fdfa 50%, #faf5ff 100%)',
      }}
    >
      {/* Barras cinematográficas */}
      <div
        ref={topBarRef}
        className="absolute top-0 left-0 right-0 h-1/2 origin-top"
        style={{
          background: 'linear-gradient(180deg, #38bdf8 0%, #2dd4bf 60%, #22d3ee 100%)',
        }}
      />
      <div
        ref={bottomBarRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom"
        style={{
          background: 'linear-gradient(0deg, #38bdf8 0%, #2dd4bf 60%, #22d3ee 100%)',
        }}
      />

      {/* Logo */}
      <h1
        ref={logoRef}
        className="text-8xl md:text-9xl font-black z-10"
        style={{
          background: 'linear-gradient(135deg, #38bdf8 0%, #2dd4bf 35%, #22d3ee 65%, #c084fc 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        NIDUS
      </h1>
    </div>
  );
};
/**
 * Variant 4: Particles - Com efeito de partículas
 */
export const ParticlesSplash = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const particles = particlesRef.current;

    // Anima partículas
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        opacity: Math.random() * 0.8,
        scale: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.05,
      });
    });

    // Timeline principal
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete,
          });
        }, 700);
      },
    });

    tl.from(logoRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      duration: 1,
      ease: 'power2.out',
    })
      .to(logoRef.current, {
        textShadow: '0 0 20px rgba(14, 165, 233, 0.3), 0 0 40px rgba(14, 165, 233, 0.15)',
        duration: 0.6,
      }, '-=0.5');

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #f0fdfa 50%, #faf5ff 100%)',
      }}
    >
      {/* Partículas de fundo */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
              background: i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#14b8a6' : '#a855f7',
              boxShadow: `0 0 5px ${i % 3 === 0 ? 'rgba(14, 165, 233, 0.3)' : i % 3 === 1 ? 'rgba(20, 184, 166, 0.3)' : 'rgba(168, 85, 247, 0.3)'}`,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <h1
        ref={logoRef}
        className="text-8xl md:text-9xl font-black z-10"
        style={{
          background: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 50%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        NIDUS
      </h1>
    </div>
  );
};

export default {
  MinimalSplash,
  GlitchSplash,
  CinematicSplash,
  ParticlesSplash,
};
