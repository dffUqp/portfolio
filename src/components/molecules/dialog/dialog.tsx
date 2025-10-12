'use client';

import { ComponentProps, FC } from 'react';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from 'lib/cn';

const Dialog: FC<ComponentProps<typeof DialogPrimitive.Root>> = props => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
};

const DialogTrigger: FC<
  ComponentProps<typeof DialogPrimitive.Trigger>
> = props => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
};

const DialogPortal: FC<
  ComponentProps<typeof DialogPrimitive.Portal>
> = props => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};

const DialogClose: FC<ComponentProps<typeof DialogPrimitive.Close>> = ({
  className,
  ...rest
}) => {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-close"
      className={cn(
        "rounded-xs focus:ring-2 focus:ring-offset-2 focus:outline-hidden [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-8",
        className,
      )}
      {...rest}
    />
  );
};

const DialogOverlay: FC<ComponentProps<typeof DialogPrimitive.Overlay>> = ({
  className,
  ...rest
}) => {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...rest}
    />
  );
};

const DialogContent: FC<ComponentProps<typeof DialogPrimitive.Content>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'height-full flex flex-col grow w-[calc(100%_-_80px)] h-[calc(100%_-_80px)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%] duration-200',
          className,
        )}
        {...rest}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
};

const DialogHeader = ({ className, ...rest }: ComponentProps<'div'>) => {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        'flex items-center gap-2 text-white text-center sm:text-left',
        className,
      )}
      {...rest}
    />
  );
};

const DialogTitle = ({
  className,
  ...rest
}: ComponentProps<typeof DialogPrimitive.Title>) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...rest}
    />
  );
};

const DialogDescription = ({
  className,
  ...rest
}: ComponentProps<typeof DialogPrimitive.Description>) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...rest}
    />
  );
};

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
