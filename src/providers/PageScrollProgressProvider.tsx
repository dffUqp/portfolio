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

interface PageScrollProgressContextProps {
  targetBlockRef: RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
}

const PageScrollProgressContext = createContext<
  PageScrollProgressContextProps | undefined
>(undefined);

const PageScrollProgressProvider: FC<PropsWithChildren> = ({ children }) => {
  const targetBlockRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetBlockRef,
    offset: ['start center', 'end center'],
  });

  const providerValue = {
    targetBlockRef,
    scrollYProgress,
  };

  return (
    <PageScrollProgressContext.Provider value={providerValue}>
      {children}
    </PageScrollProgressContext.Provider>
  );
};

const useScrollProgress = () => {
  const context = useContext(PageScrollProgressContext);

  if (!context) {
    throw new Error(
      'useScrollProgress must be used within a PageScrollProgressProvider',
    );
  }

  return context;
};

export { PageScrollProgressProvider, useScrollProgress };
