import { ComponentProps, FC } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from 'utils/cn';

const buttonVariants = cva(
  'cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0',
  {
    variants: {
      variant: {
        default:
          'text-sm font-medium bg-indigo-500 text-white shadow-xs hover:bg-indigo-600/90',
        link: 'text-indigo-400 hover:underline',
      },
      size: {
        default: 'rounded-md h-10 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  ...rest
}) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    />
  );
};

export { Button, buttonVariants };
