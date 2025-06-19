import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../../data/services';
import OptimizedImage from './OptimizedImage';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '' }) => {
  return (
    <div className={`service-card group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden relative transform-style-preserve-3d perspective-1000 ${
      service.popular ? 'ring-2 ring-yellow-400/50 shadow-yellow-400/20 hover:ring-yellow-400/70' : ''
    } ${className}`}>
      
      {/* Popular Badge with Enhanced Animation */}
      {service.popular && (
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse-glow">
            <span className="relative z-10">POPULAR</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-75 animate-ping"></div>
          </div>
        </div>
      )}

      {/* Enhanced Image Container */}
      <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-700">
        <OptimizedImage
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          fallbackSrc="/car--repair-sheffield/assets/img/service/service_1_1.jpg"
        />
        
        {/* Enhanced Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        
        {/* Enhanced Service Icon Overlay */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover-glow">
          <service.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>

        {/* Enhanced Duration Badge */}
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md rounded-lg px-3 py-1 group-hover:bg-black/90 transition-all duration-300">
          <div className="flex items-center space-x-1">
            <svg className="w-3 h-3 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white text-xs font-medium group-hover:text-yellow-300 transition-colors duration-300">{service.duration}</span>
          </div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="space-y-4 relative z-10">
        {/* Enhanced Title */}
        <h3 className={`text-xl font-bold transition-all duration-300 group-hover:scale-105 ${
          service.popular ? 'text-yellow-600 group-hover:text-yellow-700 text-shadow-glow' : 'text-gray-900 group-hover:text-blue-600'
        }`}>
          {service.title}
        </h3>

        {/* Enhanced Description */}
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </p>

        {/* Enhanced Features */}
        {service.features && service.features.length > 0 && (
          <div className="space-y-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-600 group-hover:text-gray-700 transition-all duration-300 hover:translate-x-1">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-125 ${
                  service.popular ? 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-glow-yellow' : 'bg-gradient-to-r from-blue-500 to-purple-500'
                }`}></div>
                <span className="transition-all duration-300">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Price */}
        {service.price && (
          <div className="flex items-center justify-between pt-4 pb-2">
            <div className={`text-2xl font-bold transition-all duration-300 group-hover:scale-110 ${
              service.popular ? 'text-gradient-gold' : 'text-gradient'
            }`}>
              {service.price}
            </div>
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-gray-200 transition-all duration-300">
              Starting from
            </div>
          </div>
        )}

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {/* Book Now Button */}
          <Link
            to="/appointment"
            className={`flex-1 py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 hover:shadow-lg hover:scale-105 ${
              service.popular 
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
            }`}
            onClick={() => {
              console.log(`Service card CTA clicked: ${service.title} -> /appointment`);
            }}
          >
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Book Now</span>
            </span>
          </Link>

          {/* Learn More Button */}
          <Link
            to={`/services#${service.id}`}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 ${
              service.popular 
                ? 'border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white' 
                : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
            }`}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Learn more</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Enhanced Hover Effect Overlay */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
        service.popular 
          ? 'bg-gradient-to-br from-yellow-400/10 to-orange-400/10' 
          : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10'
      }`}></div>

      {/* Enhanced Border Glow Effect */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
        service.popular 
          ? 'bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-400/20' 
          : 'bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20'
      } blur-xl scale-110 group-hover:scale-100`}></div>

      {/* Enhanced Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-transparent group-hover:border-primary-500 transition-all duration-500 rounded-tl-3xl"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-transparent group-hover:border-primary-500 transition-all duration-500 rounded-tr-3xl"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-transparent group-hover:border-primary-500 transition-all duration-500 rounded-bl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-transparent group-hover:border-primary-500 transition-all duration-500 rounded-br-3xl"></div>
    </div>
  );
};

export default ServiceCard; 