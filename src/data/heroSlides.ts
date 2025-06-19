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
    image: "/car--repair-sheffield/assets/img/update_1/hero/hero_bg_3_1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    ctaText: "Schedule Service",
    ctaLink: "/car--repair-sheffield/appointment",
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
    image: "/car--repair-sheffield/assets/img/update_1/hero/hero_bg_3_2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    ctaText: "Get A Quote",
    ctaLink: "/car--repair-sheffield/contact",
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
    image: "/car--repair-sheffield/assets/img/update_1/hero/hero_bg_3_3.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    ctaText: "Call Now",
    ctaLink: "/car--repair-sheffield/contact",
    features: [
      'Emergency Service Available',
      '24/7 Customer Support',
      'Mobile Service Units',
      'Competitive Pricing'
    ]
  }
]; 