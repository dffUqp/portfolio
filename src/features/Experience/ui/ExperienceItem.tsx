import { FC, useEffect, useRef, useState } from 'react';

import { motion, MotionValue, useTransform } from 'motion/react';

import { cn } from 'shared/lib';

import { expInfo } from '../constants';

interface ExperienceItemProps {
  info: (typeof expInfo)[number];
  progress: MotionValue<number>;
  blockHeight: number;
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  info,
  progress,
  blockHeight,
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
      setItemOffset(itemRef.current.offsetTop - 300);
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
      className={cn('flex flex-col duration-200')}
      style={{ opacity }}
    >
      <div className="flex justify-between w-full font-bold text-md">
        <h3>{info.jobTitle}</h3>
        <p>{info.date}</p>
      </div>
      <span className="block text-sm">{info.companyDesc}</span>
      <ul className="flex flex-col gap-2 mt-1.5 list-disc">
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
