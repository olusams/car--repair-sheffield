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
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group hover-lift">
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Enhanced Header */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Send className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gradient transition-all duration-300">
              Send us a Message
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Form */}
      <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
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
              className="form-input w-full focus-ring group-hover:border-blue-400 transition-all duration-300"
              placeholder="Enter your full name"
            />
            {errors.name && <span id="name-error" className="text-red-500 text-xs">{errors.name}</span>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
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
              className="form-input w-full focus-ring group-hover:border-blue-400 transition-all duration-300"
              placeholder="Enter your email"
            />
            {errors.email && <span id="email-error" className="text-red-500 text-xs">{errors.email}</span>}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="group"
        >
          <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className="form-input w-full focus-ring group-hover:border-blue-400 transition-all duration-300"
            placeholder="Enter your phone number"
          />
          {errors.phone && <span id="phone-error" className="text-red-500 text-xs">{errors.phone}</span>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="group"
        >
          <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">
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
            className="form-input w-full focus-ring group-hover:border-blue-400 transition-all duration-300 resize-none"
            placeholder="Tell us about your automotive needs..."
          />
          {errors.message && <span id="message-error" className="text-red-500 text-xs">{errors.message}</span>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            type="submit"
            className="w-full btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Send Message</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </form>

      {/* Enhanced Contact Info */}
      <div className="relative z-10 mt-8 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: Phone,
              title: "Phone",
              value: "+1 (555) 123-4567",
              color: "from-green-500 to-green-600"
            },
            {
              icon: Mail,
              title: "Email",
              value: "info@autofixpro.com",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: Clock,
              title: "Hours",
              value: "Mon-Fri: 8AM-6PM",
              color: "from-purple-500 to-purple-600"
            }
          ].map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 group"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <contact.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-gradient transition-all duration-300">
                  {contact.title}
                </div>
                <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {contact.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-transparent group-hover:border-blue-500 transition-all duration-500 rounded-tl-3xl"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-transparent group-hover:border-purple-500 transition-all duration-500 rounded-tr-3xl"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-transparent group-hover:border-purple-500 transition-all duration-500 rounded-bl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-transparent group-hover:border-blue-500 transition-all duration-500 rounded-br-3xl"></div>

      {/* Enhanced Border Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 blur-xl scale-110 group-hover:scale-100"></div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {success && <div className="text-green-600 font-semibold my-4" role="status">{success}</div>}
    </div>
  );
};

export default ContactForm; 