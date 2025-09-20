'use client';

import {
  createContext,
  FC,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef,
} from 'react';

import { MotionValue, useScroll } from 'motion/react';

interface SectionScrollContextProps {
  targetSection: RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
}

const SectionScrollProviderContext = createContext<
  SectionScrollContextProps | undefined
>(undefined);

const SectionScrollProvider: FC<PropsWithChildren> = ({ children }) => {
  const targetSection = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetSection,
    offset: ['start center', 'end center'],
  });

  const providerValue = {
    targetSection,
    scrollYProgress,
  };

  return (
    <SectionScrollProviderContext.Provider value={providerValue}>
      {children}
    </SectionScrollProviderContext.Provider>
  );
};

const useSectionScrollProgress = () => {
  const context = useContext(SectionScrollProviderContext);

  if (!context) {
    throw new Error(
      'useSectionScrollProgress must be used within a SectionScrollProvider',
    );
  }

  return context;
};

export { SectionScrollProvider, useSectionScrollProgress };
