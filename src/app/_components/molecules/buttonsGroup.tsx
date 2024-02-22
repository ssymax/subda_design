'use client';

import Button from '@/components/atoms/button';
import { ButtonsGroupProps } from '@/components/types';
import styles from '@/styles/molecules/buttonsGroup.module.scss';

export default function ButtonsGroup({
  leftLabel,
  rightLabel,
  onLeftClick,
  onRightClick,
}: ButtonsGroupProps) {
  return (
    <div className={styles.group}>
      <Button variant='secondary' text={leftLabel} onClick={onLeftClick} />
      <Button variant='primary' text={rightLabel} onClick={onRightClick} />
    </div>
  );
}
