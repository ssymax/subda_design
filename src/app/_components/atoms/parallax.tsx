'use client';

import { useRef } from 'react';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  z-index: -1;
  ${({ theme }) => theme.maxWidth.lg} {
    max-width: 120%;
    height: auto;
  }
`;

const src = `https://i.iplsc.com/-/000I86TGAUEIDACW-C324-F4.webp`;

export default function Parallax() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
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
      start: 'top center',
      end: 'bottom top',
    });
  });

  return (
    <Section>
      <div ref={wrapperRef}>
        <Image src={src} alt='' />
      </div>
    </Section>
  );
}
