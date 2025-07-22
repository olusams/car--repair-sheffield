import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageOff, Car, Wrench, Settings } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = '/assets/img/update_1/hero/hero_bg_3_1.jpg',
  loading = 'lazy',
  onLoad,
  onError,
  priority = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isPreloaded, setIsPreloaded] = useState(false);

  // Check if image is already cached/preloaded
  useEffect(() => {
    const checkIfPreloaded = () => {
      const img = new Image();
      img.onload = () => {
        setIsPreloaded(true);
        setIsLoading(false);
        onLoad?.();
      };
      img.onerror = () => {
        setIsPreloaded(false);
      };
      img.src = src;
    };

    if (priority || loading === 'eager') {
      checkIfPreloaded();
    }
  }, [src, priority, loading, onLoad]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
    onError?.();
  }, [currentSrc, fallbackSrc, onError]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const skeletonVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg ${className}`}>
        <div className="text-center p-4">
          <ImageOff className="w-8 h-8 text-gray-500 mx-auto mb-2" />
          <p className="text-gray-400 text-sm">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Enhanced Loading Skeleton - Only show if not preloaded */}
      <AnimatePresence>
        {isLoading && !isPreloaded && (
          <motion.div
            variants={loadingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 z-10"
          >
            {/* Animated Background */}
            <motion.div
              variants={skeletonVariants}
              animate="animate"
              className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              style={{
                backgroundSize: '200% 200%',
                backgroundImage: 'linear-gradient(45deg, #1f2937 0%, #374151 25%, #4b5563 50%, #374151 75%, #1f2937 100%)'
              }}
            />
            
            {/* Floating Icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Main Loading Icon */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Car className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Orbiting Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <motion.div
                    animate={{ 
                      rotate: -360,
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                  >
                    <Wrench className="w-3 h-3 text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      rotate: -360,
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{ 
                      rotate: { duration: 2.5, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center"
                  >
                    <Settings className="w-3 h-3 text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            {/* Loading Text */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-white/80 text-sm font-medium"
              >
                Loading {alt}...
              </motion.p>
            </div>
            
            {/* Animated Border */}
            <motion.div
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-lg"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)',
                backgroundSize: '200% 200%'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image */}
      <motion.img
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        src={currentSrc}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className="w-full h-full object-cover transition-all duration-300"
        style={{ 
          filter: isLoading && !isPreloaded ? 'blur(2px)' : 'blur(0px)',
          transform: isLoading && !isPreloaded ? 'scale(1.1)' : 'scale(1)'
        }}
      />

      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20 pointer-events-none"></div>
    </div>
  );
};

export default OptimizedImage; 