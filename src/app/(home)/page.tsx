'use client';

import { useSectionScrollProgress } from 'providers/SectionScrollProvider';

import { CVWidget } from './ui/CVWidget';
import { HeroWidget } from './ui/HeroWidget';
import { ThemeSwitch } from './ui/ThemeSwitch';

const HomePage = () => {
  const { targetSection } = useSectionScrollProgress();

  return (
    <>
      <ThemeSwitch />

      <HeroWidget />

      <div ref={targetSection}>
        <CVWidget />
      </div>
    </>
  );
};

export default HomePage;
