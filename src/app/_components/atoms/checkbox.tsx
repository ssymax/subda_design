'use client';

import { ChangeEvent } from 'react';
import clsx from 'clsx';
import { CheckboxProps } from '@/components/types';
import styles from '@/styles/atoms/checkbox.module.scss';
import CheckMark from '../../../../public/images/checkmark.svg';

export default function Checkbox({
  label,
  checked,
  onChecked,
  dark,
  onBlur,
  error,
}: CheckboxProps) {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChecked(e.target.checked);
  };

  return (
    <div className={clsx(styles.checkbox, { [styles.dark]: dark })}>
      <input
        className={clsx(styles.input, { [styles.dark]: dark })}
        type='checkbox'
        checked={checked}
        onChange={handleCheckboxChange}
        onBlur={onBlur}
      />
      {label}
      {checked && (
        <div className={clsx(styles.icon, { [styles.dark]: dark })}>
          <CheckMark />
        </div>
      )}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
