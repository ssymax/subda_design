'use client';

import { memo } from 'react';
import { useRouter } from 'next/navigation';
import styled, { keyframes } from 'styled-components';
import Button from '@/components/atoms/button';
import { HomeBlogCardProps } from '@/components/types';
import { routes } from '@/routes/routes';
import ContentfulImage from '@/lib/contentfulImage';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  flex: 1;
  animation: ${fadeIn} 0.3s ease-out;
  position: relative;

  &:nth-child(3n + 2) {
    margin-top: 12rem;
    ${({ theme }) => theme.maxWidth.lg} {
      margin-top: 0;
    }
  }

  &:nth-child(3n) {
    margin-top: 26rem;
    ${({ theme }) => theme.maxWidth.lg} {
      margin-top: 0;
    }
  }

  div {
    position: relative;
    height: 70rem;
    overflow: hidden;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    ${({ theme }) => theme.maxWidth.lg} {
      height: 50rem;
    }
  }

  img {
    width: auto;
    height: 100%;
    position: absolute;
    border-radius: 1rem;
    user-select: none;
  }

  span {
    width: 80%;
    font-size: 2rem;
    ${({ theme }) => theme.maxWidth.lg} {
      font-weight: 600;
      line-height: 130%;
    }
  }
  button {
    align-self: flex-end;
  }
`;

function BlogCard({ id, slug, title, url }: HomeBlogCardProps) {
  const { push } = useRouter();

  return (
    <Card id={id}>
      <div>
        <ContentfulImage src={url} alt={title} sizes='100vw' width={500} height={300} />
      </div>
      <span>{title}</span>
      <Button
        variant='primary'
        text='Czytaj'
        onClick={() => push(`${routes.blog}/${slug}`)}
      />
    </Card>
  );
}

export default memo(BlogCard);
