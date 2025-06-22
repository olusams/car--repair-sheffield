import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import VideoButton from '../components/common/VideoButton';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction above all else, ensuring every interaction exceeds expectations.',
      color: 'from-red-500 to-red-600',
      features: ['Personalized Service', 'Transparent Communication', 'Customer Feedback']
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Our ASE certified technicians bring years of experience and continuous training to every job.',
      color: 'from-green-500 to-green-600',
      features: ['ASE Certified', 'Continuous Training', 'Years of Experience']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every repair and service is backed by our comprehensive quality guarantee and warranty.',
      color: 'from-blue-500 to-blue-600',
      features: ['Warranty Coverage', 'Quality Standards', 'Expert Technicians']
    },
    {
      icon: ArrowRight,
      title: 'Reliability',
      description: 'We value your time and provide honest, accurate estimates and on-time service delivery.',
      color: 'from-purple-500 to-purple-600',
      features: ['On-Time Service', 'Accurate Estimates', 'Honest Pricing']
    },
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
        paddingTop: '40px'
      }}>
        {/* Background Banner Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.05)'
        }}>
          {/* Enhanced Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.7), rgba(88, 28, 135, 0.6), rgba(67, 56, 202, 0.7))'
          }}></div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.4), transparent, rgba(0,0,0,0.4))'
          }}></div>
          
          {/* Pattern Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.15,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '40px',
            width: '104px',
            height: '104px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            filter: 'blur(16px)',
            animation: 'pulse 2s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '80px',
            right: '40px',
            width: '120px',
            height: '120px',
            background: 'rgba(250, 204, 21, 0.2)',
            borderRadius: '50%',
            filter: 'blur(20px)',
            animation: 'pulse 2s ease-in-out infinite 1s'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '25%',
            width: '80px',
            height: '80px',
            background: 'rgba(59, 130, 246, 0.2)',
            borderRadius: '50%',
            filter: 'blur(12px)',
            animation: 'pulse 2s ease-in-out infinite 0.5s'
          }}></div>
        </div>
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 clamp(1rem, 4vw, 2rem)',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(12px)',
                borderRadius: '9999px',
                padding: '12px 24px',
                marginBottom: '24px',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}
            >
              <Award style={{ width: '20px', height: '20px', color: 'white' }} />
              <span style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'white',
                letterSpacing: '0.05em'
              }}>ABOUT US</span>
            </div>
            
            {/* Main Heading */}
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: '800',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '24px',
              color: 'white',
              textShadow: '0 4px 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)',
              letterSpacing: '-0.02em'
            }}>
              Trusted Auto <span style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)'
              }}>Repair Experts</span>
            </h1>
            
            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '32px',
              lineHeight: '1.7',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              With over 15 years of experience, we've built a reputation for excellence in automotive repair and maintenance. Our certified technicians use the latest technology to ensure your vehicle receives the best care possible.
            </p>
            
            {/* CTA Button */}
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
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <span>Learn More</span>
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ 
        padding: 'clamp(5rem, 10vw, 8rem) 0', 
        background: 'white',
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 clamp(1rem, 4vw, 2rem)'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}
          >
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: '800',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '24px',
              color: '#111827'
            }}>
              Our <span style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Core Values</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              These principles guide everything we do, ensuring we deliver exceptional service and build lasting relationships with our customers.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
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
                  background: `linear-gradient(135deg, ${value.color.split(' ')[1]} 0%, ${value.color.split(' ')[3]} 100%)`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px auto'
                }}>
                  <value.icon style={{ width: '28px', height: '28px', color: 'white' }} />
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '16px'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  marginBottom: '24px'
                }}>
                  {value.description}
                </p>
                <ul style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  margin: '0',
                  padding: '0',
                  listStyle: 'none'
                }}>
                  {value.features.map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '14px',
                      color: '#6b7280'
                    }}>
                      <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981', marginRight: '8px' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section style={{ 
        padding: 'clamp(5rem, 10vw, 8rem) 0', 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3
        }} />
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 clamp(1rem, 4vw, 2rem)', 
          position: 'relative',
          zIndex: 10
        }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}
          >
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: '800',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '24px',
              color: 'white'
            }}>
              Watch Our <span style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Expert Team</span> at Work
            </h2>
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              color: '#cbd5e1',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              See firsthand how our certified technicians bring expertise, precision, and dedication to every repair and maintenance task.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'center'
          }}>
            {/* Video Preview */}
            <VideoButton
              variant="preview"
              videoId="work-in-action"
              className="w-full"
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '700',
                color: 'white',
                marginBottom: '1.5rem'
              }}>
                Professional Excellence in Action
              </h3>
              <p style={{
                fontSize: '1.125rem',
                color: '#cbd5e1',
                marginBottom: '2rem',
                lineHeight: '1.8'
              }}>
                Our video showcases the meticulous attention to detail and professional standards that set us apart. 
                From initial diagnostics to final quality checks, every step reflects our commitment to excellence.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {[
                  'Advanced diagnostic procedures',
                  'Precision repair techniques',
                  'Quality control processes',
                  'Customer communication standards'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#fbbf24',
                      flexShrink: 0
                    }} />
                    <span style={{ color: '#e2e8f0', fontSize: '1rem' }}>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <VideoButton
                variant="primary"
                videoId="work-in-action"
                buttonText="Watch Our Team"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 