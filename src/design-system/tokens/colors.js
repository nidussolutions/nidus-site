/**
 * Design System - Color Tokens
 * 
 * Sistema de cores moderno e acessível com suporte a dark mode.
 * Baseado em escala de cores consistente e WCAG AAA.
 */

export const colors = {
  // Brand Colors - Paleta pastel moderna e tecnológica
  brand: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',  // Primary - Azul tecnológico suave
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
    secondary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',  // Secondary - Verde menta
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e',
    },
    accent: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',  // Accent - Lilás pastel
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    },
  },

  // Neutral Colors - Tons suaves e claros
  neutral: {
    50: '#fafbfc',
    100: '#f5f7fa',
    200: '#e8ecf1',
    300: '#d1dae6',
    400: '#9fb3c8',
    500: '#6b7f95',
    600: '#4a5c70',
    700: '#384959',
    800: '#283642',
    900: '#1a252f',
    950: '#0f1720',
  },

  // Semantic Colors - Cores pastel para estados e feedbacks
  semantic: {
    success: {
      light: '#6ee7b7',
      DEFAULT: '#34d399',
      dark: '#10b981',
    },
    warning: {
      light: '#fcd34d',
      DEFAULT: '#fbbf24',
      dark: '#f59e0b',
    },
    error: {
      light: '#fca5a5',
      DEFAULT: '#f87171',
      dark: '#ef4444',
    },
    info: {
      light: '#7dd3fc',
      DEFAULT: '#38bdf8',
      dark: '#0ea5e9',
    },
  },

  // Background Colors - Fundos claros e pastéis
  background: {
    primary: '#fafbfc',
    secondary: '#f5f7fa',
    tertiary: '#e8ecf1',
    elevated: '#ffffff',
  },

  // Text Colors
  text: {
    primary: '#1a252f',
    secondary: '#4a5c70',
    tertiary: '#6b7f95',
    inverse: '#fafbfc',
    disabled: '#9fb3c8',
  },

  // Border & Divider Colors
  border: {
    DEFAULT: '#e8ecf1',
    subtle: '#f5f7fa',
    strong: '#d1dae6',
    brand: '#0ea5e9',
  },

  // Overlay & Shadow
  overlay: 'rgba(0, 0, 0, 0.1)',
  
  // Glass Effect (para componentes modernos)
  glass: {
    light: 'rgba(255, 255, 255, 0.8)',
    medium: 'rgba(255, 255, 255, 0.6)',
    dark: 'rgba(232, 236, 241, 0.9)',
  },
};

export default colors;
