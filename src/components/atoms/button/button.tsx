import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { cn } from 'utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <button
        type="button"
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0',
          'outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          'bg-indigo-500 text-white shadow-xs hover:bg-indigo-600/90',
          'h-10 rounded-md px-6',
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export { Button };
