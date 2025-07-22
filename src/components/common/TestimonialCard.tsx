import React from 'react';
import { Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, className = '' }) => {
  return (
    <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden relative group hover-lift ${className}`}>
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-orange-400/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Enhanced Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <svg className="w-16 h-16 text-yellow-400 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      {/* Enhanced Rating Stars */}
      <div className="flex items-center space-x-1 mb-6 group-hover:scale-110 transition-transform duration-300">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star 
            key={index} 
            className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10">
        <blockquote className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-300 italic">
          "{testimonial.content}"
        </blockquote>

        {/* Enhanced Author Section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-yellow-400/30 group-hover:ring-yellow-400/60 transition-all duration-300 group-hover:scale-110">
              <OptimizedImage
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                fallbackSrc="/assets/img/testimonial/testi_1_1.jpg"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-150"></div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 group-hover:text-gradient transition-all duration-300">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-transparent group-hover:border-yellow-400 transition-all duration-500 rounded-tl-3xl"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-transparent group-hover:border-orange-400 transition-all duration-500 rounded-tr-3xl"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-transparent group-hover:border-orange-400 transition-all duration-500 rounded-bl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-transparent group-hover:border-yellow-400 transition-all duration-500 rounded-br-3xl"></div>

      {/* Enhanced Border Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-400/20 blur-xl scale-110 group-hover:scale-100"></div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default TestimonialCard; 