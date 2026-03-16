'use client';

import { FC, useEffect, useRef, useState } from 'react';

import { useScroll } from 'motion/react';

import { ExperienceItemType } from 'lib/info';

import { ExperienceItem } from './ui/ExperienceItem';

interface ExperienceProps {
  info: ExperienceItemType[];
}

const Experience: FC<ExperienceProps> = ({ info }) => {
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
    <div ref={experienceContainerRef} className="py-[50px] md:py-[31dvh]">
      <div ref={experienceBlockRef} className="relative flex flex-col gap-6">
        {info.map((item, index) => (
          <ExperienceItem
            index={index}
            blockHeight={experienceBlockHeight}
            key={item.companyName}
            info={item}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

export { Experience };
