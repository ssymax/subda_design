'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from '@/styles/atoms/line.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}
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
      <hr className={styles.line} ref={lineRef} />
    </>
  );
}
