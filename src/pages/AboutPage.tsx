import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Heart, 
  ArrowRight,
  Wrench,
  Car,
  Settings,
  Zap,
  Star,
  CheckCircle
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState(0);

  const stats = [
    { number: '15+', label: 'Years Experience', icon: Clock, color: 'from-blue-500 to-blue-600' },
    { number: '5000+', label: 'Happy Customers', icon: Users, color: 'from-green-500 to-green-600' },
    { number: '50+', label: 'Expert Technicians', icon: Award, color: 'from-purple-500 to-purple-600' },
    { number: '24/7', label: 'Emergency Service', icon: Shield, color: 'from-red-500 to-red-600' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction above all else, ensuring every interaction exceeds expectations.',
      color: 'from-red-500 to-red-600',
      features: ['Personalized Service', 'Transparent Communication', 'Customer Feedback']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every repair and service is backed by our comprehensive quality guarantee and warranty.',
      color: 'from-blue-500 to-blue-600',
      features: ['Warranty Coverage', 'Quality Standards', 'Expert Technicians']
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Our ASE certified technicians bring years of experience and continuous training to every job.',
      color: 'from-green-500 to-green-600',
      features: ['ASE Certified', 'Continuous Training', 'Years of Experience']
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We value your time and provide honest, accurate estimates and on-time service delivery.',
      color: 'from-purple-500 to-purple-600',
      features: ['On-Time Service', 'Accurate Estimates', 'Honest Pricing']
    },
  ];

  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Master Technician',
      bio: '15+ years experience',
      image: '/assets/img/update_1/team/team_1_1.jpg',
      specialties: ['Engine Diagnostics', 'Performance Tuning'],
      rating: 4.9
    },
    {
      name: 'Sarah Johnson',
      role: 'Service Manager',
      bio: '12+ years experience',
      image: '/assets/img/update_1/team/team_1_2.jpg',
      specialties: ['Customer Relations', 'Service Coordination'],
      rating: 4.8
    },
    {
      name: 'Mike Davis',
      role: 'Diagnostic Specialist',
      bio: '10+ years experience',
      image: '/assets/img/update_1/team/team_1_3.jpg',
      specialties: ['Computer Diagnostics', 'Electrical Systems'],
      rating: 4.9
    },
    {
      name: 'Emily Wilson',
      role: 'Parts Specialist',
      bio: '8+ years experience',
      image: '/assets/img/update_1/team/team_1_4.jpg',
      specialties: ['Parts Management', 'Inventory Control'],
      rating: 4.7
    },
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Started as a small family-owned auto repair shop with a vision for excellence.',
      icon: '🏢'
    },
    {
      year: '2012',
      title: 'First Expansion',
      description: 'Expanded to a larger facility and added state-of-the-art diagnostic equipment.',
      icon: '📈'
    },
    {
      year: '2015',
      title: 'ASE Certification',
      description: 'All technicians achieved ASE certification, ensuring the highest quality standards.',
      icon: '🏆'
    },
    {
      year: '2018',
      title: 'Digital Transformation',
      description: 'Implemented modern booking systems and customer management platforms.',
      icon: '💻'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards for customer service and technical excellence.',
      icon: '⭐'
    },
  ];

  const services = [
    { icon: Wrench, title: 'Engine Repair', description: 'Complete engine diagnostics and repair', color: 'from-red-500 to-red-600' },
    { icon: Car, title: 'General Maintenance', description: 'Routine maintenance and inspections', color: 'from-blue-500 to-blue-600' },
    { icon: Settings, title: 'Transmission Service', description: 'Transmission repair and maintenance', color: 'from-green-500 to-green-600' },
    { icon: Zap, title: 'Electrical Systems', description: 'Electrical diagnostics and repair', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-light">
      {/* Enhanced Hero Section with Banner Image */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Banner Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url(/assets/img/update_1/hero/hero_bg_3_2.jpg)`
          }}
        >
          {/* Enhanced Overlay with Multiple Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/55 via-primary-700/35 to-primary-800/45"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/25 via-transparent to-primary-600/25"></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-26 h-26 bg-white/8 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-30 h-30 bg-yellow-400/16 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-blue-400/12 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-400/14 rounded-full blur-md animate-pulse delay-1500"></div>
          <div className="absolute top-1/3 right-1/3 w-18 h-18 bg-green-400/10 rounded-full blur-sm animate-pulse delay-800"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-white/25"
              >
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium text-white">About Us</span>
              </motion.div>
              <h1 className="font-display font-bold responsive-heading mb-6 text-white">
                Trusted Auto <span className="text-gradient-hero">Repair Experts</span>
              </h1>
              <p className="text-xl text-white/95 mb-8 leading-relaxed">
                With over 15 years of experience, we've built a reputation for honesty, quality, and exceptional customer service. 
                Our certified technicians are committed to keeping your vehicle running safely and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointment" className="btn-secondary">
                  Schedule Service
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/contact" className="btn-ghost text-white border-white/25 hover:bg-white/12">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* About Image */}
              <div className="relative">
                <div className="w-full h-96 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/assets/img/update_1/normal/about_1.jpg"
                    alt="Professional Team at Work"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Failed to load about image');
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <div class="text-center">
                            <Wrench class="w-16 h-16 text-gray-500 mx-auto mb-4" />
                            <p class="text-gray-600 font-semibold">Professional Team</p>
                            <p class="text-gray-500 text-sm">Expert Mechanics at Work</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="section-padding-sm bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold mb-2 text-primary-600">{stat.number}</div>
                <div className="text-secondary-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
              These core values guide everything we do and ensure we provide the best possible service to our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-secondary-600 mb-4">{value.description}</p>
                <div className="space-y-2">
                  {value.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-secondary-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
              Our experienced team of certified technicians is dedicated to providing exceptional service and maintaining the highest standards of quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                onClick={() => setSelectedTeam(index)}
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        console.error(`Failed to load team member image: ${member.image}`);
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <div class="text-center">
                              <Users class="w-12 h-12 text-gray-500 mx-auto mb-2" />
                              <p class="text-gray-600 font-semibold text-sm">${member.name}</p>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  {selectedTeam === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 bg-primary-600/20 rounded-full border-4 border-primary-600"
                    />
                  )}
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-1">{member.role}</p>
                <p className="text-secondary-600 text-sm mb-3">{member.bio}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-3">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-secondary-700">{member.rating}</span>
                </div>
                
                {/* Specialties */}
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <div key={idx} className="text-xs text-secondary-500 bg-secondary-50 rounded-full px-2 py-1">
                      {specialty}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
              From humble beginnings to industry recognition, here's how we've grown and evolved over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-primary-400"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div className="text-2xl font-bold text-primary-600">{item.year}</div>
                      </div>
                      <h3 className="font-display font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-secondary-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-secondary-600 max-w-3xl mx-auto text-lg">
              We offer comprehensive automotive services to keep your vehicle running smoothly and safely.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-secondary-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/assets/img/update_1/hero/hero_bg_3_3.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-primary-900/75"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-yellow-500/10 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-white">
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
              Schedule your appointment today and let our expert team take care of your vehicle with the professionalism and quality you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment" className="btn-secondary">
                Schedule Service
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/contact" className="btn-ghost text-white border-white/20 hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 