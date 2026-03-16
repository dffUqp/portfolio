'use client';

import { PropsWithChildren } from 'react';

import { useSectionScrollProgress } from 'providers/SectionScrollProvider';

const SectionTracker = ({ children }: PropsWithChildren) => {
  const { targetSection } = useSectionScrollProgress();

  return <div ref={targetSection}>{children}</div>;
};

export { SectionTracker };
