import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ReliableImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: LucideIcon;
  fallbackText?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
  children?: React.ReactNode;
  priority?: boolean;
}

const ReliableImage: React.FC<ReliableImageProps> = ({
  src,
  alt,
  className = '',
  fallbackIcon: Icon,
  fallbackText,
  style,
  onLoad,
  onError,
  children,
  priority = false
}) => {
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div 
      className={`relative overflow-hidden bg-gray-200 ${className}`}
      style={style}
    >
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
      />
      
      {/* Fallback - Only show if image failed */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="text-center p-4">
            {Icon && <Icon className="w-8 h-8 text-gray-400 mx-auto mb-2" />}
            {fallbackText && (
              <p className="text-sm text-gray-500 font-medium">{fallbackText}</p>
            )}
          </div>
        </div>
      )}
      
      {/* Children (overlays, etc.) */}
      {children}
    </div>
  );
};

export default ReliableImage; 