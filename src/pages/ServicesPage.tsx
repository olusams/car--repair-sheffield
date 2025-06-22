import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { siteConfig } from '../data/siteConfig';
import OptimizedImage from '../components/common/OptimizedImage';

const ServicesPage: React.FC = () => {
  return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)', 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      width: '100%'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '40px 0 80px 0', // Reduced top padding since header is now accounted for
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        color: 'white',
        marginBottom: '60px',
        boxShadow: '0 8px 32px rgba(14, 165, 233, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '3.5rem',
            fontWeight: 700,
            margin: '0 0 24px 0',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Our Professional Services
          </h1>
          <p style={{
            fontSize: '1.25rem',
            margin: '0 auto',
            maxWidth: 600,
            color: 'rgba(255,255,255,0.95)',
            lineHeight: '1.6'
          }}>
            From diagnostics to repairs, we offer comprehensive automotive services with expert technicians and state-of-the-art equipment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px 80px 24px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                boxShadow: '0 4px 24px rgba(30, 41, 59, 0.08)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                minHeight: 520,
                cursor: 'pointer'
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/2.1', overflow: 'hidden' }}>
                <OptimizedImage
                  src={service.image || "/assets/img/service/service_1_1.jpg"}
                  alt={service.title}
                  fallbackSrc="/assets/img/service/service_1_1.jpg"
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))'
                }} />
                <div style={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '16px',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(8px)'
                }}>
                  <div style={{ color: '#0ea5e9' }}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: '#0ea5e9' }}>{service.title}</span>
                </div>
                {service.popular && (
                  <div style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e42 100%)',
                    color: '#fff',
                    borderRadius: '12px',
                    padding: '8px 16px',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    boxShadow: '0 4px 12px rgba(251,191,36,0.3)',
                    backdropFilter: 'blur(8px)'
                  }}>
                    ⭐ Popular
                  </div>
                )}
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '32px 28px 28px 28px' }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  margin: '0 0 16px 0',
                  color: '#0ea5e9',
                  fontFamily: 'Playfair Display, serif'
                }}>{service.title}</h2>
                <p style={{ 
                  color: '#475569', 
                  fontSize: '1.05rem', 
                  margin: '0 0 24px 0', 
                  flex: 0,
                  lineHeight: '1.6'
                }}>{service.description}</p>
                <ul style={{
                  color: '#64748b',
                  fontSize: '1rem',
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  flex: 1
                }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 12,
                      padding: '4px 0'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#0ea5e9',
                        flexShrink: 0
                      }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  marginTop: 24,
                  padding: '16px 0',
                  borderTop: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontWeight: 700, color: '#0284c7', fontSize: '1.2rem' }}>{service.price}</span>
                    <span style={{ color: '#64748b', fontSize: '0.875rem' }}>{service.duration}</span>
                  </div>
                  <Link to="/appointment" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(14,165,233,0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <span style={{ position: 'relative', zIndex: 1 }}>Book Now</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        color: 'white',
        textAlign: 'center',
        padding: '80px 24px',
        borderRadius: '32px',
        maxWidth: 1000,
        margin: '0 auto 80px auto',
        boxShadow: '0 8px 32px rgba(14, 165, 233, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontSize: '2.5rem', 
            fontWeight: 700, 
            margin: '0 0 24px 0',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>Ready to Get Started?</h2>
          <p style={{ 
            fontSize: '1.2rem', 
            margin: '0 auto 40px', 
            maxWidth: 600, 
            color: 'rgba(255,255,255,0.95)',
            lineHeight: '1.6'
          }}>
            Schedule your appointment online or call us for expert advice. Our certified technicians are ready to help you get back on the road safely.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/appointment" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              color: '#0ea5e9',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '16px 32px',
              borderRadius: '16px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span style={{ position: 'relative', zIndex: 1 }}>Book Appointment</span>
            </Link>
            <a href={`tel:${siteConfig.contact.phone}`} style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '16px 32px',
              borderRadius: '16px',
              textDecoration: 'none',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              Call Now
            </a>
          </div>
    </div>
      </section>
    </div>
  );
};

export default ServicesPage; 