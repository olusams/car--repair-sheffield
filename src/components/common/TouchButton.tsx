import React from 'react';
import { useMobileOptimizations } from './mobileHooks';

// Touch-friendly button component
interface TouchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TouchButton: React.FC<TouchButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  size = 'md'
}) => {
  const { isMobile } = useMobileOptimizations();

  const sizeClasses = {
    sm: isMobile ? 'px-4 py-3 text-sm' : 'px-3 py-2 text-sm',
    md: isMobile ? 'px-6 py-4 text-base' : 'px-4 py-3 text-base',
    lg: isMobile ? 'px-8 py-5 text-lg' : 'px-6 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        ${isMobile ? 'min-h-[44px] min-w-[44px]' : ''}
        bg-gradient-to-r from-blue-600 to-purple-600 
        text-white font-semibold rounded-xl 
        transition-all duration-300 
        hover:shadow-lg hover:scale-105 
        focus:outline-none focus:ring-4 focus:ring-blue-500/30 
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default TouchButton; 