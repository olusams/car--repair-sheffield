import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedCardProps {
  children: React.ReactNode;
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  image?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'red' | 'yellow' | 'gray';
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  hover = true,
  clickable = false,
  onClick,
  image,
  imageAlt,
  title,
  subtitle,
  footer,
  badge,
  badgeColor = 'blue'
}) => {
  const badgeColors = {
    blue: { background: '#dbeafe', color: '#1e40af' },
    green: { background: '#dcfce7', color: '#166534' },
    red: { background: '#fee2e2', color: '#dc2626' },
    yellow: { background: '#fef3c7', color: '#d97706' },
    gray: { background: '#f3f4f6', color: '#374151' }
  };

  const cardContent = (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      cursor: clickable ? 'pointer' : 'default',
      transition: hover ? 'all 0.3s ease' : 'none',
      ...(hover && {
        ':hover': {
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-2px)'
        }
      })
    }}>
      {image && (
        <div style={{ position: 'relative' }}>
          <img 
            src={image} 
            alt={imageAlt || title || 'Card image'} 
            style={{
              width: '100%',
              height: '192px',
              objectFit: 'cover',
              display: 'block'
            }}
            loading="lazy"
            onError={(e) => {
              // Fallback to a service image if the original fails to load
              const target = e.target as HTMLImageElement;
              if (target.src !== '/assets/img/service/service_1_1.jpg') {
                target.src = '/assets/img/service/service_1_1.jpg';
              } else {
                // If fallback also fails, show a placeholder
                target.style.background = '#f3f4f6';
                target.style.display = 'flex';
                target.style.alignItems = 'center';
                target.style.justifyContent = 'center';
                target.style.color = '#9ca3af';
                target.style.fontSize = '14px';
                target.style.fontWeight = '500';
                target.src = '';
                target.alt = 'Image not available';
              }
            }}
          />
          {badge && (
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              padding: '4px 8px',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: '500',
              ...badgeColors[badgeColor]
            }}>
              {badge}
            </div>
          )}
        </div>
      )}
      
      {(title || subtitle) && (
        <div style={{ padding: '24px 24px 0 24px' }}>
          {title && (
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#111827',
              marginBottom: '8px',
              margin: '0 0 8px 0'
            }}>{title}</h3>
          )}
          {subtitle && (
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              margin: '0',
              lineHeight: '1.5'
            }}>{subtitle}</p>
          )}
        </div>
      )}
      
      <div style={{ padding: '24px 24px 0 24px' }}>
        {children}
      </div>
      
      {footer && (
        <div style={{
          padding: '16px 24px',
          background: '#f9fafb',
          borderTop: '1px solid #e5e7eb'
        }}>
          {footer}
        </div>
      )}
    </div>
  );

  if (clickable && onClick) {
    return (
      <motion.div
        onClick={onClick}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {cardContent}
    </motion.div>
  );
}; 