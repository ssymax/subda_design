'use client';

import Image from 'next/image';
import { redirect } from 'next/navigation';
import styled from 'styled-components';
import Button from '@/components/atoms/button';
import { HomeBlogCardProps } from '@/components/types';
import { routes } from '@/routes/routes';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  &:nth-child(2) {
    margin-top: 8%;
  }

  &:nth-child(3) {
    margin-top: 16%;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    border: 0.5px solid ${({ theme }) => theme.colors.primary};
    align-self: center;
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

export default function HomeBlogCard({ id, title, image }: HomeBlogCardProps) {
  return (
    <Card>
      <Image src={image} alt='' />
      <span>{title}</span>
      <Button
        variant='primary'
        text='Czytaj'
        onClick={() => redirect(`${routes.blog}/${id}`)}
      />
    </Card>
  );
}
