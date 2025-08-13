'use client';

import dynamic from 'next/dynamic';

import { useScrollProgress } from 'providers';

import { HeroWidget, InteractionWidget } from './ui';

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
        <InteractionWidget />

        <CVWidget />
      </div>
    </>
  );
};

export default HomePage;
