import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Engine Repair', href: '/services#engine-repair' },
      { name: 'Brake Service', href: '/services#brake-service' },
      { name: 'Oil Change', href: '/services#oil-change' },
      { name: 'Transmission', href: '/services#transmission' },
      { name: 'AC/Heating', href: '/services#ac-heating' }
    ]
  };

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.5
      }} />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Contact Info - moved to first column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              margin: '0 0 24px 0',
              color: 'white',
              fontFamily: 'Playfair Display, serif'
            }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <motion.div 
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(14, 165, 233, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    margin: '0 0 4px 0',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>Phone</p>
                  <a href={`tel:${siteConfig.contact.phone}`} style={{
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'inline-block'
                  }}>
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(14, 165, 233, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    margin: '0 0 4px 0',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>Email</p>
                  <a href={`mailto:${siteConfig.contact.email}`} style={{
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'inline-block'
                  }}>
                    {siteConfig.contact.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(14, 165, 233, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    margin: '0 0 4px 0',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>Address</p>
                  <p style={{ 
                    color: 'white', 
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: '600',
                    lineHeight: '1.5'
                  }}>
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(14, 165, 233, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  margin: '0 0 4px 0',
                  color: 'white'
                }}>{siteConfig.business.name}</h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  Professional Auto Services
                </p>
              </div>
            </div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem',
              lineHeight: '1.7',
              margin: '0 0 32px 0',
              maxWidth: '400px'
            }}>
              {siteConfig.business.description}
            </p>
            
            {/* Business Hours */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: 'white',
                margin: '0 0 12px 0'
              }}>
                Business Hours
              </h4>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Monday - Friday:</span>
                  <span>7:30 AM - 6:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
          </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              margin: '0 0 24px 0',
              color: 'white',
              fontFamily: 'Playfair Display, serif'
            }}>Our Services</h4>
            <ul style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px', 
              margin: 0, 
              padding: 0, 
              listStyle: 'none' 
            }}>
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <Link to={link.href} style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem',
                    fontWeight: '500',
                    display: 'block',
                    padding: '8px 0',
                    borderRadius: '8px',
                    position: 'relative'
                  }}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}
        >
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '20px' }}>
            {Object.values(siteConfig.social).map((social, index) => (
              <motion.a 
                key={social.url} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          
          {/* Copyright */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              textAlign: 'center'
            }}>
              &copy; {currentYear} {siteConfig.business.name}. All rights reserved.
            </p>
            <p style={{
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.5)',
              margin: 0,
              textAlign: 'center'
            }}>
              Professional auto repair and maintenance services
            </p>
        </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 