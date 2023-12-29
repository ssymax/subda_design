'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import HomeHeader from '@/components/atoms/homeHeader';
import Line from '@/components/atoms/line';
import RealizationsContainer from '@/components/molecules/realizationsContainer';
import Button from '@/components/atoms/button';
import { routes } from '@/routes/routes';
import saloon from '../../../../public/saloon.png';

const dummyData = [
  {
    id: uuidv4(),
    image: saloon,
    type: 'Album zdjęć',
    year: 2022,
    title: 'Title A',
  },
  {
    id: uuidv4(),
    image: saloon,
    type: 'Wizualizacja',
    year: 2023,
    title: 'Title B',
  },
  {
    id: uuidv4(),
    image: saloon,
    type: 'Album zdjęć',
    year: 2021,
    title: 'Title C',
  },
  {
    id: uuidv4(),
    image: saloon,
    type: 'Wizualizacja',
    year: 2020,
    title: 'Title D',
  },
];

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
  return (
    <section>
      <HomeHeader
        smallHeader='Realizacje'
        header='Wybrane prace'
        description={description}
      />
      <RealizationsContainer realizations={dummyData} />
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
