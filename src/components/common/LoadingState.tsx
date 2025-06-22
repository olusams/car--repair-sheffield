import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';
import SkeletonLoader from './SkeletonLoader';

interface LoadingStateProps {
  isLoading: boolean;
  error?: string | null;
  children: React.ReactNode;
  type?: 'spinner' | 'skeleton' | 'custom';
  skeletonType?: 'card' | 'text' | 'image' | 'button' | 'list' | 'hero';
  skeletonCount?: number;
  fallback?: React.ReactNode;
  className?: string;
  onRetry?: () => void;
}

const LoadingState: React.FC<LoadingStateProps> = ({
  isLoading,
  error,
  children,
  type = 'spinner',
  skeletonType = 'card',
  skeletonCount = 3,
  fallback,
  className = '',
  onRetry
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const errorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Show error state
  if (error) {
    return (
      <motion.div
        variants={errorVariants}
        initial="hidden"
        animate="visible"
        className={`flex flex-col items-center justify-center p-8 text-center ${className}`}
      >
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Something went wrong</h3>
        <p className="text-gray-600 mb-4 max-w-md">{error}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Try Again
          </button>
        )}
      </motion.div>
    );
  }

  // Show loading state
  if (isLoading) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="loading"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={className}
        >
          {type === 'spinner' && (
            <div className="flex items-center justify-center p-8">
              <LoadingSpinner size="lg" text="Loading content..." />
            </div>
          )}
          
          {type === 'skeleton' && (
            <div className="p-4">
              <SkeletonLoader 
                type={skeletonType} 
                count={skeletonCount}
                className="mb-4"
              />
            </div>
          )}
          
          {type === 'custom' && fallback && fallback}
        </motion.div>
      </AnimatePresence>
    );
  }

  // Show content
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingState; 