/**
 * Configuração global otimizada do GSAP
 * Carregado uma vez no início da aplicação para melhor performance
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugins uma vez
gsap.registerPlugin(ScrollTrigger);

// Configurações globais para melhor performance
gsap.config({
  force3D: true, // Força aceleração de hardware
  nullTargetWarn: false, // Remove warnings desnecessários
  trialWarn: false,
  autoSleep: 60, // Pausa animações quando não visíveis
});

// Configurações otimizadas do ScrollTrigger
ScrollTrigger.config({
  limitCallbacks: true, // Limita callbacks para melhor performance
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize', // Eventos mínimos necessários
});

// Configurações padrão para todas as animações GSAP
gsap.defaults({
  duration: 0.5, // Duração padrão reduzida
  ease: 'power2.out', // Ease mais performático que power3
  overwrite: 'auto', // Previne conflitos de animações
  lazy: false, // Melhor precisão de valores
});

// Função para otimizar ScrollTrigger em lote
export const createBatchScrollTrigger = (elements, config = {}) => {
  if (!elements || elements.length === 0) return [];

  const defaultConfig = {
    start: 'top 85%',
    once: true, // Executa apenas uma vez para economia de recursos
    ...config,
  };

  return ScrollTrigger.batch(elements, {
    ...defaultConfig,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: true,
      });
    },
  });
};

// Função helper para limpar todos os ScrollTriggers
export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((st) => st.kill());
};

// Função para pausar/resumir ScrollTrigger (útil para modais/overlays)
export const toggleScrollTrigger = (enabled = true) => {
  if (enabled) {
    ScrollTrigger.refresh();
  } else {
    ScrollTrigger.getAll().forEach((st) => st.disable());
  }
};

// Função para criar animações otimizadas de fade in
export const fadeIn = (element, config = {}) => {
  const defaults = {
    opacity: 1,
    duration: 0.4,
    ease: 'power2.out',
  };

  return gsap.to(element, { ...defaults, ...config });
};

// Função para criar animações otimizadas de slide
export const slideIn = (element, direction = 'up', config = {}) => {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  const defaults = {
    opacity: 0,
    ...directions[direction],
  };

  return gsap.from(element, {
    ...defaults,
    opacity: 1,
    x: 0,
    y: 0,
    duration: 0.4,
    ease: 'power2.out',
    ...config,
  });
};

export { gsap, ScrollTrigger };
export default gsap;
