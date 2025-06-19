import { 
  Settings, 
  Shield, 
  Clock, 
  Car, 
  Zap, 
  Wrench, 
  Star 
} from 'lucide-react';

export interface Service {
  id: string;
  category: string;
  icon: any;
  title: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
  color: string;
  image: string;
  videoUrl?: string;
  details?: string;
}

export const services: Service[] = [
  {
    id: 'engine-repair',
    category: 'engine',
    icon: Settings,
    title: 'Engine Repair',
    description: 'Complete engine diagnostics and repair services',
    duration: '2-4 hours',
    price: 'From £120',
    features: ['Engine diagnostics', 'Performance tuning', 'Engine rebuilds', 'Oil leak repair'],
    popular: true,
    color: 'from-red-500 to-red-600',
    image: '/car--repair-sheffield/assets/img/update_1/service/service_4_1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Our certified technicians use state-of-the-art diagnostic equipment to identify and repair engine issues. We handle everything from minor tune-ups to major engine rebuilds.'
  },
  {
    id: 'brake-service',
    category: 'brake',
    icon: Shield,
    title: 'Brake Service',
    description: 'Comprehensive brake system maintenance and repair',
    duration: '1-3 hours',
    price: 'From £95',
    features: ['Brake pad replacement', 'Rotor resurfacing', 'Brake fluid flush', 'ABS system repair'],
    popular: false,
    color: 'from-blue-500 to-blue-600',
    image: '/car--repair-sheffield/assets/img/update_1/service/service_4_2.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Your safety is our priority. We provide complete brake system services including inspection, repair, and maintenance to ensure your vehicle stops safely.'
  },
  {
    id: 'oil-change',
    category: 'maintenance',
    icon: Clock,
    title: 'Oil Change',
    description: 'Quick and reliable oil change service',
    duration: '30-45 min',
    price: 'From £35',
    features: ['Full-synthetic oil', 'Oil filter replacement', 'Multi-point inspection', 'Tire rotation'],
    popular: true,
    color: 'from-green-500 to-green-600',
    image: '/car--repair-sheffield/assets/img/update_1/service/service_4_3.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Regular oil changes are essential for engine longevity. We use high-quality synthetic oils and perform a comprehensive inspection with every oil change.'
  },
  {
    id: 'transmission',
    category: 'engine',
    icon: Wrench,
    title: 'Transmission Service',
    description: 'Professional transmission repair and maintenance',
    duration: '3-6 hours',
    price: 'From £160',
    features: ['Transmission fluid change', 'Clutch replacement', 'Gearbox repair', 'CVT service'],
    popular: false,
    color: 'from-purple-500 to-purple-600',
    image: '/car--repair-sheffield/assets/img/update_1/service/service_4_4.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Our transmission specialists handle all types of transmissions including manual, automatic, and CVT systems with precision and expertise.'
  },
  {
    id: 'electrical',
    category: 'electrical',
    icon: Zap,
    title: 'Electrical Systems',
    description: 'Advanced electrical diagnostics and comprehensive repair services',
    duration: '1-4 hours',
    price: 'From £80',
    features: ['Battery replacement', 'Alternator repair', 'Starter service', 'Wiring repair', 'ECU diagnostics', 'Lighting systems'],
    popular: true,
    color: 'from-yellow-500 to-yellow-600',
    image: '/car--repair-sheffield/assets/img/update_1/service/service_4_1.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Modern vehicles rely heavily on sophisticated electrical systems. Our certified technicians are trained to diagnose and repair complex electrical issues efficiently, ensuring your vehicle operates at peak performance.'
  },
  {
    id: 'ac-heating',
    category: 'maintenance',
    icon: Car,
    title: 'AC/Heating',
    description: 'Climate control system repair and maintenance',
    duration: '2-4 hours',
    price: 'From £95',
    features: ['AC recharge', 'Heater repair', 'Climate control', 'Thermostat replacement'],
    popular: false,
    color: 'from-cyan-500 to-cyan-600',
    image: '/car--repair-sheffield/assets/img/update_1/service/service_4_2.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Stay comfortable year-round with our climate control services. We service all types of heating and air conditioning systems.'
  },
  {
    id: 'tire-service',
    category: 'maintenance',
    icon: Car,
    title: 'Tire Service',
    description: 'Comprehensive tire and wheel services',
    duration: '1-2 hours',
    price: 'From £65',
    features: ['Tire replacement', 'Wheel alignment', 'Tire rotation', 'Flat repair'],
    popular: false,
    color: 'from-orange-500 to-orange-600',
    image: '/car--repair-sheffield/assets/img/update_1/service/service_4_3.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Proper tire maintenance is crucial for safety and performance. We offer comprehensive tire services including alignment and balancing.'
  },
  {
    id: 'diagnostics',
    category: 'electrical',
    icon: Star,
    title: 'Computer Diagnostics',
    description: 'Advanced computer diagnostics and system analysis',
    duration: '30-60 min',
    price: 'From £65',
    features: ['Engine codes', 'System analysis', 'Performance testing', 'Error clearing'],
    popular: true,
    color: 'from-indigo-500 to-indigo-600',
    image: '/car--repair-sheffield/assets/img/update_1/service/service_4_4.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    details: 'Modern diagnostic equipment allows us to quickly identify issues and provide accurate solutions for complex vehicle problems.'
  }
];

export const serviceCategories = [
  { id: 'all', name: 'All Services', icon: Wrench },
  { id: 'engine', name: 'Engine', icon: Settings },
  { id: 'brake', name: 'Brakes', icon: Shield },
  { id: 'maintenance', name: 'Maintenance', icon: Clock },
  { id: 'electrical', name: 'Electrical', icon: Zap },
]; 