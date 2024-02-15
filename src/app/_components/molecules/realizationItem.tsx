'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { RealizationItemProps } from '@/components/types';
import Button from '@/components/atoms/button';
import { routes } from '@/routes/routes';
import ContentfulImage from '@/lib/contentfulImage';
import { MouseEvent } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  text-transform: uppercase;
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

const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  img {
    transition: transform 1.5s ease;
    transform-origin: 50% 50%;
    width: 100%;
    height: auto;
    border-radius: 1rem;
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

  const handleMouseOver = (e: MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.children[0] as HTMLElement;
    img.style.transform = `scale(1.1)`;
  };

  const handleMouseOut = (e: MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.children[0] as HTMLElement;
    img.style.transform = 'scale(1)';
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const x = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * 50;
    const y = (e.nativeEvent.offsetY / e.currentTarget.offsetHeight) * 50;
    const img = e.currentTarget.children[0] as HTMLElement;
    img.style.transformOrigin = `${x}% ${y}%`;
  };

  return (
    <Wrapper>
      <ImageWrapper
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
      >
        <ContentfulImage src={mainImage} alt={title} width={800} height={600} />
      </ImageWrapper>
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
