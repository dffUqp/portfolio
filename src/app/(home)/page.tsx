import { getInfo } from './getInfoAction';
import { CVWidget } from './ui/CVWidget';
import { HeroWidget } from './ui/HeroWidget';
import { SectionTracker } from './ui/SectionTracker';
import { ThemeSwitch } from './ui/ThemeSwitch';

const HomePage = async () => {
  const portfolioInfo = await getInfo();

  return (
    <>
      <ThemeSwitch />

      <HeroWidget portfolioInfo={portfolioInfo} />

      <SectionTracker>
        <CVWidget />
      </SectionTracker>
    </>
  );
};

export default HomePage;
