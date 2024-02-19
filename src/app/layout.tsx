'use client';

import React from 'react';
import styled from 'styled-components';
import Navbar from '@/components/organisms/navbar';
import Modal from '@/components/molecules/modal';
import Providers from '@/providers/providers';
import StyledComponentsRegistry from '../../lib/registry';
import LenisScroller from './_components/atoms/lenisScroller';

// const raleway = Raleway({
//   weight: ['300', '400', '500', '600', '700', '800'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap',
// });

const Divider = styled.div`
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => theme.maxWidth.lg} {
    height: 6rem;
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <main>
          <StyledComponentsRegistry>
            <Providers>
              <Navbar />
              <Divider />
              {children}
              <LenisScroller />
              <Modal />
            </Providers>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
