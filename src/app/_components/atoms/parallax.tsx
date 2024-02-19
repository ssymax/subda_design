'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ParallaxProps } from '@/components/types';
import { useGSAP } from '@gsap/react';
import { maxQuery, minQuery } from '@/app/_styles/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Section = styled.section`
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  margin: 5rem 0;
  overflow: hidden;
  position: relative;
  ${({ theme }) => theme.maxWidth.lg} {
    height: 20rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  position: absolute;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 150%;
    height: auto;
  }
`;

export default function Parallax({ src }: ParallaxProps) {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      if (!imageRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top-=100px center',
          end: 'bottom center',
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      const mobileTl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      const mm = gsap.matchMedia();
      const movement = imageRef.current.offsetHeight * 0.15;
      const mobileMovement = imageRef.current.offsetHeight * 0.1;
      mm.add(minQuery.lg, () => {
        tl.to(imageRef.current, { y: movement, ease: 'none' }, 0);
      });
      mm.add(maxQuery.lg, () => {
        mobileTl.to(imageRef.current, { y: mobileMovement, ease: 'none' }, 0);
      });
    },
    { scope: imageRef, revertOnUpdate: true },
  );

  return (
    <Section>
      <StyledImage ref={imageRef} src={src} alt='' sizes='100vw' />
    </Section>
  );
}
