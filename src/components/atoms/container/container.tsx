import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';

import { cn } from 'utils/cn';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  padding?: boolean;
  children: ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, padding = true, children, ...rest }, ref) => (
    <section
      className={cn(
        'mx-auto w-full max-w-[1328px]',
        { 'px-6': padding },
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </section>
  ),
);

Container.displayName = 'Container';
export { Container };
