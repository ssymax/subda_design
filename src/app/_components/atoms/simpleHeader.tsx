'use client';

import { useRef } from 'react';
import Line from '@/components/atoms/line';
import { SimpleHeaderProps } from '@/components/types';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from '@/styles/atoms/simpleHeader.module.scss';
import clsx from 'clsx';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

export default function SimpleHeader({
  header,
  isPageHeader,
  fontSize,
  alignLeft,
  lineHeight,
}: SimpleHeaderProps) {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;
      const text = SplitType.create(headerRef.current, { types: 'words' });
      const { words } = text;
      gsap.from(words, {
        yPercent: 200,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: headerRef.current.parentElement,
          start: 'top-=200px center',
        },
      });
    },
    { scope: headerRef },
  );

  const headerClass = clsx(styles.header, {
    [styles['header--page']]: isPageHeader,
    [styles['header--line']]: lineHeight,
    [styles['header--align']]: alignLeft,
  });

  return (
    <div className={styles.overflow}>
      <div
        ref={headerRef}
        className={headerClass}
        style={{
          fontSize: `${fontSize}`,
        }}
      >
        {header}
      </div>
      {isPageHeader && <Line />}
    </div>
  );
}
