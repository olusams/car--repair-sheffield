export interface Video {
  id: string;
  title: string;
  description: string;
  src: string;
  thumbnail?: string;
  duration?: string;
  category: 'repair' | 'maintenance' | 'diagnostics' | 'general';
}

export const videos: Video[] = [
  {
    id: 'work-in-action',
    title: 'Modern Auto Diagnostics & Repair',
    description: 'Watch our certified technicians using advanced diagnostic equipment and modern technology to ensure precise repairs and optimal vehicle performance.',
    src: '/videos/vecteezy_young-car-mechanic-using-laptop-at-the-garage_35289755.mp4',
    category: 'general'
  },
  {
    id: 'test-video',
    title: 'Test Video (Working MP4)',
    description: 'Test video to verify video component functionality.',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    category: 'general'
  },
  {
    id: 'engine-diagnostics',
    title: 'Advanced Engine Diagnostics',
    description: 'See our state-of-the-art diagnostic equipment in action, ensuring accurate problem identification and efficient repairs.',
    src: '/videos/vecteezy_young-car-mechanic-using-laptop-at-the-garage_35289755.mp4',
    category: 'diagnostics'
  },
  {
    id: 'brake-system-repair',
    title: 'Brake System Inspection & Repair',
    description: 'Professional brake system maintenance and repair procedures to ensure your vehicle\'s safety and performance.',
    src: '/videos/vecteezy_young-car-mechanic-using-laptop-at-the-garage_35289755.mp4',
    category: 'repair'
  },
  {
    id: 'oil-change-service',
    title: 'Complete Oil Change Service',
    description: 'Professional oil change service with quality checks, filter replacement, and maintenance recommendations.',
    src: '/videos/vecteezy_young-car-mechanic-using-laptop-at-the-garage_35289755.mp4',
    category: 'maintenance'
  }
];

export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};

export const getVideosByCategory = (category: Video['category']): Video[] => {
  return videos.filter(video => video.category === category);
}; 