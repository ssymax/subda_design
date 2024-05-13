'use client';

import { useRouter } from 'next/navigation';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import SimpleHeader from '@/components/atoms/simpleHeader';
import { routes } from '@/routes/routes';
import PaddingWrapper from '@/templates/paddingWrapper';
import Line from '@/components/atoms/line';
import styles from '@/styles/organisms/hero.module.scss';
import { heroText } from '@/lib/constants';

export default function Hero() {
  const { push } = useRouter();

  return (
    <section className={styles.container}>
      <PaddingWrapper additionalClass={styles.paddingWrap}>
        <div className={styles.headers}>
          <SimpleHeader alignLeft header='Projekty architektoniczne' />
          <SimpleHeader alignLeft header='z pięknym wnętrzem' />
        </div>
        <div className={styles.textAndButtons}>
          <span>{heroText}</span>
          <ButtonsGroup
            leftLabel='kontakt'
            rightLabel='oferta'
            onLeftClick={() => push(routes.contact)}
            onRightClick={() => push(routes.offer)}
          />
        </div>
        <Line />
      </PaddingWrapper>
    </section>
  );
}
