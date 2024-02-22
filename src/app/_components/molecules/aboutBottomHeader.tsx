import SimpleHeader from '@/components/atoms/simpleHeader';
import styles from '@/styles/molecules/aboutBottomHeader.module.scss';

export default function AboutBottomHeader() {
  return (
    <div className={styles.textWrapper}>
      <SimpleHeader header='Pasja do piękna' />
      <SimpleHeader header='Miłość do komfortu' />
    </div>
  );
}
