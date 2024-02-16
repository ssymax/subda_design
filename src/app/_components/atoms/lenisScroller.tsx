'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function LenisScroller() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis();
    if (pathname) lenis.scrollTo(0, { immediate: true });
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return <></>;
}
