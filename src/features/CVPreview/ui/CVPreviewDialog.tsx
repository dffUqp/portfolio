import { ComponentProps, FC, PropsWithChildren } from 'react';

import { XIcon } from 'lucide-react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/molecules/dialog';

interface CVPreviewDialogProps
  extends PropsWithChildren,
    ComponentProps<typeof Dialog> {
  className: string;
}

const CVPreviewDialog: FC<CVPreviewDialogProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Dialog {...rest}>
      <DialogTrigger className={className}>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader className="justify-between bg-neutral-600 black py-3 px-6">
          <div className="flex items-center">
            <DialogTitle>Preview of the CV</DialogTitle>
          </div>

          <DialogClose>
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="grow height-full">
          <object
            data="./pdf/Yurii_Vasylchuk_CV.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            title="Embedded PDF Viewer"
          >
            <iframe
              src="./pdf/Yurii_Vasylchuk_CV.pdf"
              width="100%"
              height="100%"
              title="Fallback PDF Viewer"
            >
              <p>Your browser does not support PDFs.</p>
            </iframe>
          </object>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CVPreviewDialog;
