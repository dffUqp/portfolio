'use client';

import { FC, SVGProps } from 'react';

import { motion } from 'motion/react';

import { Envelope, Github, Linkedin } from 'components/atoms/icons';

import { getFadeInUpAnimation } from 'lib/animation';
import { SocialIconKey, SocialItemType, SummaryType } from 'lib/info';

const ICON_MAP: Record<SocialIconKey, FC<SVGProps<SVGSVGElement>>> = {
  Github,
  Linkedin,
  Envelope,
};

interface SummaryProps {
  summary: SummaryType;
  socials: SocialItemType[];
}

const Summary: FC<SummaryProps> = ({ summary, socials }) => {
  return (
    <div className="flex flex-col items-center md:items-start max-w-[450px] gap-1">
      <motion.h1
        className="text-4xl lg:text-5xl font-extrabold leading-[1]"
        {...getFadeInUpAnimation(0)}
      >
        {summary.title}
      </motion.h1>

      <motion.p
        className="text-sm lg:text-base mt-4 text-sub-text text-center md:text-start"
        {...getFadeInUpAnimation(1)}
      >
        {summary.subTitle}
      </motion.p>

      <motion.div
        className="flex items-center gap-3 mt-4"
        {...getFadeInUpAnimation(2)}
      >
        {socials.map(social => {
          const SocialIcon = ICON_MAP[social.icon];

          return (
            <a
              key={social.name}
              href={social.link}
              aria-label={social.name}
              target="_blank"
              rel="noreferrer"
              className="duration-200 hover:opacity-70"
            >
              <SocialIcon className="w-7 h-7 lg:w-8 lg:h-8" />
            </a>
          );
        })}
      </motion.div>
    </div>
  );
};

export { Summary };
