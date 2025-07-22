import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          className="fixed bottom-6 right-6 z-40 group"
          aria-label="Scroll to top of page"
          tabIndex={0}
        >
          {/* Progress Ring */}
          <div className="relative">
            <svg
              className="w-14 h-14 transform -rotate-90"
              viewBox="0 0 56 56"
            >
              {/* Background Circle */}
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="2"
                fill="none"
              />
              
              {/* Progress Circle */}
              <motion.circle
                cx="28"
                cy="28"
                r="24"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ strokeDasharray: "0 150" }}
                animate={{ strokeDasharray: `${scrollProgress * 150} 150` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Button Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-active:scale-95"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute -top-1 -left-1 w-2 h-2 bg-blue-400 rounded-full opacity-60"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.6, 0.2, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.2, 0.6]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-1 h-1 bg-pink-400 rounded-full opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.2, 0.6]
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
          
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            <div className="flex items-center space-x-2">
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </div>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 