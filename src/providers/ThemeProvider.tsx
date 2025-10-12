'use client';

import { flushSync } from 'react-dom';

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
  useTheme,
} from 'next-themes';

const useAnimatedTheme = () => {
  const themeProps = useTheme();

  return {
    ...themeProps,
    setTheme: (mode: string) => {
      if (themeProps.theme === mode) {
        return;
      }

      if (document.startViewTransition) {
        document.startViewTransition(() => {
          flushSync(() => themeProps.setTheme(mode));
        });
      } else {
        themeProps.setTheme(mode);
      }
    },
  };
};

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export { ThemeProvider, useAnimatedTheme };
