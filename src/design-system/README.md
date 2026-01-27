# Design System - Nidus

Sistema de design moderno e escalável para facilitar manutenção e garantir consistência visual.

## 📁 Estrutura

```
design-system/
├── index.js              # Export principal
├── tokens/               # Design tokens
│   ├── colors.js        # Paleta de cores
│   ├── typography.js    # Tipografia
│   ├── spacing.js       # Espaçamentos
│   ├── shadows.js       # Sombras e efeitos
│   ├── radius.js        # Border radius
│   └── animations.js    # Animações e transições
└── README.md            # Esta documentação
```

## 🎨 Tokens

### Colors (Cores)

Sistema de cores baseado em escalas consistentes com suporte a dark mode:

- **Brand Colors**: Primary (Purple), Secondary (Blue), Accent (Pink)
- **Neutral**: Escala de cinzas (50-950)
- **Semantic**: Success, Warning, Error, Info
- **Background**: Primary, Secondary, Tertiary, Elevated
- **Text**: Primary, Secondary, Tertiary, Disabled
- **Glass**: Para efeitos de glassmorphism

### Typography (Tipografia)

Sistema tipográfico modular com:

- **Font Families**: Sans, Mono, Display
- **Font Sizes**: xs até 9xl (escala modular 1.250)
- **Font Weights**: Thin até Black
- **Line Heights**: None até Loose
- **Letter Spacing**: Tighter até Widest
- **Text Styles**: Presets para H1-H6, Body, Label, Caption, Overline

### Spacing (Espaçamento)

Baseado em múltiplos de 4px (0 até 96):

- **Base Spacing**: 0, px, 0.5 até 96
- **Layout Spacing**: pageX, pageY, sectionGap, containerMaxWidth
- **Component Spacing**: button, input, card, modal

### Shadows (Sombras)

Sistema de elevação e efeitos visuais:

- **Elevation**: none, sm, DEFAULT, md, lg, xl, 2xl, inner
- **Glow**: sm, DEFAULT, lg, xl (para elementos interativos)
- **Colored**: primary, secondary, accent (para CTAs)
- **Glass**: Para componentes com backdrop-blur

### Radius (Border Radius)

Sistema de arredondamento de bordas:

- **Base**: none, sm, DEFAULT, md, lg, xl, 2xl, 3xl, full
- **Component**: button, input, card, modal, badge, avatar

### Animations (Animações)

Sistema de animações e transições:

- **Easing**: linear, easeIn, easeOut, easeInOut, spring, bounce, smooth
- **Duration**: instant, fast, normal, slow, slower, slowest
- **Keyframes**: fadeIn, slideIn, scaleIn, spin, pulse, bounce, shimmer
- **Transition Presets**: all, colors, transform, opacity, shadow
- **GSAP Presets**: fadeInUp, fadeInScale, staggerChildren, scrollReveal

## 🚀 Uso

### Importação básica

```javascript
import { colors, typography, spacing } from '@/design-system';

// Usar tokens
const primaryColor = colors.brand.primary[500];
const headingSize = typography.fontSize['3xl'];
const cardPadding = spacing[6];
```

### Importação completa

```javascript
import designSystem from '@/design-system';

const { tokens, breakpoints, zIndex } = designSystem;
```

### Em componentes React

```jsx
import { colors, shadows } from '@/design-system';

const Card = () => (
  <div 
    style={{
      backgroundColor: colors.background.secondary,
      boxShadow: shadows.lg,
      borderRadius: '0.75rem',
    }}
  >
    Conteúdo
  </div>
);
```

### Em Tailwind Config

Os tokens podem ser integrados diretamente no `tailwind.config.js` para usar com classes do Tailwind:

```javascript
import { colors, spacing, shadows } from './src/design-system';

export default {
  theme: {
    extend: {
      colors: colors.brand,
      spacing: spacing,
      boxShadow: shadows,
    },
  },
};
```

## 🎯 Benefícios

1. **Consistência**: Todos os valores em um só lugar
2. **Manutenção Fácil**: Altere uma vez, reflita em todo o projeto
3. **Escalabilidade**: Adicione novos tokens sem quebrar o existente
4. **Type Safety**: Pode ser facilmente tipado com TypeScript
5. **Documentação**: Self-documented através dos comentários

## 🔄 Atualizações

Para adicionar novos tokens:

1. Edite o arquivo correspondente em `tokens/`
2. Mantenha a convenção de nomenclatura
3. Adicione comentários descritivos
4. Atualize esta documentação se necessário

## 💡 Melhores Práticas

- Sempre use os tokens ao invés de valores hardcoded
- Prefira semantic colors para estados (success, error, etc)
- Use os presets de animação para consistência
- Mantenha a hierarquia de espaçamento (4px base)
- Documente novos tokens adicionados
