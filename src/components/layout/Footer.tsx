import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Star,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Engine Repair', href: '/services#engine-repair' },
      { name: 'Brake Service', href: '/services#brake-service' },
      { name: 'Oil Change', href: '/services#oil-change' },
      { name: 'Transmission Service', href: '/services#transmission' },
      { name: 'Electrical Systems', href: '/services#electrical' },
      { name: 'AC/Heating', href: '/services#ac-heating' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Certifications', href: '/about#certifications' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Updates', href: '/blog' },
      { name: 'Contact Us', href: '/contact' }
    ],
    support: [
      { name: 'Appointments', href: '/appointment' },
      { name: 'Emergency Service', href: '/contact' },
      { name: 'Warranty Information', href: '/warranty' },
      { name: 'Service History', href: '/account' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Customer Support', href: '/contact' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{siteConfig.business.name}</h3>
                  <p className="text-gray-400 text-sm">{siteConfig.business.tagline}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {siteConfig.business.description}
              </p>

              {/* Certifications */}
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-white flex items-center space-x-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>Certifications</span>
                </h4>
                <div className="space-y-2">
                  {siteConfig.business.certifications.slice(0, 3).map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Awards</span>
                </h4>
                <div className="space-y-2">
                  {siteConfig.business.awards.slice(0, 2).map((award, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a 
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-gray-400 text-xs mt-1">Emergency: {siteConfig.contact.emergency}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <address className="text-white not-italic">
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                    </address>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Hours</p>
                    <div className="text-white text-sm">
                      <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              <p>
                © {currentYear} {siteConfig.business.name}. All rights reserved.
              </p>
              <p className="mt-1">
                Founded in {siteConfig.business.founded} • {siteConfig.business.employees} employees
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {Object.entries(siteConfig.social).map(([platform, social]) => (
                <motion.a
                  key={platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 hover:shadow-lg"
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {platform === 'facebook' && <Facebook className="w-5 h-5" />}
                  {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                  {platform === 'instagram' && <Instagram className="w-5 h-5" />}
                  {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                  {platform === 'youtube' && <Youtube className="w-5 h-5" />}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center space-x-6 mt-6 pt-6 border-t border-gray-700/30"
          >
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Sitemap
            </Link>
            <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Accessibility
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 