import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
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
    <div className="min-h-screen bg-light">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
              Get in <span className="text-gradient-hero">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to schedule your appointment or have questions? We're here to help you with all your automotive needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-100 relative overflow-hidden">
                  {/* Enhanced Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Enhanced Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 hover-glow`}>
                      <info.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-150`}></div>
                  </div>

                  {/* Enhanced Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gradient transition-all duration-300">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Enhanced Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-transparent group-hover:border-blue-500 transition-all duration-500 rounded-tl-3xl"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-transparent group-hover:border-blue-500 transition-all duration-500 rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-transparent group-hover:border-blue-500 transition-all duration-500 rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-transparent group-hover:border-blue-500 transition-all duration-500 rounded-br-3xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 mb-6">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm font-bold">SEND US A MESSAGE</span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Ready to <span className="text-gradient">Get Started</span>?
              </h2>
              <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible. We're here to help with all your automotive needs.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Send,
                    title: "Quick Response",
                    description: "We respond to all inquiries within 24 hours"
                  },
                  {
                    icon: Clock,
                    title: "Flexible Scheduling",
                    description: "Book appointments that work with your schedule"
                  },
                  {
                    icon: MessageSquare,
                    title: "Multiple Contact Options",
                    description: "Call, email, or use our online form"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-gradient transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services and policies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-lg transition-all duration-500 border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gradient transition-all duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 