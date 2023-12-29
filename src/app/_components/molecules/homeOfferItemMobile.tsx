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

const Accordion = styled.div<{ $open: boolean; $isFirst: boolean; $isLast: boolean }>`
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  border: 0.5px solid ${({ theme }) => theme.colors.primary};
  border-top-left-radius: ${({ $isFirst }) => $isFirst && '1rem'};
  border-top-right-radius: ${({ $isFirst }) => $isFirst && '1rem'};
  border-bottom-left-radius: ${({ $isLast, $open }) => $isLast && !$open && '1rem'};
  border-bottom-right-radius: ${({ $isLast, $open }) => $isLast && !$open && '1rem'};
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  span {
    text-transform: uppercase;
  }
`;

const ContentWrap = styled.div<{ $open: boolean; $isLast: boolean; $isFirst: boolean }>`
  height: ${({ $open }) => ($open ? 'calc(80rem - 32rem)' : 0)};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  row-gap: 3rem;
  overflow: clip;
  padding: 0rem 1rem;
  transition: height 0.3s cubic-bezier(0.59, 0.18, 0.88, 0.88);
  border-left: 0.5px solid ${({ theme }) => theme.colors.primary};
  border-right: 0.5px solid ${({ theme }) => theme.colors.primary};
  border-bottom: ${({ theme, $isLast, $open }) =>
    $open && $isLast && `0.5px solid ${theme.colors.primary}`};
  border-bottom-left-radius: ${({ $isLast }) => $isLast && '1rem'};
  border-bottom-right-radius: ${({ $isLast }) => $isLast && '1rem'};
  img {
    max-width: 100%;
    height: auto;
    align-self: center;
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
  index,
  itemsQuantity,
}: HomeOfferItemMobileProps) {
  const isFirst = index === 0;
  const isLast = index === itemsQuantity - 1;
  return (
    <Wrap>
      <Accordion
        $open={id === openId}
        $isFirst={isFirst}
        $isLast={isLast}
        role='button'
        tabIndex={0}
        onClick={onClick}
      >
        <span>{title}</span> <span>{accordionNumber}</span>
      </Accordion>
      <ContentWrap $isLast={isLast} $open={id === openId} $isFirst={isFirst}>
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
