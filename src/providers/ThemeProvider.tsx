'use client';

import { flushSync } from 'react-dom';

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
  useTheme,
} from 'next-themes';

const forceRepaint = () => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    document.body.offsetHeight;
    document.body.getBoundingClientRect();

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    getComputedStyle(document.documentElement).opacity;

    document.documentElement.style.willChange = 'transform';
    requestAnimationFrame(() => {
      document.documentElement.style.willChange = '';
    });
  } catch {
    //
  }
};

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
          flushSync(() => {
            themeProps.setTheme(mode);
            // Try forcing repaint immediately after theme set to make it work on mobile
            forceRepaint();
          });
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
