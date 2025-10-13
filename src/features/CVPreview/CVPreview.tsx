import Image from 'next/image';

import { Button } from 'components/atoms/button';

import CVPreviewDialog from './ui/CVPreviewDialog';

const CVPreview = () => {
  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = `./pdf/Yurii_Vasylchuk_CV.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderCVImage = () => {
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
      <div className="block md:hidden">{renderCVImage()}</div>

      <CVPreviewDialog className="hidden md:block group relative cursor-pointer">
        {renderCVImage()}

        <div className="text-primary-text top-0 absolute w-full h-full duration-150 flex opacity-0 invisible justify-center items-center group-hover:opacity-100 group-hover:visible">
          <span className="relative z-2 text-">Click to Open</span>
          <div
            className="
    bg-gradient-to-b
    from-transparent
    to-[hsla(210,60%,98%,0.6)]
    dark:to-[rgb(3,7,18,0.8)]
  "
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

      <Button className="w-full" onClick={handleCVDownload}>
        Download
      </Button>
      <Button asChild variant="link">
        <a href="mailto:yuriivasylchuk.work@gmail.com">Contact via email</a>
      </Button>
    </div>
  );
};

export { CVPreview };
