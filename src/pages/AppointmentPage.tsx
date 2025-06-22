import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, Mail, MapPin, CheckCircle, Loader, Shield } from 'lucide-react';
import SEOHead from '../components/common/SEOHead';
// import "react-datepicker/dist/react-datepicker.css";

const AppointmentPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    date: '',
    time: ''
  });

  const serviceOptions = [
    'Oil Change',
    'Brake Service',
    'Engine Repair',
    'Transmission Service',
    'Electrical Systems',
    'AC/Heating',
    'Tire Service',
    'Computer Diagnostics',
    'Other'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM'
  ];

  const validate = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      vehicle: '',
      service: '',
      date: '',
      time: ''
    };

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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
      valid = false;
    } else if (!/^\+?[0-9\-\s]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number.';
      valid = false;
    }

    if (!formData.vehicle.trim()) {
      newErrors.vehicle = 'Vehicle information is required.';
      valid = false;
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
      valid = false;
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date.';
      valid = false;
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    if (validate()) {
      // Simulate API call
      setTimeout(() => {
        setSubmissionStatus('success');
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          vehicle: '',
          service: '',
          date: '',
          time: '',
          message: ''
        });
        setErrors({
          name: '',
          email: '',
          phone: '',
          vehicle: '',
          service: '',
          date: '',
          time: ''
        });
      }, 1500);
    } else {
      setSubmissionStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <SEOHead
        title="Schedule Appointment - AutoFix Pro"
        description="Schedule your automotive service appointment with our expert technicians. Quick, reliable, and professional auto repair services."
        keywords="appointment, auto service, car repair, schedule service"
      />

      <div style={{ 
        minHeight: 'calc(100vh - 80px)', 
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        width: '100%'
      }}>
        {/* Hero Section */}
        <section 
          style={{ 
            position: 'relative',
            padding: '60px 0 100px 0',
            backgroundImage: "url('https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Multiple overlay layers for depth */}
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)' 
          }}></div>
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' 
          }}></div>
          
          {/* Floating elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '60px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '20%',
            width: '80px',
            height: '80px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            animation: 'float 10s ease-in-out infinite'
          }}></div>

          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 clamp(1rem, 4vw, 2rem)', 
            position: 'relative',
            zIndex: 10,
            textAlign: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50px',
                  padding: '12px 24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#22c55e',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite'
                  }}></div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Book Your Service Today</span>
                </div>
              </motion.div>

              <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">
                Get a Free <span className="text-gradient-hero">Estimate</span>
              </h1>
              <p className="text-xl md:text-2xl text-white text-opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
                Fill out the form below to get a quote for our services. We'll get back to you as soon as possible.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 text-sm"
              >
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '25px',
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <CheckCircle style={{ width: '16px', height: '16px', color: '#22c55e' }} />
                  <span>Quick Response</span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '25px',
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Shield style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
                  <span>Warranty Included</span>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '25px',
                  padding: '8px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Clock style={{ width: '16px', height: '16px', color: '#f59e0b' }} />
                  <span>Same Day Service</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Appointment Form Section */}
        <section style={{ 
          padding: 'clamp(5rem, 10vw, 8rem) 0', 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #ffffff 100%)',
          position: 'relative'
        }}>
          {/* Background pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.5
          }}></div>

          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 clamp(1rem, 4vw, 2rem)', 
            position: 'relative'
          }}>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '3rem'
            }}>
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="mb-8">
                  <h2 className="font-display font-bold text-3xl mb-4 text-gradient-professional">Book Your Service</h2>
                  <p className="text-gray-600">Fill out the form below to schedule your appointment</p>
                </div>

                {submissionStatus === 'success' && (
                  <div className="message-professional message-success" role="alert">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 icon-bounce" />
                      <div>
                        <p className="font-bold">Success!</p>
                        <p>Your appointment has been scheduled. We will confirm via email or phone.</p>
                      </div>
                    </div>
                  </div>
                )}
                {submissionStatus === 'error' && !isSubmitting &&(
                  <div className="message-professional message-error" role="alert">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div>
                        <p className="font-bold">Error</p>
                        <p>Please correct the errors in the form and try again.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        className={`w-full px-4 py-3 rounded-xl transition-all duration-300 form-input-enhanced ${
                          errors.name ? 'form-input-error' : ''
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <motion.span 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm flex items-center gap-1 mt-1"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.name}
                        </motion.span>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        className={`w-full px-4 py-3 rounded-xl transition-all duration-300 form-input-enhanced ${
                          errors.email ? 'form-input-error' : ''
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <motion.span 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm flex items-center gap-1 mt-1"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.email}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        className={`w-full px-4 py-3 rounded-xl transition-all duration-300 form-input-enhanced ${
                          errors.phone ? 'form-input-error' : ''
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <motion.span 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm flex items-center gap-1 mt-1"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.phone}
                        </motion.span>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Information *
                      </label>
                      <input
                        type="text"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.vehicle}
                        className={`w-full px-4 py-3 rounded-xl transition-all duration-300 form-input-enhanced ${
                          errors.vehicle ? 'form-input-error' : ''
                        }`}
                        placeholder="Year, Make, Model"
                      />
                      {errors.vehicle && (
                        <motion.span 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm flex items-center gap-1 mt-1"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.vehicle}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.service}
                      className={`w-full px-4 py-3 rounded-xl transition-all duration-300 form-input-enhanced ${
                        errors.service ? 'form-input-error' : ''
                      }`}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm flex items-center gap-1 mt-1"
                      >
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {errors.service}
                      </motion.span>
                    )}
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.date}
                        className={`w-full px-4 py-3 rounded-xl transition-all duration-300 form-input-enhanced ${
                          errors.date ? 'form-input-error' : ''
                        }`}
                      />
                      {errors.date && (
                        <motion.span 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm flex items-center gap-1 mt-1"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.date}
                        </motion.span>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.time}
                        className={`w-full px-4 py-3 rounded-xl transition-all duration-300 form-input-enhanced ${
                          errors.time ? 'form-input-error' : ''
                        }`}
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.time && (
                        <motion.span 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm flex items-center gap-1 mt-1"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.time}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl transition-all duration-300 form-input-enhanced resize-none"
                      placeholder="Describe any specific issues or concerns..."
                    />
                  </motion.div>

                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-professional inline-flex items-center justify-center space-x-2 text-lg px-8 py-4 rounded-2xl text-white font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="animate-spin w-5 h-5 mr-2" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Book Appointment</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            →
                          </motion.div>
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Info Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Contact Info */}
                <motion.div 
                  className="card-professional p-8"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="font-display font-bold text-2xl mb-6 text-gradient-professional"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Contact Information
                  </motion.h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Phone,
                        title: "Phone",
                        value: "0114 385 4721",
                        color: "from-blue-500 to-purple-500",
                        delay: 0.2
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        value: "info@autofixpro.co.uk",
                        color: "from-green-500 to-blue-500",
                        delay: 0.3
                      },
                      {
                        icon: MapPin,
                        title: "Address",
                        value: "145 Ecclesall Road\nSheffield, S11 8JB",
                        color: "from-purple-500 to-pink-500",
                        delay: 0.4
                      },
                      {
                        icon: Clock,
                        title: "Hours",
                        value: "Mon-Fri: 8AM-6PM\nSat: 9AM-5PM",
                        color: "from-orange-500 to-red-500",
                        delay: 0.5
                      }
                    ].map((contact) => (
                      <motion.div
                        key={contact.title}
                        className="flex items-center space-x-4 group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: contact.delay }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <contact.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-600 font-medium">{contact.title}</p>
                          <p className="font-semibold text-gray-900 whitespace-pre-line">{contact.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div 
                  className="card-professional p-8"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="font-display font-bold text-2xl mb-6 text-gradient-professional"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Why Choose Us
                  </motion.h3>
                  <div className="space-y-4">
                    {[
                      "ASE Certified Technicians",
                      "Same Day Service Available",
                      "Warranty on All Work",
                      "Competitive Pricing",
                      "Free Estimates",
                      "Emergency Service Available"
                    ].map((feature) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3 group"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-sm"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Additional professional touch */}
                  <motion.div
                    className="mt-8 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">100% Satisfaction Guarantee</p>
                        <p className="text-sm text-gray-600">We stand behind our work with a comprehensive warranty</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Emergency Contact */}
                <motion.div 
                  className="card-professional p-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center animate-pulse">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Emergency Service</h4>
                      <p className="text-sm text-gray-600 mb-1">Available 24/7 for urgent repairs</p>
                      <p className="font-semibold text-red-600">0114 385 4999</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AppointmentPage; 