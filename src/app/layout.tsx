import React from 'react';
import { Raleway } from 'next/font/google';
import Navbar from '@/components/organisms/navbar';
import LenisScroller from '@/components/atoms/lenisScroller';
import Modal from '@/components/molecules/modal';
import Offset from '@/components/atoms/offset';
import 'normalize.css';
import '@/styles/global.scss';

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <main style={raleway.style}>
          <Navbar />
          <Offset />
          {children}
          <LenisScroller />
          <Modal />
        </main>
      </body>
    </html>
  );
}
