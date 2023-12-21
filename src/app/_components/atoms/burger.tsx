'use client';

import { KeyboardEvent } from 'react';
import styled from 'styled-components';
import { BurgerProps } from '@/components/types';

const Wrapper = styled.div<{ $open: boolean }>`
  width: 4rem;
  height: ${({ $open }) => ($open ? '0.2rem' : '2.6rem ')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: ${({ theme }) => theme.zIndex.level10};
  transition: height 0.2s ease;
  div {
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.2s ease;
    transition-delay: 0.2s;
    user-select: none;
    transform: ${({ $open }) => ($open ? 'translateX(100%)' : 'translateX(0)')};
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }
`;

export default function Burger({ open, toggleOpen }: BurgerProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) =>
    e.key === 'Enter' && toggleOpen();

  return (
    <Wrapper
      $open={open}
      onClick={toggleOpen}
      role='button'
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div />
      <div />
      <div />
    </Wrapper>
  );
}
