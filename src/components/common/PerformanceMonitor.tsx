import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Clock, Zap, AlertTriangle, X, Maximize2, Minimize2 } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
  frameRate: number;
  errors: string[];
  warnings: string[];
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  logToConsole?: boolean;
  autoHide?: boolean;
  hideDelay?: number;
}

// Type guards for performance entries
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showMetrics = false,
  logToConsole = false,
  autoHide = true,
  hideDelay = 5000
}) => {
  const [isVisible, setIsVisible] = useState(showMetrics);
  const [isMinimized, setIsMinimized] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    frameRate: 0,
    errors: [],
    warnings: []
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const errorCountRef = useRef(0);
  const warningCountRef = useRef(0);

  // Performance monitoring
  useEffect(() => {
    if (!showMetrics) return;

    const startTime = performance.now();

    // Monitor load time
    const handleLoad = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime }));
      
      if (logToConsole) {
        console.log('🚀 Page Load Time:', loadTime.toFixed(2), 'ms');
      }
    };

    // Monitor First Contentful Paint
    const observerFCP = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[entries.length - 1];
      if (fcp) {
        setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp.startTime }));
        
        if (logToConsole) {
          console.log('🎨 First Contentful Paint:', fcp.startTime.toFixed(2), 'ms');
        }
      }
    });

    // Monitor Largest Contentful Paint
    const observerLCP = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      if (lcp) {
        setMetrics(prev => ({ ...prev, largestContentfulPaint: lcp.startTime }));
        
        if (logToConsole) {
          console.log('📏 Largest Contentful Paint:', lcp.startTime.toFixed(2), 'ms');
        }
      }
    });

    // Monitor First Input Delay
    const observerFID = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fid = entries[entries.length - 1] as FirstInputEntry;
      if (fid && 'processingStart' in fid) {
        const delay = fid.processingStart - fid.startTime;
        setMetrics(prev => ({ ...prev, firstInputDelay: delay }));
        
        if (logToConsole) {
          console.log('⚡ First Input Delay:', delay.toFixed(2), 'ms');
        }
      }
    });

    // Monitor Cumulative Layout Shift
    const observerCLS = new PerformanceObserver((list) => {
      let cls = 0;
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as LayoutShiftEntry;
        if (!layoutShiftEntry.hadRecentInput) {
          cls += layoutShiftEntry.value;
        }
      }
      setMetrics(prev => ({ ...prev, cumulativeLayoutShift: cls }));
      
      if (logToConsole) {
        console.log('📐 Cumulative Layout Shift:', cls.toFixed(4));
      }
    });

    // Monitor frame rate
    const measureFrameRate = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      
      if (currentTime - lastTimeRef.current >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
        setMetrics(prev => ({ ...prev, frameRate: fps }));
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }
      
      requestAnimationFrame(measureFrameRate);
    };

    // Monitor errors and warnings
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = (...args) => {
      errorCountRef.current++;
      const errorMessage = args.join(' ');
      setMetrics(prev => ({
        ...prev,
        errors: [...prev.errors.slice(-9), errorMessage]
      }));
      originalError.apply(console, args);
    };

    console.warn = (...args) => {
      warningCountRef.current++;
      const warningMessage = args.join(' ');
      setMetrics(prev => ({
        ...prev,
        warnings: [...prev.warnings.slice(-9), warningMessage]
      }));
      originalWarn.apply(console, args);
    };

    // Monitor memory usage (if available)
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
        }));
      }
    };

    // Start monitoring
    observerFCP.observe({ entryTypes: ['paint'] });
    observerLCP.observe({ entryTypes: ['largest-contentful-paint'] });
    observerFID.observe({ entryTypes: ['first-input'] });
    observerCLS.observe({ entryTypes: ['layout-shift'] });
    
    measureFrameRate();
    
    const memoryInterval = setInterval(monitorMemory, 1000);
    const loadTimeout = setTimeout(handleLoad, 100);

    // Auto-hide functionality
    if (autoHide) {
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);

      return () => {
        clearTimeout(hideTimeout);
        clearTimeout(loadTimeout);
        clearInterval(memoryInterval);
        observerFCP.disconnect();
        observerLCP.disconnect();
        observerFID.disconnect();
        observerCLS.disconnect();
        console.error = originalError;
        console.warn = originalWarn;
      };
    }

    return () => {
      clearTimeout(loadTimeout);
      clearInterval(memoryInterval);
      observerFCP.disconnect();
      observerLCP.disconnect();
      observerFID.disconnect();
      observerCLS.disconnect();
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, [showMetrics, logToConsole, autoHide, hideDelay]);

  if (!isVisible) return null;

  const getPerformanceGrade = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    
    if (value === undefined || value === null) return 'N/A';
    
    // Handle array types (errors, warnings)
    if (Array.isArray(value)) return 'N/A';
    
    // Ensure value is a number for comparison
    const numValue = typeof value === 'number' ? value : 0;
    
    switch (metric) {
      case 'loadTime':
        return numValue < 1000 ? 'A' : numValue < 3000 ? 'B' : numValue < 5000 ? 'C' : 'D';
      case 'firstContentfulPaint':
        return numValue < 1000 ? 'A' : numValue < 1800 ? 'B' : numValue < 3000 ? 'C' : 'D';
      case 'largestContentfulPaint':
        return numValue < 2500 ? 'A' : numValue < 4000 ? 'B' : numValue < 6000 ? 'C' : 'D';
      case 'firstInputDelay':
        return numValue < 100 ? 'A' : numValue < 300 ? 'B' : numValue < 500 ? 'C' : 'D';
      case 'cumulativeLayoutShift':
        return numValue < 0.1 ? 'A' : numValue < 0.25 ? 'B' : numValue < 0.5 ? 'C' : 'D';
      case 'frameRate':
        return numValue >= 60 ? 'A' : numValue >= 50 ? 'B' : numValue >= 30 ? 'C' : 'D';
      default:
        return 'N/A';
    }
  };

  const getGradeColor = (grade: string): string => {
    switch (grade) {
      case 'A': return 'text-green-500';
      case 'B': return 'text-yellow-500';
      case 'C': return 'text-orange-500';
      case 'D': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className={`fixed bottom-4 right-4 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden ${
          isMinimized ? 'w-16 h-16' : isExpanded ? 'w-96' : 'w-80'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5" />
            <span className="font-semibold">Performance</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <div className="p-4 space-y-4">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Load Time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-900">
                    {metrics.loadTime.toFixed(0)}ms
                  </span>
                  <span className={`text-sm font-bold ${getGradeColor(getPerformanceGrade('loadTime'))}`}>
                    {getPerformanceGrade('loadTime')}
                  </span>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">FPS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-900">
                    {metrics.frameRate}
                  </span>
                  <span className={`text-sm font-bold ${getGradeColor(getPerformanceGrade('frameRate'))}`}>
                    {getPerformanceGrade('frameRate')}
                  </span>
                </div>
              </div>
            </div>

            {/* Detailed Metrics */}
            {isExpanded && (
              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-700">Detailed Metrics</div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>First Contentful Paint:</span>
                    <span className="font-mono">{metrics.firstContentfulPaint.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Largest Contentful Paint:</span>
                    <span className="font-mono">{metrics.largestContentfulPaint.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>First Input Delay:</span>
                    <span className="font-mono">{metrics.firstInputDelay.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cumulative Layout Shift:</span>
                    <span className="font-mono">{metrics.cumulativeLayoutShift.toFixed(4)}</span>
                  </div>
                  {metrics.memoryUsage && (
                    <div className="flex justify-between text-sm">
                      <span>Memory Usage:</span>
                      <span className="font-mono">{metrics.memoryUsage.toFixed(1)}MB</span>
                    </div>
                  )}
                </div>

                {/* Errors and Warnings */}
                {(metrics.errors.length > 0 || metrics.warnings.length > 0) && (
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Issues</div>
                    
                    {metrics.errors.length > 0 && (
                      <div className="bg-red-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span className="text-sm font-medium text-red-800">
                            Errors ({metrics.errors.length})
                          </span>
                        </div>
                        <div className="space-y-1">
                          {metrics.errors.slice(-3).map((error, index) => (
                            <div key={index} className="text-xs text-red-700 bg-red-100 p-2 rounded">
                              {error.substring(0, 100)}...
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {metrics.warnings.length > 0 && (
                      <div className="bg-yellow-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm font-medium text-yellow-800">
                            Warnings ({metrics.warnings.length})
                          </span>
                        </div>
                        <div className="space-y-1">
                          {metrics.warnings.slice(-3).map((warning, index) => (
                            <div key={index} className="text-xs text-yellow-700 bg-yellow-100 p-2 rounded">
                              {warning.substring(0, 100)}...
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PerformanceMonitor; 