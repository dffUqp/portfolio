import { Experience, Summary } from 'features';
import { Container } from 'shared/ui';

const HeroWidget = () => {
  return (
    <Container>
      <div className="relative z-50 w-full flex justify-between text-white">
        <div className="h-screen sticky top-0 flex items-center">
          <Summary />
        </div>

        <div className="basis-[50%]">
          <Experience />
        </div>
      </div>
    </Container>
  );
};

export { HeroWidget };
