/**
 * Design System - Color Tokens
 * 
 * Sistema de cores moderno e acessível com suporte a dark mode.
 * Baseado em escala de cores consistente e WCAG AAA.
 */

export const colors = {
  // Brand Colors - Paleta principal do Nidus
  brand: {
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',  // Primary
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    },
    secondary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',  // Secondary
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    accent: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',  // Accent
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
      950: '#4a044e',
    },
  },

  // Neutral Colors - Tons de cinza para backgrounds e textos
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },

  // Semantic Colors - Cores para estados e feedbacks
  semantic: {
    success: {
      light: '#22c55e',
      DEFAULT: '#16a34a',
      dark: '#15803d',
    },
    warning: {
      light: '#fbbf24',
      DEFAULT: '#f59e0b',
      dark: '#d97706',
    },
    error: {
      light: '#ef4444',
      DEFAULT: '#dc2626',
      dark: '#b91c1c',
    },
    info: {
      light: '#3b82f6',
      DEFAULT: '#2563eb',
      dark: '#1d4ed8',
    },
  },

  // Background Colors - Para diferentes contextos
  background: {
    primary: '#0a0a0a',
    secondary: '#171717',
    tertiary: '#262626',
    elevated: '#404040',
  },

  // Text Colors
  text: {
    primary: '#fafafa',
    secondary: '#d4d4d4',
    tertiary: '#a3a3a3',
    inverse: '#0a0a0a',
    disabled: '#525252',
  },

  // Border & Divider Colors
  border: {
    DEFAULT: '#262626',
    subtle: '#171717',
    strong: '#404040',
    brand: '#8b5cf6',
  },

  // Overlay & Shadow
  overlay: 'rgba(0, 0, 0, 0.5)',
  
  // Glass Effect (para componentes modernos)
  glass: {
    light: 'rgba(255, 255, 255, 0.05)',
    medium: 'rgba(255, 255, 255, 0.1)',
    dark: 'rgba(0, 0, 0, 0.3)',
  },
};

export default colors;
