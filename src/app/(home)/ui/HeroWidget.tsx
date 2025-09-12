import { motion } from 'motion/react';

import { Experience } from 'features/Experience';
import { Summary } from 'features/Summary';

import { Container } from 'components/atoms/container/container';

import { getFadeInUpAnimation } from 'utils/animation';

const HeroWidget = () => {
  return (
    <Container>
      <div
        className="flex flex-col animate-in fade-in slide-in-from-bottom-[2%] [animation-duration:500ms] relative z-50 w-full 
       justify-between text-white md:flex-row gap-6"
      >
        <div className="h-screen md:sticky top-0 flex justify-center items-center">
          <Summary />
        </div>

        <motion.div
          {...getFadeInUpAnimation(3)}
          className="relative basis-[60%] xl:basis-[50%]"
        >
          <Experience />
        </motion.div>
      </div>
    </Container>
  );
};

export { HeroWidget };
