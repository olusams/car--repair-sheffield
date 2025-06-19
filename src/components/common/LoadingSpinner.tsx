import React from 'react';
import { motion } from 'framer-motion';
import { Car, Wrench, Settings } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
  showText?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  className = '',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const orbitSizes = {
    sm: 'w-3 h-3',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label="Loading content">
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
          className={`${sizeClasses[size]} bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl`}
        >
          <Car className={`${iconSizes[size]} text-white`} />
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
            className={`absolute -top-2 -left-2 ${orbitSizes[size]} bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center`}
          >
            <Wrench className={`${size === 'sm' ? 'w-1.5 h-1.5' : size === 'md' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-6 h-6'} text-white`} />
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
            className={`absolute -top-2 -right-2 ${orbitSizes[size]} bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center`}
          >
            <Settings className={`${size === 'sm' ? 'w-1.5 h-1.5' : size === 'md' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-6 h-6'} text-white`} />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Loading Text */}
      {showText && (
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-4 text-gray-600 font-medium text-center"
        >
          {text}
        </motion.p>
      )}
      
      {/* Animated Dots */}
      {showText && (
        <div className="flex space-x-1 mt-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner; 