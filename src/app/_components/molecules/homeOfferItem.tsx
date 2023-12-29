'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { routes } from '@/routes/routes';
import { HomeOfferItemProps } from '@/components/types';
import Button from '@/components/atoms/button';

const Wrap = styled.div`
  display: flex;
  overflow: hidden;
`;

const Accordion = styled.div<{
  $accordionWidth: number;
  $isFirst: boolean;
  $isLast: boolean;
  $open: boolean;
}>`
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  pointer-events: ${({ $open }) => $open && 'none'};
  padding: 1rem;
  width: ${({ $accordionWidth }) => `${$accordionWidth}px`};
  position: relative;
  border-top-right-radius: ${({ $open, $isLast, $isFirst }) =>
    !$open && $isLast && !$isFirst ? '1rem' : 0};
  border-bottom-right-radius: ${({ $open, $isLast, $isFirst }) =>
    !$open && $isLast && !$isFirst ? '1rem' : 0};
  border-top-left-radius: ${({ $isFirst }) => $isFirst && '1rem'};
  border-bottom-left-radius: ${({ $isFirst }) => $isFirst && '1rem'};
  border: 0.5px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.15s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
  :first-child {
    font-size: 4rem;
  }
  :last-child {
    display: inline;
    position: absolute;
    bottom: 4rem;
    transform: rotate(-90deg);
    white-space: nowrap;
  }
`;

const ContentWrap = styled.div<{
  $open: boolean;
  $containerWidth?: number;
  $accordionsWidth?: number;
  $isLast: boolean;
  $isFirst: boolean;
}>`
  display: flex;
  justify-content: space-between;
  width: ${({ $open, $containerWidth, $accordionsWidth }) =>
    $open && $containerWidth ? `calc(${$containerWidth}px - ${$accordionsWidth}px)` : 0};
  transition: width 0.3s cubic-bezier(0.59, 0.18, 0.88, 0.88);
  border-top-right-radius: ${({ $open, $isLast }) => ($open && $isLast ? '1rem' : 0)};
  border-bottom-right-radius: ${({ $open, $isLast }) => ($open && $isLast ? '1rem' : 0)};
  border-top: 0.5px solid ${({ theme }) => theme.colors.primary};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.primary};
  border-right: ${({ $open, $isLast, theme }) =>
    $open && $isLast && `0.5px solid ${theme.colors.primary}`};
`;

const HalfContent = styled.div<{ $padding: number; $responsiveWidth?: number }>`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${({ $responsiveWidth }) => `${$responsiveWidth}px`};
    padding: ${({ $padding }) => `${$padding}px`};
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default function HomeOfferItem({
  id,
  onClick,
  openId,
  accordionNumber,
  text,
  image,
  title,
  containerWidth,
  itemsQuantity,
  accordionWidth,
  padding,
  index,
}: HomeOfferItemProps) {
  const accordionsWidth = itemsQuantity * accordionWidth;
  const responsiveHalfWidth =
    containerWidth && (containerWidth - accordionWidth) / 2 - 4 * padding;
  const isFirst = index === 0;
  const isLast = index === itemsQuantity - 1;

  return (
    <Wrap>
      <Accordion
        $accordionWidth={accordionWidth}
        $open={openId === id}
        $isFirst={isFirst}
        $isLast={isLast}
        role='button'
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onClick();
        }}
      >
        <span>{accordionNumber}</span>
        <span>{title}</span>
      </Accordion>
      <ContentWrap
        $open={openId === id}
        $containerWidth={containerWidth}
        $accordionsWidth={accordionsWidth}
        $isFirst={isFirst}
        $isLast={isLast}
      >
        <HalfContent $padding={padding} $responsiveWidth={responsiveHalfWidth}>
          <div>
            <span>{text}</span>
            <Button
              tabIndex={openId !== id ? -1 : 0}
              variant='primary'
              text='Porozmawiajmy'
              onClick={() => redirect(routes.contact)}
            />
          </div>
        </HalfContent>
        <HalfContent $padding={padding} $responsiveWidth={responsiveHalfWidth}>
          <div>
            <Image src={image} alt={title} />
          </div>
        </HalfContent>
      </ContentWrap>
    </Wrap>
  );
}
