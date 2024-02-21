'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ParallaxProps } from '@/components/types';
import { useGSAP } from '@gsap/react';
import { maxQuery, minQuery } from '@/styles/constants';
import styles from '@/styles/atoms/parallax.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
    <div className={styles.parallax}>
      <Image ref={imageRef} src={src} alt='' sizes='100vw' />
    </div>
  );
}
