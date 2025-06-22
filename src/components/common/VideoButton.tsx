import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, ExternalLink } from 'lucide-react';
import VideoModal from './VideoModal';
import { getVideoById } from '../../data/videos';

interface VideoButtonProps {
  videoId?: string;
  videoSrc?: string;
  fallbackSrc?: string;
  webmSrc?: string;
  title?: string;
  description?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'hero' | 'preview';
  buttonText?: string;
}

const VideoButton: React.FC<VideoButtonProps> = ({
  videoId,
  videoSrc,
  fallbackSrc,
  webmSrc,
  title,
  description,
  className = '',
  variant = 'primary',
  buttonText = 'Watch Our Work'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Get video data from ID or use provided props
  const videoData = videoId ? getVideoById(videoId) : null;
  const finalVideoSrc = videoSrc || videoData?.src;
  const finalFallbackSrc = fallbackSrc || videoData?.fallbackSrc;
  const finalWebmSrc = webmSrc || videoData?.webmSrc;
  const finalTitle = title || videoData?.title;
  const finalDescription = description || videoData?.description;

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const baseClasses = "inline-flex items-center justify-center gap-3 font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 cursor-pointer";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl",
    secondary: "bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/20",
    hero: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl text-lg shadow-2xl hover:shadow-3xl",
    preview: "relative w-full h-full group cursor-pointer"
  };

  // Preview variant - makes the entire area clickable
  if (variant === 'preview') {
    return (
      <>
        <motion.div
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`${variantClasses.preview} ${className}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {/* Background gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(45deg, rgba(251, 191, 36, 0.08), rgba(249, 115, 22, 0.08))'
          }} />

          {/* Play button (main CTA) */}
          <motion.div
            animate={{ 
              scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
              rotate: isHovered ? [0, 5, -5, 0] : [0, 0, 0, 0]
            }}
            transition={{ 
              duration: isHovered ? 0.6 : 2, 
              repeat: isHovered ? 0 : Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
              zIndex: 10,
              cursor: 'pointer',
              border: isHovered ? '3px solid #fff' : 'none',
              transition: 'border 0.2s',
            }}
          >
            <Play className="w-10 h-10" color="#fff" />
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ pointerEvents: 'none' }}
            >
              <Sparkles className="w-5 h-5 text-yellow-300 opacity-40" />
            </motion.div>
          </motion.div>
        </motion.div>

        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoSrc={finalVideoSrc}
          fallbackSrc={finalFallbackSrc}
          webmSrc={finalWebmSrc}
          title={finalTitle}
          description={finalDescription}
        />
      </>
    );
  }

  // Regular button variants
  return (
    <>
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <Play className="w-5 h-5" />
          <motion.div
            className="absolute inset-0"
            animate={{ 
              rotate: 360,
              scale: isHovered ? 1.2 : 1
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear",
              scale: { duration: 0.3 }
            }}
          >
            <Sparkles className="w-5 h-5 text-yellow-300 opacity-0" />
          </motion.div>
        </div>
        <span>{buttonText}</span>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        )}
      </motion.button>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={finalVideoSrc}
        fallbackSrc={finalFallbackSrc}
        webmSrc={finalWebmSrc}
        title={finalTitle}
        description={finalDescription}
      />
    </>
  );
};

export default VideoButton; 