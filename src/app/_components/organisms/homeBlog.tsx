'use client';

import styled from 'styled-components';
import HomeHeader from '@/components/atoms/homeHeader';
import HomeBlogCard from '@/components/molecules/homeBlogCard';
import chairs from '../../../../public/chairs.png';

const description = `Przygotowałam dla Państwa artykuły, mogące pomóc w wielu 
aspektach urządzania mieszkań i innych przestrzeni.`;

const dummyData = [
  {
    id: '1',
    title: `Feng shui w praktyce – jak urządzić mieszkanie zgodnie z zasadami harmonii?`,
    image: chairs,
  },
  {
    id: '2',
    title: `ABC przechowywania: jak skutecznie 
    organizować przestrzeń w domu?`,
    image: chairs,
  },
  {
    id: '3',
    title: `Najnowsze trendy w projektowaniu wnętrz 
    na nadchodzący rok 2024`,
    image: chairs,
  },
];

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 6rem;
  ${({ theme }) => theme.maxWidth.lg} {
    column-gap: 3rem;
  }
`;

export default function HomeBlog() {
  return (
    <section>
      <HomeHeader
        smallHeader='Blog'
        header='Porady, trendy i wskazówki'
        description={description}
      />
      <Wrapper>
        {dummyData.map((d) => (
          <HomeBlogCard key={d.id} {...d} />
        ))}
      </Wrapper>
    </section>
  );
}
