import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Hook para animações GSAP básicas
 * @param {Object} config - Configuração da animação GSAP
 * @param {Array} dependencies - Dependências que acionam a animação
 * @returns {Object} ref - Ref para o elemento a ser animado
 */
export const useGSAP = (config = {}, dependencies = []) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const { from, to, timeline, ...rest } = config;

    let animation;

    if (timeline) {
      // Criar timeline
      const tl = gsap.timeline(rest);
      timeline(tl, ref.current);
      animation = tl;
    } else if (from && to) {
      // fromTo animation
      animation = gsap.fromTo(ref.current, from, to);
    } else if (from) {
      // from animation
      animation = gsap.from(ref.current, { ...from, ...rest });
    } else if (to) {
      // to animation
      animation = gsap.to(ref.current, { ...to, ...rest });
    }

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, dependencies);

  return ref;
};

/**
 * Hook para fade in ao montar
 */
export const useFadeIn = (duration = 0.6, delay = 0) => {
  return useGSAP({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0, duration, delay, ease: 'power2.out' },
  });
};

/**
 * Hook para scale in ao montar
 */
export const useScaleIn = (duration = 0.5, delay = 0) => {
  return useGSAP({
    from: { scale: 0.9, opacity: 0 },
    to: { scale: 1, opacity: 1, duration, delay, ease: 'back.out(1.7)' },
  });
};

/**
 * Hook para slide in ao montar
 * @param {string} direction - Direção: 'up', 'down', 'left', 'right'
 */
export const useSlideIn = (direction = 'up', duration = 0.6, delay = 0) => {
  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return useGSAP({
    from: { ...directionMap[direction], opacity: 0 },
    to: { x: 0, y: 0, opacity: 1, duration, delay, ease: 'power2.out' },
  });
};

/**
 * Hook para animações em hover
 */
export const useHoverAnimation = (hoverConfig = {}, normalConfig = {}) => {
  const ref = useRef(null);

  const defaultHover = { scale: 1.05, duration: 0.3, ease: 'power2.out' };
  const defaultNormal = { scale: 1, duration: 0.3, ease: 'power2.out' };

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseEnter = () => {
      gsap.to(element, { ...defaultHover, ...hoverConfig });
    };

    const handleMouseLeave = () => {
      gsap.to(element, { ...defaultNormal, ...normalConfig });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};

/**
 * Hook para stagger animations (múltiplos elementos)
 */
export const useStagger = (config = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;
    if (!children.length) return;

    const {
      from = { opacity: 0, y: 20 },
      to = { opacity: 1, y: 0 },
      stagger = 0.1,
      duration = 0.6,
      ease = 'power2.out',
      ...rest
    } = config;

    const animation = gsap.fromTo(
      children,
      from,
      {
        ...to,
        stagger,
        duration,
        ease,
        ...rest,
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return ref;
};

/**
 * Hook para animações controladas manualmente
 */
export const useGSAPTimeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return timelineRef;
};

export default useGSAP;
