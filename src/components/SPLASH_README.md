# 🌟 Splash Screen - Nidus

Sistema de Splash Screen com múltiplas variantes e animações GSAP suaves. Atualizado com a **nova identidade visual pastel moderna**.

## 🎨 Nova Paleta Visual

Todas as variantes agora usam:
- **Gradientes pastel**: Azul tecnológico (#0ea5e9) + Verde menta (#14b8a6) + Lilás (#a855f7)
- **Fundos claros**: Transições suaves de cores pastel
- **Glow suave**: Efeitos de brilho reduzidos e mais elegantes
- **Partículas coloridas**: Três cores alternadas para visual mais dinâmico

---

## 📋 Variantes Disponíveis

### 1. **Default** - Splash completo com letras animadas ⭐
Localização: `src/components/SplashScreen.jsx`

```jsx
import SplashScreen from '@/components/SplashScreen';

<SplashScreen 
  onComplete={() => console.log('Splash completed')}
  showSkipButton={false}
/>
```

**Características:**
- ✨ Animação 3D nas letras com gradient tricolor
- 💎 Efeito glow azul tecnológico suave
- 🎯 Pulse suave com stagger
- 🌐 Dot pattern de fundo com opacidade aumentada
- ⏳ Loading indicator com sombra colorida
- 🎨 Background: Gradiente pastel (azul → menta → lilás)
- ⏱️ Duração: ~3.5s

**Visual:** Gradiente horizontal pastel com letras em gradient tricolor e círculo de glow atrás

---

### 2. **Minimal** - Simples e elegante 🎯
```jsx
import { MinimalSplash } from '@/components/SplashVariants';

<MinimalSplash onComplete={handleComplete} />
```

**Características:**
- 💫 Simples fade in com scale e back ease
- 🌈 Gradient text tricolor
- ✨ Minimalista e direto ao ponto
- ⚡ Rápida (1.5s total)
- 🎨 Background: Gradiente azul → verde menta
- 🔲 Dot pattern de fundo sutil

**Visual:** Fundo gradiente azul claro para verde menta com dot pattern

---

### 3. **Glitch** - Efeito tech moderno 🔮
```jsx
import { GlitchSplash } from '@/components/SplashVariants';

<GlitchSplash onComplete={handleComplete} />
```

**Características:**
- ⚡ Efeito glitch tech com movimento lateral
- 🔤 Typography monospace
- 💥 Scale out dramático ao final
- 🌟 Glow azul tecnológico duplo
- 🎨 Background: Gradiente azul médio → verde água
- 🔲 Grid pattern de fundo
- 🎨 Texto: Gradiente azul → lilás

**Visual:** Fundo gradiente vibrante com grid pattern e texto em monospace

---

### 4. **Cinematic** - Reveal cinematográfico 🎬
```jsx
import { CinematicSplash } from '@/components/SplashVariants';

<CinematicSplash onComplete={handleComplete} />
```

**Características:**
- 🎭 Barras cinematográficas coloridas com gradiente
- 🎪 Reveal dramático tipo cortinas
- ✨ Logo aparece com back ease
- 💎 Glow azul suave ao revelar
- 🎨 Barras superiores: Azul → Verde menta
- 🎨 Barras inferiores: Verde menta → Lilás  
- 🎨 Background: Gradiente azul claro → verde claro
- ⏱️ Duração: ~3s

**Visual:** Barras coloridas se abrem revelando o logo com gradient tricolor

---

### 5. **Particles** - Com partículas animadas 🌠
```jsx
import { ParticlesSplash } from '@/components/SplashVariants';

<ParticlesSplash onComplete={handleComplete} />
```

**Características:**
- ✨ 50 partículas animadas em 3 cores
- 🎨 Partículas: Azul (#0ea5e9), Verde menta (#14b8a6), Lilás (#a855f7)
- 🌊 Movimento orgânico com yoyo
- 💫 Cada partícula com box-shadow colorido
- 🌈 Background: Gradiente triplo suave (azul → menta → lilás)
- 🎯 Partículas maiores (2px) para melhor visibilidade
- ⏱️ Duração: ~2.5s

**Visual:** Fundo gradiente triplo pastel com partículas coloridas flutuantes

// showSplash: boolean - Se deve mostrar splash
// handleSplashComplete: function - Callback quando splash termina
// skipSplash: function - Pular splash manualmente
// resetSplashPreference: function - Resetar preferência salva
```

### Parâmetros

- `minDisplayTime` (default: 2000): Tempo mínimo em ms
- `persistPreference` (default: true): Salvar no localStorage

---

## 💡 Comportamento Atual

O Splash Screen está configurado para **aparecer apenas no carregamento inicial do site**.

### Como Funciona

```jsx
// App.jsx - Mostra apenas uma vez ao carregar
const [showSplash, setShowSplash] = useState(true);
const [splashComplete, setSplashComplete] = useState(false);

// Não monitora mudanças de rota
// Splash aparece apenas quando o site carrega
```

**Fluxo de Carregamento:**
- 🌐 Usuário entra no site → ✅ Mostra Splash
- 🏠 Home carrega após splash
- 📄 Navega para About → ❌ Sem splash
- 🏠 Volta para Home → ❌ Sem splash
- 💼 Navega para Services → ❌ Sem splash
- 🔄 Apenas ao recarregar a página (F5) → ✅ Mostra Splash

### Configuração Global

Edite `src/components/SplashConfig.js`:

```javascript
export const SPLASH_CONFIG = {
  variant: 'default',           // 'default' | 'minimal' | 'glitch' | 'cinematic' | 'particles'
  minDisplayTime: 2000,         // Tempo mínimo em ms
  showSkipButton: false,        // Mostrar botão "Pular"
  showOnlyOnLoad: true,         // Apenas no carregamento inicial
};
```

### Efeitos Visuais Suaves

Todos os brilhos (glow effects) foram reduzidos para um visual mais profissional:
- ✨ Glow text: `0 0 20px` (antes: 40px)
- 💫 Círculo de fundo: opacidade 20% (antes: 40%)
- 🔵 Partículas: box-shadow 5px (antes: 10px)
- 💎 Cores com alpha reduzido: 0.3 (antes: 0.6)

---

## 💡 Uso no App.jsx (Implementação Atual)

```jsx
import { useState } from 'react';
import { getSplashComponent, SPLASH_CONFIG } from '@/components/SplashConfig';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashComplete, setSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setTimeout(() => {
      setShowSplash(false);
      setSplashComplete(true);
    }, SPLASH_CONFIG.minDisplayTime);
  };

  // Mostra apenas no carregamento inicial
  if (showSplash && !splashComplete) {
    const SplashComponent = getSplashComponent();
    return <SplashComponent onComplete={handleSplashComplete} />;
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
