import { 
  Settings, 
  Shield, 
  Clock, 
  Car, 
  Zap, 
  Wrench, 
  Gauge,
  Droplets,
  Snowflake
} from 'lucide-react';
import { ComponentType } from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  image?: string;
  icon: ComponentType<{ className?: string }>;
  features: string[];
  price?: string;
  duration?: string;
  popular?: boolean;
  category?: string;
  gradient?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Engine Diagnostics",
    description: "Comprehensive engine diagnostics using state-of-the-art equipment to identify and resolve performance issues.",
    image: "/assets/engine-diagnostics-C3CvCyXQ.jpg",
    icon: Gauge,
    gradient: "linear-gradient(135deg, #1f293b 0%, #3b82f6 100%)",
    features: [
      "Computer diagnostics",
      "Performance testing",
      "Error code analysis",
      "Detailed reporting"
    ],
    price: "From £89",
    duration: "30-60 min",
    popular: true,
    category: "engine"
  },
  {
    id: 2,
    title: "Brake System Service",
    description: "Complete brake system inspection, repair, and maintenance to ensure your safety on the road.",
    image: "/assets/brake-system-BYK7WyXj.jpg",
    icon: Shield,
    gradient: "linear-gradient(135deg, #7f1d1e 0%, #ec4444 100%)",
    features: [
      "Brake pad replacement",
      "Rotor resurfacing",
      "Fluid inspection",
      "Caliper service"
    ],
    price: "From £149",
    duration: "1-2 hours",
    popular: true,
    category: "brakes"
  },
  {
    id: 3,
    title: "Oil Change Service",
    description: "Professional oil change service with premium filters to keep your engine running smoothly.",
    image: "/assets/oil-change-service-Clx5Hmhp.jpg",
    icon: Droplets,
    gradient: "linear-gradient(135deg, #067a4b 0%, #10b981 100%)",
    features: [
      "Synthetic oil options",
      "Filter replacement",
      "Multi-point inspection",
      "Fluid level check"
    ],
    price: "From £39",
    duration: "30 min",
    popular: true,
    category: "maintenance"
  },
  {
    id: 4,
    title: "Tire Services",
    description: "Complete tire services including rotation, balancing, alignment, and replacement.",
    image: "/assets/tire-services-C62VQbM4.jpg",
    icon: Car,
    gradient: "linear-gradient(135deg, #581caf 0%, #8b5cf6 100%)",
    features: [
      "Tire rotation",
      "Wheel balancing",
      "Alignment check",
      "Tire replacement"
    ],
    price: "From £29",
    duration: "45 min",
    popular: false,
    category: "tires"
  },
  {
    id: 5,
    title: "Electrical System",
    description: "Diagnostic and repair services for all electrical components and systems in your vehicle.",
    image: "/assets/electrical-services-CJ6sTfFT.jpg",
    icon: Zap,
    gradient: "linear-gradient(135deg, #eaa040 0%, #f59e0a 100%)",
    features: [
      "Battery testing",
      "Alternator service",
      "Starter repair",
      "Wiring diagnostics"
    ],
    price: "From £79",
    duration: "1-3 hours",
    popular: false,
    category: "electrical"
  },
  {
    id: 6,
    title: "AC System Service",
    description: "Complete air conditioning system service to keep you cool and comfortable year-round.",
    image: "/assets/ac-system-service-CqYtSBlf.jpg",
    icon: Snowflake,
    gradient: "linear-gradient(135deg, #0696a7 0%, #06b6d4 100%)",
    features: [
      "AC diagnostics",
      "Refrigerant service",
      "Component repair",
      "Performance testing"
    ],
    price: "From £99",
    duration: "1-2 hours",
    popular: false,
    category: "climate"
  }
];

export const serviceCategories = [
  { id: 'all', name: 'All Services', icon: Wrench },
  { id: 'engine', name: 'Engine', icon: Settings },
  { id: 'brakes', name: 'Brakes', icon: Shield },
  { id: 'maintenance', name: 'Maintenance', icon: Clock },
  { id: 'tires', name: 'Tires', icon: Car },
  { id: 'electrical', name: 'Electrical', icon: Zap },
  { id: 'climate', name: 'AC/Heating', icon: Wrench },
]; 