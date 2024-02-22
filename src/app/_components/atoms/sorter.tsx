'use client';

import clsx from 'clsx';
import { SorterProps } from '@/components/types';
import { ASC, DESC } from '@/lib/constants';
import styles from '@/styles/atoms/sorter.module.scss';
import ArrowIcon from '../../../../public/images/arrow.svg';

export default function Sorter({ onClick, order }: SorterProps) {
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <div
      className={styles.wrapper}
      role='button'
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <ArrowIcon className={clsx(styles.left, { [styles.desc]: order === ASC })} />
      <ArrowIcon className={clsx(styles.right, { [styles.asc]: order === DESC })} />
    </div>
  );
}
