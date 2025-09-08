import Image from 'next/image';

import { motion } from 'motion/react';

import { getFadeInUpAnimation } from 'shared/lib';

const socials = [
  {
    iconPath: '/icons/github.svg',
    name: 'Github',
    link: 'https://github.com/dffUqp',
  },
  {
    iconPath: '/icons/linkedin.svg',
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/yuriivasylchuk/',
  },
  {
    iconPath: '/icons/envelope.svg',
    name: 'Envelope',
    link: 'mailto:yuriivasylchuk.work@gmail.com',
  },
];

const Summary = () => {
  return (
    <div className="flex flex-col items-center md:items-start max-w-[450px] gap-1">
      <motion.h1
        className="text-4xl lg:text-5xl font-extrabold leading-[1]"
        {...getFadeInUpAnimation(0)}
      >
        Yurii Vasylchuk
      </motion.h1>

      <motion.p
        className="text-sm lg:text-base mt-4 text-gray-400 text-center md:text-start"
        {...getFadeInUpAnimation(1)}
      >
        Front-End Developer with 4+ years of experience building maintainable
        web applications using React, TypeScript, and Next.js. Passionate about
        exploring technologies in depth to deliver efficient, high-quality
        solutions. Collaborative team player with experience working in
        cross-functional environments.
      </motion.p>

      <motion.div
        className="flex items-center gap-3 mt-4"
        {...getFadeInUpAnimation(2)}
      >
        {socials.map(social => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="duration-200 hover:opacity-70"
          >
            <Image
              width={32}
              height={32}
              src={social.iconPath}
              alt={social.name}
              className="w-7 h-7 lg:w-8 lg:h-8"
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export { Summary };
