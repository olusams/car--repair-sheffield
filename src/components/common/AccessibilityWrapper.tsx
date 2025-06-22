import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useHighContrastMode, useReducedMotion } from './accessibilityHooks';

interface AccessibilityWrapperProps {
  children: React.ReactNode;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  className?: string;
  skipToContent?: boolean;
  focusTrap?: boolean;
}

const AccessibilityWrapper: React.FC<AccessibilityWrapperProps> = ({
  children,
  role,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-labelledby': ariaLabelledby,
  tabIndex,
  onKeyDown,
  className = '',
  skipToContent = false,
  focusTrap = false
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isHighContrast = useHighContrastMode();
  const prefersReducedMotion = useReducedMotion();

  const handleKeyDownWrapper = (event: React.KeyboardEvent) => {
    // Handle skip to content
    if (skipToContent && event.key === 'Tab' && !event.shiftKey) {
      const firstFocusableElement = wrapperRef.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;
      
      if (firstFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    }

    // Handle focus trap
    if (focusTrap && event.key === 'Tab') {
      const focusableElements = wrapperRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;
      
      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    // Call custom onKeyDown handler
    onKeyDown?.(event);
  };

  const highContrastClasses = isHighContrast ? 'border-2 border-black' : '';
  const reducedMotionClasses = prefersReducedMotion ? 'transition-none' : '';

  return (
    <motion.div
      ref={wrapperRef}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDownWrapper}
      className={`${className} ${highContrastClasses} ${reducedMotionClasses}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? undefined : { duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Skip to Content Component
export const SkipToContent: React.FC = () => {
  const handleSkipClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainContent = document.querySelector('main') || document.querySelector('#main-content');
    if (mainContent) {
      (mainContent as HTMLElement).focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkipClick}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
    >
      Skip to main content
    </a>
  );
};

// Focus Trap Component
interface FocusTrapProps {
  children: React.ReactNode;
  isActive?: boolean;
  onEscape?: () => void;
}

export const FocusTrap: React.FC<FocusTrapProps> = ({ 
  children, 
  isActive = false, 
  onEscape 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      } else if (e.key === 'Escape' && onEscape) {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstElement.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, onEscape]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

// Screen Reader Only Component
interface SrOnlyProps {
  children: React.ReactNode;
  className?: string;
}

export const SrOnly: React.FC<SrOnlyProps> = ({ children, className = '' }) => (
  <span className={`sr-only ${className}`}>
    {children}
  </span>
);

// Live Region Component
interface LiveRegionProps {
  children: React.ReactNode;
  ariaLive?: 'polite' | 'assertive' | 'off';
  ariaAtomic?: boolean;
  ariaRelevant?: 'additions' | 'removals' | 'text' | 'all';
  className?: string;
}

export const LiveRegion: React.FC<LiveRegionProps> = ({
  children,
  ariaLive = 'polite',
  ariaAtomic = true,
  ariaRelevant = 'all',
  className = ''
}) => (
  <div
    aria-live={ariaLive}
    aria-atomic={ariaAtomic}
    aria-relevant={ariaRelevant}
    className={`sr-only ${className}`}
  >
    {children}
  </div>
);

// Enhanced Button Component with Accessibility
interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-pressed'?: boolean;
  'aria-controls'?: string;
  'aria-haspopup'?: boolean;
  'aria-current'?: boolean;
  'data-testid'?: string;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = 'primary',
  size = 'md',
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-expanded': ariaExpanded,
  'aria-pressed': ariaPressed,
  'aria-controls': ariaControls,
  'aria-haspopup': ariaHasPopup,
  'aria-current': ariaCurrent,
  'data-testid': dataTestid,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg focus:ring-blue-500 focus:ring-opacity-30',
    secondary: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:shadow-lg focus:ring-gray-500 focus:ring-opacity-30',
    ghost: 'bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-500 focus:ring-opacity-30'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={finalClassName}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-expanded={ariaExpanded}
      aria-pressed={ariaPressed}
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      aria-current={ariaCurrent}
      data-testid={dataTestid}
      {...props}
    >
      {loading && <div className="w-4 h-4 border-2 border-white border-opacity-30 border-t-white rounded-full animate-spin mr-2" />}
      {children}
    </button>
  );
};

// Enhanced Link Component with Accessibility
interface AccessibleLinkProps {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'data-testid'?: string;
}

export const AccessibleLink: React.FC<AccessibleLinkProps> = ({
  children,
  href,
  external = false,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'data-testid': dataTestid,
  ...props
}) => {
  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': ariaLabel || `${children} (opens in new tab)`
  } : {};

  return (
    <a
      href={href}
      className={`text-blue-600 hover:text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 focus:ring-offset-2 rounded ${className}`}
      aria-describedby={ariaDescribedby}
      data-testid={dataTestid}
      {...externalProps}
      {...props}
    >
      {children}
      {external && (
        <SrOnly> (opens in new tab)</SrOnly>
      )}
    </a>
  );
};

export default AccessibilityWrapper; 