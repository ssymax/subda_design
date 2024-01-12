'use client';

import styled from 'styled-components';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import SimpleHeader from '@/components/atoms/simpleHeader';
import RealizationsContainer from '@/components/molecules/realizationsContainer';
import RedirectInfo from '@/components/organisms/redirectInfo';
import { getSimpleRealizations } from '@/lib/api';
import { SIMPLE_REALIZATIONS } from '@/lib/constants';
import saloon from '../../../public/saloon.png';
import { routes } from '../_routes/routes';
import PaddingWrapper from '../_templates/paddingWrapper';

const Section = styled.section`
  margin-top: 3rem;
`;

const header = 'Zobacz najnowsze realizacje moich projektów';
const redirectHeader = 'Odkryj nieograniczone możliwości aranżacji Twoich wnętrz. ';
const text = `Moja oferta obejmuje wyjątkowe projekty kuchni, łazienek i inny`;

export default function Realizations() {
  const { push } = useRouter();
  const { data, error, isLoading } = useSWR(SIMPLE_REALIZATIONS, getSimpleRealizations);

  return (
    <PaddingWrapper>
      <Section>
        <SimpleHeader $fontSize='8rem' $paddingBottom='2rem'>
          {header}
        </SimpleHeader>
        <RealizationsContainer realizations={data} />
        <RedirectInfo
          header={redirectHeader}
          text={text}
          leftLabel='Oferta'
          rightLabel='Porozmawiajmy'
          onLeftClick={() => push(routes.offer)}
          onRightClick={() => push(routes.contact)}
          imageSrc={saloon}
          inverse
        />
      </Section>
    </PaddingWrapper>
  );
}
