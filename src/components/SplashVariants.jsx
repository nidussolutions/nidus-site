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
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950"
    >
      <h1
        ref={logoRef}
        className="text-7xl md:text-9xl font-black gradient-text-purple"
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
        textShadow: '0 0 30px rgba(139, 92, 246, 1)',
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <h1
        ref={textRef}
        className="text-8xl md:text-9xl font-black text-primary-500 relative"
        style={{
          fontFamily: 'monospace',
          letterSpacing: '0.1em',
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
      // Glow
      .to(logoRef.current, {
        textShadow: '0 0 50px rgba(139, 92, 246, 0.8)',
        duration: 0.6,
      }, '-=0.4');

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 overflow-hidden"
    >
      {/* Barras cinematográficas */}
      <div
        ref={topBarRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-black origin-top"
      />
      <div
        ref={bottomBarRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-black origin-bottom"
      />

      {/* Logo */}
      <h1
        ref={logoRef}
        className="text-8xl md:text-9xl font-black gradient-text-purple z-10"
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
        textShadow: '0 0 40px rgba(139, 92, 246, 0.8)',
        duration: 0.6,
      }, '-=0.5');

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 overflow-hidden"
    >
      {/* Partículas de fundo */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            className="absolute w-1 h-1 bg-primary-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <h1
        ref={logoRef}
        className="text-8xl md:text-9xl font-black gradient-text-purple z-10"
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
