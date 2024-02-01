'use client';

import styled from 'styled-components';
import { SorterProps } from '@/components/types';
import ArrowIcon from '../../../../public/images/arrow.svg';

const SortWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .left .right {
    position: absolute;
    transform-origin: 50% 50%;
  }
  .left {
    transform: rotate(90deg);
    width: 2rem;
  }
  .right {
    transform: rotate(-90deg);
    width: 2rem;
  }
`;

export default function Sorter({ onClick }: SorterProps) {
  return (
    <SortWrapper
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
