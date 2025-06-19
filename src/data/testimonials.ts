export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  service?: string;
  date?: string;
  verified?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Business Owner',
    content: 'Excellent service! They fixed my engine issues quickly and professionally. The team was honest about the problem and the pricing was fair. Highly recommended!',
    rating: 5,
    image: '/assets/img/update_1/testimonial/testi_1_1.jpg',
    service: 'Engine Repair',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Teacher',
    content: 'Very honest and reliable. They explained everything clearly and the price was fair. My car runs better than ever after their brake service.',
    rating: 5,
    image: '/assets/img/update_1/testimonial/testi_1_2.jpg',
    service: 'Brake Service',
    date: '2024-01-10',
    verified: true
  },
  {
    id: '3',
    name: 'Mike Davis',
    role: 'Engineer',
    content: 'Professional team with great attention to detail. They diagnosed an electrical issue that other shops missed. Saved me money in the long run!',
    rating: 5,
    image: '/assets/img/update_1/testimonial/testi_1_3.jpg',
    service: 'Electrical Systems',
    date: '2024-01-08',
    verified: true
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    role: 'Nurse',
    content: 'Fast and reliable oil change service. They completed the work while I waited and even rotated my tires for free. Great customer service!',
    rating: 5,
    image: '/assets/img/update_1/testimonial/testi_1_1.jpg',
    service: 'Oil Change',
    date: '2024-01-05',
    verified: true
  },
  {
    id: '5',
    name: 'David Wilson',
    role: 'Sales Manager',
    content: 'Outstanding AC repair service. They fixed my heating system quickly and the price was much better than the dealership. Will definitely return!',
    rating: 5,
    image: '/assets/img/update_1/testimonial/testi_1_2.jpg',
    service: 'AC/Heating',
    date: '2024-01-03',
    verified: true
  },
  {
    id: '6',
    name: 'Lisa Thompson',
    role: 'Accountant',
    content: 'Professional tire service with excellent attention to detail. They aligned my wheels perfectly and the car drives like new. Highly recommend!',
    rating: 5,
    image: '/assets/img/update_1/testimonial/testi_1_3.jpg',
    service: 'Tire Service',
    date: '2024-01-01',
    verified: true
  }
]; 