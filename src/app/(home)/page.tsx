'use client';

import dynamic from 'next/dynamic';

import { useScrollProgress } from 'providers';

import { HeroWidget } from './ui';

const CVWidget = dynamic(
  () => import('./ui/CVWidget').then(mod => mod.CVWidget),
  {
    ssr: false,
  },
);

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
