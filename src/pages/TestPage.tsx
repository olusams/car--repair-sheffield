import React from 'react';
import HeroSlider from '../components/common/HeroSlider';
import { heroSlides } from '../data/heroSlides';

const TestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-light">
      <HeroSlider slides={heroSlides} />
    </div>
  );
};

export default TestPage; 