/**
 * Design System - Border Radius Tokens
 * 
 * Sistema de border radius para manter consistência em
 * todos os componentes do design system.
 */

export const radius = {
  none: '0',
  sm: '0.25rem',      // 4px
  DEFAULT: '0.5rem',  // 8px
  md: '0.625rem',     // 10px
  lg: '0.75rem',      // 12px
  xl: '1rem',         // 16px
  '2xl': '1.5rem',    // 24px
  '3xl': '2rem',      // 32px
  full: '9999px',
};

// Component-specific radius
export const componentRadius = {
  button: '0.5rem',
  input: '0.5rem',
  card: '0.75rem',
  modal: '1rem',
  badge: '9999px',
  avatar: '9999px',
};

export default radius;
