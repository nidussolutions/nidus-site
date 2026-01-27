/**
 * 🎨 Guia Rápido de Cores - Nidus
 * 
 * Use este arquivo como referência rápida para as cores do design system
 */

// ============================================
// 🎯 CORES PRINCIPAIS
// ============================================

/**
 * PRIMARY - Azul Tecnológico
 * Uso: Botões principais, links, destaques importantes
 * Contraste: Usar com texto branco (500+)
 */
export const PRIMARY = {
  lightest: 'bg-primary-50',    // Backgrounds muito claros
  light: 'bg-primary-100',       // Backgrounds claros
  subtle: 'bg-primary-200',      // Backgrounds sutis
  muted: 'bg-primary-300',       // Estados desabilitados
  default: 'bg-primary-400',     // Hover states
  main: 'bg-primary-500',        // ⭐ COR PRINCIPAL
  hover: 'bg-primary-600',       // Hover principal
  active: 'bg-primary-700',      // Active/pressed
  strong: 'bg-primary-800',      // Textos em fundos claros
  strongest: 'bg-primary-900',   // Textos escuros
};

/**
 * SECONDARY - Verde Menta
 * Uso: Ações secundárias, badges, highlights
 * Contraste: Usar com texto branco (500+)
 */
export const SECONDARY = {
  lightest: 'bg-secondary-50',
  light: 'bg-secondary-100',
  subtle: 'bg-secondary-200',
  muted: 'bg-secondary-300',
  default: 'bg-secondary-400',
  main: 'bg-secondary-500',     // ⭐ COR SECUNDÁRIA
  hover: 'bg-secondary-600',
  active: 'bg-secondary-700',
  strong: 'bg-secondary-800',
  strongest: 'bg-secondary-900',
};

/**
 * ACCENT - Lilás Pastel
 * Uso: CTAs especiais, destaques criativos, badges premium
 * Contraste: Usar com texto branco (500+)
 */
export const ACCENT = {
  lightest: 'bg-accent-50',
  light: 'bg-accent-100',
  subtle: 'bg-accent-200',
  muted: 'bg-accent-300',
  default: 'bg-accent-400',
  main: 'bg-accent-500',        // ⭐ COR ACCENT
  hover: 'bg-accent-600',
  active: 'bg-accent-700',
  strong: 'bg-accent-800',
  strongest: 'bg-accent-900',
};

// ============================================
// 🎨 CORES NEUTRAS
// ============================================

/**
 * NEUTRAL - Tons Azulados Suaves
 * Uso: Backgrounds, textos, bordas, divisores
 */
export const NEUTRAL = {
  // Backgrounds
  bg_primary: 'bg-neutral-50',      // Fundo principal do site
  bg_secondary: 'bg-neutral-100',   // Fundo alternativo
  bg_tertiary: 'bg-neutral-200',    // Fundo elevado
  
  // Bordas
  border_subtle: 'border-neutral-200',
  border_default: 'border-neutral-300',
  border_strong: 'border-neutral-400',
  
  // Textos
  text_disabled: 'text-neutral-400',
  text_tertiary: 'text-neutral-500',
  text_secondary: 'text-neutral-600',
  text_primary: 'text-neutral-900',   // ⭐ TEXTO PRINCIPAL
};

// ============================================
// ✅ CORES SEMÂNTICAS
// ============================================

/**
 * SUCCESS - Verde Esmeralda
 * Uso: Mensagens de sucesso, confirmações, status positivos
 */
export const SUCCESS = {
  light: 'bg-[#6ee7b7] text-green-900',
  default: 'bg-[#34d399] text-white',
  dark: 'bg-[#10b981] text-white',
};

/**
 * WARNING - Amarelo Dourado
 * Uso: Avisos, atenção, estados de cuidado
 */
export const WARNING = {
  light: 'bg-[#fcd34d] text-yellow-900',
  default: 'bg-[#fbbf24] text-white',
  dark: 'bg-[#f59e0b] text-white',
};

/**
 * ERROR - Rosa Coral
 * Uso: Erros, estados destrutivos, validações
 */
export const ERROR = {
  light: 'bg-[#fca5a5] text-red-900',
  default: 'bg-[#f87171] text-white',
  dark: 'bg-[#ef4444] text-white',
};

/**
 * INFO - Azul Céu
 * Uso: Informações, dicas, tooltips
 */
export const INFO = {
  light: 'bg-[#7dd3fc] text-sky-900',
  default: 'bg-[#38bdf8] text-white',
  dark: 'bg-[#0ea5e9] text-white',
};

// ============================================
// 🎭 EFEITOS E UTILIDADES
// ============================================

/**
 * SHADOWS - Sombras Coloridas
 */
export const SHADOWS = {
  primary: 'shadow-colored-primary',      // Sombra azul suave
  secondary: 'shadow-colored-secondary',  // Sombra verde suave
  accent: 'shadow-colored-accent',        // Sombra lilás suave
  glass: 'shadow-glass',                  // Sombra para glass effect
  glow: 'shadow-glow',                    // Glow effect
  glow_sm: 'shadow-glow-sm',
  glow_lg: 'shadow-glow-lg',
};

/**
 * GLASS - Efeitos de Vidro
 */
