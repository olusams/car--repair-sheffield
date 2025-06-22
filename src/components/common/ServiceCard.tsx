import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../../data/services';
import { ArrowRight, Check, Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  const [isMobile, setIsMobile] = useState(false);

  // Remove debug console.log since images are working
  // console.log('Service image:', service.title, service.image, typeof service.image);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <Link 
      to={`/services/${service.id}`} 
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        height: '100%'
      }}
    >
      <div style={{
        background: 'white',
        borderRadius: isMobile ? '8px' : '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
      }}
      >
        {/* Image Section */}
        <div 
          className="service-card-image-container"
          style={{ 
            position: 'relative', 
            height: isMobile ? '160px' : '192px',
            aspectRatio: '16/9',
            overflow: 'hidden',
            background: '#f3f4f6'
          }}
        >
          <OptimizedImage
            src={service.image || ''}
            alt={service.title}
            fallbackSrc="/assets/img/service/service_1_1.jpg"
            loading="lazy"
          />
          
          <style>{`
            .service-card-image {
              height: 100% !important;
              max-height: none !important;
              transition: opacity 0.3s ease-in-out;
            }
            
            .service-card-image-container {
              background: #f3f4f6;
              position: relative;
              overflow: hidden;
            }
          `}</style>
          
          {/* Price Badge */}
          {service.price && (
            <div style={{
              position: 'absolute',
              top: isMobile ? '8px' : '12px',
              right: isMobile ? '8px' : '12px',
              padding: isMobile ? '3px 6px' : '4px 8px',
              borderRadius: '9999px',
              fontSize: isMobile ? '10px' : '12px',
              fontWeight: '500',
              background: '#dbeafe',
              color: '#1e40af'
            }}>
              {service.price}
            </div>
          )}

          {/* Service Icon */}
          {Icon && (
            <div style={{
              position: 'absolute',
              top: isMobile ? '12px' : '16px',
              left: isMobile ? '12px' : '16px',
              width: isMobile ? '36px' : '48px',
              height: isMobile ? '36px' : '48px',
              background: '#2563eb',
              borderRadius: isMobile ? '6px' : '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <Icon className={isMobile ? "w-5 h-5 text-white" : "w-6 h-6 text-white"} />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div style={{ 
          padding: isMobile ? '16px' : '24px', 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column' 
        }}>
          <h3 style={{
            fontSize: isMobile ? '16px' : '20px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: isMobile ? '6px' : '8px',
            margin: '0 0 8px 0',
            lineHeight: '1.3'
          }}>{service.title}</h3>
          
          <p style={{
            color: '#6b7280',
            fontSize: isMobile ? '12px' : '14px',
            margin: '0 0 16px 0',
            lineHeight: '1.5'
          }}>{service.description}</p>

          {/* Features */}
          {service.features && service.features.length > 0 && (
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isMobile ? '6px' : '8px', 
              marginBottom: isMobile ? '12px' : '16px' 
            }}>
              <h4 style={{
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '500',
                color: '#111827',
                display: 'flex',
                alignItems: 'center',
                margin: '0'
              }}>
                <Star className={isMobile ? "w-3 h-3 text-yellow-500 mr-1" : "w-4 h-4 text-yellow-500 mr-2"} />
                Key Features
              </h4>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '3px' : '4px',
                margin: '0',
                padding: '0',
                listStyle: 'none'
              }}>
                {service.features.slice(0, isMobile ? 2 : 3).map((feature, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: isMobile ? '12px' : '14px',
                    color: '#6b7280'
                  }}>
                    <div style={{
                      width: isMobile ? '12px' : '16px',
                      height: isMobile ? '12px' : '16px',
                      background: '#10b981',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: isMobile ? '6px' : '8px',
                      flexShrink: 0
                    }}>
                      <Check className={isMobile ? "w-2 h-2 text-white" : "w-2.5 h-2.5 text-white"} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Footer */}
          <div style={{
            marginTop: 'auto',
            paddingTop: isMobile ? '12px' : '16px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '6px' : '8px'
            }}>
              <Star className={isMobile ? "w-3 h-3 text-yellow-500" : "w-4 h-4 text-yellow-500"} />
              <span style={{
                fontSize: isMobile ? '12px' : '14px',
                color: '#6b7280'
              }}>Expert Service</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '3px' : '4px',
              color: '#2563eb'
            }}>
              <span style={{
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '500'
              }}>Learn More</span>
              <ArrowRight className={isMobile ? "w-3 h-3" : "w-4 h-4"} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard; 