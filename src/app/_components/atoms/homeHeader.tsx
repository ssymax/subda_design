import { HomeHeaderProps } from '@/components/types';
import SmallHeader from '@/components/atoms/smallHeader';
import styles from '@/styles/atoms/homeHeader.module.scss';

export default function HomeHeader({
  smallHeader,
  header,
  description,
}: HomeHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <SmallHeader>{smallHeader}</SmallHeader>
      <div className={styles.headerWithDescription}>
        <h2 className={styles.header}>{header}</h2>
        <p className={styles.description}>{description || ''}</p>
      </div>
    </div>
  );
}
