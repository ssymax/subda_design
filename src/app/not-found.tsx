import styles from '@/styles/templates/notFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h2>404</h2>
      <h3>Nie znaleziono strony</h3>
    </div>
  );
}
