import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category?: string;
  image: string;
  description: string;
  price?: string;
  rating?: number;
}

interface GallerySectionProps {
  items: GalleryItem[];
  title: React.ReactNode;
  subtitle: string;
  ctaLink?: string;
  ctaText?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ 
  items,
  title,
  subtitle,
  ctaLink,
  ctaText,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(items.map(item => item.category).filter(Boolean)))];

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section style={{
      padding: 'clamp(5rem, 10vw, 8rem) 0',
      background: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(1rem, 4vw, 2rem)'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            color: 'white',
            borderRadius: '9999px',
            padding: '8px 24px',
            marginBottom: '24px'
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: 'bold'
            }}>PRODUCTS</span>
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: '800',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '24px',
            color: '#111827'
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#6b7280',
            maxWidth: '768px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Filter Buttons (only if categories exist) */}
        {categories.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '48px'
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                style={{
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  border: selectedCategory === category ? 'none' : '1px solid #e5e7eb',
                  background: selectedCategory === category
                    ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                    : 'white',
                  color: selectedCategory === category ? 'white' : '#6b7280',
                  boxShadow: selectedCategory === category ? '0 10px 25px rgba(59, 130, 246, 0.3)' : 'none',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedCategory(category!)}
              >
                {category!.charAt(0).toUpperCase() + category!.slice(1)}
              </button>
            ))}
          </motion.div>
        )}

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                style={{
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.5s ease',
                  overflow: 'hidden'
                }}>
                  {/* Image */}
                  <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '16/9'
                  }}>
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      fallbackSrc="/assets/img/service/service_1_1.jpg"
                      loading="lazy"
                    />
                    
                    {/* Category Badge */}
                    {item.category && (
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(8px)',
                        borderRadius: '9999px',
                        padding: '4px 12px'
                      }}>
                        <span style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: '#374151',
                          textTransform: 'capitalize'
                        }}>
                          {item.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px' }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: '700',
                      fontSize: '18px',
                      marginBottom: '8px',
                      color: '#111827',
                      transition: 'color 0.2s ease'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '14px',
                      marginBottom: '16px',
                      lineHeight: '1.6'
                    }}>
                      {item.description}
                    </p>
                    
                    {/* Price and Details Link */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      {item.price ? (
                        <span style={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: '#2563eb'
                        }}>
                          {item.price}
                        </span>
                      ) : <div />}
                      <Link 
                        to={`/services/${item.id}`} 
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                          color: 'white',
                          padding: '8px 16px',
                          borderRadius: '9999px',
                          fontSize: '14px',
                          fontWeight: '500',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          display: 'inline-block'
                        }}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {ctaLink && ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '64px' }}
          >
            <Link
              to={ctaLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
              }}
            >
              <span>{ctaText}</span>
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection; 