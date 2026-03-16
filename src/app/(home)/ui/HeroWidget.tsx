'use client';

import { FC } from 'react';

import { motion } from 'motion/react';

import { Experience } from 'features/Experience';
import { Summary } from 'features/Summary';

import { Container } from 'components/atoms/container/container';

import { getFadeInUpAnimation } from 'lib/animation';
import { PortfolioInfo } from 'lib/info';

interface HeroWidgetProps {
  portfolioInfo: PortfolioInfo;
}

const HeroWidget: FC<HeroWidgetProps> = ({ portfolioInfo }) => {
  const { expInfo, socials, summaryInfo } = portfolioInfo;

  return (
    <Container>
      <motion.div
        {...getFadeInUpAnimation(0, 24)}
        className="relative flex flex-col z-10 w-full justify-between text-primary-text md:flex-row gap-6"
      >
        <div className="h-screen md:sticky top-0 flex justify-center items-center">
          <Summary summary={summaryInfo} socials={socials} />
        </div>

        <div className="basis-[60%] xl:basis-[calc(50%_+_24px)] overflow-y-hidden pl-0 md:pl-6">
          <motion.div className="relative" {...getFadeInUpAnimation(3)}>
            <Experience info={expInfo} />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export { HeroWidget };
