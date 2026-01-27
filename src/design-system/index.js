/**
 * Design System - Main Export
 * 
 * Sistema de design unificado do Nidus com todos os tokens,
 * componentes e utilitários para fácil manutenção.
 */

import colors from './tokens/colors';
import typography from './tokens/typography';
import spacing from './tokens/spacing';
import shadows from './tokens/shadows';
import radius from './tokens/radius';
import animations from './tokens/animations';

// Design Tokens consolidados
export const tokens = {
  colors,
  typography,
  spacing,
  shadows,
  radius,
  animations,
};

// Breakpoints responsivos
export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Z-index scale
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
};

// Export individual tokens for convenience
export { colors, typography, spacing, shadows, radius, animations };

// Export default
export default {
  tokens,
  breakpoints,
  zIndex,
};
