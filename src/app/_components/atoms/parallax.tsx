'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bathroom from '../../../../public/bathroom.jpg';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  overflow: hidden;
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

export default function Parallax() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!wrapperRef.current) return;

      const animation = gsap.fromTo(
        wrapperRef.current,
        {
          y: '-15%',
          ease: 'expo.inOut',
        },
        {
          y: '+15%',
        },
      );

      ScrollTrigger.create({
        animation,
        trigger: wrapperRef.current.parentElement,
        scrub: 2,
        start: 'top bottom',
        end: 'bottom top',
      });
    },
    { scope: wrapperRef },
  );

  return (
    <Section>
      <div ref={wrapperRef}>
        <StyledImage src={bathroom} alt='' />
      </div>
    </Section>
  );
}
