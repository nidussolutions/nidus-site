# 🌟 Splash Screen - Nidus

Sistema de Splash Screen com múltiplas variantes e animações GSAP suaves.

## 📋 Variantes Disponíveis

### 1. **Default** - Splash completo com letras animadas
Localização: `src/components/SplashScreen.jsx`

```jsx
import SplashScreen from '@/components/SplashScreen';

<SplashScreen 
  onComplete={() => console.log('Splash completed')}
  showSkipButton={false}
/>
```

**Características:**
- Animação 3D nas letras
- Efeito glow progressivo
- Pulse suave
- Grid pattern de fundo
- Loading indicator

---

### 2. **Minimal** - Simples e elegante
```jsx
import { MinimalSplash } from '@/components/SplashVariants';

<MinimalSplash onComplete={handleComplete} />
```

**Características:**
- Simples fade in com scale
- Gradient text
- Minimalista
- Rápida (1.5s total)

---

### 3. **Glitch** - Efeito tech moderno
```jsx
import { GlitchSplash } from '@/components/SplashVariants';

<GlitchSplash onComplete={handleComplete} />
```

**Características:**
- Efeito glitch
- Typography monospace
- Scale out dramático
- Visual tech/futurista

---

### 4. **Cinematic** - Reveal cinematográfico
```jsx
import { CinematicSplash } from '@/components/SplashVariants';

<CinematicSplash onComplete={handleComplete} />
```

**Características:**
- Barras cinematográficas
- Reveal dramático
- Efeito de cortinas
- Visual premium

---

### 5. **Particles** - Com partículas animadas
```jsx
import { ParticlesSplash } from '@/components/SplashVariants';

<ParticlesSplash onComplete={handleComplete} />
```

**Características:**
- 50 partículas animadas
- Movimento orgânico
- Visual moderno
- Altamente dinâmico

---

## 🎯 Hook useSplashScreen

Hook para gerenciar estado e preferências do splash:

```jsx
import { useSplashScreen } from '@/hooks/useSplashScreen';

const { 
  showSplash, 
  handleSplashComplete,
  skipSplash,
  resetSplashPreference 
} = useSplashScreen(2000, true);

// showSplash: boolean - Se deve mostrar splash
// handleSplashComplete: function - Callback quando splash termina
// skipSplash: function - Pular splash manualmente
// resetSplashPreference: function - Resetar preferência salva
```

### Parâmetros

- `minDisplayTime` (default: 2000): Tempo mínimo em ms
- `persistPreference` (default: true): Salvar no localStorage

---

## 💡 Uso no App.jsx

```jsx
import { useSplashScreen } from '@/hooks/useSplashScreen';
import SplashScreen from '@/components/SplashScreen';
// ou
import { MinimalSplash, GlitchSplash } from '@/components/SplashVariants';

function App() {
  const { showSplash, handleSplashComplete } = useSplashScreen(2000, true);

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    // Resto do app...
  );
}
```

---

## ⚙️ Customização

### Alterar Cores

Edite `SplashScreen.jsx`:

```jsx
// Trocar gradient
background: `linear-gradient(135deg, ${colors.brand.primary[400]}, ${colors.brand.accent[400]})`,

// Trocar cor de glow
textShadow: '0 0 40px rgba(139, 92, 246, 0.8)',
```

### Alterar Timing

```jsx
// No hook
useSplashScreen(3000) // 3 segundos mínimo

// Nas animações (SplashScreen.jsx)
duration: 0.8, // Aumentar/diminuir velocidade
stagger: 0.08, // Delay entre letras
```

### Adicionar Skip Button

```jsx
<SplashScreen 
  onComplete={handleSplashComplete}
  showSkipButton={true}
/>
```

---

## 🎨 Criar Variante Customizada

```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomSplash = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete,
        });
      },
    });

    // Sua animação customizada
    tl.from(logoRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 bg-black">
      <h1 ref={logoRef} className="text-9xl">NIDUS</h1>
    </div>
  );
};
```

---

## 🔧 Persistência

### Mostrar Splash Sempre

```jsx
useSplashScreen(2000, false) // false = não salva preferência
```

### Resetar Preferência

```jsx
const { resetSplashPreference } = useSplashScreen();

// Em algum botão de configurações
<button onClick={resetSplashPreference}>
  Ver Splash Novamente
</button>
```

### Verificar se Já Viu

```jsx
const hasSeenSplash = localStorage.getItem('nidus-splash-seen');
```

---

## 📱 Responsivo

Todas as variantes são responsivas:

```jsx
// Classes Tailwind usam breakpoints
className="text-7xl md:text-9xl"

// Tamanhos se ajustam automaticamente
```

---

## 🎭 Animações GSAP

Todas as animações usam GSAP para:
- Performance superior
- Controle preciso
- Easing functions profissionais
- Timeline management

### Easings Disponíveis

- `power2.out` - Suave
- `back.out(1.7)` - Elastic bounce
- `power3.out` - Mais suave
- `elastic.out` - Bounce pronunciado

---

## 🚀 Performance

- Zero impacto após primeira visita (com persist=true)
- Lightweight (~5kb adicional)
- GPU-accelerated (GSAP)
- No layout shift

---

## 🐛 Troubleshooting

### Splash não aparece

```jsx
// Verificar localStorage
localStorage.removeItem('nidus-splash-seen');

// Ou usar persist=false
useSplashScreen(2000, false)
```

### Animação travando

```jsx
// Aumentar minDisplayTime
useSplashScreen(3000) // Dar mais tempo para animação
```

### Conflito com outras animações

```jsx
// Garantir que splash completa antes
if (showSplash) {
  return <SplashScreen onComplete={handleSplashComplete} />;
}
// Só depois renderizar resto
```

---

## 💡 Dicas

1. **Primeira Impressão**: Use o splash para carregar recursos críticos
2. **Branding**: Momento perfeito para reforçar identidade visual
3. **Loading**: Mostre progress se carregar dados
4. **Skip**: Ofereça skip button para retornantes
5. **Consistência**: Mantenha timing e estilo alinhados com o site

---

## 🎯 Melhores Práticas

✅ **Fazer**
- Manter splash curto (2-3s)
- Usar animações suaves
- Oferecer opção de skip
- Salvar preferência do usuário
- Testar em diferentes dispositivos

❌ **Evitar**
- Splash muito longo (>5s)
- Animações pesadas que travam
- Forçar replay toda visita
- Bloquear acesso ao conteúdo
- Ignorar preferências

---

**Criado em:** Janeiro 2026  
**Tecnologias:** React, GSAP, Tailwind CSS, Design System Nidus
