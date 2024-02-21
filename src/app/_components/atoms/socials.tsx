import { SocialProps } from '@/components/types';
import styles from '@/styles/atoms/socials.module.scss';

export default function Socials({ socials }: SocialProps) {
  return (
    <div className={styles.wrap}>
      <span>Moje profile:</span>
      {socials.map((s) => (
        <a key={s.id} rel='noreferrer' target='_blank' href={s.href}>
          {s.name}
        </a>
      ))}
    </div>
  );
}
