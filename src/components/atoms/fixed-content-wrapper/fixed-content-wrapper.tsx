import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import { cn } from 'lib/cn';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  children: ReactNode;
}

const FixedContentWrapper: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('fixed flex', className)}>
      {children}

      {/* https://github.com/radix-ui/website/blob/8c5a605f07879131e0f7a7e3fd777bb3604672d1/pages/docs/design-system/overview/%5Bslug%5D.tsx#L34-L41 */}
      <div className="w-[var(--removed-body-scroll-bar-size)] h-full" />
    </div>
  );
};

export { FixedContentWrapper };
