import clsx from 'clsx';
import { InfoItemProps } from '@/components/types';
import styles from '@/styles/atoms/infoItem.module.scss';

export default function InfoItem({ header, text, children, horizontal }: InfoItemProps) {
  return (
    <div className={styles.wrapper}>
      <h4>{header}</h4>
      <div className={clsx({ [styles.horizontal]: horizontal })}>{children || text}</div>
    </div>
  );
}
