import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';

import { SectionScrollProvider } from 'providers/SectionScrollProvider';

import { MainLayout } from 'components/templates/MainLayout';

import 'app/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-Inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Yurii Vasylchuk | Personal Website',
  description: 'Personal website of Yurii Vasylchuk.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SectionScrollProvider>
          <MainLayout>{children}</MainLayout>
        </SectionScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
