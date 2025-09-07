'use client';

import { CVPreview } from 'features';
import { Container } from 'shared/ui';

const CVWidget = () => {
  return (
    <Container>
      <div className="h-[100vh] flex flex-col justify-center items-center text-white">
        <div className="w-full flex justify-around mt-6 items-center">
          <CVPreview />

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
