import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HeroSlide } from '../../data/heroSlides';
import OptimizedImage from './OptimizedImage';

interface HeroSliderProps {
  slides?: HeroSlide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Use provided slides or fallback to empty array
  const slideData = useMemo(() => slides || [], [slides]);

  useEffect(() => {
    if (slideData.length === 0) return;
    
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % slideData.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating, slideData.length]);

  const goToSlide = (index: number) => {
    if (index === currentSlide || isAnimating || slideData.length === 0) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    if (isAnimating || slideData.length === 0) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || slideData.length === 0) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // If no slides provided, show a default message
  if (slideData.length === 0) {
    return (
      <section style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom right, #1f2937, #374151)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: '700', marginBottom: '16px' }}>No Slides Available</h1>
          <p style={{ fontSize: '1.25rem' }}>Please provide slides data to display the hero slider.</p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Enhanced Background with Animated Gradients */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom right, #1e3a8a, #7c3aed, #3730a3)'
        }}></div>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0.6))'
        }}></div>
        
        {/* Animated Background Elements */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '40px',
            width: '128px',
            height: '128px',
            background: 'rgba(96, 165, 250, 0.1)',
            borderRadius: '50%',
            filter: 'blur(48px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '80px',
            right: '40px',
            width: '160px',
            height: '160px',
            background: 'rgba(168, 85, 247, 0.1)',
            borderRadius: '50%',
            filter: 'blur(48px)'
          }}></div>
        </div>
      </div>

      {/* Slides */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%' }}>
        {slideData.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              position: 'absolute',
              inset: 0,
              transition: 'all 1s ease-in-out',
              opacity: index === currentSlide ? 1 : 0,
              transform: index === currentSlide 
                ? 'translateX(0)' 
                : index < currentSlide 
                  ? 'translateX(-100%)' 
                  : 'translateX(100%)'
            }}
          >
            <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              {/* Background Image */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%'
                }}>
                  <OptimizedImage
                    src={slide.image}
                    alt={slide.title}
                    fallbackSrc="/assets/img/hero/hero_bg_1_1.jpg"
                    loading={index === currentSlide ? "eager" : "lazy"}
                  />
                </div>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0.6))'
                }}></div>
              </div>

              {/* Content */}
              <div className="container-custom" style={{ 
                maxWidth: '72rem', 
                margin: '0 auto', 
                padding: '0 1rem', 
                position: 'relative',
                zIndex: 10
              }}>
                <div style={{ maxWidth: '64rem' }}>
                  <div style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    color: 'white'
                  }}>
                    {/* Badge */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      background: 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(4px)'
                    }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#93c5fd' }}>
                        Professional Service
                      </span>
                    </div>

                    {/* Title */}
                    <h1 style={{
                      fontSize: '3rem',
                      fontWeight: '700',
                      lineHeight: '1.1',
                      margin: 0
                    }}>
                      <span style={{
                        display: 'block',
                        background: 'linear-gradient(to right, #0ea5e9, #0284c7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {slide.title}
                      </span>
                      <span style={{
                        display: 'block',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '2.25rem',
                        marginTop: '8px'
                      }}>
                        {slide.subtitle}
                      </span>
                    </h1>

                    {/* Description */}
                    <p style={{
                      fontSize: '1.25rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      maxWidth: '32rem',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      paddingTop: '16px'
                    }}>
                      <Link
                        to="/appointment"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '16px 32px',
                          borderRadius: '16px',
                          background: 'linear-gradient(to right, #0ea5e9, #0284c7)',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>Book Appointment</span>
                      </Link>
                      
                      <Link
                        to="/services"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '16px 32px',
                          borderRadius: '16px',
                          border: '2px solid rgba(255, 255, 255, 0.3)',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Our Services</span>
                      </Link>
                    </div>

                    {/* Features */}
                    {slide.features && slide.features.length > 0 && (
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '24px',
                        paddingTop: '32px'
                      }}>
                        {slide.features.map((feature, featureIndex) => (
                          <div key={featureIndex} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'rgba(255, 255, 255, 0.8)'
                          }}>
                            <svg style={{ width: '16px', height: '16px', color: '#4ade80', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span style={{ fontSize: '0.875rem' }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          padding: '12px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        aria-label="Previous slide"
      >
        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          padding: '12px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        aria-label="Next slide"
      >
        <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        gap: '12px'
      }}>
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              background: index === currentSlide
                ? 'linear-gradient(to right, #3b82f6, #8b5cf6)'
                : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              cursor: 'pointer',
              transform: index === currentSlide ? 'scale(1.25)' : 'scale(1)'
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20
      }}>
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '4px',
            height: '12px',
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '4px',
            marginTop: '8px'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider; 