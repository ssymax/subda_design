'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Button from '@/components/atoms/button';
import { HomeBlogCardProps } from '@/components/types';
import { routes } from '@/routes/routes';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  flex: 1;

  &:nth-child(2) {
    margin-top: 8%;
    ${({ theme }) => theme.maxWidth.lg} {
      margin-top: 0;
    }
  }

  &:nth-child(3) {
    margin-top: 16%;
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
  }

  img {
    width: auto;
    height: 100%;
    position: absolute;
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

export default function BlogCard({ slug, title, url }: HomeBlogCardProps) {
  const { push } = useRouter();

  return (
    <Card>
      <div>
        <Image
          loader={() => url}
          src={url}
          alt={title}
          sizes='100vw'
          width={500}
          height={300}
        />
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
