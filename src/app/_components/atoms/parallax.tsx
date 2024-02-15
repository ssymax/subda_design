'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ParallaxProps } from '@/components/types';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Section = styled.section`
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  overflow: hidden;
  margin: 5rem 0;
  ${({ theme }) => theme.maxWidth.lg} {
    height: 20rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  z-index: -1;
  ${({ theme }) => theme.maxWidth.lg} {
    max-width: 120%;
    height: auto;
  }
`;

export default function Parallax({ src }: ParallaxProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (!wrapperRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 2,
        },
      });
      const movement = wrapperRef.current.offsetHeight * 0.2;
      tl.to(wrapperRef.current, { y: movement, ease: 'none' }, 0);
    }, 1000);
  });

  return (
    <Section>
      <div ref={wrapperRef}>
        <StyledImage src={src} alt='' />
      </div>
    </Section>
  );
}
