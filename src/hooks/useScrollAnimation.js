import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Hook para animações disparadas por scroll
 * @param {Object} config - Configuração da animação
 * @param {Object} scrollConfig - Configuração do ScrollTrigger
 */
export const useScrollAnimation = (config = {}, scrollConfig = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const defaultScrollConfig = {
      trigger: ref.current,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...scrollConfig,
    };

    const {
      from = { opacity: 0, y: 30 },
      to = { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
    } = config;

    const animation = gsap.fromTo(ref.current, from, {
      ...to,
      scrollTrigger: defaultScrollConfig,
    });

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);

  return ref;
};

/**
 * Hook para reveal ao fazer scroll
 */
export const useScrollReveal = (options = {}) => {
  const {
    direction = 'up',
    distance = 30,
    duration = 0.5,
    delay = 0,
    ease = 'power2.out',
  } = options;

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return useScrollAnimation(
    {
      from: { opacity: 0, ...directionMap[direction] },
      to: { opacity: 1, x: 0, y: 0, duration, delay, ease },
    },
    { start: 'top 85%', toggleActions: 'play none none none' }
  );
};

/**
 * Hook para parallax scroll
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const animation = gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, [speed]);

  return ref;
};

/**
 * Hook para stagger scroll reveal
 */
export const useStaggerScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;
    if (!children.length) return;

    const {
      from = { opacity: 0, y: 20 },
      to = { opacity: 1, y: 0 },
      stagger = 0.08,
      duration = 0.4,
      ease = 'power2.out',
      start = 'top 85%',
    } = options;

    const animation = gsap.fromTo(children, from, {
      ...to,
      stagger,
      duration,
      ease,
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, []);

  return ref;
};

/**
 * Hook para pin element durante scroll
 */
export const useScrollPin = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const { start = 'top top', end = '+=500', pin = true, ...rest } = options;

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start,
      end,
      pin,
      ...rest,
    });

    return () => {
      st.kill();
    };
  }, []);

  return ref;
};

/**
 * Hook para fade in sections ao scrollar
 */
export const useFadeInSection = (delay = 0) => {
  return useScrollAnimation(
    {
      from: { opacity: 0 },
      to: { opacity: 1, duration: 0.6, delay, ease: 'power2.out' },
    },
    { start: 'top 80%', toggleActions: 'play none none none' }
  );
};

export const useFadeInStagger = (stagger = 0.1, delay = 0) => {
  return useStaggerScrollReveal({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0, duration: 0.5, delay, ease: 'power2.out' },
    stagger,
    start: 'top 80%',
  });
}

export default useScrollAnimation;

