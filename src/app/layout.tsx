'use client';

import React from 'react';
import { Raleway } from 'next/font/google';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Navbar from '@/components/organisms/navbar';
import StyledComponentsRegistry from '@/lib/registry';
import LenisScroller from '@/components/atoms/lenisScroller';
import Providers from './_providers/providers';

const DynamicModal = dynamic(() => import('@/components/molecules/modal'), {
  ssr: false,
});

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

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
        <main style={raleway.style}>
          <Providers>
            <StyledComponentsRegistry>
              <div>
                <Navbar />
                <Divider />
                {children}
                <LenisScroller />
                <DynamicModal />
              </div>
            </StyledComponentsRegistry>
          </Providers>
        </main>
      </body>
    </html>
  );
}
