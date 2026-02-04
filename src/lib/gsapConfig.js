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
  syncInterval: 24, // ~40fps, melhor performance que 60fps em alguns casos
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize', // Eventos mínimos necessários
});

// Configurações padrão para todas as animações GSAP
gsap.defaults({
  duration: 0.5, // Duração padrão reduzida
  ease: 'power2.out', // Ease mais performático que power3
  overwrite: 'auto', // Previne conflitos de animações
  lazy: false, // Melhor precisão de valores
});

export { gsap, ScrollTrigger };
export default gsap;
