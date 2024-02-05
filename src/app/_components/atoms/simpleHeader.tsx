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
`;

export default function SimpleHeader({
  header,
  isPageHeader,
  fontSize,
  paddingBottom,
  textAlign,
  lineHeight,
}: SimpleHeaderProps) {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;
      const text = SplitType.create(headerRef.current, { types: 'words' });
      const { words } = text;
      gsap.from(words, {
        yPercent: 200,
        ease: 'ease.out',
        stagger: 0.05,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: headerRef.current.parentElement,
          start: 'top-=200px center',
        },
      });
    },
    { scope: headerRef, revertOnUpdate: true },
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
      >
        {header}
      </Header>
      {isPageHeader && <Line />}
    </div>
  );
}
