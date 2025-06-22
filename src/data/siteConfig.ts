import { ComponentType } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Users, 
  Clock, 
  Star, 
  Shield, 
  Award
} from 'lucide-react';

export interface SiteConfig {
  business: {
    name: string;
    tagline: string;
    description: string;
    founded: number;
    employees: number;
    certifications: string[];
    awards: string[];
  };
  contact: {
    phone: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    hours: {
      [key: string]: string;
    };
    emergency: string;
  };
  social: {
    [key: string]: {
      url: string;
      icon: ComponentType<{ className?: string }>;
      label: string;
    };
  };
  stats: {
    label: string;
    number: string;
    icon: ComponentType<{ className?: string }>;
    description?: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
    color: string;
  }[];
  testimonials: {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
    verified: boolean;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    ogImage: string;
  };
  services: {
    categories: {
      id: string;
      name: string;
      description: string;
      icon: ComponentType<{ className?: string }>;
      color: string;
    }[];
    popular: string[];
  };
  pricing: {
    currency: string;
    plans: {
      id: string;
      name: string;
      price: number;
      period: string;
      features: string[];
      popular: boolean;
      color: string;
    }[];
  };
}

export const siteConfig: SiteConfig = {
  business: {
    name: "AutoFix Pro",
    tagline: "Professional Auto Repair & Services",
    description: "Your trusted partner for all automotive repair and maintenance needs. We combine expertise, technology, and dedication to deliver exceptional service.",
    founded: 2008,
    employees: 18,
    certifications: [
      "ASE Certified Technicians",
      "Factory Trained Specialists",
      "EPA Certified",
      "BBB Accredited Business",
      "I-CAR Gold Class Certified",
      "VOSA Approved"
    ],
    awards: [
      "Best Auto Repair 2023 - Sheffield Business Awards",
      "Customer Choice Award 2022 - Trustpilot",
      "Excellence in Service 2021 - Better Business Bureau",
      "Top Rated Local Business 2020 - Google Reviews"
    ]
  },
  contact: {
    phone: "0114 385 4721",
    email: "info@autofixpro.co.uk",
    address: {
      street: "145 Ecclesall Road",
      city: "Sheffield",
      state: "South Yorkshire",
      zip: "S11 8JB",
      country: "United Kingdom"
    },
    hours: {
      "Monday": "8:00 AM - 6:00 PM",
      "Tuesday": "8:00 AM - 6:00 PM",
      "Wednesday": "8:00 AM - 6:00 PM",
      "Thursday": "8:00 AM - 6:00 PM",
      "Friday": "8:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 5:00 PM",
      "Sunday": "Closed"
    },
    emergency: "0114 385 4999"
  },
  social: {
    facebook: {
      url: "https://facebook.com/autofixpro",
      icon: Facebook,
      label: "Follow us on Facebook"
    },
    twitter: {
      url: "https://twitter.com/autofixpro",
      icon: Twitter,
      label: "Follow us on Twitter"
    },
    instagram: {
      url: "https://instagram.com/autofixpro",
      icon: Instagram,
      label: "Follow us on Instagram"
    },
    linkedin: {
      url: "https://linkedin.com/company/autofixpro",
      icon: Linkedin,
      label: "Connect with us on LinkedIn"
    },
    youtube: {
      url: "https://youtube.com/autofixpro",
      icon: Youtube,
      label: "Watch our videos on YouTube"
    }
  },
  stats: [
    {
      label: "Happy Customers",
      number: "8,500+",
      icon: Users,
      description: "Satisfied customers served"
    },
    {
      label: "Years Experience",
      number: "16+",
      icon: Clock,
      description: "Professional experience"
    },
    {
      label: "Service Rating",
      number: "4.8",
      icon: Star,
      description: "Average customer rating"
    },
    {
      label: "Warranty Coverage",
      number: "100%",
      icon: Shield,
      description: "Comprehensive warranty"
    }
  ],
  features: [
    {
      title: "Expert Technicians",
      description: "ASE certified professionals with years of experience",
      icon: Award,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Quick Service",
      description: "Fast turnaround times without compromising quality",
      icon: Clock,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Customer Focused",
      description: "Dedicated to providing personalized service",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all work",
      icon: Shield,
      color: "from-red-500 to-red-600"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Owner",
      content: "AutoFix Pro has been maintaining our company fleet for over 3 years. Their attention to detail and professional service is outstanding. Highly recommended!",
      rating: 5,
      image: "/assets/img/testimonial/testi_1_1.jpg",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Family Driver",
      content: "I trust AutoFix Pro with my family's safety. They always explain what needs to be done and never pressure unnecessary repairs. Excellent service!",
      rating: 5,
      image: "/assets/img/testimonial/testi_1_2.jpg",
      verified: true
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Car Enthusiast",
      content: "As someone who loves cars, I appreciate their expertise and passion. They treat every vehicle with the care it deserves. Top-notch service!",
      rating: 5,
      image: "/assets/img/testimonial/testi_1_3.jpg",
      verified: true
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Fleet Manager",
      content: "Managing a fleet of 50 vehicles requires a reliable partner. AutoFix Pro has consistently delivered quality work and excellent customer service.",
      rating: 5,
      image: "/assets/img/testimonial/testi_1_1.jpg",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Daily Commuter",
      content: "Quick, reliable, and honest. AutoFix Pro has saved me time and money with their efficient service and fair pricing.",
      rating: 5,
      image: "/assets/img/testimonial/testi_1_2.jpg",
      verified: true
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Classic Car Owner",
      content: "They understand classic cars and treat them with the respect they deserve. Professional work and attention to detail.",
      rating: 5,
      image: "/assets/img/testimonial/testi_1_3.jpg",
      verified: true
    }
  ],
  seo: {
    title: "AutoFix Pro - Professional Auto Repair & Services",
    description: "Professional automotive repair and maintenance services. Expert technicians, quality workmanship, and exceptional customer service. Schedule your appointment today!",
    keywords: [
      "auto repair",
      "car service",
      "automotive maintenance",
      "engine repair",
      "brake service",
      "oil change",
      "transmission service",
      "electrical repair",
      "AC service",
      "tire service",
      "diagnostics",
      "ASE certified",
      "professional auto repair"
    ],
    author: "AutoFix Pro",
    ogImage: "/assets/img/update_1/hero/hero_bg_3_1.jpg"
  },
  services: {
    categories: [
      {
        id: "engine",
        name: "Engine Services",
        description: "Complete engine diagnostics and repair services",
        icon: Award,
        color: "from-red-500 to-red-600"
      },
      {
        id: "brake",
        name: "Brake Services",
        description: "Comprehensive brake system maintenance and repair",
        icon: Shield,
        color: "from-blue-500 to-blue-600"
      },
      {
        id: "maintenance",
        name: "Maintenance",
        description: "Regular maintenance and preventive care",
        icon: Clock,
        color: "from-green-500 to-green-600"
      },
      {
        id: "electrical",
        name: "Electrical",
        description: "Advanced electrical diagnostics and repair",
        icon: Star,
        color: "from-yellow-500 to-yellow-600"
      }
    ],
    popular: ["engine-repair", "oil-change", "electrical", "brake-service"]
  },
  pricing: {
    currency: "GBP",
    plans: [
      {
        id: "basic",
        name: "Basic Service",
        price: 79,
        period: "month",
        features: [
          "Oil Change",
          "Tire Rotation",
          "Multi-point Inspection",
          "Basic Diagnostics"
        ],
        popular: false,
        color: "from-blue-500 to-blue-600"
      },
      {
        id: "premium",
        name: "Premium Service",
        price: 159,
        period: "month",
        features: [
          "Everything in Basic",
          "Brake Inspection",
          "AC System Check",
          "Priority Scheduling",
          "Extended Warranty"
        ],
        popular: true,
        color: "from-purple-500 to-purple-600"
      },
      {
        id: "ultimate",
        name: "Ultimate Service",
        price: 239,
        period: "month",
        features: [
          "Everything in Premium",
          "Engine Diagnostics",
          "Transmission Service",
          "Electrical System Check",
          "24/7 Roadside Assistance"
        ],
        popular: false,
        color: "from-red-500 to-red-600"
      }
    ]
  }
};

export default siteConfig; 