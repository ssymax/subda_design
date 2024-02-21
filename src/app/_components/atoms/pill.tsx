import styles from '@/styles/atoms/pill.module.scss';

export default function Pill({ label, withSup }: { label: string; withSup?: boolean }) {
  return (
    <div className={styles.pill}>
      {label}
      {withSup && (
        <>
          m <sup>2</sup>
        </>
      )}
    </div>
  );
}
