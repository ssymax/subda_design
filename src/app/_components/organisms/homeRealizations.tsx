'use client';

import styled from 'styled-components';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import HomeHeader from '@/components/atoms/homeHeader';
import Line from '@/components/atoms/line';
import RealizationsContainer from '@/components/molecules/realizationsContainer';
import Button from '@/components/atoms/button';
import { routes } from '@/routes/routes';
import { getHomeRealizations } from '@/lib/api';
import { HOME_REALIZATIONS } from '../../../../lib/constants';

const description = `Każdy projekt jest wynikiem dokładnego zbadania potrzeb 
i dodania indywidualnego charakteru Państwa wnętrzom.`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export default function HomeRealizations() {
  const { push } = useRouter();
  const {
    data: realizations,
    error,
    isLoading,
  } = useSWR(HOME_REALIZATIONS, getHomeRealizations);

  return (
    <section>
      <HomeHeader
        smallHeader='Realizacje'
        header='Wybrane prace'
        description={description}
      />
      <RealizationsContainer realizations={realizations} />
      <Line />
      <ButtonWrapper>
        <Button
          large
          variant='primary'
          text='Zobacz pełne portfolio'
          onClick={() => push(routes.realizations)}
        />
      </ButtonWrapper>
    </section>
  );
}
