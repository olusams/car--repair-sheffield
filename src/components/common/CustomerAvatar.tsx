import React from 'react';

interface CustomerAvatarProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CustomerAvatar: React.FC<CustomerAvatarProps> = ({ 
  name, 
  size = 56, 
  className = '',
  style = {}
}) => {
  // Generate initials from name
  const initials = name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Generate a consistent color based on name
  const colors = [
    'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)',
    'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
  ];

  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  const gradient = colors[colorIndex];

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: size * 0.4,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        border: '3px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      {/* Initials */}
      <span style={{
        position: 'relative',
        zIndex: 1,
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
      }}>
        {initials}
      </span>
    </div>
  );
};

export default CustomerAvatar; 