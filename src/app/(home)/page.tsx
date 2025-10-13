'use client';

import { useSectionScrollProgress } from 'providers/SectionScrollProvider';

import { CVWidget } from './ui/CVWidget';
import { HeroWidget } from './ui/HeroWidget';
import { ThemeChanger } from './ui/ThemeSwitcher';

const HomePage = () => {
  const { targetSection } = useSectionScrollProgress();

  return (
    <>
      <ThemeChanger />

      <HeroWidget />

      <div ref={targetSection}>
        <CVWidget />
      </div>
    </>
  );
};

export default HomePage;
