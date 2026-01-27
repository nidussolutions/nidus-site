/**
 * GSAP Animation Utilities
 * 
 * Funções utilitárias para animações GSAP reutilizáveis
 */

import gsap from 'gsap';

/**
 * Fade in animation
 */
export const fadeIn = (element, config = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      ...config,
    }
  );
};

/**
 * Fade out animation
 */
export const fadeOut = (element, config = {}) => {
  return gsap.to(element, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in',
    ...config,
  });
};

/**
 * Slide in from direction
 */
export const slideIn = (element, direction = 'up', config = {}) => {
  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return gsap.fromTo(
    element,
    { opacity: 0, ...directionMap[direction] },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      ...config,
    }
  );
};

/**
 * Scale in animation
 */
export const scaleIn = (element, config = {}) => {
  return gsap.fromTo(
    element,
    { scale: 0.9, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.7)',
      ...config,
    }
  );
};

/**
 * Stagger animation para múltiplos elementos
 */
export const staggerFadeIn = (elements, config = {}) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      ...config,
    }
  );
};

/**
 * Hover scale effect
 */
export const hoverScale = (element, scale = 1.05) => {
  const onEnter = () => {
    gsap.to(element, {
      scale,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const onLeave = () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  element.addEventListener('mouseenter', onEnter);
  element.addEventListener('mouseleave', onLeave);

  return () => {
    element.removeEventListener('mouseenter', onEnter);
    element.removeEventListener('mouseleave', onLeave);
  };
};

/**
 * Glow effect animation
 */
export const glowEffect = (element, config = {}) => {
  return gsap.to(element, {
    boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)',
    duration: 0.3,
    ease: 'power2.out',
    ...config,
  });
};

/**
 * Remove glow effect
 */
export const removeGlow = (element, config = {}) => {
  return gsap.to(element, {
    boxShadow: '0 0 0px rgba(139, 92, 246, 0)',
    duration: 0.3,
    ease: 'power2.out',
    ...config,
  });
};

/**
 * Rotate animation
 */
export const rotate = (element, degrees = 360, config = {}) => {
  return gsap.to(element, {
    rotation: degrees,
    duration: 0.6,
    ease: 'power2.inOut',
    ...config,
  });
};

/**
 * Bounce animation
 */
export const bounce = (element, config = {}) => {
  return gsap.to(element, {
    y: -10,
    duration: 0.4,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
    ...config,
  });
};

/**
 * Pulse animation
 */
export const pulse = (element, config = {}) => {
  return gsap.to(element, {
    scale: 1.05,
    duration: 0.8,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
    ...config,
  });
};

/**
 * Shake animation (para erros, etc)
 */
export const shake = (element, config = {}) => {
  return gsap.fromTo(
    element,
    { x: -5 },
    {
      x: 5,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      ease: 'power1.inOut',
      ...config,
    }
  );
};

/**
 * Text reveal character by character
 */
export const textReveal = (element, config = {}) => {
  const text = element.textContent;
  element.innerHTML = text
    .split('')
    .map((char) => `<span style="display: inline-block; opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  return gsap.to(element.children, {
    opacity: 1,
    duration: 0.05,
    stagger: 0.03,
    ease: 'power2.out',
    ...config,
  });
};

/**
 * Morphing entre dois estados
 */
export const morph = (element, fromConfig = {}, toConfig = {}, duration = 0.6) => {
  return gsap.fromTo(element, fromConfig, {
    ...toConfig,
    duration,
    ease: 'power2.inOut',
  });
};

/**
 * Create entrance animation timeline
 */
export const createEntranceTimeline = (elements = [], config = {}) => {
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  if (elements.title) {
    tl.fromTo(
      elements.title,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
  }

  if (elements.subtitle) {
    tl.fromTo(
      elements.subtitle,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.4'
    );
  }

  if (elements.content) {
    tl.fromTo(
      elements.content,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.3'
    );
  }

  if (elements.cta) {
    tl.fromTo(
      elements.cta,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.4 },
      '-=0.2'
    );
  }

  return tl;
};

export default {
  fadeIn,
  fadeOut,
  slideIn,
  scaleIn,
  staggerFadeIn,
  hoverScale,
  glowEffect,
  removeGlow,
  rotate,
  bounce,
  pulse,
  shake,
  textReveal,
  morph,
  createEntranceTimeline,
};
