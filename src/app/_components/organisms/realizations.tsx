'use client';

import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import RealizationsContainer from '@/components/molecules/realizationsContainer';
import RedirectInfo from '@/components/organisms/redirectInfo';
import { RealizationItem } from '@/lib/types';
import { getSimpleRealizations } from '@/lib/api';
import { SIMPLE_REALIZATIONS, realizations } from '@/lib/constants';
import { routes } from '@/routes/routes';
import saloon from '../../../../public/saloon.png';

export default function Realizations() {
  const { push } = useRouter();
  const { data, error, isLoading } = useSWR<RealizationItem[]>(
    SIMPLE_REALIZATIONS,
    getSimpleRealizations,
  );
  return (
    <>
      <RealizationsContainer realizations={data || []} />
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
