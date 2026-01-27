/** @type {import('tailwindcss').Config} */
import radixPlugin from 'tailwindcss-radix';

export default {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Brand Primary (Sky Blue - Tecnológico)
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Brand Secondary (Teal - Verde menta)
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        // Brand Accent (Purple - Lilás pastel)
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        // Neutral (Grayscale suave)
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
        // Semantic colors
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
        // Legacy support
        'nidus-purple': '#a855f7',
        'nidus-blue': '#0ea5e9',
        'nidus-blue-dark': '#0369a1',
        'nidus-blue-light': '#38bdf8',
        'nidus-white': '#fafbfc',
        // CSS Variables for shadcn/ui
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      // Shadows
      boxShadow: {
        'glow': '0 0 20px rgba(14, 165, 233, 0.3)',
        'glow-sm': '0 0 10px rgba(14, 165, 233, 0.2)',
        'glow-lg': '0 0 30px rgba(14, 165, 233, 0.4)',
        'glow-xl': '0 0 40px rgba(14, 165, 233, 0.5)',
        'colored-primary': '0 10px 25px -5px rgba(14, 165, 233, 0.25), 0 8px 10px -6px rgba(14, 165, 233, 0.15)',
        'colored-secondary': '0 10px 25px -5px rgba(20, 184, 166, 0.25), 0 8px 10px -6px rgba(20, 184, 166, 0.15)',
        'colored-accent': '0 10px 25px -5px rgba(168, 85, 247, 0.25), 0 8px 10px -6px rgba(168, 85, 247, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
      
      // Border Radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      
      // Animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        "fade-out": {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        "slide-in-up": {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        "slide-in-down": {
          from: { transform: 'translateY(-20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        "slide-in-left": {
          from: { transform: 'translateX(-20px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        "slide-in-right": {
          from: { transform: 'translateX(20px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        "scale-in": {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        "scale-out": {
          from: { transform: 'scale(1)', opacity: '1' },
          to: { transform: 'scale(0.95)', opacity: '0' },
        },
        "shimmer": {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "slide-in-up": "slide-in-up 0.5s ease-out",
        "slide-in-down": "slide-in-down 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "scale-out": "scale-out 0.5s ease-out",
        "shimmer": "shimmer 2s linear infinite",
      },
      
      // Transition durations
      transitionDuration: {
        '0': '0ms',
        '50': '50ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
        '500': '500ms',
        '750': '750ms',
        '1000': '1000ms',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
    radixPlugin,
    require('@tailwindcss/typography'),
  ],
};