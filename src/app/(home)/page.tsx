'use client';

import { useScrollProgress } from 'providers/PageScrollProgressProvider';

import { CVWidget } from './ui/CVWidget';
import { HeroWidget } from './ui/HeroWidget';

const HomePage = () => {
  const { targetBlockRef } = useScrollProgress();

  return (
    <>
      <HeroWidget />

      <div ref={targetBlockRef}>
        <CVWidget />
      </div>
    </>
  );
};

export default HomePage;
