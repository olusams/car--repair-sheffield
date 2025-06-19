import { useState, useEffect } from 'react';

// Mobile-specific optimizations hook
export const useMobileOptimizations = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    const checkPreferences = () => {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      setPrefersDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    };

    checkDevice();
    checkPreferences();

    window.addEventListener('resize', checkDevice);
    
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    const darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    
    motionMedia.addEventListener('change', checkPreferences);
    darkMedia.addEventListener('change', checkPreferences);

    return () => {
      window.removeEventListener('resize', checkDevice);
      motionMedia.removeEventListener('change', checkPreferences);
      darkMedia.removeEventListener('change', checkPreferences);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    prefersReducedMotion,
    prefersDarkMode
  };
}; 