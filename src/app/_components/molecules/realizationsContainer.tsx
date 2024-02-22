'use client';

import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import RealizationItem from '@/components/molecules/realizationItem';
import { RealizationsContainerProps } from '@/components/types';
import styles from '@/styles/molecules/realizationsContainer.module.scss';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
    <div className={styles.container} ref={wrapperRef}>
      {realizations?.map((r) => <RealizationItem key={r.id} {...r} />)}
    </div>
  );
}
