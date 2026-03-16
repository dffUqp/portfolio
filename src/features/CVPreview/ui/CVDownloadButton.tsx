'use client';

import { FC } from 'react';

import { Button } from 'components/atoms/button';

interface CVDownloadButtonProps {
  cvLink: string;
}

const CVDownloadButton: FC<CVDownloadButtonProps> = ({ cvLink }) => {
  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = cvLink;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button className="w-full" onClick={handleCVDownload}>
      Download
    </Button>
  );
};

export { CVDownloadButton };
