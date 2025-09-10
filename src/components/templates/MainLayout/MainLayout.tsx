'use client';

import { FC, PropsWithChildren, useEffect, useRef } from 'react';

import Lenis from 'lenis';

import { useScrollProgress } from 'providers/PageScrollProgressProvider';

import { cn } from 'utils/cn';

import { CirclesBackground } from './ui/CirclesBackground';
import { StarsBackground } from './ui/StarsBackground';

interface MainLayoutProps extends PropsWithChildren {
  className?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, className }) => {
  const lenisRef = useRef<null | Lenis>(null);

  const { scrollYProgress } = useScrollProgress();

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        prevent: node => node.hasAttribute('data-scroll-locked'),
      });
    }

    function raf(time: number) {
      lenisRef.current?.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, [lenisRef.current]);

  return (
    <div className="relative flex flex-col w-full h-full min-h-screen">
      <StarsBackground scrollValue={scrollYProgress} />
      <CirclesBackground />

      <main
        className={cn(
          'flex w-full flex-col flex-grow h-full items-center',
          className,
        )}
      >
        {children}
      </main>
    </div>
  );
};

export { MainLayout };
