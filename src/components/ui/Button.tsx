import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'external' | 'none';
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon = 'none',
  children,
  className,
  asAnchor = false,
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-widest text-xs uppercase transition-all duration-300 relative group overflow-hidden focus:outline-none focus:ring-2 focus:ring-kin-accent/50 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-kin-text text-kin-base hover:bg-kin-accent hover:text-white shadow-sm",
    secondary: "bg-kin-surface text-kin-text hover:bg-kin-border border border-kin-border",
    outline: "bg-transparent text-kin-text border border-kin-text/30 hover:border-kin-text hover:bg-kin-text hover:text-kin-base",
    dark: "bg-kin-dark text-kin-base hover:bg-kin-accent border border-kin-dark",
    ghost: "bg-transparent text-kin-text hover:text-kin-accent p-0 tracking-widest",
  };

  const sizeStyles = {
    sm: "px-4 py-2.5 min-h-[40px] text-[11px]",
    md: "px-6 py-3.5 min-h-[48px] text-[12px]",
    lg: "px-8 py-4 min-h-[54px] text-[13px]",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    variant !== 'ghost' && sizeStyles[size],
    className
  );

  const content = (
    <>
      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5">
        {children}
      </span>
      {icon === 'arrow' && (
        <ArrowRight className="w-4 h-4 ml-2.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {icon === 'external' && (
        <ArrowUpRight className="w-4 h-4 ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (asAnchor && href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel} 
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
