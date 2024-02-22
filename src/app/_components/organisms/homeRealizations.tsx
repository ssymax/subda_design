'use client';

import { useRouter } from 'next/navigation';
import HomeHeader from '@/components/atoms/homeHeader';
import Line from '@/components/atoms/line';
import RealizationsContainer from '@/components/molecules/realizationsContainer';
import Button from '@/components/atoms/button';
import { routes } from '@/routes/routes';
import { RealizationItem } from '@/lib/types';
import { realizationsDescription } from '@/lib/constants';
import styles from '@/styles/organisms/homeRealizations.module.scss';

export default function HomeRealizations({
  realizations,
}: {
  realizations: RealizationItem[];
}) {
  const { push } = useRouter();

  return (
    <section>
      <HomeHeader
        smallHeader='Realizacje'
        header='Wybrane prace'
        description={realizationsDescription}
      />
      <RealizationsContainer realizations={realizations} />
      <Line />
      <div className={styles.buttons}>
        <Button
          large
          variant='primary'
          text='Zobacz pełne portfolio'
          onClick={() => push(routes.realizations)}
        />
      </div>
    </section>
  );
}
