'use client';

import { Summary } from 'features/Summary';
import { Container } from 'shared/ui';

import { useScrollProgress } from '../providers/PageScrollProgressProvider';

const expInfo = [
  {
    jobTitle: 'Front-End Developer at OTAKOYI',
    date: 'Aug 2024 - Present',
    companyDesc: 'Global IT service provider with 200+ projects',
    bulletPoints: [
      'Developed a B2B e-learning system with a Next.js/MUI architecture for a leading course provider, achieving a 90%+ satisfaction rate among early users.',
      'Mentored a team of 2 front-end developers, implementing code standards and contributing to a highly productive and efficient work environment.',
    ],
  },
  {
    jobTitle: 'Full-Stack Developer at Lumitech',
    date: 'Jul 2023 - Aug 2024',
    companyDesc: 'International IT service provider',
    bulletPoints: [
      'Delivered a large-scale CRM system to manage internal products for a leading digital verification company, using a custom-built, fully accessible UI kit compliant with WCAG and ARIA standards.',
      'Developed a proof-of-concept application for a startup in the finance domain using D3.js and Recharts, contributing to successful investment funding.',
      'Led the development of an AI-based social networking platform, designing the architecture and implementing features such as real-time chat, multi-step forms, and UI with complex transitions.',
      "Contributed to a real estate CRM monorepo by successfully completing Google's security assessment, preventing vulnerabilities that could expose sensitive user data and source maps.",
    ],
  },
  {
    jobTitle: 'Full-Stack Mentor at Mate Academy (Part-time)',
    date: 'Jun 2023 - Aug 2024',
    companyDesc: 'Leading Ukrainian EdTech company',
    bulletPoints: [
      "Improved students' technical skills through detailed code reviews and Q&A sessions for front-end and back-end courses, leading to higher job placement rates.",
      'Prepared students for real-world scenarios by conducting mock technical interviews, improving their confidence and interview skills',
    ],
  },
  {
    jobTitle: 'Front-End Developer at DevelopsToday',
    date: 'Jan 2022 - Jun 2023',
    companyDesc: 'Global IT service provider',
    bulletPoints: [
      'Independently maintained a React Native finance app, focusing on the successful release of version 2.0, which increased user engagement by 25% and reduced bug reports by 17%.',
      'Contributed to the development of a digital accounting application using React, React Context, and Bootstrap.',
    ],
  },
];

const HomePage = () => {
  const { targetBlockRef } = useScrollProgress();

  return (
    <Container>
      <div className="relative z-50 w-full flex justify-between text-white">
        <div className="h-screen sticky top-0 flex items-center">
          <Summary />
        </div>

        <div className="basis-[50%] relative">
          <div className="sticky top-1 bg-transparent w-full h-[300px] z-20 pointer-events-none" />

          <div className="flex flex-col gap-6">
            {expInfo.map(info => (
              <div key={info.jobTitle} className="flex flex-col">
                <div className="flex justify-between w-full font-bold text-md">
                  <h3>{info.jobTitle}</h3>
                  <p>{info.date}</p>
                </div>
                <span className="block text-sm">{info.companyDesc}</span>
                <ul className="flex flex-col gap-2 mt-1.5 list-disc">
                  {info.bulletPoints.map(bulletPoint => {
                    return (
                      <li key={bulletPoint}>
                        <span>{bulletPoint}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="sticky bottom-0 bg-transparent w-full h-[300px] z-20 pointer-events-none" />
        </div>
      </div>

      <div
        ref={targetBlockRef}
        className="h-[100vh] flex justify-center items-center text-white"
      >
        Test
      </div>
    </Container>
  );
};

export default HomePage;