export const GLASS = {
  light: 'glass',           // Glass leve
  strong: 'glass-strong',   // Glass forte
};

/**
 * GRADIENTS - Gradientes Prontos
 */
export const GRADIENTS = {
  // Primary → Secondary
  tech: 'bg-gradient-to-br from-primary-500 to-secondary-500',
  tech_light: 'bg-gradient-to-br from-primary-50 to-secondary-50',
  
  // Primary → Accent
  creative: 'bg-gradient-to-br from-primary-500 to-accent-500',
  creative_light: 'bg-gradient-to-br from-primary-100 to-accent-100',
  
  // Secondary → Accent
  fresh: 'bg-gradient-to-br from-secondary-500 to-accent-500',
  fresh_light: 'bg-gradient-to-br from-secondary-50 to-accent-50',
  
  // Hero backgrounds
  hero: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50',
};

/**
 * PATTERNS - Padrões de Fundo
 */
export const PATTERNS = {
  dots: 'bg-dot-pattern',   // Padrão de pontos
  grid: 'bg-grid-pattern',  // Padrão de grade
};

// ============================================
// 📋 EXEMPLOS DE USO COMUM
// ============================================

/**
 * BOTÕES
 */
export const BUTTON_EXAMPLES = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white',
  secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
  accent: 'bg-accent-500 hover:bg-accent-600 text-white',
  outline_primary: 'border-2 border-primary-500 text-primary-700 hover:bg-primary-50',
  outline_secondary: 'border-2 border-secondary-500 text-secondary-700 hover:bg-secondary-50',
  ghost: 'text-neutral-700 hover:bg-neutral-100',
};

/**
 * CARDS
 */
export const CARD_EXAMPLES = {
  default: 'bg-white border border-neutral-200 shadow-sm',
  elevated: 'bg-white border border-neutral-200 shadow-colored-primary',
  interactive: 'bg-white border border-neutral-200 hover:shadow-colored-primary transition-shadow',
  glass: 'glass border-primary-200',
};

/**
 * BADGES
 */
export const BADGE_EXAMPLES = {
  primary: 'bg-primary-500 text-white',
  secondary: 'bg-secondary-500 text-white',
  accent: 'bg-accent-500 text-white',
  success: 'bg-[#34d399] text-white',
  warning: 'bg-[#fbbf24] text-white',
  error: 'bg-[#f87171] text-white',
  info: 'bg-[#38bdf8] text-white',
  neutral: 'bg-neutral-200 text-neutral-800',
};

/**
 * INPUTS
 */
export const INPUT_EXAMPLES = {
  default: 'border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
  error: 'border border-error focus:border-error focus:ring-2 focus:ring-error/20',
  success: 'border border-success focus:border-success focus:ring-2 focus:ring-success/20',
};

/**
 * LINKS
 */
export const LINK_EXAMPLES = {
  primary: 'text-primary-600 hover:text-primary-700 hover:underline',
  secondary: 'text-secondary-600 hover:text-secondary-700 hover:underline',
  muted: 'text-neutral-600 hover:text-neutral-900',
};

/**
 * BACKGROUNDS
 */
export const BACKGROUND_EXAMPLES = {
  page: 'bg-neutral-50',                // Fundo da página
  section: 'bg-white',                  // Fundo de seção
  section_alt: 'bg-neutral-100',        // Fundo alternativo
  hero: 'bg-gradient-to-br from-primary-50 to-secondary-50',
  card: 'bg-white',
  elevated: 'bg-white shadow-colored-primary',
};

// ============================================
// 💡 DICAS DE USO
// ============================================

/**
 * CONTRASTE DE TEXTO
 * 
 * - Tons 50-400: Use texto escuro (neutral-900 ou primary-900)
 * - Tons 500-900: Use texto branco
 * 
 * Exemplo:
 * ✅ <div className="bg-primary-500 text-white">Bom contraste</div>
 * ✅ <div className="bg-primary-100 text-primary-900">Bom contraste</div>
 * ❌ <div className="bg-primary-500 text-primary-900">Mal contraste</div>
 */

/**
 * HIERARQUIA VISUAL
 * 
 * 1. Mais importante: primary-500 ou accent-500
 * 2. Secundário: secondary-500 ou primary-100
 * 3. Terciário: neutral-600 ou neutral-100
 * 4. Desabilitado: neutral-400
 */

/**
 * ESTADOS INTERATIVOS
 * 
 * - Default: Cor base (ex: primary-500)
 * - Hover: +100 mais escuro (ex: primary-600)
 * - Active/Pressed: +200 mais escuro (ex: primary-700)
 * - Focus: Ring com /20 alpha (ex: ring-primary-500/20)
 * - Disabled: neutral-400 com opacity-50
 */

export default {
  PRIMARY,
  SECONDARY,
  ACCENT,
  NEUTRAL,
  SUCCESS,
  WARNING,
  ERROR,
  INFO,
  SHADOWS,
  GLASS,
  GRADIENTS,
  PATTERNS,
  BUTTON_EXAMPLES,
  CARD_EXAMPLES,
  BADGE_EXAMPLES,
  INPUT_EXAMPLES,
  LINK_EXAMPLES,
  BACKGROUND_EXAMPLES,
};
