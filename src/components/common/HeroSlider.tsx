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
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">No Slides Available</h1>
          <p className="text-xl">Please provide slides data to display the hero slider.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Enhanced Background with Animated Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-pink-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      {/* Slides */}
      <div className="relative z-10 h-full">
        {slideData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="relative h-full flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <OptimizedImage
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  fallbackSrc="/assets/img/hero/hero_bg_1_1.jpg"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  priority={index === currentSlide}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              </div>

              {/* Content */}
              <div className="container-custom relative z-10">
                <div className="max-w-4xl">
                  <div className={`space-y-6 text-white ${
                    index === currentSlide ? 'animate-slide-in-left' : ''
                  }`}>
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 backdrop-blur-sm">
                      <span className="text-sm font-medium text-blue-300">
                        Professional Service
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      <span className="block text-gradient-hero">
                        {slide.title}
                      </span>
                      <span className="block text-white/90 text-4xl md:text-5xl lg:text-6xl mt-2">
                        {slide.subtitle}
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link
                        to="/appointment"
                        className="btn-primary group relative overflow-hidden text-lg px-8 py-4 rounded-2xl"
                      >
                        <span className="relative z-10 flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          <span>Book Appointment</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                      
                      <Link
                        to="/services"
                        className="btn-outline text-lg px-8 py-4 rounded-2xl border-2 border-white/30 text-white hover:bg-white hover:text-gray-900"
                      >
                        <span className="flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span>Our Services</span>
                        </span>
                      </Link>
                    </div>

                    {/* Features */}
                    {slide.features && slide.features.length > 0 && (
                      <div className="flex flex-wrap gap-6 pt-8">
                        {slide.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-white/80">
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{feature}</span>
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider; 