import Image from 'next/image';

import { Button, Dialog, DialogTrigger } from 'shared/ui';

import { CVPreviewDialogContent } from './ui';

const CVPreview = () => {
  const renderCVPreviewImage = () => {
    return (
      <Image
        src="/Yurii_Vasylchuk_CV.png"
        alt="Preview of the CV"
        width={260}
        height={336}
        unoptimized
        quality={100}
      />
    );
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="block md:hidden">{renderCVPreviewImage()}</div>
      <Dialog>
        <DialogTrigger className="hidden md:block group relative cursor-pointer shadow-xl">
          {renderCVPreviewImage()}

          <div className="text-white top-0 absolute w-full h-full duration-150 flex opacity-0 invisible justify-center items-center group-hover:opacity-100 group-hover:visible">
            <span className="relative z-2 text-">Click to Open</span>
            <div
              style={{
                opacity: 1,
                position: 'absolute',
                bottom: 0,
                height: '100%',
                left: 0,
                right: 0,
                zIndex: 1,
                backgroundImage: `linear-gradient(to bottom, transparent -10%, rgb(3, 7, 18, 0.8))`,
              }}
            />
          </div>
        </DialogTrigger>

        <CVPreviewDialogContent />
      </Dialog>

      <Button
        className="w-full "
        onClick={() => {
          window.open(
            `${window.location.href}/pdf/Yurii_Vasylchuk_CV.pdf`,
            '_blank',
          );
        }}
      >
        Download
      </Button>
      <a
        href="mailto:yuriivasylchuk.work@gmail.com"
        className="text-indigo-400 hover:underline h-10 px-6"
      >
        Contact via email
      </a>
    </div>
  );
};

export { CVPreview };
