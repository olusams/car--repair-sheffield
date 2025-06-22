import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  type?: 'card' | 'text' | 'image' | 'button' | 'list' | 'hero';
  className?: string;
  count?: number;
  height?: string;
  width?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type = 'card',
  className = '',
  count = 1,
  height,
  width
}) => {
  const baseClasses = 'bg-gray-200 animate-pulse rounded';
  
  const skeletonVariants = {
    initial: { opacity: 0.6 },
    animate: { 
      opacity: [0.6, 1, 0.6],
      transition: { 
        duration: 1.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  };

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`bg-white rounded-3xl shadow-lg overflow-hidden ${className}`}>
            <div className={`${baseClasses} h-48 w-full`} />
            <div className="p-6 space-y-4">
              <div className={`${baseClasses} h-6 w-3/4`} />
              <div className={`${baseClasses} h-4 w-full`} />
              <div className={`${baseClasses} h-4 w-2/3`} />
              <div className="flex justify-between items-center pt-4">
                <div className={`${baseClasses} h-6 w-20`} />
                <div className={`${baseClasses} h-8 w-24 rounded-lg`} />
              </div>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className={`space-y-3 ${className}`}>
            <div className={`${baseClasses} h-6 w-3/4`} />
            <div className={`${baseClasses} h-4 w-full`} />
            <div className={`${baseClasses} h-4 w-2/3`} />
          </div>
        );

      case 'image':
        return (
          <div className={`${baseClasses} ${height || 'h-48'} ${width || 'w-full'} ${className}`} />
        );

      case 'button':
        return (
          <div className={`${baseClasses} h-12 w-32 rounded-xl ${className}`} />
        );

      case 'list':
        return (
          <div className={`space-y-4 ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`${baseClasses} h-12 w-12 rounded-full`} />
                <div className="flex-1 space-y-2">
                  <div className={`${baseClasses} h-4 w-3/4`} />
                  <div className={`${baseClasses} h-3 w-1/2`} />
                </div>
              </div>
            ))}
          </div>
        );

      case 'hero':
        return (
          <div className={`relative ${className}`}>
            <div className={`${baseClasses} h-96 w-full`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
                <div className={`${baseClasses} h-12 w-3/4 mx-auto`} />
                <div className={`${baseClasses} h-6 w-1/2 mx-auto`} />
                <div className="flex justify-center space-x-4">
                  <div className={`${baseClasses} h-12 w-32 rounded-xl`} />
                  <div className={`${baseClasses} h-12 w-32 rounded-xl`} />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={`${baseClasses} ${height || 'h-4'} ${width || 'w-full'} ${className}`} />
        );
    }
  };

  if (count > 1) {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            variants={skeletonVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.1 }}
          >
            {renderSkeleton()}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      variants={skeletonVariants}
      initial="initial"
      animate="animate"
    >
      {renderSkeleton()}
    </motion.div>
  );
};

export default SkeletonLoader; 