import React, { useState, useRef, useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  fallbackSrc?: string;
  webmSrc?: string;
  title?: string;
  description?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoSrc = '/videos/vecteezy_young-car-mechanic-using-laptop-at-the-garage_35289755.mp4',
  fallbackSrc,
  webmSrc,
  title = "Our Workshop in Action",
  description = "Watch our skilled technicians at work"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(videoSrc);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Create array of video sources to try in order
  const videoSources = [
    { src: videoSrc, type: 'video/mp4' },
    ...(webmSrc ? [{ src: webmSrc, type: 'video/webm' }] : []),
    ...(fallbackSrc ? [{ src: fallbackSrc, type: 'video/mp4' }] : [])
  ];

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentSrc(videoSrc);
      setHasError(false);
      setIsLoading(true);
      setIsPlaying(false);
    }
  }, [isOpen, videoSrc]);

  const handleVideoError = () => {
    console.log('Video error occurred, trying next source...');
    const currentIndex = videoSources.findIndex(source => source.src === currentSrc);
    const nextSource = videoSources[currentIndex + 1];
    
    if (nextSource) {
      setCurrentSrc(nextSource.src);
      setHasError(false);
      setIsLoading(true);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleRetry = () => {
    setCurrentSrc(videoSrc);
    setHasError(false);
    setIsLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

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
      background: 'rgba(0,0,0,0.95)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px'
    }}>
      <div style={{ 
        background: 'black', 
        borderRadius: '12px',
        maxWidth: '95vw',
        maxHeight: '95vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Header - Only show on larger screens */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
          zIndex: 10,
          color: 'white',
          display: window.innerWidth > 768 ? 'block' : 'none'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(18px, 4vw, 24px)', 
            fontWeight: 'bold', 
            marginBottom: '8px',
            lineHeight: '1.2'
          }}>
            {title}
          </h2>
          <p style={{ 
            fontSize: 'clamp(12px, 3vw, 14px)', 
            opacity: 0.8,
            lineHeight: '1.4'
          }}>
            {description}
          </p>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            zIndex: 20,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)'
          }}
        >
          ✕
        </button>

        {/* Video Container */}
        <div style={{
          position: 'relative',
          aspectRatio: '16/9',
          background: '#000',
          width: '100%',
          height: 'auto'
        }}>
          {isLoading && !hasError && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#000',
              zIndex: 5
            }}>
              <div style={{
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  border: '4px solid #333',
                  borderTop: '4px solid #3b82f6',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 16px'
                }} />
                <p style={{ fontSize: '14px' }}>Loading...</p>
              </div>
            </div>
          )}

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
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Video Unavailable</h3>
                <p style={{ fontSize: '14px', marginBottom: '16px' }}>Sorry, this video cannot be played at the moment.</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button 
                    onClick={handleRetry}
                    style={{
                      background: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Try Again
                  </button>
                  {fallbackSrc && (
                    <button 
                      onClick={() => {
                        setCurrentSrc(fallbackSrc);
                        setHasError(false);
                        setIsLoading(true);
                      }}
                      style={{
                        background: '#10b981',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      Use Fallback
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <video
              ref={videoRef}
              key={currentSrc}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              controls={true}
              muted={isMuted}
              preload="metadata"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadStart={() => setIsLoading(true)}
              onCanPlay={() => handleVideoLoad()}
              onLoadedData={() => handleVideoLoad()}
              onError={handleVideoError}
              onAbort={handleVideoError}
            >
              {/* Multiple video sources for better compatibility */}
              <source src={videoSrc} type="video/mp4" />
              {webmSrc && <source src={webmSrc} type="video/webm" />}
              {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>

      {/* Loading spinner animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default VideoModal; 