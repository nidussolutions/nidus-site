/**
 * Design System - Exemplos de Uso
 * 
 * Este arquivo demonstra como usar o Design System
 * em seus componentes React.
 */

import React from 'react';
import { colors, spacing, shadows } from '@/design-system';
import { Icon, IconButton, IconBadge, AnimatedIcon } from '@/components/ui/icon';
import { icons, FiZap, FiHeart, MdRocket } from '@/lib/icons';
import { useFadeIn, useScrollReveal, useStagger } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

/**
 * Exemplo 1: Usando cores do Design System
 */
export const ColorExample = () => {
  return (
    <div style={{ 
      backgroundColor: colors.background.secondary,
      padding: spacing[8],
      borderRadius: '0.75rem',
    }}>
      <h3 style={{ color: colors.brand.primary[500] }}>
        Título com Primary Color
      </h3>
      <p style={{ color: colors.text.secondary }}>
        Texto secundário usando Design System
      </p>
    </div>
  );
};

/**
 * Exemplo 2: Usando com Tailwind Classes
 */
export const TailwindExample = () => {
  return (
    <div className="bg-neutral-900 p-8 rounded-lg">
      <h3 className="text-primary-500 text-2xl font-bold mb-4">
        Usando Tailwind com Design System
      </h3>
      <p className="text-neutral-400">
        As cores do Design System estão disponíveis como classes Tailwind
      </p>
      <div className="mt-4 flex gap-4">
        <div className="w-12 h-12 bg-primary-500 rounded-lg shadow-glow" />
        <div className="w-12 h-12 bg-secondary-500 rounded-lg shadow-colored-secondary" />
        <div className="w-12 h-12 bg-accent-500 rounded-lg shadow-colored-accent" />
      </div>
    </div>
  );
};

/**
 * Exemplo 3: Usando ícones do React Icons
 */
export const IconExample = () => {
  return (
    <div className="flex flex-col gap-6 p-8 bg-neutral-900 rounded-lg">
      {/* Icon básico */}
      <div className="flex items-center gap-3">
        <Icon icon={FiZap} size="lg" className="text-primary-500" />
        <span>Ícone básico</span>
      </div>

      {/* IconButton */}
      <div className="flex gap-2">
        <IconButton icon={FiHeart} variant="ghost" />
        <IconButton icon={MdRocket} variant="solid" />
        <IconButton icon={icons.tech.lightning} variant="outline" />
      </div>

      {/* IconBadge */}
      <div className="flex gap-2">
        <IconBadge icon={FiZap} variant="primary" />
        <IconBadge icon={icons.status.verified} variant="success" />
        <IconBadge icon={icons.status.warning} variant="warning" />
      </div>

      {/* AnimatedIcon */}
      <div className="flex gap-4">
        <AnimatedIcon icon={FiZap} animation="hover-scale" size="xl" className="text-primary-500" />
        <AnimatedIcon icon={MdRocket} animation="hover-rotate" size="xl" className="text-secondary-500" />
      </div>
    </div>
  );
};

/**
 * Exemplo 4: Usando animações GSAP
 */
export const AnimationExample = () => {
  const fadeInRef = useFadeIn();
  const scrollRevealRef = useScrollReveal({ direction: 'up', distance: 30 });
  const staggerRef = useStagger();

  return (
    <div className="space-y-8 p-8">
      {/* Fade in ao montar */}
      <div ref={fadeInRef} className="bg-neutral-900 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-primary-500">Fade In Animation</h3>
        <p className="text-neutral-400">Este elemento faz fade in ao montar</p>
      </div>

      {/* Scroll reveal */}
      <div ref={scrollRevealRef} className="bg-neutral-900 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-secondary-500">Scroll Reveal</h3>
        <p className="text-neutral-400">Este elemento aparece ao fazer scroll</p>
      </div>

      {/* Stagger children */}
      <div ref={staggerRef} className="grid grid-cols-3 gap-4">
        <div className="bg-neutral-900 p-4 rounded-lg">Item 1</div>
        <div className="bg-neutral-900 p-4 rounded-lg">Item 2</div>
        <div className="bg-neutral-900 p-4 rounded-lg">Item 3</div>
      </div>
    </div>
  );
};

/**
 * Exemplo 5: Card com Design System
 */
export const CardExample = () => {
  const cardRef = useFadeIn(0.6, 0.2);

  return (
    <div ref={cardRef} className="max-w-md">
      <Card className="p-6 bg-neutral-900 border-neutral-800 hover:shadow-colored-primary transition-shadow">
        <div className="flex items-start gap-4">
          <IconBadge icon={icons.tech.rocket} variant="primary" size="md" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-neutral-50 mb-2">
              Feature Title
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              Descrição do feature usando o Design System com cores consistentes.
            </p>
            <Button variant="outline" size="sm">
              <Icon icon={icons.navigation.arrowRight} size="sm" className="mr-2" />
              Saiba mais
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

/**
 * Exemplo 6: Glass Effect
 */
export const GlassExample = () => {
  return (
    <div className="relative p-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl">
      <div className="glass p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-2">Glass Effect</h3>
        <p className="text-white/80">
          Efeito glass usando o Design System
        </p>
      </div>
    </div>
  );
};

/**
 * Exemplo 7: Gradient Text
 */
export const GradientTextExample = () => {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold gradient-text mb-4">
        Gradient Text
      </h1>
      <h2 className="text-4xl font-bold gradient-text-purple">
        Purple Gradient
      </h2>
    </div>
  );
};

// Export all examples
export default {
  ColorExample,
  TailwindExample,
  IconExample,
  AnimationExample,
  CardExample,
  GlassExample,
  GradientTextExample,
};
