'use client';

import clsx from 'clsx';
import styles from '@/styles/atoms/button.module.scss';
import { ButtonProps } from '@/components/types';
import ArrowIcon from '../../../../public/images/arrow.svg';

export default function Button({
  text,
  variant,
  large,
  Icon,
  onClick,
  tabIndex,
  withArrow = true,
  borderColor,
}: ButtonProps) {
  const btnClasses = clsx(styles.btn, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.large]: large,
  });

  return (
    <button
      className={btnClasses}
      style={{ borderColor: borderColor || '' }}
      onClick={onClick}
      tabIndex={tabIndex || 0}
      type='button'
    >
      {text}
      {Icon || (withArrow && <ArrowIcon />)}
    </button>
  );
}
