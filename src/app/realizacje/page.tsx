'use client';

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import SimpleHeader from '@/components/atoms/simpleHeader';
import RealizationsContainer from '@/components/molecules/realizationsContainer';
import RedirectInfo from '@/components/organisms/redirectInfo';
import saloon from '../../../public/saloon.png';
import { routes } from '../_routes/routes';

const Section = styled.section`
  margin-top: 3rem;
`;

const header = 'Zobacz najnowsze realizacje moich projektów';
const redirectHeader = 'Odkryj nieograniczone możliwości aranżacji Twoich wnętrz. ';
const text = `Moja oferta obejmuje wyjątkowe projekty kuchni, łazienek i inny`;

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
  {
    id: uuidv4(),
    image: saloon,
    type: 'Another Type 1',
    year: 2019,
    title: 'Title E',
  },
  {
    id: uuidv4(),
    image: saloon,
    type: 'Another Type 2',
    year: 2018,
    title: 'Title F',
  },
  {
    id: uuidv4(),
    image: saloon,
    type: 'Another Type 1',
    year: 2017,
    title: 'Title G',
  },
  {
    id: uuidv4(),
    image: saloon,
    type: 'Another Type 2',
    year: 2016,
    title: 'Title H',
  },
  {
    id: uuidv4(),
    image: saloon,
    type: 'Another Type 1',
    year: 2015,
    title: 'Title I',
  },
  {
    id: uuidv4(),
    image: saloon,
    type: 'Another Type 2',
    year: 2014,
    title: 'Title J',
  },
];

export default function Realizations() {
  const { push } = useRouter();
  return (
    <Section>
      <SimpleHeader $fontSize='8rem' $paddingBottom='2rem'>
        {header}
      </SimpleHeader>
      <RealizationsContainer realizations={dummyData} />
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
  );
}
