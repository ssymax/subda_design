/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { forwardRef } from 'react';
import { GalleryButtonsProps } from '@/components/types';
import styles from '@/styles/molecules/galleryButtons.module.scss';
import ArrowIcon from '../../../../public/images/arrow.svg';

const GalleryButtons = forwardRef<HTMLDivElement, GalleryButtonsProps>(
  ({ onPrevClick, onNextClick }, ref) => {
    return (
      <div className={styles.wrapper} ref={ref}>
        <button className={styles.button} onClick={onPrevClick}>
          <ArrowIcon className={styles.leftArrow} />
        </button>
        <button className={styles.button} onClick={onNextClick}>
          <ArrowIcon className={styles.rightArrow} />
        </button>
      </div>
    );
  },
);

export default GalleryButtons;
