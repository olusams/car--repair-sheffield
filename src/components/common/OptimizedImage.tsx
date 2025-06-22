import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageOff } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  loading = 'lazy',
  onLoad,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  }, [onError]);

  const imageToShow = hasError && fallbackSrc ? fallbackSrc : src;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
  };

  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%'
    }}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            variants={loadingVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: '#e5e7eb'
            }}
          />
        )}
      </AnimatePresence>

      <motion.img
        key={imageToShow}
        variants={imageVariants}
        initial="hidden"
        animate={!isLoading ? "visible" : "hidden"}
        src={imageToShow}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />

      {hasError && !isLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f3f4f6'
        }}>
          <div style={{ textAlign: 'center', color: '#9ca3af' }}>
            <ImageOff style={{ width: '32px', height: '32px', margin: '0 auto 8px' }} />
            <p style={{ fontSize: '12px' }}>Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 