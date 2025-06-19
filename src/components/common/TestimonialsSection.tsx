import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  service: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Owner",
      image: "/assets/img/update_1/testimonial/testi_1_1.jpg",
      rating: 5,
      text: "Outstanding service! The team at Malen Auto Repair went above and beyond to fix my car quickly and efficiently. Their honesty and transparency throughout the process was refreshing. Highly recommend!",
      service: "Engine Repair"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      image: "/assets/img/update_1/testimonial/testi_1_2.jpg",
      rating: 5,
      text: "I've been taking my cars here for years and they never disappoint. The technicians are knowledgeable, the service is prompt, and the prices are fair. They've earned my trust completely.",
      service: "Regular Maintenance"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Teacher",
      image: "/assets/img/update_1/testimonial/testi_1_3.jpg",
      rating: 5,
      text: "When my car broke down unexpectedly, they got me in right away and had it fixed the same day. The communication was excellent and they kept me updated every step of the way.",
      service: "Emergency Repair"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Sales Manager",
      image: "/assets/img/update_1/testimonial/testi_1_4.jpg",
      rating: 5,
      text: "Professional, reliable, and honest. They diagnosed the issue correctly the first time and didn't try to sell me unnecessary repairs. My car runs better than ever now.",
      service: "Diagnostics & Repair"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Healthcare Professional",
      image: "/assets/img/update_1/testimonial/testi_1_5.jpg",
      rating: 5,
      text: "As someone who knows nothing about cars, I appreciate how they explain everything in simple terms. They never make me feel stupid for asking questions. Great customer service!",
      service: "AC/Heating Service"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-4 right-4 text-primary-100 text-6xl md:text-8xl">
              <Quote />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-secondary-700 text-center mb-8 leading-relaxed italic">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-primary-100">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Failed to load testimonial image:', currentTestimonial.image);
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                            <span class="text-white font-bold text-lg">${currentTestimonial.name.charAt(0)}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-display font-semibold text-lg text-primary-600">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-secondary-600 text-sm">{currentTestimonial.role}</p>
                    <p className="text-primary-500 text-xs font-medium bg-primary-50 rounded-full px-3 py-1 mt-1">
                      {currentTestimonial.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-secondary-600 group-hover:text-primary-600 transition-colors duration-300" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-secondary-600 group-hover:text-primary-600 transition-colors duration-300" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-secondary-600 font-medium">Average Rating</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-2">98%</div>
            <div className="text-secondary-600 font-medium">Customer Satisfaction</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-display font-bold text-primary-600 mb-2">5000+</div>
            <div className="text-secondary-600 font-medium">Happy Customers</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 