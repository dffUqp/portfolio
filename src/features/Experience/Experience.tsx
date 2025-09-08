'use client';

import { useEffect, useRef, useState } from 'react';

import { useScroll } from 'motion/react';

import { expInfo } from './constants';
import { ExperienceItem } from './ui';

const Experience = () => {
  const experienceContainerRef = useRef<HTMLDivElement | null>(null);

  const experienceBlockRef = useRef<HTMLDivElement | null>(null);
  const [experienceBlockHeight, setExperienceBlockHeight] = useState(0);
  const [topOffset, setTopOffset] = useState(0);

  const { scrollYProgress } = useScroll({
    target: experienceContainerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    if (experienceBlockRef.current) {
      setExperienceBlockHeight(experienceBlockRef.current.clientHeight);
      setTopOffset(experienceBlockRef.current.offsetTop);
    }
  }, []);

  return (
    <div ref={experienceContainerRef} className="py-[50px] md:py-[31vh]">
      <div ref={experienceBlockRef} className="flex flex-col gap-6">
        {expInfo.map(info => (
          <ExperienceItem
            parentOffsetTop={topOffset}
            blockHeight={experienceBlockHeight}
            key={info.jobTitle}
            info={info}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

export { Experience };
