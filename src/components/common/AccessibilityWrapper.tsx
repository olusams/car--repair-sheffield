import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Skip to content functionality
    if (skipToContent && event.key === 'Tab' && event.shiftKey === false) {
      const mainContent = document.querySelector('main');
      if (mainContent) {
        event.preventDefault();
        (mainContent as HTMLElement).focus();
      }
    }

    // Focus trap functionality
    if (focusTrap && wrapperRef.current) {
      const focusableElements = wrapperRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }

      // Escape key to close modal/dropdown
      if (event.key === 'Escape') {
        const closeEvent = new CustomEvent('closeModal');
        window.dispatchEvent(closeEvent);
      }
    }

    // Call custom onKeyDown handler
    onKeyDown?.(event);
  };

  // Auto-focus first focusable element when component mounts
  useEffect(() => {
    if (focusTrap && wrapperRef.current) {
      const focusableElements = wrapperRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      if (firstElement) {
        firstElement.focus();
      }
    }
  }, [focusTrap]);

  return (
    <div
      ref={wrapperRef}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-labelledby={ariaLabelledby}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
      className={className}
    >
      {children}
    </div>
  );
};

// Skip to Content Link Component
export const SkipToContent: React.FC = () => {
  const handleSkipClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.a
        href="#main-content"
        onClick={handleSkipClick}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
      Skip to main content
    </motion.a>
    </AnimatePresence>
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
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onEscape) {
        onEscape();
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, onEscape]);

  return (
    <div ref={containerRef} tabIndex={-1}>
      {children}
    </div>
  );
};

// Screen Reader Only Text Component
interface SrOnlyProps {
  children: React.ReactNode;
  className?: string;
}

export const SrOnly: React.FC<SrOnlyProps> = ({ children, className = '' }) => (
  <span className={`sr-only ${className}`}>
    {children}
  </span>
);

// Live Region Component for Dynamic Content
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

// Keyboard Navigation Hook
export const useKeyboardNavigation = () => {
  const handleKeyDown = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  const handleArrowKeys = (
    e: React.KeyboardEvent,
    onUp?: () => void,
    onDown?: () => void,
    onLeft?: () => void,
    onRight?: () => void
  ) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        onUp?.();
        break;
      case 'ArrowDown':
        e.preventDefault();
        onDown?.();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        onLeft?.();
        break;
      case 'ArrowRight':
        e.preventDefault();
        onRight?.();
        break;
    }
  };

  return { handleKeyDown, handleArrowKeys };
};

// High Contrast Mode Detection
export const useHighContrastMode = () => {
  const [isHighContrast, setIsHighContrast] = React.useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHighContrast(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isHighContrast;
};

// Reduced Motion Detection
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

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
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105 focus:ring-blue-500/30',
    secondary: 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:shadow-lg hover:scale-105 focus:ring-gray-500/30 border border-gray-200',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500/30'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
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
      {loading && (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
      )}
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
      className={`text-blue-600 hover:text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 rounded ${className}`}
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