'use client';

import { useSectionScrollProgress } from 'providers/SectionScrollProvider';

import { CVWidget } from './ui/CVWidget';
import { HeroWidget } from './ui/HeroWidget';

const HomePage = () => {
  const { targetSection } = useSectionScrollProgress();

  return (
    <>
      <HeroWidget />

      <div ref={targetSection}>
        <CVWidget />
      </div>
    </>
  );
};

export default HomePage;
