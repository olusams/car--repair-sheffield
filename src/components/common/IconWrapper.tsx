import React from 'react';

interface IconWrapperProps {
  icon: React.ElementType;
  className?: string;
  colorClassName?: string;
  [key: string]: any;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  className = '',
  colorClassName = 'text-primary-600',
  ...props
}) => {
  return (
    <Icon
      className={`w-8 h-8 ${colorClassName} transition-transform duration-300 group-hover:scale-110 ${className}`}
      {...props}
    />
  );
};

export default IconWrapper; 