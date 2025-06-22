import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({ name: '', email: '', phone: '', message: '' });
  const [success, setSuccess] = useState('');

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', message: '' };
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
      valid = false;
    }
    if (formData.phone && !/^\+?[0-9\-\s]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number.';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSuccess('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({ name: '', email: '', phone: '', message: '' });
    } else {
      setSuccess('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      padding: '32px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f1f5f9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Enhanced Background Effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))',
        opacity: 0,
        transition: 'opacity 0.5s ease'
      }}></div>
      
      {/* Enhanced Header */}
      <div style={{ position: 'relative', zIndex: 10, marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.5s ease'
          }}>
            <Send style={{ width: '24px', height: '24px', color: 'white' }} />
          </div>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#111827',
              margin: '0 0 4px 0'
            }}>
              Send us a Message
            </h3>
            <p style={{
              color: '#6b7280',
              margin: 0
            }}>
              We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Form */}
      <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '24px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              placeholder="Enter your full name"
            />
            {errors.name && <span id="name-error" style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.name}</span>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
              placeholder="Enter your email"
            />
            {errors.email && <span id="email-error" style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.email}</span>}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ marginBottom: '24px' }}
        >
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '8px'
          }}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span id="phone-error" style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.phone}</span>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ marginBottom: '24px' }}
        >
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '8px'
          }}>
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            rows={4}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              outline: 'none',
              resize: 'none',
              fontFamily: 'inherit'
            }}
            placeholder="Tell us about your automotive needs..."
          />
          {errors.message && <span id="message-error" style={{ color: '#ef4444', fontSize: '0.75rem' }}>{errors.message}</span>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '16px 24px',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px'
            }}>
              <Send style={{ width: '20px', height: '20px' }} />
              <span>Send Message</span>
            </span>
          </button>
        </motion.div>
      </form>

      {/* Enhanced Contact Info */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        marginTop: '32px',
        paddingTop: '32px',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          {[
            {
              icon: Phone,
              title: "Phone",
              value: "0114 385 4721",
              color: "linear-gradient(to bottom right, #22c55e, #16a34a)"
            },
            {
              icon: Mail,
              title: "Email",
              value: "info@autofixpro.co.uk",
              color: "linear-gradient(to bottom right, #3b82f6, #2563eb)"
            },
            {
              icon: Clock,
              title: "Hours",
              value: "Mon-Fri: 8AM-6PM, Sat: 9AM-5PM",
              color: "linear-gradient(to bottom right, #8b5cf6, #7c3aed)"
            }
          ].map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                background: contact.color,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <contact.icon style={{ width: '20px', height: '20px', color: 'white' }} />
              </div>
              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#111827'
                }}>
                  {contact.title}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>
                  {contact.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {success && (
        <div style={{
          marginTop: '24px',
          padding: '16px',
          background: '#dcfce7',
          color: '#166534',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          {success}
        </div>
      )}
    </div>
  );
};

export default ContactForm; 