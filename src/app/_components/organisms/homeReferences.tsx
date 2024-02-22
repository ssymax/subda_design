/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { useState } from 'react';
import HomeHeader from '@/components/atoms/homeHeader';
import clsx from 'clsx';
import HomeReferenceCard from '@/components/molecules/homeReferenceCard';
import Line from '@/components/atoms/line';
import Parallax from '@/components/atoms/parallax';
import { opinions } from '@/lib/constants';
import styles from '@/styles/organisms/homeReferences.module.scss';
import ArrowIcon from '../../../../public/images/arrow.svg';
import bathroom from '../../../../public/bathroom.jpg';

export default function HomeReferences() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickNext = () =>
    activeIndex === opinions.length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1);

  const handleClickPrev = () =>
    activeIndex === 0
      ? setActiveIndex(opinions.length - 1)
      : setActiveIndex(activeIndex - 1);

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
