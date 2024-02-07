'use client';

import styled from 'styled-components';
import Button from '@/components/atoms/button';
import { useRouter } from 'next/navigation';
import { routes } from '@/routes/routes';
import ContentfulImage from '@/lib/contentfulImage';
import { HomeOfferItemMobileProps } from '@/components/types';

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
  height: ${({ $open }) => ($open ? 'calc(93rem - 32rem)' : 0)};
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

  div {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    line-height: 140%;
    font-size: 1.4rem;
  }
  img {
    max-width: 100%;
    height: auto;
    align-self: center;
    border-radius: 1rem;
  }
`;

export default function HomeOfferItemMobile({
  id,
  onClick,
  openId,
  text1st,
  text2nd,
  image,
  title,
  accordionNumber,
  index,
  itemsQuantity,
}: HomeOfferItemMobileProps) {
  const { push } = useRouter();
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
        <div>
          <span>{text1st}</span>
          <span>{text2nd}</span>
        </div>

        <Button
          tabIndex={openId !== id ? -1 : 0}
          variant='primary'
          text='Porozmawiajmy'
          onClick={() => push(routes.contact)}
        />
        <ContentfulImage width={600} height={400} src={image} alt={title} sizes='100vw' />
      </ContentWrap>
    </Wrap>
  );
}
