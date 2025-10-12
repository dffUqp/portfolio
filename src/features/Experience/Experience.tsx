'use client';

import { useEffect, useRef, useState } from 'react';

import { useScroll } from 'motion/react';

import { expInfo } from 'lib/info';

import { ExperienceItem } from './ui/ExperienceItem';

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
    <div ref={experienceContainerRef} className="py-[50px] md:py-[31vh]">
      <div ref={experienceBlockRef} className="relative flex flex-col gap-6">
        {expInfo.map((info, index) => (
          <ExperienceItem
            index={index}
            blockHeight={experienceBlockHeight}
            key={info.companyName}
            info={info}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

export { Experience };
