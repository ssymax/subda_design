'use client';

import React from 'react';
import styled from 'styled-components';
import { Raleway } from 'next/font/google';
import Providers from '@/providers/providers';
import Navbar from '@/components/organisms/navbar';
import Foot from '@/components/organisms/foot';
import StyledComponentsRegistry from '../../lib/registry';

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const Divider = styled.div`
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.primary};
  ${({ theme }) => theme.maxWidth.lg} {
    height: 6rem;
  }
`;

const PagesWrapper = styled.div`
  padding: 0 5.5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    padding: 0 2.4rem;
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pl'>
      <body>
        <main className={raleway.className}>
          <StyledComponentsRegistry>
            <Providers>
              <Navbar />
              <Divider />
              <PagesWrapper>
                {children}
                <Foot />
              </PagesWrapper>
            </Providers>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
