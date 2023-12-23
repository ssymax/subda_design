'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Button from '@/components/atoms/button';
import { redirect } from 'next/navigation';
import { routes } from '@/routes/routes';
import { HomeOfferItemMobileProps } from '../types';

const Wrap = styled.div`
  width: 100%;
`;

const Accordion = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  span {
    text-transform: uppercase;
  }
`;

const ContentWrap = styled.div<{ $open: boolean }>`
  height: ${({ $open }) => ($open ? '100%' : 0)};
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  row-gap: 3rem;
  overflow: hidden;
  transition: height 0.3s cubic-bezier(0.59, 0.18, 0.88, 0.88);
  img {
    width: 100%;
    height: auto;
  }
`;

export default function HomeOfferItemMobile({
  id,
  onClick,
  openId,
  text,
  image,
  title,
  accordionNumber,
}: HomeOfferItemMobileProps) {
  return (
    <Wrap>
      <Accordion role='button' tabIndex={0} onClick={onClick}>
        <span>{title}</span> <span>{accordionNumber}</span>
      </Accordion>
      <ContentWrap $open={id === openId}>
        <span>{text}</span>
        <Button
          tabIndex={openId !== id ? -1 : 0}
          variant='primary'
          text='Porozmawiajmy'
          onClick={() => redirect(routes.contact)}
        />
        <Image src={image} alt={title} />
      </ContentWrap>
    </Wrap>
  );
}
