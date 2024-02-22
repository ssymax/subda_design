'use client';

import { useRouter } from 'next/navigation';
import RealizationsContainer from '@/components/molecules/realizationsContainer';
import RedirectInfo from '@/components/organisms/redirectInfo';
import Line from '@/components/atoms/line';
import { RealizationItem } from '@/lib/types';
import { realizations } from '@/lib/constants';
import { routes } from '@/routes/routes';
import saloon from '../../../../public/saloon.png';

export default function Realizations({ data }: { data: RealizationItem[] }) {
  const { push } = useRouter();

  return (
    <>
      <RealizationsContainer realizations={data} />
      <Line />
      <RedirectInfo
        header={realizations.redirectHeader}
        text={realizations.text}
        leftLabel='Oferta'
        rightLabel='Porozmawiajmy'
        onLeftClick={() => push(routes.offer)}
        onRightClick={() => push(routes.contact)}
        imageSrc={saloon}
        inverse
      />
    </>
  );
}
