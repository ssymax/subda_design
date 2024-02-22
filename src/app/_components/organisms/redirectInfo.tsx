import Image from 'next/image';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import { RedirectInfoProps } from '@/components/types';
import styles from '@/styles/organisms/redirectInfo.module.scss';
import clsx from 'clsx';

export default function RedirectInfo({
  header,
  text,
  leftLabel,
  rightLabel,
  onLeftClick,
  onRightClick,
  imageSrc,
  inverse,
}: RedirectInfoProps) {
  const containerClass = clsx(styles.container, {
    [styles['container-reverse']]: inverse,
  });

  return (
    <div className={containerClass}>
      <div>
        <h3>{header}</h3>
        <p>{text}</p>
        <ButtonsGroup
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />
      </div>
      <div className={styles.image}>
        <Image className={styles.image} src={imageSrc} alt={header} priority />
      </div>
    </div>
  );
}
