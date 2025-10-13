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
          flushSync(() => {
            setTimeout(() => {
              themeProps.setTheme(mode);
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              document.body.offsetHeight;
              console.log(document.body.offsetHeight);
            }, 0);
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
