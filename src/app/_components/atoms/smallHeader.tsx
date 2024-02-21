import styles from '@/styles/atoms/smallHeader.module.scss';

export default function SmallHeader({ children }: { children: string }) {
  return <h1 className={styles.header}>{children}</h1>;
}
