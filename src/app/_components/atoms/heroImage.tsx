'use client';

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { minQuery } from '@/styles/constants';
import styles from '@/styles/atoms/heroImage.module.scss';
import hero from '../../../../public/hero.png';
import heroMobile from '../../../../public/hero_mobile.png';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

export default function HeroImage() {
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!imageRef.current) return;
      const mm = gsap.matchMedia();
      mm.add(minQuery.lg, () => {
        gsap.to(imageRef.current, {
          y: -70,
          filter: 'blur(5px)',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top top',
            end: 'bottom top-=70',
            pin: true,
            pinSpacing: false,
            scrub: 2,
            invalidateOnRefresh: true,
            markers: true,
          },
        });
      });
    },
    { revertOnUpdate: true },
  );

  return (
    <div className={styles.imageWrapper} ref={imageRef}>
      <Image
        priority
        className={styles.mobile}
        src={heroMobile}
        alt='Dom w Gryźlinach'
        sizes='100vw'
      />
      <Image
        priority
        sizes='100vw'
        className={styles.desktop}
        src={hero}
        alt='Dom w Gryźlinach'
      />
    </div>
  );
}
