import React from 'react';
import { Star, Quote, MapPin, Car, Calendar } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  service?: string;
  date?: string;
  verified?: boolean;
  vehicle?: string;
  location?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  showDetails?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, showDetails = true }) => {
  // Remove debug console.log since images are working
  // console.log('Testimonial image:', testimonial.name, testimonial.image, typeof testimonial.image);

  // No longer need to check image path since we're using direct imports

  return (
    <div 
      style={{
        position: 'relative',
        background: 'white',
        borderRadius: '24px',
        padding: 'clamp(2rem, 4vw, 3rem)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid #f1f5f9',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.borderColor = '#e2e8f0';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.borderColor = '#f1f5f9';
      }}
    >
      {/* Enhanced Background Effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.03) 0%, rgba(2, 132, 199, 0.03) 100%)',
        opacity: 0,
        transition: 'opacity 0.5s ease'
      }}></div>
      
      {/* Quote Icon */}
      <div style={{
        position: 'absolute',
        top: 'clamp(1.5rem, 3vw, 2rem)',
        right: 'clamp(1.5rem, 3vw, 2rem)',
        opacity: 0.1,
        zIndex: 1
      }}>
        <Quote style={{ 
          width: 'clamp(2rem, 4vw, 3rem)', 
          height: 'clamp(2rem, 4vw, 3rem)', 
          color: '#0ea5e9' 
        }} />
      </div>
      
      {/* Rating Stars */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
        transition: 'transform 0.3s ease',
        position: 'relative',
        zIndex: 10
      }}>
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star 
            key={index} 
            style={{ 
              width: 'clamp(1.125rem, 2vw, 1.25rem)', 
              height: 'clamp(1.125rem, 2vw, 1.25rem)', 
              color: '#fbbf24',
              fill: 'currentColor',
              transition: 'transform 0.3s ease',
              animationDelay: `${index * 100}ms`
            }}
          />
        ))}
        <span style={{
          marginLeft: '0.75rem',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)',
          color: '#6b7280',
          fontWeight: '500'
        }}>
          {testimonial.rating}/5
        </span>
      </div>

      {/* Service Badge */}
      {testimonial.service && (
        <div style={{
          position: 'absolute',
          top: 'clamp(1.5rem, 3vw, 2rem)',
          left: 'clamp(1.5rem, 3vw, 2rem)',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
          fontWeight: '600',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
        }}>
          {testimonial.service}
        </div>
      )}

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        marginTop: testimonial.service ? 'clamp(3rem, 6vw, 4rem)' : '0'
      }}>
        <blockquote style={{
          color: '#374151',
          lineHeight: '1.8',
          marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
          transition: 'color 0.3s ease',
          fontStyle: 'italic',
          flexGrow: 1,
          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
          position: 'relative',
          paddingLeft: '1rem',
          borderLeft: '3px solid #0ea5e9'
        }}>
          "{testimonial.content}"
        </blockquote>

        {/* Vehicle and Location Info */}
        {showDetails && (testimonial.vehicle || testimonial.location) && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
            padding: 'clamp(0.75rem, 1.5vw, 1rem)',
            background: 'rgba(14, 165, 233, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(14, 165, 233, 0.1)'
          }}>
            {testimonial.vehicle && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)',
                color: '#374151'
              }}>
                <Car style={{ width: '16px', height: '16px', color: '#0ea5e9' }} />
                <span style={{ fontWeight: '500' }}>Vehicle:</span>
                <span>{testimonial.vehicle}</span>
              </div>
            )}
            {testimonial.location && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)',
                color: '#374151'
              }}>
                <MapPin style={{ width: '16px', height: '16px', color: '#0ea5e9' }} />
                <span style={{ fontWeight: '500' }}>Location:</span>
                <span>{testimonial.location}</span>
              </div>
            )}
            {testimonial.date && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: 'clamp(0.8125rem, 1.5vw, 0.875rem)',
                color: '#6b7280'
              }}>
                <Calendar style={{ width: '16px', height: '16px', color: '#6b7280' }} />
                <span>{new Date(testimonial.date).toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            )}
          </div>
        )}

        {/* Author Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
          marginTop: 'auto',
          paddingTop: 'clamp(1.25rem, 2.5vw, 1.5rem)',
          borderTop: '1px solid #e5e7eb'
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 'clamp(48px, 8vw, 56px)',
              height: 'clamp(48px, 8vw, 56px)',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid rgba(14, 165, 233, 0.2)',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(14, 165, 233, 0.15)'
            }}>
              <OptimizedImage
                src={testimonial.image}
                alt={testimonial.name}
                fallbackSrc="/assets/img/testimonial/testi_1_1.jpg"
                loading="lazy"
              />
            </div>
            <div style={{
              position: 'absolute',
              inset: -3,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(2, 132, 199, 0.1))',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              filter: 'blur(4px)',
              transform: 'scale(1.2)'
            }}></div>
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{
              fontWeight: '600',
              color: '#111827',
              transition: 'all 0.3s ease',
              margin: '0 0 0.25rem 0',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)'
            }}>
              {testimonial.name}
            </h4>
            <p style={{
              fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)',
              color: '#6b7280',
              transition: 'color 0.3s ease',
              margin: 0,
              fontWeight: '500'
            }}>
              {testimonial.role}
            </p>
          </div>
          
          {/* Verified Badge */}
          {testimonial.verified && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'clamp(32px, 6vw, 40px)',
              height: 'clamp(32px, 6vw, 40px)',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
              transition: 'all 0.3s ease'
            }}>
              <svg 
                style={{ 
                  width: 'clamp(0.875rem, 2vw, 1rem)', 
                  height: 'clamp(0.875rem, 2vw, 1rem)', 
                  color: 'white' 
                }} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 