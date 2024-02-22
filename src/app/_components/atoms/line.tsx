'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from '@/styles/atoms/line.module.scss';
import { LineProps } from '@/components/types';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}
export default function Line({ additionalClass }: LineProps) {
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
          invalidateOnRefresh: true,
        },
      });
    },
    { revertOnUpdate: true },
  );

  const classes = `${styles.line} ${additionalClass}`;

  return (
    <>
      <hr className={classes} ref={lineRef} />
    </>
  );
}
