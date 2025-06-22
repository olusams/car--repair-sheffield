import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users, Phone, Calendar, CheckCircle } from 'lucide-react';
import HeroSlider from '../components/common/HeroSlider';
import ServiceCard from '../components/common/ServiceCard';
import TestimonialCard from '../components/common/TestimonialCard';
import LoadingState from '../components/common/LoadingState';
import VideoButton from '../components/common/VideoButton';
import { services } from '../data/services';
import { heroSlides } from '../data/heroSlides';
import { siteConfig } from '../data/siteConfig';
import { testimonials } from '../data/testimonials';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate data loading to ensure proper loading states
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Validate that all required data is available
        if (!services || !heroSlides || !siteConfig || !testimonials) {
          throw new Error('Required data is missing');
        }
        
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load page data');
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleRetry = () => {
    setIsLoading(true);
    setError(null);
    // Reload the page data
    window.location.reload();
  };

  return (
    <LoadingState
      isLoading={isLoading}
      error={error}
      onRetry={handleRetry}
      type="skeleton"
      skeletonType="hero"
      skeletonCount={1}
    >
      <div style={{ 
        minHeight: 'calc(100vh - 80px)', 
        background: '#f8fafc',
        width: '100%'
      }}>
        {/* Hero Section */}
        <section style={{ position: 'relative', overflow: 'hidden' }}>
          <HeroSlider slides={heroSlides} />
        </section>

        {/* Enhanced Stats Section */}
        <section style={{ 
          padding: isMobile ? '3rem 0' : 'clamp(4rem, 8vw, 6rem) 0', 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e0f2fe 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: isMobile ? '0 1rem' : '0 clamp(1rem, 4vw, 2rem)', 
            position: 'relative',
            zIndex: 10
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : 'clamp(3rem, 6vw, 5rem)' }}
            >
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: '800',
                fontSize: isMobile ? '1.75rem' : 'clamp(2rem, 4vw, 3rem)',
                marginBottom: '1.5rem',
                color: '#111827'
              }}>
                Trusted by <span style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Thousands</span> of Customers
              </h2>
              <p style={{
                fontSize: isMobile ? '1rem' : 'clamp(1.125rem, 2.5vw, 1.375rem)',
                color: '#6b7280',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.7'
              }}>
                Our commitment to excellence has earned us the trust of countless vehicle owners
              </p>
            </motion.div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: isMobile 
                ? 'repeat(2, 1fr)' 
                : 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: isMobile ? '1.5rem' : 'clamp(2rem, 4vw, 3rem)',
              maxWidth: '100%'
            }}>
              {siteConfig.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      width: isMobile ? '60px' : 'clamp(80px, 12vw, 100px)',
                      height: isMobile ? '60px' : 'clamp(80px, 12vw, 100px)',
                      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                      borderRadius: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto clamp(1.5rem, 3vw, 2rem)',
                      transition: 'all 0.5s ease',
                      boxShadow: '0 8px 32px rgba(14, 165, 233, 0.15)'
                    }}>
                      <stat.icon className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  <div style={{
                    fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: '800',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '1'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    color: '#374151',
                    fontWeight: '600',
                    fontSize: isMobile ? '0.875rem' : 'clamp(1.125rem, 2.5vw, 1.25rem)',
                    transition: 'color 0.3s ease',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.label}
                  </div>
                  {stat.description && (
                    <div style={{
                      color: '#6b7280',
                      fontSize: isMobile ? '0.75rem' : 'clamp(0.875rem, 2vw, 1rem)',
                      lineHeight: '1.6'
                    }}>
                      {stat.description}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Featured Services Section */}
        <section style={{ 
          padding: isMobile ? '3rem 0' : 'clamp(5rem, 10vw, 8rem) 0', 
          background: 'white',
          position: 'relative'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: isMobile ? '0 1rem' : '0 clamp(1rem, 4vw, 2rem)'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : 'clamp(4rem, 8vw, 6rem)' }}
            >
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: '800',
                fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
                marginBottom: '1.5rem',
                color: '#111827'
              }}>
                Our <span style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Signature</span> Services
              </h2>
              <p style={{
                fontSize: isMobile ? '1rem' : 'clamp(1.125rem, 2.5vw, 1.375rem)',
                color: '#6b7280',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.8'
              }}>
                We offer a comprehensive range of automotive services to keep your vehicle running smoothly and safely. 
                Our expert technicians use state-of-the-art equipment to ensure the highest quality work.
              </p>
            </motion.div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: isMobile ? '1.5rem' : 'clamp(2rem, 4vw, 3rem)',
              marginBottom: isMobile ? '2rem' : 'clamp(3rem, 6vw, 5rem)'
            }}>
              {services.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: isMobile ? '0.875rem 1.5rem' : 'clamp(1rem, 2vw, 1.25rem) clamp(2rem, 4vw, 3rem)',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: isMobile ? '0.875rem' : 'clamp(1rem, 2vw, 1.125rem)',
                  fontWeight: '600',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 32px rgba(14, 165, 233, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(14, 165, 233, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.3)';
                  }
                }}
              >
                <span>View All Services</span>
                <ArrowRight style={{ width: isMobile ? '1rem' : 'clamp(1.25rem, 2vw, 1.5rem)', height: isMobile ? '1rem' : 'clamp(1.25rem, 2vw, 1.5rem)' }} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section style={{ 
          padding: isMobile ? '3rem 0' : 'clamp(5rem, 10vw, 8rem) 0', 
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
            padding: isMobile ? '0 1rem' : '0 clamp(1rem, 4vw, 2rem)', 
            position: 'relative',
            zIndex: 10
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '2rem' : 'clamp(3rem, 6vw, 5rem)',
              alignItems: 'center'
            }}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: '800',
                  fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
                  marginBottom: '1.5rem',
                  color: 'white'
                }}>
                  See Our <span style={{
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Expert Work</span> in Action
                </h2>
                <p style={{
                  fontSize: isMobile ? '1rem' : 'clamp(1.125rem, 2.5vw, 1.375rem)',
                  color: '#cbd5e1',
                  marginBottom: '2rem',
                  lineHeight: '1.8'
                }}>
                  Watch our certified technicians demonstrate their expertise and precision in automotive repair. 
                  From diagnostics to final quality checks, see how we ensure your vehicle receives the best care possible.
                </p>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  {[
                    'Professional diagnostic procedures',
                    'Precision repair techniques',
                    'Quality assurance processes',
                    'Customer satisfaction focus'
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
                  variant="hero"
                  videoId="work-in-action"
                  buttonText="Watch Our Work"
                />
              </motion.div>

              {/* Video Preview */}
              <VideoButton
                variant="preview"
                videoId="work-in-action"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us Section */}
        <section style={{ 
          padding: isMobile ? '3rem 0' : 'clamp(5rem, 10vw, 8rem) 0', 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f0f9ff 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: isMobile ? '0 1rem' : '0 clamp(1rem, 4vw, 2rem)', 
            position: 'relative',
            zIndex: 10
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : 'clamp(4rem, 8vw, 6rem)' }}
            >
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: '800',
                fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
                marginBottom: '1.5rem',
                color: '#111827'
              }}>
                Why <span style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Choose Us</span>
              </h2>
              <p style={{
                fontSize: isMobile ? '1rem' : 'clamp(1.125rem, 2.5vw, 1.375rem)',
                color: '#6b7280',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.8'
              }}>
                We combine expertise, technology, and dedication to deliver exceptional auto services that exceed your expectations
              </p>
            </motion.div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: isMobile ? '1.5rem' : 'clamp(2rem, 4vw, 3rem)',
              maxWidth: '100%'
            }}>
              {[
                {
                  icon: Shield,
                  title: "Expert Technicians",
                  description: "Our certified professionals bring years of experience and ongoing training to every repair and maintenance task.",
                  features: ["ASE Certified", "Ongoing Training", "Specialized Knowledge"],
                  color: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                },
                {
                  icon: Clock,
                  title: "Quick & Reliable Service",
                  description: "We understand your time is valuable. Fast turnaround times without compromising on quality and attention to detail.",
                  features: ["Same Day Service", "Quality Guaranteed", "Transparent Pricing"],
                  color: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                },
                {
                  icon: Users,
                  title: "Customer-Focused Approach",
                  description: "We build lasting relationships through personalized service, honest communication, and exceptional care for your vehicle.",
                  features: ["Personalized Service", "Honest Communication", "Lifetime Support"],
                  color: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                >
                  <div style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: isMobile ? '1.5rem' : 'clamp(2rem, 4vw, 3rem)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid #f1f5f9',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
                    }
                  }}
                  >
                    <div style={{
                      position: 'relative',
                      marginBottom: isMobile ? '1rem' : '2rem'
                    }}>
                      <div style={{
                        width: isMobile ? '50px' : 'clamp(70px, 10vw, 80px)',
                        height: isMobile ? '50px' : 'clamp(70px, 10vw, 80px)',
                        background: feature.color,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: isMobile ? '1rem' : '1.5rem',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                      }}>
                        <feature.icon style={{ width: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px', color: 'white' }} />
                      </div>
                    </div>

                    <h3 style={{
                      fontSize: isMobile ? '1.25rem' : 'clamp(1.5rem, 3vw, 1.75rem)',
                      fontWeight: '700',
                      marginBottom: isMobile ? '0.75rem' : '1rem',
                      color: '#111827',
                      lineHeight: '1.3'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? '0.875rem' : 'clamp(1rem, 2vw, 1.125rem)',
                      color: '#6b7280',
                      marginBottom: isMobile ? '1rem' : '1.5rem',
                      lineHeight: '1.6'
                    }}>
                      {feature.description}
                    </p>
                    
                    {/* Feature List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.5rem' : '0.75rem' }}>
                      {feature.features.map((item, idx) => (
                        <div key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem'
                        }}>
                          <CheckCircle style={{ 
                            width: isMobile ? '16px' : '20px', 
                            height: isMobile ? '16px' : '20px', 
                            color: '#10b981',
                            flexShrink: 0
                          }} />
                          <span style={{
                            fontSize: isMobile ? '0.875rem' : '1rem',
                            color: '#374151',
                            fontWeight: '500'
                          }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section style={{ 
          padding: isMobile ? '3rem 0' : 'clamp(5rem, 10vw, 8rem) 0', 
          background: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: isMobile ? '0 1rem' : '0 clamp(1rem, 4vw, 2rem)', 
            position: 'relative',
            zIndex: 10
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : 'clamp(4rem, 8vw, 6rem)' }}
            >
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: '800',
                fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
                marginBottom: '1.5rem',
                color: '#111827'
              }}>
                What Our <span style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Customers Say</span>
              </h2>
              <p style={{
                fontSize: isMobile ? '1rem' : 'clamp(1.125rem, 2.5vw, 1.375rem)',
                color: '#6b7280',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.8'
              }}>
                Don't just take our word for it. Here's what our satisfied customers have to say about their experience
              </p>
            </motion.div>

            <div style={{ 
              display: 'grid',
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: isMobile ? '1.5rem' : 'clamp(2rem, 4vw, 3rem)',
              maxWidth: '100%'
            }}>
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section style={{ 
          padding: isMobile ? '3rem 0' : 'clamp(5rem, 10vw, 8rem) 0', 
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: isMobile ? '0 1rem' : '0 clamp(1rem, 4vw, 2rem)', 
            position: 'relative',
            zIndex: 10
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: '800',
                fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                Ready to Experience <span style={{ color: '#fbbf24' }}>Premium</span> Auto Service?
              </h2>
              <p style={{
                fontSize: isMobile ? '1rem' : 'clamp(1.125rem, 2.5vw, 1.375rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '700px',
                margin: '0 auto 2rem',
                lineHeight: '1.8'
              }}>
                Book your appointment today and join thousands of satisfied customers who trust us with their vehicles
              </p>
              <div style={{ 
                display: 'flex', 
                gap: isMobile ? '1rem' : '1.5rem',
                justifyContent: 'center',
                flexWrap: isMobile ? 'wrap' : 'nowrap'
              }}>
                <Link
                  to="/appointment"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: isMobile ? '0.875rem 1.5rem' : 'clamp(1rem, 2vw, 1.25rem) clamp(2rem, 4vw, 3rem)',
                    borderRadius: '16px',
                    background: 'white',
                    color: '#0ea5e9',
                    textDecoration: 'none',
                    fontSize: isMobile ? '0.875rem' : 'clamp(1rem, 2vw, 1.125rem)',
                    fontWeight: '600',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                    }
                  }}
                >
                  <Calendar style={{ width: isMobile ? '1rem' : 'clamp(1.25rem, 2vw, 1.5rem)', height: isMobile ? '1rem' : 'clamp(1.25rem, 2vw, 1.5rem)' }} />
                  <span>Book Appointment</span>
                </Link>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: isMobile ? '0.875rem 1.5rem' : 'clamp(1rem, 2vw, 1.25rem) clamp(2rem, 4vw, 3rem)',
                    borderRadius: '16px',
                    background: 'transparent',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: isMobile ? '0.875rem' : 'clamp(1rem, 2vw, 1.125rem)',
                    fontWeight: '600',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }
                  }}
                >
                  <Phone style={{ width: isMobile ? '1rem' : 'clamp(1.25rem, 2vw, 1.5rem)', height: isMobile ? '1rem' : 'clamp(1.25rem, 2vw, 1.5rem)' }} />
                  <span>Contact Us</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </LoadingState>
  );
};

export default HomePage; 