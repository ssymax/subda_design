'use client';

import styled from 'styled-components';
import { SorterProps } from '@/components/types';
import { Order } from '@/lib/types';
import { ASC, DESC } from '@/lib/constants';
import ArrowIcon from '../../../../public/images/arrow.svg';

const SortWrapper = styled.div<{ $order: Order }>`
  width: 4rem;
  height: 4rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  .left .right {
    position: absolute;
    transform-origin: 50% 50%;
  }
  .left {
    transform: rotate(90deg);
    width: 2rem;
    margin-right: -0.25rem;
    fill: ${({ $order, theme }) =>
      $order === DESC ? theme.colors.primary : theme.colors.grey};
  }
  .right {
    margin-left: -0.25rem;
    transform: rotate(-90deg);
    width: 2rem;
    fill: ${({ $order, theme }) =>
      $order === ASC ? theme.colors.primary : theme.colors.grey};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    svg {
      fill: ${({ theme }) => theme.colors.secondary};
      transition: all 0.15s ease-in-out;
    }
  }
`;

export default function Sorter({ onClick, order }: SorterProps) {
  return (
    <SortWrapper
      $order={order}
      role='button'
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <ArrowIcon className='left' />
      <ArrowIcon className='right' />
    </SortWrapper>
  );
}
