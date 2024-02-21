'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';
import { InputProps } from '@/components/types';
import styles from '@/styles/atoms/input.module.scss';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, placeholder, width, name, dark, onChange, onBlur, error, value }: InputProps,
    ref,
  ) => {
    const wrapperClass = clsx(styles.wrapper, {
      [styles['wrapper--error']]: error,
      [styles['wrapper--dark']]: dark,
    });

    const labelClass = clsx(styles.label, {
      [styles['label--dark']]: dark,
    });

    const inputClass = clsx(styles.input, {
      [styles['input--dark']]: dark,
    });

    return (
      <div className={wrapperClass} style={{ width: `${width}` }}>
        <label className={labelClass} htmlFor={name}>
          {label}
        </label>
        <input
          className={inputClass}
          id={name}
          ref={ref}
          type='text'
          placeholder={placeholder}
          width={width}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  },
);

export default Input;
