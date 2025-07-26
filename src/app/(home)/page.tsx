'use client';

import { useScrollProgress } from 'providers';

import { CVWidget, HeroWidget, InteractionWidget } from './ui';

const HomePage = () => {
  const { targetBlockRef } = useScrollProgress();

  return (
    <>
      <HeroWidget />

      <div ref={targetBlockRef}>
        <InteractionWidget />

        <CVWidget />
      </div>
    </>
  );
};

export default HomePage;
