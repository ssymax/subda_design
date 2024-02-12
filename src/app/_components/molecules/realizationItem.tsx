'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { RealizationItemProps } from '@/components/types';
import Button from '@/components/atoms/button';
import { routes } from '@/routes/routes';
import ContentfulImage from '@/lib/contentfulImage';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  text-transform: uppercase;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 1.8rem;
      ${({ theme }) => theme.maxWidth.lg} {
        font-size: 1.6rem;
      }
    }
  }
`;

const Title = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  ${({ theme }) => theme.maxWidth.lg} {
    font-size: 1.8rem;
  }
`;

export default function RealizationItem({
  mainImage,
  title,
  year,
  type,
  slug,
}: RealizationItemProps) {
  const { push } = useRouter();

  return (
    <Wrapper>
      <ContentfulImage src={mainImage} alt={title} width={800} height={600} />
      <div>
        <span>{type}</span>
        <span>{year}</span>
      </div>
      <div>
        <Title>{title}</Title>
        <Button
          variant='primary'
          text='Zobacz'
          onClick={() => push(`${routes.realizations}/${slug}`)}
        />
      </div>
    </Wrapper>
  );
}
