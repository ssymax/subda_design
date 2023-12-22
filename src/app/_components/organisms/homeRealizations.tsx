'use client';

import styled from 'styled-components';
import { redirect } from 'next/navigation';
import HomeRealizationItem from '@/components/molecules/homeRealizationItem';
import HomeHeader from '@/components/atoms/homeHeader';
import Line from '@/components/atoms/line';
import Button from '@/components/atoms/button';
import { routes } from '@/routes/routes';
import saloon from '../../../../public/saloon.png';

const dummyData = [
  {
    id: 1,
    image: saloon,
    type: 'Album zdjęć',
    year: 2022,
    title: 'Title A',
  },
  {
    id: 2,
    image: saloon,
    type: 'Wizualizacja',
    year: 2023,
    title: 'Title B',
  },
  {
    id: 3,
    image: saloon,
    type: 'Album zdjęć',
    year: 2021,
    title: 'Title C',
  },
  {
    id: 4,
    image: saloon,
    type: 'Wizualizacja',
    year: 2020,
    title: 'Title D',
  },
];

const description = `Każdy projekt jest wynikiem dokładnego zbadania potrzeb 
i dodania indywidualnego charakteru Państwa wnętrzom.`;

const Wrapper = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  grid-template-rows: auto;
  gap: 4rem;
  ${({ theme }) => theme.maxWidth.lg} {
    display: flex;
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export default function HomeRealizations() {
  return (
    <section>
      <HomeHeader
        smallHeader='Realizacje'
        header='Wybrane prace'
        description={description}
      />
      <Line />
      <Wrapper>
        {dummyData.map((e) => (
          <HomeRealizationItem
            key={e.id}
            id={e.id}
            image={e.image}
            title={e.title}
            year={e.year}
            type={e.type}
          />
        ))}
      </Wrapper>
      <Line />
      <ButtonWrapper>
        <Button
          large
          variant='primary'
          text='Zobacz pełne portfolio'
          onClick={() => redirect(routes.realizations)}
        />
      </ButtonWrapper>
    </section>
  );
}
