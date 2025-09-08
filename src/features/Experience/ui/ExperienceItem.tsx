import { FC, useEffect, useRef, useState } from 'react';

import { motion, MotionValue, useTransform } from 'motion/react';

import { expInfo } from '../constants';

interface ExperienceItemProps {
  info: (typeof expInfo)[number];
  progress: MotionValue<number>;
  blockHeight: number;
  parentOffsetTop: number;
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  info,
  progress,
  blockHeight,
  parentOffsetTop,
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [itemHeight, setItemHeight] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const placeTaken = itemHeight / blockHeight;
  const startPoint = itemOffset / blockHeight;
  const endPoint = startPoint + placeTaken;

  useEffect(() => {
    if (itemRef.current) {
      setItemHeight(itemRef.current.clientHeight);
      setItemOffset(itemRef.current.offsetTop - parentOffsetTop);
    }
  }, [blockHeight]);

  const opacity = useTransform(progress, value => {
    if (value >= startPoint && value < endPoint) {
      return 1;
    }

    if (endPoint === 1 && value >= 1) {
      return 1;
    }

    return 0.3;
  });

  return (
    <motion.div
      ref={itemRef}
      className="flex flex-col duration-200"
      style={{ opacity }}
    >
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
