import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Tablet, Monitor, Wifi, WifiOff } from 'lucide-react';

// Type definitions for network connection
interface NetworkInformation {
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
  addEventListener: (event: string, handler: () => void) => void;
  removeEventListener: (event: string, handler: () => void) => void;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
}

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
  const [connectionSpeed, setConnectionSpeed] = useState<string>('unknown');
  const [showOptimizationBanner, setShowOptimizationBanner] = useState(false);

  useEffect(() => {
    if (!enableOptimizations) return;

    const nav = navigator as NavigatorWithConnection;

    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceType('mobile');
      else if (width < 1024) setDeviceType('tablet');
      else setDeviceType('desktop');
    };

    const detectConnectionSpeed = async () => {
      if ('connection' in navigator && nav.connection) {
        setConnectionSpeed(nav.connection.effectiveType);
        
        // Show optimization banner for slow connections
        if (nav.connection.effectiveType === 'slow-2g' || nav.connection.effectiveType === '2g') {
          setShowOptimizationBanner(true);
        }
      }
    };

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    const handleNetworkChange = () => {
      detectConnectionSpeed();
    };

    detectDevice();
    detectConnectionSpeed();

    window.addEventListener('resize', detectDevice);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    if ('connection' in navigator && nav.connection) {
      nav.connection.addEventListener('change', handleNetworkChange);
    }

    // Apply mobile-specific optimizations
    if (deviceType === 'mobile') {
      // Reduce animations for better performance
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition-duration', '0.1s');
      }
    }

    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      
      if ('connection' in navigator && nav.connection) {
        nav.connection.removeEventListener('change', handleNetworkChange);
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

export default MobileOptimizer; 