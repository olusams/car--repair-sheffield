import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import ServiceCard from '../components/common/ServiceCard';
import { services, serviceCategories } from '../data/services';
import { siteConfig } from '../data/siteConfig';
import OptimizedImage from '../components/common/OptimizedImage';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Banner Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url(/assets/img/update_1/hero/hero_bg_3_1.jpg)`
          }}
        >
          {/* Enhanced Overlay with Multiple Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/55 via-primary-700/35 to-primary-800/45"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/25 via-transparent to-primary-600/25"></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-28 h-28 bg-white/8 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/18 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-400/12 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-400/15 rounded-full blur-md animate-pulse delay-1500"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-white/25"
          >
            <span className="text-sm font-medium text-white">Our Services</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold responsive-heading mb-6 text-white"
          >
            Professional <span className="text-gradient-hero">Auto Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive automotive services to keep your vehicle running smoothly and safely with the highest quality standards.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-sm bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-primary-600 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold">FEATURED SERVICES</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Our <span className="text-gradient">Most Popular</span> Services
            </h2>
            <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
              Experience excellence with our most trusted and requested automotive services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.filter(service => service.popular).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  {/* Popular Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse-glow">
                      <span className="relative z-10">POPULAR</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-75 animate-ping"></div>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 h-64">
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      fallbackSrc="/assets/img/service/service_1_1.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Service Icon Overlay */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white text-sm font-medium">{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex-shrink-0"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Price */}
                    {service.price && (
                      <div className="flex items-center justify-between pt-4 pb-2">
                        <div className="text-3xl font-bold text-gradient">
                          {service.price}
                        </div>
                        <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                          Starting from
                        </div>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      {/* Book Now Button */}
                      <Link
                        to="/appointment"
                        className="flex-1 py-3 px-6 rounded-xl font-semibold text-center group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600"
                        onClick={() => {
                          console.log(`Featured service CTA clicked: ${service.title} -> /appointment`);
                        }}
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          <span>Book Now</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>

                      {/* Learn More Button */}
                      <Link
                        to={`/services#${service.id}`}
                        className="flex-1 py-3 px-6 rounded-xl font-semibold text-center group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white"
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <span>Learn more</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-yellow-400/5 to-orange-400/5"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding-sm bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              All <span className="text-gradient">Services</span>
            </h2>
            <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
              Browse our complete range of automotive services below
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.filter(service => !service.popular).map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Banner Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url(/assets/img/update_1/hero/hero_bg_3_2.jpg)`
          }}
        >
          {/* Enhanced Overlay with Multiple Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700/45 via-primary-800/25 to-primary-900/35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-primary-600/20 via-transparent to-primary-700/20"></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-30 h-30 bg-white/6 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-22 h-22 bg-yellow-300/12 rounded-full blur-xl animate-pulse delay-800"></div>
          <div className="absolute top-1/2 right-1/3 w-18 h-18 bg-blue-300/10 rounded-full blur-lg animate-pulse delay-1300"></div>
          <div className="absolute bottom-1/3 left-1/3 w-26 h-26 bg-purple-300/14 rounded-full blur-md animate-pulse delay-400"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-white">
              Need Professional Auto Service?
            </h2>
            <p className="text-white/95 text-lg mb-8 max-w-3xl mx-auto">
              Schedule your appointment today and experience the difference of professional auto repair services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment" className="btn-secondary">
                Schedule Service
                <Calendar className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/contact" className="btn-ghost text-white border-white/25 hover:bg-white/12">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 