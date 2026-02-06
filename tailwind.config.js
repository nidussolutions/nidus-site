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
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        // Brand Primary (Rust - Laranja queimado profissional)
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: '#fef6ee',
          100: '#fdebd8',
          200: '#fad3b0',
          300: '#f7b37d',
          400: '#ef6820',
          500: '#C1440E', // Rust principal - FORTE
          600: '#a33a0c',
          700: '#8a310a',
          800: '#712808',
          900: '#5a2007',
          950: '#3d1504',
        },
        // Brand Secondary (Teal - Verde-água profissional)
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#14b8a6',
          500: '#2A9D8F', // Teal principal - FORTE
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#042f2e',
          950: '#031f1c',
        },
        // Brand Accent (Mustard/Coral - Tons quentes profissionais)
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#E9C46A', // Mustard principal - FORTE
          600: '#F4A261', // Coral - FORTE
          700: '#d97706',
          800: '#a16207',
          900: '#854d0e',
          950: '#713f12',
        },
        // Neutral (Vintage Paper & Modern Slate)
        neutral: {
          50: '#F8FAFC',   // Ghost - branco moderno
          100: '#FFF8E7',  // Cream
          200: '#F5E6D3',  // Beige papel vintage
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#264653',  // Navy - FORTE
          900: '#1E293B',  // Slate - FORTE
          950: '#0f172a',
        },
        // Semantic colors - Retro warm tones
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
        // Legacy support - Updated to retro colors
        'nidus-orange': '#f97316',
        'nidus-mustard': '#f59e0b',
        'nidus-brown': '#9c6644',
        'nidus-cream': '#f9f6f0',
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
      
      // Shadows - Retro heavy offset style
      boxShadow: {
        'glow': '0 0 30px rgba(249, 115, 22, 0.3)',
        'glow-sm': '0 0 15px rgba(249, 115, 22, 0.2)',
        'glow-lg': '0 0 40px rgba(249, 115, 22, 0.4)',
        'glow-xl': '0 0 50px rgba(249, 115, 22, 0.5)',
        'retro': '8px 8px 0px rgba(38, 31, 26, 0.15)',
        'retro-sm': '4px 4px 0px rgba(38, 31, 26, 0.12)',
        'retro-lg': '12px 12px 0px rgba(38, 31, 26, 0.2)',
        'retro-xl': '16px 16px 0px rgba(38, 31, 26, 0.25)',
        'retro-color': '6px 6px 0px rgba(249, 115, 22, 0.4)',
        'retro-color-double': '8px 8px 0px #f59e0b, 12px 12px 0px rgba(38, 31, 26, 0.15)',
        'colored-primary': '0 10px 25px -5px rgba(249, 115, 22, 0.3), 0 8px 10px -6px rgba(249, 115, 22, 0.2)',
        'colored-secondary': '0 10px 25px -5px rgba(245, 158, 11, 0.3), 0 8px 10px -6px rgba(245, 158, 11, 0.2)',
        'colored-accent': '0 10px 25px -5px rgba(156, 102, 68, 0.3), 0 8px 10px -6px rgba(156, 102, 68, 0.2)',
        'glass': '0 8px 32px 0 rgba(38, 31, 26, 0.1)',
      },
      
      // Border Radius - More rounded retro style
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xl: "calc(var(--radius) + 4px)",
        '2xl': "calc(var(--radius) + 8px)",
        '3xl': "calc(var(--radius) + 12px)",
      },
      
      // Border Width - Thicker borders for retro look
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
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
        "gradient-x": {
          '0%, 100%': { 
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': { 
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
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
        "gradient-x": "gradient-x 3s ease infinite",
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