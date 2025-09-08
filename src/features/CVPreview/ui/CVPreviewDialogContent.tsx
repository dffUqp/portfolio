import React from 'react';

import { XIcon } from 'lucide-react';

import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from 'components/molecules/dialog';

const CVPreviewDialogContent = () => {
  return (
    <DialogContent>
      <DialogHeader className="justify-between bg-neutral-600 black py-3 px-6">
        <div className="flex items-center">
          <DialogTitle>Preview of the CV</DialogTitle>
        </div>

        <DialogClose
          data-slot="dialog-close"
          className="rounded-xs focus:ring-2 focus:ring-offset-2 focus:outline-hidden [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-8"
        >
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
  );
};

export { CVPreviewDialogContent };
