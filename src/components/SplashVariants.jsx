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

/**
 * Variant 5: Welcome - Mensagem corporativa e profissional
 */
export const WelcomeSplash = ({ onComplete }) => {
  const containerRef = useRef(null);
  const welcomeRef = useRef(null);
  const nidusRef = useRef(null);
  const lineRef = useRef(null);
  const phaseRef = useRef(null);

  useEffect(() => {
    // Timeline principal
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete,
          });
        }, 1000);
      },
    });

    tl.from(welcomeRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: 'power3.out',
    })
      .from(lineRef.current, {
        scaleX: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.3')
      .from(nidusRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4')
      .from(phaseRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden grain-light"
      style={{
        background: 'linear-gradient(135deg, #FFF8E7 0%, #F5E6D3 40%, #E9C46A 100%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        padding: '2rem',
      }}
    >
      {/* Elementos geométricos sutis Neo-Retro */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full border-2 border-secondary-500 opacity-15" />
      <div className="absolute bottom-32 right-24 w-28 h-28 rotate-45 border-2 border-primary-500 opacity-12" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent-600 opacity-10" />
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-2 border-neutral-800 opacity-12 rotate-12" />

      {/* Logo Section - Neo-Retro Clean */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Welcome text - Minimalista */}
        <div ref={welcomeRef}>
          <h2
            className="text-lg md:text-xl font-display font-medium tracking-wide uppercase"
            style={{
              color: '#264653',
              letterSpacing: '0.15em',
            }}
          >
            Bem-vindo à
          </h2>
        </div>

        {/* NIDUS - Tipografia Space Grotesk bold */}
        <div className="relative">
          <h1
            ref={nidusRef}
            className="text-7xl md:text-9xl font-display font-bold tracking-tight"
            style={{
              color: '#C1440E',
              textShadow: '3px 3px 0px rgba(42, 157, 143, 0.2)',
              letterSpacing: '-0.02em',
            }}
          >
            NIDUS
          </h1>
          
          {/* Linha decorativa sutil */}
          <div
            ref={lineRef}
            className="absolute -bottom-3 left-0 right-0 h-1.5 bg-secondary-500 origin-left rounded-full"
          />
        </div>

      </div>

      {/* Tagline - Sofisticado */}
      <div
        ref={phaseRef}
        className="relative z-10 text-center"
      >
        <p className="text-base md:text-lg font-sans font-normal text-neutral-900 tracking-wide">
          Transformando ideias em realidade digital
        </p>
      </div>
    </div>
  );
};

/**
 * Variant 6: Dark Glitch - Cyberpunk dark mode
 */
export const DarkGlitchSplash = ({ onComplete, showSkipButton = false }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  const handleSkip = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.inOut',
      onComplete,
    });
  };

  useEffect(() => {
    const text = textRef.current;
    const glow = glowRef.current;

    // Glitch effect timeline
    const glitchTl = gsap.timeline({ repeat: 3, repeatDelay: 0.5 });
    glitchTl
      .to(text, { x: -3, duration: 0.05, ease: 'steps(1)' })
      .to(text, { x: 3, duration: 0.05, ease: 'steps(1)' })
      .to(text, { x: -2, duration: 0.03, ease: 'steps(1)' })
      .to(text, { x: 2, duration: 0.03, ease: 'steps(1)' })
      .to(text, { x: 0, duration: 0.02, ease: 'steps(1)' });

    // Main timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete,
          });
        }, 800);
      },
    });

    // Logo entrance
    tl.from(text, {
      opacity: 0,
      scale: 1.5,
      duration: 0.8,
      ease: 'power3.out',
    })
      // Glow pulse
      .from(glow, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.6')
      // Add glitch effect
      .add(glitchTl, '-=0.2')
      // Chromatic aberration
      .to(text, {
        textShadow: '-3px 0 #06b6d4, 3px 0 #c084fc, 0 0 30px rgba(139, 92, 246, 0.6)',
        duration: 0.4,
        ease: 'power2.out',
      }, '-=1')
      // Final glow pulse
      .to(glow, {
        scale: 1.1,
        opacity: 0.8,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut',
      });

    return () => {
      tl.kill();
      glitchTl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0b14 0%, #1a1f2e 50%, #0f1219 100%)',
      }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-50" />

      {/* Scanlines effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.03) 2px, rgba(139, 92, 246, 0.03) 4px)',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[400px] h-[400px] bg-primary-700/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-secondary-600/20 rounded-full blur-[100px]" />

      {/* Glow behind text */}
      <div
        ref={glowRef}
        className="absolute w-[300px] h-[150px] sm:w-[500px] sm:h-[200px] rounded-full blur-[60px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
        }}
      />

      {/* Logo */}
      <h1
        ref={textRef}
        className="text-7xl sm:text-8xl md:text-9xl font-display font-bold tracking-tight relative z-10"
        style={{
          background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
        }}
      >
        NIDUS
      </h1>

      {/* Skip button */}
      {showSkipButton && (
        <button
          onClick={handleSkip}
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border hover:border-primary/30 rounded-lg transition-all"
        >
          Pular →
        </button>
      )}
    </div>
  );
};

export default {
  MinimalSplash,
  GlitchSplash,
  CinematicSplash,
  ParticlesSplash,
  WelcomeSplash,
  DarkGlitchSplash,
};
