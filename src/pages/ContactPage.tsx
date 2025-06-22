import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '../components/common/ContactForm';
import { siteConfig } from '../data/siteConfig';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        `${siteConfig.contact.address.street}`,
        `${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.zip}`
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [siteConfig.contact.phone],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [siteConfig.contact.email],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 5:00 PM',
        'Sunday: Closed'
      ],
      color: 'from-purple-500 to-purple-600'
    },
  ];

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive automotive services including engine repair, brake service, oil changes, transmission service, electrical diagnostics, AC/Heating repair, tire service, and computer diagnostics.'
    },
    {
      question: 'Do you offer warranties on your work?',
      answer: 'Yes, we provide comprehensive warranties on all our work. Our standard warranty covers parts and labor, and we offer extended warranty options for additional peace of mind.'
    },
    {
      question: 'How long does a typical service take?',
      answer: 'Service times vary depending on the type of work needed. Oil changes typically take 30-45 minutes, while more complex repairs may take several hours. We always provide time estimates before starting work.'
    },
    {
      question: 'Do you accept insurance claims?',
      answer: 'Yes, we work with most major insurance companies and can help you navigate the claims process for accident-related repairs.'
    },
    {
      question: 'What are your business hours?',
      answer: `We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 5:00 PM. We are closed on Sundays.`
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'Yes, we offer emergency roadside assistance and can help with urgent repairs. Call our emergency line for immediate assistance.'
    }
  ];

  return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)', 
      background: '#f8fafc',
      width: '100%'
    }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        overflow: 'hidden',
        paddingTop: '40px',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #7c3aed 100%)'
      }}>
        {/* Background Overlays */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom right, rgba(0,0,0,0.4), transparent, rgba(0,0,0,0.3))'
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.2))'
        }}></div>
        
        {/* Pattern Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Elements */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '40px',
            width: '128px',
            height: '128px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '50%',
            filter: 'blur(24px)',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '80px',
            right: '40px',
            width: '160px',
            height: '160px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '50%',
            filter: 'blur(24px)',
            animation: 'float 6s ease-in-out infinite 2s'
          }}></div>
        </div>
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 clamp(1rem, 4vw, 2rem)', 
          position: 'relative',
          zIndex: 10,
          paddingTop: '5rem',
          paddingBottom: '5rem'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(12px)',
                borderRadius: '9999px',
                padding: '12px 24px',
                marginBottom: '32px',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}
            >
              <MessageSquare style={{ width: '20px', height: '20px', color: 'white' }} />
              <span style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'white',
                letterSpacing: '0.05em'
              }}>CONTACT US</span>
            </motion.div>
            
            {/* Main Heading */}
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: '800',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              marginBottom: '24px',
              color: 'white',
              textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '-0.02em'
            }}>
              Get in <span style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)'
              }}>Touch</span>
            </h1>
            
            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
              color: 'rgba(255,255,255,0.95)',
              maxWidth: '768px',
              margin: '0 auto 32px auto',
              lineHeight: '1.7',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              fontWeight: '500'
            }}>
              Ready to schedule your appointment or have questions? We're here to help you with all your automotive needs.
            </p>
            
            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'white',
                  color: '#1e3a8a',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Schedule Appointment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  border: '2px solid white',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  fontWeight: 'bold',
                  background: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Call Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section style={{ 
        padding: 'clamp(5rem, 10vw, 8rem) 0', 
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 clamp(1rem, 4vw, 2rem)', 
          position: 'relative',
          zIndex: 10
        }}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: '800',
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              marginBottom: '24px',
              color: '#111827',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              Get in <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Touch</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '512px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Multiple ways to reach us. We're here to help with all your automotive needs.
            </p>
          </motion.div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e5e7eb',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: `linear-gradient(135deg, ${info.color.split(' ')[1]} 0%, ${info.color.split(' ')[3]} 100%)`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px auto'
                }}>
                  <info.icon style={{ width: '28px', height: '28px', color: 'white' }} />
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '16px'
                }}>
                  {info.title}
                </h3>
                <div>
                  {info.details.map((detail, idx) => (
                    <p key={idx} style={{
                      color: '#6b7280',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      marginBottom: idx < info.details.length - 1 ? '8px' : '0'
                    }}>
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ 
        padding: 'clamp(5rem, 10vw, 8rem) 0', 
        background: '#f8fafc',
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 clamp(1rem, 4vw, 2rem)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: '800',
                fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
                marginBottom: '16px',
                color: '#111827'
              }}>
                Send us a Message
              </h2>
              <p style={{
                color: '#6b7280',
                fontSize: '16px',
                marginBottom: '32px',
                lineHeight: '1.6'
              }}>
                Have a question or need to schedule an appointment? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: '800',
                fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
                marginBottom: '32px',
                color: '#111827'
              }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      background: 'white',
                      borderRadius: '12px',
                      padding: '24px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
                      border: '1px solid #e5e7eb'
                    }}
                  >
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#111827',
                      marginBottom: '12px'
                    }}>
                      {faq.question}
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '16px',
                      lineHeight: '1.6'
                    }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 