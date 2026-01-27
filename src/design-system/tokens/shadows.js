/**
 * Design System - Shadow Tokens
 * 
 * Sistema de sombras para criar hierarquia e profundidade visual.
 * Otimizado para dark mode com sombras mais sutis.
 */

export const shadows = {
  // Elevation Shadows
  none: 'none',
  
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
  
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)',
  
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)',
  
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)',
  
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',

  // Glow Effects (para elementos interativos)
  glow: {
    sm: '0 0 10px rgba(139, 92, 246, 0.3)',
    DEFAULT: '0 0 20px rgba(139, 92, 246, 0.4)',
    lg: '0 0 30px rgba(139, 92, 246, 0.5)',
    xl: '0 0 40px rgba(139, 92, 246, 0.6)',
  },

  // Colored Shadows (para CTAs e elementos importantes)
  colored: {
    primary: '0 10px 25px -5px rgba(139, 92, 246, 0.3), 0 8px 10px -6px rgba(139, 92, 246, 0.2)',
    secondary: '0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.2)',
    accent: '0 10px 25px -5px rgba(217, 70, 239, 0.3), 0 8px 10px -6px rgba(217, 70, 239, 0.2)',
  },

  // Glass Effect Shadows (para componentes com backdrop-blur)
  glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
};

export default shadows;
