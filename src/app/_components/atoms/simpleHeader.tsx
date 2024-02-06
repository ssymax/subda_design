'use client';

import { useRef } from 'react';
import styled from 'styled-components';
import Line from '@/components/atoms/line';
import { SimpleHeaderProps } from '@/components/types';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

const Header = styled.h1<{
  $fontSize?: string;
  $paddingBottom?: string;
  $isPageHeader?: boolean;
  $textAlign?: string;
  $lineHeight?: string;
  $mobileFont?: boolean;
}>`
  overflow: hidden;
  font-size: ${({ $fontSize }) => $fontSize || '9.6rem'};
  padding: ${({ $paddingBottom }) => $paddingBottom || 0};
  text-transform: uppercase;
  line-height: ${({ $lineHeight }) => $lineHeight || '100%'};
  font-weight: 800;
  margin: ${({ $isPageHeader }) => $isPageHeader && '4rem 0'};
  text-align: ${({ $textAlign, $isPageHeader }) =>
    $textAlign || ($isPageHeader && 'center')};
  ${({ theme }) => theme.maxWidth.lg} {
    font-weight: 700;
    font-size: 4rem;
  }
  ${({ theme }) => theme.maxWidth.md} {
    font-size: ${({ $mobileFont }) => $mobileFont && '2.5rem;'};
  }
`;

export default function SimpleHeader({
  header,
  isPageHeader,
  fontSize,
  paddingBottom,
  textAlign,
  lineHeight,
  mobileFont,
}: SimpleHeaderProps) {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;
      const text = SplitType.create(headerRef.current, { types: 'words' });
      const { words } = text;
      gsap.from(words, {
        yPercent: 200,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: headerRef.current.parentElement,
          start: 'top-=200px center',
        },
      });
    },
    { scope: headerRef },
  );

  return (
    <div style={{ overflow: 'hidden' }}>
      <Header
        ref={headerRef}
        $fontSize={fontSize}
        $paddingBottom={paddingBottom}
        $isPageHeader={isPageHeader}
        $textAlign={textAlign}
        $lineHeight={lineHeight}
        $mobileFont={mobileFont}
      >
        {header}
      </Header>
      {isPageHeader && <Line className='line' />}
    </div>
  );
}
