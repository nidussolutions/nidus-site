import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Icon Component - Wrapper para React Icons
 * 
 * Componente unificado para gerenciar ícones com
 * tamanhos e estilos consistentes do Design System.
 * 
 * @example
 * import { FiHome } from 'react-icons/fi';
 * <Icon icon={FiHome} size="lg" className="text-primary-500" />
 */

const sizeMap = {
  xs: 'w-3 h-3',      // 12px
  sm: 'w-4 h-4',      // 16px
  base: 'w-5 h-5',    // 20px
  md: 'w-6 h-6',      // 24px
  lg: 'w-8 h-8',      // 32px
  xl: 'w-10 h-10',    // 40px
  '2xl': 'w-12 h-12', // 48px
  '3xl': 'w-16 h-16', // 64px
};

export const Icon = ({ 
  icon: IconComponent, 
  size = 'base', 
  className,
  ...props 
}) => {
  if (!IconComponent) {
    console.warn('Icon component is required');
    return null;
  }

  return (
    <IconComponent 
      className={cn(sizeMap[size], className)} 
      {...props} 
    />
  );
};

/**
 * IconButton - Botão com ícone
 */
export const IconButton = ({ 
  icon: IconComponent,
  size = 'base',
  variant = 'ghost',
  className,
  children,
  ...props
}) => {
  const variantStyles = {
    ghost: 'hover:bg-neutral-800 text-neutral-400 hover:text-neutral-100',
    solid: 'bg-primary-600 hover:bg-primary-700 text-white',
    outline: 'border border-neutral-700 hover:bg-neutral-800 text-neutral-300',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg p-2 transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {IconComponent && <Icon icon={IconComponent} size={size} />}
      {children && <span className="ml-2">{children}</span>}
    </button>
  );
};

/**
 * IconBadge - Badge com ícone
 */
export const IconBadge = ({ 
  icon: IconComponent, 
  size = 'sm',
  variant = 'primary',
  className,
  ...props 
}) => {
  const variantStyles = {
    primary: 'bg-primary-500/10 text-primary-400 ring-primary-500/20',
    secondary: 'bg-secondary-500/10 text-secondary-400 ring-secondary-500/20',
    success: 'bg-green-500/10 text-green-400 ring-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 ring-yellow-500/20',
    error: 'bg-red-500/10 text-red-400 ring-red-500/20',
    neutral: 'bg-neutral-800 text-neutral-300 ring-neutral-700',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full p-2 ring-1',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      <Icon icon={IconComponent} size={size} />
    </div>
  );
};

/**
 * AnimatedIcon - Ícone com animações
 */
export const AnimatedIcon = ({ 
  icon: IconComponent,
  size = 'base',
  animation = 'hover-scale',
  className,
  ...props
}) => {
  const animationStyles = {
    'hover-scale': 'hover:scale-110 transition-transform duration-200',
    'hover-rotate': 'hover:rotate-12 transition-transform duration-200',
    'spin': 'animate-spin',
    'pulse': 'animate-pulse',
    'bounce': 'animate-bounce',
  };

  return (
    <Icon 
      icon={IconComponent} 
      size={size}
      className={cn(animationStyles[animation], className)}
      {...props}
    />
  );
};

export default Icon;
