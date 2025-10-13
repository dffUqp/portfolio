import { motion } from 'motion/react';

import { getFadeInUpAnimation } from 'lib/animation';
import { socials, summaryInfo } from 'lib/info';

const Summary = () => {
  return (
    <div className="flex flex-col items-center md:items-start max-w-[450px] gap-1">
      <motion.h1
        className="text-4xl lg:text-5xl font-extrabold leading-[1]"
        {...getFadeInUpAnimation(0)}
      >
        {summaryInfo.title}
      </motion.h1>

      <motion.p
        className="text-sm lg:text-base mt-4 text-sub-text text-center md:text-start"
        {...getFadeInUpAnimation(1)}
      >
        {summaryInfo.subTitle}
      </motion.p>

      <motion.div
        className="flex items-center gap-3 mt-4"
        {...getFadeInUpAnimation(2)}
      >
        {socials.map(social => (
          <a
            key={social.name}
            href={social.link}
            aria-label={social.name}
            target="_blank"
            rel="noreferrer"
            className="duration-200 hover:opacity-70"
          >
            {social.children}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export { Summary };
