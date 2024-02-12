'use client';

import { useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import SplitType from 'split-type';
import { HomeReferenceCardProps } from '@/components/types';
import { useGSAP } from '@gsap/react';

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  row-gap: 2.5rem;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  padding: 2rem 6rem;
  ${({ theme }) => theme.maxWidth.lg} {
    font-size: 1.6rem;
    padding: 1rem 2rem;
  }
`;

const Description = styled.span`
  text-align: center;
  line-height: 150%;
`;

const NameAndPlace = styled.span`
  text-transform: uppercase;
`;

export default function HomeReferenceCard({
  name,
  description,
  place,
  id,
}: HomeReferenceCardProps) {
  const descriptionRef = useRef<HTMLSpanElement | null>(null);
  const nameRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      if (!descriptionRef.current) return;
      if (!nameRef.current) return;
      const text = SplitType.create(descriptionRef.current, { types: 'lines' });
      const { lines } = text;
      const tl = gsap.timeline();

      tl.fromTo(
        lines,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power4.out',
        },
      ).fromTo(
        nameRef.current,
        {
          x: -20,
          autoAlpha: 0,
          duration: 0.2,
        },
        {
          x: 0,
          autoAlpha: 1,
          onComplete: () => {
            text.revert();
            tl.kill();
          },
        },
      );
    },
    { dependencies: [id] },
  );

  return (
    <Card>
      <Description ref={descriptionRef}>{description}</Description>
      <NameAndPlace ref={nameRef}>{`${name}, ${place}`}</NameAndPlace>
    </Card>
  );
}
