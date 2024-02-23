import { HomeReferenceCardProps } from '@/components/types';
import styles from '@/styles/molecules/homeReferenceCard.module.scss';

export default function HomeReferenceCard({
  name,
  description,
  place,
}: HomeReferenceCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.description}>{description}</span>
      <span className={styles.name}>{`${name}, ${place}`}</span>
    </div>
  );
}
