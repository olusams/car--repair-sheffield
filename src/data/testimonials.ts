export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  service?: string;
  date?: string;
  verified?: boolean;
  vehicle?: string;
  location?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Owner',
    content: 'AutoFix Pro has been maintaining our company fleet for over 3 years. Their attention to detail and professional service is outstanding. They always complete the work on time and within budget. Highly recommended!',
    rating: 5,
    image: '/assets/img/customers/sarah-johnson.jpg',
    service: 'Fleet Maintenance',
    date: '2024-01-15',
    verified: true,
    vehicle: 'Company Fleet (15 vehicles)',
    location: 'Sheffield City Centre'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Family Driver',
    content: 'I trust AutoFix Pro with my family\'s safety. They always explain what needs to be done and never pressure unnecessary repairs. The team is honest, reliable, and truly cares about their customers.',
    rating: 5,
    image: '/assets/img/customers/michael-chen.jpg',
    service: 'Family Vehicle Maintenance',
    date: '2024-01-12',
    verified: true,
    vehicle: 'Toyota Camry 2020',
    location: 'Sheffield'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Car Enthusiast',
    content: 'As someone who loves cars, I appreciate their expertise and passion. They treat every vehicle with the care it deserves. Their diagnostic skills are top-notch and they always go the extra mile.',
    rating: 5,
    image: '/assets/img/customers/emma-rodriguez.jpg',
    service: 'Performance Tuning',
    date: '2024-01-10',
    verified: true,
    vehicle: 'BMW 3 Series 2019',
    location: 'Sheffield'
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Fleet Manager',
    content: 'Managing a fleet of 50 vehicles requires a reliable partner. AutoFix Pro has consistently delivered quality work and excellent customer service. Their preventive maintenance program has saved us thousands.',
    rating: 5,
    image: '/assets/img/customers/david-thompson.jpg',
    service: 'Fleet Management',
    date: '2024-01-08',
    verified: true,
    vehicle: 'Commercial Fleet',
    location: 'South Yorkshire'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Daily Commuter',
    content: 'Quick, reliable, and honest. AutoFix Pro has saved me time and money with their efficient service and fair pricing. They always fit me in when I have urgent issues and explain everything clearly.',
    rating: 5,
    image: '/assets/img/customers/lisa-wang.jpg',
    service: 'Regular Maintenance',
    date: '2024-01-05',
    verified: true,
    vehicle: 'Honda Civic 2021',
    location: 'Sheffield'
  },
  {
    id: 6,
    name: 'Robert Martinez',
    role: 'Classic Car Owner',
    content: 'They understand classic cars and treat them with the respect they deserve. Professional work and attention to detail. My 1967 Mustang has never run better since they restored the engine.',
    rating: 5,
    image: '/assets/img/customers/robert-martinez.jpg',
    service: 'Classic Car Restoration',
    date: '2024-01-03',
    verified: true,
    vehicle: '1967 Ford Mustang',
    location: 'Sheffield'
  },
  {
    id: 7,
    name: 'Jennifer Adams',
    role: 'Single Parent',
    content: 'As a busy single parent, I need reliable car service. AutoFix Pro has been amazing - they work around my schedule, explain costs upfront, and always do quality work. My kids and I feel safe on the road.',
    rating: 5,
    image: '/assets/img/customers/jennifer-adams.jpg',
    service: 'Family Vehicle Care',
    date: '2024-01-01',
    verified: true,
    vehicle: 'Nissan Qashqai 2018',
    location: 'Sheffield'
  },
  {
    id: 8,
    name: 'James Wilson',
    role: 'Retired Engineer',
    content: 'After 40 years as an engineer, I know quality when I see it. AutoFix Pro\'s workmanship is exceptional. They diagnosed a complex electrical issue that others missed and fixed it properly.',
    rating: 5,
    image: '/assets/img/customers/james-wilson.jpg',
    service: 'Electrical Diagnostics',
    date: '2023-12-28',
    verified: true,
    vehicle: 'Mercedes C-Class 2017',
    location: 'Sheffield'
  }
];

export const getTestimonialById = (id: number): Testimonial | undefined => {
  return testimonials.find(testimonial => testimonial.id === id);
};

export const getTestimonialsByService = (service: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.service === service);
};

export const getVerifiedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.verified);
};

export const getTopRatedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.rating === 5);
}; 