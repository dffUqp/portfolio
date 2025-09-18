import { motion } from 'motion/react';

import { Experience } from 'features/Experience';
import { Summary } from 'features/Summary';

import { Container } from 'components/atoms/container/container';

import { getFadeInUpAnimation } from 'utils/animation';

const HeroWidget = () => {
  return (
    <Container>
      <motion.div
        {...getFadeInUpAnimation(0, 24)}
        className="relative flex flex-col z-50 w-full justify-between text-white md:flex-row gap-6"
      >
        <div className="h-screen md:sticky top-0 flex justify-center items-center">
          <Summary />
        </div>

        <div className="basis-[60%] xl:basis-[calc(50%_+_24px)] overflow-y-hidden pl-0 md:pl-6">
          <motion.div className="relative" {...getFadeInUpAnimation(3)}>
            <Experience />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export { HeroWidget };
