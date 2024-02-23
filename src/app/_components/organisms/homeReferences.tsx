/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitType from 'split-type';
import clsx from 'clsx';
import HomeHeader from '@/components/atoms/homeHeader';
import HomeReferenceCard from '@/components/molecules/homeReferenceCard';
import Line from '@/components/atoms/line';
import Parallax from '@/components/atoms/parallax';
import { opinions } from '@/lib/constants';
import styles from '@/styles/organisms/homeReferences.module.scss';
import ArrowIcon from '../../../../public/images/arrow.svg';
import bathroom from '../../../../public/bathroom.jpg';

export default function HomeReferences() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tl = gsap.timeline();
  useGSAP(
    () => {
      const text = SplitType.create('[class*="description"]', { types: 'lines' });
      const { lines } = text;

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
        '[class*="name"]',
        {
          x: -20,
          autoAlpha: 0,
          duration: 0.1,
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
    { dependencies: [activeIndex] },
  );

  const handleClickNext = () => {
    if (tl.isActive()) return;

    if (activeIndex === opinions.length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };

  const handleClickPrev = () => {
    if (tl.isActive()) return;
    if (activeIndex === 0) setActiveIndex(opinions.length - 1);
    else setActiveIndex(activeIndex - 1);
  };

  const arrowButtonProps = {
    role: 'button',
    tabIndex: 0,
  };

  const arrowClass = clsx(styles.arrow, styles['arrow--rotated']);

  return (
    <section>
      <HomeHeader smallHeader='Referencje' header='Co mówią moi klienci' />
      <div className={styles.wrapper}>
        <div
          className={styles.icon}
          {...arrowButtonProps}
          onClick={handleClickPrev}
          onKeyDown={(e) => e.key === 'Enter' && handleClickPrev()}
        >
          <ArrowIcon className={arrowClass} />
        </div>
        <HomeReferenceCard {...opinions[activeIndex]} />
        <div
          className={styles.icon}
          {...arrowButtonProps}
          onClick={handleClickNext}
          onKeyDown={(e) => e.key === 'Enter' && handleClickNext()}
        >
          <ArrowIcon className={styles.arrow} />
        </div>
      </div>
      <Line />
      <Parallax src={bathroom} />
    </section>
  );
}
