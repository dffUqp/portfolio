import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import { cn } from 'utils/cn';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  padding?: boolean;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({
  className,
  padding = true,
  children,
  ...rest
}) => (
  <section
    className={cn(
      'mx-auto w-full max-w-[1328px]',
      { 'px-6': padding },
      className,
    )}
    {...rest}
  >
    {children}
  </section>
);

export { Container };
