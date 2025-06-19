import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Tablet, Monitor, Wifi, WifiOff } from 'lucide-react';

interface MobileOptimizerProps {
  children: React.ReactNode;
  enableOptimizations?: boolean;
  showDeviceInfo?: boolean;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  enableOptimizations = true,
  showDeviceInfo = false
}) => {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast' | 'unknown'>('unknown');
  const [showOptimizationBanner, setShowOptimizationBanner] = useState(false);

  useEffect(() => {
    if (!enableOptimizations) return;

    // Detect device type
    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Detect connection speed
    const detectConnectionSpeed = async () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType) {
          setConnectionSpeed(connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' ? 'slow' : 'fast');
        }
      }
    };

    // Monitor online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Monitor network changes
    const handleNetworkChange = () => {
      detectConnectionSpeed();
      if (connectionSpeed === 'slow') {
        setShowOptimizationBanner(true);
        setTimeout(() => setShowOptimizationBanner(false), 5000);
      }
    };

    // Initial detection
    detectDevice();
    detectConnectionSpeed();

    // Event listeners
    window.addEventListener('resize', detectDevice);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    if ('connection' in navigator) {
      (navigator as any).connection.addEventListener('change', handleNetworkChange);
    }

    // Apply mobile optimizations
    if (deviceType === 'mobile') {
      // Optimize images for mobile
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });

      // Optimize touch targets
      const buttons = document.querySelectorAll('button, a, [role="button"]');
      buttons.forEach(button => {
        const element = button as HTMLElement;
        if (element.offsetHeight < 44 || element.offsetWidth < 44) {
          element.style.minHeight = '44px';
          element.style.minWidth = '44px';
        }
      });

      // Reduce animations for better performance
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition-duration', '0.1s');
      }
    }

    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      
      if ('connection' in navigator) {
        (navigator as any).connection.removeEventListener('change', handleNetworkChange);
      }
    };
  }, [enableOptimizations, deviceType, connectionSpeed]);

  // Device info component
  const DeviceInfo = () => (
    <AnimatePresence>
      {showDeviceInfo && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 right-4 z-40 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs"
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              {deviceType === 'mobile' && <Smartphone className="w-4 h-4 text-blue-600" />}
              {deviceType === 'tablet' && <Tablet className="w-4 h-4 text-purple-600" />}
              {deviceType === 'desktop' && <Monitor className="w-4 h-4 text-green-600" />}
              <span className="text-sm font-medium capitalize">{deviceType}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              {isOnline ? (
                <Wifi className="w-4 h-4 text-green-600" />
              ) : (
                <WifiOff className="w-4 h-4 text-red-600" />
              )}
              <span className="text-sm text-gray-600">
                {isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
            
            {connectionSpeed !== 'unknown' && (
              <div className="text-sm text-gray-600">
                Connection: {connectionSpeed}
              </div>
            )}
            
            <div className="text-xs text-gray-500">
              {window.innerWidth} × {window.innerHeight}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Optimization banner for slow connections
  const OptimizationBanner = () => (
    <AnimatePresence>
      {showOptimizationBanner && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 left-4 right-4 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg shadow-lg p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Wifi className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold">Slow Connection Detected</div>
                <div className="text-sm opacity-90">
                  Optimizing for better performance...
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowOptimizationBanner(false)}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {children}
      <DeviceInfo />
      <OptimizationBanner />
    </>
  );
};

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

export default MobileOptimizer; 