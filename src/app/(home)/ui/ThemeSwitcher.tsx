'use client';

import { useEffect, useState } from 'react';

import { MoonStar, Sun } from 'lucide-react';
import { motion } from 'motion/react';

import { useAnimatedTheme } from 'providers/ThemeProvider';

import { Button } from 'components/atoms/button';
import { FixedContentWrapper } from 'components/atoms/fixed-content-wrapper';

import { getFadeInUpAnimation } from 'lib/animation';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useAnimatedTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <FixedContentWrapper className="lg:fixed absolute top-6 right-6 z-20">
      <motion.div {...getFadeInUpAnimation(9)}>
        <Button
          onClick={() => {
            setTheme(isDarkMode ? 'light' : 'dark');
          }}
          variant="ghost"
          size="icon"
        >
          {isDarkMode ? <Sun /> : <MoonStar />}
        </Button>
      </motion.div>
    </FixedContentWrapper>
  );
};

export { ThemeChanger };
