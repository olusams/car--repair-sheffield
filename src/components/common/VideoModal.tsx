import React, { useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  title?: string;
  description?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoSrc = '/videos/vecteezy_young-car-mechanic-using-laptop-at-the-garage_35289755.mp4', // Use the correct path
  title = "Our Workshop in Action",
  description = "Watch our skilled technicians at work"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!isOpen) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.9)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ 
        background: 'black', 
        borderRadius: 12,
        maxWidth: 800,
        width: '100%',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
          zIndex: 10,
          color: 'white'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
            {title}
          </h2>
          <p style={{ fontSize: '14px', opacity: 0.8 }}>
            {description}
          </p>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            zIndex: 20,
            fontSize: '18px'
          }}
        >
          ✕
        </button>

        {/* Video Container */}
        <div style={{
          position: 'relative',
          aspectRatio: '16/9',
          background: '#000'
        }}>
          {hasError ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: 'white',
              textAlign: 'center',
              padding: '20px'
            }}>
              <div>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎥</div>
                <h3>Video Unavailable</h3>
                <p>Sorry, this video cannot be played at the moment.</p>
                <button 
                  onClick={() => setHasError(false)}
                  style={{
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '12px'
                  }}
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : (
            <video
              key={`${videoSrc}-${Date.now()}`} // Force complete reload
              src={videoSrc}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              controls={true}
              muted={isMuted}
              autoPlay={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadStart={() => {
                setHasError(false);
              }}
              onCanPlay={() => {
                setHasError(false);
              }}
              onError={() => {
                setHasError(true);
              }}
            />
          )}
          
          {/* Video Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Footer Info */}
        <div style={{
          padding: '20px',
          color: 'white',
          fontSize: '14px',
          opacity: 0.7
        }}>
          Video Source: {videoSrc}
        </div>
      </div>
    </div>
  );
};

export default VideoModal; 