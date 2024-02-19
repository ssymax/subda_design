'use client';

import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function LenisScroller() {
  const pathname = usePathname();
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    lenis.scrollTo(0);

    return () => {
      lenis.scrollTo(0, { immediate: true });
      lenis.destroy();
    };
  }, [pathname]);

  return <></>;
}
