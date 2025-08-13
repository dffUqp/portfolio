'use client';

import { Document, Page, pdfjs } from 'react-pdf';

import { Button, Container } from 'shared/ui';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const CVWidget = () => {
  return (
    <Container>
      <div className="h-[100vh] flex flex-col justify-center items-center text-white">
        <div className="w-full flex justify-around mt-6 items-center">
          <div className="flex flex-col gap-4 items-center">
            <Document file="./pdf/Yurii_Vasylchuk_CV.pdf">
              <Page
                pageNumber={1}
                width={260}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>

            <Button className="w-full">Download</Button>
            <a
              href="mailto:yuriivasylchuk.work@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              Contact via email
            </a>
          </div>

          <div className="flex flex-col basis-[45%] gap-4">
            <h3 className="text-3xl font-bold">Professional Resume</h3>

            <p className="text-gray-400">
              Explore my professional background, experience, and technical
              expertise. My CV highlights a track record of delivering impactful
              software solutions, leading projects from concept to launch, and
              collaborating with teams to achieve ambitious goals. You can
              download a PDF copy to review my work history, skills, and
              education in detail, or reach out directly via email for
              collaborations, opportunities, or further information.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { CVWidget };
