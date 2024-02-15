'use client';

import { useRef } from 'react';
import styled from 'styled-components';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

const Hr = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.colors.dark};
  width: 100%;
`;

export default function Line() {
  const lineRef = useRef(null);
  useGSAP(
    () => {
      if (!lineRef.current) return;
      gsap.from(lineRef.current, {
        width: 0,
        duration: 0.8,
        ease: 'expo.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top bottom',
        },
      });
    },
    { revertOnUpdate: true },
  );

  return (
    <>
      <Hr ref={lineRef} />
    </>
  );
}
