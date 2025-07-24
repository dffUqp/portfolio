import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { PageScrollProgressProvider } from 'providers';
import { MainLayout } from 'widgets/MainLayout';

import 'app/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-Inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Yurii Vasylchuk | Portfolio',
  description: 'Portfolio of Yurii Vasylchuk',
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageScrollProgressProvider>
          <MainLayout>{children}</MainLayout>
        </PageScrollProgressProvider>
      </body>
    </html>
  );
}
