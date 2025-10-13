import { FC, useEffect, useRef, useState } from 'react';

import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'motion/react';

import { expInfo } from 'lib/info';

const INITIAL_OPACITY = 0.3;

interface ExperienceItemProps {
  index: number;
  info: (typeof expInfo)[number];
  progress: MotionValue<number>;
  blockHeight: number;
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  info,
  index,
  progress,
  blockHeight,
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [itemHeight, setItemHeight] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const placeTaken = itemHeight / blockHeight;
  const startPoint = (itemOffset - index * 24) / blockHeight;
  const endPoint = startPoint + placeTaken;

  const isLastBlock = blockHeight === itemOffset + itemHeight;

  useEffect(() => {
    if (itemRef.current) {
      setItemHeight(itemRef.current.clientHeight);
      setItemOffset(itemRef.current.offsetTop);
    }
  }, [blockHeight]);

  const opacity = useMotionValue(INITIAL_OPACITY);

  const targetOpacity = useTransform(progress, (value): number => {
    if (value >= startPoint && value < endPoint) {
      return 1;
    }

    if (isLastBlock && value >= endPoint) {
      return 1;
    }

    return INITIAL_OPACITY;
  });

  useMotionValueEvent(targetOpacity, 'change', value => {
    animate(opacity, value, { duration: 0.2 });
  });

  return (
    <motion.div ref={itemRef} className="flex flex-col" style={{ opacity }}>
      <div className="flex justify-between w-full font-bold text-xs sm:text-sm lg:text-base">
        <h3>
          {info.jobTitle}
          <br className="lg:hidden" /> {info.companyName}
        </h3>
        <p>{info.date}</p>
      </div>
      <span className="block text-[10px] sm:text-xs lg:text-sm">
        {info.companyDesc}
      </span>
      <ul className="flex flex-col gap-2 mt-1.5 sm:list-disc text-xs sm:text-sm lg:text-base">
        {info.bulletPoints.map(bulletPoint => {
          return (
            <li key={bulletPoint}>
              <span>{bulletPoint}</span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export { ExperienceItem };
