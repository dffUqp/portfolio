'use client';

import { useEffect, useRef, useState } from 'react';

import { useScroll } from 'motion/react';

import { expInfo } from './constants';
import { ExperienceItem } from './ui';

const Experience = () => {
  const experienceContainerRef = useRef<HTMLDivElement | null>(null);

  const experienceBlockRef = useRef<HTMLDivElement | null>(null);
  const [experienceBlockHeight, setExperienceBlockHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: experienceContainerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    if (experienceBlockRef.current) {
      setExperienceBlockHeight(experienceBlockRef.current.clientHeight);
    }
  }, []);

  return (
    <div ref={experienceContainerRef} className="relative">
      <div className="sticky top-1 bg-transparent w-full h-[300px] z-20 pointer-events-none" />

      <div ref={experienceBlockRef} className="flex flex-col gap-6">
        {expInfo.map(info => (
          <ExperienceItem
            blockHeight={experienceBlockHeight}
            key={info.jobTitle}
            info={info}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <div className="sticky bottom-0 bg-transparent w-full h-[300px] z-20 pointer-events-none" />
    </div>
  );
};

export { Experience };
