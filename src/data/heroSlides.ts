export interface HeroSlide {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  videoUrl?: string;
  ctaText: string;
  ctaLink: string;
  features?: string[];
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Your Trusted Auto Repair Partner",
    subtitle: "Professional Auto Repair",
    description: "Professional automotive services to keep your vehicle running smoothly and safely. Our certified technicians provide quality workmanship and exceptional customer service.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    ctaText: "Schedule Service",
    ctaLink: "/appointment",
    features: [
      'ASE Certified Technicians',
      'Warranty on All Work',
      'Same Day Service Available',
      'Honest Pricing'
    ]
  },
  {
    id: 2,
    title: "Expert Car Servicing Center",
    subtitle: "Amazing Car Servicing",
    description: "Get your amazing car solution with our comprehensive automotive services. We provide reliable repairs and maintenance to keep your vehicle in top condition.",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    ctaText: "Get A Quote",
    ctaLink: "/contact",
    features: [
      'State-of-the-Art Equipment',
      'Factory-Trained Technicians',
      'Comprehensive Diagnostics',
      'Quality Guarantee'
    ]
  },
  {
    id: 3,
    title: "Fix Your Personal Car Problem",
    subtitle: "Non Stop Car Servicing",
    description: "Don't wait until it's too late! Schedule your appointment today and experience the difference of professional auto repair services.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    ctaText: "Call Now",
    ctaLink: "/contact",
    features: [
      'Emergency Service Available',
      '24/7 Customer Support',
      'Mobile Service Units',
      'Competitive Pricing'
    ]
  }
]; 