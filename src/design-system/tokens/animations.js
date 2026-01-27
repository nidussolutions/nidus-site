/**
 * Design System - Animation Tokens
 * 
 * Sistema de animações e transições para criar
 * experiências fluidas e consistentes.
 */

export const animations = {
  // Timing Functions (Easing)
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    
    // Custom easings para animações mais naturais
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.45, 0, 0.15, 1)',
  },

  // Duration
  duration: {
    instant: '100ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
    slowest: '750ms',
  },

  // Keyframes para animações comuns
  keyframes: {
    // Fade
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },

    // Slide
    slideInUp: {
      from: { transform: 'translateY(20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    slideInDown: {
      from: { transform: 'translateY(-20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    slideInLeft: {
      from: { transform: 'translateX(-20px)', opacity: 0 },
      to: { transform: 'translateX(0)', opacity: 1 },
    },
    slideInRight: {
      from: { transform: 'translateX(20px)', opacity: 0 },
      to: { transform: 'translateX(0)', opacity: 1 },
    },

    // Scale
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 },
    },
    scaleOut: {
      from: { transform: 'scale(1)', opacity: 1 },
      to: { transform: 'scale(0.95)', opacity: 0 },
    },

    // Rotate
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },

    // Pulse
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },

    // Bounce
    bounce: {
      '0%, 100%': {
        transform: 'translateY(-25%)',
        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
      },
      '50%': {
        transform: 'translateY(0)',
        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },

    // Shimmer (skeleton loading)
    shimmer: {
      '0%': { backgroundPosition: '-1000px 0' },
      '100%': { backgroundPosition: '1000px 0' },
    },
  },

  // Transition Presets
  transition: {
    all: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    colors: 'color, background-color, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// GSAP Animation Presets
export const gsapPresets = {
  // Entrance animations
  fadeInUp: {
    from: { y: 30, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
  },
  fadeInScale: {
    from: { scale: 0.9, opacity: 0 },
    to: { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
  },
  staggerChildren: {
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out',
  },
  
  // Hover effects
  hoverScale: {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out',
  },
  hoverGlow: {
    boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
    duration: 0.3,
    ease: 'power2.out',
  },

  // Scroll animations
  scrollReveal: {
    scrollTrigger: {
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
  },
};

export default animations;
