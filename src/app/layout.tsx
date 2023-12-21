import React from 'react';
import { Raleway } from 'next/font/google';
import Providers from '@/providers/providers';
import StyledComponentsRegistry from '../../lib/registry';

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pl'>
      <body>
        <main className={raleway.className}>
          <StyledComponentsRegistry>
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  );
}
