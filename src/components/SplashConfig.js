/**
 * Splash Configuration
 * 
 * Escolha qual variante de splash screen usar
 */

import SplashScreen from './SplashScreen';
import { 
  MinimalSplash, 
  GlitchSplash, 
  CinematicSplash, 
  ParticlesSplash 
} from './SplashVariants';

// Configuração - Escolha sua variante preferida
export const SPLASH_CONFIG = {
  // Opções: 'default', 'minimal', 'glitch', 'cinematic', 'particles'
  variant: "cinematic",

  // Tempo mínimo de exibição (ms)
  minDisplayTime: 1500,

  // Mostrar botão de pular
  showSkipButton: true,

  // Mostrar apenas no carregamento inicial do site
  showOnlyOnLoad: true,
};

// Mapa de variantes
const SPLASH_VARIANTS = {
  default: SplashScreen,
  minimal: MinimalSplash,
  glitch: GlitchSplash,
  cinematic: CinematicSplash,
  particles: ParticlesSplash,
};

/**
 * Get Splash Component baseado na configuração
 */
export const getSplashComponent = () => {
  const Component = SPLASH_VARIANTS[SPLASH_CONFIG.variant];
  
  if (!Component) {
    console.warn(`Splash variant "${SPLASH_CONFIG.variant}" not found. Using default.`);
    return SPLASH_VARIANTS.default;
  }
  
  return Component;
};

export default SPLASH_CONFIG;
