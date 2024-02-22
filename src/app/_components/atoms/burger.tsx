'use client';

import { KeyboardEvent } from 'react';
import { BurgerProps } from '@/components/types';
import clsx from 'clsx';
import styles from '@/styles/atoms/burger.module.scss';

export default function Burger({ open, toggleOpen }: BurgerProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) =>
    e.key === 'Enter' && toggleOpen();

  const lineClass = clsx(styles.line, { [styles.open]: open });

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <div
      className={clsx(styles.burger, { [styles.open]: open })}
      onClick={toggleOpen}
      role='button'
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className={lineClass} />
      <div className={lineClass} />
      <div className={lineClass} />
    </div>
  );
}
