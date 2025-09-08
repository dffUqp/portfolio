'use client';

import { useScrollProgress } from 'providers';

import { CVWidget, HeroWidget } from './ui';

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
