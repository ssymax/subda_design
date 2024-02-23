'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { HomeReferenceCardProps } from '@/components/types';
import { useGSAP } from '@gsap/react';
import styles from '@/styles/molecules/homeReferenceCard.module.scss';

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

      if (tl.isActive()) return;
      tl.clear();

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
    <div className={styles.card}>
      <span className={styles.description} ref={descriptionRef}>
        {description}
      </span>
      <span className={styles.name} ref={nameRef}>{`${name}, ${place}`}</span>
    </div>
  );
}
