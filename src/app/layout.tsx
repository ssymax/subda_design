'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Raleway } from 'next/font/google';
import Providers from '@/providers/providers';
import StyledComponentsRegistry from '../../lib/registry';

const DynamicNavbar = dynamic(() => import('@/components/organisms/navbar'), {
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
        <main className={raleway.className}>
          <StyledComponentsRegistry>
            <Providers>
              <DynamicNavbar />
              <Divider />
              {children}
            </Providers>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
