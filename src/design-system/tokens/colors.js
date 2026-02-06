/**
 * Design System - Color Tokens
 * 
 * Sistema de cores Retro-Modern / Neo-Retro
 * Paleta quente com laranja, amarelo mostarda, marrom e tons de creme
 */

export const colors = {
  // Brand Colors - Paleta Retro quente e vibrante
  brand: {
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',  // Primary - Laranja retro vibrante
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
    secondary: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',  // Secondary - Amarelo mostarda
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    accent: {
      50: '#fdf8f6',
      100: '#f2e8e5',
      200: '#eaddd7',
      300: '#e0cec7',
      400: '#d2bab0',
      500: '#bfa094',
      600: '#a18072',
      700: '#9c6644',  // Accent - Marrom retro quente
      800: '#8a5a3c',
      900: '#7c4e35',
      950: '#3e2618',
    },
  },

  // Neutral Colors - Tons quentes (bege, creme, marrom)
  neutral: {
    50: '#f9f6f0',
    100: '#f3ede3',
    200: '#e7dccb',
    300: '#d8c4a8',
    400: '#c7a87f',
    500: '#b99364',
    600: '#a37d56',
    700: '#88654a',
    800: '#6e5341',
    900: '#5a4536',
    950: '#30241c',
  },

  // Semantic Colors - Cores retro para estados e feedbacks
  semantic: {
    success: {
      light: '#86efac',
      DEFAULT: '#22c55e',
      dark: '#16a34a',
    },
    warning: {
      light: '#fcd34d',
      DEFAULT: '#f59e0b',
      dark: '#d97706',
    },
    error: {
      light: '#fca5a5',
      DEFAULT: '#dc2626',
      dark: '#b91c1c',
    },
    info: {
      light: '#fed7aa',
      DEFAULT: '#f97316',
      dark: '#ea580c',
    },
  },

  // Background Colors - Fundos quentes creme/papel
  background: {
    primary: '#f9f6f0',
    secondary: '#f3ede3',
    tertiary: '#e7dccb',
    elevated: '#fdfcfa',
  },

  // Text Colors - Tons marrom escuro
  text: {
    primary: '#30241c',
    secondary: '#6e5341',
    tertiary: '#88654a',
    inverse: '#f9f6f0',
    disabled: '#c7a87f',
  },

  // Border & Divider Colors - Warm tones
  border: {
    DEFAULT: '#e7dccb',
    subtle: '#f3ede3',
    strong: '#d8c4a8',
    brand: '#f97316',
  },

  // Overlay & Shadow - Warm dark overlay
  overlay: 'rgba(48, 36, 28, 0.15)',
  
  // Glass Effect - Warm cream tones
  glass: {
    light: 'rgba(249, 246, 240, 0.85)',
    medium: 'rgba(249, 246, 240, 0.65)',
    dark: 'rgba(243, 237, 227, 0.9)',
  },
};

export default colors;
