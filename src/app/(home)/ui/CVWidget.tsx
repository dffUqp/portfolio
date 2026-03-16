import { CVPreview } from 'features/CVPreview';

import { Container } from 'components/atoms/container/container';

const CVWidget = () => {
  return (
    <Container>
      <div className="pt-[80px] pb-[50px] min-h-[100dvh] flex flex-col justify-center items-center text-white">
        <div className="w-full flex flex-col-reverse md:flex-row justify-around gap-6 mt-6 items-center">
          <CVPreview />

          <div className="flex flex-col md:text-start text-center md:basis-[45%] gap-4">
            <h3 className="text-primary-text text-2xl md:text-3xl font-bold">
              Professional Resume
            </h3>

            <p className="text-sub-text text-sm md:text-base">
              Explore my professional background, experience, and technical
              expertise. My CV highlights a track record of delivering impactful
              software solutions, leading projects from concept to launch, and
              collaborating with teams to achieve ambitious goals. You can
              download a PDF copy to review my work history, skills in detail,
              or reach out directly via email for collaborations, opportunities,
              or further information.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { CVWidget };
