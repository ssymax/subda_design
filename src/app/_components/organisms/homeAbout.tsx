'use client';

import { useRouter } from 'next/navigation';
import PaddingWrapper from '@/templates/paddingWrapper';
import RedirectInfo from '@/components/organisms/redirectInfo';
import Line from '@/components/atoms/line';
import { routes } from '@/routes/routes';
import { aboutText } from '@/lib/constants';
import styles from '@/styles/organisms/homeAbout.module.scss';
import kitchen from '../../../../public/kitchen.jpg';

export default function HomeAbout() {
  const { push } = useRouter();
  return (
    <PaddingWrapper additionalClass={styles.padding}>
      <section>
        <RedirectInfo
          header='O mnie'
          text={aboutText}
          leftLabel='Więcej'
          rightLabel='Projekty'
          onLeftClick={() => push(routes.about)}
          onRightClick={() => push(routes.realizations)}
          imageSrc={kitchen}
        />
        <Line />
      </section>
    </PaddingWrapper>
  );
}
