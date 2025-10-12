'use client';

import { useEffect, useState } from 'react';

import { useAnimatedTheme } from 'providers/ThemeProvider';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useAnimatedTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-2.5">
      The current theme is: {theme}
      <button
        type="button"
        className="border-2 border-amber-300 p-1.5"
        onClick={() => setTheme('light')}
      >
        Light Mode
      </button>
      <button
        type="button"
        className="border-2 border-amber-300 p-1.5"
        onClick={() => setTheme('dark')}
      >
        Dark Mode
      </button>
    </div>
  );
};

export { ThemeChanger };
