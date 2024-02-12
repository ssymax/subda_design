'use client';

import styled from 'styled-components';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import RealizationItem from '@/components/molecules/realizationItem';
import { RealizationsContainerProps } from '@/components/types';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Wrapper = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  grid-template-rows: auto;
  gap: 4rem;
  ${({ theme }) => theme.maxWidth.lg} {
    display: flex;
    flex-direction: column;
  }
`;

export default function RealizationsContainer({
  realizations,
}: RealizationsContainerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapperRef.current) return;
      const items = gsap.utils.toArray(wrapperRef.current.children) as HTMLElement[];

      items.forEach((item, i) => {
        gsap.from(item, {
          autoAlpha: 0,
          x: i % 2 === 0 ? -20 : 20,
          y: 20,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top+=200px bottom',
          },
        });
      });
    },
    { scope: wrapperRef, revertOnUpdate: true, dependencies: realizations },
  );

  return (
    <Wrapper ref={wrapperRef}>
      {realizations?.map((r) => <RealizationItem key={r.id} {...r} />)}
    </Wrapper>
  );
}
