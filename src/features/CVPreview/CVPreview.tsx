import Image from 'next/image';

import { env } from 'env';

import { Button } from 'components/atoms/button';

import { CVDownloadButton } from './ui/CVDownloadButton';
import { CVPreviewDialog } from './ui/CVPreviewDialog';

const CVImage = () => {
  return (
    <Image
      src={`${env.BLOB_BASE_URL}/Yurii_Vasylchuk_CV.png`}
      alt="Preview of the CV"
      width={260}
      height={336}
      unoptimized
      quality={100}
    />
  );
};

const CVPreview = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="block md:hidden">
        <CVImage />
      </div>

      <CVPreviewDialog
        cvLink={`${env.BLOB_BASE_URL}/Yurii_Vasylchuk_CV.pdf`}
        className="hidden md:block group relative cursor-pointer"
      >
        <CVImage />

        <div className="text-primary-text top-0 absolute w-full h-full duration-150 flex opacity-0 invisible justify-center items-center group-focus:opacity-100 group-focus:visible group-hover:opacity-100 group-hover:visible">
          <span className="relative z-2 text-">Open CV Preview</span>
          <div
            className="bg-gradient-to-b from-transparent to-[hsla(210,60%,98%,0.6)] dark:to-[rgb(3,7,18,0.8)]"
            style={{
              opacity: 1,
              position: 'absolute',
              bottom: 0,
              height: '100%',
              left: 0,
              right: 0,
              zIndex: 1,
            }}
          />
        </div>
      </CVPreviewDialog>

      <CVDownloadButton
        cvLink={`${env.BLOB_BASE_URL}/Yurii_Vasylchuk_CV.pdf`}
      />
      <Button asChild variant="link">
        <a href="mailto:yuriivasylchuk.work@gmail.com">Contact via email</a>
      </Button>
    </div>
  );
};

export { CVPreview };
